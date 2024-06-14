function insertStyles() {
	const styleTag = document.createElement('style');
	styleTag.textContent = `.icon-test-page-wrapper{min-height:400vh;position:relative}.icon-test-page-wrapper iframe{border:0;width:80%;height:100%;position:absolute;left:10%}`;
	document.head.appendChild(styleTag);
}

function injectIframe() {
	const iframeWrapper = document.querySelector('.icon-test-page-wrapper');

	const iframe = document.createElement('iframe');
	iframe.src = 'https://paultitcomb.github.io/icon-test-page';

	// clear out the text
	iframeWrapper.innerHTML = '';
	iframeWrapper.insertAdjacentElement('beforeend', iframe);
}

function init() {
	insertStyles();
	injectIframe();
}

// event listeners
document.addEventListener('DOMContentLoaded', init);
