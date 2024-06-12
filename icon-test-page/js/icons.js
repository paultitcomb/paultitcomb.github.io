const icons = [
	{
		selector: '.search-wrapper',
		svgCode: `<svg class="icon-search" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="8" stroke="#AE2015" stroke-width="4" /><path d="M24.5858 27.4142c.781.7811 2.0474.7811 2.8284 0 .7811-.781.7811-2.0474 0-2.8284l-2.8284 2.8284Zm-6-6 6 6 2.8284-2.8284-6-6-2.8284 2.8284Z" fill="#AE2015"/></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black'],
		size: '32px x 32px'
	},
	{
		selector: '.search-small-wrapper',
		svgCode: `<svg class="icon-search-small" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><circle cx="5" cy="5" r="4" stroke="#DA291C" stroke-width="2"/><path d="M10.2929 11.7071c.3905.3905 1.0237.3905 1.4142 0 .3905-.3905.3905-1.0237 0-1.4142l-1.4142 1.4142ZM7.29289 8.70711l3.00001 2.99999 1.4142-1.4142-2.99999-3.00001-1.41422 1.41422Z" fill="#DA291C"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h12v12H0z"/></clipPath></defs></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black'],
		size: '12px x 12px'
	},
	{
		selector: '.chevron-wrapper',
		svgCode: `<svg class="icon-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.24219 2.00098L8.48483 6.24362L4.24219 10.4863" stroke="#DA291C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black'],
		size: '12px x 12px'
	},
	{
		selector: '.anchor-wrapper',
		svgCode: `<svg class="icon-anchor-link" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.94019 7.0606L6.11177 9.88903M6.11177 9.88903L3.28334 7.0606M6.11177 9.88903V2.11085" stroke="#DA291C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black'],
		size: '12px x 12px'
	},
	{
		selector: '.external-link-wrapper',
		svgCode: `<svg class="icon-external-link" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 3H3C2.44772 3 2 3.44738 2 3.99966C2 6.5876 2 10.2574 2 12.003C2 12.5553 2.44772 13 3 13H11C11.5523 13 12 12.5523 12 12V8" stroke="#DA291C" stroke-linejoin="round"/><path d="M9 2H13M13 2V6M13 2L7.5 7.5" stroke="#DA291C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black'],
		size: '15px x 15px'
	},
	{
		selector: '.alert-wrapper',
		svgCode: `<svg class="icon-alert" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6.5" stroke="#DA291C"/><rect x="7" y="4" width="2" height="5" rx="1" fill="#DA291C"/><circle cx="8" cy="11" r="1" fill="#DA291C"/></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black'],
		size: '16px x 16px'
	},
	{
		selector: '.success-wrapper',
		svgCode: `<svg class="icon-success" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" stroke="#DA291C"/><path d="M4 7.81818L5.6 10L10 4" stroke="#DA291C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'green', 'black'],
		size: '14px x 14px'
	},
	{
		selector: '.close-wrapper',
		svgCode: `<svg class="icon-close" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.46448 2.46448L9.53555 9.53555" stroke="#DA291C" stroke-width="2" stroke-linecap="round"/><path d="M2.46448 9.53552L9.53555 2.46445" stroke="#DA291C" stroke-width="2" stroke-linecap="round"/></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black'],
		size: '12px x 12px'
	},
	{
		selector: '.arrow-wrapper',
		svgCode: `<svg class="icon-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.17162 2.17156L9.00005 4.99999M9.00005 4.99999L6.17162 7.82842M9.00005 4.99999H1.22187" stroke="#DA291C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black'],
		size: '10px x 10px'
	},
	{
		selector: '.hamburger-open-wrapper',
		svgCode: `<svg class="icon-hamburger-open" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10H29" stroke="#222221" stroke-width="2" stroke-linecap="round"/><path d="M15 16H29" stroke="#222221" stroke-width="2" stroke-linecap="round"/><path d="M15 16H29" stroke="#222221" stroke-width="2" stroke-linecap="round"/><path d="M15 22H29" stroke="#222221" stroke-width="2" stroke-linecap="round"/><path d="M9.37792 37L9.54592 27.28H11.3819L12.7619 34.012L14.2019 27.28H15.9779L16.1579 37H14.8379L14.6939 30.244L13.3139 37H12.2459L10.8419 30.22L10.7099 37H9.37792ZM17.5933 37V27.28H21.6733V28.528H19.3693V31.324H21.1813V32.56H19.3693V35.776H21.6973V37H17.5933ZM22.7261 37V27.28H23.9621L26.3261 32.824V27.28H27.7901V37H26.6141L24.2381 31.192V37H22.7261ZM31.9292 37.132C31.2092 37.132 30.6492 37 30.2492 36.736C29.8492 36.472 29.5732 36.096 29.4212 35.608C29.2692 35.12 29.1932 34.536 29.1932 33.856V27.28H30.9212V34.06C30.9212 34.364 30.9412 34.652 30.9812 34.924C31.0212 35.188 31.1132 35.404 31.2572 35.572C31.4092 35.732 31.6332 35.812 31.9292 35.812C32.2412 35.812 32.4652 35.732 32.6012 35.572C32.7452 35.404 32.8372 35.188 32.8772 34.924C32.9252 34.652 32.9492 34.364 32.9492 34.06V27.28H34.6652V33.856C34.6652 34.536 34.5892 35.12 34.4372 35.608C34.2852 36.096 34.0092 36.472 33.6092 36.736C33.2172 37 32.6572 37.132 31.9292 37.132Z" fill="#222221"/></svg>`,
		colors: ['black'],
		size: '44px x 44px'
	},
	{
		selector: '.hamburger-close-wrapper',
		svgCode: `<svg class="icon-hamburger-close" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0502 11.0503L26.9497 20.9498" stroke="#9A3324" stroke-width="2" stroke-linecap="round"/><path d="M17.0502 20.9498L26.9497 11.0503" stroke="#9A3324" stroke-width="2" stroke-linecap="round"/><path d="M10.7289 37.132C10.0169 37.132 9.45686 36.992 9.04886 36.712C8.64886 36.432 8.36886 36.052 8.20886 35.572C8.04886 35.084 7.96886 34.524 7.96886 33.892V30.424C7.96886 29.76 8.04886 29.184 8.20886 28.696C8.36886 28.208 8.64886 27.832 9.04886 27.568C9.45686 27.304 10.0169 27.172 10.7289 27.172C11.4009 27.172 11.9249 27.288 12.3009 27.52C12.6849 27.744 12.9569 28.068 13.1169 28.492C13.2769 28.916 13.3569 29.408 13.3569 29.968V30.784H11.6529V29.944C11.6529 29.672 11.6369 29.424 11.6049 29.2C11.5809 28.976 11.5049 28.8 11.3769 28.672C11.2569 28.536 11.0449 28.468 10.7409 28.468C10.4369 28.468 10.2129 28.54 10.0689 28.684C9.93286 28.82 9.84486 29.008 9.80486 29.248C9.76486 29.48 9.74486 29.744 9.74486 30.04V34.264C9.74486 34.616 9.77286 34.908 9.82886 35.14C9.88486 35.364 9.98486 35.536 10.1289 35.656C10.2809 35.768 10.4849 35.824 10.7409 35.824C11.0369 35.824 11.2449 35.756 11.3649 35.62C11.4929 35.476 11.5729 35.288 11.6049 35.056C11.6369 34.824 11.6529 34.564 11.6529 34.276V33.4H13.3569V34.18C13.3569 34.756 13.2809 35.268 13.1289 35.716C12.9769 36.156 12.7089 36.504 12.3249 36.76C11.9489 37.008 11.4169 37.132 10.7289 37.132ZM14.5933 37V27.28H16.3693V35.776H18.7213V37H14.5933ZM22.1669 37.132C21.4789 37.132 20.9309 37.004 20.5229 36.748C20.1149 36.492 19.8229 36.124 19.6469 35.644C19.4709 35.164 19.3829 34.596 19.3829 33.94V30.304C19.3829 29.648 19.4709 29.088 19.6469 28.624C19.8229 28.152 20.1149 27.792 20.5229 27.544C20.9309 27.296 21.4789 27.172 22.1669 27.172C22.8709 27.172 23.4229 27.296 23.8229 27.544C24.2309 27.792 24.5229 28.152 24.6989 28.624C24.8829 29.088 24.9749 29.648 24.9749 30.304V33.952C24.9749 34.6 24.8829 35.164 24.6989 35.644C24.5229 36.116 24.2309 36.484 23.8229 36.748C23.4229 37.004 22.8709 37.132 22.1669 37.132ZM22.1669 35.824C22.4629 35.824 22.6789 35.76 22.8149 35.632C22.9589 35.504 23.0549 35.328 23.1029 35.104C23.1509 34.88 23.1749 34.636 23.1749 34.372V29.896C23.1749 29.624 23.1509 29.38 23.1029 29.164C23.0549 28.948 22.9589 28.78 22.8149 28.66C22.6789 28.532 22.4629 28.468 22.1669 28.468C21.8869 28.468 21.6749 28.532 21.5309 28.66C21.3869 28.78 21.2909 28.948 21.2429 29.164C21.1949 29.38 21.1709 29.624 21.1709 29.896V34.372C21.1709 34.636 21.1909 34.88 21.2309 35.104C21.2789 35.328 21.3749 35.504 21.5189 35.632C21.6629 35.76 21.8789 35.824 22.1669 35.824ZM28.7366 37.132C28.1526 37.132 27.6646 37.02 27.2726 36.796C26.8806 36.564 26.5846 36.228 26.3846 35.788C26.1846 35.348 26.0726 34.808 26.0486 34.168L27.5726 33.868C27.5886 34.244 27.6326 34.576 27.7046 34.864C27.7846 35.152 27.9006 35.376 28.0526 35.536C28.2126 35.688 28.4206 35.764 28.6766 35.764C28.9646 35.764 29.1686 35.68 29.2886 35.512C29.4086 35.336 29.4686 35.116 29.4686 34.852C29.4686 34.428 29.3726 34.08 29.1806 33.808C28.9886 33.536 28.7326 33.264 28.4126 32.992L27.1886 31.912C26.8446 31.616 26.5686 31.288 26.3606 30.928C26.1606 30.56 26.0606 30.108 26.0606 29.572C26.0606 28.804 26.2846 28.212 26.7326 27.796C27.1806 27.38 27.7926 27.172 28.5686 27.172C29.0246 27.172 29.4046 27.244 29.7086 27.388C30.0126 27.524 30.2526 27.716 30.4286 27.964C30.6126 28.212 30.7486 28.496 30.8366 28.816C30.9246 29.128 30.9806 29.46 31.0046 29.812L29.4926 30.076C29.4766 29.772 29.4406 29.5 29.3846 29.26C29.3366 29.02 29.2446 28.832 29.1086 28.696C28.9806 28.56 28.7886 28.492 28.5326 28.492C28.2686 28.492 28.0646 28.58 27.9206 28.756C27.7846 28.924 27.7166 29.136 27.7166 29.392C27.7166 29.72 27.7846 29.992 27.9206 30.208C28.0566 30.416 28.2526 30.632 28.5086 30.856L29.7206 31.924C30.1206 32.26 30.4606 32.656 30.7406 33.112C31.0286 33.56 31.1726 34.104 31.1726 34.744C31.1726 35.208 31.0686 35.62 30.8606 35.98C30.6606 36.34 30.3766 36.624 30.0086 36.832C29.6486 37.032 29.2246 37.132 28.7366 37.132ZM32.2183 37V27.28H36.2983V28.528H33.9943V31.324H35.8063V32.56H33.9943V35.776H36.3223V37H32.2183Z" fill="#9A3324"/></svg>`,
		colors: ['plum'],
		size: '44px x 44px'
	},
	{
		selector: '.success-filled-wrapper',
		svgCode: `<svg class="icon-success-filled" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#FED028" stroke="#FED028"/><path d="M5 8.81818L6.6 11L11 5" stroke="#DA291C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
		colors: ['yellow', 'green', 'red', 'black'],
		size: '16px x 16px'
	},
	{
		selector: '.cross-wrapper',
		svgCode: `<svg class="icon-cross" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="8" fill="#FED028"/><path d="M5 5.00003L11 11.0001" stroke="#DA291C" stroke-width="2" stroke-linecap="round"/><path d="M5 11L11 4.99997" stroke="#DA291C" stroke-width="2" stroke-linecap="round"/></svg>`,
		colors: ['yellow', 'green', 'red', 'black'],
		size: '16px x 16px'
	},
	{
		selector: '.plus-wrapper',
		svgCode: `<svg class="icon-plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00037 6L11.0004 6" stroke="#DA291C" stroke-width="2" stroke-linecap="round"/><path d="M6.00037 11L6.00037 1" stroke="#DA291C" stroke-width="2" stroke-linecap="round"/></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black'],
		size: '12px x 12px'
	},
	{
		selector: '.minus-wrapper',
		svgCode: `<svg class="icon-minus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00037 6L11.0004 6" stroke="#DA291C" stroke-width="2" stroke-linecap="round"/></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black'],
		size: '12px x 12px'
	},
	{
		selector: '.locked-wrapper',
		svgCode: `<svg class="icon-locked" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2_1421)"><rect width="16" height="16" rx="8" fill="#999999"/><path d="M3 8C3 6.89543 3.89543 6 5 6H11C12.1046 6 13 6.89543 13 8V10C13 12.2091 11.2091 14 9 14H7C4.79086 14 3 12.2091 3 10V8Z" fill="white"/><rect x="5.5" y="2.5" width="5" height="11" rx="2.5" stroke="white"/><path d="M7 10H9V12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12V10Z" fill="#999999"/><circle cx="8" cy="9" r="2" fill="#999999"/></g><defs><clipPath id="clip0_2_1421"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>`,
		colors: ['grey', 'plum', 'transparent-bg'],
		size: '16px x 16px'
	},
	{
		selector: '.download-wrapper',
		svgCode: `<svg class="icon-download" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9C2 11.0264 2 12.2644 2 13.0015C2 13.5538 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V9" stroke="#DA291C" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.648 6.81069L8.00006 9.00002M8.00006 9.00002L5.17163 6.8107M8.00006 9.00002L8 2" stroke="#DA291C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
		colors: ['red', 'white', 'dark-red', 'plum', 'black'],
		size: '16px x 16px'
	}
];
const iconGrid = document.querySelector('.icon-grid');

function insertInlineStyles() {
	const styleTag = document.createElement('style');
	styleTag.textContent = `.icon-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;width:80%;margin:0 auto 2rem;}.style-block{background-color:#f5f5f5}.style-block>div{text-align:center;margin-bottom:2rem}.style-block h3{text-align:center;margin:2rem 0 0.5rem!important}.style-block p{text-align:center;font-size:1.4rem;font-family:Lato,sans-serif}.size-info{margin-bottom:2rem;font-size:1rem}`;
	document.head.appendChild(styleTag);
}

