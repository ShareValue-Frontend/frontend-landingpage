<template>
	<a-scene
		embedded
		id="scene"
		background="color: rgb(255, 231, 66);"
		vr-mode-ui="enabled: false;"
		renderer="colorManagement: true;"
		screenshot
	>
		<a-entity id="rig" position="25 10 0">
			<a-entity id="camera" scale="1 1 0.5" camera look-controls="false" wasd-controls="false"></a-entity>
		</a-entity>
		<a-assets>
			<!--<a-asset-item id="glove" src="../src/assets/obj/boxingGlove/scene.gltf"></a-asset-item>-->
			<a-asset-item id="frontendObj" src="../src/assets/obj/frontend developer.obj"></a-asset-item>
			<a-asset-item id="sharevalueObj" src="../src/assets/obj/sv3.obj"></a-asset-item>
			<a-asset-item id="reactRocketObj" src="../src/assets/obj/react-rocket.obj"></a-asset-item>
			<a-asset-item id="rocketObj" src="../src/assets/obj/10475_Rocket_Ship_v1_L3.obj"></a-asset-item>
			<a-asset-item id="angularObj" src="../src/assets/obj/angular.obj"></a-asset-item>
			<a-asset-item id="vueObj" src="../src/assets/obj/vue.obj"></a-asset-item>
			<img id="react-img" src="../assets/img/react-img.png" />
			<img id="angular-img" src="../assets/img/angular.png" />
			<img id="vue-img" src="../assets/img/vue-logo.png" />
		</a-assets>
		<!--<a-gltf-model scale="0.01 0.01 0.01" position="25 10 -7" rotation="0 180 0" src="#glove"></a-gltf-model>-->
		<a-entity
			id="front-end"
			:position="frontEnd.x + ' ' + frontEnd.y + ' ' + frontEnd.z"
			rotation="90 0 0"
			material="color: #000000;"
			obj-model="obj: #frontendObj;"
		></a-entity>
		<a-entity
			id="sharevalue"
			:position="sharevalue.x + ' ' + sharevalue.y + ' ' + sharevalue.z"
			rotation="90 0 0"
			material="color: #000000;"
			obj-model="obj: #sharevalueObj;"
		></a-entity>
		<a-entity
			id="react-rocket"
			:position="reactRocket.x + ' ' + reactRocket.y + ' ' + reactRocket.z"
			rotation="90 0 0"
			material="color: #fff;"
			obj-model="obj: #reactRocketObj;"
		></a-entity>
		<a-entity
			id="rocket"
			scale="0.002 0.002 0.002"
			:position="rocket.x + ' ' + rocket.y + ' ' + rocket.z"
			material="color: #f00;"
			rotation="-45 90 -90"
			obj-model="obj: #rocketObj;"
		></a-entity>
		<a-image
			id="react"
			:position="react.x + ' ' + react.y + ' ' + react.z"
			rotation="0 0 0"
			src="#react-img"
		></a-image>
		<a-entity
			id="angularText"
			:position="angularText.x + ' ' + angularText.y + ' ' + angularText.z"
			rotation="90 0 0"
			material="color: #ffffff;"
			obj-model="obj: #angularObj;"
		></a-entity>
		<a-image
			id="angular"
			:position="angular.x + ' ' + angular.y + ' ' + angular.z"
			rotation="0 0 0"
			src="#angular-img"
		></a-image>
		<a-entity
			id="vueText"
			:position="vueText.x + ' ' + vueText.y + ' ' + vueText.z"
			rotation="90 0 0"
			material="color: #ffffff;"
			obj-model="obj: #vueObj;"
		></a-entity>
		<a-image
			id="vueImage"
			:position="vueImage.x + ' ' + vueImage.y + ' ' + vueImage.z"
			rotation="0 0 0"
			src="#vue-img"
		></a-image>
	</a-scene>
</template>

<script lang="ts">
import { angularSlide, vueSlide } from './shared/aframe-slides'

