const iconGrid = document.querySelector('.icon-grid');

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
	return { name: iconName, colour: iconColour };
}

function camelize(str) {
	return str.replace(/-./g, x => x[1].toUpperCase());
}

function generateIconMarkup(iconInfo) {
	const classStr = camelize(iconInfo.name);
	const str = `<sly data-sly-use.iconsTemplate="uk/pagecomponents/page/icons.html"><sly data-sly-call="\${iconsTemplate.${classStr} @ color='${iconInfo.colour}' }"></sly></sly>`;
	return str;
}

function copyCodeToClipboard(iconInfo) {
	const clipboardText = generateIconMarkup(iconInfo);
	navigator.clipboard.writeText(clipboardText).then(
		function () {
			console.log('Text is: ', clipboardText);
		},
		function (err) {
			console.error('Async: Could not copy text: ', err);
		}
	);
}

iconGrid.addEventListener('click', e => {
	const iconWrapper = getIconWrapper(e.target);
	if (iconWrapper) {
		const iconInfo = getIconInfo(iconWrapper);
		copyCodeToClipboard(iconInfo);
	}
});
