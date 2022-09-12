var otPermissions = '';
window.addEventListener('message', event => {
	var msgFromParent = event.data;
	if (msgFromParent.includes('cjdOTPermissions-')) {
		otPermissions = msgFromParent.replace('cjdOTPermissions-', '');
		console.log('yo yo yo we got a message');
		console.log(otPermissions);
	}
});
