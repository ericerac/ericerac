<template>
    
    <div class="bloc_nav">
        <nav>
	<RouterLink to="/">Home</RouterLink>
	<RouterLink to="/">Blog</RouterLink>
	<RouterLink to="/">Contact</RouterLink>
	<RouterLink to="/login">Login</RouterLink>
	<RouterLink to="/" v-if="user">Login</RouterLink>
	<RouterLink to="/" v-if="user">Login</RouterLink>
	<RouterLink to="/" v-if="user">Login</RouterLink>
	
	<div class="animation start-home"></div>
</nav>
    </div>
</template>

<script setup>

import { ref } from 'vue';

let user = ref(false)
</script>

<style lang="css" scoped>

.bloc_nav{
    position: absolute;
    text-align: center;
    top:10px;
    left:50%;
    transform: translate(-50%);
}
nav {
    display: flex;
    flex-direction: row;
	margin: 27px auto 0;
	position: relative;
	width: auto;
	height: 50px;
	background-color: #34495e;
	background-color: transparent;
	border-radius: 8px;
	font-size: 0;
}
nav a {
	line-height: 50px;
	height: 100%;
	font-size: 15px;
	display: inline-block;
	position: relative;
	z-index: 1;
	text-decoration: none;
	text-transform: uppercase;
	text-align: center;
	color: white;
	cursor: pointer;
}
nav .animation {
	position: absolute;
	height: 100%;
	top: 0;
	z-index: 0;
	transition: all .5s ease 0s;
	border-radius: 8px;
}

a:nth-child(1) {
	width: 60px;
}
a:nth-child(2) {
	width: 60px;
}
a:nth-child(3) {
	width: 60px;
}
a:nth-child(4) {
	width: 60px;
}
a:nth-child(5) {
	width: auto;
}
a{
    margin: 0 20px;
}
nav .start-home, a:nth-child(1):hover~.animation {
	width: 60px;
    height: 30px;
	left: 20px;
    top:10px;
    
	background-color: #1abc9c;
}
nav .start-about, a:nth-child(2):hover~.animation {
	width: 60px;
	left: 120px;
	background-color: #e74c3c;
}
nav .start-blog, a:nth-child(3):hover~.animation {
	width: 80px;
	left: 215px;
	background-color: #3498db;
}
nav .start-portefolio, a:nth-child(4):hover~.animation {
	width: 60px;
	left: 320px;
	background-color: #9b59b6;
}
nav .start-contact, a:nth-child(5):hover~.animation {
	width: 120px;
	left: 470px;
	background-color: #e67e22;
}


@media screen and (min-width: 756px) {
    

a:nth-child(1) {
	width: 80px;
}
a:nth-child(2) {
	width: 80px;
}
a:nth-child(3) {
	width: 80px;
}
a:nth-child(4) {
	width: 80px;
}
a:nth-child(5) {
	width: auto;
}
a{
    margin: 0 20px;
}
nav .start-home, a:nth-child(1):hover~.animation {
	width: 80px;
	left: 20px;
    
	background-color: #1abc9c;
}
nav .start-about, a:nth-child(2):hover~.animation {
	width: 80px;
	left: 140px;
	background-color: #e74c3c;
}
nav .start-blog, a:nth-child(3):hover~.animation {
	width: 100px;
	left: 250px;
	background-color: #3498db;
}
nav .start-portefolio, a:nth-child(4):hover~.animation {
	width: 80px;
	left: 380px;
	background-color: #9b59b6;
}
nav .start-contact, a:nth-child(5):hover~.animation {
	width: 120px;
	left: 470px;
	background-color: #e67e22;
}

}





</style>