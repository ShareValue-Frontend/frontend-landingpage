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
	vueText: ObjectPosition,
	vueImage: ObjectPosition,
	scrollSpeed: number,
	color: ColorObject,
	vueColor: ColorObject,
	vuePassed: boolean,
	delta: number
) {
	/** Scroll fase 3: ANGULAR => VUE */
	if (vueText.y > 11.4 || delta === 1) {
		vueText.y += scrollSpeed * delta
	}
	if (vueText.y < 15 || delta === 1) {
		componentScope.angularText.y += scrollSpeed * delta
		componentScope.angular.y += scrollSpeed * delta
	}
	if (vueImage.y > 9.5 || delta === 1) {
		vueImage.y += scrollSpeed * delta
	}
	if (!vuePassed && delta === -1) {
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
			.getElementById('scene')
			.setAttribute('background', `color: rgb(${color?.r}, ${color?.g}, ${color?.b});`)
	}
	if (vuePassed && vueImage.y <= 9.5) {
		componentScope.scrollFase = 4
		document
			.getElementById('scene')
			.setAttribute('background', `color: rgb(${vueColor?.r}, ${vueColor?.g}, ${vueColor?.b});`)
	}
}
export function angularSlide(
	componentScope: any,
	angular: ObjectPosition,
	angularText: ObjectPosition,
	scrollSpeed: number,
	color: ColorObject,
	angularColor: ColorObject,
	angularPassed: boolean,
	delta: number
) {
	/** Scroll fase 2: REACT => ANGULAR */
	if (angularText.y > 11.4 || delta === 1) {
		angularText.y += scrollSpeed * delta
	}
	if (angularText.y < 15 || delta === 1) {
		componentScope.react.y += scrollSpeed * delta
		componentScope.reactRocket.y += scrollSpeed * delta
	}
	if (angular.y > 9.5 || delta === 1) {
		angular.y += scrollSpeed * delta
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
		document.getElementById('scene').setAttribute('background', `color: rgb(${color.r}, ${color.g}, ${color.b});`)
	}
	if (angularPassed && angular.y <= 9.5) {
		componentScope.scrollFase = 3
	}
}

export function reactSlide(
	componentScope: any,
	rocket: ObjectPosition,
	reactText: ObjectPosition,
	reactImage: ObjectPosition,
	scrollSpeed: number,
	color: ColorObject,
    reactColor: ColorObject,
    jsColor: ColorObject,
	reactPassed: boolean,
	delta: number
) {
	/** Scroll fase 1: FRONTEND => REACT */
	if (delta === -1 || (delta === 1 && componentScope.frontEnd.y <= 10.7 - scrollSpeed)) {
		componentScope.frontEnd.y += scrollSpeed * delta
		componentScope.sharevalue.y += scrollSpeed * delta
	}

	rocket.y -= scrollSpeed * delta
	rocket.x -= scrollSpeed * delta

	if (reactText.y > 10.7 || delta === 1) {
		reactText.y += scrollSpeed * delta
	}
	if (reactImage.y > 9.5 || delta === 1) {
		reactImage.y += scrollSpeed * delta
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
			.getElementById('scene')
			.setAttribute('background', `color: rgb(${color.r}, ${color.g}, ${color.b});`)
	} else if (delta === 1) {
		reactPassed = false
		if (color.r !== jsColor.r) {
			color.r += 1
		}
		if (color.g !== jsColor.g) {
			color.g += 1
		}
		if (color.b !== jsColor.b) {
			color.b -= 1
		}
		document
			.getElementById('scene')
			.setAttribute('background', `color: rgb(${color.r}, ${color.g}, ${color.b});`)
	}
	// If rocket passed and color is done, continue to rest of the page
	if (rocket.y > 16 && reactPassed) {
		componentScope.scrollFase = 2
	}
}