function createMarkup(svgCode, color) {
	const iconMarkup = `${svgCode}<p>Colour: ${color}</p>`;
	const iconWrapper = document.createElement('div');
	iconWrapper.classList.add('icon-wrapper');
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
		const iconTitle = iconWrapper.querySelector('h3');
		// insert the icon size
		iconTitle.insertAdjacentHTML('afterend', `<p class="size-info">Size: ${icon.size}</p>`);
		for (const color of icon.colors) {
			const iconEl = createMarkup(icon.svgCode, color);
			iconWrapper.appendChild(iconEl);
		}
	}
}

function camelize(str) {
	return str.replace(/-./g, x => x[1].toUpperCase());
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
	return { name: iconName, colour: iconColour };

	// <div data-sly-use.iconTest="../../pagecomponents/page/icons.html">
	// 	<span class="icon" data-sly-call="${iconTest.iconSearch }"></span>
	// 	<span class="icon" data-sly-call="${iconTest.iconSearch @ color='dark-red' }"></span>
	// 	<span class="icon" data-sly-call="${iconTest.iconSearch @ color='black' }"></span>
	// </div>
}

function generateIconMarkup(iconInfo) {
	const classStr = camelize(iconInfo.name);
	const str = `<sly data-sly-use.iconsTemplate="../../pagecomponents/page/icons.html"><sly data-sly-call="\${iconsTemplate.${classStr} @ color='${iconInfo.colour}' }"></sly></sly>`;
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

// event listeners
document.addEventListener('DOMContentLoaded', addIcons);
iconGrid.addEventListener('click', e => {
	const iconWrapper = getIconWrapper(e.target);
	if (iconWrapper) {
		const iconInfo = getIconInfo(iconWrapper);
		copyCodeToClipboard(iconInfo);
	}
});
