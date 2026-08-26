const supportConfig = window.DINORUN_SITE_CONFIG || {};
const supportEmails = Array.isArray(supportConfig.supportEmails) && supportConfig.supportEmails.length
  ? supportConfig.supportEmails
  : ["38784757@qq.com", "leehonxuan@gmail.com"];
const supportForm = document.querySelector("[data-support-form]");
const supportStatus = document.querySelector("[data-support-status]");

function currentSupportLanguage() {
  return document.documentElement.lang.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function updateTopicLabels() {
  const language = currentSupportLanguage();
  document.querySelectorAll("[data-topic-en]").forEach((option) => {
    option.textContent = option.dataset[`topic${language === "zh" ? "Zh" : "En"}`];
  });
}

document.querySelectorAll(".lang-toggle").forEach((button) => {
  button.addEventListener("click", () => window.setTimeout(updateTopicLabels, 0));
});

document.querySelectorAll("[data-support-email-index]").forEach((link) => {
  const email = supportEmails[Number(link.dataset.supportEmailIndex)];
  if (email) {
    link.href = `mailto:${email}`;
    link.textContent = email;
  }
});

supportForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(supportForm);
  const recipient = supportEmails.join(",");
  const language = currentSupportLanguage();
  const subjectPrefix = language === "zh" ? "Dinorun 客户支持" : "Dinorun support request";
  const subject = `${subjectPrefix}: ${data.get("topic")}`;
  const body = [`Name: ${data.get("name")}`, `Email: ${data.get("email")}`, `Topic: ${data.get("topic")}`, `Order number: ${data.get("order") || "(not provided)"}`, "", String(data.get("message"))].join("\n");
  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  if (supportStatus) supportStatus.textContent = language === "zh" ? "邮件草稿已准备，请在邮件应用中确认并发送。" : "Your email draft is ready. Review it and click Send in your email application.";
});

updateTopicLabels();
