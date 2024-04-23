<template>
	<div class="bloc_nav">
		<nav class="nav" v-if="openNav" @click="openNav = false">

			<RouterLink @click="openNav = false" to="/" :class="[routePage == 'home' ? 'active' : ' ']">Home</RouterLink>
			<RouterLink @click="openNav = false" to="/blog" :class="[routePage == 'blog' ? 'active' : ' ']">Blog
			</RouterLink>
			<RouterLink @click="openNav = false" to="/contact" :class="[routePage == 'contact' ? 'active' : ' ']"> Contact
			</RouterLink>
			<RouterLink @click="openNav = false"  to="/login" :class="[routePage == 'login' ? 'active' : ' ']">Login</RouterLink>
			
			<RouterLink @click="openNav = false"  to="/postCreate" >Create</RouterLink>
			<RouterLink @click="openNav = false" to="/adminBoard" >Admin</RouterLink>
			<RouterLink @click="openNav = false" to="/" >Logout</RouterLink>

			<div class="animation start-home"></div>
		</nav>
		<div class="menu_line" @click="openNav = !openNav">
			<span class="line"></span>
			<span class="line"></span>
			<span class="line"></span>
		</div>
	</div>
</template>

<script setup>

import { ref } from 'vue';
import { storeToRefs } from 'pinia';
// import { usePageDataStore } from "../store/dataNav"
// // import { postUserStore } from "../store/logUser";

// const dataPageStore = usePageDataStore()
// //  const logStore = postUserStore()
// let routePage = ref("")
// let userLogged = ref(false)
// // let userLogged = storeToRefs(logStore.user)
 let openNav = ref(false)
// const logout = (() => {
// 	console.log("LOGOUT FUNCTION");
// })

// watchEffect(() => {
// 	if (dataPageStore.routePage) {
// 		console.log("NEW ROUTE", dataPageStore.routePage);
// 		routePage.value = dataPageStore.routePage
// 	}
// });
//  watchEffect(() => {
// 	if (logStore.user) {
// 		console.log("USER VALUE NAVBAR", logStore.user);
// 		user.value = true
// 	}
// });
</script>

<style lang="css" scoped>
@import url("../assets/style/reset.css");

.nav {
	position: relative;
	width: 100vw;
	height: auto;
	padding: 20px 0 10px;
	background-color: rgba(72, 61, 139, .6);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	animation: displayNav .3s ease-in forwards;
	overflow: hidden;
}

a {
	position: relative;
	display: block;
	color: white;
	margin: 5px auto;
	padding:3px 5px;
	border-radius: 3px;
}

a::after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 2px;
	bottom: -2px;
	left: 0;
	background-color: #0087ca;
	transform-origin: bottom right;
	transition: transform 0.25s ease-out;
}

a:hover::after {
	transform: scaleX(1);
	transform-origin: bottom left;
}

.menu_line {
	position: absolute;
	top: 20px;
	right: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 36px;
	height: 36px;
	align-items: center;
	text-align: center;
	padding: 0 2px;
	cursor: pointer;
	/* z-index:3; */
}

.line {
	width: 30px;
	border: 2px solid white;
	border-radius: 2px;
}

@keyframes displayNav {
	from {
		transform: translateY(-100%);
		opacity: 0;
	}

	to {
		transform: translateY(0);
		opacity: 1;
	}
}

@keyframes displayNavHorizontal {
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
}

@media screen and (min-width:756px) {
	.nav {
		width: 100px;
		height: 100vh;
		right: 0;
		position: fixed;
		animation: displayNavHorizontal .3s ease-in forwards;
		padding-top: 70px;

	}

}
/* BACKGROUND ACTIVE PAGE LINK */
.active{
	background-color: #0087ca;

}
/* ----------------------------- */
</style>