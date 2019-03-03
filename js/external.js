var buttonFeedback = document.querySelector(".contact-button");
var popupFeedback = document.querySelector(".modal-feedback");
var close = popupFeedback.querySelector(".modal-close");

var thumbnailsSlides = document.querySelectorAll('.slides-thumbnail-big');
var slides = document.querySelectorAll('.slides');

var thumbnailServices = document.querySelectorAll('.services-button');
var thumbnailServicesWrapper = document.querySelectorAll('.wrapper-services-button');
var slideServices = document.querySelectorAll('.services-content');

var userName = popupFeedback.querySelector("[id=feedback-name]");
var userEmail = popupFeedback.querySelector("[id=feedback-email]");
var userText = popupFeedback.querySelector("[id=feedback-text]");

var linkMap = document.querySelector(".link-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close-map");

//первый слайдер
var addThumbnailClickHandler = function(number) {
  thumbnailsSlides[number].addEventListener("click", function() {
    for (var j = 0; j < slides.length; j++) {
      slides[j].classList.remove("slide-show");
      thumbnailsSlides[j].classList.remove("slides-thumbnail-big-current");
    }
    slides[number].classList.add("slide-show");
    thumbnailsSlides[number].classList.add("slides-thumbnail-big-current");
  });
};

for (var i = 0; i < thumbnailsSlides.length; i++) {
  addThumbnailClickHandler(i);
}

//второй слайдер
var addThumbnailServiceClickHandler = function(number) {
  thumbnailServices[number].addEventListener("click", function() {
    for (var j = 0; j < thumbnailServices.length; j++) {
      slideServices[j].classList.remove("slide-show");
      thumbnailServices[j].classList.remove("services-button-current");
      thumbnailServicesWrapper[j].classList.remove("services-button-current");
    }
    slideServices[number].classList.add("slide-show");
    thumbnailServices[number].classList.add("services-button-current");
    thumbnailServicesWrapper[number].classList.add("services-button-current");
  });
};

for (var i = 0; i < thumbnailServices.length; i++) {
  addThumbnailServiceClickHandler(i);
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
  popupFeedback.classList.remove("modal-error");
});
//закрытие попапов по клавише esc
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupFeedback.classList.contains("modal-show")) {
      popupFeedback.classList.remove("modal-show");
      popupFeedback.classList.remove("modal-error");
    }
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
  }
});
//анимация попапа обратной связи
popupFeedback.addEventListener("submit", function(evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-error");
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    popupFeedback.classList.add("modal-error");
    if (!userName.value) {
      userName.focus();
    } else if (!userEmail.value) {
      userEmail.focus();
    } else if (!userText.value) {
      userText.focus();
    }
  }
});
//попап карты
if (linkMap) {
  linkMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
  });
}
closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});
