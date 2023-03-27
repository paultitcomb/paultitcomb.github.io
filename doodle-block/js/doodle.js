// some initial values
let doodleContainerId = null;
let doodleBgColor = 'grey';
let imgArr = [];
let moving = false;
let movingImg = null;

let root = document.documentElement;
const doodleContainer = document.querySelector('.doodle-container');
const bgColorMenu = document.querySelector('#bg-color');
const imgInput = document.querySelector('#img-input');
const addImgBtn = document.querySelector('.add-img-btn');
const doodleList = document.querySelector('.doodle-list');
const codeBlock = document.querySelector('.code-block pre');
const copyCssBtn = document.querySelector('.copy-css-btn');

function handleBgColorChange(e) {
	doodleBgColor = bgColorMenu.value;
	root.style.setProperty('--selected-bg-color', `var(--color-${doodleBgColor})`);
	generateCssRules();
}

function handleAddImg(e) {
	if (imgInput.value !== '') {
		const imgName = `images/${imgInput.value}`;
		const id = idGenerator(8);
		imgArr.push({ id, name: imgName, x: 0, y: 0 });
		loadNewImg(imgName, id);
	}
	imgInput.value = '';
}

function idGenerator(idLength) {
	const initialId = crypto.randomUUID();
	const shortenedId = initialId.replace(/-/g, '').substring(0, idLength);
	return shortenedId;
}

function loadNewImg(img, id) {
	const newDoodle = new Image();
	newDoodle.src = img;
	const imgId = `image-${id}`;
	newDoodle.id = imgId;
	newDoodle.classList.add('added-doodle');
	doodleContainer.appendChild(newDoodle);
	addListEntry(id);
}

function loadListOfImgs(data) {
	for (const img of data.imgList) {
		const id = idGenerator(8);
		imgArr.push({ id, name: img, x: 0, y: 0 });
		const newDoodle = new Image();
		const imgSrc = `${data.domain}${img}`;
		console.log(imgSrc);
		newDoodle.src = imgSrc;
		const imgId = `image-${id}`;
		newDoodle.id = imgId;
		newDoodle.classList.add('added-doodle');
		doodleContainer.appendChild(newDoodle);
		addListEntry(id);
	}
	generateCssRules();
}

function addListEntry(id) {
	const doodleInstance = getDoodleInstance(id);
	const newLi = document.createElement('li');
	newLi.id = `doodle-${doodleInstance.id}`;
	newLi.textContent = setDoodleListText(doodleInstance);
	doodleList.appendChild(newLi);
}

function setDoodleListText(doodleInstance) {
	return `Name: ${doodleInstance.name}, X: ${doodleInstance.x}, Y: ${doodleInstance.y}`;
}

function getDoodleInstance(doodleId) {
	const doodleInstance = imgArr.find(img => img.id === doodleId);
	return doodleInstance;
}

function updateDoodleList(doodleId) {
	const doodleInstance = getDoodleInstance(doodleId);
	const doodleEl = doodleList.querySelector(`#doodle-${doodleId}`);
	doodleEl.textContent = setDoodleListText(doodleInstance);
}

function clickDoodle(e) {
	if (e.target.classList.contains('added-doodle')) {
		movingImg = e.target;
		if (moving) {
			doodleContainer.removeEventListener('mousemove', moveDoodle);
			updateCoordinates(movingImg);
			movingImg = null;
			moving = !moving;
			return;
		}

		moving = !moving;

		doodleContainer.addEventListener('mousemove', moveDoodle, false);
	}
}

function moveDoodle(e) {
	const offsetX = doodleContainer.offsetLeft + movingImg.offsetWidth / 2;
	const offsetY = doodleContainer.offsetTop + movingImg.offsetHeight / 2;
	var newX = e.clientX - offsetX;
	var newY = e.clientY - offsetY;

	movingImg.style.left = newX + 'px';
	movingImg.style.top = newY + 'px';
}

function updateCoordinates(doodle) {
	const doodleLeft = doodle.offsetLeft;
	const doodleTop = doodle.offsetTop;
	const doodleId = doodle.id.replace('image-', '');
	let updateDoodle = getDoodleInstance(doodleId);
	updateDoodle.x = doodleLeft;
	updateDoodle.y = doodleTop;
	updateDoodleList(doodleId);
	generateCssRules();
}

function generateCssRules() {
	let css = ``;
	if (imgArr.length > 0) {
		css = `.doodle-container-${doodleContainerId} { `;
		imgArr.forEach((img, i) => {
			// for the first entry
			if (i === 0) {
				css += `background: url('${img.name}') no-repeat ${img.x}px ${img.y}px`;
			} else {
				css += `url('${img.name}') no-repeat ${img.x}px ${img.y}px`;
			}
			// is it the last entry
			if (i + 1 === imgArr.length) {
				css += ` var(--color-${doodleBgColor});`;
			} else {
				css += `, `;
			}
		});
		css += ` }`;
	} else {
		css = `.doodle-container-${doodleContainerId} { background-color: var(--color-${doodleBgColor}) }`;
	}
	codeBlock.textContent = css;
}

function copyCssToClipboard() {
	try {
		navigator.clipboard.writeText(codeBlock.textContent);
		console.log('Content copied to clipboard');
	} catch (err) {
		console.error('Failed to copy: ', err);
	}
}

// event listeners
bgColorMenu.addEventListener('change', handleBgColorChange);
addImgBtn.addEventListener('click', handleAddImg);
doodleContainer.addEventListener('mousedown', clickDoodle, false);
copyCssBtn.addEventListener('click', copyCssToClipboard);
window.addEventListener('DOMContentLoaded', e => {
	doodleContainerId = idGenerator(8);
	doodleContainer.classList.add(`doodle-container-${doodleContainerId}`);
});

window.addEventListener('load', e => {
	window.opener.postMessage('doodle-positioner-loaded', '*');
});

window.addEventListener('message', e => {
	const data = JSON.parse(e.data);
	console.log(data);
	loadListOfImgs(data);
});