export default {
	name: 'TheSene',
	emits: ['animationDone', 'animationResumed'],
	data() {
		return {
			scrollPage: false,
			scrollFase: 1,
			animationScrollSpeed: 0.5,
			frontEnd: {
				x: 20.5,
				y: 10.7,
				z: -4.6
			},
			sharevalue: {
				x: 21.7,
				y: 7.2,
				z: -4
			},
			reactRocket: {
				x: 19.75,
				y: 20,
				z: -4.6
			},
			react: {
				x: 24.95,
				y: 19.5,
				z: -2
			},
			rocket: {
				x: 10,
				y: -5,
				z: -3
			},
			angularText: {
				x: 22.25,
				y: 19.5,
				z: -4.6
			},
			angular: {
				x: 24.95,
				y: 19,
				z: -2
			},
			vueText: {
				x: 22.25,
				y: 20,
				z: -4.6
			},
			vueImage: {
				x: 24.95,
				y: 20,
				z: -2
			},
			color: {
				r: 255,
				g: 231,
				b: 66
			}
		}
	},
	methods: {},
	mounted() {
		let jsR = 255
		let jsG = 231
		let jsB = 66
		let reactR = 97
		let reactG = 218
		let reactB = 251
		let angularR = 221
		let angularG = 27
		let angularB = 22

		const angularRGB = {
			r: 221,
			g: 27,
			b: 22
		}
		const vueRGB = {
			r: 65,
			g: 184,
			b: 131
		}

		let vueR = 65
		let vueG = 184
		let vueB = 131
		let reactPassed = false
		let angularPassed = false
		let vuePassed = false
		document.addEventListener('wheel', e => {
			if (e.type != 'wheel') {
				return
			}
			let delta = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1
			delta = delta * -1

			console.info('scrollFase: ', this.scrollFase)
			console.info('delta: ', delta)

			/**
			 *
			 * PHASE 1: REACT
			 *
			 */
			if (this.scrollFase === 1) {
				/** Scroll fase 1: FRONTEND => REACT */
				if (delta === -1 || (delta === 1 && this.frontEnd.y <= 10.7 - this.animationScrollSpeed)) {
					this.frontEnd.y += this.animationScrollSpeed * delta
					this.sharevalue.y += this.animationScrollSpeed * delta
				}

				this.rocket.y -= this.animationScrollSpeed * delta
				this.rocket.x -= this.animationScrollSpeed * delta

				if (this.reactRocket.y > 10.7 || delta === 1) {
					this.reactRocket.y += this.animationScrollSpeed * delta
				}
				if (this.react.y > 9.5 || delta === 1) {
					this.react.y += this.animationScrollSpeed * delta
				}
				if (!reactPassed && delta === -1) {
					if (this.color.r !== reactR) {
						this.color.r -= 1
					}
					if (this.color.g !== reactG) {
						this.color.g -= 1
					}
					if (this.color.b !== reactB) {
						this.color.b += 1
					}
					if (this.color.r === reactR && this.color.g === reactG && this.color.b === reactB) {
						reactPassed = true
					}
					document
						.getElementById('scene')
						.setAttribute('background', `color: rgb(${this.color.r}, ${this.color.g}, ${this.color.b});`)
				} else if (delta === 1) {
					reactPassed = false
					console.log('Delta is 1')
					if (this.color.r !== jsR) {
						this.color.r += 1
					}
					if (this.color.g !== jsG) {
						this.color.g += 1
					}
					if (this.color.b !== jsB) {
						this.color.b -= 1
					}
					document
						.getElementById('scene')
						.setAttribute('background', `color: rgb(${this.color.r}, ${this.color.g}, ${this.color.b});`)
				}
				// If rocket passed and color is done, continue to rest of the page
				if (this.rocket.y > 16 && reactPassed) {
					this.scrollFase = 2
				}

				/**
				 *
				 * PHASE 2: ANGULAR
				 *
				 */
			} else if (this.scrollFase === 2) {
				angularSlide(
					this,
					this.angular,
					this.angularText,
					this.animationScrollSpeed,
					this.color,
					angularRGB,
					angularPassed,
					delta
				)

				/**
				 *
				 * PHASE 3: VUE
				 *
				 */
			} else if (this.scrollFase === 3) {
				vueSlide(
					this,
					this.vueText,
					this.vueImage,
					this.animationScrollSpeed,
					this.color,
					vueRGB,
					vuePassed,
					delta
				)
			} else if (this.scrollFase === 4) {
				this.$emit('animationDone')
			}
			if (delta === 1 && window.scrollY === 0) {
				this.$emit('animationResumed')
			}
		})
	},
	computed: {
		box_style() {
			return {
				transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)
        `
			}
		}
	}
}
</script>

<style lang="scss">
#scene {
	width: 100vw;
	height: 100vh;
}
canvas {
	background-color: rgb(65 184 131);
}
</style>
