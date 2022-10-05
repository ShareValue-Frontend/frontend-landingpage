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

<script>
import { angularSlide, reactSlide, vueSlide } from './shared/aframe-slides'

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
				y: 19.5,
				z: -2
			},
			vueText: {
				x: 22.25,
				y: 19.5,
				z: -4.6
			},
			vueImage: {
				x: 24.95,
				y: 19.5,
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
		const jsColor = { r: 255, g: 231, b: 66 }
		const reactColor = { r: 97, g: 218, b: 251 }
		const angularColor = { r: 221, g: 27, b: 22 }
    const vuecolor = { r: 65, g: 184, b: 131 }
    
		let reactPassed = false
		let angularPassed = false
    let vuePassed = false
    
		document.addEventListener('wheel', e => {
			if (e.type != 'wheel') {
				return
			}
			let delta = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1
			delta = delta * -1

			/**
			 *
			 * PHASE 1: REACT
			 *
			 */
			if (this.scrollFase === 1) {
				reactSlide(this, this.color, reactColor, jsColor, reactPassed, delta)

				/**
				 *
				 * PHASE 2: ANGULAR
				 *
				 */
			} else if (this.scrollFase === 2) {
				angularSlide(this, this.color, angularColor, angularPassed, delta)

				/**
				 *
				 * PHASE 3: VUE
				 *
				 */
			} else if (this.scrollFase === 3) {
				vueSlide(this, this.color, vuecolor, vuePassed, delta)

				/**
				 *
				 * PHASE 4: Normal website
				 *
				 */
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
