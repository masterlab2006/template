document.addEventListener('DOMContentLoaded', function(){

    // setTimeout((function() {
    //     gsap.registerPlugin(ScrollTrigger),
    //     ScrollTrigger.matchMedia({
    //         "(min-width: 769px)": function() {
    //             gsap.utils.toArray('.dm-site-wrap4--scroll').forEach((function(t) {
    //                 var item = t;
    //                 var itemClient = item.getBoundingClientRect();
    //                 var imgWrap = t.querySelector('.dm-map__villas');
    //                 var img = t.querySelector('.dm-map__villas__inner');
    //                 var imgClient = img.getBoundingClientRect();
    //                 // var winWidth = window.innerWidth;

    //                 gsap.timeline({
    //                     scrollTrigger: {
    //                         trigger: t,
    //                         start: "1300px 50%",
    //                         end: "2500px 50%",
    //                         scrub: 1,
    //                         markers: true,
    //                         pin: true,
    //                     }
    //                 })
    //                 .to( img , {
    //                     y: -imgClient.height + imgWrap.getBoundingClientRect().height + 'px',
    //                 });
    //             }));
    //         }
    //     })
    // }
    // ), 500);

    // gsap
    //     .timeline()
    //     .from(".dm-intro__mice--letter", 1, {
    //         scale: "0",
    //         autoRound: !1,
    //         ease: Power1.out,
    //         stagger: {
    //             each: 0.1,
    //             from: 'center',
    //         },
    //     })
    //     .from(".dm-intro__mice__line", 1, {
    //         // scale: "0",
    //         autoRound: !1,
    //         left: '50%',
    //         right: '50%',
    //         ease: Power1.out,
    //         stagger: 0.4,
    //     });
    // gsap.to(":root", 2, {
    //     "--shadow-color": "#1ABAFF",
    //     repeat: -1,
    //     yoyo: !0
    // })
});

// // Группы объектов
// var groups = [
//     {
//         name: "Элитные виллы Турции",
//         style: "islands#redIcon",
//         style: {
//              // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#imageWithContent',
//             // Своё изображение иконки метки.
//             iconImageHref: 'https://cdn.coral.ru/content/cms/russia/exclusive_villas/mark3.png',
//             // Размеры метки.
//             iconImageSize: [26, 32],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-13, -16],
//             // Смещение слоя с содержимым относительно слоя с картинкой.
//             iconContentOffset: [15, 15],
//             // Макет содержимого.
//             // iconContentLayout: '123'
//         },
//         styleHover: {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#imageWithContent',
//             // Своё изображение иконки метки.
//             iconImageHref: 'https://cdn.coral.ru/content/cms/russia/exclusive_villas/mark3-h.png',
//             // Размеры метки.
//             iconImageSize: [26, 32],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-13, -16],
//             // Смещение слоя с содержимым относительно слоя с картинкой.
//             iconContentOffset: [15, 15],
//             // Макет содержимого.
//             // iconContentLayout: '123'
//         },
//         items: [
//             {
//                 center: [36.579050, 30.584710],
//                 name: "Maxx Royal Kemer Resort",
//                 title: "Maxx Royal Kemer Resort",
//                 location:'Кемер',
//                 img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-1.png',
//                 index: 1,
//             },
//             {
//                 center: [36.856434, 31.039511],
//                 name: "Susesi Luxury Resort",
//                 img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-2.png',
//                 title:'Susesi Luxury Resort',
//                 location:'Белек',
//                 index: 2,
//             },
//             {
//                 center: [36.860012, 30.997336],
//                 name: "Kempinski Villas Belek",
//                 img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-3.png',
//                 title:'Kempinski Villas Belek',
//                 location:'Белек',
//                 index: 3,
//             },
//             {
//                 center: [36.840950, 31.112335],
//                 name: "Gloria Golf Resort",
//                 img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-4.png',
//                 title:'Gloria Golf Resort',
//                 location:'Белек',
//                 index: 4,
//             },
//             {
//                 center: [36.845971, 31.088810],
//                 name: "Gloria Verde Resort",
//                 img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-5.png',
//                 title:'Gloria Verde Resort',
//                 location:'Белек',
//                 index: 5,
//             },
//             {
//                 center: [36.840866, 31.107842],
//                 name: "Gloria Serenity Resort",
//                 img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-6.png',
//                 title:'Gloria Serenity Resort',
//                 location:'Белек',
//                 index: 6,
//             },
//         ]
//     },
// ];

