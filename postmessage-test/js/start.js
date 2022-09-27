const openBtn = document.querySelector('.open-page-btn');

openBtn.addEventListener('click', e => {
	const openedWin = window.open('new_page.html', 'jgPayinForm');
});

window.addEventListener('message', e => {
	console.log('message received');
	console.log(e.data);
});
