<template>
    <div id="load">
        <!-- <div class="load_bg"></div> -->
        <div id="mainDiv">
            <div id="content">
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
        <div class="goToMarryHappy">
            
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
html,
body,
#load {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.load_bg {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #ffe;
    font-size: 12px;
    overflow: auto;
    background: url(../../../static/images/marry/marry_bg_02.jpg) center/100% 100% no-repeat;
    /* background-size: cover; */
}
#mainDiv {
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 238);
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
