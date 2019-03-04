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
