const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

// Toggle the navigation menu on click
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  // Animate burger icon
  burger.classList.toggle("toggle");
});
