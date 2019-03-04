import transform from "./transform";

function lb(arr) {
    var Calparcel = document.querySelector(".Calparcel");
    var Callist = document.querySelector(".Calparcel>.Callist");
    var Calnav = document.querySelector(".Calparcel>.Calnav");
    var Calnavli = document.querySelectorAll(".Calparcel>.Calnav>li");

    var stylenode = document.createElement("style");


    if (!(Calparcel && Callist)) {
        return;
    }
    var havewf = Callist.getAttribute("haveWF");
    var havelb = Callist.getAttribute("haveLB");
    var origlength = arr.length;
    if (havewf != null) {
        arr = arr.concat(arr);
    }
    if (havewf != null && havelb != null) {
        move();
    }
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = "<img src=" + arr[i] + ">";
        Callist.appendChild(li);
    }
    //添加轮播样式
    stylenode.innerHTML = ".Calparcel>.Callist{width:" + 100 * arr.length + "%}" +
        ".Calparcel>.Callist li{width:" + 100 / arr.length + "%}";
    document.head.appendChild(stylenode);

    var startX = 0;  //手指点下去图片的位置
    var shuX = 0;    //手指点下去的位置
    var shuY = 0;
    var fisX = 0;    //决定手指运动的方向
    var fisY = 0;
    var first = true; //保存是否是第一次检测拖动
    var isX = true;  //标识是上下拖拽还是左右拖拽
    var index = 0;   //标识图片的下标
    var transformX = 0;

    Calparcel.addEventListener("touchstart", function (ev) {
        ev = ev || event;
        Callist.style.transition = "";
        var finger = ev.changedTouches[0];
        shuX = finger.clientX;
        shuY = finger.clientY;
        first = true;
        isX = true;
        stop();
        if (index == 0) {
            index = -origlength;
        } else if (index == 1 - arr.length) {
            index = 1 - origlength;
        }
        transform.css(Callist, "translateX", index * document.documentElement.clientWidth);
        startX = transform.css(Callist, "translateX");
    });

    Calparcel.addEventListener("touchmove", function (ev) {
        ev = ev || event;
        if (!isX) {
            return;
        }
        var finger = ev.changedTouches[0];
        var nowX = finger.clientX;
        var nowY = finger.clientY;
        fisX = Math.abs(nowX - shuX);
        fisY = Math.abs(nowY - shuY);
        if (first) {
            first = false;
            if (fisY > fisX) {
                isX = false;
                return;
            }
        }
        transform.css(Callist, "translateX", startX + (nowX - shuX));
        transform.css(Callist, "translateY", 0);
    });

    Calparcel.addEventListener("touchend", function () {
        index = Math.round(transform.css(Callist, "translateX") / document.documentElement.clientWidth);
        Callist.style.transition = "0.5s transform";
        transform.css(Callist, "translateX", index * document.documentElement.clientWidth);
        if (havewf != null && havelb != null) {
            move();
        }
        upxiaoyuandianactive();
    });
    function move() {
        clearInterval(Callist.timeer);
        Callist.timeer = setInterval(function () {
            index--;
            Callist.style.transition = "0.5s transform";
            transform.css(Callist, "translateX", index * document.documentElement.clientWidth);
            transform.css(Callist, "translateY", 0);
            //解决切换时计时器触发transitionend没触发
            setTimeout(function () {
                end();
            }, 500);
            // upxiaoyuandianactive();
        }, 1000);
        Callist.addEventListener("transitionend", end);
        function end() {
            Callist.removeEventListener("transitionend", end);
            if (index == 1 - arr.length) {
                index = 1 - origlength;
            }
            Callist.style.transition = "";
            transform.css(Callist, "translateX", index * document.documentElement.clientWidth);
            transform.css(Callist, "translateY", 0);
            upxiaoyuandianactive();
        }

    }

    function stop() {
        clearInterval(Callist.timeer);
    }

    if (Calnav) {
        havexiaoyuandian();
    }
    function havexiaoyuandian() {
        for (var i = 0; i < origlength; i++) {
            var li = document.createElement("li");
            if (i == 0) {
                li.classList.add("active");
            }
            Calnav.appendChild(li);
        }
    }

    function upxiaoyuandianactive() {
        Calnavli = document.querySelectorAll(".Calparcel>.Calnav>li");
        for (var i = 0; i < origlength; i++) {
            Calnavli[i].classList.remove("active");
        }
        Calnavli[-index % origlength].classList.add("active");
    }

}
export default{
    lb
}