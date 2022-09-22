let opener = null;
const origWinBtn = document.querySelector('.original-window-btn');

window.addEventListener('load', e => {
	opener = window.opener;
	opener.postMessage('popup opened', '*');
});

origWinBtn.addEventListener('click', e => {
	opener.postMessage('hello from the opened window', '*');
});
