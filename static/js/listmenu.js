$(function () {
    var ua = navigator.userAgent;
    /Safari|iPhone/i.test(ua) && 0 == /chrome/i.test(ua) && $("#aside-nav").addClass("no-filter");
    var drags = {
            down: !1,
            x: 0,
            y: 0,
            winWid: 0,
            winHei: 0,
            clientX: 0,
            clientY: 0
        },
        asideNav = $("#aside-nav")[0],
        getCss = function (a, e) {
            return a.currentStyle ? a.currentStyle[e] : document.defaultView.getComputedStyle(a, !1)[e]
        };
    $("#aside-nav").on("mousedown", function (a) {
        a.stopPropagation();
        drags.down = !0,
            drags.clientX = a.clientX,
            drags.clientY = a.clientY,
            // 根据右边框进行定位   // 原始代码
            drags.x = getCss(this, "right"),
            // drags.x = getCss(this, "left"),
            drags.y = getCss(this, "top"),
            drags.winHei = $(window).height(),
            drags.winWid = $(window).width(),
            $(document).on("mousemove", function (a) {
                a.stopPropagation();
                if (drags.winWid > 640 && (a.clientX < 120 || a.clientX > drags.winWid - 50))
                    return false;
                if (a.clientY < 140 || a.clientY > drags.winHei - 120)
                    return false;
                if (a.clientX < 140 || a.clientX > drags.winWid - 120)
                    return false;
                var e = a.clientX - drags.clientX,
                    t = a.clientY - drags.clientY;
                asideNav.style.top = parseInt(drags.y) + t + "px";
                // 根据右边框进行定位  // 原始代码
                asideNav.style.right = parseInt(drags.x) - e + "px";
                // asideNav.style.left = parseInt(drags.x) + e + "px";
            })
    }).on("mouseup", function (a) {
        a.stopPropagation();
        drags.down = !1, $(document).off("mousemove")
    });
})