// ymaps.ready(init);

// function init() {

//     // Создание экземпляра карты.
//     var myMap = new ymaps.Map('map', {
//             center: [36.852457, 31.059482],
//             zoom: 5
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),
//         // Контейнер для меню.
//         menu = $('<ul class="dm-map__villas-menu"/>');
        
//     for (var i = 0, l = groups.length; i < l; i++) {
//         createMenuGroup(groups[i]);
//     }

//     function createMenuGroup (group) {
//         // Пункт меню.
//         var menuItem = $('<li><a href="javascript:void(0)">' + group.name + '</a></li>'),
//         // Коллекция для геообъектов группы.
//             collection = new ymaps.GeoObjectCollection(null, { preset: group.style }),
//         // Контейнер для подменю.
//             submenu = $('<ul class="dm-map__villas-submenu"/>');

//         // Добавляем коллекцию на карту.
//         myMap.geoObjects.add(collection);
//         collection.events
//         .add('mouseenter', function (e) {
//             // Ссылку на объект, вызвавший событие,
//             // можно получить из поля 'target'.
//             e.get('target').options.set('preset', group.styleHover);
//         })
//         .add('mouseleave', function (e) {
//             e.get('target').options.unset('preset');
//         });
//         // Добавляем подменю.
//         menuItem
//             .append(submenu)
//             // Добавляем пункт в меню.
//             .appendTo(menu)
//             // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
//             .find('a')
//             .bind('click', function () {
//                 if (collection.getParent()) {
//                     myMap.geoObjects.remove(collection);
//                     submenu.hide();
//                 } else {
//                     myMap.geoObjects.add(collection);
//                     submenu.show();
//                 }
//                 // return false
//             })
//         for (var j = 0, m = group.items.length; j < m; j++) {
//             createSubMenu(group.items[j], collection, submenu);
//         }
//     }

//     function createSubMenu (item, collection, submenu) {
//         // Пункт подменю.
//         var submenuItem = $('<li><a href="javascript:void(0)" data-index="' + item.index + '" class="dm-map__villa"><span class="dm-map__villa__img-wrap"><img src="' + item.img + '" alt="' + item.title + '" class="dm-map__villa__img">    </span>    <span class="dm-map__villa__desc">        <span class="dm-map__villa__title">' + item.title + '</span>        <span class="dm-map__villa__location">' + item.location + '</span>    </span></a></li>'),
//         // Создаем метку.
//             placemark = new ymaps.Placemark(item.center, { balloonContent: item.name });

//         // Добавляем метку в коллекцию.
//         collection.add(placemark);
//         // Добавляем пункт в подменю.
//         submenuItem
//             .appendTo(submenu)
//             // При клике по пункту подменю открываем/закрываем баллун у метки.
//             .find('a')
//             .bind('click', function () {
//                 var $this = $(this);
//                 var $index = $this.attr('data-index');
//                 if (!placemark.balloon.isOpen()) {
//                     // myMap.setZoom(16, {duration: 1000});
//                     // myMap.setCenter( obj.getGeoPoint() ,16);
//                     myMap.setCenter(item.center, 17, {
//                         duration: 300
//                     });
//                     // placemark.balloon.open();
//                     setTimeout(function(){
//                         placemark.balloon.open();
//                     }, 1000)
//                 } else {
//                     // placemark.balloon.close();
//                 }
//                 $('.dm-map__villa').removeClass('active');
//                 $this.addClass('active');
//                 return false
//             });
//     }

//     // Добавляем меню в тэг BODY.
//     menu.appendTo($('.dm-map__villas__inner'));

//     // Выставляем масштаб карты чтобы были видны все группы.
//     myMap.setBounds(myMap.geoObjects.getBounds());
// }