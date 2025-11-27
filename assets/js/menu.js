document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".site-nav");
  const button = document.querySelector(".hamburger");

  if (!nav || !button) return;

  button.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
});
