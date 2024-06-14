function init() {
	const iframeWrapper = document.querySelector('.icon-test-page-wrapper');

	const iframe = document.createElement('iframe');
	iframe.src = 'https://paultitcomb.github.io/icon-test-page';

	iframeWrapper.insertAdjacentElement('beforeend', iframe);
}

// event listeners
document.addEventListener('DOMContentLoaded', init);
