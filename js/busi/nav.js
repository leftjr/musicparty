import transform from "../tools/transform";

var nav = document.querySelector("#warp > .content .nav");
var navlist = document.querySelector("#warp > .content .nav > .list");

var elex = 0;  //元素上次的位置
var shux = 0;  //鼠标下去的位置
var minx = nav.clientWidth - navlist.offsetWidth; //最远值
var scold = 1; //橡皮筋比例
var transformx = 0; //元素移动实时距离
var lastPoint = 0; //手指上一次的位置
var lastTime = 0;  //上次move触发事件
var disTime = 0;   //每次move触发间隔
var disPoint = 0; //每次move移动距离
var isspeenmove = true; //标识是否触碰到边缘再移动是否需要计算速度值
var isdian = true;

nav.addEventListener("touchstart", function (ev) {
    navlist.style.transition = "";
    ev = ev || event;
    var finger = ev.changedTouches[0];
    elex = transform.css(navlist, "translateX");
    shux = finger.clientX;
    lastPoint = finger.clientX;
    lastTime = new Date();
    isspeenmove = true;
    disPoint = 0;
    disTime = 0;
    isdian = true;
});
nav.addEventListener("touchmove", function (ev) {
    ev = ev || event;
    isdian = false;
    scold = 1;
    var finger = ev.changedTouches[0];
    var nowx = finger.clientX;
    var disx = nowx - shux;
    transformx = elex + disx;

    var nowTime = new Date();
    var nowPoint = finger.clientX;
    disPoint = nowPoint - lastPoint;
    disTime = nowTime - lastTime;
    lastPoint = nowPoint;
    lastTime = nowTime;

    if (transformx > 0) {
        isspeenmove = false;
        scold = document.documentElement.clientWidth / ((document.documentElement.clientWidth + transformx) * 2);
        transformx = transform.css(navlist, "translateX") + disPoint * scold;
    } else if (transformx < minx) {
        isspeenmove = false;
        var chao = minx - transformx;
        scold = scold = document.documentElement.clientWidth / ((document.documentElement.clientWidth + chao) * 2);
        transformx = transform.css(navlist, "translateX") + disPoint * scold;
    }
    transform.css(navlist, "translateX", transformx);
});
nav.addEventListener("touchend", function (ev) {
    ev = ev || event;
    if (isspeenmove) {
        superSpeen();
    } else {
        if (transformx > 0) {
            transformx = 0;
        } else if (transformx < minx) {
            transformx = minx;
        }
        navlist.style.transition = "1s transform";
        transform.css(navlist, "translateX", transformx);
    }
});

//快速划屏橡皮筋
function superSpeen() {
    var speen = disPoint / disTime;
    speen = Math.abs(speen) > 0.3 ? speen : 0;
    var speenend = transform.css(navlist, "translateX") + speen * 200;
    var time = Math.abs(speen) * 0.2;
    time = time > 2 ? 2 : time;
    time = time < 0.4 ? 0.4 : time;
    var bsr = "";
    if (speenend > 0) {
        speenend = 0;
        bsr = "cubic-bezier(.09,1.51,.65,1.73)";
    } else if (speenend < minx) {
        speenend = minx;
        bsr = "cubic-bezier(.09,1.51,.65,1.73)";
    }
    navlist.style.transition = time + "s " + bsr + " transform";
    transform.css(navlist, "translateX", speenend);
}

dianliang();

function dianliang() {
    var navlists = document.querySelectorAll("#warp > .content .nav > .list li");
    navlist.addEventListener("touchend", function (ev) {
        ev = ev || event;
        if (isdian) {
            console.log(navlists.length);
            for (var i = 0; i < navlists.length; i++) {
                navlists[i].classList.remove("active");
            }
            if (ev.target.nodeName === "LI") {
                ev.target.classList.add("active");
            } else if (ev.target.nodeName === "A") {
                ev.target.parentNode.classList.add("active");
            }
        }
    });
}