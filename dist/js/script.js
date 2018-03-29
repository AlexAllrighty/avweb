'use strict';

var cross = document.querySelector('.cross');
var modalList = document.querySelectorAll('.portfolio__modal');
var linkMishka = document.querySelector('.portfolio__item--mishka');
var modalMishka = document.querySelector('.portfolio__modal--mishka');
var linkKeksobooking = document.querySelector('.portfolio__item--keksobooking');
var modalKeksobooking = document.querySelector('.portfolio__modal--keksobooking');

var openModal = function (link, modal) {
  link.addEventListener('click', function () {
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden')
    }
  });

  document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      closeModal();
    }
  });

  document.addEventListener('click', function (evt) {
    var target = evt.target;
    if(target.classList.contains('cross')) {
      closeModal();
    };
  });
}

var closeModal = function () {
  modalList.forEach(function (item) {
    if (!item.classList.contains('hidden')) {
      item.classList.add('hidden');
    }
  });
};






/*
document.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("index-modal-writeus-show")) {
      popup.classList.remove("index-modal-writeus-show");
    }
  }
});*/

openModal(linkMishka, modalMishka);
openModal(linkKeksobooking, modalKeksobooking);
