import transform from "../tools/transform";

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
    transform.css(tablist[i], "translateX", -tabwarp.clientWidth);
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
        eleloac.x = transform.css(tablistnode, "translateX");
        eleloac.y = transform.css(tablistnode, "translateY");
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
        transform.css(tablistnode, "translateX", transformx);
        tiao(tablistnode);
    });
    tablistnode.addEventListener("touchend", function (ev) {
        ev = ev || event;
        if (tablistnode.istiao) {
            return;
        } else {
            tablistnode.style.transition = "1s transform";
            transform.css(tablistnode, "translateX", eleloac.x);
        }
    });
    function tiao(node) {
        if (Math.abs(shudisloac.x) > tabwarp.clientWidth / 2) {
            node.istiao = true;
            var translateX = shudisloac.x > 0 ? 0 : -2 * tabwarp.clientWidth;

            node.style.transition = "1s transform";
            transform.css(node, "translateX", translateX);
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
                transform.css(smallG, "translateX", navli[node.index].offsetLeft);
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
                    transform.css(node, "translateX", -tabwarp.clientWidth);
                    node.istiao = false;
                }, 2000);
            }
        }
    }
}