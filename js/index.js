import base from "./busi/base";
import head from "./busi/head";
import nav from "./busi/nav";
import tab from "./busi/tab";
import vertical from "./busi/vertical";
import lb from "./tools/lb";
import transform from "./tools/transform";

window.onload = function () {
    var arr = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg"];
    lb.lb(arr);
    var content = document.querySelector("#warp .content");
    var vessel = content.firstElementChild;
    var head = document.querySelector("#warp > .head");
    var headhidden = document.querySelector("#warp > .head > .head-bottom");
    var bar = document.querySelector("#warp .bar");
    var minY = 0;
    var barY = 0;
    var headheight = head.offsetHeight;
    setTimeout(function () {
        var solia = content.clientHeight / vessel.offsetHeight;
        bar.style.height = document.documentElement.clientHeight * solia + "px";
    }, 20);
    var barbox = {
        start: function () {
            bar.style.opacity = 1;
        },
        move: function () {
            bar.style.opacity = 1;
            // 滚动条位移的实时距离 / 滚动条位移的最大距离 = 内容区位移的实时距离 / 内容区位移的最大距离
            // 滚动条位移的实时距离 = (内容区位移的实时距离 / 内容区位移的最大距离) * 滚动条位移的最大距离
            var solia = transform.css(this, "translateY") / (this.offsetHeight - content.clientHeight);
            var eleendloac = -(document.documentElement.clientHeight - bar.offsetHeight) * solia;
            if (Math.abs(eleendloac) > headheight) {
                headhidden.style.display = "none";
                content.style.top = head.offsetHeight + "px";
            } else if (Math.abs(eleendloac) < headheight) {
                headhidden.style.display = "block";
                content.style.top = headheight + "px";
            }
            transform.css(bar, "translateY", eleendloac);

        },
        end: function () {
            bar.style.opacity = 0;
        },
        over: function () {
            bar.style.opacity = 0;
        }
    };
    vertical.vertical(content, vessel, barbox);
}