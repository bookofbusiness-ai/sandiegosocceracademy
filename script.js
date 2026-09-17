const FORM_ENDPOINT = "https://sdsa.app.n8n.cloud/webhook/be12dcdb-3ec3-4fab-b5c2-e1b23750500d";
const themeOrder = ["system", "light", "dark"];

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".primary-nav");
const themeButton = document.querySelector("[data-theme-toggle]");
const shareButton = document.querySelector("[data-share]");
const toast = document.querySelector("[data-toast]");
const form = document.querySelector("[data-callback-form]");
const formStatus = document.querySelector("[data-form-status]");

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const currentTheme = () => localStorage.getItem("sdsa-theme") || "system";

function applyTheme(theme) {
  const resolved =
    theme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme;

  document.documentElement.dataset.theme = resolved;
  themeButton.textContent = theme === "system" ? "Theme: Auto" : `Theme: ${theme === "dark" ? "Dark" : "Light"}`;
}

applyTheme(currentTheme());

themeButton.addEventListener("click", () => {
  const index = themeOrder.indexOf(currentTheme());
  const nextTheme = themeOrder[(index + 1) % themeOrder.length];
  localStorage.setItem("sdsa-theme", nextTheme);
  applyTheme(nextTheme);
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (currentTheme() === "system") applyTheme("system");
});

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

const headerObserver = new IntersectionObserver(([entry]) => {
  header.classList.toggle("is-scrolled", !entry.isIntersecting);
});

headerObserver.observe(document.querySelector("#top"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: "San Diego Soccer Academy",
    text: "Youth soccer training with a community mission.",
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("Link copied to your clipboard.");
  } catch {
    showToast("Copy the page address from your browser to share it.");
  }
});

function setFormStatus(message, type = "") {
  formStatus.textContent = message;
  formStatus.className = `form-status${type ? ` is-${type}` : ""}`;
}

function validateForm() {
  let isValid = true;
  form.querySelectorAll("[required]").forEach((field) => {
    field.classList.remove("field-invalid");
    if (!field.checkValidity()) {
      field.classList.add("field-invalid");
      isValid = false;
    }
  });
  return isValid;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  setFormStatus("");

  if (!validateForm()) {
    setFormStatus("Please complete each required field and check your email address.", "error");
    form.querySelector(".field-invalid")?.focus();
    return;
  }

  const submitButton = form.querySelector("button[type='submit']");
  const data = new FormData(form);
  const payload = {
    parentName: data.get("parentName"),
    playerName: data.get("playerName"),
    playerAge: data.get("playerAge"),
    phoneNumber: data.get("phone"),
    email: data.get("email"),
    preferredDay: data.get("preferredDay"),
    message: data.get("message"),
    submittedAt: new Date().toISOString(),
  };

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  setFormStatus("Sending your request...");

  if (["localhost", "127.0.0.1"].includes(window.location.hostname)) {
    await new Promise((resolve) => window.setTimeout(resolve, 450));
    setFormStatus("Preview mode: the form is valid and ready for the live intake system.", "success");
    submitButton.disabled = false;
    submitButton.textContent = "Request a Call";
    return;
  }

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Request failed");

    form.reset();
    setFormStatus("Thanks. The academy will contact you within 24 hours.", "success");
  } catch {
    setFormStatus("We could not send your request. Please call 619-289-7214 or try again.", "error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Request a Call";
  }
});
