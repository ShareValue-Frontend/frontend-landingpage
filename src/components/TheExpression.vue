<template>
	<div class="expressions">
		<div class="hero-block hero-block--main">
			<div class="hero-block__cta">
				<div class="expressions-wrapper">
					<div class="developer-talk">
						<!-- <h2 v-html="developerQuote" /> -->
						<p v-html="developerTalk" />
					</div>
					<div class="developer-image">
						<div class="employees">
							<div class="flip-card">
								<div class="flip-card-inner">
									<div class="flip-card-front">
										<div v-for="(employee, idx) in employees" :key="idx">
											<div class="card-logo-top-wrapper" :class="['card', idx].join('-')">
												<div class="card-logo primary" :class="employee.primaryFramework"></div>
												<div
													class="card-logo secondary"
													:class="employee.secondaryFramework"
												></div>
												<div
													class="card-logo tertiaire"
													:class="employee.tertiaireFramework"
												></div>
											</div>
											<div class="employee background"></div>
											<div class="card-logo-bottom-wrapper"></div>
											<div class="employee-card-tag">
												<Question />
											</div>
										</div>
									</div>
									<div class="flip-card-back">
										<div v-for="(employee, idx) in employees" :key="idx">
											<div class="card-logo-top-wrapper" :class="['card', idx].join('-')">
												<div class="card-logo primary" :class="employee.primaryFramework">
													<CardLogo :logo="employee.primaryFramework" />
												</div>
												<div class="card-logo secondary" :class="employee.secondaryFramework">
													<CardLogo :logo="employee.secondaryFramework" />
												</div>
												<div class="card-logo tertiaire" :class="employee.tertiaireFramework">
													<CardLogo :logo="employee.tertiaireFramework" />
												</div>
											</div>
											<div class="employee">
												<img
													:src="
														employee.image
															? employee.image
															: './src/assets/img/superwoman.jpg'
													"
													:alt="employee.name"
													:style="{ left: employee.position + 'px' }"
												/>
												<img
													class="mirror"
													:src="
														employee.image
															? employee.image
															: './src/assets/img/superman.jpg'
													"
													:alt="employee.name"
													:style="{ right: employee.position + 'px' }"
												/>
											</div>
											<div class="card-logo-bottom-wrapper">
												<div class="card-logo primary" :class="employee.primaryFramework">
													<CardLogo :logo="employee.primaryFramework" />
												</div>
												<div class="card-logo secondary" :class="employee.secondaryFramework">
													<CardLogo :logo="employee.secondaryFramework" />
												</div>
												<div class="card-logo tertiaire" :class="employee.tertiaireFramework">
													<CardLogo :logo="employee.tertiaireFramework" />
												</div>
											</div>
											<div class="employee-name-tag">
												<p v-text="['', employee.name, ''].join('')" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import React from '@/components/icons/iconReact.vue'
import Vue from '@/components/icons/iconVue.vue'
import Angular from '@/components/icons/iconAngular.vue'
import Question from '@/components/icons/iconQuestion.vue'
import CardLogo from '@/components/shared/cardLogo.vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
	name: 'TheExpressions',
	components: {
		React,
		Vue,
		Angular,
		Question,
		CardLogo
	},
	setup() {
		const developer = 'Developer: <strong>Sem</strong>'
		const developerQuote = "let quote = {'Ik ben blij dat ik hier terecht gekomen ben.'}"
		const developerTalk =
			'Een team waar je op kan bouwen. Dát is ShareValue voor mij. Een gezellige groep collega’s waar je altijd op terug kunt vallen én plezier mee kunt hebben. Met daarnaast leuke en afwisselende opdrachten en een hoop ruimte voor groei. Zo krijg ik voldoende uren om cursussen te volgen om alles te leren over de nieuwste technieken. Deze opgedane kennis kan ik direct toepassen bij de opdrachtgever. En van die ervaringen groei je dan ook weer! Ik voel me goed thuis bij ShareValue en ben blij dat ik hier terecht gekomen ben.'
		return {
			developer,
			developerTalk,
			developerQuote,
			employees: [
				{
					name: 'Sem',
					primaryFramework: 'Angular',
					secondaryFramework: 'Vue',
					tertiaireFramework: '',
					image: 'https://www.sharevalue.nl/images/sharevalue/employees/Sem.jpg',
					position: 1
				}
				// }, {
				// 	name: 'Marwan',
				//   primaryFramework: 'React',
				//   secondaryFramework: '',
				//   tertiaireFramework: '',
				// 	image: 'https://www.sharevalue.nl/images/sharevalue/employees/Marwan.jpg',
				//   position: -5,
				// },{
				// 	name: 'Rudy',
				// 	position: 0,
				//   primaryFramework: 'React',
				//   secondaryFramework: '',
				//   tertiaireFramework: '',
				// 	image: 'https://www.sharevalue.nl/images/sharevalue/employees/Rudy.jpg',
				//   position: -1,
				// },{
				// 	name: 'Jij?',
				// 	position: 23,
				//   primaryFramework: 'Angular',
				//   secondaryFramework: 'Vue',
				//   tertiaireFramework: 'React',
				// 	image: '',
				//   position: 0,
				// },{
				// 	name: 'Wietze',
				//   primaryFramework: 'Vue',
				//   secondaryFramework: '',
				//   tertiaireFramework: '',
				// 	image: 'https://www.sharevalue.nl/images/sharevalue/employees/Wietze.jpg',
				//   position: 20,
				// },{
				// 	name: 'Raymon',
				//   primaryFramework: 'Angular',
				//   secondaryFramework: 'Vue',
				//   tertiaireFramework: '',
				// 	image: 'https://www.sharevalue.nl/images/sharevalue/employees/Raymon.jpg',
				//   position: 7,
				// },{
				// 	name: 'Johan',
				// 	position: 23,
				//   primaryFramework: 'Angular',
				//   secondaryFramework: 'Vue',
				//   tertiaireFramework: '',
				// 	image: 'https://www.sharevalue.nl/images/sharevalue/employees/Johan.jpg',
				//   position: 17,
				// },
			]
		}
	}
})
</script>

