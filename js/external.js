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


var addThumbnailClickHandler = function (thumbnail, image, textServices, textItemServices, num) {
  thumbnail.addEventListener('click', function () {
      for (var j = 0; j < thumbnails.length; j++) {
        figure.classList.remove(image[j]);
      }
       figure.classList.add(image[num]);

   text.removeChild(text.firstChild);
   textNode = document.createTextNode(textServices);
   text.appendChild(textNode);
    textItem.removeChild(textItem.firstChild);
    textNode = document.createTextNode(textItemServices);
    textItem.appendChild(textNode);
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], imgServices, texts[i], textItems[i], i);
}
