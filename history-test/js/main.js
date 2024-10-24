const bodyClass = document.body.className;

if (bodyClass === '3ds-page') {
	const prevPage = document.referrer;
	if (prevPage.includes('thankyou.html')) {
		location.href = '/history-test/home.html';
	}
}
