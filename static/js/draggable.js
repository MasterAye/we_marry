
function getClass(cls) {
    var ret = [];
    var els = document.getElementsByTagName("*");
    for (var i = 0; i < els.length; i++) {
        if (els[i].className === cls || els[i].className.indexOf("cls") >= 0 || els[i].className.indexOf(" cls") >= 0 || els[i].className.indexOf(" cls ") > 0) {
            ret.push(els[i]);
        }
    }
    return ret;
}

function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}

function startMove(obj, json, fun) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var isStop = true;
        for (var attr in json) {
            var iCur = 0;
            if (attr == "opacity") {
                iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                iCur = parseInt(getStyle(obj, attr));
            }
            var ispeed = (json[attr] - iCur) / 8;
            ispeed = ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);
            if (iCur != json[attr]) {
                isStop = false;
            }
            if (attr == "opacity") {
                obj.style.filter = "alpha:(opacity:" + (json[attr] + ispeed) + ")";
                obj.style.opacity = (json[attr] + ispeed) / 100;
            } else {
                obj.style[attr] = iCur + ispeed + "px";
            }
        }
        if (isStop) {
            clearInterval(obj.timer);
            if (fun) {
                fun();
            }
        }
    }, 30);
}



$(function () {
    var oUl = document.getElementById("drag_div");
    var aLi = oUl.getElementsByTagName('div');
    var disX = 0;
    var disY = 0;
    var minZindex = 1;
    var aPos = [];
    for (var i = 0; i < aLi.length; i++) {
        var t = aLi[i].offsetTop;
        var l = aLi[i].offsetLeft;
        aLi[i].style.top = t + "px";
        aLi[i].style.left = l + "px";
        aPos[i] = {
            left: l,
            top: t
        };
        aLi[i].index = i;
    }
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].style.position = "absolute";
        aLi[i].style.margin = 0;
        setDrag(aLi[i]);
    }

    function setDrag(obj) {
        obj.onmouseover = function () {
            obj.style.cursor = "move";
        }
        obj.onmousedown = function (event) {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            obj.style.zIndex = minZindex++;
            disX = event.clientX + scrollLeft - obj.offsetLeft;
            disY = event.clientY + scrollTop - obj.offsetTop;
            document.onmousemove = function (event) {
                var l = event.clientX - disX + scrollLeft;
                var t = event.clientY - disY + scrollTop;
                obj.style.left = l + "px";
                obj.style.top = t + "px";
                for (var i = 0; i < aLi.length; i++) {
                    aLi[i].className = aLi[i].className;
                }
                var oNear = findMin(obj);
                if (oNear) {}
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
                var oNear = findMin(obj);
                if (oNear) {
                    var width1 = oNear.clientWidth;
                    var height1 = oNear.clientHeight;
                    var width2 = obj.clientWidth;
                    var height2 = obj.clientHeight;
                    console.log(width1 + width2)
                    console.log(oNear.className);
                    console.log(obj.className)
                    var className1 = obj.className;
                    var className2 = oNear.className;
                    obj.className = className2;
                    oNear.className = className1;
                    oNear.style.zIndex = minZindex++;
                    obj.style.zIndex = minZindex++;
                    startMove(oNear, aPos[obj.index]);
                    startMove(obj, aPos[oNear.index]);
                    oNear.index += obj.index;
                    obj.index = oNear.index - obj.index;
                    oNear.index = oNear.index - obj.index;
                    obj.clientWidth = width2;
                    obj.clientHeight = height2;
                    oNear.clientWidth = width1;
                    oNear.clientHeight = height1;
                } else {
                    startMove(obj, aPos[obj.index]);
                }
            }
            clearInterval(obj.timer);
            return false;
        }
    }

    function colTest(obj1, obj2) {
        var t1 = obj1.offsetTop;
        var r1 = obj1.offsetWidth + obj1.offsetLeft;
        var b1 = obj1.offsetHeight + obj1.offsetTop;
        var l1 = obj1.offsetLeft;
        var t2 = obj2.offsetTop;
        var r2 = obj2.offsetWidth + obj2.offsetLeft;
        var b2 = obj2.offsetHeight + obj2.offsetTop;
        var l2 = obj2.offsetLeft;
        if (t1 > b2 || r1 < l2 || b1 < t2 || l1 > r2) {
            return false;
        } else {
            return true;
        }
    }

    function getDis(obj1, obj2) {
        var a = obj1.offsetLeft - obj2.offsetLeft;
        var b = obj1.offsetTop - obj2.offsetTop;
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }

    function findMin(obj) {
        var minDis = 999999999;
        var minIndex = -1;
        for (var i = 0; i < aLi.length; i++) {
            if (obj == aLi[i]) continue;
            if (colTest(obj, aLi[i])) {
                var dis = getDis(obj, aLi[i]);
                if (dis < minDis) {
                    minDis = dis;
                    minIndex = i;
                }
            }
        }
        if (minIndex == -1) {
            return null;
        } else {
            return aLi[minIndex];
        }
    }
})
