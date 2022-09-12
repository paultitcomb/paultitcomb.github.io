var otPermissions = '';
window.addEventListener('message', event => {
	var msgFromParent = event.data;
	if (msgFromParent.includes('cjdOTPermissions-')) {
		otPermissions = msgFromParent.replace('cjdOTPermissions-', '');
		console.log('==============');
		console.log(`we've got a message from the parent page`);
		console.log(otPermissions);
		console.log('==============');
	}
});
