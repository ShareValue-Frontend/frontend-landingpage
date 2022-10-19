<template>
	<div class="wrapper">
		<div class="slide js">
			<div class="slide-background"></div>
			<div class="slide-logo">
				<h2>Frontend Developer</h2>
				<strong class="block">ShareValue</strong>
			</div>
		</div>
		<div class="slide react">
			<div class="slide-background"></div>
			<div class="slide-title">
				<h2>Ben jij een react-rocket?</h2>
			</div>
			<div class="slide-subtitle">
				<img width="150" height="150" src="https://sharevalue-frontend.netlify.app/img/react-img.png" />
			</div>
		</div>
		<div class="slide angular">
			<div class="slide-background"></div>
			<div class="slide-title">
				<h2>Of ben je één en al Angular-actie?</h2>
			</div>
			<div class="slide-subtitle">
				<img width="150" height="150" src="https://angular.io/assets/images/logos/angular/angular.svg" />
			</div>
		</div>
		<div class="slide vue">
			<div class="slide-background"></div>
			<div class="slide-title">
				<h2>Of ben je een Vue Fighter?</h2>
			</div>
			<div class="slide-subtitle">
				<img width="150" height="150" src="https://sharevalue-frontend.netlify.app/img/vue-logo.png" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineComponent, onMounted } from '@vue/runtime-core'
import lax from 'lax.js'

const frameWidth = 370
const frameCount = 12

window.onload = function () {}

onMounted(() => {
	lax.init()

	console.log('lax: ', lax)
	console.log('scroll: ', window.scrollY)

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
					frameStep: 0.5
				}
			],
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
	lax.addElements('.slide-background', {
		scrollY: {
			translateX: [
				['elInY', 'elOutY'],
				[-500, -200]
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

<style scoped>
.wrapper {
	min-height: 100vh;
	position: relative;
}
.bg {
	position: absolute;
	left: 50px;
	top: 0;
	width: 100%;
	height: 100%;
	background: #f7df1e;
	transition: all 0.3s ease-in-out;
}
.slide {
	position: relative;
	overflow: hidden;
	height: 200vh;
	background: grey;
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
	font-size: 3rem;
	text-transform: uppercase;
	font-weight: bold;
	color: #fff;
}
.slide-subtitle {
	margin-top: 2rem;
	position: absolute;
	top: 50%;
}
.slide img {
	margin-top: 1rem;
	width: 150px;
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

.js .slide-background {
	background-image: url('https://raw.githubusercontent.com/ShareValue-Frontend/frontend-logos/main/js-pattern.png');
}

.js .slide-logo {
	position: absolute;
	top: 50vh;
}
.slide-logo h2 {
	margin-bottom: 1rem;
}

.js {
	background: #f7df1e;
}
.slide.js h2 {
	color: #000;
}
.vue {
	background: #409770;
}

.vue .slide-background {
	background-image: url('https://raw.githubusercontent.com/ShareValue-Frontend/frontend-logos/main/vue-pattern.png');
}

.react {
	background: #029fbc;
}

.react .slide-background {
	background-image: url('https://raw.githubusercontent.com/ShareValue-Frontend/frontend-logos/main/react-pattern.png');
}

.angular {
	background: #a21b1e;
}

.angular .slide-background {
	background-image: url('https://raw.githubusercontent.com/ShareValue-Frontend/frontend-logos/main/angular-pattern.png');
}

@media screen and (min-width: 300px) and (max-width: 600px) {
	.block {
		font-size: 10vw;
		padding: 1.5rem 2rem;
	}
	.slide h2 {
		font-size: 7vw;
	}

	.slide.react h2,
	.slide.vue h2,
	.slide.angular h2 {
		font-size: 11vw;
	}
}
</style>
