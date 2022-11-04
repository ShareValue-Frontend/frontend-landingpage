<template>
	<div class="wrapper">
		<div class="skip-button-container">
			<a class="skip-button" href="#end-of-slides"><span style='font-size:20px;'>&#8595; skip</span></a>	
		</div>
		<div class="slide react">
			<div class="slide-title">
				<h2>Ben jij een react-rocket?</h2>
			</div>
			<div class="slide-image">
				<img width="90" src="../assets/img/rocket.png" />
			</div>
			<div class="slide-subtitle">
				<img width="300" height="150" src="https://sharevalue-frontend.netlify.app/img/react-img.png" />
			</div>
		</div>
		<div class="slide angular">
			<div class="slide-background"></div>
			<div class="slide-title">
				<h2>Of ben je één en al Angular-actie?</h2>
			</div>
			<div class="slide-subtitle">
				<img width="300" height="150" src="https://angular.io/assets/images/logos/angular/angular.svg" />
			</div>
		</div>
		<div class="slide vue">
			<div class="slide-background"></div>
			<div class="slide-title">
				<h2>Of ben je een Vue Fighter?</h2>
			</div>
			<div class="slide-subtitle">
				<img width="300" height="150" src="https://sharevalue-frontend.netlify.app/img/vue-logo.png" />
			</div>
		</div>
		<div class="slide js" id="end-of-slides">
			<div class="slide-background"></div>
			<div class="slide-logo">
				<h2>Frontend Developer</h2>
				<strong class="block">ShareValue</strong>
				<a class="home-page-link" href="https://www.sharevalue.nl/" >ben je geïnteresseerd ?</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
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
	lax.addElements('.slide-background', {
		scrollY: {
			translateX: [
				['elInY', 'elOutY'],
				[-500, -200]
			]
		}
	})
	lax.addElements('.slide-image', {
		scrollY: {
			translateX: [
				['elInY', 'elOutY'],
				[-2700, 1300]
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
	background: linear-gradient(180deg, rgba(2,159,188,1) 12%, rgba(162,27,30,1) 34%, rgba(64,151,112,1) 70%, rgba(247,223,30,1) 84%);
}
.slide {
	position: relative;
	overflow: hidden;
	height: 90vh;
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
.js{
	height: 120vh;
}
.js .slide-logo {
	position: absolute;
	top: 50vh;
}
.slide-logo h2 {
	margin-bottom: 1rem;
}
.slide.js h2 {
	font-size: 6rem;
	color: #000;
}
.skip-button-container{
	padding-top: 100px;
	padding-right: 20px;
	text-align:right;
}
.skip-button{
	padding: 8px 20px;
	border-radius: 15px;
	background-color: black;
	text-decoration: none;
	color: white;
	&:hover{
    color: red;
	}
}
.home-page-link{
  color: #fff;
  font-size: 3.3rem;
  font-weight: bold;
  display: block;
  margin-top: 20px;
  &:hover{
	color:red
  }
}
.slide-image {
position: absolute;
top: 55vh;
}
.slide-image img{
	transform: rotate(15deg);
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

@media screen and (min-width: 1120px)  {
	.block{
		font-size: 10rem;
	}
	.home-page-link{
		font-size: 6.2rem;
	}
}
</style>
