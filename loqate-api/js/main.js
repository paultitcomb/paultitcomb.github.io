const findAPIEndPoint = 'http://api.addressy.com/Capture/Interactive/Find/v1.10/json3.ws';
const retrieveAPIEndPoint = 'http://api.addressy.com/Capture/Interactive/Retrieve/v1.20/json3.ws';
let requestOptions = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: null
};
let loqateApiKey = null;
const findBtn = document.querySelector('.find-btn');
const postcodeSearchInput = document.querySelector('#postcode-search-input');
const noApiKeyMsg = document.querySelector('.no-api-key-msg');
const postCodeResults = document.querySelector('#postcode-results');
const addressDetails = document.querySelector('.address-details');
const orgName = document.querySelector('#address-org-name');
const addressLine1 = document.querySelector('#address-line-1');
const addressLine2 = document.querySelector('#address-line-2');
const addressLine3 = document.querySelector('#address-line-3');
const addressTown = document.querySelector('#address-town');
const addressPostcode = document.querySelector('#address-postcode');

function getAPIKey() {
	const params = new URLSearchParams(window.location.search);
	loqateApiKey = params.get('key');
}

function fetchData(url, options) {
	return new Promise((resolve, reject) => {
		fetch(url, options)
			.then(response => response.json())
			.then(result => {
				resolve(result);
			})
			.catch(error => {
				console.log('error', error);
				reject(error);
			});
	});
}

function buildURLParams(params) {
	const urlencoded = new URLSearchParams();
	params.forEach(param => {
		urlencoded.append(param.key, param.val);
	});
	return urlencoded;
}

function resetPostcodeResults() {
	const optionEls = postCodeResults.querySelectorAll('option');
	optionEls.forEach((optionEl, i) => {
		if (i > 0) {
			optionEl.remove();
		}
	});
}

function buildResultsList(results) {
	// we need to reset the postcode results if there is already stuff in it
	if (postCodeResults.children.length > 1) {
		resetPostcodeResults();
	}
	if (results.length > 1) {
		const fragment = document.createDocumentFragment();
		results.forEach(result => {
			const optionEl = document.createElement('option');
			optionEl.value = result.Id;
			optionEl.textContent = result.Text;
			fragment.appendChild(optionEl);
		});
		postCodeResults.appendChild(fragment);
		postCodeResults.removeAttribute('hidden');
	}
	// console.log(results);
}

async function selectPostcodeFromList() {
	if (postCodeResults.value !== 'none') {
		const id = postCodeResults.value;
		const data = buildURLParams([
			{ key: 'Key', val: loqateApiKey },
			{ key: 'Id', val: id }
		]);
		requestOptions.body = data;
		postCodeResults.setAttribute('hidden', '');
		const fullAddress = await fetchData(retrieveAPIEndPoint, requestOptions);
		console.log(fullAddress);
		populateAddressDetails(fullAddress.Items);
	}
}

async function postcodeLookup(e) {
	e.preventDefault();
	if (!loqateApiKey) {
		noApiKeyMsg.removeAttribute('hidden');
		return false;
	}
	const postcodeVal = postcodeSearchInput.value;
	if (postcodeVal !== '') {
		const urlParamArr = [
			{ key: 'Key', val: loqateApiKey },
			{ key: 'Text', val: postcodeVal.trim() }
		];
		let data = buildURLParams(urlParamArr);
		requestOptions.body = data;

		// initial postcode lookup
		const results = await fetchData(findAPIEndPoint, requestOptions);

		if (results && results.Items.length === 1) {
			// add Container header to get refined results
			const firstResultId = results.Items[0].Id;
			urlParamArr.push({ key: 'Container', val: firstResultId });
			const newData = buildURLParams(urlParamArr);
			requestOptions.body = newData;
			const refinedResults = await fetchData(findAPIEndPoint, requestOptions);
			buildResultsList(refinedResults.Items);
		}
	}
}

function populateAddressDetails(addressObj) {
	if (addressObj && addressObj.length === 1) {
		const address = addressObj[0];
		orgName.value = address.Company;
		addressLine1.value = address.Line1;
		addressLine2.value = address.Line2;
		addressLine3.value = address.Line3;
		addressTown.value = address.City;
		addressPostcode.value = address.PostalCode;
		addressDetails.removeAttribute('hidden');
	}
}

// event listeners
window.addEventListener('DOMContentLoaded', getAPIKey);
findBtn.addEventListener('click', postcodeLookup);
postCodeResults.addEventListener('click', selectPostcodeFromList);
postCodeResults.addEventListener('keypress', e => {
	if (e.key === 'Enter') {
		selectPostcodeFromList();
	}
});
