<template>
    <div id="photo3d">
        <div id="perspective">
            <div id='wrap'>
                <img src="../../../static/images/photo3d_01.png" />
                <img src="../../../static/images/photo3d_01.png" />
                <img src="../../../static/images/photo3d_01.png" />
                <img src="../../../static/images/photo3d_01.png" />
                <img src="../../../static/images/photo3d_01.png" />
                <img src="../../../static/images/photo3d_01.png" />
                <img src="../../../static/images/photo3d_01.png" />
                <img src="../../../static/images/photo3d_01.png" />
                <img src="../../../static/images/photo3d_01.png" />
                <img src="../../../static/images/photo3d_01.png" />
                <p></p>
            </div>
        </div>
    </div>
</template>
<script>
import "../../../static/js/photo3d.js";
export default {
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
        // this.$router.go(0);
    },
    methods: {

    }
}
</script>

<style scoped>
#photo3d {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #000;
}
#perspective {
    perspective: 800px;
}
#wrap {
    width: 120px; /*133:200  4:6  */
    height: 180px;
    margin: 0 auto;
    position: relative;

    /*搭建3D效果必须的两个属性：一个变换风格变3d，一个场景景深800px*/
    transform-style: preserve-3d;
    transform: rotateX(-10deg) rotateY(0deg);
}
#wrap img {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 1px;

    transform: rotateY(0deg) translateZ(0px);
    /*倒影：朝向 偏移 遮盖*/ /*线性渐变(从哪里开始,开始时候的颜色,结束时候的颜色)*/
    -webkit-box-reflect: below 5px -webkit-linear-gradient(top, rgba(0, 0, 0, 0)
                40%, rgba(0, 0, 0, 0.5) 100%);
}
#wrap p {
    width: 1200px;
    height: 1200px;
    background: -webkit-radial-gradient(
        center center,
        600px 600px,
        rgba(244, 23, 234, 0.2),
        rgba(0, 0, 0, 0)
    );
    border-radius: 100%;
    position: absolute;
    left: 50%;
    top: 102%;
    margin-left: -600px;
    margin-top: -600px;
    transform: rotateX(90deg);
}
</style>
