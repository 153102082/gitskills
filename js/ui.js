setTimeout(function(){
    $(".loading").hide();
    $(".wrap").show();

},1000);

$(function(){
    var time1=setInterval(function(){
        $(".animate1").css("left",($(".animate1").offset().left-15));

        if($(".animate1").offset().left<-$(".animate1").width()/2){
            $(".animate1").css("left",0);
        }

    },50);
    var time2=setInterval(function(){
        $(".animate2").css("left",($(".animate2").offset().left-15));

        if($(".animate2").offset().left<-$(".animate2").width()/2){
            $(".animate2").css("left",0);
        }

    },50);



    var is_play = 1;
    $(".audio-button").on("click",function(){
        $(".audio-button").css("-webkit-animation-play-state","paused");
        if (is_play) {
            $(".audio-button").css("-webkit-animation-play-state","paused");
            $(".audio-music").trigger('pause');
            is_play = 0;
        } else {
            $(".audio-button").css("-webkit-animation","jxz 1.5s 0s linear infinite");
            $(".audio-music").trigger('play');
            is_play = 1;
        }
    }) ;
    $(".p1-2").on("click",function(){
        $(".animate1,.section1").css("display","none");
        $(".page1").css("display","block");
        //clearInterval(timer1);

    });

   $(".btn").on("click",function(){
       $(this).parent().css("display","none");
       $(this).parent().next().css("display","block");



   });
    $(".btn:last").on("click",function(){

        $(this).parent().next().next().css("display","block");


    });

   $(".an1-1").click(function () {
       $(this).parent().parent().css("display","none");
       $(".section4").css("display","block");
   });
    $(".an1-2").click(function () {
        $(this).parent().parent().css("display","none");
        $(".section3").css("display","block");
    });
    $(".an3-1").click(function () {
        $(this).parent().parent().css("display","none");
        $(".section5").css("display","block");
    });
    $(".an3-2").click(function () {
        $(this).parent().parent().css("display","none");
        $(".section6").css("display","block");
    });



    $(".an2-1b,.an2-1a").click(function () {
        $(this).parent().parent().css("display","none");
        $(".animate2") .css("display","none");
        $(".section9").css("display","block");

    });
    $(".an2-1c,.an2-2c").click(function () {
        $(this).parent().parent().css("display","none");

        $(".section7").css("display","block");

    });

    $(".an2-2b,.an2-2a").click(function () {
        $(this).parent().parent().css("display","none");
        $(".animate2") .css("display","none");
        $(".section9").css("display","block");

    });
    $(".but1").click(function () {
        $(this).parent().css("display","none");

        $(".gz1").css("display","block");

    });
    $(".gz1 > img").click(function () {
        $(".section9").css("display","block");
        $(this).parent().css("display","none");



    });
    $(".but2").click(function () {
        $(this).parent().css("display","none");

        $(".cx").css("display","block");

    });
    $(".cx > img").click(function () {
        $(".section9").css("display","block");
        $(this).parent().css("display","none");
    });

    $(".qd_btn").click(function () {
        $(this).parent().parent().css("display","none");
        $(".animate2") .css("display","none");
        $(".section8").css("display","block");
    });
    $(".fx_btn").click(function () {

        $(".shade").css("display","block");

    });
    $(".shade").click(function () {
        $(this).css("display","none");
    });
    $(".cj_btn").click(function () {
        $(".section9").css("display","block");
        $(this).parent().css("display","none");
    });


});



var SHAKE_THRESHOLD = 3000;
var last_update = 0;
var x = y = z = last_x = last_y = last_z = 0;

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', deviceMotionHandler, false);
} else {
    alert('本设备不支持devicemotion事件');
}

function deviceMotionHandler(eventData) {
    var acceleration = eventData.accelerationIncludingGravity;
    var curTime = new Date().getTime();

    if ((curTime - last_update) > 100) {
        var diffTime = curTime - last_update;
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        var status = $(".loading").get(0);

        if (speed > SHAKE_THRESHOLD) {
            doResult();
        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
}


document.addEventListener('WeixinJSBridgeReady', function() {
    var yaoMusic = $('.yao-music').get(0);
    yaoMusic.play();
    yaoMusic.pause();
}, false);


function doResult() {
    window.removeEventListener('devicemotion', deviceMotionHandler, false);
    $('.yao-music').get(0).play();
    setTimeout(function(){
        $(".section1").fadeOut();

        $(".bg-animate").fadeOut();
        $(".page1").fadeIn();
    },1500);
}



