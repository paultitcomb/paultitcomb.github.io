const encodedUrl = encodeURIComponent(window.location.href);
const $socialShareContainer = document.querySelector('.social-share');
const $shareBtn = document.querySelector('.open-share-panel-btn');
const $shareBtnPanel = document.querySelector('.share-button-panel');
const $detailsInputPanel = document.querySelector('.details-input-panel');
const $phoneNumInput = document.querySelector('.phone-num-input');
const $emailInput = document.querySelector('.email-input');
const $sendBtn = document.querySelector('.send-btn');
const $closeDetailsPanelBtn = document.querySelector('.close-detail-panel-btn');
const $shareByEmailBtn = document.querySelector('.email-share');
const $hiddenEmailLink = document.querySelector('.hidden-email-link');
const supportsShareApi = navigator.share !== undefined;
const useWebShare = supportsShareApi && isMobile();

// Set popup position on screen
const popupLeft = window.innerWidth / 2 - 800 / 2;
const popupTop = window.innerHeight / 2 - 600 / 2;

function isMobile() {
	let check = false;
	(function (a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4)
			)
		)
			check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
}

function handleShareBtnClick(e) {
	if (supportsShareApi && isMobile()) {
		launchShareSheet();
	}
}

function launchShareSheet() {
	navigator
		.share({
			title: 'Web share test',
			url: window.location.href
		})
		.then(() => {
			console.log('Thanks for sharing!');
		})
		.catch(console.error);
}

function handleSocialNetworkBtnClick(e) {
	const $clicked = e.target;
	const shareType = e.target.getAttribute('data-share-type');
	launchSharePopup(shareType);
}

function openDetailsInputPanel() {
	$detailsInputPanel.classList.add('open');
}

function closeDetailsPanel() {
	$detailsInputPanel.classList.remove('open');
	$phoneNumInput.value = '';
	$emailInput.value = '';
	$detailsInputPanel.removeAttribute('data-share-type');
	setTimeout(() => {
		$phoneNumInput.classList.add('hidden');
		$emailInput.classList.add('hidden');
	}, 300);
}

function handleDetailsSubmit() {
	const shareType = $detailsInputPanel.getAttribute('data-share-type');

	switch (shareType) {
		case 'whatsapp':
			let phoneNum = $phoneNumInput.value;
			if (phoneNum.startsWith('0')) {
				phoneNum = phoneNum.substring(1);
			}
			const url = `https://api.whatsapp.com/send?phone=+44${phoneNum}&text=Here is some sample text: ${encodedUrl}`;
			openNewWindow(url);
			break;

		case 'email':
			const email = encodeURIComponent($emailInput.value);
			const emailSubject = encodeURIComponent('Here is an amazing email from Save the Children');
			const emailBody = encodeURIComponent(`Check out this web page: ${window.location.href}, it's amazing!`);
			$hiddenEmailLink.setAttribute('href', `mailto:${email}?subject=${emailSubject}&body=${emailBody}`);
			$hiddenEmailLink.click();
			break;
	}
}

function launchSharePopup(shareType) {
	let url = '';

	switch (shareType) {
		case 'facebook':
			url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
			openNewWindow(url);
			break;
		case 'twitter':
			const text = encodeURIComponent('this is a test tweet');
			const hashtags = ['Yemen', 'Syria'].join(',');
			url = `https://twitter.com/intent/tweet/?text=${text}&url=${encodedUrl}&via=savechildrenuk&hashtags=${hashtags}`;
			openNewWindow(url);
			break;
		case 'linkedin':
			const title = encodeURIComponent('Save the Children UK - this is a page about stuff');
			const summary = encodeURIComponent('This is a test of the new social share component');
			const source = encodeURIComponent('Save the Children UK');
			url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${title}&summary=${summary}&source=${source}`;
			openNewWindow(url);
			break;
		case 'whatsapp':
			$detailsInputPanel.setAttribute('data-share-type', shareType);
			$phoneNumInput.classList.remove('hidden');
			openDetailsInputPanel();
			break;
		case 'email':
			$detailsInputPanel.setAttribute('data-share-type', shareType);
			$emailInput.classList.remove('hidden');
			openDetailsInputPanel();
			break;
	}
}

function openNewWindow(url) {
	window.open(
		url,
		'',
		'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' +
			800 +
			',height=' +
			600 +
			',top=' +
			popupTop +
			',left=' +
			popupLeft
	);
}

$socialShareContainer.addEventListener('click', handleSocialNetworkBtnClick);
$closeDetailsPanelBtn.addEventListener('click', closeDetailsPanel);
$sendBtn.addEventListener('click', handleDetailsSubmit);

window.addEventListener('load', e => {
	setTimeout(() => {
		useWebShare ? $shareBtn.classList.remove('off-screen') : $shareBtnPanel.classList.remove('off-screen');
	}, 1000);
});
