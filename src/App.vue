<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html,
body {
    /* background-color: #222; */
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
ol,
ul,
li {
    list-style: none;
    outline: 0;
    border: 0;
}
select,
input,
img {
    border: 0;
    vertical-align: middle;
}
a {
    color: skyblue;
    text-decoration: none;
}
a:hover {
    color: #cd0200;
    text-decoration: underline;
}
i,
em,
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
}
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix {
    *zoom: 1;
}
</style>
