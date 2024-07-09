const iconGrid = document.querySelector('.icon-grid');
const controlPanel = document.querySelector('.icon-control-panel');
const codeFormatControls = document.querySelectorAll('input[name="code-format"]');
const rotationControls = document.querySelectorAll('input[name="rotate-icon"]');
const rotatableIcons = document.querySelectorAll('.rotatable');
const showAnimCb = document.querySelector('#show-animated');

function getRotationInfo() {
	let rotationVal = '0';
	rotationControls.forEach(radio => {
		if (radio.checked) {
			rotationVal = radio.value;
		}
	});
	return rotationVal;
}

function getCodeFormat() {
	const radios = Array.from(codeFormatControls);
	const selectedFormat = radios.find(radio => radio.checked);
	return selectedFormat.value;
}

function getIconWrapper(el) {
	let clicked = null;
	if (el.classList.contains('icon-wrapper')) {
		clicked = el;
	} else {
		clicked = el.closest('.icon-wrapper');
	}
	return clicked;
}

function getIconInfo(el) {
	const svg = el.querySelector('svg');
	const classArr = Array.from(svg.classList);
	const iconName = classArr[0];
	const iconColour = classArr[1];
	return { name: iconName, colour: iconColour, rotate: getRotationInfo() };
}

function camelize(str) {
	return str.replace(/-./g, x => x[1].toUpperCase());
}

function generateIconMarkup(iconInfo) {
	const classStr = camelize(iconInfo.name);
	const rotationStr = iconInfo.rotate !== '0' ? `, rotate='rotate-${iconInfo.rotate}'` : '';
	const str = `<sly data-sly-use.iconsTemplate="uk/pagecomponents/page/icons.html"><sly data-sly-call="\${iconsTemplate.${classStr} @ color='${iconInfo.colour}' ${rotationStr} }"></sly></sly>`;
	return str;
}

function getSvgMarkup(iconWrapper) {
	const svgEl = iconWrapper.querySelector('svg');
	const svgMarkup = svgEl.outerHTML;
	// remove new line and tab characters from the svg string
	const regex = /[\n\t]/g;
	return svgMarkup.replace(regex, '');
}

function copyCodeToClipboard(iconWrapper, iconInfo, codeFormat) {
	let clipboardText = '';
	if (codeFormat === 'htl') {
		clipboardText = generateIconMarkup(iconInfo);
	}

	if (codeFormat === 'svg') {
		clipboardText = getSvgMarkup(iconWrapper);
	}

	navigator.clipboard.writeText(clipboardText).then(
		function () {
			console.log('Text is: ', clipboardText);
		},
		function (err) {
			console.error('Async: Could not copy text: ', err);
		}
	);
}

function removeRotateClass(svg) {
	const classArr = Array.from(svg.classList);
	const rotateClassArr = classArr.filter(classStr => classStr.startsWith('rotate-'));
	if (rotateClassArr.length > 0) {
		const rotateClass = rotateClassArr[0];
		svg.classList.remove(rotateClass);
	}
}

iconGrid.addEventListener('click', e => {
	const iconWrapper = getIconWrapper(e.target);
	if (iconWrapper) {
		const iconInfo = getIconInfo(iconWrapper);
		const codeFormat = getCodeFormat();
		copyCodeToClipboard(iconWrapper, iconInfo, codeFormat);
	}
});

controlPanel.addEventListener('change', e => {
	const rotationAmount = getRotationInfo();
	rotatableIcons.forEach(icon => {
		const svgTag = icon.querySelector('svg');
		removeRotateClass(svgTag);
		if (rotationAmount !== '0') {
			svgTag.classList.add(`rotate-${rotationAmount}`);
		}
	});
});

showAnimCb.addEventListener('change', e => {
	const cb = e.target;
	const styleBlock = cb.closest('.style-block');
	const spinWrapper = styleBlock.querySelector('.spin-wrapper');
	spinWrapper.classList.toggle('spin');
});
