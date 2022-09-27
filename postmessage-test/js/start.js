const openBtn = document.querySelector('.open-page-btn');

openBtn.addEventListener('click', e => {
	const openedWin = window.open('new_page.html', 'jgPayinForm');
});
