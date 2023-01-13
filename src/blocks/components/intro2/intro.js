var log, queryParam, trouble;
window.ASAP = (function () {
    var callall, fns;
    fns = [];
    callall = function () {
        var f, results;
        results = [];
        while (f = fns.shift()) {
            results.push(f());
        }
        return results;
    };
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', callall, false);
        window.addEventListener('load', callall, false);
    } else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', callall);
        window.attachEvent('onload', callall);
    }
    return function (fn) {
        fns.push(fn);
        if (document.readyState === 'complete') {
            return callall();
        }
    };
})();
log = function () {
    if (window.console && window.DEBUG) {
        if (typeof console.group === "function") {
            console.group(window.DEBUG);
        }
        if (arguments.length === 1 && Array.isArray(arguments[0]) && console.table) {
            console.table.apply(window, arguments);
        } else {
            console.log.apply(window, arguments);
        }
        return typeof console.groupEnd === "function" ? console.groupEnd() : void 0;
    }
};
trouble = function () {
    var ref;
    if (window.console) {
        if (window.DEBUG) {
            if (typeof console.group === "function") {
                console.group(window.DEBUG);
            }
        }
        if ((ref = console.warn) != null) {
            ref.apply(window, arguments);
        }
        if (window.DEBUG) {
            return typeof console.groupEnd === "function" ? console.groupEnd() : void 0;
        }
    }
};
window.preload = function (what, fn) {
    var lib;
    if (!Array.isArray(what)) {
        what = [what];
    }
    return $.when.apply($, (function () {
        var i, len1, results;
        results = [];
        for (i = 0, len1 = what.length; i < len1; i++) {
            lib = what[i];
            results.push($.ajax(lib, {
                dataType: 'script',
                cache: true
            }));
        }
        return results;
    })()).done(function () {
        return typeof fn === "function" ? fn() : void 0;
    });
};
window.queryParam = queryParam = function (p, nocase) {
    var k, params, params_kv;
    params_kv = location.search.substr(1).split('&');
    params = {};
    params_kv.forEach(function (kv) {
        var k_v;
        k_v = kv.split('=');
        return params[k_v[0]] = k_v[1] || '';
    });
    if (p) {
        if (nocase) {
            for (k in params) {
                if (k.toUpperCase() === p.toUpperCase()) {
                    return decodeURIComponent(params[k]);
                }
            }
            return void 0;
        } else {
            return decodeURIComponent(params[p]);
        }
    }
    return params;
};
String.prototype.zeroPad = function (len, c) {
    var s;
    s = '';
    c || (c = '0');
    len || (len = 2);
    len -= this.length;
    while (s.length < len) {
        s += c;
    }
    return s + this;
};
Number.prototype.zeroPad = function (len, c) {
    return String(this).zeroPad(len, c);
};
window.DEBUG = 'APP NAME';
ASAP(function () {
    var responsiveHandler;
    $('body .subpage-search-bg > .background').append($('#_intro_markup').html());
    responsiveHandler = function (query, match_handler, unmatch_handler) {
        var layout;
        layout = matchMedia(query);
        layout.addEventListener('change', function (e) {
            if (e.matches) {
                return match_handler();
            } else {
                return unmatch_handler();
            }
        });
        if (layout.matches) {
            match_handler();
        } else {
            unmatch_handler();
        }
        return layout;
    };
    return responsiveHandler('(max-width:768px)', function () {
        var $player_el, p;
        $player_el = $('.hidden-on-desktop[data-vimeo-id]');
        p = new Vimeo.Player($player_el.get(0), {
            id: $player_el.attr('data-vimeo-id'),
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
    }, function () {
        var $player_el, p;
        $player_el = $('.hidden-on-mobile[data-vimeo-id]');
        p = new Vimeo.Player($player_el.get(0), {
            id: $player_el.attr('data-vimeo-id'),
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
    });
});