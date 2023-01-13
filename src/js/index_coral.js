import "./import/modules";
import "./import/components_coral";
(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle("resize", "optimizedResize");
})();
let imgs = document.querySelectorAll('img[data-src-mobile]');
function dm_img(){   
    imgs.forEach( function(img){
        let imbMob = img.getAttribute('data-src-mobile') || false;
        let imbDesk = img.getAttribute('data-src-desk') || false;
        let imgCurrent = img.getAttribute('src') || false;    

        if( window.innerWidth < 769 ){      
            if ( imbMob != imgCurrent ){
                img.setAttribute('data-src-desk', imgCurrent);
                img.setAttribute('src', imbMob);
            }
        }
        else
        {
            if ( imbDesk != imgCurrent ){
                img.setAttribute('data-src-mobile', imgCurrent);
                img.setAttribute('src', imbDesk);
            }      
        }
    });
}
window.addEventListener("optimizedResize", dm_img);
document.addEventListener('DOMContentLoaded', function(){	
    dm_img();
});