<template>
	<div class="information">
		<!-- <h2 v-html="['< Informatie />'].join('')" /> -->
		<div class="hero-block hero-block--main">
			<div class="hero-block__cta">
				<p v-html="information" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
	name: 'TheInformation',
	setup() {
		const information =
			'Bij ShareValue onderzoeken we <strong>samen met jou</strong> waar jouw ambities en kwaliteiten liggen. Bij ons draait het om de match tussen jou en dé opdracht. Wij beschikken over een uitgebreid netwerk van interessante opdrachtgevers zoals ING, Microsoft, Nederlandse Spoorwegen, Lely en Technische Unie.'
		return {
			information
		}
	}
})
</script>

<style scoped lang="scss">
.information {
	padding: 7vw;
	width: 100vw;
	background: #ffe7423b;
	background: linear-gradient(to right, #ffd111 55%, #fff9d3);
	font-size: 2.5vw;
	h2 {
		font-size: 3vw;
		font-weight: bolder;
	}
	.hero-block {
		border-radius: 0.3125rem;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		max-width: 36.875rem;
		margin-left: 2.5rem;
		&:before {
			border-radius: 0.3125rem;
			-webkit-clip-path: polygon(0 0, 100% 0, 94% 100%, 0% 100%);
			clip-path: polygon(0 0, 100% 0, 94% 100%, 0% 100%);
			content: ' ';
			display: block;
			position: absolute;
			width: 100%;
			top: 0;
			bottom: 0;
			mix-blend-mode: multiply;
		}
		.hero-block__cta {
			p {
				padding: 0 2rem;
				max-width: 97%;
			}
		}
	}
	.hero-block--main {
		height: 30rem;
		min-width: 94%;
		&:before {
			background: #ffe742;
		}
	}
}
</style>
