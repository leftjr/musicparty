/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function css(node, type, val) {
    if (arguments.length >= 3) {
        //设置操作
        var text = "";
        if (!node.transform) {
            node.transform = {}
        }
        node.transform[type] = val;
        for (var item in node.transform) {
            switch (item) {
                case "translateX":
                case "translateY":
                case "translateZ":
                    text += item + "(" + node.transform[item] + "px)";
                    break;

                case "rotateX":
                case "rotateY":
                case "rotateZ":
                case "rotate":
                    text += item + "(" + node.transform[item] + "deg)";
                    break;

                case "scale":
                    text += item + "(" + node.transform[item] + ")";
                    break;
            }
        }
        node.style.transform = text;
    } else if (arguments.length === 2) {
        //读取操作
        val = node.transform ? node.transform[type] : undefined;

        if (val === undefined) {
            val = 0;
            if (type === "scale") {
                val = 1;
            }
        }
        return val;
    } else {
        throw new Error("该函数至少需要2个参数")
    }
}
/* harmony default export */ __webpack_exports__["a"] = ({
    css
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__busi_base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__busi_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__busi_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__busi_head__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__busi_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__busi_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__busi_nav__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__busi_tab__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__busi_vertical__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_lb__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_transform__ = __webpack_require__(0);








window.onload = function () {
    var arr = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg"];
    __WEBPACK_IMPORTED_MODULE_5__tools_lb__["a" /* default */].lb(arr);
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
            var solia = __WEBPACK_IMPORTED_MODULE_6__tools_transform__["a" /* default */].css(this, "translateY") / (this.offsetHeight - content.clientHeight);
            var eleendloac = -(document.documentElement.clientHeight - bar.offsetHeight) * solia;
            if (Math.abs(eleendloac) > headheight) {
                headhidden.style.display = "none";
                content.style.top = head.offsetHeight + "px";
            } else if (Math.abs(eleendloac) < headheight) {
                headhidden.style.display = "block";
                content.style.top = headheight + "px";
            }
            __WEBPACK_IMPORTED_MODULE_6__tools_transform__["a" /* default */].css(bar, "translateY", eleendloac);

        },
        end: function () {
            bar.style.opacity = 0;
        },
        over: function () {
            bar.style.opacity = 0;
        }
    };
    __WEBPACK_IMPORTED_MODULE_4__busi_vertical__["a" /* default */].vertical(content, vessel, barbox);
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

//禁用全局默认事件行为
var warp = document.querySelector("#warp");
warp.addEventListener("touchstart", function (ev) {
    ev = ev || event;
    ev.preventDefault();
});

//rem适配
var stylenode = document.createElement("style");
var w = document.documentElement.clientWidth / 16;
stylenode.innerHTML = "html{font-size:" + w + "px}";
document.head.appendChild(stylenode);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var text = document.querySelector("#warp > .head > .head-bottom form input[type=text]");
var warp = document.querySelector("#warp");
var head = document.querySelector("#warp > .head");
var channel = document.querySelector("#warp > .head > .head-top > .channel");
var mask = document.querySelector("#warp > .head > .mask");
var sousuo = document.querySelector("#warp > .head > .head-top > .rightnav a:nth-child(1)");
var headhidden = document.querySelector("#warp > .head > .head-bottom");
var content = document.querySelector("#warp .content");
var chanflag = true;
text.addEventListener("touchstart", function (ev) {
    ev = ev || event;
    this.focus();
    ev.stopPropagation();
    ev.preventDefault();
});
warp.addEventListener("touchstart", function (ev) {
    ev = ev || event;
    text.blur();
    channel.classList.remove("active");
    mask.style.display = "none";
    chanflag = true;
    ev.preventDefault();
});
mask.addEventListener("touchstart", function (ev) {
    ev = ev || event;
    ev.stopPropagation();
    ev.preventDefault();
});

channel.addEventListener("touchstart", function (ev) {
    ev = ev || event;
    text.blur();
    if (chanflag) {
        channel.classList.add("active");
        mask.style.display = "block";
    } else {
        channel.classList.remove("active");
        mask.style.display = "none";
    }
    chanflag = !chanflag;
    ev.stopPropagation();
    ev.preventDefault();
});

sousuo.addEventListener("touchstart", function () {
    headhidden.style.display = "block";
    content.style.top = head.offsetHeight + "px";
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_transform__ = __webpack_require__(0);


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
    elex = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(navlist, "translateX");
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
        transformx = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(navlist, "translateX") + disPoint * scold;
    } else if (transformx < minx) {
        isspeenmove = false;
        var chao = minx - transformx;
        scold = scold = document.documentElement.clientWidth / ((document.documentElement.clientWidth + chao) * 2);
        transformx = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(navlist, "translateX") + disPoint * scold;
    }
    __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(navlist, "translateX", transformx);
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
        __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(navlist, "translateX", transformx);
    }
});

