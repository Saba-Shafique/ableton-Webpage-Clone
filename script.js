const icon = document.querySelector(".down-icon");
const menutoggle = document.querySelector(".menu-toggle");
const menuMobile = document.querySelector(".menu");
const logo = document.querySelector(".logo");

// Dropdown Menu
menutoggle.addEventListener("click", () => {
  icon.classList.toggle("up-icon");
  menuMobile.style.top = menuMobile.style.top === "0px" ? "-100%" : "0px";
});
