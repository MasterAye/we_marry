<template>
    <div id="fullpage">
        <!-- @someSwiperEvent="callback" -->
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
                <div id="mainDiv">
                    <div id="content">
                        <div id="code">
                            <span class="comments">/**</span><br />
                            <span class="space" /><span class="comments">* We are both Fudan SSers and programmers,</span><br />
                            <span class="space" /><span class="comments">* so I write some code to celebrate our 1st anniversary.</span><br />
                            <span class="space" /><span class="comments">*/</span><br />
                            Boy i = <span class="keyword">new</span> Boy(<span class="string">"hackerzhou"</span>);<br />
                            Girl u = <span class="keyword">new</span> Girl(<span class="string">"MaryNee"</span>);<br />
                            <span class="comments">// Nov 2, 2010, I told you I love you. </span><br />
                            i.love(u);<br />
                            <span class="comments">// Luckily, you accepted and became my girlfriend eversince.</span><br />
                            u.accepted();<br />
                            <span class="comments">// Since then, I miss u every day.</span><br />
                            i.miss(u);<br />
                            <span class="comments">// And take care of u and our love.</span><br />
                            i.takeCareOf(u);<br />
                            <span class="comments">// You say that you won't be so easy to marry me.</span><br />
                            <span class="comments">// So I keep waiting and I have confidence that you will.</span><br />
                            <span class="keyword">boolean</span> isHesitate = <span class="keyword">true</span>;<br />
                            <span class="keyword">while</span> (isHesitate) {<br />
                            <span class="placeholder" />i.waitFor(u);<br />
                            <span class="placeholder" /><span class="comments">// I think it is an important decision</span><br />
                            <span class="placeholder" /><span class="comments">// and you should think it over.</span><br />
                            <span class="placeholder" />isHesitate = u.thinkOver();<br />
                            }<br />
                            <span class="comments">// After a romantic wedding, we will live happily ever after.</span><br />
                            i.marry(u);<br />
                            i.liveHappilyWith(u);<br />
                        </div>
                        <div id="loveHeart">
                            <canvas id="garden"></canvas>
                            <div id="words">
                                <div id="messages">
                                    Minyue, I have fallen in love with you for
                                    <div id="elapseClock"></div>
                                </div>
                                <div id="loveu">
                                    Love u forever and ever.<br />
                                    <div class="signature">- hackerzhou</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide id="polaroid">
                <div class="polaroid"></div>
            </swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide>
            <!-- Optional controls -->
            <!-- 小圆点、分页器 -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- 上一项 -->
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <!-- 下一项 -->
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <!-- 滚动条 -->
            <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>
<script>
import "../../../static/js/fullpage_slide01_garden.js"
export default {
    name: 'fullpage',
    data() {
        return {
            swiperOption: {
                // some swiper options/callbacks
                direction: 'vertical', // 滑动方向
                effect: 'filp',  // 设置轮播
                speed: 800, // 滑动速度
                slidesPerView: 1,
                mousewheel: true,
                //分页器设置
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets', // 'bullets' 'fraction' 'progressbar' 'custom'
                    clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
                    progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
                    bulletElement: 'li', //设定分页器指示器（小点）的HTML标签。
                    dynamicMainBullets: 2, //动态分页器的主指示点的数量
                    hideOnClick: false, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
                    // dynamicBullets: true,  //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
                },
                //左右点击
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    // hideOnClick: true, //点击slide时显示/隐藏按钮
                    // disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
                    // hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
                },
                // 滚动条设置
                scrollbar: {
                    el: '.swiper-scrollbar',
                    // hide: true, //滚动条是否自动隐藏。默认：false，不会自动隐藏。
                    // draggable: true, //该参数设置为true时允许拖动滚动条。
                    // snapOnRelease: true, //如果设置为false，释放滚动条时slide不会自动贴合。
                    // dragSize: 30, //设置滚动条指示的尺寸。默认'auto': 自动，或者设置num(px)。
                },
                //滑动之后回调函数
                on: {
                    slideChangeTransitionEnd: function () {
                        // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                    },
                },
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    watch: {

    },
    components: {

    },
    created() {
    },
    mounted() {
        // this.swiper.slideTo(3, 1000, false);
    },
    methods: {

    }
}
</script>

<style scoped>
#fullpage {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
}
#fullpage .swiper-container {
    width: 100%;
    height: 100%;
}


