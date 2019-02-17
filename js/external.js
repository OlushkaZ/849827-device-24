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
]

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
