var photos = [
  'img/slider-1.png',
  'img/slider-2.png',
  'img/slider-3.png'
];

var photosClass = [
  'slides-img-first',
  'slides-img-second',
  'slides-img-third'
];

var photosWidth = [
    '384',
    '345',
    '526'
];
var photosHeight = [
    '486',
    '485',
    '334'
];
var textsSlides = [
'Делай селфи, \n как Бен Стиллер!',
'Худеем, \n правильно!',
'Порхает как бабочка, жалит как пчела!'
];
var textItemsSlides = [
'Самая длинная палка для селфи доступна в нашем магазине. Восемь (Восемь, Карл!) метров длиной и весом всего 5 килограмм.',
'Мотивирующие фитнес-браслеты помогут найти в себе силы \n не пропускать занятия и соблюдать диету.',
'Этот обычный, на первый взгляд, квадрокоптер оснащен мощным \n лазером, замаскированным под стандартную камеру.'
];

var imgServices = [
  'services-image-delivery',
  'services-image-warranty',
  'services-image-credit'
];
var texts = [
'Доставка',
'Гарантия',
'Кредит'
];
var textItems = [
    'Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно! Ведь мы неплохо заработаем, поднимая его на ваш этаж.',
    'Если из-за возгорания купленного у нас товара у вас сгорит дом — не переживайте, мы выдадим вам новый. Товар, не дом, конечно же.',
'Залезть в долговую яму стало проще! Кредитные консультанты подберут для вас наиболее выгодные условия кредита. Выгодные для нашего банка, разумеется.'
];
var linkSlides = [
  'mostLongItem.html',
  'bracelet.html',
  'kvadrokopter.html'
];
var tabSlidesVal1 =[
  'Длина палки',
  'Без подзарядки',
  'Дальность полета'
];
var tabSlidesVal2 =[
  '8,5 м',
  '48 часов',
  '800 м'
];
var tabSlidesVal3 =[
  'Вес палки',
  ' ',
  'Радиус поражения'
];
var tabSlidesVal4 =[
  '5 кг',
  ' ',
  '50 м'
];
var tabSlidesVal5 =[
  'Материал',
  ' ',
  ' '
];
var tabSlidesVal6 =[
  'Карбон',
  ' ',
  ' '
];

var thumbnailsSlides = document.querySelectorAll('.slides-thumbnail-big');
var fullPhotoSlides = document.querySelector('.slides-img');
var slidesCaption = document.querySelector('.slides-caption');
var slidesText = document.querySelector('.slides-text');
var slidesLink = document.querySelector('.slides-link');
var slidesTabVal1 = document.querySelector('.slides-table-caption .table-first-property');
var slidesTabVal2 = document.querySelector('.slides-table-data .table-first-property');
var slidesTabVal3 = document.querySelector('.slides-table-caption .table-second-property');
var slidesTabVal4 = document.querySelector('.slides-table-data .table-second-property');
var slidesTabVal5 = document.querySelector('.slides-table-caption .table-third-property');
var slidesTabVal6 = document.querySelector('.slides-table-data .table-third-property');


var addThumbnailClickHandlerSlides = function (thumbnail, photo, photoClass, width, height, caption, text, linkDestination, tabVal1, tabVal2, tabVal3, tabVal4, tabVal5, tabVal6) {
  thumbnail.addEventListener('click', function () {
    // console.log(thumbnail);
    // console.log(photo);
    for (var j = 0; j < photosClass.length; j++) {
      fullPhotoSlides.classList.remove(photosClass[j]);
    }
    fullPhotoSlides.src = photo;
    fullPhotoSlides.classList.add(photoClass);
    fullPhotoSlides.width = width;
    fullPhotoSlides.height = height;
    slidesCaption.removeChild(slidesCaption.firstChild);
    textNode = document.createTextNode(caption);
    slidesCaption.appendChild(textNode);
    slidesText.removeChild(slidesText.firstChild);
    textNode = document.createTextNode(text);
    slidesText.appendChild(textNode);
    slidesLink.href = linkDestination;
    slidesTabVal1.removeChild(slidesTabVal1.firstChild);
    slidesTabVal1.appendChild(document.createTextNode(tabVal1));
    slidesTabVal2.removeChild(slidesTabVal2.firstChild);
    slidesTabVal2.appendChild(document.createTextNode(tabVal2));
    slidesTabVal3.removeChild(slidesTabVal3.firstChild);
    slidesTabVal3.appendChild(document.createTextNode(tabVal3));
    slidesTabVal4.removeChild(slidesTabVal4.firstChild);
    slidesTabVal4.appendChild(document.createTextNode(tabVal4));
    slidesTabVal5.removeChild(slidesTabVal5.firstChild);
    slidesTabVal5.appendChild(document.createTextNode(tabVal5));
    slidesTabVal6.removeChild(slidesTabVal6.firstChild);
    slidesTabVal6.appendChild(document.createTextNode(tabVal6));
  });
};

for (var i = 0; i < thumbnailsSlides.length; i++) {
  addThumbnailClickHandlerSlides(thumbnailsSlides[i], photos[i], photosClass[i], photosWidth[i], photosHeight[i], textsSlides[i], textItemsSlides[i], linkSlides[i], tabSlidesVal1[i], tabSlidesVal2[i], tabSlidesVal3[i], tabSlidesVal4[i], tabSlidesVal5[i], tabSlidesVal6[i]);
}


var thumbnails = document.querySelectorAll('.services-button');
var figure = document.querySelector('.services-image');
var text, textNode;
text = document.querySelector('.delivery-caption');
 var textItem = document.querySelector('.services-text-item');
var thumbnailsWrappers = document.querySelectorAll('.wrapper-services-button');

var addThumbnailClickHandler = function (thumbnail, thumbnailWrapper, image, textServices, textItemServices) {
  thumbnail.addEventListener('click', function () {
      for (var j = 0; j < thumbnails.length; j++) {
        figure.classList.remove(imgServices[j]);
        thumbnails[j].classList.remove('services-button-current');
        thumbnailsWrappers[j].classList.remove('services-button-current');
      }
       figure.classList.add(image);
       thumbnail.classList.add('services-button-current');
       thumbnailWrapper.classList.add('services-button-current');

   text.removeChild(text.firstChild);
   textNode = document.createTextNode(textServices);
   text.appendChild(textNode);
    textItem.removeChild(textItem.firstChild);
    textNode = document.createTextNode(textItemServices);
    textItem.appendChild(textNode);
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], thumbnailsWrappers[i], imgServices[i], texts[i], textItems[i]);
}
