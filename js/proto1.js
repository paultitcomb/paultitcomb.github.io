const encodedUrl = encodeURIComponent(window.location.href);
const $socialShareContainer = document.querySelector('.social-share');
const $shareBtnPanel = document.querySelector('.share-button-panel');
const $detailsInputPanel = document.querySelector('.details-input-panel');
const $phoneNumInput = document.querySelector('.phone-num-input');
const $emailInput = document.querySelector('.email-input');
const $sendBtn = document.querySelector('.send-btn');
const $closePhoneInputBtn = document.querySelector('.close-phone-input-btn');
const $shareByEmailBtn = document.querySelector('.email-share');
const $hiddenEmailLink = document.querySelector('.hidden-email-link');
const supportsShareApi = navigator.share !== undefined;

// Set popup position on screen
const popupLeft = window.innerWidth / 2 - 800 / 2;
const popupTop = window.innerHeight / 2 - 600 / 2;

function handleShareBtnClick(e) {
	if (supportsShareApi) {
		launchShareSheet();
	} else {
		$shareBtnPanel.classList.toggle('open');
		if ($detailsInputPanel.classList.contains('open')) {
			closeDetailsInputPanel();
		}
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

	if (supportsShareApi) {
		launchShareSheet();
	} else {
		const shareType = e.target.getAttribute('data-share-type');
		launchSharePopup(shareType, $clicked);
	}
}

function getBtnPos($clicked) {
	const btnWidth = $clicked.offsetWidth;
	const btnFromLeft = $clicked.offsetLeft;
	const leftPos = btnFromLeft + btnWidth / 2;
	return leftPos;
}

function openDetailsInputPanel($clicked) {
	const leftPos = getBtnPos($clicked);
	$detailsInputPanel.style.left = `${leftPos}px`;
	$detailsInputPanel.classList.add('open');
}

function closeDetailsInputPanel() {
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

function launchSharePopup(shareType, $clicked) {
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
			$emailInput.classList.add('hidden');
			$phoneNumInput.classList.remove('hidden');
			openDetailsInputPanel($clicked);
			break;
		case 'email':
			$detailsInputPanel.setAttribute('data-share-type', shareType);
			$phoneNumInput.classList.add('hidden');
			$emailInput.classList.remove('hidden');
			openDetailsInputPanel($clicked);
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
$closePhoneInputBtn.addEventListener('click', closeDetailsInputPanel);
$sendBtn.addEventListener('click', handleDetailsSubmit);
