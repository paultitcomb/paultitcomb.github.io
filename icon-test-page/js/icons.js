const icons = [
	{
		selector: 'search-wrapper',
		svgCode: `<svg class="icon-search" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="8" stroke="#AE2015" stroke-width="4" /><path d="M24.5858 27.4142c.781.7811 2.0474.7811 2.8284 0 .7811-.781.7811-2.0474 0-2.8284l-2.8284 2.8284Zm-6-6 6 6 2.8284-2.8284-6-6-2.8284 2.8284Z" fill="#AE2015"/></svg>`,
		colors: ['standard', 'white', 'dark-red', 'plum', 'black']
	}
];

function createMarkup(svgCode, color) {
	const iconMarkup = `${svgCode}<p>Colour variant: ${color}</p>`;
	const iconWrapper = document.createElement('div');
	iconWrapper.insertAdjacentHTML('afterbegin', iconMarkup);
	const svgEl = iconWrapper.querySelector('svg');
	svgEl.classList.add(color);
	return iconWrapper;
}

function addIcons() {
	for (const icon of icons) {
		const iconWrapper = document.querySelector(icon.selector);
		for (const color of icon.colors) {
			const iconEl = createMarkup(icon.svgCode, color);
			iconWrapper.appendChild(iconEl);
		}
	}
}

// event listeners
document.addEventListener('DOMContentLoaded', addIcons);
