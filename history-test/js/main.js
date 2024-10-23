const bodyClass = document.body.className;

if (bodyClass === '3ds-page' || bodyClass === 'ty-page') {
	// history.replaceState(null, '', '/history-test/home.html');
	window.addEventListener('beforeunload', function (e) {
		// Cancel the event and show confirmation dialog
		e.preventDefault();
		// Chrome requires returnValue to be set
		e.returnValue = '';
	});
}
