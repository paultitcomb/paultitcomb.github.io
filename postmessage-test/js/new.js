let opener = null;
const origWinBtn = document.querySelector('.original-window-btn');

// window.addEventListener('load', e => {
// 	opener = window.opener;
// 	opener.postMessage('popup opened', '*');
// });

origWinBtn.addEventListener('click', e => {
	window.parent.postMessage('hello from the opened window', 'https://aem-dev4-uk.stcdev.com');
});
