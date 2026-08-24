let legalLanguage = localStorage.getItem("dinorun-language") || (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");

function applyLegalLanguage(nextLanguage) {
  legalLanguage = nextLanguage === "zh" ? "zh" : "en";
  document.documentElement.lang = legalLanguage === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-copy-lang]").forEach((section) => {
    section.hidden = section.dataset.copyLang !== legalLanguage;
  });
  document.querySelectorAll("[data-lang-label]").forEach((node) => {
    node.textContent = legalLanguage === "zh" ? "EN" : "中文";
  });
  const title = document.body.dataset[legalLanguage === "zh" ? "titleZh" : "titleEn"];
  if (title) document.title = `${title} | Dinorun`;
  localStorage.setItem("dinorun-language", legalLanguage);
}

document.querySelectorAll(".lang-toggle").forEach((button) => {
  button.addEventListener("click", () => applyLegalLanguage(legalLanguage === "zh" ? "en" : "zh"));
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

applyLegalLanguage(legalLanguage);
