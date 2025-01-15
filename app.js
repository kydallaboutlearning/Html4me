const menu = document.querySelector("#mobile-menu");
const menulinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menulinks.classList.toggle("active");
});

// Adding javascrippt to clone the logo
const logos = document.querySelector(".rotating-logos__track").cloneNode(true);
document.querySelector(".rotating-logos__container").appendChild(logos);
