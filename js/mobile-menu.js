const hamburgerMenuButton = document.querySelector(".hamburger-button");
console.log(hamburgerMenuButton);
const closeModalButton = document.querySelector(".close-modal-button");
const modalWindow = document.querySelector("#mobile-navbar-menu");
const navbarList = document.querySelector(".list");

hamburgerMenuButton.addEventListener("click", () => {
  modalWindow.classList.toggle("mobile-navbar-menu");
  modalWindow.classList.add("mobile-navbar-menu-visible");
});

closeModalButton.addEventListener("click", () => {
  modalWindow.classList.add("mobile-navbar-menu");
  modalWindow.classList.toggle("mobile-navbar-menu-visible");
});

navbarList.addEventListener("click", () => {
  modalWindow.classList.add("mobile-navbar-menu");
});
