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