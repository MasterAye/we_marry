<template>
    <div id="lineargradient">
        <div class="contact-fp-wrap">
            <svg height="60" width="200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="75%" y2="100%">

                        <stop offset="0%" stop-color="#F79533">
                            <animate attributeName="stop-color" values="#F79533; #F37055; #EF4E7B; #A166AB; #5073B8; #1098AD; #07B39B; #6DBA82; #F79533" dur="4s" repeatCount="indefinite"></animate>
                        </stop>

                        <stop offset="100%" stop-color="#F79533">
                            <animate attributeName="stop-color" values="#F37055; #EF4E7B; #A166AB; #5073B8; #1098AD; #07B39B; #6DBA82; #F79533; #F37055" dur="4s" repeatCount="indefinite"></animate>
                        </stop>

                    </linearGradient>
                </defs>
                <rect class="booton" height="60" width="200" />
            </svg>
            <div class="booton-text">HOVER</div>
        </div>

    </div>
</template>

<script>
// import '../../../static/js/.js';
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

    },
    methods: {

    }
}
</script>

<style>
html,
body,
.lineargradient {
    background: #222;
    height: 100%;
    overflow: hidden;
    text-align: center;
}

.contact-fp-wrap {
    height: 60px;
    position: relative;
    top: 100px;
    left: 100px;
    transform: translateY(0%);
    width: 320px;
}
.booton {
    fill: transparent;
    stroke-dasharray: 140 540;
    stroke-dashoffset: -460;
    stroke-width: 8px;
    stroke: url("#logo-gradient");
}

.booton-text {
    color: #fff;
    font-family: "Lato";
    font-size: 22px;
    letter-spacing: 8px;
    line-height: 32px;
    position: relative;
    top: -48px;
}

@keyframes draw {
    0% {
        stroke-dasharray: 140 540;
        stroke-dashoffset: -474;
        stroke-width: 8px;
    }
    100% {
        stroke-dasharray: 540;
        stroke-dashoffset: 0;
        stroke-width: 2px;
    }
}

.contact-fp-wrap:hover .booton {
    -webkit-animation: 0.5s draw linear forwards;
    animation: 0.5s draw linear forwards;
}

.page-foot-column {
    order: 0;
    flex: 1 1 auto;
    align-self: auto;
    padding: 1em;
    font-family: Lato;
}

a {
    color: inherit;
}

/* html,
body,
.lineargradient {
    background: #333;
    height: 100%;
    overflow: hidden;
    text-align: center;
}

.contact-fp-wrap {
    height: 60px;
    position: relative;
    top: 100px;
    left: 100px;
    transform: translateY(0%);
    width: 320px;
}
.booton {
    fill: transparent;
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 8px;
    stroke: url("#logo-gradient");
}

.booton-text {
    color: #fff;
    font-family: "Lato";
    font-size: 22px;
    letter-spacing: 8px;
    line-height: 32px;
    position: relative;
    top: -48px;
}

@keyframes draw {
    0% {
        stroke-dasharray: 140 540;
        stroke-dashoffset: -474;
        stroke-width: 8px;
    }
    100% {
        stroke-dasharray: 760;
        stroke-dashoffset: 0;
        stroke-width: 2px;
    }
}

.contact-fp-wrap:hover .booton {
    -webkit-animation: 0.5s draw linear forwards;
    animation: 0.5s draw linear forwards;
}

.page-foot-column {
    order: 0;
    flex: 1 1 auto;
    align-self: auto;
    padding: 1em;
    font-family: Lato;
}

a {
    color: inherit;
} */
</style>
