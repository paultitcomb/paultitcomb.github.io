const bodyClass = document.body.className;

if (bodyClass === '3ds-page' || bodyClass === 'ty-page') {
	window.history.pushState(null, '', window.location.pathname);

	window.addEventListener('popstate', function (event) {
		// Push another state to prevent going back
		window.history.pushState(null, '', window.location.pathname);
	});
}
