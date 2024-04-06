<template>
    <header>
        <div class="container">
	<div class="yellow"></div>
	<div class="red"></div>
	<div class="blue"></div>
	<div class="violet"></div>
</div>
</header>
</template>

<script setup>

</script>

<style lang="css" scoped>
.header {
	--yellow: #feb60a;
	--red: #ff0062;
	--blue: #00dbf9;
	--violet: #da00f7;
}
.header {
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
    width:100vw;
    position: fixed;
	background-color: #1a1940;
	background-color: transparent;
    z-index: 111;
}
div.container {
	display: flex;
	justify-content: center;
	align-items: center;
    width:auto;
}
div > div {
	width: 3vw;
	height: 3vw;
    max-width: 30px;
    max-height: 30px;
	border-radius: 100%;
	margin: 10px;
	background-image: linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 100%);
	animation: bounce 1.5s 0s linear infinite;
}
.yellow {
	background-color: var(--yellow);
	background-color: yellow;
}

.red {
	background-color: var(--red);
	background-color: red;
	animation-delay: 0.2s;
}

.blue {
	background-color: var(--blue);
	background-color: blue;
	animation-delay: 0.4s;
}

.violet {
	background-color: var(--violet);
	background-color: violet;
	animation-delay: 0.6s;
}

@keyframes bounce {
	0%, 50%, 100% {
		transform: scale(1);
		filter: blur(0px);
	}
	25% {
		transform: scale(0);
		filter: blur(3px);
	}
	75% {
		filter: blur(3px);
		transform: scale(1.8);
	}
}
</style>