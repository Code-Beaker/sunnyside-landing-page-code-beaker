import "./css/style.css";

const navToggleButton = document.getElementById("navToggleButton");
const navLinks = document.querySelector(".nav__links");

navToggleButton.addEventListener("click", () => {
  navToggleButton.classList.toggle("nav__toggle-btn-focus");
  navLinks.classList.toggle("nav__links-show");
});
