export interface ColorObject {
	r: number
	g: number
	b: number
}

export interface ObjectPosition {
	x: number
	y: number
	z: number
}

export function vueSlide(
	componentScope: any,
	color: ColorObject,
	vueColor: ColorObject,
	vuePassed: boolean,
	delta: number
) {
	/** Scroll fase 3: ANGULAR => VUE */
	if (componentScope.vueText.y > 11.4 || delta === 1) {
		componentScope.vueText.y += componentScope.animationScrollSpeed * delta
	}
	if (componentScope.vueText.y < 15 || delta === 1) {
		componentScope.angularText.y += componentScope.animationScrollSpeed * delta
		componentScope.angular.y += componentScope.animationScrollSpeed * delta
	}
	if (componentScope.vueImage.y > 9.5 || delta === 1) {
		componentScope.vueImage.y += componentScope.animationScrollSpeed * delta
	}
	if (!vuePassed && delta === -1) {
		console.info('vuePassed: ', vuePassed)
		console.info('color: ', color)
		if (color?.r !== vueColor?.r) {
			color.r -= 1
		}
		if (color?.g !== vueColor?.g) {
			color.g += 1
		}
		if (color?.b !== vueColor?.b) {
			color.b += 1
		}
		if (color?.r === vueColor?.r && color?.g === vueColor?.g && color?.b === vueColor?.b) {
			vuePassed = true
		}

		document
			?.getElementById('scene')
			?.setAttribute('background', `color: rgb(${color?.r}, ${color?.g}, ${color?.b});`)
	}
	if (vuePassed && componentScope.vueImage.y <= 9.5) {
		componentScope.scrollFase = 4
		document
			?.getElementById('scene')
			?.setAttribute('background', `color: rgb(${vueColor?.r}, ${vueColor?.g}, ${vueColor?.b});`)
	}
}

export function angularSlide(
	componentScope: any,
	color: ColorObject,
	angularColor: ColorObject,
	angularPassed: boolean,
	delta: number
) {
	/** Scroll fase 2: REACT => ANGULAR */
	if (componentScope.angularText.y > 11.4 || delta === 1) {
		componentScope.angularText.y += componentScope.animationScrollSpeed * delta
	}
	if (componentScope.angularText.y < 15 || delta === 1) {
		componentScope.react.y += componentScope.animationScrollSpeed * delta
		componentScope.reactRocket.y += componentScope.animationScrollSpeed * delta
	}
	if (componentScope.angular.y > 9.5 || delta === 1) {
		componentScope.angular.y += componentScope.animationScrollSpeed * delta
	}
	if (!angularPassed && delta === -1) {
		if (color.r !== angularColor?.r) {
			color.r += 1
		}
		if (color.g !== angularColor?.g) {
			color.g -= 1
		}
		if (color.b !== angularColor?.b) {
			color.b -= 1
		}
		if (color.r === angularColor?.r && color.g === angularColor?.g && color.b === angularColor?.b) {
			angularPassed = true
		}
		document?.getElementById('scene')?.setAttribute('background', `color: rgb(${color.r}, ${color.g}, ${color.b});`)
	}
	if (angularPassed && componentScope.angular.y <= 9.5) {
		componentScope.scrollFase = 3
	}
}

export function reactSlide(
	componentScope: any,
	color: ColorObject,
	reactColor: ColorObject,
	jsColor: ColorObject,
	reactPassed: boolean,
	delta: number
) {
	/** Scroll fase 1: FRONTEND => REACT */
	if (delta === -1 || (delta === 1 && componentScope.frontEnd.y <= 10.7 - componentScope.animationScrollSpeed)) {
		componentScope.frontEnd.y += componentScope.animationScrollSpeed * delta
		componentScope.sharevalue.y += componentScope.animationScrollSpeed * delta
	}

	componentScope.rocket.y -= componentScope.animationScrollSpeed * delta
	componentScope.rocket.x -= componentScope.animationScrollSpeed * delta

	if (componentScope.reactRocket.y > 10.7 || delta === 1) {
		componentScope.reactRocket.y += componentScope.animationScrollSpeed * delta
	}
	if (componentScope.react.y > 9.5 || delta === 1) {
		componentScope.react.y += componentScope.animationScrollSpeed * delta
	}
	if (!reactPassed && delta === -1) {
		if (color.r !== reactColor?.r) {
			color.r -= 1
		}
		if (color.g !== reactColor?.g) {
			color.g -= 1
		}
		if (color.b !== reactColor?.b) {
			color.b += 1
		}
		if (color.r === reactColor?.r && color.g === reactColor?.g && color.b === reactColor?.b) {
			reactPassed = true
		}
		document
			?.getElementById('scene')
			?.setAttribute('background', `color: rgb(${color.r}, ${color.g}, ${color.b});`)
	} else if (delta === 1) {
		reactPassed = false
		console.log('Delta is 1')
		if (color.r !== jsColor?.r) {
			color.r += 1
		}
		if (color.g !== jsColor?.g) {
			color.g += 1
		}
		if (color.b !== jsColor?.b) {
			color.b -= 1
		}
		document
			?.getElementById('scene')
			?.setAttribute('background', `color: rgb(${color.r}, ${color.g}, ${color.b});`)
	}
	// If rocket passed and color is done, continue to rest of the page
	if (componentScope.rocket.y > 16 && reactPassed) {
		componentScope.scrollFase = 2
	}
}
