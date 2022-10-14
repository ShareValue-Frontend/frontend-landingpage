<template>
	<div class="team">
		<div class="team-image-wrapper">
			<div v-for="(image, idx) in images" :key="idx" :class="['col', image.size].join('-')">
				<div
					class="image"
					:class="{ 'offset-negative': image.offset }"
					:style="{ backgroundImage: 'url(' + image.image + ')' }"
				>
					<div v-if="image.overlay" class="image-overlay">
						<div class="label">
							{{ image.label }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
	name: 'TheTeam',
	setup() {
		return {
			images: [
				{
					label: 'Sem',
					size: '20',
					offset: true,
					overlay: true,
					image: 'https://www.sharevalue.nl/images/sharevalue/employees/Sem.jpg'
				},
				{
					label: 'Team building',
					size: '40',
					offset: false,
					overlay: false,
					image: '/img/team_3.jpg'
				},
				{
					label: 'Wietze',
					size: '20',
					offset: true,
					overlay: true,
					image: 'https://www.sharevalue.nl/images/sharevalue/employees/Wietze.jpg'
				},
				{
					label: 'Food',
					size: '20',
					offset: false,
					overlay: false,
					image: '/img/food_1.jpg'
				},
				{
					label: 'Team building',
					size: '40',
					offset: false,
					overlay: false,
					image: '/img/team_2.jpg'
				},
				{
					label: 'Rudy',
					size: '20',
					offset: true,
					overlay: true,
					image: 'https://www.sharevalue.nl/images/sharevalue/employees/Rudy.jpg'
				},
				{
					label: 'Team building',
					size: '20',
					offset: false,
					overlay: false,
					image: '/img/fun_3.jpg'
				},
				{
					label: 'Johan',
					size: '20',
					offset: true,
					overlay: true,
					image: 'https://www.sharevalue.nl/images/sharevalue/employees/Johan.jpg'
				},
				{
					label: 'Team building',
					size: '20',
					offset: false,
					overlay: false,
					image: '/img/fun_1.jpg'
				},
				{
					label: 'Marwan',
					size: '20',
					offset: true,
					overlay: true,
					image: 'https://www.sharevalue.nl/images/sharevalue/employees/Marwan.jpg'
				},
				{
					label: 'Team building',
					size: '40',
					offset: false,
					overlay: false,
					image: '/img/team_4.jpg'
				},
				{
					label: 'Jean Pierre',
					size: '20',
					offset: true,
					overlay: true,
					image: 'https://www.sharevalue.nl/images/sharevalue/employees/Jean-Pierre.jpg'
				}
			]
		}
	}
})
</script>

<style scoped lang="scss">
.team {
	padding: 0;
	width: 100vw;
	background: #38382e;
	.team-image-wrapper {
		display: flex;
		flex-wrap: wrap;
		.col-20 {
			width: 20%;
		}
		.col-40 {
			width: 40%;
		}
		.image {
			background: #fff;
			height: 300px;
			background-size: cover;
			border: 5px solid #38382e;
			background-position: center;
			background-repeat: no-repeat;
			&.offset-negative {
				background-position-y: -80px;
			}
			.image-overlay {
				background: #000;
				opacity: 0;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: flex-end;
				align-items: flex-end;
				font-size: 3vw;
				.label {
					padding: 10px;
				}
				&:hover {
					opacity: 0.5;
				}
			}
		}
	}
}

.row {
	display: -ms-flexbox; /* IE10 */
	display: flex;
	-ms-flex-wrap: wrap; /* IE10 */
	flex-wrap: wrap;
	padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
	-ms-flex: 20%; /* IE10 */
	flex: 20%;
	max-width: 20%;
	padding: 0 4px;
}

.column img {
	margin-top: 8px;
	vertical-align: middle;
	width: 100%;
}
@media screen and (max-width: 1680px) {
	.team {
		.team-image-wrapper {
			.image {
				&.offset-negative {
					background-repeat-x: no-repeat;
					background-position-y: -30px;
				}
			}
		}
	}
}
@media screen and (max-width: 1400px) {
	.team {
		.team-image-wrapper {
			.image {
				background-size: cover;
				&.offset-negative {
					background-repeat-x: no-repeat;
					background-position-y: 0px;
				}
			}
		}
	}
}
@media screen and (max-width: 800px) {
	.team {
		.team-image-wrapper {
			.col-20,
			.col-40 {
				width: 100%;
			}
			.image {
				background-size: cover;
				&.offset-negative {
					background-size: auto;
					background-repeat-x: no-repeat;
					background-position-y: 0px;
				}
				.image-overlay {
					font-size: 8vw;
				}
			}
		}
	}
}

@media screen and (max-width: 600px) {
	.column {
		-ms-flex: 100%;
		flex: 100%;
		max-width: 100%;
	}
}
</style>
