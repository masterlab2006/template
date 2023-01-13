document.addEventListener('DOMContentLoaded', function(){

// Группы объектов
var groups = [
    {
        name: "Элитные виллы Турции Анталийское побережье",
        style: "islands#redIcon",
        center : [36.852457, 31.059482],
        style: {
             // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'https://cdn.coral.ru/content/cms/russia/exclusive_villas/markx2.png',
            // Размеры метки.
            iconImageSize: [26, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-13, -32],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            // iconContentLayout: '123'
        },
        styleHover: {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'https://cdn.coral.ru/content/cms/russia/exclusive_villas/markx2-h.png',
            // Размеры метки.
            iconImageSize: [26, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-13, -32],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            // iconContentLayout: '123'
        },
        items: [
            {
                center: [36.579050, 30.584710],
                name: "Maxx Royal Kemer Resort",
                title: "Maxx Royal Kemer Resort",
                location:'Кемер',
                img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-1.png',
                index: 1,
            },
            {
                center: [36.856434, 31.039511],
                name: "Susesi Luxury Resort",
                img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-2.png',
                title:'Susesi Luxury Resort',
                location:'Белек',
                index: 2,
            },
            {
                center: [36.860012, 30.997336],
                name: "Kempinski Villas Belek",
                img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-3.png',
                title:'Kempinski Villas Belek',
                location:'Белек',
                index: 3,
            },
            {
                center: [36.840950, 31.112335],
                name: "Gloria Golf Resort",
                img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-4.png',
                title:'Gloria Golf Resort',
                location:'Белек',
                index: 4,
            },
            {
                center: [36.845971, 31.088810],
                name: "Gloria Verde Resort",
                img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-5.png',
                title:'Gloria Verde Resort',
                location:'Белек',
                index: 5,
            },
            {
                center: [36.840866, 31.107842],
                name: "Gloria Serenity Resort",
                img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-6.png',
                title:'Gloria Serenity Resort',
                location:'Белек',
                index: 6,
            },
            {
                center: [36.857556, 31.036571],
                name: "Cornelia Diamond Golf Resort & Spa",
                img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-7.png',
                title:'Cornelia Diamond Golf Resort & Spa',
                location:'Белек',
                index: 7,
            },
            {
                center: [36.849428, 31.083909],
                name: "Cornelia Azure Villas",
                img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-8.png',
                title:'Cornelia Azure Villas',
                location:'Белек',
                index: 8,
            },
            {
                center: [36.847018, 31.072549],
                name: "Voyage Belek Golf & SPA",
                img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-9.png',
                title:'Voyage Belek Golf & SPA',
                location:'Белек',
                index: 9,
            },
        ]
    },
    {
        name: "Элитные виллы Турции Эгейское побережье",
        style: "islands#redIcon",
        style: {
             // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'https://cdn.coral.ru/content/cms/russia/exclusive_villas/markx2.png',
            // Размеры метки.
            iconImageSize: [26, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-13, -32],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            // iconContentLayout: '123'
        },
        styleHover: {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'https://cdn.coral.ru/content/cms/russia/exclusive_villas/markx2-h.png',
            // Размеры метки.
            iconImageSize: [26, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-13, -32],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            // iconContentLayout: '123'
        },
        items: [
            {
                center: [37.137846, 27.560884],
                name: "Lujo Hotel",
                title: "Lujo Hotel",
                location:'Бодрум',
                img:'https://cdn.coral.ru/content/cms/russia/exclusive_villas/villa-1001.png',
                index: 1,
            },
        ],
        center : [37.137846, 27.560884],
    },
];

ymaps.ready(init);

function init() {

var tabs = document.querySelectorAll('.dm-tab__body');

$(document).on('click', '[data-show]', function(){
    let content_marker, idx;
    let $sel = $(this);
    $sel.addClass('selected').siblings('.selected').removeClass('selected');
    idx = $sel.index();
    content_marker = $sel.attr('data-show');
    $("[data-content-for='" + content_marker + "']").addClass('selected').siblings('.selected').removeClass('selected');
});



tabs.forEach(function(tab, tabIndex){

    var hotelsNames = [];
    var isGoToSlide = false;
    var url = location.href;
    $(tab).find('.hotels__slider .dm-hotel').each(function(){
        var $this = $(this);
        var name = $this.data('name');
        var index = $this.data('index');
        if( name ){
            hotelsNames.push({
                'name': name,
                'index': index,
            })
        }
    });

    if( hotelsNames.length ){
        for (var i = 0; i < hotelsNames.length; i++){
            if(url.indexOf('exclusive_hotel=' + hotelsNames[i].name) !==-1 )
            {
                isGoToSlide = hotelsNames[i];
                break;
            }
        }
    }

    var logos = $(tab).find('.hotels__slider-logos .swiper-slide').length > 6 ? 7 : $(tab).find('.hotels__slider-logos .swiper-slide').length ;

    const hotelsLogos = new Swiper( tab.querySelector(".hotels__slider-logos"), {
        slidesPerView: 3,
        loop: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: tab.querySelector(".swiper-button-next2"),
            prevEl: tab.querySelector(".swiper-button-prev2"),
        },
        breakpoints: {
            769: {
                slidesPerView: logos,
            },
        },
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    const hotels = new Swiper( tab.querySelector(".hotels__slider"), {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        on: {
            init: function(swiper){
                if(isGoToSlide){
                    swiper.slideTo(isGoToSlide.index);
                    setTimeout(function(){
                        $(tab).find('.dm-map__villa[data-index="' + isGoToSlide.index + '"]').trigger('click');
                    }, 1000);
                }
                // dmVideo();
            },
            activeIndexChange: function(elem){
                dmVideo();
                $(tab).find('.dm-map__villa[data-index="' + elem.activeIndex + '"]').trigger('click');
            },
        },
        thumbs: {
            swiper: hotelsLogos,
        },
        loop: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
    });

    function dmVideo(){

        setTimeout(function(){

            var $index = $(tab).find('.hotels__slider .swiper-slide-active .dm-hotel').data('index');
            $(tab).find(".dm-hotels[data-index='" + $index + "']").attr('data-show', 1).siblings(".dm-hotels").attr('data-show', 0);
            var $player_el = $(tab).find('.hotels__slider .swiper-slide-active .dm-hotel__video');
            if( $player_el.length && $player_el.attr('data-video') != '' ){
                var p;
                p = new Vimeo.Player($player_el.get(0), {
                    id: $player_el.attr('data-video'),
                    background: 1,
                    playsinline: 1,
                    autopause: 0,
                    title: 0,
                    byline: 0,
                    portrait: 0
                });
                return p.on('play', function () {
                    return $player_el.addClass('playback');
                });
            }

        }, 1000)
    }

    let hotels2Wraps = tab.querySelectorAll(".dm-hotel-slider-wrap");

    hotels2Wraps.forEach(function(wrap){

        let slider = wrap.querySelector('.swiper.dm-hotel-slider');
        let next = wrap.querySelector('.swiper-button-next3');
        let prev = wrap.querySelector('.swiper-button-prev3');

        const hotels2 = new Swiper( slider, {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0,
            loop: true,
            slidesPerView: 1.5,
            centeredSlides: true,
            breakpoints: {
                769: {
                    slidesPerView: 1.48,
                },
            },
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
        });
    });


    var villasList2slider = tab.querySelectorAll('.dm-villas-list2__inner');

    villasList2slider.forEach(function(wrap){

        let slider1 = wrap.querySelector('.dm-villas-list2__slider');
        let slider2 = wrap.querySelector('.dm-villas-list2__slider2');
        let next = wrap.querySelector('.swiper-button-next2');
        let prev = wrap.querySelector('.swiper-button-prev2');

        let list2Slider2 = new Swiper(slider2, {
            slidesPerView: 4,
            // loop: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            direction: 'horizontal',
            breakpoints: {
                769: {
                    direction: 'vertical',
                },
            },
        });
        
        let list2Slider = new Swiper(slider1, {
            // slidesPerView: 1,
            thumbs: {
                swiper: list2Slider2,
            },
            // loop: true,
        });
        list2Slider.on('slideChangeTransitionStart', function() {
            list2Slider2.slideTo(list2Slider.activeIndex);
        });
        
        list2Slider2.on('transitionStart', function(){
            list2Slider.slideTo(list2Slider2.activeIndex);
        });
    });


    var setAccHeight = function(){
        $(tab).find('.dm-villas-info__body-wrap').each(function(){
            var $this = $(this);
            var height1 = $this.find('.dm-villas-info__body').eq(0).outerHeight() || 0;
            var height2 = $this.find('.dm-villas-info__body').eq(1).outerHeight() || 0;
            var maxHeight;
            maxHeight = Math.max(height1, height2);
            $this.css('minHeight', maxHeight);
        });
    }
    setAccHeight();

    $(tab).find('a[href^="#scrollto"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate( {
            'scrollTop': $target.offset().top - 40
        }, 900, 'swing', function () {
            // window.location.hash = target;
        } );
    });

        // Создание экземпляра карты.
        var mapSelector = tab.querySelector('.dm-map__container')
        var myMap = new ymaps.Map( mapSelector, {
                center: groups[tabIndex].center,
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),
            // Контейнер для меню.
            menu = $('<ul class="dm-map__villas-menu"/>');
            
        // for (var i = 0, l = groups.length; i < l; i++) {
        //     createMenuGroup(groups[i]);
        // }

        createMenuGroup(groups[tabIndex]);

        function createMenuGroup (group) {
            // Пункт меню.
            var menuItem = $('<li><a href="javascript:void(0)">' + group.name + '</a></li>'),
            // Коллекция для геообъектов группы.
                collection = new ymaps.GeoObjectCollection(null, { preset: group.style }),
            // Контейнер для подменю.
                submenu = $('<ul class="dm-map__villas-submenu"/>');

            // Добавляем коллекцию на карту.
            myMap.geoObjects.add(collection);
            // Hover метки при наведении на метку
            collection.events
                .add('mouseenter', function (e) {
                    // Ссылку на объект, вызвавший событие,
                    // можно получить из поля 'target'.
                    e.get('target').options.set('preset', group.styleHover);
                })
                .add('mouseleave', function (e) {
                    e.get('target').options.unset('preset');
                });
            // Добавляем подменю.
            menuItem
                .append(submenu)
                // Добавляем пункт в меню.
                .appendTo(menu)
                // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
                .find('a')
                .bind('click', function () {
                    if (collection.getParent()) {
                        myMap.geoObjects.remove(collection);
                        submenu.hide();
                    } else {
                        myMap.geoObjects.add(collection);
                        submenu.show();
                    }
                    // return false
                })
            for (var j = 0, m = group.items.length; j < m; j++) {
                createSubMenu(group.items[j], collection, submenu);
            }
        }

        function createSubMenu (item, collection, submenu) {
            // Пункт подменю.
            var submenuItem = $('<li><a href="javascript:void(0)" data-index="' + item.index + '" class="dm-map__villa"><span class="dm-map__villa__img-wrap"><img src="' + item.img + '" alt="' + item.title + '" class="dm-map__villa__img">    </span>    <span class="dm-map__villa__desc">        <span class="dm-map__villa__title">' + item.title + '</span>        <span class="dm-map__villa__location">' + item.location + '</span>    </span></a></li>');
            // Создаем метку.
            var placemark = new ymaps.Placemark(item.center, { balloonContent: item.name });

            // Добавляем метку в коллекцию.
            collection.add(placemark);
            // Добавляем пункт в подменю.
            submenuItem
                .appendTo(submenu)
                // При клике по пункту подменю открываем/закрываем баллун у метки.
                .find('a')
                .bind('click', function () {
                    var $this = $(this);
                    var $index = $this.attr('data-index');
                    if (!placemark.balloon.isOpen()) {
                        // myMap.setZoom(16, {duration: 1000});
                        // myMap.setCenter( obj.getGeoPoint() ,16);
                        myMap.setCenter(item.center, 17, {
                            duration: 300
                        });
                        // placemark.balloon.open();
                        setTimeout(function(){
                            placemark.balloon.open();
                            yaMapIsClicked = true;
                        }, 1000)
                    } else {
                        // placemark.balloon.close();
                    }
                    $(tab).find('.dm-map__villa').removeClass('active');
                    $this.addClass('active');
                    hotels.slideTo($index);
                    return false
                })
                .bind('mouseenter', function(){
                    if (!placemark.balloon.isOpen()){
                        placemark.options.set('preset', groups[0].styleHover);
                        collection.add(placemark);
                    }
                })
                .bind('mouseleave', function(){
                    placemark.options.unset('preset');
                });
        }

        // Добавляем меню в тэг BODY.
        menu.appendTo( $(tab).find('.dm-map__villas__inner') );

        // Выставляем масштаб карты чтобы были видны все группы.
        if ( tabIndex == 0 ){
            myMap.setBounds(myMap.geoObjects.getBounds());
        }
        // myMap.container.fitToViewport();
    });
}

$(document).on('click', '.dm-villas-info__header[data-value]', function(){
    var $title = $(this);
    var isActive = $title.hasClass('selected');
    var $par = $title.closest('.dm-villas-info');
    var value = $title.attr('data-value');
    if( isActive ){
        return
    }
    $par.find(".dm-villas-info__body").fadeOut(500, function(){
        setTimeout(function(){
            $par.find(".dm-villas-info__body[data-value='" + value + "']").fadeIn(500)
        }, 500)
    });
    $title.addClass('selected').siblings('.selected').removeClass('selected');
});

});