const bodyClass = document.body.className;

if (bodyClass === '3ds-page' || bodyClass === 'ty-page') {
	history.replaceState(null, '', '/history-test/home.html');
}
