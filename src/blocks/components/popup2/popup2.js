document.addEventListener('DOMContentLoaded', function(){
    var showPopup = function(){
        var html  = $('.dm-popup-villas__html');
        if( html.length ){
            myo.open({
                clas: 'dm-popup-villas__popup',
                elem: html,
                beforeOpen: function(){
                },
                afterClose: function(){
                },
                afterOpen: function(){
                },
            });
        }
    }

    var showForm = function(){
        var html  = $('.dm-popup-villas__form');
        if( html.length ){
            myo.open({
                clas: 'dm-popup-villas__popup dm-popup-villas__popup--form',
                elem: html,
                beforeOpen: function(){
                },
                afterClose: function(){
                },
                afterOpen: function(){
                },
            });
        }
    }

    $(document).on('click', 'a[href="#dm-popup-villas"]', function(e){
        e.preventDefault();
        if( typeof window.myo != 'object' && typeof window.myo == 'undefined' ){
            $.getScript( "https://cdn.coral.ru/content/insider/russia/libs/popup.txt", function( data, textStatus, jqxhr ) {
                showPopup();
            });
        }
        else{
            showPopup();
        }
    });
    $(document).on('click', 'a[href="#dm-popup-form"]', function(e){
        e.preventDefault();
        if( typeof window.myo != 'object' && typeof window.myo == 'undefined' ){
            $.getScript( "https://cdn.coral.ru/content/insider/russia/libs/popup.txt", function( data, textStatus, jqxhr ) {
                showForm();
            });
        }
        else{
            showForm();
        }
    });
});