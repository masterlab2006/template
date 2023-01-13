document.addEventListener('DOMContentLoaded', function(){

    function dmVideo(){
        var $player_el, p;
        $player_el = $('#dm-video__player--js[data-vimeo-idd]');
        p = new Vimeo.Player($player_el.get(0), {
            id: $player_el.attr('data-vimeo-idd'),
            background: 0,
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
    dmVideo();

});