/* swiper_slide_01 第一个页面样式开始 */
body {
    margin: 0;
    padding: 0;
    background: #ffe;
    font-size: 12px;
    overflow: auto;
}
#mainDiv {
    width: 100%;
    height: 100%;
}
#loveHeart {
    float: left;
    width: 670px;
    height: 625px;
}
#garden {
    width: 100%;
    height: 100%;
}
#elapseClock {
    text-align: right;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
}
#words {
    font-family: "sans-serif";
    width: 500px;
    font-size: 24px;
    color: #666;
}
#messages {
    display: none;
}
#elapseClock .digit {
    font-family: digit;
    font-size: 36px;
}
#loveu {
    padding: 5px;
    font-size: 22px;
    margin-top: 80px;
    margin-right: 120px;
    text-align: right;
    display: none;
}
#loveu .signature {
    margin-top: 10px;
    font-size: 20px;
    font-style: italic;
}
#clickSound {
    display: none;
}
#code {
    float: left;
    width: 440px;
    height: 400px;
    color: #333;
    font-family: consolas, monaco, bitstream vera sans mono, courier new,
        "sans-serif";
    font-size: 12px;
}
#code .string {
    color: #2a36ff;
}
#code .keyword {
    color: #7f0055;
    font-weight: 700;
}
#code .placeholder {
    margin-left: 15px;
}
#code .space {
    margin-left: 7px;
}
#code .comments {
    color: #3f7f5f;
}
#copyright {
    margin-top: 10px;
    text-align: center;
    width: 100%;
    color: #666;
}
#errorMsg {
    width: 100%;
    text-align: center;
    font-size: 24px;
    position: absolute;
    top: 100px;
    left: 0;
}
#copyright a {
    color: #666;
}
/* swiper_slide_01 第一个页面样式结束 */

/* swiper_slide_02 第二个页面样式开始 */
#polaroid {
    background: url("http://www.jq22.com/tp/73bc6777-e4b2-438a-8615-995eff0f8bb4.jpg")
        no-repeat 50% 70%;
    background-size: cover;
    height: 100%;
}
body {
    max-width: 40em;
    margin: 0 auto;
}
img {
    max-width: 100%;
}
.polaroid {
    position: absolute;
    top: 5em;
    left: 50%;
    width: 50%;
    padding-bottom: 30%;
    max-width: 20em;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-style: solid;
    border-color: #fff;
    border-width: 1em 1em 4.5em;
    box-shadow: 0 0 1em rgba(153, 153, 153, 0.4), 0 0 25em rgba(0, 0, 0, 0.7),
        0 0 30em rgba(0, 0, 0, 0.5), 0 0 40em #000;
    -webkit-animation: swing 3.5s ease-in-out forwards infinite;
    animation: swing 3.5s ease-in-out forwards infinite;
    -webkit-transform-origin: 50% -10em;
    transform-origin: 50% -10em;
}
.polaroid::before,
.polaroid::after {
    content: "";
    position: absolute;
    bottom: 100%;
    height: 10em;
    width: 0.2em;
    background-color: #000;
}
.polaroid::before {
    -webkit-transform: skew(3deg);
    transform: skew(3deg);
    left: 0.5em;
}
.polaroid::after {
    -webkit-transform: skew(-3deg);
    transform: skew(-3deg);
    right: 0.5em;
}
@-webkit-keyframes swing {
    0% {
        -webkit-transform: translateX(-50%) rotate(10deg);
        transform: translateX(-50%) rotate(10deg);
    }
    50% {
        -webkit-transform: translateX(-50%) rotate(-10deg) skewX(5deg)
            skewY(-2deg) scale(1.1);
        transform: translateX(-50%) rotate(-10deg) skewX(5deg) skewY(-2deg)
            scale(1.1);
    }
    100% {
        -webkit-transform: translateX(-50%) rotate(10deg);
        transform: translateX(-50%) rotate(10deg);
    }
}
@keyframes swing {
    0% {
        -webkit-transform: translateX(-50%) rotate(10deg);
        transform: translateX(-50%) rotate(10deg);
    }
    50% {
        -webkit-transform: translateX(-50%) rotate(-10deg) skewX(5deg)
            skewY(-2deg) scale(1.1);
        transform: translateX(-50%) rotate(-10deg) skewX(5deg) skewY(-2deg)
            scale(1.1);
    }
    100% {
        -webkit-transform: translateX(-50%) rotate(10deg);
        transform: translateX(-50%) rotate(10deg);
    }
}

/* swiper_slide_02 第二个页面样式结束*/
</style>

