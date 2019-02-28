var buttonFeedback = document.querySelector(".contact-button");
var popupFeedback = document.querySelector(".modal-feedback");
var close = popupFeedback.querySelector(".modal-close");

var slide1 = document.querySelector('.slide-1');
var slide2 = document.querySelector('.slide-2');
var slide3 = document.querySelector('.slide-3');
var thumbnailsSlides1 = document.querySelectorAll('.slides-thumbnail-big-1');
var thumbnailsSlides2 = document.querySelectorAll('.slides-thumbnail-big-2');
var thumbnailsSlides3 = document.querySelectorAll('.slides-thumbnail-big-3');
var slides = document.querySelectorAll('.slides');

var slideService1 = document.querySelector('.wrapper-service-1');
var slideService2 = document.querySelector('.wrapper-service-2');
var slideService3 = document.querySelector('.wrapper-service-3');
var thumbnailServicesDelivery = document.querySelectorAll('.services-button-delivery');
var thumbnailServicesWarranty = document.querySelectorAll('.services-button-warranty');
var thumbnailServicesCredit = document.querySelectorAll('.services-button-credit');
var slideServices = document.querySelectorAll('.wrapper-services');

//первый слайдер

for (var i = 0; i < thumbnailsSlides1.length; i++) {
  thumbnailsSlides1[i].addEventListener("click", function(evt) {
    for (var j = 0; j < slides.length; j++) {
      slides[j].classList.remove("slide-show");
    }
    slide1.classList.add("slide-show");
  });
}
for (var i = 0; i < thumbnailsSlides2.length; i++) {
  thumbnailsSlides2[i].addEventListener("click", function(evt) {
    for (var j = 0; j < slides.length; j++) {
      slides[j].classList.remove("slide-show");
    }
    slide2.classList.add("slide-show");
  });
}
for (var i = 0; i < thumbnailsSlides3.length; i++) {
  thumbnailsSlides3[i].addEventListener("click", function(evt) {
    for (var j = 0; j < slides.length; j++) {
      slides[j].classList.remove("slide-show");
    }
    slide3.classList.add("slide-show");
  });
}

//второй слайдер

for (var i = 0; i < thumbnailServicesDelivery.length; i++) {
  thumbnailServicesDelivery[i].addEventListener("click", function(evt) {
    for (var j = 0; j < slideServices.length; j++) {
      slideServices[j].classList.remove("slide-show");
    }
    slideService1.classList.add("slide-show");
  });
}
for (var i = 0; i < thumbnailServicesWarranty.length; i++) {
  thumbnailServicesWarranty[i].addEventListener("click", function(evt) {
    for (var j = 0; j < slideServices.length; j++) {
      slideServices[j].classList.remove("slide-show");
    }
    slideService2.classList.add("slide-show");
  });
}
for (var i = 0; i < thumbnailServicesCredit.length; i++) {
  thumbnailServicesCredit[i].addEventListener("click", function(evt) {
    for (var j = 0; j < slideServices.length; j++) {
      slideServices[j].classList.remove("slide-show");
    }
    slideService3.classList.add("slide-show");
  });
}

//попап обратной связи

if (buttonFeedback) {
  buttonFeedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-show");
  });
}
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupFeedback.classList.remove("modal-show");
  // popupFeedback.classList.remove("modal-error");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupFeedback.classList.contains("modal-show")) {
      popupFeedback.classList.remove("modal-show");
      // popupFeedback.classList.remove("modal-error");
    }
  }
});
// popupFeedback.addEventListener("submit", function(evt) {
//   if (!userName.value || !userEmail.value || !userText.value) {
//     evt.preventDefault();
//     popupFeedback.classList.remove("modal-error");
//     popupFeedback.offsetWidth = popupFeedback.offsetWidth;
//     popupFeedback.classList.add("modal-error");
//     if (!userName.value) {
//       userName.focus();
//     } else if (!userEmail.value) {
//       userEmail.focus();
//     } else if (!userText.value) {
//       userText.focus();
//     }
//   }
// });
