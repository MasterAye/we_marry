<template>
    <div id="layout">
        <div class="menu_all">
            <svg width="0" height="0">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix>
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
                    </filter>
                </defs>
            </svg>
            <div class="aside-nav bounceInUp animated" id="aside-nav">
                <label for="" class="aside-menu" title="按住拖动">菜单</label>
                <router-link to="/index/fullpage" title="返回首页" class="menu-item menu-first">首页</router-link>
                <router-link to="/index/brithday" title="" class="menu-item menu-second">brithday</router-link>
                <router-link to="/index/draggable" title="拖拽相册" class="menu-item menu-third">draggable</router-link>
                <router-link to="/index/lineargradient" title="渐变框" class="menu-item menu-fourth">linear</router-link>
                <router-link to="/index/test" title="粒子跟随" class="menu-item menu-five">跟随</router-link>
                <router-link to="/index/photo3d" title="3D拖动相册" class="menu-item menu-six">3D</router-link>
                <!-- <a href="javascript:void(0);" title="拖拽相册" class="menu-item menu-third">夏1</a> -->
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
import "../../static/js/listmenu.js";
export default {
    name: 'layout',
    data() {
        return {
        }
    },
    methods: {

    },
    mounted() {

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../static/css/listmenu.css";
.menu_all {
    position: fixed;
    z-index: 9999;
}
</style>
