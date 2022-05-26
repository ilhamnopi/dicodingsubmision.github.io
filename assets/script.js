"use stritc";
const searchInput = document.getElementById("search-box-input");
const buttonSearch = document.querySelector(".search-button");

searchInput.onfocus = function () {
  buttonSearch.style.backgroundColor = "#742ff6";
  buttonSearch.style.color = "#fff";
};
searchInput.onblur = function () {
  buttonSearch.style.backgroundColor = "";
  buttonSearch.style.color = "#742ff6";
};

const toggler = document.querySelector(".toggler");
const closeButton = document.querySelector(".close");
const menu = document.querySelector(".menu");
const rightNavigation = document.querySelector(".right-navigation");

toggler.onclick = function () {
  menu.classList.add("active");
  rightNavigation.classList.add("active");
};
closeButton.onclick = function () {
  menu.classList.remove("active");
  rightNavigation.classList.remove("active");
};

const toggleDropdown = document.querySelector(".user_profile");
const dropdownUser = document.querySelector(".dropdown-user");

toggleDropdown.onclick = function () {
  dropdownUser.classList.toggle("active");
};