//快速划屏橡皮筋
function superSpeen() {
    var speen = disPoint / disTime;
    speen = Math.abs(speen) > 0.3 ? speen : 0;
    var speenend = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(navlist, "translateX") + speen * 200;
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
    __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(navlist, "translateX", speenend);
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

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_transform__ = __webpack_require__(0);


var tabwarp = document.querySelector("#warp .content .tab-warp");
var tablist = document.querySelectorAll("#warp .content .tab-warp .tab-content");
var tabshow = document.querySelectorAll("#warp .content .tab-warp .tab-content .list");
var loadings = document.querySelectorAll("#warp .content .tab-warp .tab-content .loading");
// setTimeout(function(){
requestAnimationFrame(loadingsize);
function loadingsize() {
    for (var i = 0; i < loadings.length; i++) {
        loadings[i].style.height = tabshow[0].offsetHeight + "px";
    }
    requestAnimationFrame(loadingsize);

}
// });
for (var i = 0; i < tablist.length; i++) {
    __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(tablist[i], "translateX", -tabwarp.clientWidth);
    tablist[i].index = 0;
    move(tablist[i]);
}
var eleloac = { x: 0, y: 0 };
var shustartloac = { x: 0, y: 0 };
var shudisloac = { x: 0, y: 0 };
var transformx = 0;
var isfirst = true;
var isX = true;

function move(tablistnode) {

    tablistnode.addEventListener("touchstart", function (ev) {
        ev = ev || event;
        if (tablistnode.istiao) {
            return;
        }
        tablistnode.style.transition = "";
        var finger = ev.changedTouches[0];
        eleloac.x = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(tablistnode, "translateX");
        eleloac.y = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(tablistnode, "translateY");
        shustartloac.x = finger.clientX;
        shustartloac.y = finger.clientY;
        isfirst = true;
        isX = true;
    });
    tablistnode.addEventListener("touchmove", function (ev) {
        ev = ev || event;
        if (!isX) {
            return;
        }
        if (tablistnode.istiao) {
            return;
        }
        var finger = ev.changedTouches[0];
        var nowshu = { x: 0, y: 0 };
        nowshu.x = finger.clientX;
        nowshu.y = finger.clientY;
        shudisloac.x = nowshu.x - shustartloac.x;
        shudisloac.y = nowshu.y - shustartloac.y;
        transformx = eleloac.x + shudisloac.x;
        if (isfirst) {
            isfirst = false;
            if (Math.abs(shudisloac.x) < Math.abs(shudisloac.y)) {
                isX = false;
                return;
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(tablistnode, "translateX", transformx);
        tiao(tablistnode);
    });
    tablistnode.addEventListener("touchend", function (ev) {
        ev = ev || event;
        if (tablistnode.istiao) {
            return;
        } else {
            tablistnode.style.transition = "1s transform";
            __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(tablistnode, "translateX", eleloac.x);
        }
    });
    function tiao(node) {
        if (Math.abs(shudisloac.x) > tabwarp.clientWidth / 2) {
            node.istiao = true;
            var translateX = shudisloac.x > 0 ? 0 : -2 * tabwarp.clientWidth;

            node.style.transition = "1s transform";
            __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(node, "translateX", translateX);
            node.addEventListener("transitionend", end);

            var lloadl = node.querySelectorAll(".loading");
            var smallG = node.parentNode.querySelector(".tab-nav span");
            var navli = node.parentNode.querySelectorAll(".tab-nav a");
            var imgs = node.parentNode.querySelectorAll(".list li .top a img");
            function end() {
                node.removeEventListener("transitionend", end);
                for (var i = 0; i < lloadl.length; i++) {
                    lloadl[i].style.opacity = 1;
                }
                shudisloac.x > 0 ? node.index-- : node.index++;
                if (node.index < 0) {
                    node.index = navli.length - 1;
                } else if (node.index > navli.length - 1) {
                    node.index = 0;
                }
                // smallG.style.transition = "1s transform,1s width";
                __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(smallG, "translateX", navli[node.index].offsetLeft);
                smallG.style.width = navli[node.index].offsetWidth + "px";
                setTimeout(function () {
                    var arr = [
                        ["./img/a.jpg", "./img/b.jpg", "./img/c.jpg", "./img/d.jpg", "./img/e.jpg", "./img/f.jpg"],
                        ["./img/2/a2.jpg", "./img/2/b2.png", "./img/2/c2.png", "./img/2/d2.png", "./img/2/e2.jpg", "./img/2/f2.jpg",],
                        ["./img/a.jpg", "./img/b.jpg", "./img/c.jpg", "./img/d.jpg", "./img/e.jpg", "./img/f.jpg"],
                        ["./img/2/a2.jpg", "./img/2/b2.png", "./img/2/c2.png", "./img/2/d2.png", "./img/2/e2.jpg", "./img/2/f2.jpg",],
                        ["./img/a.jpg", "./img/b.jpg", "./img/c.jpg", "./img/d.jpg", "./img/e.jpg", "./img/f.jpg"],
                        ["./img/2/a2.jpg", "./img/2/b2.png", "./img/2/c2.png", "./img/2/d2.png", "./img/2/e2.jpg", "./img/2/f2.jpg",]
                    ];
                    for (var i = 0; i < lloadl.length; i++) {
                        lloadl[i].style.opacity = 0;
                    }
                    for (var i = 0; i < imgs.length; i++) {
                        imgs[i].src = arr[node.index][i];
                    }
                    node.style.transition = "";
                    __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(node, "translateX", -tabwarp.clientWidth);
                    node.istiao = false;
                }, 2000);
            }
        }
    }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_transform__ = __webpack_require__(0);


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
        elestart.x = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(vessel, "translateX");
        elestart.y = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(vessel, "translateY");
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
            moveY = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(vessel, "translateY") + everymove.y * solac;
        } else if (moveY < minY) {
            isspeen = false;
            var chao = minY - moveY;
            solac = content.clientHeight / ((content.clientHeight + chao) * 2);
            moveY = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(vessel, "translateY") + everymove.y * solac;
        } else {
            solac = 1;
        }
        __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(vessel, "translateY", moveY);
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
            __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(vessel, "translateY", moveY);
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
        var speenend = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(vessel, "translateY") + speen * 200;
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
            var b = __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(node, "translateY");
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
                __WEBPACK_IMPORTED_MODULE_0__tools_transform__["a" /* default */].css(node, "translateY", Tween[type](t, b, c, d));
                if (barbox && (typeof barbox["move"]).toLowerCase() === "function") {
                    barbox["move"].call(vessel);
                }
            }, 1000 / 60);
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = ({
    vertical
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transform__ = __webpack_require__(0);


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
        __WEBPACK_IMPORTED_MODULE_0__transform__["a" /* default */].css(Callist, "translateX", index * document.documentElement.clientWidth);
        startX = __WEBPACK_IMPORTED_MODULE_0__transform__["a" /* default */].css(Callist, "translateX");
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
        __WEBPACK_IMPORTED_MODULE_0__transform__["a" /* default */].css(Callist, "translateX", startX + (nowX - shuX));
        __WEBPACK_IMPORTED_MODULE_0__transform__["a" /* default */].css(Callist, "translateY", 0);
    });

    Calparcel.addEventListener("touchend", function () {
        index = Math.round(__WEBPACK_IMPORTED_MODULE_0__transform__["a" /* default */].css(Callist, "translateX") / document.documentElement.clientWidth);
        Callist.style.transition = "0.5s transform";
        __WEBPACK_IMPORTED_MODULE_0__transform__["a" /* default */].css(Callist, "translateX", index * document.documentElement.clientWidth);
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
            __WEBPACK_IMPORTED_MODULE_0__transform__["a" /* default */].css(Callist, "translateX", index * document.documentElement.clientWidth);
            __WEBPACK_IMPORTED_MODULE_0__transform__["a" /* default */].css(Callist, "translateY", 0);
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
            __WEBPACK_IMPORTED_MODULE_0__transform__["a" /* default */].css(Callist, "translateX", index * document.documentElement.clientWidth);
            __WEBPACK_IMPORTED_MODULE_0__transform__["a" /* default */].css(Callist, "translateY", 0);
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
/* harmony default export */ __webpack_exports__["a"] = ({
    lb
});

/***/ })
/******/ ]);