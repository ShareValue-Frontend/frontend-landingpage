<template>
	<div class="wrapper">
		<div class="skip-button-container">
			<a class="skip-button" href="#end-of-slides"><span style="font-size: 20px">&#8595; skip</span></a>
		</div>
		<div class="slide react">
			<div class="slide-subtitle">
				<img width="300" height="150" src="../assets/img/react-img.png" />
			</div>
			<div class="slide-title">
				<h2>Ben jij een react-rocket?</h2>
			</div>

			<div class="react-slide-image slide-image">
				<img width="240" src="../assets/img/retro-rocket.png" />
			</div>
		</div>
		<div class="slide angular">
			<div class="slide-subtitle">
				<img width="300" height="150" src="../assets/img/angular-logo.png" />
			</div>
			<div class="slide-title">
				<h2>Of ben je één en al Angular-actie?</h2>
			</div>

			<div class="angular-slide-image slide-image">
				<img width="240" src="../assets/img/angular-ninja.png" />
			</div>
		</div>
		<div class="slide vue">
			<div class="slide-subtitle">
				<img width="300" height="150" src="../assets/img/vue-logo.png" />
			</div>
			<div class="slide-title">
				<h2>Of ben je een Vue Fighter?</h2>
			</div>
			<div class="vue-slide-image slide-image">
				<img width="240" src="../assets/img/vue-fighter.png" />
			</div>
		</div>
		<div class="slide js" id="end-of-slides">
			<div class="slide-logo">
				<h2>Frontend Developer</h2>
				<strong class="block">ShareValue</strong>
				<a class="home-page-link" href="https://www.sharevalue.nl/" target="_blank">ben je geïnteresseerd?</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import lax from 'lax.js'

onMounted(() => {
	lax.init()

	lax.addDriver('scrollY', function () {
		return window.scrollY
	})

	lax.addElements('.slide-title', {
		scrollY: {
			translateY: [
				['elInY', 'elCenterY', 'elOutY'],
				[800, 0, -800],
				{
					easing: 'easeInOutQuart',
					frameStep: 0.8
				}
			],
			opacity: [
				['elInY', 'elCenterY', 'elOutY'],
				[0, 1, 0],
				{
					easing: 'easeInOutQuart',
					frameStep: 1
				}
			]
		}
	})
	lax.addElements('.slide-logo', {
		scrollY: {
			opacity: [
				['elInY', 'elCenterY', 'elOutY'],
				[0, 1, 0],
				{
					easing: 'easeInOutQuart',
					frameStep: 0.5
				}
			]
		}
	})
	lax.addElements('.react-slide-image ', {
		scrollY: {
			translateX: [
				['elInY', 'elOutY'],
				[-2000, 2000],
				{
					easing: 'easeInOutQuart',
					frameStep: 0.5
				}
			],
			translateY: [
				['elInY', 'elOutY'],
				[700, -500],
				{
					easing: 'easeInOutQuart',
					frameStep: 1
				}
			]
		}
	})
	lax.addElements('.angular-slide-image ', {
		scrollY: {
			translateX: [
				['elInY', 'elOutY'],
				[-2000, 2000],
				{
					easing: 'easeInOutQuart',
					frameStep: 0.5
				}
			],
			translateY: [
				['elInY', 'elOutY'],
				[-700, 500],
				{
					easing: 'easeInOutQuart',
					frameStep: 1
				}
			]
		}
	})
	lax.addElements('.vue-slide-image ', {
		scrollY: {
			translateX: [
				['elInY', 'elOutY'],
				[2000, -2000],
				{
					easing: 'easeInOutQuart',
					frameStep: 0.5
				}
			]
		}
	})
	lax.addElements('.slide-subtitle', {
		scrollY: {
			translateY: [
				['elInY', 'elCenterY', 'elOutY'],
				[800, 0, -800],
				{
					easing: 'easeInOutQuart',
					frameStep: 0.5
				}
			]
			// opacity: [
			//   ["elInY", "elCenterY", "elOutY"],
			//   [0, 1, 0],
			//   {
			//     easing: "easeInOutQuart",
			//     frameStep: 0.5
			//   }
			// ]
		}
	})
})
</script>

<style scoped lang="scss">
.wrapper {
	min-height: 100vh;
	position: relative;
	background: linear-gradient(
		180deg,
		rgba(2, 159, 188, 1) 12%,
		rgba(162, 27, 30, 1) 34%,
		rgba(64, 151, 112, 1) 70%,
		rgba(247, 223, 30, 1) 84%
	);
}
.wrapper * {
	transition: transform 0.1s ease;
}
.slide {
	position: relative;
	overflow: hidden;
	height: 1250px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.block {
	text-transform: uppercase;
	background: #000;
	color: #f7df1e;
	padding: 2rem;
	font-size: 5rem;
	display: inline-block;
}
.slide h2 {
	font-size: 4.5rem;
	text-transform: uppercase;
	font-weight: bold;
	color: #fff;
	padding: 1rem;
}
.slide-subtitle {
	margin-top: 2rem;
	position: absolute;
	top: 50%;
}
.slide img {
	margin-top: 1rem;
	// width: 150px;
	height: auto;
	object-fit: cover;
}
.slide-background {
	width: 200vw;
	height: 200vh;
	position: absolute;
	top: 0;
	left: 0;
	background-repeat: repeat;
	background-position: top center;
	opacity: 0.4;
}
.slide-logo h2 {
	margin-bottom: 1rem;
}
.slide.js h2 {
	color: #000;
}
.skip-button-container {
	padding-top: 100px;
	padding-right: 20px;
	text-align: right;
}
.skip-button {
	padding: 8px 20px;
	border-radius: 15px;
	background-color: black;
	text-decoration: none;
	color: white;
	&:hover {
		color: red;
	}
}
.home-page-link {
	text-transform: uppercase;
	text-decoration: underline;
	color: #000;
	font-size: 2.9rem;
	font-weight: bold;
	display: block;
	margin-top: 20px;
	transition: 0.3s color, 0.3s text-decoration;
	&:hover {
		color: #ee7623;
	}
}
.slide-image {
	position: absolute;
	top: 40vh;
	left: 0;
}
.slide-subtitle img {
	filter: drop-shadow(13px 10px 6px rgb(0 0 0 / 0.4));
}
.react .slide-image img {
	transform: rotate(15deg);
}
.angular .slide-image img {
	transform: rotate(-40deg);
}
.vue .slide-image img {
	transform: rotate(180deg);
}
@media screen and (min-width: 300px) {
	.block {
		font-size: 10vw;
		padding: 1.5rem 2rem;
	}
	.slide h2 {
		font-size: 6.5vw;
	}
	.slide.js h2 {
		font-size: 6.2vw;
	}

	.home-page-link {
		font-size: 5.5vw;
	}
}
@media screen and (max-width: 500px) {
	.slide-image img,
	.slide-subtitle img {
		max-width: 100px;
	}
}

@media screen and (min-width: 600px) and (max-width: 1119px) {
	// .slide.js h2 {
	// 	font-size: 3rem;
	// }
}
@media screen and (min-width: 1120px) {
	.slide.js h2 {
		font-size: 6rem;
	}
	.slide h2 {
		padding: 1.5rem;
	}

	.block {
		font-size: 10rem;
	}
	.home-page-link {
		font-size: 5.5rem;
	}
}
</style>
