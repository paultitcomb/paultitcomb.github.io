const icons = [
	{
		selector: '.search-wrapper',
		svgCode: `<svg class="icon-search" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="8" stroke="#AE2015" stroke-width="4" /><path d="M24.5858 27.4142c.781.7811 2.0474.7811 2.8284 0 .7811-.781.7811-2.0474 0-2.8284l-2.8284 2.8284Zm-6-6 6 6 2.8284-2.8284-6-6-2.8284 2.8284Z" fill="#AE2015"/></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black']
	},
	{
		selector: '.search-small-wrapper',
		svgCode: `<svg class="icon-search-small" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><circle cx="5" cy="5" r="4" stroke="#DA291C" stroke-width="2"/><path d="M10.2929 11.7071c.3905.3905 1.0237.3905 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142l-1.4142 1.4142ZM7.29289 8.70711l3.00001 2.99999 1.4142-1.4142-2.99999-3.00001-1.41422 1.41422Z" fill="#DA291C"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h12v12H0z"/></clipPath></defs></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black']
	},
	{
		selector: '.chevron-wrapper',
		svgCode: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.24219 2.00098L8.48483 6.24362L4.24219 10.4863" stroke="#DA291C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black']
	}
];

function insertInlineStyles() {
	const styleTag = document.createElement('style');
	styleTag.textContent = `.style-block{background-color:#f5f5f5;text-align:center}.style-block p{text-align:center;font-size:1.4rem}`;
	document.head.appendChild(styleTag);
}

function createMarkup(svgCode, color) {
	const iconMarkup = `${svgCode}<p>Colour variant: ${color}</p>`;
	const iconWrapper = document.createElement('div');
	iconWrapper.insertAdjacentHTML('afterbegin', iconMarkup);
	const svgEl = iconWrapper.querySelector('svg');
	svgEl.classList.add(color);
	return iconWrapper;
}

function addIcons() {
	// add some minimal inline styles for layout
	insertInlineStyles();
	for (const icon of icons) {
		const iconWrapper = document.querySelector(icon.selector);
		for (const color of icon.colors) {
			const iconEl = createMarkup(icon.svgCode, color);
			// clean rubbish out of div first
			iconWrapper.innerHTML = '';
			iconWrapper.appendChild(iconEl);
		}
	}
}

// event listeners
document.addEventListener('DOMContentLoaded', addIcons);
