import transform from "../tools/transform";

function vertical(content, vessel, barbox) {

    var elestart = { x: 0, y: 0 };
    var shustart = { x: 0, y: 0 };
    var shudismove = { x: 0, y: 0 };
    var isfirst = true;
    var isY = true;
    var moveY = 0;
    var minY = 0;
    var lastloac = { x: 0, y: 0 };
    var lasttime = 0;
    var everytime = 0;
    var everymove = { x: 0, y: 0 };
    var solac = 1;
    var isspeen = true;
    var jstimeer = 0;
    requestAnimationFrame(minYsize);
    function minYsize() {
        minY = content.clientHeight - vessel.offsetHeight;
        requestAnimationFrame(minYsize);
    }
    content.addEventListener("touchstart", function (ev) {
        ev = ev || event;
        clearInterval(jstimeer);
        vessel.style.transition = "";
        var finger = ev.changedTouches[0];
        elestart.x = transform.css(vessel, "translateX");
        elestart.y = transform.css(vessel, "translateY");
        shustart.x = finger.clientX;
        shustart.y = finger.clientY;
        isfirst = true;
        isY = true;
        lastloac.x = finger.clientX
        lastloac.y = finger.clientY;
        lasttime = new Date();
        solac = 1;
        isspeen = true;
        everymove.x = 0;
        everymove.y = 0;
        everytime = 0;
        if (barbox && (typeof barbox["start"]).toLowerCase() === "function") {
            barbox["start"].call(vessel);
        }
    });
    content.addEventListener("touchmove", function (ev) {
        if (!isY) {
            return;
        }
        ev = ev || event;
        var finger = ev.changedTouches[0];
        var nowshu = { x: 0, y: 0 };
        var nowtime = new Date();
        nowshu.x = finger.clientX;
        nowshu.y = finger.clientY;
        shudismove.x = nowshu.x - shustart.x;
        shudismove.y = nowshu.y - shustart.y;
        moveY = elestart.y + shudismove.y;
        everymove.x = nowshu.x - lastloac.x;
        everymove.y = nowshu.y - lastloac.y;
        everytime = nowtime - lasttime;
        lasttime = nowtime;
        lastloac.x = nowshu.x;
        lastloac.y = nowshu.y;

        if (isfirst) {
            isfirst = false;
            if (Math.abs(shudismove.x) > Math.abs(shudismove.y)) {
                isY = false;
                return;
            }
        }
        if (moveY > 0) {
            isspeen = false;
            solac = content.clientHeight / ((content.clientHeight + moveY) * 2);
            moveY = transform.css(vessel, "translateY") + everymove.y * solac;
        } else if (moveY < minY) {
            isspeen = false;
            var chao = minY - moveY;
            solac = content.clientHeight / ((content.clientHeight + chao) * 2);
            moveY = transform.css(vessel, "translateY") + everymove.y * solac;
        } else {
            solac = 1;
        }
        transform.css(vessel, "translateY", moveY);
        if (barbox && (typeof barbox["move"]).toLowerCase() === "function") {
            barbox["move"].call(vessel);
        }
    });
    content.addEventListener("touchend", function (ev) {
        ev = ev || event;
        if (isspeen) {
            superSpeen();
        } else {
            if (moveY > 0) {
                moveY = 0;
            } else if (moveY < minY) {
                moveY = minY;
            }
            vessel.style.transition = "1s transform";
            transform.css(vessel, "translateY", moveY);
        }
        if (barbox && (typeof barbox["end"]).toLowerCase() === "function") {
            barbox["end"].call(vessel);
        }
    });

    var Tween = {
        Linear: function (t, b, c, d) { return c * t / d + b; },
        back: function (t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        }
    };
    //快速划屏橡皮筋
    function superSpeen() {
        var speen = everymove.y / everytime;
        speen = Math.abs(speen) > 0.3 ? speen : 0;
        var speenend = transform.css(vessel, "translateY") + speen * 200;
        var time = Math.abs(speen) * 0.2;
        time = time > 2 ? 2 : time;
        time = time < 0.4 ? 0.4 : time;
        var type = "Linear";
        if (speenend > 0) {
            speenend = 0;
            type = "back";
        } else if (speenend < minY) {
            speenend = minY;
            type = "back";
        }
        move(vessel, type, speenend, time);
        function move(node, type, speenend, time) {
            /*
            t: current time（当前时间）；
            b: beginning value（初始值）；
            c: change in value（变化量）；
            d: duration（持续时间）。
            */
            clearInterval(jstimeer);
            var t = 0;
            var b = transform.css(node, "translateY");
            var c = speenend - b;
            var d = (time * 1000) / (1000 / 60)
            jstimeer = setInterval(function () {
                t++;
                if (t > d) {
                    clearInterval(jstimeer);
                    if (barbox && (typeof barbox["over"]).toLowerCase() === "function") {
                        barbox["over"].call(vessel);
                    }
                    return;
                }
                transform.css(node, "translateY", Tween[type](t, b, c, d));
                if (barbox && (typeof barbox["move"]).toLowerCase() === "function") {
                    barbox["move"].call(vessel);
                }
            }, 1000 / 60);
        }
    }
}
export default{
    vertical
}