<style scoped lang="scss">
.expressions {
	padding: 7vw;
	width: 100vw;
	background: #f3912b;
	background: linear-gradient(to right, #f3912b 55%, #facfae);

	.hero-block {
		border-radius: 0.3125rem;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		max-width: 36.875rem;
		margin-left: 2.5rem;
		@media screen and (min-width: 300px) and (max-width: 600px) {
			margin-left: 0;
		}

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
		height: 32rem;
		min-width: 94%;

		@media screen and (min-width: 300px) and (max-width: 600px) {
			height: auto;
			padding-bottom: 3rem;
		}
		&:before {
			background: #ffe742;
		}
	}
	// background: #F6A265;
	.expressions-wrapper {
		display: flex;
		flex-wrap: wrap;

		@media screen and (min-width: 300px) and (max-width: 600px) {
			flex-direction: column;
		}
		.developer-talk {
			width: 50vw;

			@media screen and (min-width: 300px) and (max-width: 600px) {
				width: 100%;
				padding-top: 2rem;
			}
			h2 {
				font-size: 2vw;
				color: #fff;
				padding-bottom: 27px;
			}
			p {
				font-size: 1.5vw;
				color: #fff;

				@media screen and (min-width: 300px) and (max-width: 600px) {
					font-size: 5vw;
				}
			}
		}
		.developer-image {
			width: 30vw;
			position: relative;
			bottom: 60px;

			@media screen and (min-width: 300px) and (max-width: 600px) {
				margin-left: 2rem;
				margin-top: 2rem;
			}
			.flip-card {
				width: 13rem;
				height: 25rem;
				perspective: 1000px;
			}

			.flip-card-inner {
				position: relative;
				width: 100%;
				height: 100%;
				text-align: center;
				transition: transform 0.6s;
				transform-style: preserve-3d;
			}

			.flip-card:hover .flip-card-inner {
				transform: rotateY(180deg);
			}

			.flip-card-front,
			.flip-card-back {
				transform: rotate(2deg);
				position: absolute;
				width: 100%;
				height: 100%;
				-webkit-backface-visibility: hidden;
				backface-visibility: hidden;
			}

			.flip-card-front {
				// background-color: #bbb;
				color: black;
			}

			.flip-card-back {
				color: white;
				transform: rotateY(180deg);
			}
			.employees {
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				.card-logo-top-wrapper {
					display: flex;
					.card-logo {
						width: 30px;
						height: 30px;
						position: relative;
						z-index: 10;
						&.primary {
							top: 55px;
							left: 25px;
						}
						&.secondary {
							top: 57px;
							left: 30px;
						}
						&.tertiaire {
							top: 57px;
							left: 30px;
						}
					}
				}
				.card-logo-bottom-wrapper {
					display: flex;
					flex-direction: row-reverse;
					.card-logo {
						width: 30px;
						height: 30px;
						position: relative;
						z-index: 10;
						transform: rotate(180deg);
						&.primary {
							bottom: 55px;
							right: 25px;
						}
						&.secondary {
							bottom: 57px;
							right: 30px;
						}
						&.tertiaire {
							bottom: 57px;
							right: 30px;
						}
					}
				}
				.employee {
					width: 15rem;
					height: 27rem;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin: 10px;
					background: #fff;
					border: 1px solid #ccc;
					-webkit-box-shadow: 0px 10px 13px -7px #121212, 5px 5px 15px 5px rgba(0, 0, 0, 0);
					box-shadow: 0px 10px 13px -7px #121212, 5px 5px 15px 5px rgba(0, 0, 0, 0);
					border-radius: 4%;
					img {
						position: relative;
						&.mirror {
							-webkit-transform: scale(-1, -1);
							transform: scale(-1, -1);
						}
					}
					&.background {
						background-image: url('/img/card-back.jpg');
						border: 10px solid #fff;
					}
				}
				.employee-name-tag {
					position: relative;
					bottom: 275px;
					left: 25px;
					width: 9rem;
					background: #121212;
					color: #ffe742;
					text-align: center;
					padding: 4px 10px;
					font-size: 1vw;
					font-weight: bold;
					letter-spacing: 2px;
					margin: 0 auto;
				}
				.employee-card-tag {
					position: relative;
					bottom: 367px;
					right: 25px;
					width: 14rem;
					text-align: center;
					padding: 4px 10px;
					margin: 0 auto;
					color: #fff;
					opacity: 0.9;
					.bi-question-lg {
						filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.6));
					}
				}
			}
		}

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
