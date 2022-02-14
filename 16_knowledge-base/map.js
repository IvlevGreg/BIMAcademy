ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [48.872185, 2.354224],
    zoom: 15,
    saturation: -1
  }, {
    searchControlProvider: 'yandex#search'
  }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени  54'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/Subtract.svg',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
    });


  myMap.geoObjects
    .add(myPlacemark)
});


