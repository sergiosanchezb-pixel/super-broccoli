// Wait until the HTML is loaded
document.addEventListener("DOMContentLoaded", () => {
  const helloBtn = document.getElementById("helloBtn");
  const message = document.getElementById("message");

  if (helloBtn && message) {
    helloBtn.addEventListener("click", () => {
      message.textContent = "Hello! JavaScript is working on this page 🎉";
    });
  }
});
