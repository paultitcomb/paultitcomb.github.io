(function (window, document) {
	// ------- set up the forn data object -------
	const formPostData = {};
	const formdata = {};
	formdata.header_acc = {};
	formdata.form_attributes = {
		hash: 'ISUMGEeP7dMutoa9ptDIbEr03nvFGKOaouw8vGYBTNE=',
		token: '',
		userNo: '6 5 5 7 0',
		channel: '',
		form_id: '513',
		fund_id: '61',
		pageUrl: window.location.href,
		form_name: 'summer-of-play',
		fund_code: 'Non-financial_0000',
		fund_name: 'Non-Financial Fund',
		campaign_id: '63',
		campaign_code: 'summer-of-play',
		campaign_name: 'Summer of Play',
		form_type_name: 'Data',
		marketing_source: '',
		marketing_campaign: ''
	};
	formPostData.schema = {
		type: 'object',
		$schema: 'http://json-schema.org/draft-04/schema#',
		required: ['header_acc', 'form_attributes'],
		properties: {
			header_acc: {
				$ref: '#/definitions/header_acc'
			},
			form_attributes: {
				$ref: '#/definitions/form_attributes'
			}
		},
		definitions: {
			header_acc: {
				required: [
					'organisation',
					'website',
					'first_name',
					'surname',
					'position',
					'email_address',
					'share_data'
				],
				properties: {
					organisation: {
						type: 'string'
					},
					website: {
						type: 'string'
					},
					surname: {
						type: 'string',
						pattern:
							"^(([a-zA-Z¡¿ÄäÀàÁáÂâÃãÅåǍǎĄąĂăÆæĀāÇçĆćĈĉČčĎđĐďðÈèÉéÊêËëĚěĘęĖėĒēĜĝĢģĞğĤĥÌìÍíÎîÏïıĪīĮįĴĵĶķĹĺĻļŁłĽľÑñŃńŇňŅņÖöÒòÓóÔôÕõŐőØøŒœŔŕŘřẞßŚśŜŝŞşŠšȘșŤťŢţÞþȚțÜüÙùÚúÛûŰűŨũŲųŮůŪūŴŵÝýŸÿŶŷŹźŽžŻż])(([.'’]?\\s?)|(-))?)+$"
					},
					first_name: {
						type: 'string',
						pattern:
							"^(([a-zA-Z¡¿ÄäÀàÁáÂâÃãÅåǍǎĄąĂăÆæĀāÇçĆćĈĉČčĎđĐďðÈèÉéÊêËëĚěĘęĖėĒēĜĝĢģĞğĤĥÌìÍíÎîÏïıĪīĮįĴĵĶķĹĺĻļŁłĽľÑñŃńŇňŅņÖöÒòÓóÔôÕõŐőØøŒœŔŕŘřẞßŚśŜŝŞşŠšȘșŤťŢţÞþȚțÜüÙùÚúÛûŰűŨũŲųŮůŪūŴŵÝýŸÿŶŷŹźŽžŻż])(([.'’]?\\s?)|(-))?)+$"
					},
					email_address: {
						type: 'string',
						pattern:
							'^[a-zA-Z0-9]([a-zA-Z0-9\\_\\-]|\\.[a-zA-Z0-9]){0,29}@[a-zA-Z0-9\\_\\-]{1,30}\\.[a-zA-Z0-9]([a-zA-Z0-9\\_\\-]|\\.[a-zA-Z0-9])+$'
					},
					sector: {
						enum: ['public', 'private', 'third']
					},
					started: {
						enum: ['true', 'false']
					},
					plans: {
						type: 'string',
						maxLength: 200
					},
					plans2: {
						type: 'string',
						maxLength: 200
					},
					plans3: {
						type: 'string',
						maxLength: 200
					},
					plans4: {
						type: 'string',
						maxLength: 200
					},
					plans5: {
						type: 'string',
						maxLength: 200
					},
					share_data: {
						enum: ['true', 'false']
					}
				}
			},
			form_attributes: {
				required: ['hash', 'form_id', 'form_name', 'form_type_name']
			}
		}
	};

	// ------- cache DOM elements -------
	const $formContainer = document.querySelector('.form-container');
	const $formEl = $formContainer.querySelector('form');
	const $tyMsg = $formContainer.querySelector('.thankyou-message');
	const $formErrorMsg = $formContainer.querySelector('.form-submit-error');
	const $questions = document.querySelectorAll('.question');
	const $submitBtn = document.querySelector('.submit-btn');
	const $planningWrapper = document.querySelector('.started-planning');
	const $planningTextAreaWrapper = document.querySelector('.planning-textarea');
	const $planningTextArea = document.querySelector('#planning-description');
	const $requiredFields = document.querySelectorAll('[required]');
	const $parentWindow = window.parent;
	let siteKey = '';
	let formHeight = 0;

	// load the recaptcha library
	function loadCaptchaLib() {
		const key = getCaptchaKey();

		key.then(captchaKey => {
			siteKey = captchaKey;
			const s = document.createElement('script');
			s.type = 'text/javascript';
			s.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
			document.body.appendChild(s);

			s.onload = function () {
				$submitBtn.removeAttribute('disabled');
				$submitBtn.classList.add('active');
			};
		}).catch(err => {
			console.error(err);
		});
	}

	// get the google captcha key
	function getCaptchaKey() {
		return new Promise((resolve, reject) => {
			fetch('/sop/captchaKey')
				.then(res => {
					return res.text();
				})
				.then(captchaKey => {
					resolve(captchaKey);
				})
				.catch(err => {
					reject(err);
				});
		});
	}

	// ------- get values from form fields -------
	function getValueFromTextField($textField) {
		// replace multiple spaces with a single space
		const sanitisedText = sanitiseText($textField.value.trim());
		return { key: $textField.getAttribute('name'), value: sanitisedText };
	}

	function getCheckBoxValues($checkboxes) {
		const checkedVals = [];
		$checkboxes.forEach($checkbox => {
			if ($checkbox.checked) {
				checkedVals.push($checkbox.value);
			}
		});

		return { key: $checkboxes[0].getAttribute('name'), value: checkedVals.join(', ') };
	}

	function getValueFromRadioGroup($radioBtnGroup) {
		let checkedName = '';
		let checkedVal = '';
		$radioBtnGroup.forEach($radioBtn => {
			if ($radioBtn.checked) {
				checkedName = $radioBtn.getAttribute('name');
				checkedVal = $radioBtn.value;
			}
		});
		return { key: checkedName, value: checkedVal };
	}

	function handlePlanningText() {
		if (!$planningTextAreaWrapper.classList.contains('hidden')) {
			const text = sanitiseText($planningTextArea.value);
			// if the text is longer than 200 characters send it to new function to be split up, otherwise put the value in an array and send it on to the addPlansFieldsToObj along with a load of blank strings
			text.length > 200 ? splitPlanningString(text) : addPlansFieldsToObj([text, '', '', '', '']);
		} else {
			// the field is hidden so we'll just send 5 blank strings to be added to the JSON object
			addPlansFieldsToObj(['', '', '', '', '']);
		}
	}

	function sanitiseText(text) {
		const removedNewLineChars = text.replace(/(?:\r\n|\r|\n)/g, ' ');
		const removedMultipleSpaces = removedNewLineChars.replace(/\s{2,}/g, ' ');
		const removedDoubleQuotes = removedMultipleSpaces.replace(/"/g, '`');
		return removedDoubleQuotes;
	}

	function splitPlanningString(str) {
		let startingIndex = 0;
		let endIndex = 200;
		const strSectionLength = 200;
		const strArr = [];

		// loop through 5 times getting a 200 character section of string each time and pushing it into an array
		for (let i = 0; i < 5; i++) {
			const strSection = str.substring(startingIndex, endIndex);
			strArr.push(strSection);
			// add 200 to the start and end indexes so that in the next loop iteration the string grabs the next chunk of text
			startingIndex += strSectionLength;
			endIndex += strSectionLength;
		}

		// add the split string to the JSON object
		addPlansFieldsToObj(strArr);
	}

	function addPlansFieldsToObj(stringsArr) {
		stringsArr.forEach((str, i) => {
			if (i === 0) {
				formdata.header_acc['plans'] = str;
			} else {
				formdata.header_acc[`plans${i + 1}`] = str;
			}
		});
	}

	function validateForm(e) {
		e.preventDefault();
		const invalidFields = [];
		// loop through required fields and check they have a value
		$requiredFields.forEach($field => {
			const validityState = $field.validity;
			if (validityState.valueMissing) {
				invalidFields.push({ el: $field, message: 'Please enter a value in this field' });
			}

			// if the first/last name fields have characters that don't match the pattern - throw an error
			if (
				$field.classList.contains('name-validation') &&
				!validityState.valueMissing &&
				validityState.patternMismatch
			) {
				invalidFields.push({ el: $field, message: 'Please enter only valid name characters' });
			}

			// if the email field has a value but it is a pattern mismatch show an email validation error
			if ($field.name === 'email_address' && !validityState.valueMissing && validityState.patternMismatch) {
				invalidFields.push({ el: $field, message: 'Please enter a valid email address' });
			}
		});

		// if there are any invalid fields - show a validation error otherwise collect the form data
		if (invalidFields.length > 0) {
			showValidationErrors(invalidFields);
		} else {
			$submitBtn.setAttribute('disabled', 'disabled');
			collectFormData();
		}
	}

	function showValidationErrors(invalidFields) {
		invalidFields.forEach(field => {
			let errorMsg = '';
			let $errorMsgEl = '';
			// if it is a radio button the error message will be different and we need to find it in a different place
			if (field.el.type === 'radio') {
				$errorMsgEl = field.el.closest('.question').querySelector('.validation-error-msg');
				errorMsg = 'Please select one of the options above';
			} else {
				field.el.classList.add('validation-error');
				$errorMsgEl = field.el.nextElementSibling;
				errorMsg = field.message;
			}

			if ($errorMsgEl.classList.contains('validation-error-msg')) {
				$errorMsgEl.textContent = errorMsg;
				$errorMsgEl.classList.add('show');
			}
		});

		// get y position of first error
		const scrollPos = getScrollPos(invalidFields[0].el.closest('.question'));
		// tell the parent window to scroll to a certain point
		sendMsgToParentWindow(`scrollTo-${scrollPos}`);
	}

	function hideValidationErrors(e) {
		const $el = e.target;

		if ($el.type === 'radio') {
			const $errorMsgEl = $el.closest('.question').querySelector('.validation-error-msg');
			if ($errorMsgEl.classList.contains('show')) {
				$errorMsgEl.classList.remove('show');
			}
		} else {
			if ($el.classList.contains('validation-error')) {
				$el.classList.remove('validation-error');
				const $errorMsgEl = $el.nextElementSibling;
				if ($errorMsgEl.classList.contains('validation-error-msg')) {
					$errorMsgEl.classList.remove('show');
				}
			}
		}
	}

	function getScrollPos($el) {
		return $el.getBoundingClientRect().top;
	}

	function collectFormData() {
		$questions.forEach($question => {
			const type = $question.getAttribute('data-question-type');

			switch (type) {
				case 'text':
					const $textFields = $question.querySelectorAll('input');
					$textFields.forEach($textField => {
						const textFieldVals = getValueFromTextField($textField);
						formdata.header_acc[textFieldVals.key] = textFieldVals.value;
					});
					break;
				case 'radio':
					const $radioBtns = $question.querySelectorAll('input[type="radio"]');
					const objKey = $radioBtns[0].name;
					const radioVals = getValueFromRadioGroup($radioBtns);
					formdata.header_acc[objKey] = radioVals.value;
					break;
				case 'checkbox-multi-values':
					const $checkboxes = $question.querySelectorAll('input[type="checkbox"]');
					const checkboxVals = getCheckBoxValues($checkboxes);
					formdata.header_acc[checkboxVals.key] = checkboxVals.value;
					break;
				case 'checkbox-boolean':
					const $checkbox = $question.querySelector('input[type="checkbox"]');
					const checkboxName = $checkbox.getAttribute('name');
					const checkboxVal = $checkbox.checked ? 'true' : 'false';
					formdata.header_acc[checkboxName] = checkboxVal;
					break;
			}
		});

		// we need to check the character count in the planning text area and if it is more than 200, split it over several fields
		handlePlanningText();
		sendFormData();
	}

	function togglePlanningTextVisbility(e) {
		const $el = e.target;
		// check that the thing clicked was actually one of our radio buttons
		if ($el.name === 'started') {
			$el.value === 'true'
				? $planningTextAreaWrapper.classList.remove('hidden')
				: $planningTextAreaWrapper.classList.add('hidden');
		}
	}

	// send a message to the parent window to tell it what height to set the iframe
	function sendMsgToParentWindow(msg) {
		$parentWindow.postMessage(msg, '*');
	}

	// send form data to Forms Engine
	function sendFormData() {
		// add all the data to the object that will be sent
		formPostData.formdata = formdata;

		// get recaptcha token, then submit
		grecaptcha.ready(function () {
			grecaptcha.execute(siteKey, { action: 'submit' }).then(token => {
				// add the recaptcha token to the payload
				formPostData.formdata.form_attributes.token = token;

				fetch('/formPost', {
					method: 'post',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formPostData)
				})
					.then(response => {
						if (!response.ok) {
							throw new Error('Form submission was rejected');
						}

						return response.json();
					})
					.then(data => {
						showMessagePanel($tyMsg);
					})
					.catch(err => {
						console.error(err);
						showMessagePanel($formErrorMsg);
					});
			});
		});
	}

	function showMessagePanel($msgPanel) {
		$formEl.classList.add('fade-out');

		setTimeout(() => {
			$formEl.classList.add('hidden');
			sendMsgToParentWindow('scrollTo-0');
			$msgPanel.classList.remove('hidden');
			$msgPanel.classList.remove('fade-out');
		}, 1000);
	}

	// get the current height of the form container and send to parent window
	function checkFormHeight() {
		const currentHeight = $formContainer.offsetHeight;
		if (currentHeight !== formHeight) {
			sendMsgToParentWindow('iframeHeight-' + currentHeight);
			formHeight = currentHeight;
		}
	}

	// ------- Event listeners -------
	$submitBtn.addEventListener('click', validateForm);
	$planningWrapper.addEventListener('change', togglePlanningTextVisbility);
	$requiredFields.forEach($field => {
		$field.addEventListener('input', hideValidationErrors);
	});

	// Handle DOM mutation
	function moCallback(mutationsList, observer) {
		for (const mutation of mutationsList) {
			if (mutation.type === 'attributes') {
				checkFormHeight();
			}
		}
	}

	var observer = new MutationObserver(moCallback);
	observer.observe($formContainer, { attributes: true, childList: false, subtree: true });

	// start loading the google recaptcha library
	loadCaptchaLib();

	// once the page has loaded send a message to the parent window to tell it what height to set the iframe
	window.addEventListener('load', e => {
		checkFormHeight();
	});
})(window, document);
