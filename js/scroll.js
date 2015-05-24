/**
 * Created by Administrator on 2015/4/27.
 */

(function($){
    $.fn.scroll = function(options){
        var settings = {
            warp : document.getElementById("warp"),
            ul : $("#warp ul"),
            prev : $(".prev"),
            next : $(".next")
        };
        settings.warp.addEventListener("touchstart", touchStart, false);
        settings.warp.addEventListener("touchmove", touchMove, false);
        settings.warp.addEventListener("touchend", touchEnd, false);
        var startX, endX;
        function touchStart(event) {
            var touch = event.touches[0];
            startX = touch.pageX;
        };
        function touchMove(event) {
            var touch = event.touches[0];
            endX = touch.pageX;
        };
        function pageLeft(){
            settings.ul.animate({left:'-=235px'});
        };
        function pageRight(){
            settings.ul.animate({left:'+=235px'});
        };
        function pageStart(){
            settings.ul.animate({left:'0'});
        };
        function pageEnd(){
            settings.ul.animate({left:'-940px'});
        };
        function touchEnd(event) {
            var marLeft = parseInt(settings.ul.css("left"));
            if ((startX - endX) > 100) {
                if(marLeft >= -705){
                   pageLeft();
                }else{
                   pageStart();
                }
            }else{
                if( marLeft < 0){
                    pageRight();
                }
                if(marLeft == 0){
                    pageEnd();
                }
            }
        };
        settings.prev.click(function(){
            var marLeft = parseInt(settings.ul.css("left"));
            if(marLeft >= -705){
                pageLeft();
            }else{
                pageStart();
            }
        });
        settings.next.click(function(){
            var marLeft = parseInt(settings.ul.css("left"));
            if(marLeft < 0){
                pageRight();
            }
            if(marLeft == 0){
                pageEnd();
            }
        });
    }
})(jQuery);
