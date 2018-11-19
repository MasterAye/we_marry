<template>
    <div id="load">
        <div id="mainDiv">
            <div id="content">
                <!-- <div id="code">
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
                </div> -->
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
    </div>
</template>

<script>
import "../../../static/js/marry_load.js"
export default {
    name: 'load',
    data() {
        return {

        }
    },
    computed: {

    },
    watch: {

    },
    components: {

    },
    created() {
    },
    mounted() {
    },
    methods: {

    }
}
</script>
<style scoped>
/* @import "../../../static/css/.css"; */
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
#errorMsg {
    width: 100%;
    text-align: center;
    font-size: 24px;
    position: absolute;
    top: 100px;
    left: 0;
}
</style>
