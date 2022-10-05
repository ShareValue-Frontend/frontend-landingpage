<template>
	<div class="code-team-quote">
		<div class="quote-wrapper">
			<p @click="show = !show" class="constructor">
				<span class="method">@import</span> {&nbsp; <span class="variable">Team, Events</span>&nbsp;}&nbsp;
				<span class="method">from </span>
				<span class="location">"@/ShareValue/Front-end/People"</span>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'theQuote',
	setup() {
		const show = ref(false)
		return {
			show
		}
	}
})
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

.code-team-quote {
	padding: 2vw 7vw;
	background-color: #000;
	color: #2c3e50;
	width: 100vw;
	font-size: 2.5vw;
	.quote-wrapper {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.constructor {
			color: #fff;
			cursor: pointer;
			.code {
				color: #2452ad;
			}
			.variable {
				color: #44a9f7;
			}
			.function {
				color: #e1e1a1;
			}
			.method {
				color: #b578a3;
			}
			.location {
				color: #c3602c;
			}
		}
	}
}
</style>
