'use strict'

    var menuOpenButton = document.querySelector(".main-nav__toggle");
    var mainNavItem = document.querySelector(".main-nav");

    mainNavItem.classList.remove("main-nav--nojs");
    menuOpenButton.addEventListener("click", function(evt) {
      if (mainNavItem.classList.contains("main-nav--closed")) {
        mainNavItem.classList.remove("main-nav--closed");
        mainNavItem.classList.add("main-nav--opened");
      }
      else {
        mainNavItem.classList.remove("main-nav--opened");
        mainNavItem.classList.add("main-nav--closed");
      }
});
