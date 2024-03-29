var _slicedToArray = function (e, t) {
		if (Array.isArray(e)) return e;
		if (Symbol.iterator in Object(e))
			return (function (e, t) {
				var a = [],
					n = !0,
					r = !1,
					i = void 0;
				try {
					for (
						var o, s = e[Symbol.iterator]();
						!(n = (o = s.next()).done) && (a.push(o.value), !t || a.length !== t);
						n = !0
					);
				} catch (e) {
					(r = !0), (i = e);
				} finally {
					try {
						!n && s.return && s.return();
					} finally {
						if (r) throw i;
					}
				}
				return a;
			})(e, t);
		throw new TypeError('Invalid attempt to destructure non-iterable instance');
	},
	_typeof =
		'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
			? function (e) {
					return typeof e;
			  }
			: function (e) {
					return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
						? 'symbol'
						: typeof e;
			  },
	STCUK = STCUK || {};
STCUK.utility = {
	stringSafe: function (e) {
		return e
			? e
					.trim()
					.replace(/[^a-zA-Z0-9' ']/g, '')
					.toLowerCase()
					.split(' ')
					.join('-')
					.replace(/[\-]+/g, '-')
			: ' ';
	},
	getParameterByName: function (e, t) {
		t || (t = window.location.href), (e = e.replace(/[\[\]]/g, '\\$&'));
		var a = new RegExp('[?&]' + e + '(=([^&#]*)|&|#|$)').exec(t);
		return a ? (a[2] ? decodeURIComponent(a[2].replace(/\+/g, ' ')) : '') : null;
	},
	getFormDataAttribute: function (e, t) {
		return t.data(e);
	},
	getAnchorLink: function () {
		return window.location.hash.replace('#', '');
	},
	restrictNumberChars: function (e, t, a) {
		var n = e.key ? e.key : e.which;
		(n >= '0' && n <= '9') ||
			(n >= 48 && n <= 57) ||
			(t && ('.' === n || 'Decimal' === n || 190 === n)) ||
			(a && ('-' === n || 189 === n)) ||
			'ArrowLeft' === n ||
			'Left' === n ||
			37 === n ||
			'ArrowRight' === n ||
			'Right' === n ||
			39 === n ||
			'Delete' === n ||
			'Del' === n ||
			46 === n ||
			110 === n ||
			'Backspace' === n ||
			8 === n ||
			'Tab' === n ||
			9 === n ||
			(e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
	},
	getBreakpoint: function (e) {
		var t = void 0;
		switch (e) {
			case 'small-device':
				t = 768;
				break;
			case 'medium-device':
				t = 992;
				break;
			case 'large-device':
			default:
				t = 1200;
		}
		return t;
	},
	checkMobileResolution: function () {
		var e = !1;
		return window.innerWidth < this.getBreakpoint('small-device') && (e = !0), e;
	},
	checkDesktopResolution: function () {
		var e = !1;
		return window.innerWidth >= this.getBreakpoint('large-device') && (e = !0), e;
	},
	isElementInViewport: function (e) {
		var t = window.innerHeight;
		return e.getBoundingClientRect().top < t;
	},
	setCalenderView: function (e) {
		this.checkMobileResolution()
			? e.datepicker('option', 'numberOfMonths', 1)
			: e.datepicker('option', 'numberOfMonths', 2);
	},
	resetDigitalData: function () {
		void 0 !== digitalData.page.component.form.additionalData &&
			null !== digitalData.page.component.form.additionalData &&
			((digitalData.page.component.form.additionalData.singleDonationAmount = ''),
			(digitalData.page.component.form.additionalData.regularDonationAmount = ''),
			(digitalData.page.component.form.additionalData.currencyCode = ''),
			(digitalData.page.component.form.additionalData.conversionCampaign = ''),
			(digitalData.page.component.form.additionalData.softPrompt = ''),
			(digitalData.page.component.form.additionalData.typeOfDonation = ''),
			(digitalData.page.component.form.additionalData.isGiftAidIt = ''),
			(digitalData.page.component.form.additionalData.paymentMethod = ''),
			(digitalData.page.component.form.additionalData.joinUsbyPost = ''),
			(digitalData.page.component.form.additionalData.joinUsbyEmail = ''),
			(digitalData.page.component.form.additionalData.joinUsbyPhone = ''),
			(digitalData.page.component.form.additionalData.joinUsbySms = ''),
			(digitalData.page.component.form.additionalData.fundraisingEventCategory = ''),
			(digitalData.page.component.form.additionalData.organizingChallengeWith = ''),
			(digitalData.page.component.form.additionalData.moreThanOnePersonRequiredToAuthorize = ''),
			(digitalData.page.component.form.additionalData.companyName = ''),
			(digitalData.page.component.form.additionalData.companyLocation = ''),
			(digitalData.page.component.form.additionalData.pledgeAmount = ''),
			(digitalData.page.component.form.additionalData.GalaEventAmount = ''));
	},
	getHeaderHeight: function () {
		return $('.ui-component.header').height() || 0;
	},
	encodeSearch: function (e, t, a) {
		var n = $.trim(t),
			r = !1;
		return (a = a || 0), n && n.length >= a && (e.val(encodeURIComponent(n)), (r = !0)), r;
	},
	getUrlSegmentAfter: function (e) {
		var t = window.location.href,
			a = '';
		return (
			t.includes(e) &&
				(a = t
					.substr(t.indexOf(e) + e.length, t.length)
					.split('/')[0]
					.split('.')[0]),
			a
		);
	},
	searchErrorMsg: function (e, t, a, n) {
		e.attr('pattern', '.{' + t + ',' + a + '}'),
			e.attr('data-minlen', t),
			navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')
				? e.parents('form').on('submit', function (r) {
						var i = e.val().length;
						return (
							e[0].setCustomValidity(''),
							(parseInt(t) <= i && i <= parseInt(a)) ||
								(e[0].setCustomValidity(n), r.preventDefault(), !1)
						);
				  })
				: (e[0].oninvalid = function (e) {
						var r = e.target,
							i = $(r).val().length;
						r.setCustomValidity(''),
							r.validity.valid || (parseInt(t) <= i && i <= parseInt(a) && r.setCustomValidity(n));
				  });
	},
	equalHeight: function (e) {
		var t = $(e).find('.radio-button'),
			a = t.find('label'),
			n = 0,
			r = 0;
		$.each(t, function (e, t) {
			var a = $(t).height();
			a >= r && (r = a);
		}),
			$.each(a, function (e, t) {
				var a = $(t).height();
				a >= n && (n = a);
			}),
			t.height(r),
			a.height(n);
	},
	clearSessionStorage: function (e) {
		if (e)
			try {
				window.sessionStorage && window.sessionStorage[e] && sessionStorage.removeItem(e);
			} catch (e) {}
	},
	isAuthorMode: function () {
		return 'true' === $('body').attr('data-author-mode');
	},
	trackEvent: (function (e) {
		function t() {
			return e.apply(this, arguments);
		}
		return (
			(t.toString = function () {
				return e.toString();
			}),
			t
		);
	})(function () {
		if ('function' == typeof trackEvent) {
			for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
			trackEvent(t);
		} else this.dtmMissingAlert();
	}),
	satellite: function () {
		return 'object' === ('undefined' == typeof _satellite ? 'undefined' : _typeof(_satellite))
			? _satellite
			: (this.dtmMissingAlert(), { track: function () {}, pageBottom: function () {} });
	},
	dtmMissingAlert: function () {
		'function' == typeof ga &&
			ga('send', {
				hitType: 'event',
				eventCategory: 'Alerts',
				eventAction: 'Missing',
				eventLabel: 'DTM not loaded'
			}),
			console.log('DTM not loaded');
	},
	enableSubmit: function (e) {
		e.find('input[type=submit]').removeAttr('disabled');
	},
	disableSubmit: function (e) {
		e.find('input[type=submit]').attr('disabled', 'disabled');
	},
	getParams: function (e) {
		if (e) {
			var t = e.substring(0, e.length).split('&'),
				a = {},
				n = void 0,
				r = void 0;
			for (r = 0; r < t.length; r += 1)
				(n = t[r].split('=')), (a[decodeURIComponent(n[0]).toLowerCase()] = decodeURIComponent(n[1]));
			return a;
		}
		return !1;
	},
	disableEnterTextField: function (e) {
		e.find(
			'input[type="date"], input[type="tel"], input[type="email"], input[type="password"], input[type="mail"], input[type="text"], input[type="radio"], input[type="checkbox"]'
		)
			.not('.radio-pay-pal .paypal')
			.on('keyup keypress', function (e) {
				if (13 === (e.keyCode || e.which)) return e.preventDefault(), !1;
			});
	},
	scrollToError: function () {
		$('html, body').animate(
			{ scrollTop: $('.error-container').offset().top - STCUK.utility.getHeaderHeight(1) - 3 },
			100
		);
	},
	_scrollToElement: function (e) {
		STCUK.utility.scrollToElement($(e), !0);
	},
	scrollToElement: function (e, t, a) {
		var n = 0;
		t && (n = STCUK.utility.getHeaderHeight(!0));
		var r = e.offset().top - n;
		$([document.documentElement, document.body]).animate({ scrollTop: r }, a || 1e3);
	},
	populateErrorMessages: function (e, t, a) {
		var n = e.form,
			r = e.errorSummary,
			i = e.errorHeading;
		a.html('');
		var o = n;
		t.length
			? ($.each(t, function (e, t) {
					var n = t.errorMessages,
						r = t.elem,
						i = n[0],
						o = $(
							'<li class="form-error-item">' +
								i +
								' <a title="' +
								i +
								'" href="javascript:void(0)">Click to see error(s)</a> or call Supporter Care on +44 (0)20 7012 6400 to donate over the phone</li>'
						);
					o.children('a').data('elem', r), a.append(o);
			  }),
			  r.show(),
			  STCUK.utility.scrollToError(),
			  1 === t.length
					? (i.html(o.data('singleErrorMsg')), r.addClass('single-error'))
					: (i.html(o.data('multipleErrorMsg')), r.removeClass('single-error')))
			: r.hide();
	},
	createParsleyValidators: function (e) {
		void 0 === window.Parsley._validatorRegistry.validators.dateFormat &&
			(window.Parsley.addValidator('dateFormat', {
				validateString: function (e, t) {
					var a = void 0;
					try {
						a = $.datepicker.parseDate(t, e).getTime();
					} catch (e) {}
					return !(!a || !e.match(STCUK.regexes.calendarDateRegex));
				},
				messages: { en: e.data('invalidDateText') }
			}),
			window.Parsley.addValidator('startDate', {
				validateString: function (e, t, a) {
					var n = a.$element,
						r = void 0,
						i = void 0,
						o = $(n[0]).attr('data-parsley-date-format');
					(void 0 !== o && !1 !== o) || (o = 'dd/mm/yy');
					try {
						(r = $.datepicker.parseDate(o, e).getTime()), (i = $.datepicker.parseDate(o, t).getTime());
					} catch (e) {
						if (!r) return;
					}
					if (i) return r >= i;
				},
				messages: { en: e.data('laterDateText') }
			}),
			window.Parsley.addValidator('endDate', {
				validateString: function (e, t, a) {
					var n = a.$element,
						r = void 0,
						i = void 0,
						o = $(n[0]).attr('data-parsley-date-format');
					(void 0 !== o && !1 !== o) || (o = 'dd/mm/yy');
					try {
						(r = $.datepicker.parseDate(o, e).getTime()), (i = $.datepicker.parseDate(o, t).getTime());
					} catch (e) {
						if (!r) return;
					}
					if (i) return r <= i;
				},
				messages: { en: e.data('earlierDateText') }
			}),
			window.Parsley.addValidator('daterangeCheck', {
				validateString: function (e, t, a) {
					var n = a.$element,
						r = void 0,
						i = void 0,
						o = e,
						s = $(n[0]),
						d = s.parent().closest('.event-details-container').find('.start-date')[0].value,
						l = s.attr('data-parsley-date-format');
					(void 0 !== l && !1 !== l) || (l = 'dd/mm/yy');
					try {
						(r = $.datepicker.parseDate(l, d).getTime()), (i = $.datepicker.parseDate(l, o).getTime());
					} catch (e) {
						if (!r || !i) return !1;
					}
					if (i && r) return i >= r;
				},
				messages: { en: e.data('laterDateText') }
			}),
			window.Parsley.addValidator('selectPrevious', {
				validateString: function (e, t, a) {
					var n = a.$element,
						r = void 0,
						i = $(n[0]),
						o = i.attr('data-parsley-date-format'),
						s = i.attr('data-parsley-select-previous'),
						d = new Date().getTime();
					(void 0 !== o && !1 !== o) || (o = 'dd/mm/yy'), (s = void 0 !== s && !1 !== s && 'false' !== s);
					try {
						r = $.datepicker.parseDate(o, e).getTime() + 84924e3;
					} catch (e) {
						if (!r) return;
					}
					return !1 !== s || r >= d;
				},
				messages: { en: e.data('previousDateText') }
			}),
			window.Parsley.addValidator('selectPrevious', {
				validateString: function (e, t, a) {
					var n = a.$element,
						r = void 0,
						i = $(n[0]),
						o = i.attr('data-parsley-date-format'),
						s = i.attr('data-parsley-select-previous'),
						d = new Date().getTime();
					(void 0 !== o && !1 !== o) || (o = 'dd/mm/yy'), (s = void 0 !== s && !1 !== s && 'false' !== s);
					try {
						r = $.datepicker.parseDate(o, e).getTime() + 84924e3;
					} catch (e) {
						if (!r) return;
					}
					return !1 !== s || r >= d;
				},
				messages: { en: e.data('previousDateText') }
			}),
			window.Parsley.addValidator('name', {
				requirementType: 'string',
				validateString: function (e, t, a) {
					var n = a.$element,
						r = n.attr('data-parsley-pattern-message'),
						i = n.attr('data-parsley-allow-trailing-numbers'),
						o = n[0].name,
						s = STCUK.regexes,
						d = void 0;
					return (
						(d =
							o.indexOf('account_name') > -1
								? s.name
								: 'true' === i
								? s.nameWithAccentsPlusNumbers
								: s.nameWithAccents),
						new RegExp(d).test(e) ? $.Deferred().resolve() : $.Deferred().reject(r)
					);
				}
			}),
			window.Parsley.addValidator('cardExpiryYear', {
				requirementType: 'string',
				validateString: function (e) {
					var t = STCUK.utility.getCurrentMonthAndYear(),
						a = parseInt(e.split('/')[0]),
						n = parseInt(e.split('/')[1]);
					return n > t.year || (n === t.year && a >= t.month);
				}
			}),
			window.Parsley.addValidator('cardExpiryYearWithin50', {
				requirementType: 'string',
				validateString: function (e) {
					var t = STCUK.utility.getCurrentMonthAndYear();
					return parseInt(e.split('/')[1]) <= t.year + 50;
				}
			}),
			window.Parsley.addValidator('teamcode', {
				requirementType: 'string',
				validateString: function (e, t, a) {
					var n = a.$element,
						r = n.attr('data-parsley-pattern-message'),
						i = void 0;
					return (
						n[0].name.indexOf('team_textcode') > -1 && (i = STCUK.regexes.teamTextCode),
						(textTeamCodeRegex = new RegExp(i)),
						textTeamCodeRegex.test(e) ? $.Deferred().resolve() : $.Deferred().reject(r)
					);
				}
			}),
			window.Parsley.addValidator('addressline', {
				requirementType: 'string',
				validateString: function (e, t, a) {
					var n = a.$element.attr('data-parsley-pattern-message'),
						r = new RegExp(STCUK.regexes.emoji),
						i = new RegExp(/[,"]/g);
					return r.test(e) || i.test(e) ? $.Deferred().reject(n) : $.Deferred().resolve();
				}
			}));
	},
	getCurrentMonthAndYear: function () {
		var e = new Date(),
			t = {};
		t.month = e.getMonth() + 1;
		var a = e.getFullYear();
		return (t.year = parseInt(a.toString().split('').splice(2, 4).join(''))), t;
	},
	setFieldRegexes: function (e) {
		var t = $(e),
			a = $(t).find('[data-pattern-custom]');
		$(a).each(function (e) {
			var t = $(this).attr('data-pattern-custom');
			STCUK.regexes[t] && $(this).attr('data-parsley-pattern', STCUK.regexes[t]);
		});
	},
	toggleShow: function (e, t) {
		e.style.display = t;
	},
	toggleBtnDisable: function (e, t) {
		var a = null;
		(a = e[0] ? e[0] : e), t ? a.setAttribute('disabled', t) : a.removeAttribute('disabled');
	},
	toggleClass: function (e, t) {
		e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t);
	},
	validUrl: function (e) {
		return new RegExp(STCUK.regexes.url).test(e);
	},
	showCustomValidationError: function (e, t, a) {
		e.parsley().addError(t, { message: a, updateClass: !0 });
	},
	clearCustomValidationError: function (e, t) {
		e.parsley().removeError(t, { updateClass: !0 });
	},
	isCheckboxChecked: function (e) {
		return e.checked;
	},
	cookie: {
		getItem: function (e) {
			return (
				(e &&
					decodeURIComponent(
						document.cookie.replace(
							new RegExp(
								'(?:(?:^|.*;)\\s*' +
									encodeURIComponent(e).replace(/[\-\.\+\*]/g, '\\$&') +
									'\\s*\\=\\s*([^;]*).*$)|^.*$'
							),
							'$1'
						)
					)) ||
				null
			);
		},
		setItem: function (e, t, a, n, r, i) {
			if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
			var o = '';
			if (a)
				switch (a.constructor) {
					case Number:
						o = STCUK.utility.isLegacyEdge()
							? a === 1 / 0
								? '; expires=Fri, 31 Dec 9999 23:59:59 GMT'
								: '; expires=' + new Date(1e3 * a + Date.now()).toUTCString()
							: a === 1 / 0
							? '; expires=Fri, 31 Dec 9999 23:59:59 GMT'
							: '; max-age=' + a;
						break;
					case String:
						o = '; expires=' + a;
						break;
					case Date:
						o = '; expires=' + a.toUTCString();
				}
			return (
				(document.cookie =
					encodeURIComponent(e) +
					'=' +
					encodeURIComponent(t) +
					o +
					(r ? '; domain=' + r : '') +
					(n ? '; path=' + n : '') +
					(i ? '; secure' : '')),
				!0
			);
		},
		removeItem: function (e, t, a) {
			return (
				!!this.hasItem(e) &&
				((document.cookie =
					encodeURIComponent(e) +
					'=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
					(a ? '; domain=' + a : '') +
					(t ? '; path=' + t : '')),
				!0)
			);
		},
		hasItem: function (e) {
			return (
				!(!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) &&
				new RegExp('(?:^|;\\s*)' + encodeURIComponent(e).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=').test(
					document.cookie
				)
			);
		},
		keys: function () {
			for (
				var e = document.cookie
						.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')
						.split(/\s*(?:\=[^;]*)?;\s*/),
					t = e.length,
					a = 0;
				a < t;
				a++
			)
				e[a] = decodeURIComponent(e[a]);
			return e;
		}
	},
	hrefHexToRgb: function (e) {
		var t = /\/#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})\//i.exec(e);
		return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
	},
	sanitizeAddressLine: function (e) {
		return e ? e.replace(/,/g, '') : '';
	},
	fadeIn: function (e, t, a) {
		(e.style.opacity = 0), e.classList.contains('hidden') && e.classList.remove('hidden');
		var n = +new Date();
		!(function r() {
			(e.style.opacity = +e.style.opacity + (new Date() - n) / t),
				(n = +new Date()),
				+e.style.opacity < 1
					? (window.requestAnimationFrame && requestAnimationFrame(r)) || setTimeout(r, 16)
					: a && a.call();
		})();
	},
	fadeOut: function (e, t, a) {
		e.style.opacity = 1;
		var n = new Date();
		!(function r() {
			(e.style.opacity = e.style.opacity - (new Date() - n) / t),
				(n = new Date()),
				e.style.opacity > 0
					? (window.requestAnimationFrame && requestAnimationFrame(r)) || setTimeout(r, 16)
					: a && a.call();
		})();
	},
	flicker: function (e, t) {
		var a = STCUK.utility;
		a.fadeOut(e, t, function () {
			a.fadeIn(e, t, function () {
				a.fadeOut(e, t, function () {
					a.fadeIn(e, t);
				});
			});
		});
	},
	removeHeader: function () {
		document.querySelector('main').classList.add('no-header');
	},
	nonScrollingPage: function () {
		document.documentElement.classList.add('non-scrolling');
	},
	detectInAppBrowser: function () {
		var e = navigator.userAgent,
			t = { inApp: !1, appName: '' };
		return (
			(e.includes('FBAN') || e.includes('FBAV')) && ((t.inApp = !0), (t.appName = 'facebook')),
			e.includes('Instagram') && ((t.inApp = !0), (t.appName = 'instagram')),
			e.includes('gsa') && ((t.inApp = !0), (t.appName = 'google')),
			e.includes('Snapchat') && ((t.inApp = !0), (t.appName = 'Snapchat')),
			t
		);
	},
	getOrientation: function () {
		return window.outerWidth > window.outerHeight ? 'landscape' : 'portrait';
	},
	loadElsImmediately: function () {
		[].slice.call(document.querySelectorAll('.lazyload')).forEach(function (e) {
			var t = e.parentElement;
			'PICTURE' === t.nodeName
				? ([].slice.call(t.querySelectorAll('source')).forEach(function (e) {
						e.setAttribute('srcset', e.getAttribute('data-srcset'));
				  }),
				  e.setAttribute('srcset', e.getAttribute('data-srcset')))
				: e.setAttribute('src', e.getAttribute('data-src'));
			e.addEventListener('load', function (t) {
				e.classList.remove('lazyload'), e.classList.add('lazy-loaded');
			});
		}),
			!window.HTMLPictureElement && window.picturefill && window.picturefill({ reevaluate: !0 });
	},
	isValid: function (e, t) {
		return RegExp(t).test(e);
	},
	append: function (e, t) {
		e && e.insertAdjacentHTML('beforeend', t || '');
	},
	appendParagraph: function (e, t) {
		if (e) {
			var a = document.createElement('p');
			(a.innerHTML = t || ''), e.appendChild(a);
		}
	},
	setBrowserElementAttribute: function (e, t, a, n) {
		var r = cssua.userAgent,
			i = e.toLowerCase();
		if (t && void 0 !== r) for (var o in r) null !== o.match(i) && t.setAttribute(a, n);
	},
	processDate: function (e) {
		var t = e.split('/'),
			a = _slicedToArray(t, 3),
			n = a[0],
			r = a[1],
			i = a[2],
			o = STCUK.utility,
			s = new Date(i, r - 1, n),
			d = s.getDay(),
			l = s.getMonth(),
			c = '' + n + o.getDayOfMonthSuffix(n);
		return (
			(c = c.replace(/^0+/, '')),
			{
				day: n,
				month: r,
				year: i,
				readableDate: o.getDayOfWeek(d) + ' ' + c + ' ' + o.getMonthOfYear(l) + ' ' + i
			}
		);
	},
	getDayOfWeek: function (e) {
		return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][e];
	},
	getMonthOfYear: function (e) {
		return [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		][e];
	},
	getDayOfMonthSuffix: function (e) {
		var t = parseInt(e),
			a = 'th';
		return (
			(1 !== t && 21 !== t && 31 !== t) || (a = 'st'),
			(2 !== t && 22 !== t) || (a = 'nd'),
			(3 !== t && 23 !== t) || (a = 'rd'),
			a
		);
	},
	loadScript: function (e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
			a = document.createElement('script');
		(a.type = 'text/javascript'), (a.src = e), (a.async = !0), document.body.appendChild(a), t && (a.onload = t);
	},
	loadStyleSheet: function (e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
			a = document.createElement('link');
		(a.rel = 'stylesheet'), (a.type = 'text/css'), (a.href = e), document.head.appendChild(a), t && (a.onload = t);
	},
	calculateGiftAid: function (e) {
		return (0.25 * e).toFixed(2);
	},
	hideElement: function (e) {
		e.classList.add('hidden');
	},
	setSessionData: function (e, t) {
		window.sessionStorage && Modernizr.sessionstorage
			? sessionStorage.setItem(e, t)
			: STCUK.utility.cookie.setItem(e, t);
	},
	getSessionData: function (e) {
		return window.sessionStorage && Modernizr.sessionstorage
			? sessionStorage.getItem(e)
			: STCUK.utility.cookie.getItem(e);
	},
	removeSessionData: function (e) {
		window.sessionStorage && Modernizr.sessionstorage
			? sessionStorage.removeItem(e)
			: STCUK.utility.cookie.removeItem(e);
	},
	counter: function (e, t, a, n) {
		var r = a - t,
			i = new Date().getTime() + n,
			o = Math.max(Math.abs(Math.floor(n / r)), 50),
			s = setInterval(function () {
				var t = new Date().getTime(),
					o = Math.max((i - t) / n, 0),
					d = Math.round(a - o * r);
				(e.textContent = d), d === a && clearInterval(s);
			}, o);
	},
	isLegacyEdge: function () {
		if (void 0 !== cssua.userAgent.edge) return parseInt(cssua.userAgent.edge, 10) <= 18;
	},
	showLegacyBanner: function () {
		var e = document.querySelector('.legacy-browser-msg'),
			t = e.querySelector('.legacy-browser-msg-close-btn');
		document.body.classList.add('body-padding'), e.classList.add('showing');
		var a = e.offsetHeight;
		e.classList.add('open'),
			(document.body.style.paddingTop = a + 'px'),
			t.addEventListener('click', function (t) {
				STCUK.utility.hideLegacyBanner(t.target, e);
			});
	},
	hideLegacyBanner: function (e, t) {
		document.body.style.removeProperty('padding-top'), t.classList.remove('open');
	},
	processFormPostData: function (e) {
		return JSON.stringify(e, function (e, t) {
			return t || 'transaction_reference' !== e ? t : void 0;
		});
	},
	pollForLibLoaded: function (e, t, a, n) {
		var r = Number(new Date()) + (t || 5e3);
		a = a || 100;
		return new Promise(function t(i, o) {
			var s = e();
			s ? i(s) : Number(new Date()) < r ? setTimeout(t, a, i, o) : o(new Error(n));
		});
	}
};
(STCUK.storageDetection = {
	bindEvents: function () {
		(thisComponent = STCUK.storageDetection),
			thisComponent.$closeModal.addEventListener('click', thisComponent.hideModal.bind(thisComponent));
	},
	setDomElements: function (e) {
		var t = STCUK.storageDetection;
		(t.$msgModal = document.querySelector('.modal-msg')),
			(t.$closeModal = document.querySelector('.modal-msg .close'));
	},
	storageAvailable: function (e) {
		var t = void 0;
		try {
			t = window[e];
			var o = '__storage_test__';
			return t.setItem(o, o), t.removeItem(o), !0;
		} catch (e) {
			return (
				e instanceof DOMException &&
				(22 === e.code ||
					1014 === e.code ||
					'QuotaExceededError' === e.name ||
					'NS_ERROR_DOM_QUOTA_REACHED' === e.name) &&
				t &&
				0 !== t.length
			);
		}
	},
	showModal: function () {
		STCUK.storageDetection.$msgModal.classList.remove('hide');
	},
	hideModal: function () {
		STCUK.storageDetection.$msgModal.classList.add('hide');
	},
	checkStorage: function () {
		var e = STCUK.storageDetection;
		document.querySelector('#page-content');
		e.storageAvailable('localStorage') || e.showModal();
	},
	init: function () {
		var e = STCUK.storageDetection;
		e.setDomElements(), null !== e.$msgModal && (e.bindEvents(), e.checkStorage(e.$msgModal));
	}
}),
	STCUK.storageDetection.init();
(STCUK.polyFillsLoaded = !1),
	(STCUK.polyfillTester = {
		test: function () {
			var o = !1;
			return (
				window.fetch || (o = !0),
				String.prototype.includes || (o = !0),
				String.prototype.startsWith || (o = !0),
				String.prototype.endsWith || (o = !0),
				Element.prototype.closest || (o = !0),
				window.NodeList && !NodeList.prototype.forEach && (o = !0),
				window.location.origin || (o = !0),
				window.Promise || (o = !0),
				void 0 === document.documentElement.style.scrollBehavior && (o = !0),
				Array.prototype.includes || (o = !0),
				window.HTMLPictureElement || (o = !0),
				'function' != typeof window.CustomEvent && (o = !0),
				Array.from || (o = !0),
				o
			);
		},
		initialiseComponents: function () {
			(STCUK.polyFillsLoaded = !0),
				STCUK.componentLoader.initialiseQueuedComponents(STCUK.componentLoader.componentsWaitingForPolyfills);
		},
		loadPolyFills: function () {
			var o = '?ts=' + Date.now();
			STCUK.utility.loadScript(
				'/etc/clientlibs/ui/main/dist/js/polyfills/polyfills.min.js' + o,
				STCUK.polyfillTester.initialiseComponents
			);
		},
		init: function () {
			var o = localStorage.getItem('browserNeedsPolyfills');
			null === o
				? ((STCUK.needsPolyfill = this.test()),
				  STCUK.needsPolyfill && this.loadPolyFills(),
				  localStorage.setItem('browserNeedsPolyfills', STCUK.needsPolyfill))
				: ((STCUK.needsPolyfill = 'true' === o), STCUK.needsPolyfill && this.loadPolyFills());
		}
	}),
	STCUK.polyfillTester.init();
STCUK.formMetadata = {
	setMetadata: function (t) {
		var a = STCUK.formMetadata;
		(a.form = t),
			a.setFormAttributes(t),
			(a.userNo = t.getAttribute('data-user-no')),
			(a.redirectUrl = t.getAttribute('data-redirect-url')),
			(a.actionUrl = t.getAttribute('data-action-url')),
			(a.cdataSchema = $.parseJSON(
				$('[data-form-schema="' + a.formId + '"]')
					.html()
					.replace('//<![CDATA[', '')
					.replace('//]]>', '')
			));
	},
	setFormAttributes: function (t) {
		var a = STCUK.formMetadata;
		(a.formId = t.getAttribute('data-form-id')),
			(a.formName = t.getAttribute('data-form-name')),
			(a.formType = t.getAttribute('data-form-type')),
			(a.legacyFormType = t.getAttribute('data-form-subtype')),
			(a.fundId = t.getAttribute('data-fund-id')),
			(a.fundName = t.getAttribute('data-fund-name')),
			(a.fundCode = t.getAttribute('data-fund-code')),
			(a.campaignId = t.getAttribute('data-campaign-id')),
			(a.campaignName = t.getAttribute('data-campaign-name')),
			(a.campaignCode = t.getAttribute('data-campaign-code'));
	},
	getFormPost: function () {
		var t = STCUK.formMetadata,
			a = STCUK.analytics.cidTracking();
		return {
			schema: t.cdataSchema.schema,
			formdata: {
				form_attributes: {
					form_name: t.formName,
					form_id: t.formId,
					fund_name: t.fundName,
					campaign_name: t.campaignName,
					fund_id: t.fundId,
					campaign_id: t.campaignId,
					form_type_name: t.formType,
					form_sub_type_name: t.legacyFormType,
					fund_code: t.fundCode,
					campaign_code: t.campaignCode,
					channel: a.channel,
					marketing_source: a.marketingSource,
					marketing_campaign: a.marketingCampaign,
					userNo: t.userNo,
					pageUrl: window.location.href,
					redirectUrl: t.redirectUrl,
					hash: t.cdataSchema.hash
				}
			}
		};
	},
	setDomElements: function (t) {
		var a = STCUK.formMetadata;
		(a.radioButtonGrp = t.querySelectorAll('.radio-button-group .radio-button')),
			(a.textField = t.querySelectorAll('.textfield input')),
			(a.checkbox = t.querySelectorAll('.control-checkbox input')),
			(a.dropdown = t.querySelectorAll('.dropdown select'));
	},
	init: function (t) {
		this.setMetadata(t), this.setDomElements(t);
	}
};
STCUK.analyticsV2 = {
	analyticsEvents: function () {
		var a = STCUK.analyticsV2,
			t = STCUK.formMetadata;
		a.addInputListener(t.radioButtonGrp, 'click'),
			a.addInputListener(t.textField, 'focus'),
			a.addInputListener(t.checkbox, 'click'),
			a.addInputListener(t.dropdown, 'change');
	},
	addInputListener: function (a, t) {
		_.each(a, function (a) {
			a.addEventListener(t, STCUK.analyticsV2.handleInputAnalytics);
		});
	},
	cidTracking: function () {
		var a = STCUK.utility,
			t = '';
		return (
			a.cookie.getItem('cid-value') && (t = a.cookie.getItem('cid-value').split('-')),
			{ channel: t[0] || '', marketingSource: t[1] || '', marketingCampaign: t[2] || '' }
		);
	},
	handleInputAnalytics: function (a) {
		var t = STCUK.utility,
			e = a.currentTarget || a.srcElement,
			n = $(e),
			o = n.parents('form'),
			i = n.parent();
		try {
			if (o && o.length > 0) {
				var r = void 0;
				(r = i.hasClass('dropdown')
					? n.find('option:selected').attr('value')
					: n.hasClass('radio-button')
					? n.find('label').text()
					: i.hasClass('control-checkbox')
					? i.text()
					: n.hasClass('textfield-input')
					? n.parents().hasClass('donationAmount')
						? 'donation-amount'
						: i.find('.textfield-label-value').text()
					: i.find('.tooltip').text()),
					'undefined' != typeof digitalData &&
						null !== digitalData &&
						_satellite.track &&
						((digitalData.page.component.form.formID = t.stringSafe(STCUK.formMetadata.formName)),
						(digitalData.page.component.form.formName = t.stringSafe(STCUK.formMetadata.formName)),
						(digitalData.page.component.form.formSubType = t.stringSafe(STCUK.formMetadata.legacyFormType)),
						(digitalData.page.component.form.fieldName = t.stringSafe(r)),
						_satellite.track('form-field-tracking'));
			}
		} catch (a) {
			console.log('Analytics V2 not available...');
		}
	},
	handleAccordionLoadAnalytics: function (a) {
		var t = STCUK.utility,
			e = STCUK.formMetadata,
			n = [];
		if (
			'undefined' != typeof digitalData &&
			null !== digitalData &&
			'undefined' != typeof _satellite &&
			_satellite.track
		) {
			var o = digitalData.page.pageInfo.pageName;
			(digitalData.page.component.form.formName = t.stringSafe(e.formName)),
				(digitalData.page.component.form.formSubType = t.stringSafe(e.legacyFormType)),
				(digitalData.page.component.form.formId = t.stringSafe(e.formName)),
				(digitalData.event.donation.product.campaignName = t.stringSafe(e.campaignName)),
				(digitalData.event.donation.product.fundName = t.stringSafe(e.fundName)),
				(digitalData.page.component.form.accordionName = t.stringSafe(a)),
				(digitalData.event.donation.product.productName = t.stringSafe(e.campaignName)),
				null != o &&
					0 !== o.length &&
					((n = (o = o.toLowerCase().replace(/ /g, '-')).split(':')),
					(digitalData.page.pageInfo.pageName = n[0] + ':' + n[1] + ':' + e.formName + ':' + a)),
				_satellite.track('accordion-load');
		}
	},
	handleSubmitAnalytics: function (a) {
		var t = STCUK.utility,
			e = STCUK.formMetadata;
		'undefined' != typeof digitalData &&
			null !== digitalData &&
			'undefined' != typeof trackEvent &&
			null !== trackEvent &&
			((digitalData.page.component.form.formName = t.stringSafe(e.formName)),
			(digitalData.page.component.form.formSubType = t.stringSafe(e.legacyFormType)),
			(digitalData.page.component.form.formID = t.stringSafe(e.formName)),
			trackEvent(a.toLowerCase(), 'form-submit'));
	},
	handleSubmitErrorAnalytics: function (a) {
		var t = $.parseJSON(a.responseText).errorMessage;
		digitalData &&
			t &&
			_satellite &&
			_satellite.track &&
			0 !== t.length &&
			((digitalData.error.errorCode = a.status.toString()),
			(digitalData.error.errorType = 'server'),
			(digitalData.error.errorDescription = t.toLowerCase().replace(/ /g, '-')),
			_satellite.track('form-server-error'));
	},
	handleNextAccordionAnalytics: function (a, t) {
		var e = STCUK.utility,
			n = STCUK.formMetadata;
		'undefined' != typeof digitalData &&
			null !== digitalData &&
			((digitalData.page.component.form.formName = e.stringSafe(n.formName)),
			(digitalData.page.component.form.formSubType = e.stringSafe(n.legacyFormType)),
			(digitalData.event.eventInfo.userJourneyName = e.stringSafe(n.formName)),
			(digitalData.page.component.form.formId = e.stringSafe(n.formName)),
			(digitalData.event.donation.product.campaignName = e.stringSafe(n.campaignName)),
			(digitalData.event.donation.product.fundName = e.stringSafe(n.fundName)),
			(digitalData.page.component.form.accordionNameContinue = e.stringSafe(a)),
			(digitalData.event.donation.product.productName = e.stringSafe(n.campaignName))),
			STCUK.analyticsV2.handleAccordionLoadAnalytics(t);
	},
	journeyNameTracking: function () {
		var a = STCUK.utility,
			t = STCUK.formMetadata;
		(digitalData.event.eventInfo.userJourneyName = a.stringSafe(t.formName)),
			(digitalData.page.component.form.formName = a.stringSafe(t.formName)),
			(digitalData.page.component.form.formSubType = a.stringSafe(t.legacyFormType)),
			(digitalData.event.donation.product.campaignName = a.stringSafe(t.campaignName)),
			(digitalData.event.donation.product.productName = a.stringSafe(t.campaignName)),
			(digitalData.event.donation.product.fundName = a.stringSafe(t.fundName)),
			_satellite.track && _satellite.track('form-page-load');
	},
	handleDonateSubmitAnalytics: function (a) {
		var t = '';
		a.ifCustomAmt
			? ((t = (
					'other-' +
					a.donationAmount +
					'-' +
					a.currencyText +
					'-' +
					a.donationType +
					'-donate'
			  ).toLowerCase()),
			  (digitalData.event.donation.donationAmountEntered = a.donationAmount))
			: (t = (a.donationAmount + '-' + a.currencyText + '-' + a.donationType + '-donate').toLowerCase()),
			'single' === a.donationType
				? (digitalData.event.donation.singleDonationAmount = a.donationAmount)
				: (digitalData.event.donation.monthlyDonationAmount = a.donationAmount),
			(digitalData.event.donation.currencyCode = a.currencyText),
			'undefined' != typeof trackEvent && trackEvent(t, 'donate-hub');
	}
};
STCUK.donatePodAnalytics = {
	setAnalytics: function (t) {
		for (var a = t.$donatePanelContainer.querySelectorAll('[data-pod-track-tab]'), e = 0; e < a.length; e++)
			a[e].addEventListener('click', this.setDigitalDataTabs);
		t.$donatePanelContainer.addEventListener('click', this.setDigitalData);
	},
	setDigitalDataTabs: function (t) {
		var a;
		(a = t.target.dataset.podTrackTab), void 0 !== digitalData && (digitalData.page.component.form.fieldName = a);
	},
	setDigitalData: function (t) {
		t.stopPropagation(), t.stopImmediatePropagation();
		var a = t.target,
			e = void 0;
		a !== t.currentTarget &&
			a.dataset.podTrackElement &&
			(a.dataset.podTrackElement &&
				((e = a.dataset.podTrackElement).indexOf('amount-btn') > -1 && (e += a.dataset.btnIndex),
				e.indexOf('donate-button') > -1 &&
					(e =
						STCUK.donatePod.getPanelState().activePanel.dataset.donationType +
						'-payment  ' +
						a.dataset.podTrackElement)),
			void 0 !== digitalData && (digitalData.page.component.form.fieldName = e));
	}
};
STCUK.quizAnalytics = {
	handlePetitionSubmit: function (t) {
		_satellite && _satellite.track(t + '-submitted');
	}
};
STCUK.analytics = {
	analyticsEvents: function (a) {
		var t = STCUK.analytics;
		a.radioButtonGrp.on('click', function (e) {
			t.formAnalytics(e, a.formName, a);
		}),
			a.textField.on('focus', function (e) {
				t.formAnalytics(e, a.formName, a);
			}),
			a.checkBox.on('click', function (e) {
				t.formAnalytics(e, a.formName, a);
			}),
			a.dropDown.on('change', function (e) {
				t.formAnalytics(e, a.formName, a);
			});
	},
	cidTracking: function () {
		var a = '',
			t = {},
			e = STCUK.utility;
		return (
			e.cookie.getItem('cid-value') && (a = e.cookie.getItem('cid-value').split('-')),
			(t.channel = a[0] || ''),
			(t.marketingSource = a[1] || ''),
			(t.marketingCampaign = a[2] || ''),
			t
		);
	},
	formAnalytics: function (a, t, e) {
		var n = STCUK.utility,
			i = this.getStoredAnalyticsData(t, e),
			o = a.currentTarget || a.srcElement,
			r = $(o).parents('form'),
			m = $(o),
			l = m.parent();
		try {
			var g;
			if (r && r.length > 0)
				(g = l.hasClass('dropdown')
					? m.find('option:selected').attr('value')
					: m.hasClass('radio-button')
					? m.find('label').text()
					: l.hasClass('control-checkbox')
					? l.text()
					: m.hasClass('textfield-input')
					? m.parents().hasClass('donationAmount')
						? 'donation-amount'
						: l.find('.textfield-label-value').text()
					: l.find('.tooltip').text()),
					'undefined' != typeof digitalData &&
						null !== digitalData &&
						_satellite.track &&
						((digitalData.page.component.form.formID = n.stringSafe(i.formName || t)),
						(digitalData.page.component.form.formName = n.stringSafe(i.formName || t)),
						(digitalData.page.component.form.formSubType = n.stringSafe(e.legacyFormType)),
						(digitalData.page.component.form.fieldName = n.stringSafe(g)),
						_satellite.track('form-field-tracking'));
		} catch (a) {
			console.log('Analytics not available..');
		}
	},
	getStoredAnalyticsData: function (a) {
		var t = '',
			e = STCUK.utility;
		return (
			'paypal-form-two' === a.formScriptType &&
				(t =
					window.sessionStorage && Modernizr.sessionstorage
						? {
								formName: sessionStorage.getItem('formName') || '',
								campaignName: sessionStorage.getItem('campaignName') || '',
								fundName: sessionStorage.getItem('fundName') || ''
						  }
						: {
								formName: e.cookie.getItem('formName') || '',
								campaignName: e.cookie.getItem('campaignName') || '',
								fundName: e.cookie.getItem('fundName') || ''
						  }),
			t
		);
	},
	handleAccLoadAnalytics: function (a, t, e) {
		var n = STCUK.utility,
			i = this.getStoredAnalyticsData(e),
			o = a.attr('data-form-name'),
			r = t.parents('.panel').find('.panel-title').text(),
			m = [];
		if (
			'undefined' != typeof digitalData &&
			null !== digitalData &&
			null != r &&
			'undefined' != typeof _satellite &&
			_satellite.track
		) {
			var l = digitalData.page.pageInfo.pageName;
			(digitalData.page.component.form.formName = n.stringSafe(i.formName || o)),
				(digitalData.page.component.form.formSubType = n.stringSafe(e.legacyFormType)),
				(digitalData.page.component.form.formId = n.stringSafe(i.formName || o)),
				(digitalData.event.donation.product.campaignName = n.stringSafe(i.campaignName || e.campaignName)),
				(digitalData.event.donation.product.fundName = n.stringSafe(i.fundName || e.fundName)),
				(digitalData.page.component.form.accordionName = n.stringSafe(r)),
				(digitalData.event.donation.product.productName = n.stringSafe(i.campaignName || e.campaignName)),
				null != l &&
					0 !== l.length &&
					((m = (l = l.toLowerCase().replace(/ /g, '-')).split(':')),
					(digitalData.page.pageInfo.pageName = m[0] + ':' + m[1] + ':' + o + ':' + r)),
				'newsletter' === e.legacyFormType.toLowerCase()
					? _satellite.track('newsletter-signup-start')
					: _satellite.track('accordion-load');
		}
	},
	handleSubmitAnalytics: function (a, t, e, n) {
		var i = STCUK.utility,
			o = this.getStoredAnalyticsData(n),
			r = $(a.currentTarget),
			m = r.find('input[type=submit]').attr('value'),
			l = r.attr('data-form-name');
		e
			? 'undefined' != typeof _satellite &&
			  null !== _satellite &&
			  'undefined' != typeof digitalData &&
			  null !== digitalData &&
			  'undefined' != typeof trackEvent &&
			  null !== trackEvent &&
			  ((digitalData.page.component.form.formName = i.stringSafe(l)),
			  (digitalData.page.component.form.formSubType = i.stringSafe(n.legacyFormType)),
			  (digitalData.page.component.form.formID = i.stringSafe(l)),
			  void 0 !== n.legacyFormType && '' !== n.legacyFormType && 'campaign' === n.legacyFormType.toLowerCase()
					? _satellite.track('data-campaign-form-completion')
					: 'legacy' === n.legacyFormType.toLowerCase()
					? _satellite.track('data-legacy-form-completion')
					: _satellite.track('newsletter-signup-complete'))
			: 'undefined' != typeof digitalData &&
			  null !== digitalData &&
			  null != m &&
			  'undefined' != typeof trackEvent &&
			  null !== trackEvent &&
			  ((digitalData.page.component.form.formName = i.stringSafe(o.formName || l)),
			  (digitalData.page.component.form.formSubType = i.stringSafe(n.legacyFormType)),
			  (digitalData.page.component.form.formID = i.stringSafe(o.formName || l)),
			  'diyevents' === n.legacyFormType.toLowerCase() && _satellite.track('diyevents-signup-complete'),
			  (m = m.toLowerCase()),
			  trackEvent(m, 'form-submit'));
	},
	handleNextAccAnalytics: function (a, t, e) {
		var n = STCUK.utility,
			i = STCUK.analytics,
			o = this.getStoredAnalyticsData(e),
			r = a.attr('data-form-name'),
			m = t.parents('.panel').find('.panel-title').text(),
			l = t.parents('.panel').prevAll('.panel').not('.hide').first().find('.panel-title').text();
		'undefined' != typeof digitalData &&
			null !== digitalData &&
			null != m &&
			((digitalData.page.component.form.formName = ''),
			(digitalData.page.component.form.formId = ''),
			(digitalData.event.donation.product.campaignName = ''),
			(digitalData.event.donation.product.fundName = ''),
			(digitalData.page.component.form.accordionNameContinue = ''),
			(digitalData.event.eventInfo.userJourneyName = ''),
			(digitalData.event.donation.product.productName = ''),
			(digitalData.page.component.form.formSubType = ''),
			(digitalData.page.component.form.formName = n.stringSafe(o.formName || r)),
			(digitalData.page.component.form.formSubType = n.stringSafe(e.legacyFormType)),
			(digitalData.event.eventInfo.userJourneyName = n.stringSafe(o.formName || r)),
			(digitalData.page.component.form.formId = n.stringSafe(o.formName || r)),
			(digitalData.event.donation.product.campaignName = n.stringSafe(o.campaignName || e.campaignName)),
			(digitalData.event.donation.product.fundName = n.stringSafe(o.fundName || e.fundName)),
			(digitalData.page.component.form.accordionNameContinue = n.stringSafe(l)),
			(digitalData.event.donation.product.productName = n.stringSafe(o.campaignName || e.campaignName))),
			i.handleAccLoadAnalytics(a, t, e);
	},
	journeyNameTracking: function (a) {
		var t = STCUK.utility,
			e = STCUK.formContainer,
			n = this.getStoredAnalyticsData(a),
			i = n.formName || a.attr('data-form-name'),
			o = n.campaignName || a.attr('data-camapign-name'),
			r = n.fundName || a.attr('data-fund-name');
		(digitalData.event.eventInfo.userJourneyName = t.stringSafe(i)),
			(digitalData.page.component.form.formName = t.stringSafe(i)),
			(digitalData.page.component.form.formSubType = t.stringSafe(e.legacyFormType)),
			(digitalData.event.donation.product.campaignName = t.stringSafe(o)),
			(digitalData.event.donation.product.productName = t.stringSafe(o)),
			(digitalData.event.donation.product.fundName = t.stringSafe(r)),
			_satellite.track && _satellite.track('form-page-load');
	},
	trackCookieConsentChange: function () {
		_satellite &&
			_satellite.track &&
			(_satellite.track('onetrust-optin-cookie'), console.log('firing cookie consent change direct call')),
			window.dataLayer && dataLayer.push({ event: 'onetrust-optin-cookie-gtm' });
	}
};
STCUK.regexes = {
	accents:
		'¡¿ÄäÀàÁáÂâÃãÅåǍǎĄąĂăÆæĀāÇçĆćĈĉČčĎđĐďðÈèÉéÊêËëĚěĘęĖėĒēĜĝĢģĞğĤĥÌìÍíÎîÏïıĪīĮįĴĵĶķĹĺĻļŁłĽľÑñŃńŇňŅņÖöÒòÓóÔôÕõŐőØøŒœŔŕŘřẞßŚśŜŝŞşŠšȘșŤťŢţÞþȚțÜüÙùÚúÛûŰűŨũŲųŮůŪūŴŵÝýŸÿŶŷŹźŽžŻż',
	accountNum: '^[0-9]{8,8}$',
	alphabet: '/^([a-zA-Z]|[^\\u0000-\\u007F]| )+$/',
	amount: '([0-9]{0,}(\\.[0-9]{1,2})?)',
	amountGeneric: '^[0-9]+(\\.[0-9]{1,2})?$',
	browsers: /chrome|firefox|ie|safari|opera|edge|blackberry|fbav|fbsv|crios|instagram|gsa/,
	cjdTeamName: '^(?![0-9]*$)[a-zA-Z0-9\\s]+$',
	devices: /desktop|mobile|android|ipad|ipod|windows phone|windows ce|blackberry|bb10|rim tablet os|meego|webos|palm|symbian|j2me|docomo|pda|chtml|midp|cldc|phone/,
	email:
		'^[a-zA-Z0-9]([a-zA-Z0-9\\_\\-]|\\.[a-zA-Z0-9]){0,29}@[a-zA-Z0-9\\_\\-]{1,30}\\.[a-zA-Z0-9]([a-zA-Z0-9\\_\\-]|\\.[a-zA-Z0-9])+$',
	emailSecondary:
		'/^[a-zA-Z0-9]([a-zA-Z0-9\\_\\-]|\\.[a-zA-Z0-9]){0,29}@[a-zA-Z0-9\\_\\-]{1,30}\\.[a-zA-Z0-9]([a-zA-Z0-9]|\\.[a-zA-Z0-9])+$/',
	emoji:
		'(?:[✀-➿]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[︎️]?(?:[̀-ͯ︠-︣⃐-⃰]|\ud83c[\udffb-\udfff])?(?:‍(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[︎️]?(?:[̀-ͯ︠-︣⃐-⃰]|\ud83c[\udffb-\udfff])?)*',
	errorStrMatch: '//.*?/(.*?):(.*?)(\\(|$)/',
	expiryDate: '(1[0-2]|0[1-9])\\/[0-9]{2}',
	nonZeroInteger: '^([1-9][0-9]*)$',
	mobile: '^(0\\s?7\\s?)(\\d\\s?){8}\\d$',
	mobileInternational: '^([0|+[0-9]{1,5})?([7-9][0-9]{9})$',
	name: "^\\s?(([a-zA-Z])((['’]?\\s?)|(-))?)+$",
	nameWithAccents:
		"^\\s?(([a-zA-Z¡¿ÄäÀàÁáÂâÃãÅåǍǎĄąĂăÆæĀāÇçĆćĈĉČčĎđĐďðÈèÉéÊêËëĚěĘęĖėĒēĜĝĢģĞğĤĥÌìÍíÎîÏïıĪīĮįĴĵĶķĹĺĻļŁłĽľÑñŃńŇňŅņÖöÒòÓóÔôÕõŐőØøŒœŔŕŘřẞßŚśŜŝŞşŠšȘșŤťŢţÞþȚțÜüÙùÚúÛûŰűŨũŲųŮůŪūŴŵÝýŸÿŶŷŹźŽžŻż])(([.'’]?\\s?)|(-))?)+$",
	nameWithAccentsPlusNumbers:
		"^\\s?(([a-zA-Z¡¿ÄäÀàÁáÂâÃãÅåǍǎĄąĂăÆæĀāÇçĆćĈĉČčĎđĐďðÈèÉéÊêËëĚěĘęĖėĒēĜĝĢģĞğĤĥÌìÍíÎîÏïıĪīĮįĴĵĶķĹĺĻļŁłĽľÑñŃńŇňŅņÖöÒòÓóÔôÕõŐőØøŒœŔŕŘřẞßŚśŜŝŞşŠšȘșŤťŢţÞþȚțÜüÙùÚúÛûŰűŨũŲųŮůŪūŴŵÝýŸÿŶŷŹźŽžŻż])(([.'’]?\\s?)|(-))?)+[0-9]{0,2}$",
	os: /windows|ios|mac|android|linux|unix|blackberry/,
	phone: '^[+]?(\\d\\s?){6,13}\\d$',
	phoneSecondary:
		'/^(?:(?:\\(?(?:0(?:0|11)\\)?[\\s-]?(?|\\+)44)?[\\s-]?(?:(?0\\)?[\\s-]?)?)|(?:\\(?0))(?:(?:\\d{5}\\)?[\\s-]?\\d{4,5})|(?:\\d{4}\\)?[\\s-]?(?:\\d{5}|\\d{3}[\\s-]?\\d{3}))|(?:\\d{3}\\)?[\\s-]?\\d{3}[\\s-]?\\d{3,4})|(?:\\d{2}\\)?[\\s-]?\\d{4}[\\s-]?\\d{4}))(?:[\\s-]?(?:x|ext.?|\\#)d{3,4})?$/',
	postcode: '/^(s*|[A-Za-z0-9- ]+)$/',
	scriptTag: '</?script>',
	secCode: '^[0-9]+$',
	sortCode: '[0-9]{2}-[0-9]{2}-[0-9]{2}',
	teamTextCode: '^[a-zA-Z0-9]{3,8}$',
	url: '(https?://(?:www.|(?!www))[^s.]+.[^s]{2,}|www.[^s]+.[^s]{2,})',
	calendarDateRegex: '^(0[1-9]|[12]\\d|3[01])/(0[1-9]|1[012])/((19|20)\\d\\d)$'
};
STCUK.payments = {
	payPal: {
		setDomElements: function (e) {
			(this.$donationMethodInstance = e),
				(this.$parentForm = this.$donationMethodInstance.$parentForm),
				(this.$payPalBtn = this.$donationMethodInstance.$el.find('.radio-pay-pal')),
				(this.$payPalReturnUrl = this.$payPalBtn.attr('data-paypal-return-url')),
				(this.$payPalLogoImageUrl = this.$payPalBtn.attr('data-paypal-logo-image-url')),
				this.$payPalReturnUrl &&
					(this.$payPalReturnUrl = this.$payPalReturnUrl.replace('^/content/stc/gb/en', ''));
		},
		addCustomHeaders: function (e) {
			(e['X-PayPalReturnUrl'] = window.location.origin + this.$payPalReturnUrl),
				(e['X-PayPalLogoImageUrl'] = this.$payPalLogoImageUrl);
		}
	},
	applePay: {
		canUserMakePayments: !1,
		setDomElements: function (e) {
			(this.donationMethodInstance = e),
				(this.$parentForm = this.donationMethodInstance.$parentForm),
				(this.$personalDetails = this.$parentForm.find('[data-role="personalDetails"]')),
				(this.$addressTitle = this.$personalDetails.find('.personal-details-container > label:first')),
				(this.$firstNameLabel = this.$personalDetails.find('.personal-details-first-name').parent('label')),
				(this.$above18Component = this.$parentForm.find('.above-eighteen')),
				(this.$checkboxAgeConfirm = this.$above18Component.find('.above18checkbox')),
				(this.$checkboxAgeConfirmLabel = this.$above18Component.find('.control-checkbox')),
				this._setDomElements(this.$parentForm),
				(this.$applePayWrapper = this.donationMethodInstance.$applePayWrapper),
				(this.$applePayIcon = document.querySelector('icon.apple-pay'));
		},
		_setDomElements: function (e) {
			(this.payingWithApplePay = !1),
				(this.applePayParsleyInstance = null),
				(this.handshakeEndpoint = e.attr('data-apple-pay-validation-url')),
				(this.applePayMerchantId = e.attr('data-apple-pay-merchant-id')),
				(this.$applePayWrapper = e);
		},
		applePayCapableCheck: function (e, a, t) {
			var n = STCUK.payments.applePay;
			window.ApplePaySession
				? ApplePaySession.canMakePaymentsWithActiveCard(n.applePayMerchantId).then(function (o) {
						(n.canUserMakePayments = o),
							o
								? ((n.apiVersion = n.checkApplePayApiVersion()),
								  t ||
										(e.removeClass('hidden'),
										STCUK.applePay.$applePayIcon &&
											STCUK.applePay.$applePayIcon.classList.remove('hidden')),
								  n.donationMethodInstance &&
										(n.donationMethodInstance.addApplePayClickHandler(),
										n.donationMethodInstance.setContinueBtnActive()))
								: a && a.setDebitAsDefault();
				  })
				: a && a.setDebitAsDefault();
		},
		checkApplePayApiVersion: function () {
			for (var e = [1, 2, 3, 4, 5, 6], a = 1, t = 0; t < e.length; t++) {
				var n = e[t];
				if (ApplePaySession.supportsVersion(n)) {
					a = n;
					break;
				}
			}
			return a;
		},
		makeApplePayRequest: function (e, a, t, n) {
			var o = STCUK.payments.applePay;
			(o.payingWithApplePay = !0),
				null !== o.applePayParsleyInstance && o.applePayParsleyInstance.destroy(),
				o.donationMethodInstance &&
					(o.donationMethodInstance.$debitText.addClass('hide'),
					o.donationMethodInstance.$payPalText.addClass('hide'),
					o.donationMethodInstance.$debitBtn.removeClass('active').find('input').prop('checked', !1),
					o.donationMethodInstance.$paypalBtn.removeClass('active').find('input').prop('checked', !1),
					o.donationMethodInstance.$donationMethodPanel
						.nextAll()
						.show()
						.find('input, select')
						.not('[name^=billing]')
						.removeAttr('data-parsley-excluded'),
					o.donationMethodInstance.setContinueBtnActive());
			var i = {
					countryCode: 'GB',
					currencyCode: a,
					total: { label: 'Save the Children UK', amount: e },
					supportedNetworks: ['masterCard', 'visa'],
					merchantCapabilities: ['supports3DS'],
					requiredShippingContactFields: ['name', 'email', 'phone'],
					requiredBillingContactFields: ['postalAddress']
				},
				s = new ApplePaySession(o.apiVersion, i);
			(s.onvalidatemerchant = function (e) {
				o.getApplePayMerchantSession(e.validationURL, o.handshakeEndpoint).then(
					function (e) {
						s.completeMerchantValidation(e);
					},
					function (e) {
						console.error('fail', e), o.failTLSHandshakeError();
					}
				);
			}),
				(s.oncancel = function (e) {
					n.disabled = !1;
				}),
				(s.onpaymentauthorized = function (e) {
					var a = e.payment;
					s.completePayment(ApplePaySession.STATUS_SUCCESS),
						sessionStorage.setItem('firstName', e.payment.shippingContact.givenName),
						sessionStorage.setItem('lastName', e.payment.shippingContact.familyName),
						sessionStorage.setItem('email', e.payment.shippingContact.emailAddress),
						sessionStorage.setItem('postcode', e.payment.billingContact.postalCode),
						(STCUK.payments.applePay.applePayPaymentToken = a),
						t
							? t(a)
							: (o.populateAddressDetails(a),
							  o.collectApplePayReviewAndConfirmData(),
							  o.disableComponentEdit());
				}),
				s.begin();
		},
		getApplePayMerchantSession: function (e, a) {
			return new Promise(function (t, n) {
				$.ajax({
					url: a,
					method: 'POST',
					contentType: 'application/json',
					data: JSON.stringify({ url: e }),
					success: function (e, a, o) {
						o.status >= 200 && o.status < 300 ? t(e) : n({ status: a, statusCode: o.status });
					},
					error: function (e, a) {
						n({ status: a, statusCode: e.status });
					}
				});
			});
		},
		failTLSHandshakeError: function () {
			var e = STCUK.payments.applePay;
			(e.applePayParsleyInstance = e.$applePayWrapper.find('.apple-pay-button').parsley({
				classHandler: function (e) {
					return e.$element.parent();
				},
				errorsWrapper: '<div class="textfield-error-text"></div>',
				errorClass: 'textfield-error',
				errorTemplate: '<p></p>'
			})),
				e.applePayParsleyInstance.addError('tls-fail', {
					message: 'Apple Pay payment has failed - please try again',
					updateClass: !0
				});
		},
		collectApplePayReviewAndConfirmData: function () {
			var e = STCUK.payments.applePay,
				a = e.donationMethodInstance.$donationMethodPanel,
				t = a.find('.panel-title').text(),
				n = e.donationMethodInstance.setReviewAndConfirmData(e.donationMethodInstance.invocationName),
				o = e.donationMethodInstance.$el.attr('data-role');
			if (
				(a.find('.panelContent').text(n.value).parent('.panel-title-right').addClass('updated'),
				STCUK.formData[e.donationMethodInstance.parentFormName] && void 0 !== n)
			) {
				n.componentName = o;
				var i = {};
				(i[o] = n), (STCUK.formData[e.donationMethodInstance.parentFormName][t] = [i]);
			}
		},
		populateAddressDetails: function (e) {
			var a = STCUK.payments.applePay,
				t = STCUK.postcodeLookup,
				n = a.donationMethodInstance.$donationMethodPanel.nextAll('.panel-default').first();
			n.removeClass('panel-disabled').find('a.collapsed').trigger('click'),
				n.find('.personal-details-first-name').val(e.shippingContact.givenName.trim()),
				n.find('.personal-details-last-name').val(e.shippingContact.familyName.trim()),
				n.find('.personal-details-email').val(e.shippingContact.emailAddress.trim());
			var o = a.typeOfPhoneNumber(e.shippingContact.phoneNumber, n);
			o.field.val(o.value);
			var i = '.manual-address-link',
				s = '.town-field',
				l = n.find('.postcodeLookup-default .country-select'),
				p = '.country-select option',
				r = '.code-field';
			t.billingAddressShow &&
				((i = '.postcode-lookup-custom ' + i),
				(s = '.postcode-lookup-custom ' + s),
				(p = '.postcode-lookup-custom ' + p),
				(r = '.postcode-lookup-custom ' + r)),
				n.find(i).trigger('click'),
				e.billingContact.addressLines.forEach(function (e, a) {
					var o = '[name=billing_address_line_' + (a + 1) + ']';
					t.billingAddressShow || (o = '[name=mail_address_line_' + (a + 1) + '], ' + o), n.find(o).val(e);
				}),
				n.find(s).val(e.billingContact.locality);
			var d = n.find(p),
				c = e.billingContact.countryCode;
			_.each(d, function (e) {
				e.value === c && $(e).prop('selected', !0);
			}),
				'GB' !== c && STCUK.postcodeLookup.applyPostCodeValidation(l, !0, !1),
				n.find(r).val(e.billingContact.postalCode),
				a.skipToLastPanel();
		},
		typeOfPhoneNumber: function (e, a) {
			var t;
			return (
				(e = e.replace(/ /g, '')),
				RegExp(STCUK.regexes.mobileInternational).test(e)
					? ((t = a.find('.mobile-phone')),
					  ('+' === e.charAt(0) || ('0' === e.charAt(0) && '0' === e.charAt(1))) &&
							t.attr('data-parsley-pattern', STCUK.regexes.mobileInternational))
					: (t = a.find('.landline-phone')),
				{ field: t, value: e }
			);
		},
		skipToLastPanel: function () {
			var e = STCUK.payments.applePay,
				a = STCUK.utility,
				t = e.donationMethodInstance.$donationMethodPanel,
				n = t.prev('.form-divider-line'),
				o = t.next('.form-divider-line');
			t.find('a.collapsed').trigger('click'), n.addClass('panel-disabled'), o.removeClass('panel-disabled');
			var i = $('[data-role=cardDetails]'),
				s = i.find('input');
			_.each(s, function (e) {
				$(e).attr('data-parsley-required', 'false');
			}),
				i.hide(),
				setTimeout(function () {
					a.scrollToElement(e.$addressTitle, !0);
				}, 500);
		},
		disableComponentEdit: function () {
			var e = STCUK.payments.applePay,
				a = e.$parentForm.find('.panel-heading');
			a.find('.accCaption').css('pointer-events', 'none'),
				a.off('click'),
				a.find('.edit-cta').addClass('hidden'),
				a.find('.panel-title-right .panelContent').css('border-right', 'none'),
				e.$checkboxAgeConfirm.prop('disabled', !0),
				e.$checkboxAgeConfirmLabel.off('click'),
				e.$checkboxAgeConfirmLabel.addClass('control-text-disabled'),
				e.$checkboxAgeConfirmLabel.find('.control-indicator').addClass('control-indicator-disabled');
		},
		init: function (e) {
			var a = STCUK.payments.applePay;
			a._setDomElements(e), a.applePayCapableCheck(e, null, !1);
		}
	}
};
STCUK.deviceProfile = {
	bindEvents: function () {
		this.$helpLink.on('click', $.proxy(this.showHelpPopup, this)),
			this.$helpPopupClose.on('click', $.proxy(this.closePopup, this)),
			this.$sendDetailsForm.on('submit', $.proxy(this.prepareDetailsToSend, this));
	},
	setDomElements: function (e) {
		var i = $(e);
		(this.$el = i),
			(this.$headerWrapper = i.find('.ui-component.header')),
			(this.$commerceHeaderLinks = i.find('.header-commerce')),
			(this.$helpLink = this.$commerceHeaderLinks.find('.header-commerce-help')),
			(this.$helpPopup = i.find('.info-section')),
			(this.$helpPopupClose = i.find('.tooltip-tt-close')),
			(this.$deviceField = i.find('.device-detail')),
			(this.$OSfield = i.find('.os-detail')),
			(this.$currPageField = i.find('.page-detail')),
			(this.$browserField = i.find('.browser-detail')),
			(this.$sendDetailsForm = i.find('.send-device-info-form')),
			(this.$sendDetailsName = i.find('input[name=send-info-name-field]')),
			(this.$sendDetailsEmail = i.find('input[name=send-info-email-field]')),
			(this.$sendDetailsDescription = i.find('textarea[name=send-info-describe-field]')),
			(this.$sendDetailsSubmitBtn = i.find('.submit-issue-details')),
			(this.$sendDetailsErrorMsg = i.find('.form-error-msg')),
			(this.$sendDetailsDISessionId = i.find('.decibel-insight-session-id')),
			(this.sendPayload = {}),
			(this.action = i.find('[data-recaptcha-action]').attr('data-recaptcha-action')),
			(this.$mobLogo = this.$headerWrapper.find('.visible-xs'));
	},
	closePopup: function () {
		var e = STCUK.deviceProfile;
		e.$helpPopup.addClass('hidden'), e.$headerWrapper.removeClass('not-fixed'), STCUK.captcha.hidePanel();
	},
	formatString: function (e) {
		return e
			? (e = e.replace(/_/g, ' ')).replace(/\w\S*/g, function (e) {
					return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
			  })
			: '';
	},
	getDISession: function () {
		var e = '';
		return window.decibelInsight && (e = window.decibelInsight('getSessionId')), e;
	},
	getCurrPage: function (e) {
		var i = e.lastIndexOf('/');
		return e.substring(i).trim();
	},
	getDeviceProfile: function () {
		var e = STCUK.deviceProfile,
			i = cssua.userAgent,
			a = '',
			s = '',
			n = '',
			t = window.location.pathname + window.location.search + window.location.hash,
			r = STCUK.regexes.devices,
			d = STCUK.regexes.os,
			l = STCUK.regexes.browsers;
		if (((e.sendPayload.deviceDetails = {}), void 0 !== i))
			for (var o in i)
				null !== o.match(r) && (a = o + ' ' + i[o]),
					null !== o.match(d) && (s = o + ' ' + i[o]),
					null !== o.match(l) && (n = o + ' ' + i[o]);
		var c = e.formatString(a);
		e.$deviceField.text(c), (e.sendPayload.deviceDetails.device = c);
		var p =
			n.indexOf('fbav') > -1 || n.indexOf('fbsv') > -1
				? n.replace(/fb(a|s)v/, 'Facebook app')
				: e.formatString(n);
		e.$browserField.text(p), (e.sendPayload.deviceDetails.browser = p);
		var f = e.formatString(s);
		e.$OSfield.text(f), (e.sendPayload.deviceDetails.os = f);
		var h = e.getCurrPage(t);
		e.$currPageField.text(h), (e.sendPayload.page = h);
	},
	showHelpPopup: function (e) {
		var i = STCUK.deviceProfile,
			a = new Date();
		STCUK.utility;
		i.$sendDetailsForm.parsley().reset(),
			i.$headerWrapper.addClass('not-fixed'),
			STCUK.utility.scrollToElement(i.$headerWrapper, !0),
			i.$helpPopup.hasClass('hidden')
				? ((i.sendPayload.date = a.toGMTString()), i.$helpPopup.removeClass('hidden'), i.populateDetails())
				: i.closePopup(),
			STCUK.captcha.showPanel();
	},
	populateDetails: function () {
		var e = STCUK.deviceProfile,
			i = $('input[name=first_name]').val(),
			a = $('input[name=surname]').val(),
			s = e.getDISession();
		if (i && a) {
			var n = i + ' ' + a;
			new RegExp(STCUK.regexes.nameWithAccents).test(n) ? e.$sendDetailsName.val(n) : e.$sendDetailsName.val('');
		}
		var t = $('input[name=email_address]').val();
		t &&
			'' !== t &&
			(new RegExp(STCUK.regexes.email).test(t) ? e.$sendDetailsEmail.val(t) : e.$sendDetailsEmail.val(''));
		'string' == typeof s &&
			s.length > 0 &&
			(new RegExp(/^di-/).test(s) ? e.$sendDetailsDISessionId.val(s) : e.$sendDetailsDISessionId.val(''));
	},
	prepareDetailsToSend: function (e) {
		e.preventDefault();
		var i = STCUK.deviceProfile;
		(i.sendPayload.name = i.$sendDetailsName.val()),
			(i.sendPayload.email = i.$sendDetailsEmail.val()),
			(i.sendPayload.description = i.$sendDetailsDescription.val()),
			(i.sendPayload.diSessionId = i.$sendDetailsDISessionId.val()),
			(i.sendPayload.failedPaymentError = STCUK.isFailedPayment
				? $('.error-container-wrapper .error-heading')[0].innerHTML
				: ''),
			i.$sendDetailsForm.parsley().isValid() &&
				(i.$sendDetailsSubmitBtn.prop('disabled', !0),
				!i.$sendDetailsErrorMsg.hasClass('hidden') && i.$sendDetailsErrorMsg.addClass('hidden'),
				i.sendHelpFormPayload(i.sendPayload));
	},
	sendHelpFormPayload: function (e) {
		var i = STCUK.deviceProfile;
		STCUK.captcha.fetchToken(function (a) {
			$.ajax({
				url: '/deviceProfile',
				method: 'GET',
				dataType: 'text',
				data: { token: a, deviceProfile: JSON.stringify(e) }
			})
				.success(function () {
					i.$sendDetailsSubmitBtn.val('Details sent');
				})
				.error(function (e, a, s) {
					console.error(s),
						i.$sendDetailsErrorMsg.removeClass('hidden'),
						i.$sendDetailsSubmitBtn.prop('disabled', !1);
				});
		});
	},
	parsleyValidator: function (e) {
		var i = $(e);
		_.each(i.find('input'), function (e, i, a) {
			var s = e.parentElement;
			$(s)
				.find('input')
				.parsley({
					classHandler: function (e) {
						return e.$element.parent();
					},
					errorsContainer: function (e) {
						return e.$element.parent().find('.textfield-error-text');
					}
				});
		});
	},
	init: function (e) {
		var i = STCUK.deviceProfile;
		$(e).find('.header-commerce-help').length > 0 &&
			(i.setDomElements(e), i.getDeviceProfile(), i.parsleyValidator(e), i.bindEvents());
	}
};
STCUK.serviceCalls = {
	emailFilter: function (e, n) {
		return new Promise(function (t, o) {
			$.ajax({
				type: 'GET',
				contentType: 'text/plain',
				url: e + '?email=' + n,
				success: function (e) {
					t(e);
				},
				error: function (e) {
					o(e);
				}
			});
		});
	},
	expletiveFilter: function (e, n) {
		var t = { str: n };
		return new Promise(function (n, o) {
			$.ajax({
				async: !0,
				crossDomain: !0,
				url: e,
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				processData: !1,
				data: JSON.stringify(t),
				success: function (e) {
					n(e);
				},
				error: function (e) {
					o(e);
				}
			});
		});
	},
	checkCodeIsAvailable: function (e) {
		return new Promise(function (n, t) {
			$.ajax({
				type: 'GET',
				contentType: 'text/plain',
				url: e,
				success: function (e) {
					n(e);
				},
				error: function (e) {
					t(e);
				}
			});
		});
	},
	postcodeRegexUrl: 'https://i18napis.appspot.com/address/data/',
	fetchPostcodeRegex: function (e) {
		var n = STCUK.serviceCalls.postcodeRegexUrl + e;
		return fetch(n)
			.then(function (e) {
				return e.json();
			})
			.then(function (e) {
				return e.zip;
			})
			.catch(function (e) {
				console.error(e);
			});
	},
	lookupMP: function (e, n, t) {
		return new Promise(function (o, c) {
			$.ajax({
				method: 'get',
				url: e,
				data: {
					contentType: 'json',
					service: 'EaAOContactData',
					token: n,
					postcode: t,
					constituencyDatabaseId: '3'
				},
				dataType: 'jsonp',
				crossDomain: !0,
				timeout: 3e4,
				success: function (e) {
					o(e.rows);
				},
				error: function (e) {
					c(e);
				}
			});
		});
	},
	fetchThankYouPageData: function (e) {
		return new Promise(function (n, t) {
			console.log('>>>>>> Fetch request fired.'),
				$.ajax({
					type: 'GET',
					dataType: 'json',
					url: e,
					cache: !1,
					data: {},
					timeout: 15e4,
					success: function (e) {
						n(e);
					},
					error: function (e) {
						t(e);
					},
					complete: function () {
						var e = STCUK.utility;
						e.clearSessionStorage('currency'),
							e.clearSessionStorage('currencyText'),
							e.clearSessionStorage('currencyVal'),
							e.clearSessionStorage('donationAmount'),
							e.clearSessionStorage('donationType'),
							console.log('>>>>>> Request has completed.');
					}
				});
		});
	},
	fetchTransactionReference: function (e) {
		return new Promise(function (n, t) {
			$.ajax({
				type: 'GET',
				url: e,
				success: function (e) {
					n(e);
				},
				error: function (e) {
					t(e);
				}
			});
		});
	}
};
window.CQ &&
	(window.top.STCUK = {
		loadSectionsList: function (e) {
			for (var t = document.querySelectorAll('[data-section-id]'), i = [], n = 0; n < t.length; n++) {
				var l = t[n].getAttribute('data-section-id');
				i[n] = { text: l, value: l };
			}
			e.setOptions(i);
		},
		toggleAnswerType: function (e) {
			var t = e.getField('./nextSection'),
				i = e.getField('./correctAnswer'),
				n = e.getField('./groupings'),
				l = e.getField('./answerType'),
				s = l.getValue();
			s || ((s = 'binary'), l.setValue(s)), n.setVisible('weighted' === s), i.setVisible('binary' === s);
			var a = l.findParentByType('tabpanel'),
				r = a.items.items[1].items.items[0];
			'link' === s
				? ((r.allowBlank = !1), a.unhideTabStripItem(1), t.setVisible(!1))
				: (r.setValue(''), (r.allowBlank = !0), a.hideTabStripItem(1), t.setVisible(!0));
		},
		loadAnswerGroups: function (e) {
			for (
				var t = document.querySelectorAll('[data-role="quizWeightedResults"] .answer-group'), i = [], n = 0;
				n < t.length;
				n++
			) {
				var l = t[n].innerText;
				i[n] = { text: l, value: l };
			}
			e.setOptions(i);
		},
		joinUsIntermediateMsg: function (e) {
			var t = e.getField('./intermediateMessage');
			'standard' === e.getField('./optInStyle').getValue() ? t.setVisible(!1) : t.setVisible(!0);
		}
	});
(STCUK.audioPlayer = {
	bindEvents: function () {
		var e = STCUK[this.invocationName],
			a = e.audio,
			t = e.bgColour;
		e.el.addEventListener('click', e.toggleAudio.bind(e)),
			a.addEventListener('ended', function () {
				(a.currentTime = 0), e.setPlayBtn();
			}),
			a.addEventListener('timeupdate', function () {
				if (0 === a.currentTime) e.el.style.background = 'rgba(' + t.r + ', ' + t.g + ', ' + t.b + ', 0.9)';
				else {
					var n = (a.currentTime / a.duration) * 100;
					e.el.style.background =
						'linear-gradient(90deg, rgba(' +
						t.r +
						', ' +
						t.g +
						', ' +
						t.b +
						', 0.9)' +
						n +
						'%, rgba(' +
						t.r +
						', ' +
						t.g +
						', ' +
						t.b +
						', 0.4)' +
						n +
						'%)';
				}
			});
	},
	setDomElements: function (e, a) {
		var t = STCUK[a];
		if (
			((e.dataset.invocationName = a),
			(t.el = e),
			(t.invocationName = a),
			t.el.classList.add('audio-player', 'play'),
			(t.audio = new Audio(t.el.href)),
			(t.bgColour = STCUK.utility.hrefHexToRgb(e.href)),
			null === t.bgColour)
		) {
			var n = window.getComputedStyle(t.el).getPropertyValue('background-color'),
				i = (n = n.replace('rgb(', '').replace(')', '')).split(',');
			t.bgColour = { r: i[0], g: i[1], b: i[2] };
		}
		t.el.style.background = 'rgba(' + t.bgColour.r + ', ' + t.bgColour.g + ', ' + t.bgColour.b + ', 0.9)';
	},
	setPlayBtn: function () {
		var e = STCUK[this.invocationName];
		e.el.classList.remove('pause'), e.el.classList.add('play');
	},
	setPauseBtn: function () {
		var e = STCUK[this.invocationName];
		e.el.classList.remove('play'), e.el.classList.add('pause');
	},
	play: function () {
		var e = STCUK[this.invocationName],
			a = e.audio.play();
		if (a)
			try {
				a.then(function () {
					e.setPauseBtn();
				});
			} catch (a) {
				console.error('Unable to play audio!', a), e.setPlayBtn();
			}
	},
	pause: function () {
		var e = STCUK[this.invocationName];
		e.audio.pause(), e.setPlayBtn();
	},
	pauseOthers: function () {
		for (var e = STCUK[this.invocationName], a = 0; a < STCUK.audioPlayerMap.length; a++) {
			var t = STCUK.audioPlayerMap[a];
			t !== e && t.pause();
		}
	},
	toggleAudio: function (e) {
		e.preventDefault(), e.stopImmediatePropagation();
		var a = STCUK[this.invocationName];
		a.el.classList.contains('play') ? (a.pauseOthers(), a.play()) : a.pause();
	},
	init: function (e, a) {
		var t = STCUK[a];
		t.setDomElements(e, a), t.bindEvents();
	}
}),
	(STCUK.audioPlayerMap = []),
	document.addEventListener('DOMContentLoaded', function () {
		var e = document.querySelectorAll('a[href$=".mp3"]');
		if (e.length > 0)
			for (var a = 0; a < e.length; a++) {
				var t = e[a];
				if (cssua.userAgent.ie) {
					for (var n = t.parentNode; t.firstChild; ) n.insertBefore(t.firstChild, t);
					n.removeChild(t);
				} else {
					var i = 'audioPlayer' + (a > 0 ? a : '');
					(STCUK[i] = _.clone(STCUK.audioPlayer)), STCUK[i].init(t, i), STCUK.audioPlayerMap.push(STCUK[i]);
				}
			}
	});
STCUK.blogPageUtils = {
	checkForEmbeddedTweets: function () {
		var t = document.querySelectorAll('.twitter-tweet'),
			e = document.querySelectorAll('.twitter-video');
		(t.length > 0 || e.length > 0) &&
			window.addEventListener('load', function () {
				STCUK.utility.loadScript('https://platform.twitter.com/widgets.js');
			});
	}
};
STCUK.loader = {
	show: function () {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
			o = STCUK.loader.getLoader(),
			t = o.querySelector('.loading-message');
		(t.textContent = '' !== e ? e : ''), o && o.classList.remove('hide');
	},
	hide: function () {
		var e = STCUK.loader.getLoader();
		e && e.classList.add('hide');
	},
	getLoader: function () {
		return document.querySelector('.loadIcon');
	}
};
STCUK.contentSnippet = {
	setDomElements: function (e, t) {
		var n = STCUK[t];
		(n.$el = e),
			(e.dataset.invocationName = t),
			(n.invocationName = t),
			(n.$content = e.querySelector('.content')),
			(n.$closeIcon = e.querySelector('.close-icon')),
			(n.$pannellum = e.closest('.pannellum')),
			(n.pannellum = STCUK[n.$pannellum.dataset.invocationName]),
			(n.yaw = e.dataset.yaw),
			(n.pitch = e.dataset.pitch),
			(n.markerText = e.dataset.markerText),
			(n.snippetId = e.dataset.snippetId);
	},
	show: function (e) {
		var t = STCUK[this.invocationName];
		e && (e.preventDefault(), e.stopImmediatePropagation()),
			(location.hash = t.pannellum.sectionId + '&' + t.snippetId),
			t.pannellum.showOverlay(),
			t.$el.classList.remove('hidden'),
			t.alignVertically();
	},
	hide: function (e) {
		var t = STCUK[this.invocationName];
		e && (e.preventDefault(), e.stopImmediatePropagation()),
			t.pannellum.hideOverlay(),
			t.$el.classList.add('hidden');
	},
	alignVertically: function () {
		var e = STCUK[this.invocationName],
			t = e.$pannellum.offsetHeight,
			n = e.$content.offsetHeight;
		(e.$content.style.top = (t - n) / 2 + 'px'), (e.$closeIcon.style.top = (t - n) / 2 - 10 + 'px');
	},
	getConfig: function () {
		console.log(
			'WARNING: Content snippet [' + this.invocationName + '] has not overridden the getConfig function!'
		);
	},
	init: function (e, t) {
		STCUK[t].setDomElements(e, t);
	}
};
STCUK.storyElement = {
	bindEvents: function () {},
	setDomElements: function (t, n) {
		var e = STCUK[n];
		(e.$el = t),
			(t.dataset.invocationName = n),
			(e.invocationName = n),
			(e.sectionId = t.dataset.sectionId),
			(e.nextSectionId = t.dataset.nextSectionId),
			e.nextSectionId && (e.$nextSection = document.querySelector('[data-section-id="' + e.nextSectionId + '"]')),
			(e.$storyContainer = t.closest('[data-role="storyContainer"]')),
			(e.storyContainer = STCUK[e.$storyContainer.dataset.invocationName]);
	},
	bindClick: function (t) {
		var n = STCUK[this.invocationName];
		!STCUK.utility.isAuthorMode() &&
			n.nextSectionId &&
			t.addEventListener('click', function () {
				n.storyContainer.scrollToSection(n.$nextSection);
			});
	},
	isHidden: function () {
		return STCUK[this.invocationName].$el.classList.contains('hidden');
	},
	init: function (t, n) {
		var e = STCUK[n];
		e.setDomElements(t, n), e.bindEvents();
	}
};
(STCUK.actionFormLink = {
	bindEvents: function () {
		var n = STCUK[this.invocationName],
			e = STCUK.analytics;
		n.$el.addEventListener('click', function (t) {
			t.preventDefault(), t.stopImmediatePropagation();
			var i = n.$el.href,
				o = e.cidTracking().marketingSource;
			o && (i += (i.indexOf('?') > -1 ? '&' : '?') + 'sourcecode=' + o), (window.location.href = i);
		});
	},
	setDomElements: function (n, e) {
		var t = STCUK[e];
		(n.dataset.invocationName = e), (t.$el = n), (t.invocationName = e);
	},
	init: function (n, e) {
		var t = STCUK[e];
		t.setDomElements(n, e), t.bindEvents();
	}
}),
	document.addEventListener('DOMContentLoaded', function () {
		var n = document.querySelectorAll('a[href*="action.savethechildren.org.uk"]');
		if (n.length > 0)
			for (var e = 0; e < n.length; e++) {
				var t = 'actionFormLink' + (e > 0 ? e : '');
				(STCUK[t] = _.clone(STCUK.actionFormLink)), STCUK[t].init(n[e], t);
			}
	});
STCUK.captcha = {
	setDomElements: function () {
		var a = STCUK.captcha,
			e = document.querySelector('[data-site-key]');
		e && ((a.fixed = !1), (a.siteKey = e.dataset.siteKey));
	},
	loadCaptchaScript: function () {
		var a = STCUK.captcha;
		STCUK.utility.loadScript('https://www.google.com/recaptcha/api.js', function () {
			grecaptcha.ready(function () {
				(a.recaptchaWrapper = document.createElement('div')),
					a.recaptchaWrapper.classList.add('g-recaptcha'),
					document.body.appendChild(a.recaptchaWrapper),
					grecaptcha.render(a.recaptchaWrapper, {
						sitekey: a.siteKey,
						badge: 'bottomleft',
						size: 'invisible'
					});
			});
		});
	},
	fetchToken: function (a) {
		var e = this;
		grecaptcha.execute().then(function (t) {
			a.call(e, t);
		});
	},
	hidePanel: function () {
		var a = STCUK.captcha;
		window.recaptcha && a.recaptchaWrapper && !a.fixed && STCUK.utility.toggleShow(a.recaptchaWrapper, 'none');
	},
	showPanel: function () {
		var a = STCUK.captcha;
		window.recaptcha && a.recaptchaWrapper && STCUK.utility.toggleShow(a.recaptchaWrapper, 'block');
	},
	setFixed: function () {
		STCUK.captcha.fixed = !0;
	},
	init: function () {
		var a = STCUK.captcha;
		a.setDomElements(), a.siteKey && a.loadCaptchaScript();
	}
};
STCUK.xfLoader = {
	bindEvents: function () {
		document.addEventListener('at-content-rendering-succeeded', STCUK.xfLoader.handleRenderSuccess);
	},
	handleRenderSuccess: function (e) {
		var n = document.querySelectorAll('.at-element-marker'),
			t = [];
		n.length > 0 &&
			n.forEach(function (e) {
				var n = e.querySelector('[data-role]');
				if (n) {
					var o = n.getAttribute('data-role'),
						a = STCUK.xfLoader.findAvailableComponentName(o);
					t.push({ name: o, el: n, instanceOfComponent: a });
				}
			}),
			STCUK.componentLoader.invokeComponents(t);
	},
	findAvailableComponentName: function (e) {
		var n = 0,
			t = '';
		do {
			if (((t = ++n > 1 ? '' + e + n : e), n > 20)) break;
		} while (void 0 !== STCUK[t]);
		return n;
	},
	init: function () {
		STCUK.xfLoader.bindEvents();
	}
};
STCUK.componentMap = [
	'actionFormIFrame',
	'applePay',
	'beforeAfterSlider',
	'blogAdditionalPosts',
	'blogArticlesList',
	'blogAuthorsList',
	'blogAuthorsTabs',
	'blogCategoryTabs',
	'blogPublicationDate',
	'carousel',
	'cjdRegTracker',
	'donateOverlap',
	'donationLiveFeed',
	'donationTracking',
	'donatePod',
	'eventSearch',
	'filterContentListing',
	'followUs',
	'header',
	'heroImage',
	'imageSnippet',
	'map',
	'shop',
	'communityShop',
	'mlgShop',
	'fundraising',
	'pannellum',
	'paypal',
	'paypalRedirect',
	'personalisedInPageHeading',
	'primaryNavigation',
	'quizContainer',
	'quizQuestion',
	'quizAnswer',
	'quizResults',
	'quizWeightedResults',
	'petitionIFrame',
	'petitionCta',
	'searchInput',
	'searchInputHeader',
	'searchResults',
	'socialShare',
	'storyContainer',
	'supportTracker',
	'teaserCircleImage',
	'textSnippet',
	'movingPortrait',
	'storyGrid',
	'storyImage',
	'storyVideo',
	'videoSnippet',
	'calendar',
	'cardDetails',
	'checkBox',
	'childDetails',
	'corporateDonor',
	'crisisDetails',
	'directDebitDetails',
	'directDebitThankYouPage',
	'donationAmount',
	'donationBySMS',
	'donationMethod',
	'donationType',
	'dropdown',
	'eventDetails',
	'eventFundRaisingHeader',
	'formAccordion',
	'formHeaderAboveEighteen',
	'formOptionalAccordion',
	'formSplitAccordion',
	'giftAid',
	'inMemory',
	'joinUs',
	'parentDetails',
	'payIn',
	'personalDetails',
	'postcodeLookup',
	'radioButtonGroup',
	'registrationSummary',
	'reviewAndConfirm',
	'teamTextCode',
	'textarea',
	'textfield'
];
var _slicedToArray = function (e, t) {
	if (Array.isArray(e)) return e;
	if (Symbol.iterator in Object(e))
		return (function (e, t) {
			var o = [],
				i = !0,
				r = !1,
				a = void 0;
			try {
				for (
					var n, s = e[Symbol.iterator]();
					!(i = (n = s.next()).done) && (o.push(n.value), !t || o.length !== t);
					i = !0
				);
			} catch (e) {
				(r = !0), (a = e);
			} finally {
				try {
					!i && s.return && s.return();
				} finally {
					if (r) throw a;
				}
			}
			return o;
		})(e, t);
	throw new TypeError('Invalid attempt to destructure non-iterable instance');
};
STCUK.actionFormIFrame = {
	bindEvents: function (e) {
		var t = STCUK[e];
		window.addEventListener('load', t.sendFormData.bind(t)),
			t.$launchCookieDialog.addEventListener('click', t.showOneTrustCookieDialog.bind(t));
	},
	sendFormData: function () {
		var e = document.querySelector('.action-form-iframe iframe'),
			t = document.querySelector('.action-form-iframe').dataset.iframeSource,
			o = {};
		sessionStorage.getItem('firstName') &&
			((o = {
				firstName: sessionStorage.getItem('firstName'),
				lastName: sessionStorage.getItem('lastName'),
				email: sessionStorage.getItem('email'),
				postcode: sessionStorage.getItem('postcode')
			}),
			setTimeout(function () {
				e.contentWindow.postMessage(o, t);
			}, 500));
	},
	setDomElements: function (e, t) {
		var o = STCUK[t];
		(o.invocationName = t), (o.$el = e);
		var i = STCUK.analytics;
		(o.$iframe = e.querySelector('iframe')),
			(o.$cookieBlockedMsg = e.querySelector('.cookies-blocked-msg')),
			(o.$launchCookieDialog = e.querySelector('.launch-cookie-dialog'));
		var r = i.cidTracking().marketingSource;
		o.source = e.dataset.iframeSource + ('' !== r ? '?sourcecode=' + r : '');
	},
	addSrcAttribute: function () {
		var e = STCUK[this.invocationName];
		e.$el.classList.contains('author-mode') || e.$iframe.setAttribute('src', e.source);
	},
	checkForCookieAcceptance: function () {
		var e = STCUK[this.invocationName],
			t = STCUK.utility.cookie.getItem('OptanonConsent');
		if (t) {
			var o = STCUK.utility.getParameterByName('groups', t),
				i = {};
			o.split(',').forEach(function (e) {
				var t = e.split(':'),
					o = _slicedToArray(t, 2),
					r = o[0],
					a = o[1];
				i[r] = '1' === a;
			}),
				i.C0003
					? e.$iframe.hasAttribute('sandbox') &&
					  (e.$iframe.removeAttribute('sandbox'), window.location.reload())
					: e.blockThirdPartCookies();
		} else e.blockThirdPartCookies();
	},
	blockThirdPartCookies: function () {
		var e = STCUK[this.invocationName];
		e.$iframe.setAttribute('sandbox', 'allow-scripts allow-forms allow-same-origin'),
			e.$cookieBlockedMsg.classList.remove('hidden');
	},
	showOneTrustCookieDialog: function (e) {
		e.preventDefault();
		var t = STCUK[this.invocationName];
		OneTrust && (OneTrust.ToggleInfoDisplay(), OneTrust.OnConsentChanged(t.checkForCookieAcceptance.bind(t)));
	},
	init: function (e, t) {
		var o = STCUK[t];
		o.setDomElements(e, t), o.bindEvents(t), o.checkForCookieAcceptance(), o.addSrcAttribute();
	}
};
STCUK.applePay = {
	bindEvents: function () {
		var e = STCUK[this.invocationName],
			a = e.donatePod;
		e.$el.addEventListener('click', function () {
			var n = a.parseValue(a.getDonatePodValue());
			(e.$el.disabled = !0),
				STCUK.payments.applePay.makeApplePayRequest(
					n.amount,
					n.currency,
					e.handleApplePayDonation.bind(e),
					e.$el
				);
		});
	},
	setDomElements: function (e, a) {
		var n = STCUK[a],
			t = e.closest('[data-role="donatePod"]');
		(e.dataset.invocationName = a),
			(n.invocationName = a),
			(n.$el = e),
			(n.donatePod = STCUK[t.dataset.invocationName]),
			(n.$$applePayBtn = $(e)),
			(n.$applePayIcon = document.querySelector('.icon.apple-pay')),
			(n.$donateMethodOverlay = e.closest('.donate-pod-panel-overlay')),
			STCUK.payments.applePay.init(n.$$applePayBtn),
			(n.worldPayApi = e.dataset.worldpayApi),
			(n.transactionReferenceUrl = e.dataset.transactionReferenceUrl);
	},
	handleApplePayDonation: function (e) {
		var a = STCUK[this.invocationName],
			n = STCUK.utility,
			t = STCUK.loader,
			i = STCUK.formMetadata;
		i.setMetadata(a.$donateMethodOverlay);
		var o = a.donatePod,
			l = o.parseValue(o.getDonatePodValue()),
			s = o.getGiftAidVal(),
			r = i.getFormPost();
		(a.landlinePhoneNumber = ''), (a.mobilePhoneNumber = '');
		var d = a.sanitiseName(e.shippingContact.givenName),
			c = a.sanitiseName(e.shippingContact.familyName),
			p = 'Unknown',
			m = 'Unknown';
		'' !== d && (p = d),
			'' !== c
				? (m = c)
				: (console.error('Apple Pay user does not have surname set!'),
				  _satellite.track('apple-pay-validation-error-missing-surname')),
			t.show(),
			(r.formdata.donation_amount_acc = {
				currency_code: l.currency,
				currency_symbol: l.currencyVal,
				donation_frequency: 'single',
				currency_amount: l.amount
			}),
			(r.formdata.donation_method_acc = { donation_method_rbg: 'apple' }),
			(r.formdata.gift_aid_acc = { gift_aid_declaration: '' + s }),
			a.setAddressBillingAccProperties(e.shippingContact.phoneNumber, 'phone');
		var u = {
			title: '',
			first_name: p,
			surname: m,
			email_address: e.shippingContact.emailAddress.trim(),
			personal_phone: a.landlinePhoneNumber,
			personal_mobile: a.mobilePhoneNumber,
			mail_organisation: '',
			mail_town: e.billingContact.locality,
			mail_country: e.billingContact.countryCode,
			mail_postcode: e.billingContact.postalCode,
			billing_cb: 'true',
			billing_organisation: '',
			billing_town: e.billingContact.locality,
			billing_country: e.billingContact.countryCode,
			billing_postcode: e.billingContact.postalCode,
			applePayToken: JSON.stringify(STCUK.payments.applePay.applePayPaymentToken.token.paymentData),
			joinus_update_email: 'false',
			joinus_update_phone: 'false',
			joinus_update_post: 'false',
			joinus_update_sms: 'false'
		};
		e.billingContact.addressLines.forEach(function (e, a) {
			(u['mail_address_line_' + (a + 1)] = n.sanitizeAddressLine(e)),
				(u['billing_address_line_' + (a + 1)] = n.sanitizeAddressLine(e));
		}),
			(r.formdata.address_billing_acc = u),
			(r.formdata.marketing_preferences = { preference_submit: 'false' }),
			STCUK.serviceCalls.fetchTransactionReference(a.transactionReferenceUrl).then(function (e) {
				(r.formdata.address_billing_acc.transaction_reference = e), a.donatePod.submitFormPost(r);
			});
	},
	sanitiseName: function (e) {
		var a = e.replace(/\s?-\s?/g, '-'),
			n = new RegExp(STCUK.regexes.emoji, 'g');
		return a.replace(n, '').trim();
	},
	setAddressBillingAccProperties: function (e, a) {
		var n = STCUK[this.invocationName];
		'phone' === a && n.setPhoneNumber(e);
	},
	setPhoneNumber: function (e) {
		var a,
			n,
			t = STCUK[this.invocationName],
			i = e;
		(a = STCUK.utility.isValid(i, STCUK.regexes.mobile)),
			(n = STCUK.utility.isValid(i, STCUK.regexes.phone)),
			a ? (t.mobilePhoneNumber = i) : n && (t.landlinePhoneNumber = i);
	},
	enableApplePayBtn: function () {
		STCUK[this.invocationName].$el.disabled = !1;
	},
	init: function (e, a) {
		var n = STCUK[a];
		n.setDomElements(e, a), n.bindEvents();
	}
};
STCUK.beforeAfterSlider = {
	bindEvents: function () {
		var e = STCUK[this.invocationName],
			t = _.debounce(e.resetSlider.bind(e), 200);
		window.addEventListener('resize', t),
			e.$handle.addEventListener('mousedown', e.setMouseDown.bind(e)),
			e.$beforeAfterWrapper.addEventListener('touchmove', e.touchDrag.bind(e)),
			document.addEventListener('mouseup', e.setMouseUp.bind(e)),
			document.addEventListener('mousemove', e.mouseMove.bind(e)),
			'loading' === document.readyState
				? window.addEventListener('DOMContentLoaded', e.imageLoadObserver.bind(e))
				: e.imageLoadObserver();
	},
	resetSlider: function () {
		STCUK[this.invocationName].setInitialPositions();
	},
	setMouseDown: function (e) {
		var t = STCUK[this.invocationName];
		e.stopPropagation(), e.stopImmediatePropagation(), (t.mouseDownOnHandle = !0);
	},
	setMouseUp: function () {
		STCUK[this.invocationName].mouseDownOnHandle = !1;
	},
	mouseMove: function (e) {
		var t = STCUK[this.invocationName];
		t.mouseDownOnHandle && t.calculateHandleMove(e.clientX);
	},
	touchDrag: function (e) {
		var t = STCUK[this.invocationName];
		e.preventDefault(),
			e.stopPropagation(),
			e.stopImmediatePropagation(),
			t.calculateHandleMove(e.touches[0].pageX);
	},
	setDomElements: function (e, t) {
		var n = STCUK[t];
		(n.$el = e),
			(n.invocationName = t),
			(n.$beforeAfterWrapper = e.querySelector('.before-after-slider')),
			(n.$movingImage = e.querySelector('.moving-image')),
			(n.$handle = e.querySelector('.handle')),
			(n.$divider = e.querySelector('.divider')),
			(n.mouseDownOnHandle = !1);
	},
	setInitialPositions: function () {
		var e = STCUK[this.invocationName],
			t = e.$movingImage.offsetWidth / 2;
		e.updatePositions(t);
	},
	calculateHandleMove: function (e) {
		var t = STCUK[this.invocationName],
			n = t.$movingImage.getBoundingClientRect(),
			o = n.width,
			i = n.left,
			a = i + o;
		e <= i ? t.updatePositions(-5) : e >= a ? t.updatePositions(o) : t.updatePositions(e - i);
	},
	updatePositions: function (e) {
		var t = STCUK[this.invocationName];
		(t.$movingImage.style.clip = 'rect(auto, ' + e + 'px, auto, auto)'),
			(t.$handle.style.transform = 'translate(' + (e - 10) + 'px, -50%)'),
			(t.$divider.style.transform = 'translate(' + e + 'px, 0)');
	},
	imageLoadObserver: function () {
		var e = STCUK[this.invocationName];
		if (window.MutationObserver) {
			new MutationObserver(function (t, n) {
				t.forEach(function (t) {
					'class' === t.attributeName &&
						t.target.classList.contains('lazy-loaded') &&
						(e.setInitialPositions(), n.disconnect());
				});
			}).observe(e.$movingImage.querySelector('.lazyload'), { attributes: !0 });
		}
	},
	init: function (e, t) {
		var n = STCUK[t];
		n.setDomElements(e, t), n.bindEvents(t);
	}
};
STCUK.blogAdditionalPosts = {
	setDomElements: function (e, t) {
		var a = STCUK[t];
		(e.dataset.invocationName = t),
			(a.invocationName = t),
			(a.$el = e),
			(a.blogSearchUrl = e.dataset.blogSearchUrl),
			(a.pageName = e.dataset.pageName),
			(a.postsType = e.dataset.postsType),
			(a.postsSize = e.dataset.postsSize),
			(a.themes = e.dataset.pageThemes),
			(a.countries = e.dataset.countries),
			(a.$list = e.querySelector('ul')),
			(a.query = { size: a.postsSize, query: { bool: { must_not: { match: { pageName: a.pageName } } } } });
	},
	addLink: function (e, t) {
		var a = STCUK[this.invocationName],
			o = document.createElement('li'),
			s = document.createElement('a');
		(s.href = e), (s.innerText = t), o.appendChild(s), a.$list.appendChild(o);
	},
	searchFeaturedBlogs: function () {
		var e = STCUK[this.invocationName],
			t = e.query;
		(t.query.bool.must = { term: { featuredPost: 'true' } }),
			(t.sort = { authorPublicationDate: 'desc' }),
			e.search(t);
	},
	searchRelatedBlogs: function () {
		var e = STCUK[this.invocationName],
			t = e.query;
		if (((t.sort = [{ _score: 'desc' }, { authorPublicationDate: 'desc' }]), (t.query.bool.should = []), e.themes))
			for (var a = e.themes.split(','), o = 0; o < a.length; o++)
				t.query.bool.should.push({ match: { themes: a[o] } });
		if (e.countries)
			for (var s = e.countries.split(','), n = 0; n < s.length; n++)
				t.query.bool.should.push({ match: { countries: s[n] } });
		e.search(t);
	},
	search: function (e) {
		var t = STCUK[this.invocationName];
		fetch(t.blogSearchUrl, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(e)
		})
			.then(function (e) {
				return e.json();
			})
			.then(function (e) {
				for (var a = 0; a < e.hits.hits.length; a++) {
					var o = e.hits.hits[a]._source;
					t.addLink(o.path, o.title);
				}
			})
			.catch(function (e) {
				console.error(e);
			});
	},
	init: function (e, t) {
		var a = STCUK[t];
		a.setDomElements(e, t),
			'featured' === a.postsType ? a.searchFeaturedBlogs() : 'related' === a.postsType && a.searchRelatedBlogs();
	}
};
function _toConsumableArray(t) {
	if (Array.isArray(t)) {
		for (var a = 0, e = Array(t.length); a < t.length; a++) e[a] = t[a];
		return e;
	}
	return Array.from(t);
}
STCUK.blogArticlesList = {
	bindEvents: function () {
		var t = STCUK[this.invocationName];
		'loading' !== document.readyState
			? t.getBlogResults.bind(t)()
			: window.addEventListener('DOMContentLoaded', t.getBlogResults.bind(t)),
			t.$paginationWrapper.addEventListener('click', t.handlePagination.bind(t));
	},
	setDomElements: function (t, a) {
		var e = STCUK[a];
		(e.$el = t),
			(t.dataset.invocationName = a),
			(e.invocationName = a),
			(e.blogArticles = []),
			(e.$blogsContainer = t.querySelector('.blog-articles'));
		var n = t.dataset.numberToDisplay || '10';
		(e.numOfBlogsToDisplay = parseInt(n)),
			(e.blogSearchUrl = t.dataset.blogSearchUrl),
			(e.startDate = t.dataset.startDate),
			(e.endDate = t.dataset.endDate),
			(e.paginationCreated = !1),
			(e.$paginationWrapper = t.querySelector('.pagination-wrapper')),
			(e.$paginationBtnsWrapper = e.$paginationWrapper.querySelector('.page-num-btns-wrapper')),
			(e.readFullPostText = t.dataset.readFullPostText || 'Read full blog post'),
			(e.fetchErrorMsg =
				t.dataset.errorMsgFetchFailed ||
				'Sorry there was an error fetching the blog data, please refresh the page.'),
			(e.noBlogsErrorMsg = t.dataset.errorMsgNoBlogs || 'There are no blogs to display on this subject');
		var i = t.dataset.countryTag;
		if (i) {
			var o = new RegExp(/\/([a-z\-]*)$/gi),
				r = i.match(o);
			r && (i = r[0]);
		}
		(e.countryTag = e.getTag(t.dataset.countryTag)),
			(e.themeTag = e.getTag(t.dataset.themeTag)),
			(e.authorIdentifier = t.dataset.authorIdentifier),
			(e.supportsLazyLoading = !!window.IntersectionObserver);
	},
	getTag: function (t) {
		var a = t || '',
			e = new RegExp(/\/([a-z\-]*)$/gi),
			n = a.match(e);
		return n && (a = n[0]), a;
	},
	getBlogResults: function (t) {
		var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
			e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
			n = STCUK[this.invocationName],
			i = n.buildQuery(a);
		fetch(n.blogSearchUrl, {
			method: 'post',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify(i)
		})
			.then(function (t) {
				return t.json();
			})
			.then(function (t) {
				(n.totalNumberOfBlogs = t.hits.total.value),
					n.blogArticles.push({ page: e, results: t.hits.hits }),
					n.createBlogArticles(a, e);
			})
			.catch(function (t) {
				console.error(t);
				var a = DOMPurify.sanitize('<h2 class="fetch-error">' + n.fetchErrorMsg + '</h2>');
				n.$blogsContainer.innerHTML = a;
			});
	},
	buildQuery: function (t) {
		var a = STCUK[this.invocationName],
			e = {
				from: t,
				size: a.numOfBlogsToDisplay,
				sort: [{ authorPublicationDate: { order: 'desc' } }, { lastPublicationDate: { order: 'desc' } }]
			};
		return (
			(a.startDate || a.endDate) &&
				((e.query = {
					bool: {
						must: [
							{
								range: {
									authorPublicationDate: { gte: a.startDate || '01/01/1970', format: 'dd/MM/yyyy' }
								}
							}
						]
					}
				}),
				a.endDate && (e.query.bool.must[0].range.authorPublicationDate.lte = a.endDate)),
			a.addMatch(e, 'countries', a.countryTag),
			a.addMatch(e, 'themes', a.themeTag),
			'NoAuthor' !== a.authorIdentifier && a.addMatch(e, 'authorIdentifier', a.authorIdentifier),
			e
		);
	},
	addMatch: function (t, a, e) {
		if (e) {
			t.query || (t.query = { bool: { must: [] } });
			var n = {};
			(n[a] = e), (t.query.bool.must[t.query.bool.must.length] = { match_phrase: n });
		}
	},
	createBlogArticles: function (t, a) {
		var e = STCUK[this.invocationName],
			n = e.blogArticles.filter(function (t) {
				return t.page === a;
			})[0].results,
			i = '';
		if (n.length > 0) {
			n.forEach(function (a, n) {
				var o = n + t;
				i += e.blogArticleTemplate(a._source, o);
			});
			var o = DOMPurify.sanitize(i);
			e.$blogsContainer.insertAdjacentHTML('beforeend', o),
				(e.$blogArticleEls = [].concat(_toConsumableArray(e.$el.querySelectorAll('.blog-article')))),
				e.paginationCreated ? e.showBlogArticles(t, t + e.numOfBlogsToDisplay) : e.createPagination();
		} else {
			var r = DOMPurify.sanitize('<h2>' + e.noBlogsErrorMsg + '</h2>');
			e.$blogsContainer.innerHTML = r;
		}
	},
	blogArticleTemplate: function (t, a) {
		var e = STCUK[this.invocationName],
			n = STCUK.utility.processDate(t.authorPublicationDate || t.lastPublicationDate),
			i = '';
		if (t.image) {
			var o = e.supportsLazyLoading ? 'data-src' : 'src',
				r = e.supportsLazyLoading ? 'lazyload' : '';
			i =
				'<a href="' +
				t.path +
				'" class="article-image">\n\t\t\t\t\t<img ' +
				o +
				'="' +
				t.image +
				'" alt="' +
				t.imageAlt +
				'" class="' +
				r +
				'" />\n\t\t\t\t</a>';
		}
		return (
			'<article class="blog-article hidden" data-blog-index="' +
			a +
			'">\n\t\t\t' +
			i +
			'\n\t\t\t<div class="article-content">\n\t\t\t\t<h2>\n\t\t\t\t\t<a href="' +
			t.path +
			'">' +
			t.title +
			'</a>\n\t\t\t\t</h2>\n\t\t\t\t<time datetime="' +
			n.year +
			'-' +
			n.month +
			'-' +
			n.day +
			'" class="publish-date">' +
			n.readableDate +
			'</time>\n\t\t\t\t<p class="article-description">' +
			t.description +
			'</p>\n\t\t\t\t<p class="read-more">\n\t\t\t\t\t<a href="' +
			t.path +
			'" title="' +
			t.title +
			'">' +
			e.readFullPostText +
			'</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</article>'
		);
	},
	createPagination: function () {
		var t = STCUK[this.invocationName];
		if (t.totalNumberOfBlogs > t.numOfBlogsToDisplay) {
			var a = Math.ceil(t.totalNumberOfBlogs / t.numOfBlogsToDisplay),
				e = t.createPaginationMarkup(a);
			(t.$paginationBtnsWrapper.innerHTML = e),
				(t.paginationCreated = !0),
				(t.$pageLinks = t.$paginationBtnsWrapper.querySelectorAll('.page-num-btn')),
				(t.$paginationInner = t.$paginationWrapper.querySelector('.pagination-btns-inner')),
				(t.numPaginationPages = t.$pageLinks.length),
				(t.$activePaginationBtn = t.$pageLinks[0]),
				t.$paginationWrapper.classList.remove('hidden');
		}
		t.showBlogArticles(0, 0 + t.numOfBlogsToDisplay);
	},
	createPaginationMarkup: function (t) {
		for (var a = STCUK[this.invocationName], e = '<div class="pagination-btns-inner">', n = 0, i = 0; i < t; i++) {
			var o = i + 1;
			(e +=
				'<a href="javascript:void(0)" data-blog-start-index="' +
				n +
				'" title="Page ' +
				o +
				'" class="page-num-btn ' +
				(1 === o ? 'active' : '') +
				'">' +
				o +
				'</a>'),
				(n += a.numOfBlogsToDisplay);
		}
		return (e += '</div>');
	},
	handlePagination: function (t) {
		t.preventDefault();
		var a = STCUK[this.invocationName],
			e = t.target,
			n = e.classList,
			i = null,
			o = 1,
			r = !1;
		switch (!0) {
			case n.contains('page-num-btn'):
				(r = a.checkIfBlogsExist(parseInt(e.textContent))),
					a.$activePaginationBtn.classList.remove('active'),
					e.classList.add('active'),
					(a.$activePaginationBtn = e),
					(i = parseInt(e.getAttribute('data-blog-start-index'))),
					a.updatePaginationPosition(e),
					(o = parseInt(e.textContent));
				break;
			case n.contains('move-along-btn'):
				var s = a.getNextButton(e);
				s &&
					((o = parseInt(s.textContent)),
					(r = a.checkIfBlogsExist(o)),
					a.$activePaginationBtn.classList.remove('active'),
					s.classList.add('active'),
					(a.$activePaginationBtn = s),
					(i = parseInt(s.getAttribute('data-blog-start-index'))),
					a.updatePaginationPosition(s));
				break;
			case n.contains('first-page-btn'):
				(i = 0), (r = a.checkIfBlogsExist(1));
				var l = a.$pageLinks[0];
				a.$activePaginationBtn.classList.remove('active'),
					l.classList.add('active'),
					(a.$activePaginationBtn = l),
					a.updatePaginationPosition(l, !0);
				break;
			case n.contains('last-page-btn'):
				var c = a.numPaginationPages - 1,
					g = a.$pageLinks[c];
				(r = a.checkIfBlogsExist(parseInt(g.textContent))),
					(o = parseInt(g.textContent)),
					(i = parseInt(g.getAttribute('data-blog-start-index'))),
					a.$activePaginationBtn.classList.remove('active'),
					g.classList.add('active'),
					(a.$activePaginationBtn = g),
					a.updatePaginationPosition(g, !0);
		}
		if (null !== i)
			if ((a.hideBlogArticles(), r)) {
				var u = i + a.numOfBlogsToDisplay;
				a.showBlogArticles(i, u);
			} else a.getBlogResults(null, i, o);
		window.scrollTo(0, 0);
	},
	checkIfBlogsExist: function (t) {
		return (
			STCUK[this.invocationName].blogArticles.filter(function (a) {
				return a.page === t;
			}).length > 0
		);
	},
	getNextButton: function (t) {
		var a = STCUK[this.invocationName],
			e = null;
		if (t.classList.contains('prev-btn')) {
			a.$activePaginationBtn === a.$pageLinks[0] || (e = a.$activePaginationBtn.previousElementSibling);
		} else {
			var n = a.numPaginationPages - 1;
			a.$activePaginationBtn === a.$pageLinks[n] || (e = a.$activePaginationBtn.nextElementSibling);
		}
		return e;
	},
	updatePaginationPosition: function (t) {
		var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			e = STCUK[this.invocationName],
			n = e.$pageLinks[0].getBoundingClientRect().width,
			i = parseInt(t.textContent),
			o = i >= 3,
			r = i < e.numPaginationPages - 1;
		if (o && r) {
			var s = i - 3,
				l = '-' + s * n + 'px';
			e.$paginationInner.style.transform = 'translateX(' + l + ')';
		}
		if (a) {
			var c = 0;
			if (1 !== i) {
				var g = i - 5;
				c = '-' + g * n + 'px';
			}
			e.$paginationInner.style.transform = 'translateX(' + c + ')';
		}
	},
	showBlogArticles: function (t, a) {
		STCUK[this.invocationName].$blogArticleEls
			.filter(function (e) {
				var n = parseInt(e.getAttribute('data-blog-index'));
				return n >= t && n < a;
			})
			.forEach(function (t) {
				t.classList.remove('hidden'), t.classList.add('showing');
			});
	},
	hideBlogArticles: function () {
		STCUK[this.invocationName].$blogArticleEls
			.filter(function (t) {
				return t.classList.contains('showing');
			})
			.forEach(function (t) {
				t.classList.remove('showing'), t.classList.add('hidden');
			});
	},
	init: function (t, a) {
		var e = STCUK[a];
		e.setDomElements(t, a), e.bindEvents();
	}
};
STCUK.blogAuthorsList = {
	setDomElements: function (t, o) {
		var i = STCUK[o];
		(i.$el = t), (t.dataset.invocationName = o), (i.invocationName = o), (i.$groups = t.querySelectorAll('a'));
	},
	setActiveGroup: function (t) {
		STCUK[this.invocationName].$groups.forEach(function (o) {
			o.classList.contains(t) ? o.classList.remove('hide') : o.classList.add('hide');
		});
	},
	resetGroups: function () {
		STCUK[this.invocationName].$groups.forEach(function (t) {
			t.classList.remove('hide');
		});
	},
	init: function (t, o) {
		STCUK[o].setDomElements(t, o);
	}
};
STCUK.blogAuthorsTabs = {
	bindEvents: function () {
		var e = STCUK[this.invocationName];
		e.$letterBtns.addEventListener('click', function (t) {
			e.setActiveLetter(t.target);
		}),
			document.addEventListener('DOMContentLoaded', e.handleHashChange.bind(e)),
			window.addEventListener('hashchange', e.handleHashChange.bind(e));
	},
	setDomElements: function (e, t) {
		var n = STCUK[t];
		(n.$el = e),
			(e.dataset.invocationName = t),
			(n.invocationName = t),
			(n.$letterBtns = e.querySelector('.blog-author-index')),
			(n.$letters = e.querySelectorAll('a'));
	},
	handleHashChange: function () {
		var e = STCUK[this.invocationName],
			t = window.location.hash.replace('#', '');
		if ('' !== t) {
			var n = e.$el.querySelector('a[href="#' + t + '"]');
			n && e.setActiveLetter(n);
		} else e.resetLetters(), STCUK.blogAuthorsList.resetGroups();
	},
	setActiveLetter: function (e) {
		var t = STCUK[this.invocationName],
			n = STCUK.blogAuthorsList;
		t.resetLetters(), e.classList.add('active'), n.setActiveGroup(e.textContent);
	},
	resetLetters: function () {
		STCUK[this.invocationName].$letters.forEach(function (e) {
			e.classList.remove('active');
		});
	},
	init: function (e, t) {
		var n = STCUK[t];
		n.setDomElements(e, t), n.bindEvents();
	}
};
STCUK.blogCategoryTabs = {
	bindEvents: function () {
		var t = STCUK[this.invocationName];
		t.$categoryBtns.forEach(function (e) {
			e.addEventListener('click', function () {
				e.dataset.path
					? (window.location = window.location.origin + e.dataset.path)
					: (t.setActiveTab(e), t.setActiveCategory(e.innerText), t.scrollToActiveCategory(e));
			});
		});
	},
	setDomElements: function (t, e) {
		var o = STCUK[e];
		(o.$el = t),
			(t.dataset.invocationName = e),
			(o.invocationName = e),
			(o.$blogCategoryList = document.querySelector('.blog-category-list')),
			(o.$categories = o.$blogCategoryList.querySelectorAll('.category')),
			(o.$categoryBtns = t.querySelectorAll('.category-btn')),
			(o.headerHeight = document.querySelector('.ui-component.header').clientHeight);
	},
	setActiveTab: function (t) {
		STCUK[this.invocationName].$categoryBtns.forEach(function (e) {
			e === t ? e.classList.add('active') : e.classList.remove('active');
		});
	},
	setActiveCategory: function (t) {
		STCUK[this.invocationName].$categories.forEach(function (e) {
			e.id.trim() === t.trim() ? e.classList.remove('hide') : e.classList.add('hide');
		});
	},
	findCategory: function (t) {
		for (var e = STCUK[this.invocationName], o = void 0, i = 0; i < e.$categories.length; i++)
			if (e.$categories[i].id.toLowerCase().trim() === t.toLowerCase().trim()) {
				o = e.$categories[i];
				break;
			}
		return o;
	},
	scrollToActiveCategory: function (t) {
		var e = STCUK[this.invocationName],
			o = STCUK.utility.checkMobileResolution(),
			i = t.innerText.toLowerCase(),
			a = e.findCategory(i),
			n = e.headerHeight;
		o && a && (a.scrollIntoView({ behavior: 'smooth' }), (a.style.paddingTop = n + 'px'));
	},
	init: function (t, e) {
		var o = STCUK[e];
		o.setDomElements(t, e), o.bindEvents();
	}
};
STCUK.blogPublicationDate = {
	setDomElements: function (t, a) {
		var e = STCUK[a],
			i = STCUK.utility;
		(t.dataset.invocationName = a),
			(e.invocationName = a),
			(e.$el = t),
			(e.publicationDate = t.dataset.publicationDate),
			e.publicationDate && (t.innerText = i.processDate(e.publicationDate).readableDate);
	},
	init: function (t, a) {
		STCUK[a].setDomElements(t, a);
	}
};
STCUK.carousel = {
	players: {},
	bindEvents: function () {
		var e = STCUK[this.invocationName];
		e.$el.on('slide.bs.carousel', $.proxy(e.onSlide, e)),
			(window.onYouTubeIframeAPIReady = function () {
				e.$slides.each(function (t) {
					var i = $(e.$slides[t]);
					if (i.hasClass('has-video')) {
						var a = i.find('.player').attr('id'),
							s = i.attr('data-video-id');
						e.players[a] = new YT.Player(a, { videoId: s });
					}
				});
			});
	},
	setDomElements: function (e, t) {
		var i = $(e);
		(this.$el = i),
			i.data('invocationName', t),
			(this.invocationName = t),
			(this.$slides = i.find('.carousel-inner .item')),
			(this.$firstSlide = i.find('.carousel-inner .item:first'));
	},
	addYoutubeApi: function () {
		var e = STCUK[this.invocationName];
		e.$slides.each(function (t) {
			if ($(e.$slides[t]).hasClass('has-video')) {
				var i = document.createElement('script'),
					a = $('.carousel.slide').attr('data-youtube-api-url'),
					s = document.getElementsByTagName('script')[0];
				return (i.src = a), s.parentNode.insertBefore(i, s), !1;
			}
		});
	},
	onSlide: function (e) {
		var t = STCUK[this.invocationName],
			i = $(e.target).find('.has-video.active iframe');
		if (i.length > 0) {
			var a = t.players[i.attr('id')];
			a.getPlayerState() === YT.PlayerState.PLAYING && a.pauseVideo();
		}
	},
	loadAllSlideImgs: function () {
		var e = STCUK[this.invocationName];
		$.each(e.$slides, function (e, t) {
			if (e > 0) {
				var i = t.querySelectorAll('picture source'),
					a = t.querySelector('.lazyload');
				i.forEach(function (e) {
					e.hasAttribute('srcset') || e.setAttribute('srcset', e.getAttribute('data-srcset'));
				}),
					a && !a.hasAttribute('srcset') && a.setAttribute('srcset', a.getAttribute('data-srcset'));
			}
		});
	},
	imageLoadObserver: function () {
		var e = STCUK[this.invocationName];
		if (window.MutationObserver && !e.$firstSlide.hasClass('has-video')) {
			if (e.$firstSlide.length > 0)
				new MutationObserver(function (t, i) {
					t.forEach(function (t) {
						'class' === t.attributeName &&
							t.target.classList.contains('lazy-loaded') &&
							(e.loadAllSlideImgs(), i.disconnect());
					});
				}).observe(e.$firstSlide[0].querySelector('.lazyload'), { attributes: !0 });
		}
	},
	init: function (e, t) {
		var i = STCUK[t];
		i.setDomElements(e, t), i.bindEvents(), i.addYoutubeApi(), i.imageLoadObserver();
	}
};
STCUK.cjdRegTracker = {
	bindEvents: function () {
		var e = STCUK[this.invocationName];
		e.isAuthorMode ||
			(document.addEventListener('DOMContentLoaded', e.fetchData.bind(e)),
			window.addEventListener('scroll', _.debounce(e.fetchData.bind(e), 1e3)),
			e.addClickListener(e.$showBreakdown, e.$breakdown),
			e.addClickListener(e.$showCities, e.$cities),
			e.$showAllCities &&
				e.$showAllCities.addEventListener('click', function () {
					e.$showAllCities.classList.add('hide'), e.$cities.classList.remove('limit');
				}));
	},
	addClickListener: function (e, t) {
		var i = STCUK[this.invocationName];
		e &&
			e.addEventListener('click', function () {
				e.classList.add('hide'), t.classList.remove('hide'), i.fetchData();
			});
	},
	setDomElements: function (e, t) {
		var i = STCUK[t];
		(e.dataset.invocationName = t),
			(i.$el = e),
			(i.invocationName = t),
			(i.isAuthorMode = e.classList.contains('author-mode')),
			(i.isMobile = STCUK.utility.checkMobileResolution()),
			(i.regTrackerUrl = e.dataset.regTrackerUrl),
			(i.$totals = e.querySelector('.totals')),
			(i.totalsDuration = parseInt(e.dataset.totalsDuration)),
			(i.$showBreakdown = e.querySelector('.show-breakdown')),
			(i.breakdownDuration = parseInt(e.dataset.breakdownDuration)),
			(i.$breakdown = e.querySelector('.breakdown')),
			(i.$types = i.$breakdown.querySelector('.types')),
			(i.$school = i.$types.querySelector('.school')),
			(STCUK.flipPluginLoaded = !1),
			i.$school &&
				((i.$schoolTotal = i.$school.querySelector('.total')),
				(i.$subTypes = i.$school.querySelector('.sub_types'))),
			(i.$work = i.$types.querySelector('.work')),
			(i.$friendsFamily = i.$types.querySelector('.friends_family')),
			(i.$showCities = i.$breakdown.querySelector('.show-cities')),
			(i.$cities = e.querySelector('.cities')),
			i.$cities &&
				((i.$citiesTable = i.$cities.querySelector('table')),
				(i.$showAllCities = i.$cities.querySelector('.show-all-cities')));
	},
	addHeadingClasses: function () {
		var e = STCUK[this.invocationName].$el.querySelectorAll('.count');
		e[0].classList.add('primary-counter'), e[1].classList.add('primary-counter');
	},
	fetchData: function () {
		var e = STCUK[this.invocationName],
			t = STCUK.utility;
		e.$totals && t.isElementInViewport(e.$totals) && e.fetch(e.regTrackerUrl, e.$totals, '', e.totalsDuration),
			e.$breakdown.classList.contains('hide') ||
				(e.$school &&
					t.isElementInViewport(e.$school) &&
					(e.fetch(e.regTrackerUrl + '?type=school', e.$schoolTotal, '', e.breakdownDuration),
					e.$subTypes &&
						t.isElementInViewport(e.$subTypes) &&
						(e.fetch(
							e.regTrackerUrl + '?type=school&subType=nursery',
							e.$subTypes,
							'.nursery',
							e.breakdownDuration
						),
						e.fetch(
							e.regTrackerUrl + '?type=school&subType=primary',
							e.$subTypes,
							'.primary',
							e.breakdownDuration
						),
						e.fetch(
							e.regTrackerUrl + '?type=school&subType=secondary',
							e.$subTypes,
							'.secondary',
							e.breakdownDuration
						),
						e.fetch(
							e.regTrackerUrl + '?type=school&subType=youth_group',
							e.$subTypes,
							'.youth_group',
							e.breakdownDuration
						))),
				e.$work &&
					t.isElementInViewport(e.$work) &&
					e.fetch(e.regTrackerUrl + '?type=work', e.$work, '', e.breakdownDuration),
				e.$friendsFamily &&
					t.isElementInViewport(e.$friendsFamily) &&
					e.fetch(e.regTrackerUrl + '?type=friends_family', e.$friendsFamily, '', e.breakdownDuration),
				e.$cities &&
					!e.$cities.classList.contains('hide') &&
					t.isElementInViewport(e.$cities) &&
					1 === e.$citiesTable.rows.length &&
					fetch(e.regTrackerUrl + '/cities')
						.then(function (e) {
							return e.json();
						})
						.then(function (t) {
							t.forEach(function (t) {
								var i = e.$citiesTable.insertRow(-1);
								i.dataset.cityName = t.name;
								var r = i.insertCell(0),
									n = i.insertCell(1);
								(r.textContent = t.name), (n.textContent = t.participants);
							});
						})
						.catch(function (e) {
							return console.error(e);
						}));
	},
	fetch: (function (e) {
		function t(t, i, r, n) {
			return e.apply(this, arguments);
		}
		return (
			(t.toString = function () {
				return e.toString();
			}),
			t
		);
	})(function (e, t, i, r) {
		var n = STCUK[this.invocationName],
			a = STCUK.utility,
			o = t.querySelector(i + '.registration.count'),
			s = !n.isMobile && o.classList.contains('primary-counter'),
			c = t.querySelector(i + '.participant.count'),
			l = !n.isMobile && c.classList.contains('primary-counter'),
			u = parseInt(o.textContent),
			d = parseInt(c.textContent);
		((o && 0 === u) || (c && 0 === d)) &&
			fetch(e)
				.then(function (e) {
					return e.json();
				})
				.then(function (e) {
					if (o)
						if (s) {
							var i = n.flipTemplate(e.registrations);
							o.innerHTML = i;
						} else a.counter(o, u, e.registrations, r);
					if (c)
						if (l) {
							var p = n.flipTemplate(e.participants);
							c.innerHTML = p;
						} else a.counter(c, d, e.participants, r);
					STCUK.flipPluginLoaded && s && l && n.findFlipCounters(t);
				})
				.catch(function (e) {
					return console.error(e);
				});
	}),
	flipSpeed: function (e) {
		var t = 10;
		switch (e) {
			case 4:
				t = 100;
				break;
			case 5:
				t = 1e3;
				break;
			case 6:
				t = 1e4;
				break;
			case 7:
				t = 1e5;
				break;
			case 8:
				t = 1e6;
		}
		return t;
	},
	flipTemplate: function (e) {
		var t = STCUK[this.invocationName],
			i = e.toString().length,
			r = Array(i + 1).join('0');
		return (
			'<span class="tick" data-value="0" data-destination-value="' +
			e +
			'" data-layout="horizontal center" data-repeat="true" data-transform="arrive(' +
			t.flipSpeed(i) +
			", 0.01) -> round -> pad('" +
			r +
			'\') -> split -> delay(rtl, 10, 50)"><span data-view="flip"></span></span>'
		);
	},
	findFlipCounters: function (e) {
		var t = STCUK[this.invocationName],
			i = Tick.DOM.parse(e);
		t.startFlipCounters(i);
	},
	startFlipCounters: function (e) {
		e.forEach(function (e) {
			var t = e._element;
			t.closest('.count').classList.add('no-bg');
			var i = parseInt(t.getAttribute('data-destination-value'));
			e.value = i;
		});
	},
	init: function (e, t) {
		var i = STCUK[t];
		i.setDomElements(e, t),
			i.addHeadingClasses(),
			void 0 === STCUK.flipPluginLoading &&
				((STCUK.flipPluginLoading = !0),
				STCUK.utility.loadStyleSheet('/etc/clientlibs/ui/plugins/js/flip/css/flip.min.css'),
				STCUK.utility.loadScript('/etc/clientlibs/ui/plugins/js/flip/js/flip.min.js', function (e) {
					STCUK.flipPluginLoaded = !0;
				})),
			i.bindEvents();
	}
};
STCUK.donateOverlap = {
	bindEvents: function () {
		var t = STCUK[this.invocationName];
		t.$tabs.on('click', $.proxy(t.toggleView, t)),
			t.$donationAmountBtn.on('click', $.proxy(t.selectAmount, t)),
			t.$donateNowBtn.on('click', $.proxy(t.redirectToForm, t));
		var e = _.debounce($.proxy(t.updateArrowPosition, t), 300);
		$(window).on('resize', e),
			t.$otherDonationAmount.on('keydown', $.proxy(t.restrictCharacter, t)),
			t.$applePayEnabled &&
				(STCUK.formMetadata.setMetadata(t.$applePayBtn[0]),
				STCUK.payments.applePay.init(t.$applePayBtn),
				t.$applePayBtn.addClass('hidden'),
				t.$giftAidContainer.on('click', $.proxy(t.toggleGiftAid, t)),
				t.$applePayBtn.on('click', '.apple-pay-button', function (e) {
					e.preventDefault();
					var n = t.getDonationAmount(),
						a = t.$currencyType.val(),
						o = e.target;
					void 0 !== n &&
						STCUK.payments.applePay.makeApplePayRequest(n, a, $.proxy(t.handleApplePayDonation, t), o);
				}));
	},
	restrictCharacter: function (t) {
		STCUK.utility.restrictNumberChars(t, !0, !1);
	},
	toggleOverlap: function () {
		$('.hero-image-top').length < 1 && this.$el.css('margin-top', '50px');
	},
	setDomElements: function (t, e) {
		var n = STCUK[e],
			a = $(t);
		(n.$el = a),
			a.data('invocationName', e),
			(n.invocationName = e),
			(n.$triangleEl = a.find('.triangle-left')),
			(n.$tabs = a.find('[data-button-url]')),
			(n.$tooltipPanelContainer = a.find('.tooltip-panel-container')),
			(n.$donationAmountBtnContainer = a.find('.donation-amount-btn-container')),
			(n.$donationAmountBtn = this.$donationAmountBtnContainer.find('li span')),
			(n.$currencyType = a.find('.currency-type')),
			(n.$currencySymbol = a.find('.currency-symbol')),
			(n.$donationContentPanel = a.find('.donation-content-panel')),
			(n.$donateNowBtn = a.find('.donate-now')),
			(n.$otherDonationAmount = a.find('.other-tab-container .text-input input')),
			(n.$errMsgs = a.find('.other-tab-container .currency-error-msg')),
			(n.$applePayBtn = a.find('.apple-pay')),
			(n.$applePayEnabled = n.$applePayBtn.length > 0),
			(n.$giftAidContainer = n.$applePayBtn.find('.gift-aid-checkbox')),
			(n.$giftAidCheckbox = n.$giftAidContainer.find('input[type="checkbox"]'));
	},
	updateArrowPosition: function () {
		var t = STCUK[this.invocationName],
			e = t.$donationAmountBtn.filter('.toggle-active'),
			n =
				e.position().left -
				t.$donationContentPanel.position().left +
				e.width() / 2 -
				(t.$triangleEl.width() + 15) +
				'px';
		t.$triangleEl.animate({ left: n }, 800);
	},
	toggleView: function (t) {
		if (!$(t.currentTarget).hasClass('active')) {
			var e = STCUK[this.invocationName],
				n = $(t.currentTarget).index();
			e.$donationAmountBtnContainer.add(e.$tooltipPanelContainer).addClass('hide'),
				e.$donationAmountBtnContainer.eq(n).add(e.$tooltipPanelContainer.eq(n)).removeClass('hide'),
				e.$donationAmountBtnContainer.find('[data-header-index="0"]:visible').trigger('click'),
				STCUK.payments.applePay.canUserMakePayments &&
					(1 === n ? e.$applePayBtn.removeClass('hidden') : e.$applePayBtn.addClass('hidden'));
		}
	},
	selectAmount: function (t) {
		if (!$(t.currentTarget).hasClass('toggle-active')) {
			var e = STCUK[this.invocationName],
				n = $(t.currentTarget),
				a = n.attr('data-header-index'),
				o = e.$tooltipPanelContainer.filter(':visible').find('.donate-amount-panel'),
				i = e.$tooltipPanelContainer.find('.donate-amount-panel'),
				r = e.$el.find('.other-tab-container .currency-error-msg');
			e.$el.find('.toggle-active').removeClass('toggle-active'),
				n.addClass('toggle-active'),
				e.$otherDonationAmount.off('keyup', e.validateOtherHandler),
				e.$errMsgs.addClass('hidden'),
				r.addClass('hidden'),
				i.removeClass('show').addClass('hide'),
				o.eq(a).addClass('show'),
				e.updateArrowPosition(),
				e.doFormAnalyticsAmnt(n);
		}
	},
	validateOther: function () {
		var t,
			e,
			n = STCUK[this.invocationName],
			a = n.$donationAmountBtn.filter('.toggle-active'),
			o = !1,
			i = _.debounce(n.validateOther, 200),
			r = new RegExp(STCUK.regexes.amountGeneric);
		return (
			a.parent('.other').length > 0 &&
				((t = n.$el.find('.other-tab-container:visible .currency-error-msg')),
				(e = n.$el.find('.other-tab-container:visible input[type=text]')),
				(donateAmtValue = e[0].value),
				(o = r.test(donateAmtValue)),
				'' == donateAmtValue || 0 == o
					? (e.on('keyup', $.proxy(i, this)), t.removeClass('hidden'))
					: (t.addClass('hidden'), e.off('keyup', $.proxy(i, this)), (o = !0))),
			o
		);
	},
	getDonationAmount: function () {
		var t = STCUK[this.invocationName],
			e = t.$donationAmountBtn.filter('.toggle-active').next('input').attr('data-amount'),
			n = t.$el.find('.other-tab-container:visible input[type=text]').val();
		if (void 0 !== n) {
			if (!t.validateOther()) return;
			e = n;
		}
		return e;
	},
	redirectToForm: function () {
		var t = STCUK[this.invocationName],
			e = STCUK.analyticsV2,
			n = t.$el.find('.other-tab-container:visible input[type=text]').val(),
			a = t.getDonationAmount(),
			o = STCUK.utility;
		if (a) {
			var i = t.$currencySymbol.val(),
				r = t.$currencyType.val(),
				l = t.$el.find('.donation-tab .active a').data('type') || '',
				d = i + a;
			window.sessionStorage && Modernizr.sessionstorage
				? (sessionStorage.setItem('donationAmount', $.trim(a)),
				  sessionStorage.setItem('donationType', l),
				  sessionStorage.setItem('currency', r),
				  sessionStorage.setItem('currencyVal', i),
				  sessionStorage.setItem('currencyText', d))
				: (o.cookie.setItem('donationAmount', $.trim(a)),
				  o.cookie.setItem('donationType', l),
				  o.cookie.setItem('currency', r),
				  o.cookie.setItem('currencyVal', i),
				  o.cookie.setItem('currencyText', d)),
				t.$applePayEnabled &&
					STCUK.utility.isCheckboxChecked(t.$giftAidCheckbox[0]) &&
					sessionStorage.setItem('giftAidChecked', !0),
				'undefined' != typeof digitalData &&
					null !== digitalData &&
					e.handleDonateSubmitAnalytics({
						donationAmount: $.trim(a),
						donationType: l,
						currency: r,
						currencyVal: i,
						currencyText: d,
						ifCustomAmt: n
					}),
				void 0 !== t.$donateNowBtn.attr('data-href')
					? (location.href = t.$donateNowBtn.attr('data-href'))
					: (location.href = t.$tabs.filter('.active').attr('data-button-url'));
		}
	},
	toggleGiftAid: function (t) {
		t.preventDefault();
		var e = STCUK[this.invocationName],
			n = STCUK.utility.isCheckboxChecked(e.$giftAidCheckbox[0]);
		e.$giftAidContainer.toggleClass('checked'), e.$giftAidCheckbox.prop('checked', !n);
	},
	handleApplePayDonation: function (t) {
		var e = STCUK[this.invocationName],
			n = STCUK.formMetadata,
			a = e.getDonationAmount(),
			o = e.$currencyType.val(),
			i = e.$currencySymbol.val(),
			r = {
				title: '',
				first_name: t.shippingContact.givenName.trim(),
				surname: t.shippingContact.familyName.trim(),
				email_address: t.shippingContact.emailAddress.trim(),
				personal_mobile: t.shippingContact.phoneNumber,
				mail_town: t.billingContact.locality,
				mail_country: t.billingContact.countryCode,
				mail_postcode: t.billingContact.postalCode,
				billing_town: t.billingContact.locality,
				billing_country: t.billingContact.countryCode,
				billing_postcode: t.billingContact.postalCode,
				applePayToken: JSON.stringify(STCUK.payments.applePay.applePayPaymentToken.token.paymentData),
				billing_cb: 'true',
				joinus_update_email: 'false',
				joinus_update_phone: 'false',
				joinus_update_post: 'false',
				joinus_update_sms: 'false'
			};
		t.billingContact.addressLines.forEach(function (t, e) {
			(r['mail_address_line_' + (e + 1)] = t), (r['billing_address_line_' + (e + 1)] = t);
		});
		var l = n.getFormPost();
		(l.formdata.donation_amount_acc = {
			currency_code: o,
			currency_symbol: i,
			donation_frequency: 'single',
			currency_amount: a
		}),
			(l.formdata.donation_method_acc = { donation_method_rbg: 'apple' }),
			(l.formdata.gift_aid_acc = {
				gift_aid_declaration: STCUK.utility.isCheckboxChecked(e.$giftAidCheckbox[0]).toString()
			}),
			(l.formdata.address_billing_acc = r),
			(l.formdata.marketing_preferences = { preference_submit: 'false' }),
			$.ajax({
				type: 'POST',
				contentType: 'application/json',
				url: n.actionUrl,
				data: STCUK.utility.processFormPostData(l),
				success: function (t) {
					sessionStorage.setItem('first-name', t.first_name),
						sessionStorage.setItem('mobile-wallet-payment', 'true'),
						STCUK.utility.clearSessionStorage('formName'),
						STCUK.utility.clearSessionStorage('campaignName'),
						STCUK.utility.clearSessionStorage('fundName'),
						(window.location =
							t.thankYouPage + (t.thankYouPage.indexOf('?') > -1 ? '&' : '?') + 'query=' + t.id);
				}
			});
	},
	doFormAnalyticsAmnt: function (t) {
		var e = STCUK[this.invocationName];
		t.parent().hasClass('other')
			? ((e.donateAmount = t.text()),
			  (e.donateType = t.parents().children('.tab-container').find('li.active a').text()),
			  (e.other = 'other'))
			: ((e.other = ''),
			  (e.donateAmount = t.text().slice(1)),
			  (e.donateType = t.parents().children('.tab-container').find('li.active a').text())),
			(e.currencySymbol = e.$currencyType.val());
		var n = e.donateAmount + '-' + e.currencySymbol + '-' + e.donateType;
		if ('undefined' != typeof digitalData && null !== digitalData && 'undefined' != typeof trackEvent) {
			var a = n.toLowerCase();
			(digitalData.event.donation.currencyCode = e.currencySymbol), trackEvent(a, 'donate-hub');
		}
	},
	init: function (t, e) {
		var n = STCUK[e];
		n.setDomElements(t, e), n.toggleOverlap(), n.updateArrowPosition(), n.bindEvents();
	}
};
STCUK.donationLiveFeed = {
	bindEvents: function () {
		var n = STCUK[this.invocationName];
		'loading' !== document.readyState
			? n.fetchDonations()
			: document.addEventListener('DOMContentLoaded', n.fetchDonations.bind(n));
	},
	setDomElements: function (n, e) {
		var t = STCUK[e];
		(t.$el = n),
			(t.invocationName = e),
			(t.$donationFeed = n.querySelector('.donation-feed')),
			(t.$donationTemplate = n.querySelector('.donation-template')),
			(t.currencyMap = { GBP: '£', USD: '$', EUR: '€' }),
			(t.pauseDelay = 2e3),
			(t.donationsUrl = n.dataset.donationsUrl),
			(t.noRecentDonations = n.dataset.noRecentDonations);
		var a = document.querySelectorAll('.campaign-mappings div[data-campaign-id]');
		(t.campaignIds = ''),
			a.forEach(function (n) {
				(t.campaignIds += t.campaignIds ? '&' : ''), (t.campaignIds += 'campaignId=' + n.dataset.campaignId);
			});
	},
	fetchDonations: function () {
		var n = STCUK[this.invocationName];
		fetch(n.donationsUrl + '?' + n.campaignIds + '&size=' + n.noRecentDonations)
			.then(function (n) {
				return n.json();
			})
			.then(function (e) {
				n.initDonationFeed(e);
			})
			.catch(function (n) {
				console.log(n);
			});
	},
	initDonationFeed: function (n) {
		var e = STCUK[this.invocationName];
		n.forEach(function (n) {
			var t = e.constructDonation(n);
			e.$donationFeed.appendChild(t);
		}),
			n.length > 0 &&
				setTimeout(function () {
					e.animate(0);
				}, e.pauseDelay);
	},
	constructDonation: function (n) {
		var e = STCUK[this.invocationName],
			t = document.createElement('div');
		t.classList.add('donation'),
			(t.innerHTML = e.$donationTemplate.innerHTML),
			(t.querySelector('.name').innerText = n.firstName),
			(t.querySelector('.time').innerText = e.getTimeSinceDonation(n.dateCreated));
		var a = t.querySelector('.info'),
			o = e.getCampaignMappingHTML(n.campaign);
		for (var i in (o && (a.innerHTML = o), n)) {
			var c = n[i];
			'amount' === i && (c = '' + e.currencyMap[n.currencyCode] + c),
				(a.innerHTML = a.innerHTML.replace('{' + i + '}', c));
		}
		return t;
	},
	getCampaignMappingHTML: function (n) {
		var e = document.querySelector('.campaign-mappings [data-campaign-id="' + n + '"]');
		return e ? e.innerHTML : null;
	},
	animate: function (n) {
		var e = STCUK[this.invocationName],
			t = n + e.getDonationWidth(),
			a = setInterval(function () {
				n === t
					? (clearInterval(a),
					  setTimeout(function () {
							var t = e.getLatestDonation(),
								a = t.cloneNode(!0);
							e.$donationFeed.appendChild(a), t.classList.add('latest'), e.animate(n);
					  }, e.pauseDelay))
					: (n++, (e.$donationFeed.style.left = '-' + n + 'px'));
			}, 5);
	},
	getDonationWidth: function () {
		return STCUK[this.invocationName].getLatestDonation().offsetWidth;
	},
	getLatestDonation: function () {
		return STCUK[this.invocationName].$donationFeed.querySelector('.donation:not(.donation-template):not(.latest)');
	},
	getTimeSinceDonation: function (n) {
		var e = new Date(),
			t = new Date(n.replace(/\s/, 'T') + ':00'),
			a = (e.getTime() - t.getTime()) / 1e3 / 60,
			o = a / 60,
			i = '',
			c = void 0;
		if (o > 1) {
			var r = Math.floor(o);
			(c = 60 * (o - r)), (i = r + ' hour' + (1 === r ? '' : 's') + ' and ');
		} else c = a;
		var d = Math.ceil(c);
		return (i += d + ' minute' + (1 === d ? '' : 's') + ' ago');
	},
	init: function (n, e) {
		var t = STCUK[e];
		t.setDomElements(n, e), t.bindEvents(e);
	}
};
STCUK.donationTracking = {
	bindEvents: function () {
		var e = STCUK[this.invocationName];
		e.$phoneNumber.addEventListener('change', function () {
			e.parsley.reset();
		}),
			e.$form.addEventListener('submit', function (n) {
				var t = e.$phoneNumber.value,
					a = e.$transactionReference.value,
					o = e.$amount.value,
					r = e.$currenyCode.value;
				if (!(!0 === e.parsley.validate() && t && a && o && r)) return n.preventDefault(), !1;
			});
	},
	setDomElements: function (e, n) {
		var t = STCUK[n];
		(t.invocationName = n),
			(e.dataset.invocationName = n),
			(t.$el = e),
			(t.$form = e.querySelector('form')),
			(t.$phoneNumber = e.querySelector('input[name="donation[mobile_number]"]')),
			(t.$amount = e.querySelector('input[name="donation[amount]"]')),
			(t.$transactionReference = e.querySelector('input[name="donation[scuk_transaction_id]"]')),
			(t.$currenyCode = e.querySelector('input[name="donation[currency_code]"]')),
			(t.parsley = $(t.$phoneNumber).parsley());
	},
	init: function (e, n) {
		var t = STCUK[n];
		t.setDomElements(e, n), t.bindEvents();
	}
};
STCUK.donatePod = {
	bindEvents: function () {
		var e = STCUK[this.invocationName],
			t = _.debounce(e.resizeOverlayPanel.bind(e), 100);
		if (
			(window.addEventListener('resize', t),
			e.$panelTabs.length > 1 &&
				e.$panelTabs.forEach(function (t) {
					t.addEventListener('click', function () {
						t !== e.getActiveTab() && e.toggleActivePanel();
					});
				}),
			e.$selectAmountBtns.forEach(function (t) {
				t.addEventListener('click', e.toggleAmount.bind(e));
			}),
			e.$singlePanel &&
				(e.$singleOtherAmount.addEventListener('keyup', e.checkOtherFieldIsValid.bind(e)),
				e.$singleOtherAmount.addEventListener('focus', e.toggleFade.bind(e)),
				e.$singleOtherAmount.addEventListener('blur', e.toggleFade.bind(e)),
				e.$singleCloseOverlayIcon.addEventListener('click', e.closeErrorPanel.bind(e))),
			e.$monthlyPanel &&
				(e.$monthlyOtherAmount.addEventListener('keyup', e.checkOtherFieldIsValid.bind(e)),
				e.$monthlyOtherAmount.addEventListener('focus', e.toggleFade.bind(e)),
				e.$monthlyOtherAmount.addEventListener('blur', e.toggleFade.bind(e))),
			e.$amountContainers.forEach(function (t) {
				t.addEventListener('click', e.clearOtherAmount.bind(e));
			}),
			e.$donateBtns.forEach(function (t) {
				t.addEventListener('click', e.handleDonateBtnClick.bind(e));
			}),
			e.$formLinkBtns.forEach(function (t) {
				t.addEventListener('click', e.formPayment.bind(e));
			}),
			e.$closeOverlayBtns.forEach(function (t) {
				t.addEventListener('click', e.closeDonateMethodOverlay.bind(e));
			}),
			e.$retryPaymentBtns.forEach(function (t) {
				t.addEventListener('click', e.closeErrorPanel.bind(e));
			}),
			window.addEventListener('load', e.handleReturnedFromPaymentError.bind(e)),
			window.IntersectionObserver && e.$stickyCta && e.isMobile)
		) {
			var n = '-' + STCUK.utility.getHeaderHeight() + 'px';
			new IntersectionObserver(e.toggleStickyCtaVisibility.bind(e), {
				root: null,
				rootMargin: n + ' 0px 0px 0px',
				threshold: 0
			}).observe(e.$donatePanelContainer),
				e.$stickyCta.addEventListener('click', e.scrollBackToDonatePod.bind(e));
		}
	},
	setDomElements: function (e, t) {
		var n = STCUK[t];
		(n.$el = e),
			(e.dataset.invocationName = t),
			(n.invocationName = t),
			(n.formUrl = null),
			(n.donationDetails = null),
			(n.donatePodValue = null),
			(n.donationType = null),
			(n.$singlePanel = e.querySelector('.single-payment')),
			(n.$monthlyPanel = e.querySelector('.monthly-payment')),
			(n.$donatePodPanels = e.querySelectorAll('.donate-pod-panel')),
			(n.$donateBtns = e.querySelectorAll('.donate-btn:not(.sticky-button)')),
			(n.$amountContainers = e.querySelectorAll('.donate-pod-amount-container')),
			(n.$selectAmountBtns = e.querySelectorAll('.amount-select-btn')),
			(n.$donateHeader = document.querySelector('.header .header-donate')),
			(n.$donateHeaderDonateButton = document.querySelector('.header .header-donate')),
			(n.$stickyCta = e.querySelector('.sticky-cta')),
			(n.$stickyCtaDonateBtn = e.querySelector('.sticky-cta .donate-btn')),
			(n.isMobile = STCUK.utility.checkMobileResolution()),
			n.$singlePanel &&
				((n.$singleAmountBtns = n.$singlePanel.querySelectorAll('.amount-select-btn')),
				(n.$selectedSingleAmount = n.$singlePanel.querySelector('.amount .active')),
				(n.$selectedSingleDescription = n.$singlePanel.querySelector('.description:not(.hidden)')),
				(n.$singleDescriptionList = n.$singlePanel.querySelectorAll('.description')),
				(n.$singleOtherAmount = n.$singlePanel.querySelector('.other-amount-input')),
				(n.$singleErrorMessage = n.$singlePanel.querySelector('.error-message')),
				(n.singleDefaultErrText = n.$singleErrorMessage.textContent),
				(n.$singleDonateOverlay = e.querySelector('.single-overlay')),
				(n.$singleDonatingHeading = n.$singleDonateOverlay.querySelector('.donating-heading')),
				(n.singleDonatingHeadingInitVal = n.$singleDonatingHeading.textContent),
				(n.$singleGiftAidCheckbox = n.$singleDonateOverlay.querySelector('.gift-aid-checkbox')),
				(n.$singleGiftAidLabel = n.$singleDonateOverlay.querySelector('.gift-aid-label')),
				(n.$singleGiftAidLabelInitialVal = n.$singleGiftAidLabel.textContent),
				(n.$singleFormsEngineError = n.$singleDonateOverlay.querySelector('.forms-engine-error')),
				(n.$applePayBtn = n.$singleDonateOverlay.querySelector('.apple-pay-btn')),
				(n.$singleFormsEngineError.$primaryErrorMessage = e.querySelector('.error-message-primary')),
				(n.$singleFormsEngineError.$secondaryErrorMessage = e.querySelector('.error-message-secondary')),
				(n.$singleFormsEngineError.dataset.paymentErrorCount = 0),
				(n.$singleCloseOverlayIcon = n.$singleFormsEngineError.querySelector('.tooltip-tt-close')),
				(n.$singleTab = e.querySelector('.single-tab')),
				(n.actionUrl = n.$singleDonateOverlay.dataset.actionUrl)),
			n.$monthlyPanel &&
				((n.$monthlyAmountBtns = n.$monthlyPanel.querySelectorAll('.amount-select-btn')),
				(n.$selectedMonthlyAmount = n.$monthlyPanel.querySelector('.amount .active')),
				(n.$selectedMonthlyDescription = n.$monthlyPanel.querySelector('.description:not(.hidden)')),
				(n.$monthlyDescriptionList = n.$monthlyPanel.querySelectorAll('.description')),
				(n.$monthlyOtherAmount = n.$monthlyPanel.querySelector('.other-amount-input')),
				(n.$monthlyErrorMessage = n.$monthlyPanel.querySelector('.error-message')),
				(n.monthlyMinAmountErrorMessage = n.$monthlyOtherAmount.dataset.minAmountMessage),
				(n.monthlyMaxAmountErrorMessage = n.$monthlyOtherAmount.dataset.maxAmountMessage),
				(n.monthlyDefaultErrText = n.$monthlyErrorMessage.textContent),
				(n.$monthlyDonateOverlay = e.querySelector('.monthly-overlay')),
				(n.$monthlyDonatingHeading = n.$monthlyDonateOverlay.querySelector('.donating-heading')),
				(n.monthlyDonatingHeadingInitVal = n.$monthlyDonatingHeading.textContent),
				(n.$monthlyGiftAidCheckbox = n.$monthlyDonateOverlay.querySelector('.gift-aid-checkbox')),
				(n.$monthlyGiftAidLabel = n.$monthlyDonateOverlay.querySelector('.gift-aid-label')),
				(n.$monthlyGiftAidLabelInitialVal = n.$monthlyGiftAidLabel.textContent),
				(n.$monthlyFormsEngineError = n.$monthlyDonateOverlay.querySelector('.forms-engine-error')),
				(n.$paypalMonthlyBtn = n.$monthlyDonateOverlay.querySelector('.paypal-btn')),
				(n.$payPalDatePicker = n.$monthlyDonateOverlay.querySelector('.paypal-date-picker')),
				(n.$monthlyPaymentPanel = n.$monthlyDonateOverlay.querySelector('.payment-options')),
				(n.$paypalRgStartDate = n.$monthlyDonateOverlay.querySelector('.payment-start-date')),
				(n.$monthlyTab = e.querySelector('.monthly-tab')),
				n.actionUrl || (n.actionUrl = n.$monthlyDonateOverlay.dataset.actionUrl)),
			(n.$panelTabsContainer = e.querySelector('.donate-pod-panel-tabs')),
			(n.$panelTabs = n.$panelTabsContainer.querySelectorAll('li')),
			(n.$applePayPaymentIcon = e.querySelector('.payment-icons .apple-pay')),
			(n.$formLinkBtns = e.querySelectorAll('.form-link-btn')),
			(n.$closeOverlayBtns = e.querySelectorAll('.close-overlay')),
			(n.$retryPaymentBtns = e.querySelectorAll('.retry-payment-btn')),
			(n.isCustomAmt = !1),
			(n.currencyRegex = new RegExp('[£$€]')),
			(n.$pageHeaderHeight = document.querySelector('.ui-component.header').clientHeight),
			(n.$bodyTag = document.querySelector('body')),
			(n.$donatePanelContainer = e.querySelector('.donate-pod-panels-container')),
			(n.paypalLoadingMsg = n.$donatePanelContainer.dataset.paypalLoadingScreenMsg || '');
	},
	toggleFade: function (e) {
		var t = STCUK[this.invocationName],
			n = e.currentTarget,
			o = n.closest('.donate-pod-panel'),
			a = o.querySelector('.donate-pod-amount-container'),
			r = t.getActiveDescription(o);
		'focus' === e.type && (a.classList.add('faded'), r.classList.add('faded')),
			'blur' === e.type && '' === n.value && (a.classList.remove('faded'), r.classList.remove('faded'));
	},
	toggleAmount: function (e) {
		var t = STCUK[this.invocationName],
			n = e.currentTarget,
			o = '';
		'single' === t.getDonationType(n.closest('.donate-pod-panel'))
			? (t.$selectedSingleAmount.classList.remove('active'),
			  (t.$selectedSingleAmount = n),
			  (o = t.getNewDescription(t.$singlePanel, n.getAttribute('data-btn-index'))),
			  t.$selectedSingleDescription.classList.add('hidden'),
			  (t.$selectedSingleDescription = o))
			: (t.$selectedMonthlyAmount.classList.remove('active'),
			  (t.$selectedMonthlyAmount = n),
			  (o = t.getNewDescription(t.$monthlyPanel, n.getAttribute('data-btn-index'))),
			  t.$selectedMonthlyDescription.classList.add('hidden'),
			  (t.$selectedMonthlyDescription = o)),
			n.classList.add('active'),
			o.classList.remove('hidden');
	},
	getNewDescription: function (e, t) {
		return e.querySelector("[data-description-index='" + t + "']");
	},
	clearOtherAmount: function (e) {
		var t = STCUK[this.invocationName],
			n = e.target.closest('.donate-pod-panel-content'),
			o = n.querySelector('.other-amount-input'),
			a = n.querySelector('.other-amount-wrapper .error-message'),
			r = t.getPanelState().activePanel,
			i = t.getActiveDescription(r),
			l = n.querySelector('.donate-pod-amount-container');
		(o.value = ''), o.blur(), l.classList.remove('faded'), i.classList.remove('faded'), t.hideValidationErr(o, a);
	},
	toggleActivePanel: function () {
		var e = STCUK[this.invocationName];
		e.toggleActiveList(e.$panelTabs), e.toggleActiveList(e.$donatePodPanels);
	},
	toggleActiveList: function (e) {
		var t = void 0;
		e.forEach(function (e) {
			e.classList.contains('active') && (t = e);
		}),
			e.forEach(function (e) {
				e !== t ? e.classList.add('active') : e.classList.remove('active');
			});
	},
	checkOtherFieldIsValid: function (e) {
		var t = STCUK[this.invocationName],
			n = e.target,
			o = n.checkValidity(),
			a = n.closest('.other-amount-wrapper').querySelector('.error-message');
		!1 === o
			? (t.singleDefaultErrText && (t.$singleErrorMessage.textContent = t.singleDefaultErrText),
			  t.monthlyDefaultErrText && (t.$monthlyErrorMessage.textContent = t.monthlyDefaultErrText),
			  t.showValidationErr(n, a))
			: t.hideValidationErr(n, a);
	},
	showValidationErr: function (e, t) {
		t.classList.remove('hidden'), e.classList.add('error');
	},
	hideValidationErr: function (e, t) {
		t.classList.add('hidden'), e.classList.remove('error');
	},
	getActiveTab: function () {
		var e = STCUK[this.invocationName].$panelTabs,
			t = void 0;
		return (
			e.forEach(function (e) {
				e.classList.contains('active') && (t = e);
			}),
			t
		);
	},
	getPanelState: function () {
		var e = STCUK[this.invocationName],
			t = void 0,
			n = void 0;
		return (
			e.$donatePodPanels.forEach(function (e) {
				e.classList.contains('active') ? (t = e) : (n = e);
			}),
			{ activePanel: t, nonActivePanel: n }
		);
	},
	getDonationType: function (e) {
		return e.getAttribute('data-donation-type');
	},
	getActiveAmount: function (e) {
		var t = STCUK[this.invocationName];
		return 'single' === e
			? t.$selectedSingleAmount.textContent.trim()
			: t.$selectedMonthlyAmount.textContent.trim();
	},
	getActiveDescription: function (e) {
		var t = STCUK[this.invocationName],
			n = '';
		return (
			e === t.$singlePanel
				? t.$singleDescriptionList.forEach(function (e) {
						e.classList.contains('hidden') || (n = e);
				  })
				: e === t.$monthlyPanel &&
				  t.$monthlyDescriptionList.forEach(function (e) {
						e.classList.contains('hidden') || (n = e);
				  }),
			n
		);
	},
	getGiftAidVal: function () {
		var e = STCUK[this.invocationName];
		return 'single' === e.donationType ? e.$singleGiftAidCheckbox.checked : e.$monthlyGiftAidCheckbox.checked;
	},
	getPresetAmountEl: function (e) {
		return e.querySelector('.amount:not(.hidden)');
	},
	positionOverlayPanel: function (e, t) {
		var n = STCUK[this.invocationName],
			o = e.getBoundingClientRect(),
			a = n.$panelTabs[0].offsetHeight;
		n.isDesktopDimensions()
			? ((t.style.width = Math.ceil(o.width) + 'px'),
			  (t.style.height = o.height + 'px'),
			  (t.style.top = a + 'px'),
			  (t.style.left = '0'))
			: ((t.style.top = '0'), (t.style.left = '0'), (t.style.width = '100vw'), (t.style.height = '100vh'));
	},
	resizeOverlayPanel: function () {
		var e = STCUK[this.invocationName],
			t = e.getPanelState().activePanel,
			n = e.getActiveDonateMethodOverlay(t);
		e.positionOverlayPanel(t, n);
	},
	getActiveDonateMethodOverlay: function (e) {
		var t = STCUK[this.invocationName];
		return 'single' === t.getDonationType(e) ? t.$singleDonateOverlay : t.$monthlyDonateOverlay;
	},
	isDesktopDimensions: function () {
		return window.matchMedia('(min-width: 992px)').matches;
	},
	showOrHidePaymentMethods: function (e, t) {
		var n = STCUK[this.invocationName];
		'£' !== t.currencyVal
			? 'single' === e
				? n.$applePayBtn && n.$applePayBtn.classList.add('hidden')
				: n.$paypalMonthlyBtn && n.$paypalMonthlyBtn.classList.add('hidden')
			: 'single' === e
			? n.$applePayBtn && STCUK.payments.applePay.canUserMakePayments && n.$applePayBtn.classList.remove('hidden')
			: n.$paypalMonthlyBtn && n.$paypalMonthlyBtn.classList.remove('hidden');
	},
	launchDonationMethodOverlay: function (e) {
		var t = STCUK[this.invocationName],
			n = t.donationDetails,
			o = t.getPanelState().activePanel,
			a = t.donationType,
			r = t.getActiveDonateMethodOverlay(o),
			i = 'single' === a ? t.$singleDonatingHeading : t.$monthlyDonatingHeading,
			l = 'single' === a ? t.singleDonatingHeadingInitVal : t.monthlyDonatingHeadingInitVal,
			s = 'single' === a ? t.$singleGiftAidLabel : t.$monthlyGiftAidLabel,
			c = 'single' === a ? t.$singleGiftAidLabelInitialVal : t.$monthlyGiftAidLabelInitialVal;
		'monthly' === a && t.$payPalDatePicker && t.populatePaypalRGStartDate(), t.positionOverlayPanel(o, r);
		var d = STCUK.utility.calculateGiftAid(n.amount);
		if (((t.donationDetails.giftAidVal = d), n.currencyVal && n.amount)) {
			var u = 0 === n.currencyIndex ? '' + n.currencyVal + n.amount : '' + n.amount + n.currencyVal,
				y = 0 === n.currencyIndex ? '' + n.currencyVal + d : '' + d + n.currencyVal;
			(i.textContent = l + ' ' + u),
				(s.textContent = c.replace(/{\w+}/, y)),
				t.$panelTabsContainer.classList.add('disabled'),
				r.classList.remove('hidden'),
				setTimeout(function () {
					t.setVerticalOffset(r), t.toggleBackgroundScroll(!1), r.classList.add('open');
				}, 100);
		}
	},
	setVerticalOffset: function (e) {
		var t = STCUK[this.invocationName].$pageHeaderHeight;
		STCUK.utility.checkMobileResolution() && (e.style.top = t + 'px');
	},
	toggleBackgroundScroll: function (e) {
		var t = STCUK[this.invocationName],
			n = STCUK.utility.checkMobileResolution();
		!e && n
			? t.$bodyTag.classList.add('no-scroll')
			: t.$bodyTag.classList.contains('no-scroll') && t.$bodyTag.classList.remove('no-scroll');
	},
	closeDonateMethodOverlay: function () {
		var e = STCUK[this.invocationName],
			t = e.getPanelState().activePanel,
			n = e.getActiveDonateMethodOverlay(t);
		n.classList.remove('open'),
			e.$panelTabsContainer.classList.remove('disabled'),
			(e.formUrl = null),
			(e.donationDetails = null),
			(e.donatePodValue = null),
			(e.donationType = null),
			e.toggleBackgroundScroll(!0),
			e.$payPalDatePicker &&
				!e.$payPalDatePicker.classList.contains('hidden') &&
				(e.$payPalDatePicker.classList.add('hidden'), e.$monthlyPaymentPanel.classList.remove('hidden')),
			setTimeout(function () {
				n.classList.add('hidden');
			}, 200);
	},
	handleDonateBtnClick: function (e) {
		var t = STCUK[this.invocationName],
			n = t.getPanelState(),
			o = n.activePanel,
			a = 'true' === o.getAttribute('data-donate-method-overlay');
		if (
			((t.formUrl = o.dataset.buttonUrl),
			(t.donationType = t.getDonationType(o)),
			(t.donatePodValue = t.getDonatePodValue()),
			!t.checkValIsValid(t.donatePodValue, t.donationType))
		)
			return !1;
		((t.donationDetails = t.parseValue(t.donatePodValue)),
		t.showOrHidePaymentMethods(t.donationType, t.donationDetails),
		a)
			? (('single' === t.donationType ? t.$singleOtherAmount : t.$monthlyOtherAmount).blur(),
			  t.launchDonationMethodOverlay(n))
			: t.redirectToForm();
	},
	setMonthlyErrorMessage: function () {
		var e = STCUK[this.invocationName],
			t = parseFloat(e.$monthlyOtherAmount.getAttribute('max')),
			n = parseFloat(e.$monthlyOtherAmount.getAttribute('min')),
			o = e.$monthlyOtherAmount.value;
		return o < n
			? (monthlyErrrMessage = e.monthlyMinAmountErrorMessage)
			: o > t
			? e.monthlyMaxAmountErrorMessage
			: void 0;
	},
	displayOtherAmountErrorMessage: function (e, t) {
		var n = STCUK[this.invocationName];
		return (
			'single' === e
				? n.showErrorFlicker(n.$singleErrorMessage, n.$singleOtherAmount, 500)
				: 'monthly' === e &&
				  ((n.$monthlyErrorMessage.textContent = n.setMonthlyErrorMessage(t)),
				  n.showErrorFlicker(n.$monthlyErrorMessage, n.$monthlyOtherAmount, 500)),
			!1
		);
	},
	checkMinMaxValue: function (e, t, n, o) {
		var a = STCUK[this.invocationName],
			r = parseFloat(e.replace(/[£$€]/, '')),
			i = null,
			l = null,
			s = void 0;
		if (r < n) {
			var c = a.parseValue(e);
			return (
				'single' === t
					? ((i = a.$singleErrorMessage),
					  (l = a.$singleOtherAmount),
					  (s = 'The minimum donation value is ' + c.currencyVal + n))
					: ((i = a.$monthlyErrorMessage), (l = a.$monthlyOtherAmount), (s = a.monthlyMinAmountErrorMessage)),
				{ errorMsg: s, errMsgEl: i, errField: l }
			);
		}
		return (
			!(r > o) ||
			('monthly' === t && ((i = a.$monthlyErrorMessage), (l = a.$monthlyOtherAmount)),
			{ errorMsg: a.monthlyMaxAmountErrorMessage, errMsgEl: i, errField: l })
		);
	},
	checkValIsValid: function (e, t) {
		var n = STCUK[this.invocationName],
			o =
				'single' === t
					? parseFloat(n.$singleOtherAmount.getAttribute('min'))
					: parseFloat(n.$monthlyOtherAmount.getAttribute('min')),
			a = void 0;
		if (('monthly' === t && (a = parseFloat(n.$monthlyOtherAmount.getAttribute('max'))), !e))
			return n.displayOtherAmountErrorMessage(t, e);
		if ('single' === t) {
			var r = n.checkMinMaxValue(e, t, o);
			return !r.errorMsg || (n.handleInvalidAmount(r), !1);
		}
		if ('monthly' === t) {
			var i = n.checkMinMaxValue(e, t, o, a);
			return !i.errorMsg || (n.handleInvalidAmount(i), !1);
		}
	},
	handleInvalidAmount: function (e) {
		var t = STCUK[this.invocationName];
		(e.errMsgEl.textContent = e.errorMsg),
			t.showValidationErr(e.errField, e.errMsgEl),
			t.showErrorFlicker(e.errField, e.errMsgEl, 500);
	},
	formPayment: function (e) {
		e.preventDefault();
		var t = STCUK[this.invocationName],
			n = t.getGiftAidVal();
		sessionStorage.setItem('giftAidChecked', n), t.redirectToForm();
	},
	checkMinValue: function (e, t, n) {
		var o = STCUK[this.invocationName],
			a = null,
			r = null;
		return (
			parseFloat(e.replace(/[£$€]/, '')) < t &&
			('single' === n
				? ((a = o.$singleErrorMessage), (r = o.$singleOtherAmount))
				: ((a = o.$monthlyErrorMessage), (r = o.$monthlyOtherAmount)),
			{ errorMsg: 'The minimum donation value is ' + o.parseValue(e).currencyVal + t, errMsgEl: a, errField: r })
		);
	},
	showErrorFlicker: function (e, t, n) {
		var o = STCUK.utility;
		o.flicker(e, n), o.flicker(t, n);
	},
	getDonatePodValue: function () {
		var e = STCUK[this.invocationName],
			t = e.donationType,
			n = 'single' === t ? e.$singleErrorMessage : e.$monthlyErrorMessage,
			o = 'single' === t ? e.$singleOtherAmount : e.$monthlyOtherAmount;
		if (n.classList.contains('hidden'))
			return (e.isCustomAmt = '' !== o.value), e.isCustomAmt ? o.value : e.getActiveAmount(t);
	},
	parseValue: function (e) {
		var t = STCUK[this.invocationName],
			n = { currencyVal: '£', currency: 'GBP', amount: '0', currencyIndex: 0 },
			o = e.match(t.currencyRegex);
		if (null !== o) {
			switch (o[0]) {
				case '$':
					(n.currencyVal = '$'), (n.currency = 'USD');
					break;
				case '€':
					(n.currencyVal = '€'), (n.currency = 'EUR');
			}
			(n.amount = e.replace(o[0], '')), (n.currencyIndex = o.index ? o.index : 0);
		} else n.amount = e;
		return n;
	},
	redirectToForm: function () {
		var e = STCUK[this.invocationName],
			t = e.donationDetails,
			n = STCUK.analyticsV2,
			o = STCUK.utility;
		window.sessionStorage && Modernizr.sessionstorage
			? (sessionStorage.setItem('donationAmount', t.amount),
			  sessionStorage.setItem('donationType', e.donationType),
			  sessionStorage.setItem('currency', t.currency),
			  sessionStorage.setItem('currencyVal', t.currencyVal),
			  sessionStorage.setItem('currencyText', e.donatePodValue))
			: (o.cookie.setItem('donationAmount', t.amount, null, '/'),
			  o.cookie.setItem('donationType', e.donationType, null, '/'),
			  o.cookie.setItem('currency', t.currency, null, '/'),
			  o.cookie.setItem('currencyVal', t.currencyVal, null, '/'),
			  o.cookie.setItem('currencyText', e.donatePodValue, null, '/')),
			n.handleDonateSubmitAnalytics({
				donationAmount: t.amount,
				donationType: e.donationType,
				currency: t.currency,
				currencyVal: t.currencyVal,
				currencyText: e.donatePodValue,
				ifCustomAmt: e.isCustomAmt
			}),
			(location.href = e.formUrl);
	},
	submitFormPost: function (e) {
		var t = STCUK[this.invocationName],
			n = STCUK.utility;
		STCUK.captcha.fetchToken(function (o) {
			(e.formdata.form_attributes.token = o),
				fetch(t.actionUrl, {
					method: 'post',
					headers: { 'Content-Type': 'application/json' },
					body: n.processFormPostData(e)
				})
					.then(function (e) {
						return e.json();
					})
					.then(function (t) {
						if (t.errorMessage) throw new Error('Payment rejected by Forms Engine: ' + t.errorMessage);
						(t.formdata = e.formdata),
							n.setSessionData('thankYouPageData', JSON.stringify(t)),
							n.setSessionData('first-name', t.first_name),
							n.setSessionData('referenceId', t.id),
							n.setSessionData('mobile-wallet-payment', 'true'),
							sessionStorage.setItem('accessThankYouPage', 'true'),
							n.clearSessionStorage('formName'),
							n.clearSessionStorage('campaignName'),
							n.clearSessionStorage('fundName'),
							(window.location = t.thankYouPage);
					})
					.catch(function (n) {
						console.error(n);
						var o = e.formdata.donation_method_acc.donation_method_rbg;
						'apple' === o && STCUK.applePay.enableApplePayBtn(), t.handleFormsEngineError(o);
					});
		});
	},
	handleFormsEngineError: function (e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			n = arguments[2],
			o = STCUK[this.invocationName],
			a = 'paypal' === e ? 'Paypal' : 'Apple pay',
			r = 'paypal' === e ? 'Paypal account' : 'Apple pay wallet';
		STCUK.loader.hide();
		var i = 'single' === o.donationType ? o.$singleDonateOverlay : o.$monthlyDonateOverlay,
			l = 'single' === o.donationType ? o.$singleFormsEngineError : o.$monthlyFormsEngineError,
			s = parseInt(l.dataset.paymentErrorCount);
		t &&
			(o.$panelTabs.forEach(function (e) {
				e.classList.contains(o.donationType + '-tab') && e.click();
			}),
			(s = parseInt(n)));
		var c = l.querySelector('h2'),
			d = c.textContent;
		c.textContent = d.replace(/{\w+}/, a);
		var u = l.querySelectorAll('.error-msg-text');
		if (
			(u.forEach(function (e) {
				var t = e.textContent;
				e.textContent = t.replace(/{\w+}/, r);
			}),
			o.showCorrectErrorMsg(l, s),
			i.classList.add('reduce-z-index'),
			l.classList.remove('hidden'),
			l.classList.add('open'),
			t)
		) {
			var y = o.getPanelState(),
				m = y.activePanel.querySelector('.donate-btn');
			m.click();
		}
	},
	handleReturnedFromPaymentError: function () {
		var e = STCUK[this.invocationName];
		if ('true' === STCUK.utility.getParameterByName('paymentError')) {
			var t = STCUK.utility.getParameterByName('paymentErrorMethod');
			e.donationType = STCUK.utility.getParameterByName('donationType');
			var n = STCUK.utility.getParameterByName('errMsgNum');
			e.handleFormsEngineError(t, !0, n);
		}
	},
	showCorrectErrorMsg: function (e, t) {
		t > 1
			? (e.querySelector('.error-message-primary').classList.add('hidden'),
			  e.querySelector('.error-message-secondary').classList.remove('hidden'))
			: (e.dataset.paymentErrorCount = '2');
	},
	closeErrorPanel: function (e) {
		var t = STCUK[this.invocationName],
			n = 'single' === t.donationType ? t.$singleDonateOverlay : t.$monthlyDonateOverlay,
			o = 'single' === t.donationType ? t.$singleFormsEngineError : t.$monthlyFormsEngineError;
		n.classList.remove('reduce-z-index'),
			o.classList.remove('open'),
			o.classList.add('hidden'),
			t.$singleCloseOverlayIcon.classList.contains('open') &&
				(t.$singleCloseOverlayIcon.classList.remove('open'), t.$singleCloseOverlayIcon.classList.add('hidden'));
	},
	getStartDate: function () {
		var e = STCUK[this.invocationName].$monthlyDonateOverlay.querySelector(
			'.radio-button-list .radio-button:checked'
		).value;
		return parseInt(e.replace(/(st|nd|rd|th)/, ''));
	},
	populatePaypalRGStartDate: function () {
		var e = 'donatePod' === this.invocationName ? STCUK[this.invocationName] : this.donatePod,
			t = e.getStartDate(),
			n = STCUK.paypal.calculateRGStartDate(t).toLocaleDateString('en-GB');
		e.$paypalRgStartDate.textContent = n;
	},
	scrollBackToDonatePod: function (e) {
		e.stopPropagation(), e.stopImmediatePropagation(), window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	},
	toggleStickyCtaVisibility: function (e, t) {
		var n = STCUK[this.invocationName];
		e.forEach(function (e) {
			e.isIntersecting ? n.$stickyCta.classList.add('hide') : n.$stickyCta.classList.remove('hide');
		});
	},
	init: function (e, t) {
		var n = STCUK[t],
			o = STCUK.captcha;
		n.setDomElements(e, t),
			n.bindEvents(),
			STCUK.donatePodAnalytics.setAnalytics(n),
			setTimeout(function () {
				o.showPanel(), o.setFixed();
			}, 1e3);
	}
};
STCUK.eventSearch = {
	bindEvents: function () {
		var e = STCUK[this.invocationName];
		e.$eventSearchBtn.addEventListener('click', e.search.bind(e)),
			e.$eventSortDateBtn.addEventListener('click', e.setSort.bind(e)),
			e.$eventSortLocationBtn.addEventListener('click', e.setSort.bind(e)),
			e.$startDateClearBtn.addEventListener('click', e.clearDatePicker.bind(e, e.$startDateClearBtn)),
			e.$endDateClearBtn.addEventListener('click', e.clearDatePicker.bind(e, e.$endDateClearBtn)),
			e.$locationClearBtn.addEventListener('click', e.clearLocation.bind(e)),
			window.addEventListener('load', e.initLocationAutoComplete.bind(e));
	},
	setDomElements: function (e, t) {
		(this.$el = e),
			(e.dataset.invocationName = t),
			(this.invocationName = t),
			(this.$eventNameField = e.querySelector('.event-name')),
			(this.$eventCategoryField = e.querySelector('.event-category')),
			(this.$startDate = e.querySelector('.event-start-date')),
			(this.$endDate = e.querySelector('.event-end-date')),
			(this.$startDateCalendar = e.querySelector('.event-start-date+.ui-datepicker-trigger')),
			(this.$endDateCalendar = e.querySelector('.event-end-date+.ui-datepicker-trigger')),
			(this.startPicker = null),
			(this.endPicker = null),
			(this.today = new Date()),
			(this.$eventSearchBtn = e.querySelector('.event-search-btn')),
			(this.searchUrl = this.$eventSearchBtn.getAttribute('data-event-search-url')),
			(this.$eventDropdown = e.querySelector('.event-category')),
			(this.dropdownUrl = e.querySelector('.event-holder.input-single').getAttribute('data-filter-type')),
			(this.$eventSearchResults = e.querySelector('.event-search-results')),
			(this.$eventSortDateBtn = e.querySelector('.event-sort-date')),
			(this.$eventSortLocationBtn = e.querySelector('.event-sort-location')),
			(this.$noResultsDisplay = e.querySelector('.no-results')),
			(this.$resultsCounter = e.querySelector('.results-counter')),
			(this.$startDateClearBtn = e.querySelector('.start-date.clear-date')),
			(this.$endDateClearBtn = e.querySelector('.end-date.clear-date')),
			(this.$locationClearBtn = e.querySelector('#autocomplete+.clear-btn')),
			(this.$locationInputField = e.querySelector('#autocomplete'));
	},
	initLocationAutoComplete: function () {
		var e = STCUK[this.invocationName];
		(e.$eventLocationField = new google.maps.places.Autocomplete(e.$locationInputField, {
			types: ['(cities)'],
			componentRestrictions: { country: 'uk' }
		})),
			e.search(),
			e.$eventLocationField.addListener('place_changed', function () {
				e.$locationClearBtn.style.visibility = 'visible';
			}),
			e.$locationInputField.addEventListener('input', function (t) {
				'' === t.target.value && e.clearLocation();
			});
	},
	search: function () {
		var e = STCUK[this.invocationName],
			t = JSON.stringify(this.buildQuery());
		$.ajax({
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			url: this.searchUrl,
			data: t,
			success: function (t) {
				e.displayResults(t.hits.hits);
			}
		});
	},
	clearLocation: function () {
		var e = STCUK[this.invocationName];
		(e.$locationInputField.value = ''),
			e.$eventLocationField.set('place', null),
			(e.$locationClearBtn.style.visibility = 'hidden');
	},
	setSort: function (e) {
		var t = e.target,
			n = (e.type, STCUK[this.invocationName]);
		t === n.$eventSortDateBtn
			? (n.$eventSortDateBtn.setAttribute('data-role-sort', 'active'),
			  n.$eventSortLocationBtn.removeAttribute('data-role-sort'))
			: (n.$eventSortDateBtn.removeAttribute('data-role-sort'),
			  n.$eventSortLocationBtn.setAttribute('data-role-sort', 'active')),
			n.search();
	},
	buildQuery: function () {
		var e = STCUK[this.invocationName],
			t = e.$eventNameField.value,
			n = e.$eventLocationField.getPlace(),
			a = e.$eventCategoryField.value,
			i = e.$startDate.value,
			r = e.$endDate.value,
			o = {
				query: { bool: { must: [{ range: { event_date: { gte: i || 'now', format: 'dd/MM/yyyy' } } }] } },
				sort: []
			};
		if (n && n.geometry) {
			var s = n.geometry.location.lat(),
				l = n.geometry.location.lng();
			o.query.bool.filter = { geo_distance: { distance: '200km', location: { lat: s, lon: l } } };
		}
		if (e.$eventSortDateBtn.hasAttribute('data-role-sort')) o.sort[0] = { event_start_date: 'asc' };
		else if (n && n.geometry && e.$eventSortLocationBtn.hasAttribute('data-role-sort')) {
			var c = n.geometry.location.lat(),
				d = n.geometry.location.lng();
			o.sort[0] = { _geo_distance: { location: { lat: c, lon: d }, order: 'asc', unit: 'km' } };
		} else o.sort[0] = { _score: 'desc' };
		return (
			r && (o.query.bool.must[0].range.event_date.lte = r),
			t &&
				((o.query.bool.should = []),
				_.each(t.split(' '), function (e) {
					var t = o.query.bool.should.length;
					o.query.bool.should[t] = { term: { 'jcr:title': e.toLowerCase().replace(/"/g, '&quot;') } };
				}),
				(o.query.bool.minimum_should_match = 1)),
			a && (o.query.bool.must[2] = { match: { 'cq:tags': a } }),
			o
		);
	},
	displayResults: function (e) {
		var t = STCUK[this.invocationName];
		e.length > 0
			? ((t.$noResultsDisplay.style.display = 'none'),
			  (t.$resultsCounter.innerHTML = e.length + ' result' + (e.length > 1 ? 's' : '') + ' found'),
			  (t.$resultsCounter.style.visibility = 'visible'),
			  (t.$eventSearchResults.innerHTML = ''),
			  _.each(e, function (e) {
					t.resultsTemplate(
						e._source.image,
						e._source['jcr:title'],
						e._source.event_date.gte === e._source.event_date.lte
							? e._source.event_start_date
							: e._source.event_date.gte + ' - ' + e._source.event_date.lte,
						e._source.event_description,
						e._source.path
					);
			  }))
			: ((t.$noResultsDisplay.style.display = 'block'), (t.$resultsCounter.style.visibility = 'hidden'));
	},
	resultsTemplate: function (e, t, n, a, i) {
		var r = STCUK[this.invocationName],
			o = document.createElement('div');
		o.classList.add('event-search-result');
		var s = document.createElement('div');
		if ((s.classList.add('result-item'), e)) {
			var l = document.createElement('div');
			l.classList.add('event-image'), (l.innerHTML = '<img src="' + e + '">'), s.appendChild(l);
		}
		var c = document.createElement('div');
		c.classList.add('event-content'),
			(c.innerHTML =
				'\n\t\t\t<h3 class="event-title"></h3>\n\t\t\t<div class="event-date">' +
				n +
				'</div>\n\t\t\t<div class="event-description"></div>\n\t\t\t<div class="event-cta">\n\t\t\t\t<a href="' +
				i +
				'">Find Out More</a>\n\t\t\t</div>\n\t\t'),
			(c.querySelector('.event-title').innerText = t),
			(c.querySelector('.event-description').innerText = a),
			s.appendChild(c),
			o.appendChild(s),
			r.$eventSearchResults.appendChild(o);
	},
	padDayAndMonthValues: function (e) {
		var t = e.toString();
		return t.length < 2 ? '0' + t : t;
	},
	initDatePickers: function () {
		var e = STCUK[this.invocationName];
		(e.startPicker = new Pikaday({
			field: e.$startDate,
			format: 'DD/MM/YYYY',
			minDate: e.today,
			toString: function (t, n) {
				return (
					e.padDayAndMonthValues(t.getDate()) +
					'/' +
					e.padDayAndMonthValues(t.getMonth() + 1) +
					'/' +
					t.getFullYear()
				);
			},
			onSelect: function () {
				e.$startDateClearBtn.style.visibility = 'visible';
			},
			onOpen: function (t) {
				e.checkEndDate();
			}
		})),
			(e.endPicker = new Pikaday({
				field: e.$endDate,
				format: 'DD/MM/YYYY',
				minDate: e.today,
				toString: function (t, n) {
					return (
						e.padDayAndMonthValues(t.getDate()) +
						'/' +
						e.padDayAndMonthValues(t.getMonth() + 1) +
						'/' +
						t.getFullYear()
					);
				},
				onSelect: function () {
					e.$endDateClearBtn.style.visibility = 'visible';
				},
				onOpen: function (t) {
					e.checkStartDate();
				}
			})),
			e.$startDateCalendar.addEventListener('click', function (t) {
				t.stopPropagation(), e.$startDate.click();
			}),
			e.$endDateCalendar.addEventListener('click', function (t) {
				t.stopPropagation(), e.$endDate.click();
			});
	},
	clearDatePicker: function (e) {
		e.getAttribute('class').indexOf('start-date') > -1
			? this.startPicker.setDate(null)
			: this.endPicker.setDate(null),
			(e.style.visibility = 'hidden');
	},
	checkStartDate: function () {
		if (this.$startDate.value) {
			var e = this.$startDate.value.split('/');
			if (e.length > 0) {
				var t = new Date(e[1] + '/' + e[0] + '/' + e[2]);
				this.endPicker.setMinDate(t);
			}
		} else {
			var n = new Date().toLocaleDateString('en-GB').split('/'),
				a = new Date(n[1] + '/' + n[0] + '/' + n[2]);
			this.endPicker.setMinDate(a);
		}
	},
	checkEndDate: function () {
		var e = this.$endDate.value.split('/');
		if (e.length > 0) {
			var t = new Date(e[1] + '/' + e[0] + '/' + e[2]);
			this.startPicker.setMaxDate(t);
		}
	},
	loadPikaday: function () {
		var e = this;
		if (!window.Pikaday) {
			var t = document.createElement('link');
			(t.type = 'text/css'),
				(t.rel = 'stylesheet'),
				(t.href = '/etc/clientlibs/ui/plugins/js/pikaday/css/pikaday.min.css'),
				document.head.appendChild(t);
			var n = document.createElement('script');
			(n.type = 'text/javascript'),
				(n.src = '/etc/clientlibs/ui/plugins/js/pikaday/js/pikaday.min.js'),
				document.body.appendChild(n),
				(n.onload = function () {
					e.initDatePickers();
				});
		}
	},
	populateDropdown: function (e) {
		var t = STCUK[e];
		$.getJSON(t.dropdownUrl, function (e) {
			void 0 !== e &&
				e.forEach(function (e) {
					var n = document.createElement('option');
					(n.value = e), (n.textContent = e), t.$eventDropdown.appendChild(n);
				});
		});
	},
	init: function (e, t) {
		var n = STCUK[t];
		n.setDomElements(e, t), n.bindEvents(), n.populateDropdown(t), n.loadPikaday();
	}
};
STCUK.filterContentListing = {
	bindEvents: function () {
		this.$filterBtns.addEventListener('click', this.handleFilterBtnClick.bind(this));
	},
	setDomElements: function (t, e) {
		(this.$el = t),
			(t.dataset.invocationName = e),
			(this.invocationName = e),
			(this.$filterContentItem = t.querySelector('.filter-content-list-item')),
			(this.$filterBtns = t.querySelector('.filter-btn')),
			(this.$filterPanelContainer = t.querySelector('.filter-panel'));
	},
	handleGetData: function () {
		var t = STCUK[this.invocationName],
			e = t.$filterContentItem.getAttribute('data-filtertype'),
			n = t.$filterContentItem.getAttribute('data-searchpath'),
			i = t.$filterContentItem.getAttribute('data-resultslistingorder');
		fetch(
			'/sling/servlet/default.gb.filter.content.listing.results.json?filterType=' +
				e +
				'&searchPath=' +
				n +
				'&resultsListingOrder=' +
				i,
			{ method: 'get' }
		)
			.then(function (t) {
				return t.json();
			})
			.then(function (e) {
				var n = e.data.filterContentListing;
				(t.contentIndex = t.createContentIndex(n.panelItems)),
					t.renderPageElements(
						n.tabsItem,
						t.generateButtonMarkup,
						{ tag: 'tag', tabName: 'tabName' },
						t.$filterBtns,
						t
					),
					t.renderPageElements(
						n.panelItems,
						t.generatePanelMarkup,
						{
							tags: 'tags',
							image: 'image',
							imageAlt: 'imageAlt',
							title: 'title',
							date: 'date',
							description: 'description',
							ctaLink: 'ctaLink'
						},
						t.$filterPanelContainer,
						t,
						t.cacheContentPanels
					);
			})
			.catch(function (e) {
				console.error(e), (t.$filterBtns.textContent = "Sorry, couldn't fetch any results");
			});
	},
	getLastPartOfString: function (t) {
		return t.substring(t.lastIndexOf('/') + 1).toLowerCase();
	},
	getFilterLabel: function (t) {
		var e = STCUK[this.invocationName],
			n = '';
		return (
			t.length > 1
				? t.forEach(function (t) {
						if (t.indexOf('press-releases') > -1) {
							var i = e.getLastPartOfString(t);
							new RegExp(STCUK.regexes.year).test(i) && (n = i);
						}
				  })
				: (n = e.getLastPartOfString(t[0])),
			n
		);
	},
	createContentIndex: function (t) {
		var e = STCUK[this.invocationName],
			n = [];
		return (
			t.forEach(function (t) {
				var i = e.getFilterLabel(t.tags);
				i && !n.includes(i) && n.push(i);
			}),
			n
		);
	},
	renderPageElements: function (t, e, n, i, a, r) {
		var l = '';
		t.forEach(function (t) {
			l += e(t, n, a);
		}),
			(i.innerHTML = l),
			r && (r(a), a.selectFirstFilter());
	},
	generateButtonMarkup: function (t, e, n) {
		var i = e.tag,
			a = e.tabName,
			r = n.getLastPartOfString(t[i]),
			l = n.contentIndex.includes(t.tabName.toLowerCase());
		return (
			'<div class="filter-btn-result filter-padded-content">\n\t\t\t<div class="filter-btn-list btn-group" role="group">\n\t\t\t\t<button type="button" class="btn btn-primary btn-filter an-filters ' +
			(l ? 'json-data' : 'no-data') +
			'"  aria-pressed="false" autocomplete="off" data-filter-tag="' +
			r +
			'" ' +
			(l ? '' : 'disabled') +
			'>\n\t\t\t\t\t' +
			t[a] +
			'\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>'
		);
	},
	generatePanelMarkup: function (t, e, n) {
		var i = e.tags,
			a = e.image,
			r = e.imageAlt,
			l = e.title,
			s = e.date,
			o = e.description,
			c = e.ctaLink;
		return (
			'<div class="filter-panel-result filter-padded-content hidden" data-filter-letter="' +
			n.getFilterLabel(t[i]) +
			'">\n\t\t\t<div class="filter-panel-list ">\n\t\t\t\t<div class="result-item" data-tags="' +
			t[i][0] +
			'">\n\t\t\t\t\t' +
			(t[a]
				? (function (t) {
						return '<div class="filter-image"><img src="' + t[a] + '" alt="' + t[r] + '"></div>';
				  })(t)
				: '') +
			'\n\t\t\t\t\t<div class="filter-content">\n\t\t\t\t\t\t<h3><a href="' +
			t[c] +
			'">' +
			t[l] +
			'</a></h3>\n\t\t\t\t\t\t' +
			(t[s]
				? (function (t) {
						return '<div class="filter-date">' + t[s] + '</div>';
				  })(t)
				: '') +
			'\n\t\t\t\t\t\t<div class="filter-desc">\n\t\t\t\t\t\t' +
			t[o] +
			'\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>'
		);
	},
	cacheContentPanels: function (t) {
		t.$filterPanels = Array.prototype.slice.call(t.$filterPanelContainer.querySelectorAll('.filter-panel-result'));
	},
	handleFilterBtnClick: function (t) {
		var e = t.target;
		if (e.classList.contains('json-data')) {
			this.$activeFilterBtn && this.$activeFilterBtn.classList.remove('tab-active'),
				(this.$activeFilterBtn = e),
				e.classList.add('tab-active');
			var n = e.getAttribute('data-filter-tag'),
				i = this.filterContentPanels(n);
			this.showHidePanels(i);
		}
	},
	filterContentPanels: function (t) {
		return this.$filterPanels.filter(function (e) {
			if (e.getAttribute('data-filter-letter') === t) return !0;
		});
	},
	showHidePanels: function (t) {
		this.$currentlyShown &&
			this.$currentlyShown.forEach(function (t) {
				t.classList.add('hidden');
			}),
			t.forEach(function (t) {
				t.classList.remove('hidden');
			}),
			(this.$currentlyShown = t);
	},
	selectFirstFilter: function () {
		var t = this.$filterBtns.querySelector('.json-data');
		t && t.click();
	},
	init: function (t, e) {
		var n = STCUK[e];
		n.setDomElements(t, e), n.handleGetData(), n.bindEvents();
	}
};
STCUK.followUs = {
	bindEvents: function () {
		this.$links.addEventListener('mouseover', this.linkHover),
			this.$links.addEventListener('mouseout', this.linkHover),
			this.$links.addEventListener('click', this.handleAnalytics.bind(this));
	},
	setDomElements: function (t, e) {
		var n = t;
		(this.$el = n),
			(n.dataset.invocationName = e),
			(this.invocationName = e),
			(this.analyticsName = 'social'),
			(this.$links = n.querySelector('.follow-us-link-list'));
	},
	linkHover: function (t) {
		var e = t.target,
			n = t.type;
		thisComponent = STCUK.followUs;
		var o = STCUK.utility,
			i = e,
			l = void 0,
			s = void 0;
		'A' == i.tagName &&
			((l = i.querySelector('.follow-us-desktop-icon')),
			(s = i.querySelector('.follow-us-desktop-icon-hover')),
			'mouseover' == n && (o.toggleShow(l, 'none'), o.toggleShow(s, 'inline')),
			'mouseout' == n && (o.toggleShow(s, 'none'), o.toggleShow(l, 'inline')));
	},
	handleAnalytics: function (t) {
		var e = t.target,
			n = STCUK[this.invocationName],
			o = e.title;
		null != o &&
			'undefined' != typeof trackEvent &&
			null !== trackEvent &&
			((o = o.toLowerCase()), trackEvent(o, n.analyticsName));
	},
	init: function (t, e) {
		var n = STCUK[e];
		n.setDomElements(t, e), n.bindEvents();
	}
};
STCUK.header = {
	bindEvents: function () {
		var e = STCUK.header;
		this.$headerMobMenu &&
			this.$searchBtnWrapper &&
			(e.$openIcon.addEventListener('click', e.openMobMenu.bind(this)),
			e.$closeIcon.addEventListener('click', e.closeMobMenu.bind(this)),
			this.$searchBtnWrapper.addEventListener('click', e.animateSearchBox.bind(this)));
	},
	setDomElements: function (e) {
		(this.$el = e),
			(this.$searchInput = e.querySelector('.header-search .ui-search')),
			(this.$searchBox = e.querySelector('.search-box')),
			(this.$searchBtnWrapper = e.querySelector('.header-search .search-btn-wrapper')),
			(this.$mobileFlyOut = document.querySelector('.primary-navigation .ui-navigation-mob')),
			(this.$donateButton = e.querySelector('.header .header-donate')),
			(this.$headerMobMenu = e.querySelector('.header .header-mobile-menu')),
			(this.$openIcon = e.querySelector('.header .header-mobile-menu-open')),
			(this.$closeIcon = e.querySelector('.header .header-mobile-menu-close')),
			(this.$headerSearchImg = e.querySelector('.header-search .header-search-img')),
			(this.$bodyContent = document.querySelector('main')),
			(this.$footerContent = document.querySelector('body .footer')),
			(this.$mobilePrimaryLink = document.querySelectorAll('.ui-nav-list-item-mob')),
			(this.$mobSearchWrapper = document.querySelector('.ui-mob-flyout-search')),
			this.$mobSearchWrapper &&
				((this.$mobSearchInner = this.$mobSearchWrapper.querySelector('.ui-search')),
				(this.$mobSearchBtn = this.$mobSearchWrapper.querySelector('.search-btn'))),
			(this.$mobSearchBorder = document.querySelector('.ui-flyout-border-mob'));
	},
	openMobMenu: function () {
		var e = STCUK.header,
			t = STCUK.utility;
		t.toggleShow(e.$mobileFlyOut, 'block'),
			t.toggleShow(e.$bodyContent, 'none'),
			t.toggleShow(e.$footerContent, 'none'),
			e.$donateButton.classList.add('hide'),
			e.$openIcon.classList.add('hide'),
			e.$closeIcon.classList.remove('hide');
	},
	closeMobMenu: function () {
		var e = STCUK.header,
			t = STCUK.utility,
			o = e.$mobileFlyOut.querySelector('.ui-navigation-clicked');
		o &&
			(t.toggleShow(o.querySelector('.ui-nav-flyout-group'), 'none'),
			o.classList.remove('ui-navigation-clicked')),
			t.toggleShow(e.$mobileFlyOut, 'none'),
			t.toggleShow(e.$bodyContent, 'block'),
			t.toggleShow(e.$footerContent, 'block'),
			e.$donateButton.classList.remove('hide'),
			e.$openIcon.classList.remove('hide'),
			e.$closeIcon.classList.add('hide'),
			e.closeMobSearch();
	},
	closeMobSearch: function () {
		var e = STCUK.header;
		e.$mobSearchInner.classList.add('hidden'),
			e.$mobSearchBtn.classList.remove('hidden'),
			e.$mobSearchBorder.classList.remove('later');
	},
	animateSearchBox: function (e) {
		e.preventDefault();
		var t = STCUK.header,
			o = e.currentTarget,
			r = document.querySelector('.header-search .search-wrap');
		STCUK.utility.toggleShow(t.$searchInput, 'block'), STCUK.utility.toggleShow(o, 'none');
		var n = document.documentElement.getBoundingClientRect().width;
		n >= 345 && n <= 769 ? r.classList.add('animate-tablet') : r.classList.add('animate-desktop'),
			t.$searchBox.focus(),
			t.listenForSearchFieldBlur(t.$searchBox);
	},
	listenForSearchFieldBlur: function (e) {
		e.addEventListener('blur', STCUK.header.closeSearchField);
	},
	closeSearchField: function (e) {
		var t = STCUK.header,
			o = STCUK.utility;
		o.toggleShow(t.$searchInput, 'none'),
			o.toggleShow(t.$searchBtnWrapper, 'block'),
			e.currentTarget.removeEventListener('blur', t.closeSearchField);
	},
	init: function (e) {
		var t = STCUK.header;
		t.setDomElements(e),
			t.bindEvents(),
			STCUK.deviceProfile.init(e),
			t.$headerSearchImg && STCUK.utility.toggleShow(t.$headerSearchImg, 'block');
	}
};
STCUK.heroImage = {
	bindEvents: function () {
		var e = STCUK[this.invocationName],
			o = _.debounce(e.playHeroVidForNonMobileDevices.bind(e), 200);
		window.addEventListener('resize', o),
			window.addEventListener('load', function () {
				e.$heroImage.classList.remove('image-adjust'), (e.$heroImage.style.height = 'auto');
			}),
			e.$arrowBtn.addEventListener('click', e.scrollTop.bind(e)),
			window.addEventListener('navToggle', function (o) {
				o.detail.open
					? e.$el.classList.add('no-click')
					: setTimeout(function () {
							e.$el.classList.remove('no-click');
					  }, 500);
			});
	},
	setDomElements: function (e, o) {
		(this.$el = e),
			(e.dataset.invocationName = o),
			(this.invocationName = o),
			(this.$heroImageContainer = e.querySelector('.ui-component.hero-image')),
			(this.$heroImageTop = e.querySelector('.hero-image-top')),
			(this.$arrowBtn = e.querySelector('.arrow-down')),
			(this.$heroImagePictureEl = e.querySelector('.hero-image-picture')),
			(this.$heroBgVideo = e.querySelector('.hero-bg-video')),
			(this.$heroBackgroundPlaceholder = e.querySelector('.hero-image-background')),
			(this.$heroImageRendtion = e.querySelector('.img-responsive')),
			(this.$heroImageRendtions = this.$heroImagePictureEl.querySelectorAll('source')),
			(this.$heroImage = e.querySelector('.hero-image.image-adjust')),
			(this.srcsetRegex = /\.[0-9]{3,4}\./),
			(this.isIe11 = document.querySelector('.ua-ie-11'));
	},
	scrollTop: function () {
		var e = STCUK[this.invocationName].$heroImageContainer.offsetHeight;
		window.scroll({ top: e, left: 0, behavior: 'smooth' });
	},
	playBgVideo: function () {
		STCUK[this.invocationName].$heroBgVideo.play();
	},
	hideHeroVideo: function () {
		STCUK[this.invocationName].$heroBgVideo.classList.add('hidden');
	},
	showHeroVideo: function () {
		STCUK[this.invocationName].$heroBgVideo.classList.remove('hidden');
	},
	canDevicePlayVideo: function () {
		var e = STCUK[this.invocationName];
		return !(
			!e.$heroBgVideo ||
			!(
				e.$heroBgVideo.canPlayType('video/mp4') ||
				e.$heroBgVideo.canPlayType('video/webm') ||
				e.$heroBgVideo.canPlayType('video/ogv')
			)
		);
	},
	isDesktopDimensions: function () {
		return window.matchMedia('(min-width: 600px)').matches && void 0 !== cssua.userAgent.desktop;
	},
	isTabletDimensions: function () {
		return window.matchMedia('(min-width: 768px)').matches && 'iphone' !== cssua.userAgent.mobile;
	},
	stopVideoPlayback: function (e) {
		e.pause(), e.removeAttribute('autoplay'), e.setAttribute('preload', 'none');
	},
	playHeroVidForNonMobileDevices: function () {
		var e = STCUK[this.invocationName];
		(e.canPlayVideo = e.canDevicePlayVideo()),
			(e.isDesktop = e.isDesktopDimensions()),
			(e.isTablet = e.isTabletDimensions()),
			e.$heroBgVideo && (e.isDesktop || e.isTablet) && e.canPlayVideo
				? (e.$heroImagePictureEl.classList.add('hidden'),
				  e.showHeroVideo(),
				  e.$heroBgVideo.setAttribute('preload', 'auto'),
				  e.$heroBgVideo.setAttribute('autoplay', !0),
				  void 0 !== cssua.userAgent.mobile && e.$heroBgVideo.load())
				: (e.$heroBgVideo && (e.hideHeroVideo(), e.stopVideoPlayback(e.$heroBgVideo)),
				  e.$heroImagePictureEl.classList.remove('hidden'));
	},
	init: function (e, o) {
		var i = STCUK[o];
		i.setDomElements(e, o), i.playHeroVidForNonMobileDevices(), i.bindEvents();
	}
};
STCUK.imageSnippet = _.extend({}, _.clone(STCUK.contentSnippet), {
	bindEvents: function () {
		var e = STCUK[this.invocationName],
			t = STCUK.utility;
		e.$icon = e.$pannellum.querySelector('.image-hotspot.' + this.invocationName);
		var i = _.debounce(e.alignVertically.bind(e), 100);
		window.addEventListener('resize', i),
			t.isAuthorMode() || e.$icon.addEventListener('click', e.show.bind(e)),
			e.$closeIcon.addEventListener('click', e.hide.bind(e)),
			e.imageLoadObserver();
	},
	getConfig: function () {
		var e = STCUK[this.invocationName],
			t = STCUK.pannellum;
		return {
			pitch: e.pitch,
			yaw: e.yaw,
			cssClass: 'image-hotspot ' + this.invocationName,
			createTooltipFunc: t.createTooltip,
			createTooltipArgs: e.markerText
		};
	},
	imageLoadObserver: function () {
		var e = STCUK[this.invocationName],
			t = e.$el.querySelector('.lazyload');
		if (window.MutationObserver) {
			new MutationObserver(function (t, i) {
				t.forEach(function (t) {
					'class' === t.attributeName &&
						t.target.classList.contains('lazy-loaded') &&
						(e.alignVertically(), i.disconnect());
				});
			}).observe(t, { attributes: !0 });
		}
	}
});
var _typeof =
	'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
		? function (e) {
				return typeof e;
		  }
		: function (e) {
				return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
					? 'symbol'
					: typeof e;
		  };
(STCUK.map = {
	bindEvents: function () {
		var e = STCUK[this.invocationName],
			t = setInterval(function () {
				'object' === ('undefined' == typeof google ? 'undefined' : _typeof(google)) &&
					'object' === _typeof(google.maps) &&
					(e.initialiseMap(), e.initialiseSearch(), clearInterval(t), e.hideLoadMessage());
			}, 300);
		e.$locator &&
			(e.$geolocationBtn &&
				!e.isIe &&
				e.$geolocationBtn.addEventListener('click', function () {
					(e.$searchInput.value = ''),
						navigator.geolocation.getCurrentPosition(function (t) {
							e.search(t.coords.latitude, t.coords.longitude);
						});
				}),
			e.$clearBtn.addEventListener('click', function () {
				(e.$searchInput.value = ''),
					e.dataSources.forEach(function (e) {
						e.clearMarkers(), e.loadAllMarkers();
					}),
					e.resetShopCount();
			}),
			e.$clearBtn.addEventListener('click', function () {
				e.toggleResultsMessage(!1);
			}),
			e.$searchBtn.addEventListener('click', e.handleSearchBtn.bind(e)),
			e.$shopFilter.addEventListener('click', e.setFilter.bind(e)),
			e.$branchesFilter.addEventListener('click', e.setFilter.bind(e)));
	},
	showLoadMessage: function () {
		STCUK[this.invocationName].$loaderMessagePanel.classList.remove('hide');
	},
	hideLoadMessage: function () {
		STCUK[this.invocationName].$loaderMessagePanel.classList.add('hide');
	},
	setDomElements: function (e, t) {
		var a = STCUK[t];
		(e.dataset.invocationName = t),
			(a.invocationName = t),
			(a.$el = e),
			(a.$map = e.querySelector('.map')),
			(a.$locator = e.querySelector('.locator')),
			(a.$results = e.querySelector('.results')),
			(a.isIe = void 0 !== cssua.ua.ie);
		var o = e.querySelector('script');
		(a.config = JSON.parse(o.innerText.trim())),
			(a.dataSources = []),
			a.$locator &&
				((a.$searchInput = a.$locator.querySelector('input')),
				navigator.geolocation &&
					!a.isIe &&
					((a.$geolocationBtn = a.$locator.querySelector('.use-location')),
					a.$geolocationBtn.classList.remove('hide')),
				(a.$searchBtn = a.$locator.querySelector('.search-btn')),
				(a.$clearBtn = a.$locator.querySelector('.clear-btn'))),
			(a.searchResultsAmount = +e.dataset.searchResultsAmount),
			(a.tileSize = { height: 256, width: 256 }),
			(a.zoomMax = 21),
			(a.buffer = 100),
			(a.mapDimensions = {}),
			(a.mapOffset = { x: 0, y: 0 }),
			(a.$filters = e.querySelector('.filters')),
			(a.$shopFilter = a.$filters.querySelector('.filter-radio .radio-input .shops')),
			(a.$branchesFilter = a.$filters.querySelector('.filter-radio .radio-input .fundraising')),
			(a.currentFilter = a.$filters.dataset.currentFilter),
			(a.$loaderMessagePanel = e.querySelector('.map-loader-message')),
			(a.$loaderMessage = e.querySelector('.loading-message')),
			(a.$resultsMessage = a.$locator.querySelector('.results-message')),
			(a.$resultsMessageText = a.$resultsMessage.textContent),
			(a.loadMoreShopsIncrementAmount = +a.$locator.dataset.showIncrementAmount),
			(a.loadMoreShops = a.$locator.dataset.showMore),
			(a.$locator.dataset.shopCount = '0'),
			(a.shopLatLng = {}),
			(a.addMoreShopsClicked = !1),
			(a.firstShopLatLng = {}),
			(a.$resultsMessage = a.$locator.querySelector('.results-message')),
			(a.shopSearchErrorMessage = a.$resultsMessage.dataset.shopSearchErrorMessage),
			(a.fundraisingBranchesSearchErrorMessage = a.$resultsMessage.dataset.fundraisingBranchesSearchErrorMessage),
			(a.shopSearchResultsMessage = a.$resultsMessage.dataset.shopSearchResultsMessage),
			(a.fundraisingBrancheSearchResultsMessage =
				a.$resultsMessage.dataset.fundraisingBranchesSearchResultsMessage);
	},
	initialiseMap: function () {
		var e = STCUK[this.invocationName];
		(e.map = new google.maps.Map(e.$map, {
			zoom: 5.8,
			maxZoom: 25,
			center: { lat: 54.133716, lng: -4.487982 },
			styles: STCUK.mapStyle,
			disableDefaultUI: !0
		})),
			e.loadDataSources();
	},
	initialiseSearch: function () {
		var e = STCUK[this.invocationName];
		e.toggleResultsMessage(!1),
			e.$searchInput &&
				((e.autocomplete = new google.maps.places.Autocomplete(e.$searchInput)),
				e.autocomplete.setComponentRestrictions({ country: ['uk', 'im'] }),
				e.autocomplete.addListener('place_changed', e.handleSearchInput.bind(e)));
	},
	loadDataSources: function () {
		var e = STCUK[this.invocationName];
		e.config.forEach(function (t) {
			for (var a = t.dataSource, o = !1, s = 0; !o; ) {
				var n = '' + a + s;
				STCUK[n] ||
					((STCUK[n] = _.clone(STCUK[a])), STCUK[n].init(e, n, t), (o = !0), e.dataSources.push(STCUK[n])),
					s++;
			}
		});
	},
	updateMapDimensions: function () {
		var e = STCUK[this.invocationName];
		(e.mapDimensions.height = e.$map.offsetHeight), (e.mapDimensions.width = e.$map.offsetWidth);
	},
	zoomLatLng: function (e, t, a) {
		return Math.floor(Math.log(e / t / a) / Math.LN2);
	},
	latRadian: function (e) {
		var t = Math.sin((e * Math.PI) / 180),
			a = Math.log((1 + t) / (1 - t)) / 2;
		return Math.max(Math.min(a, Math.PI), -Math.PI) / 2;
	},
	getBoundsZoomLevel: function (e, t) {
		var a = STCUK[this.invocationName],
			o = e.getNorthEast(),
			s = e.getSouthWest(),
			n = (a.latRadian(o.lat()) - a.latRadian(s.lat())) / Math.PI,
			r = o.lng() - s.lng(),
			i = (r < 0 ? r + 360 : r) / 360,
			l = a.zoomLatLng(t.height, a.tileSize.height, n),
			c = a.zoomLatLng(t.width, a.tileSize.width, i);
		return Math.min(l, c, a.zoomMax);
	},
	getBounds: function (e) {
		STCUK[this.invocationName];
		var t = void 0,
			a = void 0,
			o = void 0,
			s = void 0;
		e.forEach(function (e) {
			if (!t) return (t = o = e.lat), void (s = a = e.lng);
			e.lat > t ? (t = e.lat) : e.lat < o && (o = e.lat), e.lng < a ? (a = e.lng) : e.lng > s && (s = e.lng);
		});
		var n = new google.maps.LatLng(t, a),
			r = new google.maps.LatLng(o, s),
			i = new google.maps.LatLngBounds();
		return i.extend(n), i.extend(r), i;
	},
	zoomWithOffset: function (e) {
		var t = STCUK[this.invocationName],
			a = t.map.getZoom(),
			o = e ? a + 1 : a - 1,
			s = { x: e ? t.mapOffset.x / 4 : t.mapOffset.x / 2, y: e ? -t.mapOffset.y / 4 : t.mapOffset.y / 2 },
			n = t.offsetLatLng(t.map.getCenter(), s.x, s.y);
		e ? (t.map.setZoom(o), t.map.panTo(n)) : (t.map.setCenter(n), t.map.setZoom(o));
	},
	offsetLatLng: function (e, t, a) {
		var o = STCUK[this.invocationName];
		(t = t || 0), (a = a || 0);
		var s = Math.pow(2, o.map.getZoom()),
			n = o.map.getProjection().fromLatLngToPoint(e),
			r = new google.maps.Point(t / s, a / s),
			i = new google.maps.Point(n.x - r.x, n.y + r.y);
		return o.map.getProjection().fromPointToLatLng(i);
	},
	setOffsetCentre: function (e) {
		var t = STCUK[this.invocationName];
		t.mapOffset.x = t.$locator.offsetWidth;
		var a = t.offsetLatLng(e, t.mapOffset.x / 2, t.mapOffset.y / 2);
		t.map.panTo(a);
	},
	zoom: function (e) {
		return STCUK[this.invocationName].zoomWithOffset(e);
	},
	setBounds: function (e, t) {
		var a = STCUK[this.invocationName];
		a.updateMapDimensions();
		var o = a.getBounds(e),
			s = {
				width: a.mapDimensions.width - a.mapOffset.x - 2 * a.buffer,
				height: a.mapDimensions.height - a.mapOffset.y - 2 * a.buffer
			},
			n = a.getBoundsZoomLevel(o, s);
		t ? a.map.setZoom(n / 2) : a.map.setZoom(n), a.setOffsetCentre(o.getCenter());
	},
	handleSearchBtn: function () {
		var e = STCUK[this.invocationName],
			t = document.querySelector('.pac-target-input');
		function a() {}
		google.maps.event.trigger(t, 'focus', {}),
			google.maps.event.trigger(t, 'keydown', { keyCode: 40, stopPropagation: a, preventDefault: a }),
			google.maps.event.trigger(t, 'keydown', { keyCode: 13 }),
			google.maps.event.trigger(this, 'focus', {}),
			e.handleSearchInput();
	},
	handleSearchInput: function () {
		var e = STCUK[this.invocationName],
			t = e.autocomplete.getPlace();
		e.resetSearchSize(),
			e.resetShopCount(),
			void 0 !== t.geometry
				? e.search(t.geometry.location.lat(), t.geometry.location.lng())
				: (t.geometry && e.$searchInput.value) ||
				  (e.toggleResultsMessage(!0, !1, !0), e.hideResultsPanel(), e.clearAllMarkers());
	},
	hideResultsPanel: function () {
		var e = STCUK[this.invocationName];
		e.$results.classList.add('hide') && e.$results.classList.add('hide');
	},
	clearAllMarkers: function () {
		STCUK[this.invocationName].dataSources.forEach(function (e) {
			e.clearMarkers();
		});
	},
	resetShopCount: function () {
		STCUK[this.invocationName].$locator.dataset.shopCount = '0';
	},
	markerSearch: function (e, t) {
		var a = STCUK[this.invocationName];
		document.querySelector('.results').classList.contains('hide') && a.search(e, t, !0);
	},
	toggleResultsMessage: function (e, t, a) {
		var o = STCUK[this.invocationName],
			s = o.isShopFilter(),
			n = s ? o.shopSearchResultsMessage : o.fundraisingBrancheSearchResultsMessage,
			r = (o.$resultsMessage.textContent = n.replace(/x|\d{1,3}/gi, o.$locator.dataset.shopCount)),
			i = o.$loaderMessagePanel.classList.contains('hide');
		(o.$resultsMessage.textContent = a
			? s
				? o.shopSearchErrorMessage
				: o.fundraisingBranchesSearchErrorMessage
			: r),
			t && (i || o.$loaderMessagePanel.classList.add('hide'), e || o.$results.classList.add('top-no-message')),
			e
				? (o.$resultsMessage.classList.remove('hide'),
				  o.$results.classList.remove('top-no-message'),
				  o.$results.classList.add('top-message'))
				: o.$resultsMessage.classList.add('hide');
	},
	setDeviceMarkerBounds: function (e, t, a) {
		var o = STCUK[this.invocationName];
		if (STCUK.utility.checkMobileResolution()) a ? o.map.setZoom(15) : o.map.fitBounds(e);
		else {
			var s = t.map(function (e) {
				return { lat: parseFloat(e.data._source.location.lat), lng: parseFloat(e.data._source.location.lon) };
			});
			o.setBounds(s, a);
		}
	},
	resetSearchSize: function () {
		var e = STCUK[this.invocationName];
		e.searchResultsAmount = +e.$el.dataset.searchResultsAmount;
	},
	search: function (e, t, a) {
		var o = STCUK[this.invocationName],
			s = document.querySelector('.results').classList.contains('hide'),
			n = [],
			r = void 0;
		if (o.addMoreShopsClicked) {
			var i = +o.$locator.dataset.shopCount;
			(r = i + o.loadMoreShopsIncrementAmount), (o.$locator.dataset.shopCount = r), (o.addMoreShopsClicked = !1);
		} else (o.$locator.dataset.shopCount = o.searchResultsAmount), (r = o.searchResultsAmount);
		o.dataSources.forEach(function (a) {
			a.clearMarkers(), n.push(a.search(e, t));
		}),
			a && s && (r = 1),
			Promise.all(n)
				.then(function (e) {
					var t = [];
					STCUK.utility.checkMobileResolution();
					e.forEach(function (e, a) {
						e.hits.hits.forEach(function (e) {
							t.push({ dataSource: o.dataSources[a], data: e });
						});
					});
					var s = new google.maps.LatLngBounds(),
						n = t
							.sort(function (e, t) {
								return e.data.sort[0] - t.data.sort[0];
							})
							.slice(0, r);
					t
						.sort(function (e, t) {
							return e.data.sort[0] - t.data.sort[0];
						})
						.slice(0, r)
						.forEach(function (e, t) {
							e.dataSource.addMarker(e.data, t, s, r);
						}),
						o.setDeviceMarkerBounds(s, n, a),
						a ? o.toggleResultsMessage(!1, a) : o.toggleResultsMessage(!0);
				})
				.catch(function (e) {
					console.log('Error thrown when searching datasource!', e);
				});
	},
	setFilter: function (e) {
		STCUK[this.invocationName].currentFilter = e.target.getAttribute('class');
	},
	isShopFilter: function () {
		return 'shops' === STCUK[this.invocationName].currentFilter;
	},
	init: function (e, t) {
		var a = STCUK[t];
		a.setDomElements(e, t), a.showLoadMessage(), a.bindEvents();
	}
}),
	(STCUK.mapStyle = [
		{ featureType: 'administrative', elementType: 'all', stylers: [{ visibility: 'on' }, { lightness: 33 }] },
		{ featureType: 'landscape', elementType: 'all', stylers: [{ visibility: 'off' }, { color: '#f2e5d4' }] },
		{ featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#c5dac6' }] },
		{ featureType: 'poi.park', elementType: 'labels', stylers: [{ visibility: 'off' }, { lightness: 20 }] },
		{ featureType: 'road', elementType: 'all', stylers: [{ lightness: 20 }] },
		{ featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#c5c6c6' }] },
		{ featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#e4d7c6' }] },
		{ featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#fbfaf7' }] },
		{ featureType: 'water', elementType: 'all', stylers: [{ visibility: 'on' }, { color: '#acbcc9' }] },
		{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }, { lightness: 20 }] }
	]);
STCUK.shop = {
	days: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
	_setDomElements: function (t, e, a) {
		var n = STCUK[e];
		(n.map = t),
			(n.invocationName = e),
			(n.config = a),
			(n.shopSearchUrl = t.$el.dataset.shopSearchUrl),
			(n.fundraisingbranchSearchUrl = t.$el.dataset.fundraisingbranchSearchUrl),
			(n.loadedMarkers = []),
			(n.markerIcon = a.markerIcon),
			(n.searchQuery = { query: { bool: { must: { term: { category: n._category } } } } }),
			(n.searchUrl = n.setSearchUrl()),
			n.loadAllMarkers(),
			(n.addMoreShopsClicked = !1),
			n.firstShopLatLng;
	},
	loadAllMarkers: function () {
		var t = STCUK[this.invocationName];
		(t.searchUrl = t.map.isShopFilter() ? t.shopSearchUrl : t.fundraisingbranchSearchUrl),
			t.config.showAll &&
				fetch(t.searchUrl + '?size=1000', {
					method: 'post',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(t.searchQuery)
				})
					.then(function (t) {
						return t.json();
					})
					.then(function (e) {
						e.hits.hits.forEach(function (e) {
							t.addMarker(e);
						});
					})
					.catch(function (t) {
						console.error(t);
					});
	},
	addMarker: function (t, e, a, n) {
		var r = STCUK[this.invocationName],
			o = parseInt(n, 10),
			s = {
				position: { lat: parseFloat(t._source.location.lat), lng: parseFloat(t._source.location.lon) },
				map: r.map.map
			};
		r.markerIcon &&
			(s.icon = {
				url: r.markerIcon,
				scaledSize: new google.maps.Size(50, 50),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(15, 55),
				labelOrigin: new google.maps.Point(25, 20)
			}),
			'number' == typeof e &&
				(s.label = { text: '' + (e + 1), color: '#811411', fontSize: '16px', fontWeight: 'bold' });
		var i = new google.maps.Marker(s);
		'number' == typeof e && r._addResultsPanel(t, e, i, o),
			i.addListener('click', function () {
				var t = i.getPosition().lat(),
					e = i.getPosition().lng();
				r.map.map.setZoom(15), r.map.map.setCenter(i.getPosition()), r.map.markerSearch(t, e);
			}),
			a && a.extend(i.position),
			r.loadedMarkers.push(i);
	},
	_toggleMoreButton: function (t) {
		var e = STCUK[this.invocationName],
			a = document.createElement('li');
		(a.innerHTML = '<button class="load-more" type="button">Load More</button>'),
			t.insertAdjacentElement('beforeend', a),
			t.querySelector('.load-more').addEventListener('click', e._getMoreShops.bind(e));
	},
	_showMoreShops: function (t, e, a, n) {
		var r = STCUK[this.invocationName];
		0 == t && ((r.map.firstShopLatLng.lat = a.lat), (r.map.firstShopLatLng.lng = a.lon)),
			t === e && 'true' == r.map.loadMoreShops && r._toggleMoreButton(n, r.map.firstShopLatLng);
	},
	_getMoreShops: function (t) {
		t.stopPropagation;
		var e = STCUK[this.invocationName];
		(e.map.addMoreShopsClicked = !0), e.map.search(e.map.firstShopLatLng.lat, e.map.firstShopLatLng.lng);
	},
	_addResultsPanel: function (t, e, a, n) {
		var r = STCUK[this.invocationName],
			o = r.map.$results,
			s = t._source,
			i = e,
			l = n - 1,
			c = o.querySelector('ul'),
			p = t._source.location;
		if (o) {
			o.classList.remove('hide');
			var d = document.createElement('li');
			if (
				(r.map.isShopFilter()
					? (d.innerHTML =
							'\n\t\t\t\t<div class="result-detail">\n\t\t\t\t\t<div class="marker-detail">\n\t\t\t\t\t\t<a href="#.">\n\t\t\t\t\t\t\t<span class="marker-number" data-shop-number="' +
							(e + 1) +
							'">' +
							(e + 1) +
							'</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="text-detail">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<a href="#.">\n\t\t\t\t\t\t\t\t<span class="name"  data-shop-number="' +
							(e + 1) +
							'">' +
							(r._categoryName + ' ' || '') +
							s.name +
							'</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<span class="distance">(' +
							t.sort[0].toFixed(2) +
							' miles)</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>' +
							s.address +
							'</p>\n\t\t\t\t\t\t<div class="opening-hours">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<span class="today">\n\t\t\t\t\t\t\t\t\tOpening hours: ' +
							r._getOpeningHoursForDay(s, new Date().getDay(), !0) +
							'\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t' +
							r._getOpeningHours(s) +
							'\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="more">\n\t\t\t\t\t\t\t<p><a href="tel:' +
							s.phone +
							'">Phone: ' +
							s.phone +
							'</a></p>\n\t\t\t\t\t\t\t<p><a class="link" href="' +
							s.path +
							'" target="_blank">More</a></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t')
					: (d.innerHTML =
							'\n\t\t\t\t<div class="result-detail">\n\t\t\t\t\t<div class="marker-detail">\n\t\t\t\t\t\t<a href="#.">\n\t\t\t\t\t\t\t<span class="marker-number" data-shop-number="' +
							(e + 1) +
							'">' +
							(e + 1) +
							'</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="text-detail">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<a href="#.">\n\t\t\t\t\t\t\t\t<span class="name"  data-shop-number="' +
							(e + 1) +
							'">' +
							s.branchName +
							'</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<span class="distance">(' +
							t.sort[0].toFixed(2) +
							' miles)</span>\n\t\t\t\t\t\t</p\t>\n\t\t\t\t\t\t<p><strong>Manager: </strong>' +
							s.managerName +
							'</p>\n\t\t\t\t\t\t<p<strong>Email: </strong> <a class="link" href="mailto:' +
							s.managerEmail +
							'">' +
							s.managerEmail +
							'</a></p>\n\t\t\t\t\t\t<p><strong>Region: </strong>' +
							s.region +
							'</p>\n\t\t\t\t\t\t<p><strong>Post code: </strong>' +
							s.postcode +
							'</p>\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t'),
				c.insertAdjacentElement('beforeend', d),
				r._showMoreShops(i, l, p, c),
				r.map.isShopFilter())
			) {
				var h = o.querySelectorAll('.opening-hours'),
					m = h[h.length - 1];
				m.addEventListener('click', function () {
					var t = m.querySelector('ul');
					t.classList.contains('hide') ? t.classList.remove('hide') : t.classList.add('hide');
				});
			}
			var u = d.querySelector('.name'),
				g = d.querySelector('.marker-detail');
			u.addEventListener('click', function (t) {
				var e = t.target.closest('li');
				google.maps.event.trigger(a, 'click'), r._scrollIntoView(e);
			}),
				g.addEventListener('click', function (t) {
					var e = t.target.closest('li');
					google.maps.event.trigger(a, 'click'), r._scrollIntoView(e);
				}),
				a.addListener('click', function () {
					var t = a.label.text,
						e = r.map.$results.querySelector('[data-shop-number="' + t + '"]').closest('li');
					r._scrollIntoView(e);
				}),
				r._scrollToTop(i, l);
		}
	},
	_scrollToTop: function (t, e) {
		var a = STCUK[this.invocationName];
		t === e && a.map.$results.scrollTo(0, 0);
	},
	_scrollIntoView: function (t) {
		var e = STCUK[this.invocationName],
			a = t.offsetTop - 10;
		e.map.$results.scrollTo({ top: a, left: 0, behavior: 'smooth' });
	},
	_getOpeningHours: function (t) {
		for (var e = STCUK[this.invocationName], a = '<ul class="hide">', n = 1; n < e.days.length; n++)
			a += e._getOpeningHoursForDay(t, n);
		return (a += e._getOpeningHoursForDay(t, 0)), (a += '</ul>');
	},
	_getOpeningHoursForDay: function (t, e, a) {
		var n = STCUK[this.invocationName],
			r = n.days[e];
		r = r.substr(0, 1).toUpperCase() + r.substr(1);
		var o = 'Closed';
		return (
			t.openingHours.forEach(function (t) {
				t.day === n.days[e] && (o = t.openingTime + '-' + t.closingTime);
			}),
			a ? 'Today - ' + o : '<li>' + r + ' - ' + o + '</li>'
		);
	},
	clearMarkers: function () {
		var t = STCUK[this.invocationName],
			e = t.map.$results;
		t.loadedMarkers.forEach(function (t) {
			t.setMap(null);
		}),
			(t.loadedMarkers = []),
			e && (e.classList.add('hide'), (e.querySelector('ul').innerHTML = ''));
	},
	search: function (t, e) {
		var a = STCUK[this.invocationName],
			n = a.searchQuery,
			r = a.map.$locator.dataset.shopCount;
		return (
			(a.searchUrl = a.map.isShopFilter() ? a.shopSearchUrl : a.fundraisingbranchSearchUrl),
			(n.sort = [{ _geo_distance: { location: { lat: t, lon: e }, order: 'asc', unit: 'miles' } }]),
			fetch(a.searchUrl + '?size=' + r, {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(n)
			}).then(function (t) {
				return t.json();
			})
		);
	},
	setSearchUrl: function () {
		var t = STCUK[this.invocationName];
		return 'shops' === t.map.currentFilter
			? (t.shopSearchUrl = t.map.$el.dataset.shopSearchUrl)
			: (t.fundraisingbranchSearchUrl = t.map.$el.dataset.fundraisingbranchSearchUrl);
	},
	init: function (t, e, a) {
		STCUK[e]._setDomElements(t, e, a);
	}
};
STCUK.communityShop = _.extend({}, _.clone(STCUK.shop), { _category: 'community_charity_shops', _categoryName: '' });
STCUK.mlgShop = _.extend({}, _.clone(STCUK.shop), {
	_category: 'marys_living_and_giving_shops',
	_categoryName: 'Marys Living and Giving'
});
STCUK.fundraising = _.extend({}, _.clone(STCUK.shop), {
	_category: 'fundraising_branch',
	_categoryName: 'Fundraising Branch'
});
STCUK.pannellum = _.extend({}, _.clone(STCUK.storyElement), {
	bindEvents: function () {
		var t = STCUK[this.invocationName];
		t.$overlay.addEventListener('click', t.hideContent.bind(t));
		var e = _.debounce(t.alignVertically.bind(t), 100);
		window.addEventListener('resize', e), t.bindClick(t.$nextSectionText);
	},
	setDomElements: function (t, e) {
		var i = STCUK[e];
		STCUK.storyElement.setDomElements(t, e),
			(i.imageUrl = t.dataset.imageUrl),
			(i.$snippets = t.querySelectorAll('.story-snippet')),
			(i.$infoText = t.querySelector('.info-text')),
			(i.$overlay = t.querySelector('.overlay')),
			(i.$prompt = t.querySelector('.prompt')),
			(i.$nextSectionText = t.querySelector('.next-section')),
			(i.autoRotate = t.dataset.autoRotate),
			(i.autoRotateInactivityDelay = t.dataset.autoRotateInactivityDelay),
			(i.yaw = parseFloat(t.dataset.yaw)),
			(i.pitch = parseFloat(t.dataset.pitch)),
			(i.sectionId = t.dataset.sectionId);
	},
	loadViewer: function () {
		var t = STCUK[this.invocationName],
			e = STCUK.utility.getAnchorLink().split('&')[1],
			i = {
				type: 'equirectangular',
				panorama: t.imageUrl,
				autoLoad: !t.isAuthor(),
				hotSpotDebug: t.isAuthor(),
				autoRotate: t.autoRotate,
				autoRotateInactivityDelay: t.autoRotateInactivityDelay,
				hfov: 120,
				yaw: t.yaw,
				pitch: t.pitch,
				showZoomCtrl: !1,
				showFullscreenCtrl: !1
			};
		(t.viewer = pannellum.viewer('panorama-' + t.sectionId, i)),
			t.viewer.on('load', function () {
				t.showPrompt(),
					t.showNextSection(),
					t.$snippets.forEach(function (i) {
						var o = STCUK[i.dataset.invocationName],
							n = o.getConfig();
						if (i.classList.contains('video-snippet') && !n.youtubeLibLoaded) return !1;
						t.viewer.addHotSpot(n), o.bindEvents(), e && e === o.snippetId && o.show();
					});
			}),
			t.isAuthor()
				? t.viewer.on('mouseup', t.updateInfoText.bind(t))
				: (t.viewer.on('mousedown', t.hidePrompt.bind(t)), t.viewer.on('touchstart', t.hidePrompt.bind(t)));
	},
	createTooltip: function (t, e) {
		t.classList.add('custom-tooltip');
		var i = document.createElement('span'),
			o = document.createElement('span');
		(i.innerHTML = e),
			i.classList.add('tooltip-text'),
			(i.style.width = i.scrollWidth - 20 + 'px'),
			t.appendChild(i),
			o.classList.add('icon'),
			o.setAttribute('aria-hidden', 'true'),
			t.appendChild(o);
	},
	hideContent: function () {
		STCUK[this.invocationName].$snippets.forEach(function (t) {
			STCUK[t.dataset.invocationName].hide();
		});
	},
	showOverlay: function () {
		STCUK[this.invocationName].$overlay.classList.remove('hidden');
	},
	hideOverlay: function () {
		STCUK[this.invocationName].$overlay.classList.add('hidden');
	},
	showPrompt: function () {
		var t = STCUK[this.invocationName];
		t.isAuthor() || (t.$prompt.classList.remove('hidden'), t.alignVertically());
	},
	hidePrompt: function () {
		STCUK[this.invocationName].$prompt.classList.add('hidden');
	},
	showNextSection: function () {
		var t = STCUK[this.invocationName];
		t.isAuthor() || t.$nextSectionText.classList.remove('hidden');
	},
	updateInfoText: function () {
		var t = STCUK[this.invocationName];
		t.$infoText.innerText = 'Pitch: ' + t.viewer.getPitch() + ', Yaw: ' + t.viewer.getYaw();
	},
	alignVertically: function () {
		var t = STCUK[this.invocationName],
			e = t.$el.offsetHeight,
			i = t.$prompt.offsetHeight;
		t.$prompt.style.top = (e - i) / 2 + 'px';
	},
	load: function () {
		var t = STCUK[this.invocationName];
		t.viewer ? t.viewer.resize() : t.loadViewer();
	},
	isHidden: function () {
		return STCUK[this.invocationName].$el.classList.contains('hidden');
	},
	isAuthor: function () {
		return STCUK[this.invocationName].$el.classList.contains('author');
	}
});
STCUK.paypal = {
	bindEvents: function () {
		var t = STCUK[this.invocationName];
		'single' === t.el.dataset.paymentType &&
			t.el.addEventListener('click', function () {
				STCUK.loader.show(t.donatePod.paypalLoadingMsg),
					STCUK.formMetadata.setMetadata(t.donatePod.$singleDonateOverlay),
					t.putDataInStorage(window),
					t.createFormTmpRecord();
			}),
			'monthly' === t.el.dataset.paymentType &&
				(t.el.addEventListener('click', t.showDatePicker.bind(this)),
				t.$monthlyDatePickerCancelButton.addEventListener('click', t.hideDatePicker.bind(this)),
				t.$monthlyDatePickerConfirmButton.addEventListener('click', function () {
					STCUK.loader.show(t.donatePod.paypalLoadingMsg), t.createFormTmpRecordMonthly();
				}),
				t.$firstDateRadioBtns.forEach(function (e) {
					e.addEventListener('change', t.donatePod.populatePaypalRGStartDate.bind(t));
				}));
	},
	setDomElements: function (t, e) {
		var a = STCUK[e],
			o = t.closest('[data-role="donatePod"]');
		(t.dataset.invocationName = e),
			(a.invocationName = e),
			(a.el = t),
			(a.donatePod = STCUK[o.dataset.invocationName]),
			(a.paypalReturnUrl = a.el.getAttribute('data-paypal-return-url')),
			(a.paypalUrl = t.dataset.paypalUrl),
			'single' === t.dataset.paymentType &&
				((a.invalidRedirectUrl = t.dataset.paypalInvalidRedirectUrl),
				(a.returnUrl = window.location.origin + t.dataset.paypalReturnUrl.replace('^/content/stc/gb/en', ''))),
			(a.logoImageUrl = t.dataset.paypalLogoImageUrl),
			(a.$hiddenForm = document.querySelector('#paypalHiddenForm')),
			(a.$$hiddenForm = $(a.$hiddenForm)),
			a.donatePod.$monthlyDonateOverlay &&
				((a.$monthlyDatePicker = a.donatePod.$monthlyDonateOverlay.querySelector('.paypal-date-picker')),
				(a.$monthlyPanel = a.donatePod.$monthlyDonateOverlay.querySelector('.payment-options')),
				a.$monthlyDatePicker &&
					((a.$monthlyDatePickerConfirmButton = a.$monthlyDatePicker.querySelector('.btn-confirm')),
					(a.$monthlyDatePickerCancelButton = a.$monthlyDatePicker.querySelector('.btn-cancel')),
					(a.$firstDateRadioBtns = a.$monthlyDatePicker.querySelectorAll('.dd-payment-date'))));
	},
	putDataInStorage: function (t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
			a = STCUK[this.invocationName],
			o = STCUK.utility,
			n = 1500;
		t.sessionStorage.setItem('formMetadata', JSON.stringify(STCUK.formMetadata.getFormPost())),
			t.sessionStorage.setItem('amountDetails', JSON.stringify(e)),
			t.sessionStorage.setItem('paypalUrl', a.paypalUrl),
			t.sessionStorage.setItem('invalidRedirectUrl', a.invalidRedirectUrl),
			t.sessionStorage.setItem('actionUrl', a.donatePod.actionUrl),
			o.isLegacyEdge() &&
				(STCUK.utility.cookie.setItem('formMetadata', JSON.stringify(STCUK.formMetadata.getFormPost()), n, '/'),
				STCUK.utility.cookie.setItem('amountDetails', JSON.stringify(e), n, '/'),
				STCUK.utility.cookie.setItem('paypalUrl', a.paypalUrl, n, '/'),
				STCUK.utility.cookie.setItem('invalidRedirectUrl', a.invalidRedirectUrl, n, '/'),
				STCUK.utility.cookie.setItem('actionUrl', a.donatePod.actionUrl, n, '/'));
	},
	createFormTmpRecord: function () {
		var t = STCUK[this.invocationName],
			e = STCUK.formMetadata,
			a = STCUK.donatePod,
			o = a.parseValue(a.getDonatePodValue()),
			n = a.getGiftAidVal(),
			r = e.getFormPost();
		(r.formdata.donation_method_acc = { donation_method_rbg: 'paypal' }),
			(r.formdata.gift_aid_acc = { gift_aid_declaration: '' + n }),
			(r.formdata.donation_amount_acc = {
				currency_code: o.currency,
				currency_symbol: o.currencyVal,
				donation_frequency: 'single',
				currency_amount: o.amount
			}),
			fetch(t.paypalUrl, {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					'X-PayPalReturnUrl': t.returnUrl,
					'X-PayPalLogoImageUrl': t.logoImageUrl
				},
				body: JSON.stringify(r)
			})
				.then(function (t) {
					return t.json();
				})
				.then(function (e) {
					t.$hiddenForm.setAttribute('action', e.submitUri),
						(t.$hiddenForm.querySelector('input[name="amount"]').value = e.amount),
						(t.$hiddenForm.querySelector('input[name="currency_code"]').value = e.currency),
						(t.$hiddenForm.querySelector('input[name="return"]').value = e.returnUri),
						t.$hiddenForm.submit();
				})
				.catch(function (t) {
					console.error(t), a.handleFormsEngineError(r.formdata.donation_method_acc.donation_method_rbg);
				});
	},
	createFormTmpRecordMonthly: function () {
		var t = STCUK[this.invocationName],
			e = STCUK.donatePod,
			a = t.el.dataset.paypalRgSetupUrl,
			o = e.parseValue(e.getDonatePodValue()),
			n = t.calculateRGStartDate(e.getStartDate()),
			r = n.toLocaleDateString('en-GB'),
			i = e.getGiftAidVal(),
			l = window.location.origin,
			d = { currency_amount: '' + o.amount };
		STCUK.formMetadata.setMetadata(e.$monthlyDonateOverlay);
		var c = Object.assign({}, o, d);
		t.putDataInStorage(window, c),
			sessionStorage.setItem('paypalRgFormPostUrl', t.paypalUrl),
			sessionStorage.setItem('readableStartDate', r);
		var s = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				origin: l,
				'x-amount': o.amount,
				'x-giftaid': '' + i,
				'x-paypalcancelurl': window.location.href,
				'x-paypalreturnurl': '' + l + t.paypalReturnUrl,
				'x-startdate': n.toISOString()
			},
			redirect: 'follow'
		};
		fetch(a, s)
			.then(function (t) {
				return t.text();
			})
			.then(function (t) {
				window.location.href = t;
			})
			.catch(function (t) {
				return console.log('error', t);
			});
	},
	hideDatePicker: function (t) {
		t.stopImmediatePropagation,
			(thisComponent = this),
			thisComponent.$monthlyPanel.classList.remove('hidden'),
			thisComponent.$monthlyDatePicker.classList.add('hidden');
	},
	showDatePicker: function (t) {
		t.stopImmediatePropagation,
			(thisComponent = this),
			thisComponent.$monthlyPanel.classList.add('hidden'),
			thisComponent.$monthlyDatePicker.classList.remove('hidden');
	},
	calculateRGStartDate: function (t) {
		var e = new Date(),
			a = e.getFullYear();
		return new Date(e.setDate(e.getDate() + 2)).getDate() < t
			? new Date(a, e.getMonth(), t, 6, 0, 0)
			: new Date(a, e.getMonth() + 1, t, 6, 0, 0);
	},
	init: function (t, e) {
		var a = STCUK[e];
		a.setDomElements(t, e), a.bindEvents();
	}
};
STCUK.paypalRedirect = {
	setDomElements: function (e, a) {
		var t = STCUK[a];
		(e.dataset.invocationName = a),
			(t.$el = e),
			(t.invocationName = a),
			(t.paypalUrl = sessionStorage.getItem('paypalUrl')),
			(t.invalidRedirectUrl = sessionStorage.getItem('invalidRedirectUrl')),
			(t.metadata = JSON.parse(sessionStorage.getItem('formMetadata'))),
			(t.actionUrl = sessionStorage.getItem('actionUrl')),
			(t.paymentType = t.$el.dataset.donationType.toLowerCase()),
			(t.paypalReturnMsg = e.dataset.paypalReturnMsg || ''),
			(t.timeoutVal = 1e3 * parseFloat(e.dataset.paypalTimeoutVal) || 3e4);
	},
	pollForRecaptchaLoaded: function (e, a, t) {
		var o = Number(new Date()) + (a || 5e3);
		t = t || 100;
		return new Promise(function a(i, s) {
			var n = e();
			n ? i(n) : Number(new Date()) < o ? setTimeout(a, t, i, s) : s(new Error('Re-captcha script not loading'));
		});
	},
	runCaptchaPolling: function (e, a) {
		var t = STCUK.paypalRedirect;
		t.pollForRecaptchaLoaded(
			function () {
				return void 0 !== window.recaptcha;
			},
			1e4,
			50
		)
			.then(function () {
				t.submitFormPost(e, a);
			})
			.catch(function (e) {
				console.error(e);
			});
	},
	setFormData: function (e, a) {
		var t = STCUK.utility,
			o = t.getParameterByName('token'),
			i = t.getParameterByName('giftAid'),
			s = a ? JSON.parse(sessionStorage.getItem('amountDetails')) : STCUK.utility.cookie.getItem('amountDetails');
		a ? sessionStorage.setItem('giftAidFlag', '' + i) : STCUK.utility.cookie.setItem('giftAidFlag', '' + i);
		var n = e.formdata;
		(n.header_acc = { above18_cb: 'true' }),
			(n.gift_aid_acc = { gift_aid_declaration: i }),
			(n['paypal-rg'] = { 'paypal-rg-token': o }),
			(n['paypal-rg'].readable_start_date = a
				? sessionStorage.getItem('readableStartDate') || ''
				: STCUK.utility.cookie.getItem('readableStartDate') || ''),
			(n.donation_amount_acc = s),
			n.address_billing_acc || (n.address_billing_acc = {}),
			(n.address_billing_acc.joinus_update_email = 'false'),
			(n.address_billing_acc.joinus_update_phone = 'false'),
			(n.address_billing_acc.joinus_update_post = 'false'),
			(n.address_billing_acc.joinus_update_sms = 'false'),
			(n.donation_method_acc = { donation_method_rbg: 'paypal-rg' }),
			(e.formdata.marketing_preferences = { preference_submit: 'false' });
	},
	handlePaypalResponseMonthly: function () {
		var e = STCUK.paypalRedirect,
			a = STCUK.utility,
			t = a.getParameterByName('token'),
			o = a.getSessionData(t),
			i = JSON.parse(sessionStorage.getItem('formMetadata')),
			s = STCUK.utility.cookie.getItem('formMetadata'),
			n = void 0;
		if (o || !i || (a.isLegacyEdge() && !s)) e.showErrorMessage();
		else {
			STCUK.loader.show(e.paypalReturnMsg),
				i ? (e.setFormData(i, !0), (n = i)) : STCUK.utility.isLegacyEdge() && (e.setFormData(s, !1), (n = s)),
				e.runCaptchaPolling(n, 'regular');
		}
	},
	handlePaypalResponseSingle: function () {
		var e = STCUK.paypalRedirect,
			a = STCUK.utility,
			t = a.getParameterByName('key'),
			o = a.getSessionData(t);
		STCUK.utility.isLegacyEdge() &&
			((e.paypalUrl = STCUK.utility.cookie.getItem('paypalUrl')),
			(e.invalidRedirectUrl = STCUK.utility.cookie.getItem('invalidRedirectUrl'))),
			t &&
				(o
					? e.showErrorMessage()
					: (STCUK.loader.show(e.paypalReturnMsg),
					  fetch(e.paypalUrl + '/getData/' + t, {
							method: 'get',
							headers: { 'X-PayPalInvalidRedirectURL': e.invalidRedirectUrl }
					  })
							.then(function (e) {
								return e.json();
							})
							.then(function (o) {
								var i = o.formData,
									s = i.formdata,
									n = i.payment,
									r = i.paypalResponse2,
									l = r.payer.payerInfo,
									d = l.billingAddress,
									m = e.metadata;
								(m.formdata = s),
									(m.formdata.address_billing_acc = {
										title: '',
										first_name: l.firstName,
										surname: l.lastName,
										email_address: l.email,
										personal_mobile: l.phone ? l.phone : '',
										mail_address_line_1: a.sanitizeAddressLine(d.line1),
										mail_address_line_2: a.sanitizeAddressLine(d.line2),
										mail_address_line_3: a.sanitizeAddressLine(d.line3),
										billing_address_line_1: a.sanitizeAddressLine(d.line1),
										billing_address_line_2: a.sanitizeAddressLine(d.line2),
										billing_address_line_3: a.sanitizeAddressLine(d.line3),
										billing_town: d.city,
										billing_country: d.countryCode,
										billing_postcode: d.postalCode,
										billing_cb: 'true',
										joinus_update_email: 'false',
										joinus_update_phone: 'false',
										joinus_update_post: 'false',
										joinus_update_sms: 'false'
									}),
									(m.formdata.paypalResponse1 = n),
									(m.formdata.paypalResponse2 = r),
									(m.formdata.key = t),
									(m.formdata.marketing_preferences = { preference_submit: 'false' }),
									e.runCaptchaPolling(m, 'single');
							})
							.catch(function (a) {
								STCUK.loader.hide(), e.showErrorMessage();
							})));
	},
	submitFormPost: function (e, a) {
		var t = STCUK.paypalRedirect,
			o = STCUK.utility,
			i = STCUK.captcha,
			s = e.formdata.form_attributes.pageUrl;
		i.fetchToken(function (i) {
			e.formdata.form_attributes.token = i;
			var n = !1;
			new Promise(function (a, o) {
				var i = setTimeout(function () {
					(n = !0), o(new Error('submitFormPost request timed out!'));
				}, t.timeoutVal);
				fetch(t.actionUrl, {
					method: 'post',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(e)
				})
					.then(function (e) {
						clearTimeout(i), n || a(e);
					})
					.catch(function (e) {
						console.error('submitFormPost failed! ', e), n || o(e);
					});
			})
				.then(function (e) {
					return e.json();
				})
				.then(function (i) {
					(i.formdata = e.formdata),
						(i.formdata.form_attributes.donation_frequency = a),
						sessionStorage.setItem('thankYouPageData', JSON.stringify(i)),
						sessionStorage.setItem('first-name', i.first_name),
						sessionStorage.setItem('referenceId', i.id),
						sessionStorage.setItem('mobile-wallet-payment', 'true'),
						sessionStorage.setItem('firstName', i.first_name),
						sessionStorage.setItem('lastName', i.surname),
						sessionStorage.setItem('email', i.email_address),
						sessionStorage.setItem('postcode', i.postcode),
						sessionStorage.setItem('accessThankYouPage', 'true'),
						o.clearSessionStorage('formName'),
						o.clearSessionStorage('campaignName'),
						o.clearSessionStorage('fundName'),
						i.errorMessage ? t.goToPodErrorHandling(s, t.paymentType) : (window.location = i.thankYouPage),
						sessionStorage.setItem('displayLoader', 'true');
				})
				.then(function () {
					void 0 === cssua.ua.edge &&
						void 0 === cssua.ua.ie &&
						setTimeout(function () {
							self.close();
						}, 300);
				})
				.catch(function (a) {
					console.error(a),
						n &&
							'paypal-rg' === e.formdata.donation_method_acc.donation_method_rbg &&
							(console.error('Paypal response has timed out'),
							_satellite.track && _satellite.track('rg-pp-response-data-timeout'),
							t.goToPodErrorHandling(s, t.paymentType, 2));
				});
		});
	},
	showErrorMessage: function () {
		STCUK[this.invocationName].$el.classList.remove('hide');
	},
	goToPodErrorHandling: function (e, a) {
		var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
			o = e + '?paymentError=true&paymentErrorMethod=paypal&donationType=' + a + '&errMsgNum=' + t;
		window.location = o;
	},
	init: function (e, a) {
		var t = STCUK[a];
		t.setDomElements(e, a),
			e.classList.contains('author-mode') ||
				('single' === t.paymentType && t.handlePaypalResponseSingle(),
				'monthly' === t.paymentType && t.handlePaypalResponseMonthly(),
				setTimeout(function () {
					STCUK.captcha.showPanel();
				}, 1e3));
	}
};
STCUK.personalisedInPageHeading = {
	setDomElements: function (e, t) {
		var i = STCUK[t];
		(i.$el = e), (e.dataset.invocationName = t), (i.invocationName = t);
		var n = document.querySelectorAll('.first-name');
		i.$firstNameElem = n[n.length - 1];
	},
	setFirstName: function (e) {
		STCUK[this.invocationName].$firstNameElem.textContent = e;
	},
	init: function (e, t) {
		var i = STCUK[t];
		i.setDomElements(e, t);
		var n = STCUK.utility.getSessionData('first-name');
		n && (i.setFirstName(n), STCUK.utility.removeSessionData('first-name'));
	}
};
STCUK.primaryNavigation = {
	bindEvents: function () {
		var e = STCUK.primaryNavigation;
		e.$navClose.forEach(function (t) {
			t.addEventListener('click', e.handleFlyoutClose.bind(e));
		}),
			e.$allNavLinks.forEach(function (t) {
				t.addEventListener('click', e.handleFlyoutToggle.bind(e));
			}),
			e.$allNavLinksMob.forEach(function (t) {
				t.addEventListener('click', e.handleMobFlyOut.bind(e));
			}),
			e.$allNavSubLinksMob.forEach(function (t) {
				t.addEventListener('click', e.handleMobFlyOutList.bind(e));
			}),
			e.$searchBtn.addEventListener('click', e.animateSearchBox.bind(e));
		var t = _.debounce(e.navigationScroll.bind(e), 250);
		window.addEventListener('scroll', t);
		var a = _.debounce(function () {
			(e.isDesktop = e.isDesktopCheck()),
				e.adjustHeight(),
				e.removeRowClasses(),
				e.isDesktop && e.checkIfMenuWrapped();
		}, 250);
		window.addEventListener('resize', a),
			e.canHover
				? (e.$allNavLinks.forEach(function (t) {
						t.addEventListener('mouseenter', e.handleFlyoutHover.bind(e)),
							t.addEventListener('mouseleave', e.handleFlyoutHover.bind(e));
				  }),
				  e.$allNavAccessiblityLinks.forEach(function (t) {
						t.addEventListener('focus', e.handleKeyboardFlyoutToggle.bind(e)),
							t.addEventListener('keydown', e.handleKeyboardFlyoutToggle.bind(e));
				  }))
				: e.$navClose.forEach(function (t) {
						t.addEventListener('touchstart', e.handleFlyoutClose.bind(e));
				  });
	},
	isDesktopCheck: function () {
		return !STCUK.utility.isAuthorMode() && !STCUK.utility.checkMobileResolution();
	},
	setDomElements: function (e, t) {
		var a = STCUK[t];
		(a.$el = e),
			(e.dataset.invocationName = t),
			(a.invocationName = t),
			(a.$allNavLinks = e.querySelectorAll('.ui-nav-list-item')),
			(a.$allFlyout = e.querySelectorAll('.ui-flyout')),
			(a.$navClose = e.querySelectorAll('.ui-flyout .ui-navigation-close')),
			(a.$allNavAnchorLinks = e.querySelectorAll('.ui-nav-list-item-link')),
			(a.$allNavAccessibilityMessages = e.querySelectorAll('.ui-navigation-desk .ui-nav-list .menu-access-icon')),
			(a.$allNavAccessiblityLinks = e.querySelectorAll('.ui-nav-list-submenu-icon')),
			(a.$allNavLinksMob = e.querySelectorAll('.ui-nav-list-item-mob')),
			(a.$allFlyoutMob = e.querySelectorAll('.ui-nav-flyout-group')),
			(a.$allNavSubLinksMob = e.querySelectorAll('.ui-flyout-list-mob')),
			(a.$searchBtn = e.querySelector('.ui-mob-flyout-search .search-btn')),
			(a.$ukSearch = e.querySelector('.ui-mob-flyout-search .ui-search')),
			(a.$searchWrap = e.querySelector('.ui-mob-flyout-search .search-wrap')),
			(a.$searchBox = e.querySelector('.ui-mob-flyout-search .search-wrap .search-text .search-box')),
			(a.canHover = !window.matchMedia('(any-hover: none)').matches),
			(a.$mobMenuBorder = e.querySelector('.ui-flyout-border-mob')),
			(a.scrollPos = 0),
			(a.scrolledUp = !1),
			(a.isDesktop = a.isDesktopCheck()),
			(a.enterKeyCode = 13),
			(a.spacebarKeyCode = 32),
			(a.tabKeyCode = 9),
			(a.escapeKeyCode = 27),
			(a.$parentWrapper = e.closest('.stc.uk-navigation-comp')),
			(a.$navEl = e.querySelector('nav'));
	},
	adjustHeight: function () {
		var e = STCUK.primaryNavigation;
		STCUK.utility.checkMobileResolution()
			? (e.$parentWrapper.style.height = 0)
			: (e.$parentWrapper.style.height = e.$navEl.offsetHeight + 1 + 'px');
	},
	checkIfMenuWrapped: function () {
		var e = STCUK.primaryNavigation,
			t = [].slice.call(e.$allNavLinks);
		t.some(function (e) {
			return e.offsetTop > 0;
		}) &&
			t.forEach(function (e) {
				0 === e.offsetTop && e.classList.add('nav-first-row');
			});
	},
	removeRowClasses: function () {
		STCUK.primaryNavigation.$allNavLinks.forEach(function (e) {
			e.classList.remove('nav-first-row');
		});
	},
	addSubmenuAnchorDataIndexes: function (e, t) {
		for (var a, n = 0, o = [], i = 0; i < e.length; i++)
			if ((($anchorLinks = e[i].querySelectorAll('a')), $anchorLinks.length > 0))
				for (var l = 0; l < $anchorLinks.length; l++)
					$anchorLinks[l].setAttribute('data-anchor-index', n), (n = parseInt(n) + 1), o.push(n);
		(a = Math.max.apply(this, o)), t.setAttribute('data-anchor-index', a);
	},
	handleKeyboardFlyoutToggle: function (e) {
		e.stopPropagation();
		var t = STCUK.primaryNavigation,
			a = e.target;
		a.classList.remove('visuallyHidden');
		var n = a.parentElement,
			o = n.querySelector('.ui-component.ui-flyout .ui-navigation-fly-out'),
			i = void 0;
		(e.keyCode !== t.enterKeyCode && e.keyCode !== t.spacebarKeyCode) ||
			(e.preventDefault(),
			n.classList.add('open-flyout'),
			(i = n.querySelector('.ui-navigation-fly-out .ui-flyout-cta a')),
			o.addEventListener('keydown', t.submenuKeyboardNavigation),
			i.focus()),
			e.keyCode === t.escapeKeyCode && document.activeElement === a && n.classList.remove('open-flyout'),
			e.keyCode === t.tabKeyCode && document.activeElement === a && n.classList.remove('open-flyout'),
			'blur' === e.type && (a.classList.add('visuallyHidden'), n.classList.remove('open-flyout'));
	},
	setSubmenuAnchorIndexes: function () {
		for (var e = STCUK.primaryNavigation, t = 0; t < e.$allNavLinks.length; t++) {
			if (null === e.$allNavLinks[t]) return;
			(menuTabIndex = e.$allNavLinks[t].getAttribute('tabindex')),
				($currentSubmenu = e.$allNavLinks[t].querySelectorAll(
					'.ui-flyout .ui-navigation-fly-out [class^="ui-flyout-desk"]'
				));
			var a = e.$allNavLinks[t].querySelector('.ui-navigation-close a');
			e.addSubmenuAnchorDataIndexes($currentSubmenu, a);
		}
	},
	getNextAnchorIndex: function (e) {
		var t = document.activeElement.getAttribute('data-anchor-index');
		return parseInt(t) + 1;
	},
	submenuKeyboardNavigation: function (e) {
		e.stopPropagation();
		var t = STCUK.primaryNavigation,
			a = e.currentTarget.closest('.ui-nav-list-item'),
			n = a.querySelector('.ui-nav-list-submenu-icon'),
			o = e.currentTarget.querySelectorAll('a'),
			i = o[0],
			l = o[o.length - 2];
		e.keyCode === t.tabKeyCode
			? (e.preventDefault(),
			  document.activeElement === i
					? o[t.getNextAnchorIndex()].focus()
					: document.activeElement === l
					? i.focus()
					: o[t.getNextAnchorIndex()].focus())
			: e.keyCode === t.escapeKeyCode && (a.classList.remove('open-flyout'), n.focus());
	},
	setSubmenuTabIndexes: function () {
		for (var e = STCUK.primaryNavigation, t = 0; t < e.$allNavLinks.length; t++)
			(menuTabIndex = e.$allNavLinks[t].getAttribute('tabindex')),
				($currentSubmenu = e.$allNavLinks[t].querySelectorAll(
					'.ui-flyout .ui-navigation-fly-out [class^="ui-flyout-desk"]'
				)),
				e.addSubmenuAnchorTabIndexes($currentSubmenu);
	},
	formatAccessiblityMessages: function () {
		for (var e = STCUK.primaryNavigation, t = void 0, a = 0; a < e.$allNavAccessibilityMessages.length; a++)
			(t = (t = e.$allNavAccessibilityMessages[a].textContent.toLowerCase()).replace(/\s\s+/g, ' ')),
				(e.$allNavAccessibilityMessages[a].textContent = t);
	},
	navigationScroll: function () {
		var e = STCUK.primaryNavigation,
			t = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		e.isDesktop &&
			(t < e.scrollPos || 0 === t
				? e.scrolledUp || (e.$el.classList.remove('hidden'), (e.scrolledUp = !0))
				: (e.$el.classList.add('hidden'), (e.scrolledUp = !1)),
			(e.scrollPos = t));
	},
	handleFlyoutToggle: function (e) {
		var t = STCUK.primaryNavigation,
			a = e.currentTarget;
		t.canHover ||
			a.classList.contains('ui-navigation-clicked') ||
			(e.preventDefault(),
			t.resetNavigation(t.$allNavLinks),
			a.classList.add('ui-navigation-clicked'),
			t.dispatchNavToggleEvt(!0));
	},
	handleFlyoutHover: function (e) {
		var t = e.currentTarget;
		'mouseenter' === e.type ? t.classList.add('open-flyout') : t.classList.remove('open-flyout');
	},
	handleFlyoutClose: function () {
		var e = STCUK.primaryNavigation;
		e.$allFlyout.forEach(function (e) {
			e.classList.remove('open');
		}),
			e.$allNavLinks.forEach(function (e) {
				e.classList.remove('ui-navigation-clicked');
			}),
			e.dispatchNavToggleEvt(!1);
	},
	dispatchNavToggleEvt: function (e) {
		var t = new CustomEvent('navToggle', { detail: { open: e } });
		window.dispatchEvent(t);
	},
	handleMobFlyOut: function (e) {
		e.preventDefault();
		var t = STCUK.primaryNavigation,
			a = e.currentTarget,
			n = a.querySelector('.ui-nav-flyout-group');
		a.classList.contains('ui-navigation-clicked')
			? (n.classList.add('hidden'), a.classList.remove('ui-navigation-clicked'))
			: (t.resetNavigation(t.$allNavLinksMob, t.$allFlyoutMob),
			  a.classList.add('ui-navigation-clicked'),
			  n.classList.remove('hidden'));
	},
	handleMobFlyOutList: function (e) {
		e.stopPropagation();
	},
	resetNavigation: function (e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
		e.forEach(function (e) {
			e.classList.remove('ui-navigation-clicked');
		}),
			t &&
				t.forEach(function (e) {
					e.classList.add('hidden');
				});
	},
	animateSearchBox: function (e) {
		e.preventDefault();
		var t = STCUK.primaryNavigation;
		t.$mobMenuBorder.classList.add('later'),
			t.$searchBtn.classList.add('hidden'),
			t.$ukSearch.classList.remove('hidden'),
			t.$searchWrap.classList.add('animate-wrap'),
			t.$searchBox.focus(),
			setTimeout(function () {
				t.$searchBox.scrollIntoView();
			}, 200);
	},
	init: function (e, t) {
		var a = STCUK.primaryNavigation;
		a.setDomElements(e, t), a.setSubmenuAnchorIndexes(), a.formatAccessiblityMessages(), a.bindEvents();
	}
};
STCUK.quizContainer = {
	setDomElements: function (t, e) {
		var n = STCUK[e];
		(t.dataset.invocationName = e),
			(n.el = t),
			(n.invocationName = e),
			(n.questions = t.querySelectorAll('[data-role="quizQuestion"]'));
	},
	getSectionById: function (t) {
		var e = STCUK[this.invocationName].el.querySelector('[data-section-id="' + t + '"]');
		if (e) return STCUK[e.dataset.invocationName];
	},
	getQuizAnswers: function () {
		var t = STCUK[this.invocationName],
			e = [];
		return (
			t.questions.forEach(function (t) {
				var n = STCUK[t.dataset.invocationName].getAnswer();
				n && e.push(STCUK[n.dataset.invocationName]);
			}),
			e
		);
	},
	getCorrectAnswer: function (t) {
		var e = '';
		return (
			t.answers.forEach(function (t) {
				'true' === t.getAttribute('data-correct-answer') && (e = t.textContent.trim());
			}),
			e
		);
	},
	getScore: function () {
		for (var t = STCUK[this.invocationName], e = 0, n = 0, r = [], o = 0; o < t.questions.length; o++) {
			var i = STCUK[t.questions.item(o).dataset.invocationName],
				a = t.getCorrectAnswer(i);
			if (0 === o || !i.isHidden) {
				e++;
				var s = STCUK[i.getAnswer().dataset.invocationName],
					c = s.isCorrect();
				r.push({ question: o + 1, userAnswer: s.el.textContent.trim(), isCorrect: c, correctAnswer: a }),
					c && n++;
			}
		}
		return { userAnswers: r, correctAnswers: n, totalScore: e };
	},
	init: function (t, e) {
		STCUK[e].setDomElements(t, e);
	}
};
STCUK.quizQuestion = {
	bindEvents: function () {
		var e = STCUK[this.invocationName];
		e.el.addEventListener('answer', e.answerQuestion.bind(e));
	},
	setDomElements: function (e, t) {
		var n = STCUK[t];
		(e.dataset.invocationName = t),
			(n.el = e),
			(n.invocationName = t),
			(n.isHidden = !0),
			(n.isAnswered = !1),
			(n.quizEl = e.closest('[data-role="quizContainer"]')),
			(n.quiz = STCUK[n.quizEl.dataset.invocationName]),
			(n.answers = e.querySelectorAll('[data-role="quizAnswer"]')),
			(n.pageHeader = document.querySelector('.ui-component.header'));
	},
	hide: function (e) {
		for (var t = STCUK[this.invocationName], n = 0; n < t.answers.length; n++) {
			var i = t.answers.item(n),
				s = t.quiz.getSectionById(i.dataset.nextSectionId);
			s && !s.isHidden && s.hide(!0);
		}
		e && (t.el.classList.add('hide'), (t.isHidden = !0));
	},
	show: function (e, t) {
		var n = STCUK[this.invocationName];
		if ((n.el.classList.remove('hide'), (n.isHidden = !1), n.isAnswered)) {
			var i = n.getAnswer().dataset.nextSectionId,
				s = n.quiz.getSectionById(i);
			s ? s.show(n.getAnswer().dataset.noScroll, n) : 'true' !== e ? n.scrollIntoView() : t.scrollIntoView();
		} else 'true' !== e ? n.scrollIntoView() : t.scrollIntoView();
	},
	scrollIntoView: function () {
		var e = STCUK[this.invocationName],
			t = e.pageHeader.offsetHeight,
			n = e.el.offsetTop - t;
		window.scrollTo({ behavior: 'smooth', left: 0, top: n });
	},
	getAnswer: function () {
		for (var e = STCUK[this.invocationName], t = 0; t < e.answers.length; t++) {
			var n = e.answers.item(t);
			if (n.classList.contains('selected')) return n;
		}
	},
	setAnswer: function (e) {
		var t = STCUK[this.invocationName];
		t.isAnswered = !0;
		for (var n = 0; n < t.answers.length; n++) {
			var i = t.answers.item(n);
			i === e
				? (i.classList.add('selected'), i.classList.remove('not_selected'))
				: (i.classList.remove('selected'), i.classList.add('not_selected'));
		}
	},
	answerQuestion: function (e) {
		e.preventDefault();
		var t = STCUK[this.invocationName];
		t.setAnswer(e.detail.answer),
			e.detail.nextSection ? (t.hide(!1), t.quiz.getSectionById(e.detail.nextSection).show()) : t.quiz.getScore();
	},
	init: function (e, t) {
		var n = STCUK[t];
		n.setDomElements(e, t), n.bindEvents();
	}
};
STCUK.quizAnswer = {
	bindEvents: function () {
		var e = STCUK[this.invocationName];
		e.isLink ||
			e.el.addEventListener('click', function (t) {
				t.preventDefault(),
					e.sectionEl.dispatchEvent(
						new CustomEvent('answer', { detail: { answer: e.el, nextSection: e.nextSection } })
					);
			});
	},
	setDomElements: function (e, t) {
		var n = STCUK[t];
		(e.dataset.invocationName = t),
			(n.el = e),
			(n.invocationName = t),
			(n.isLink = !!e.getAttribute('href')),
			(n.answerGroup = e.querySelectorAll('.group')),
			n.isLink ||
				((n.sectionEl = e.closest('[data-section-id]')),
				(n.section = STCUK[n.sectionEl.dataset.invocationName]),
				(n.nextSection = e.dataset.nextSectionId));
	},
	isCorrect: function () {
		return 'true' === STCUK[this.invocationName].el.dataset.correctAnswer;
	},
	init: function (e, t) {
		var n = STCUK[t];
		n.setDomElements(e, t), n.bindEvents();
	}
};
STCUK.quizResults = _.extend({}, _.clone(STCUK.quizQuestion), {
	bindEvents: function () {
		var t = STCUK[this.invocationName];
		STCUK.quizQuestion.bindEvents.call(this),
			t.$showScoreSummaryBtn && t.$showScoreSummaryBtn.addEventListener('click', t.openResultsPanel.bind(t));
	},
	setDomElements: function (t, e) {
		STCUK.quizQuestion.setDomElements(t, e),
			(this.$resultsGrid = t.querySelector('.quiz-results-grid')),
			(this.$scoreSummary = t.querySelector('.score-summary')),
			(this.correctAnswerLabel = this.$resultsGrid.getAttribute('data-correct-answer-label')),
			(this.$showScoreSummaryBtn = t.querySelector('.show-score-summary-btn')),
			(this.$resultsContent = t.querySelector('.quiz-results-content')),
			(this.scoreSummaryText = this.$scoreSummary.textContent),
			(this.isAnswered = !0);
	},
	getTitleText: function () {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
			e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
			r = STCUK[this.invocationName],
			n = new RegExp(/{\w}/g),
			s = r.scoreSummaryText.match(n),
			i = r.scoreSummaryText;
		if (s && 2 === s.length) {
			var o = [t, e];
			s.forEach(function (t, e) {
				i = i.replace(t, o[e]);
			});
		}
		return i;
	},
	answerGridMarkup: function (t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
			r = arguments[2];
		return (
			'<li>\n\t\t\t\t<img src="' +
			r +
			'" alt="A photo of ' +
			t.correctAnswer +
			'">\n\t\t\t\t<div class="user-answer ' +
			(t.isCorrect ? 'correct' : 'incorrect') +
			'">' +
			t.userAnswer +
			'</div>\n\t\t\t\t<div class="correct-answer">' +
			e +
			': ' +
			t.correctAnswer +
			'</div>\n\t\t</li>'
		);
	},
	getQuestionImgs: function (t) {
		var e = STCUK[this.invocationName],
			r = [].slice.call(e.quizEl.querySelectorAll('[data-role="quizQuestion"] img')).map(function (t) {
				return t.currentSrc || t.src;
			});
		return t.map(function (t) {
			return r[t.question - 1];
		});
	},
	show: function () {
		var t = STCUK[this.invocationName],
			e = t.quiz.getScore();
		t.displayResults(e.userAnswers, e.correctAnswers, e.totalScore), _.clone(STCUK.quizQuestion).show.call(t);
	},
	displayResults: function (t, e, r) {
		var n = STCUK[this.invocationName],
			s = n.getTitleText(e, r),
			i = n.getQuestionImgs(t),
			o = '<ul>';
		t.forEach(function (t, e) {
			o += n.answerGridMarkup(t, n.correctAnswerLabel, i[e]);
		}),
			(o += '</ul>'),
			(n.$scoreSummary.textContent = s),
			(n.$resultsGrid.innerHTML = o);
	},
	openResultsPanel: function (t) {
		var e = STCUK[this.invocationName];
		t.target.classList.toggle('open'), e.$resultsContent.classList.toggle('open');
	},
	init: function (t, e) {
		var r = STCUK[e];
		r.setDomElements(t, e), r.bindEvents();
	}
});
STCUK.quizWeightedResults = _.extend({}, _.clone(STCUK.quizQuestion), {
	setDomElements: function (e, s) {
		var n = STCUK[s];
		STCUK.quizQuestion.setDomElements(e, s),
			(n.isAnswered = !0),
			(n.answerGroup = e.querySelectorAll('.answer-group')),
			(n.quizPersonas = e.querySelectorAll('.quiz-persona'));
	},
	show: function () {
		var e = STCUK[this.invocationName];
		e.resetWeights(), e.calculateWeights(), e.calculateAbsoluteResult(), _.clone(STCUK.quizQuestion).show.call(e);
	},
	resetWeights: function () {
		var e = STCUK[this.invocationName];
		e.answerWeights = {};
		for (var s = 0; s < e.answerGroup.length; s++) {
			var n = e.answerGroup[s].innerText;
			e.answerWeights[n] = 0;
		}
	},
	calculateWeights: function () {
		for (var e = STCUK[this.invocationName], s = e.quiz.getQuizAnswers(), n = 0; n < s.length; n++)
			for (var r = 0; r < s[n].answerGroup.length; r++) {
				var t = s[n].answerGroup[r].innerText;
				e.answerWeights[t]++;
			}
	},
	calculateAbsoluteResult: function () {
		var e = STCUK[this.invocationName],
			s = 0,
			n = [],
			r = !1;
		for (var t in e.answerWeights) e.answerWeights[t] > s && (s = e.answerWeights[t]);
		for (var i in e.answerWeights) e.answerWeights[i] === s && n.push(i);
		for (var a = 0; a < e.answerGroup.length; a++) {
			n.indexOf(e.answerGroup[a].innerText) > -1 && !r
				? (e.quizPersonas[a].classList.remove('hide'), (r = !0))
				: e.quizPersonas[a].classList.add('hide');
		}
	}
});
STCUK.petitionIFrame = _.extend({}, _.clone(STCUK.quizQuestion), {
	setDomElements: function (i, t) {
		var e = STCUK[t],
			n = STCUK.analytics;
		STCUK.quizQuestion.setDomElements(i, t),
			(e.iframe = i.querySelector('iframe')),
			(e.sectionId = i.dataset.sectionId),
			(e.nextSection = i.dataset.nextSectionId);
		var o = n.cidTracking().marketingSource;
		(e.source = i.dataset.iframeSource + ('' !== o ? '?sourcecode=' + o : '')),
			(e.petitionSubmitted = !1),
			(e.initialLoad = !0);
	},
	show: function () {
		var i = STCUK[this.invocationName];
		i.petitionSubmitted
			? i.quiz.getSectionById(i.nextSection).show()
			: (_.clone(STCUK.quizQuestion).show.call(i), (i.initialLoad = !0), i.iframe.setAttribute('src', i.source));
	},
	bindEvents: function () {
		var i = STCUK[this.invocationName],
			t = STCUK.quizAnalytics;
		STCUK.quizQuestion.bindEvents.call(this),
			i.iframe &&
				i.iframe.addEventListener('load', function () {
					i.nextSection && !i.initialLoad
						? ((i.initialLoad = !0),
						  t.handlePetitionSubmit(i.sectionId),
						  (i.petitionSubmitted = !0),
						  i.hide(!0),
						  i.iframe.removeAttribute('src'),
						  i.quiz.getSectionById(i.nextSection).show())
						: (i.initialLoad = !1);
				});
	}
});
STCUK.petitionCta = _.extend({}, _.clone(STCUK.quizQuestion), {
	setDomElements: function (e, a) {
		var i = STCUK[a];
		STCUK.quizQuestion.setDomElements(e, a), (i.$socialShare = e.querySelector('[data-role="socialShare"]'));
	},
	show: function (e, a) {
		var i = STCUK[this.invocationName],
			o = STCUK.socialShare;
		if (i.$socialShare && o.useQuizResult) {
			var t = i.quiz.el.querySelector('.quiz-persona:not(.hide)').dataset.socialShareMessage;
			o.printShareBtn(t);
		}
		_.clone(STCUK.quizQuestion).show.call(i, e, a);
	}
});
STCUK.searchInput = {
	bindEvents: function () {
		var e = STCUK[this.invocationName];
		e.$searchWrap.on('click', e.searchActive),
			$('.form-inline', e.$searchWrap).on('submit', $.proxy(e.handleSecurity, e)),
			e.$searchBox.on('input', e.sanitiseSearchField),
			$('body').click(function (a) {
				'popup' !== $(a.target).data('toggle') &&
					0 === $(a.target).parents('.popup').length &&
					e.$searchWrap.removeClass('active');
			});
	},
	setDomElements: function (e, a) {
		var t = $(e);
		(this.$el = t),
			t.data('invocationName', a),
			(this.invocationName = a),
			(this.$searchBox = t.find('.search-box')),
			(this.$searchWrap = t.find('.search-wrap')),
			(this.$searchBoxHidden = t.find('.search-box-hidden'));
	},
	searchActive: function (e) {
		var a = e.currentTarget || e.srcElement;
		$(a).addClass('active');
	},
	sanitiseSearchField: function (e) {
		var a = new RegExp(STCUK.regexes.scriptTag, 'g');
		if (e.target.value.length > 7) {
			var t = e.target.value;
			a.test(t) && (e.target.value = t.replace(a, ''));
		}
	},
	handleSecurity: function (e) {
		var a = STCUK[this.invocationName],
			t = a.$searchBox.data('parsley-minlength');
		return STCUK.utility.encodeSearch(a.$searchBoxHidden, a.$searchBox.val(), t);
	},
	init: function (e, a) {
		var t = STCUK[a];
		t.setDomElements(e, a), t.bindEvents();
	}
};
STCUK.searchInputHeader = _.clone(STCUK.searchInput);
STCUK.searchResults = {
	noOfResultsPerPage: 10,
	featureResultsAnalytics: 'featured-result',
	searchResultsAnalytics: 'search-result',
	searchNoResults: 'gb:sav:search-results:no-results',
	searchResultSuccess: 'gb:sav:search-results-success',
	noResultsString: 'no-result-found',
	searchResultFound: 'search-result-found',
	searchResultLoad: 'gb:sav:search-results',
	usingElasticSearch: !0,
	bindEvents: function () {
		var e = STCUK[this.invocationName];
		e.$searchResultsLoadMore.addEventListener('click', function () {
			e.displayResults(e.searchResults, e.noOfResultsPerPage);
		}),
			e.$searchResultsList.addEventListener('click', e.handleClickAnalytics.bind(e));
	},
	setDomElements: function (e, t) {
		(this.$el = e),
			(e.dataset.invocationName = t),
			(this.invocationName = t),
			(this.$searchResultsList = e.querySelector('.search-results-result-list')),
			(this.$searchResultsLoadMore = e.querySelector('.search-results-load-more')),
			(this.$searchResultsQuery = e.querySelector('.search-results-query')),
			(this.$searchResultsCount = e.querySelector('.search-results-count')),
			(this.$promoSearchHeading =
				e.querySelector('.search-results-result-promotional .search-results-heading') || null),
			(this.$searchBoxes = document.querySelectorAll('.search-input-container .search-box')),
			(this.$mainSearchBox = document.querySelector('.searchInput .search-box'));
	},
	handleGetData: function (e) {
		var t = STCUK[this.invocationName],
			s = '',
			a = {},
			r = STCUK.utility.validUrl(e.searchResultsElasticUrl);
		!0 === t.usingElasticSearch && void 0 !== e.searchResultsElasticUrl && !0 === r
			? ((s = e.searchResultsElasticUrl),
			  (a = JSON.stringify({
					query: {
						multi_match: {
							query: decodeURI(e.queryParam),
							type: 'best_fields',
							fields: ['jcr:title', 'jcr:description', 'cq:tags', 'path']
						}
					},
					sort: [{ _score: 'desc' }],
					size: 100
			  })),
			  t.getElasticSearchResults(s, a, e))
			: ((s =
					'/sling/servlet/default.gb.search.results.json?query=' +
					encodeURIComponent(e.queryParam) +
					'&searchPath=' +
					e.searchPathParam),
			  t.getAemSearchResults(s, e));
	},
	getElasticSearchResults: function (e, t, s) {
		var a = STCUK[this.invocationName];
		fetch(e, {
			method: 'post',
			body: t,
			mode: 'cors',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
		})
			.then(function (e) {
				return e.json();
			})
			.then(function (e) {
				a.processSearchResults(e.hits.hits, e.hits.total.value, s);
			})
			.catch(function (e) {
				console.error(e);
			});
	},
	getAemSearchResults: function (e, t) {
		var s = STCUK[this.invocationName];
		fetch(e, { method: 'get' })
			.then(function (e) {
				return e.json();
			})
			.then(function (e) {
				s.processSearchResults(e.searchResults.data, e.resultsFound, t);
			})
			.catch(function (e) {
				console.error(e);
			});
	},
	processSearchResults: function (e, t, s) {
		var a = STCUK[this.invocationName];
		a.searchResults = e;
		var r = decodeURIComponent(s.queryParam);
		a.$searchBoxes.forEach(function (e) {
			e.value = r;
		}),
			(a.$searchResultsQuery.textContent = ' for "' + r + '"'),
			(a.$searchResultsCount.textContent = t),
			a.searchResults.length > a.noOfResultsPerPage
				? STCUK.utility.toggleShow(a.$searchResultsLoadMore, 'block')
				: STCUK.utility.toggleShow(a.$searchResultsLoadMore, 'none'),
			a.displayResults(a.searchResults, a.noOfResultsPerPage),
			a.fireSearchResultsAnalytics(r, t, s);
	},
	displayResults: function (e) {
		var t = STCUK[this.invocationName];
		e.forEach(function (e, s) {
			var a = e._source;
			s < t.noOfResultsPerPage &&
				(t.usingElasticSearch
					? t.resultsTemplate(a.path, a['jcr:title'], a['jcr:description'])
					: t.resultsTemplate(e.linkPath, e.heading, e.description));
		}),
			(t.searchResults = e.slice(t.noOfResultsPerPage)),
			0 === t.searchResults.length && STCUK.utility.toggleShow(t.$searchResultsLoadMore, 'none');
	},
	resultsTemplate: function (e, t, s) {
		var a = STCUK[this.invocationName],
			r = document.createElement('div');
		r.classList.add('search-results-result', 'search-results-padded-content', 'ui-content-max-width'),
			(r.innerHTML =
				'<a class="search-results-heading" href="' +
				e +
				'"><span></span></a>\n\t\t\t<div class="search-results-description"></div>'),
			(r.querySelector('.search-results-heading span').innerText = t),
			(r.querySelector('.search-results-description').innerText = s),
			a.$searchResultsList.appendChild(r);
	},
	handleLoadAnalytics: function (e, t) {
		var s = STCUK[this.invocationName];
		'undefined' != typeof digitalData &&
			null !== digitalData &&
			((digitalData.page.pageInfo.pageName = s.searchResultLoad),
			(digitalData.internalSearch.searchKeyword = e),
			(digitalData.internalSearch.searchPath = t));
	},
	handleClickAnalytics: function (e) {
		var t = STCUK[this.invocationName],
			s = e.target,
			a = s.textContent.toLowerCase(),
			r = s.parentNode.classList.contains('search-results-result-promotional');
		r || s.setAttribute('data-search-results-item-selected', 'true'),
			null != a &&
				'undefined' != typeof trackEvent &&
				trackEvent(a, r ? t.featureResultsAnalytics : t.searchResultsAnalytics);
	},
	fireSearchResultsAnalytics: function (e, t, s) {
		var a = s.searchNoResults,
			r = s.noResultsString,
			c = s.searchResultSuccess,
			l = s.searchResultFound;
		'undefined' != typeof digitalData &&
			null !== digitalData &&
			'undefined' != typeof _satellite &&
			null !== _satellite &&
			_satellite.track &&
			((digitalData.internalSearch.searchKeyword = e),
			0 === t
				? ((digitalData.page.pageInfo.pageName = a),
				  (digitalData.internalSearch.searchResultsCount = r),
				  _satellite.track('search-result-not-found'))
				: ((digitalData.page.pageInfo.pageName = c),
				  (digitalData.internalSearch.searchResultsCount = l),
				  _satellite.track('search-result-found')));
	},
	init: function (e, t) {
		var s = STCUK[t],
			a = STCUK.utility;
		s.setDomElements(e, t);
		var r = {
			queryParam: a.getParameterByName('query'),
			searchPathParam: a.getParameterByName('path'),
			searchNoResults: s.searchNoResults,
			noResultsString: s.noResultsString,
			searchResultFound: s.searchResultFound,
			searchResultSuccess: s.searchResultSuccess,
			searchResultsAnalytics: s.searchResultsAnalytics,
			searchResultsElasticUrl: s.$searchBoxes[0].getAttribute('data-search-url'),
			searchElasticReadAuth: s.$searchBoxes[0].getAttribute('data-search-auth')
		};
		s.handleGetData(r), s.handleLoadAnalytics(r.queryParam, r.searchPathParam), s.bindEvents();
	}
};
STCUK.socialShare = {
	setDomElements: function (a, e) {
		var t = STCUK[e],
			n = $(a);
		n.data('invocationName', e),
			(t.$el = n),
			(t.invocationName = e),
			(t.data = n.find('[data-config="socialShare"]').html()),
			(t.jsonData = JSON.parse(t.data).data),
			(t.$socialShareBtn = n.find('#social-share-btn')),
			(t.$socialShareLink = t.$socialShareBtn.find('a')),
			(t.useQuizResult = 'true' === a.dataset.useQuizResult);
	},
	printShareBtn: function (a) {
		for (
			var e, t, n = STCUK[this.invocationName], i = [], r = 0;
			r <= n.jsonData.socialShare.shareList.length - 1;
			r++
		)
			n.jsonData.socialShare.shareList[r] && ((t = n.jsonData.socialShare.shareList[r].shareItemName), i.push(t));
		n.$socialShareBtn.sharrre({
			text: a || document.title,
			share: { facebook: !0, twitter: !0 },
			buttons: { facebook: { popup: { width: 1200, height: 900 } }, twitter: {} },
			url:
				-1 !== n.jsonData.socialShare.shareUrl.indexOf('http')
					? n.jsonData.socialShare.shareUrl
					: window.location.protocol + '//' + window.location.hostname + n.jsonData.socialShare.shareUrl,
			enableCounter: !1,
			enableHover: !1,
			template: (function () {
				var t = '',
					i = n.jsonData.socialShare.shareList;
				for (var r in i)
					if (parseInt(r) >= 0 && i[r]) {
						e = i[r].shareItemName;
						var o = i[r].shareItemIconSvg,
							s = i[r].shareItemIconHoverSvg,
							l = i[r].shareItemIconImg,
							h = i[r].shareItemIconHoverImg,
							c = i[r].shareItemAltText,
							m = $('title').html().replace('|', '-'),
							u =
								i[r].mailTitleI18NLabel +
								' : ' +
								i[r].mailTitle +
								'\r\n' +
								i[r].mailSummaryI18NLabel +
								' : ' +
								i[r].mailSummary +
								'\r\n' +
								i[r].mailLinkI18NLabel +
								' : ' +
								i[r].mailLink;
						a && (u += '\r\n' + a);
						var d = encodeURIComponent(u);
						t +=
							'<a class="' +
							e +
							'" title="' +
							c +
							'" href="' +
							('mail' === e ? 'mailto:?subject=' + m + '&body=' + d : '#') +
							'"><svg width="35" height="35" class="share-icon"><image xlink:href="' +
							o +
							'" src="' +
							l +
							'" alt="' +
							c +
							'" width="35" height="35" /></svg><svg width="35" height="35" class="share-icon-hover"><image xlink:href="' +
							s +
							'" src="' +
							h +
							'" alt="' +
							c +
							'" width="35" height="35" /></svg></a>';
					}
				return t;
			})(),
			render: function (a, t) {
				for (var r in i) parseInt(r) >= 0 && i[r] && ((e = i[r]), n.handleClick(a, e, n));
			}
		});
	},
	handleClick: function (a, e, t) {
		$(a.element).on('click', '.' + e, function (n) {
			'mail' !== e ? a.openPopup(this.className) : (window.location = a.element.querySelector('.mail').href),
				t.handleAnalytics(n);
		});
	},
	handleAnalytics: function (a) {
		var e = $(a.currentTarget).attr('class');
		null != e &&
			'undefined' != typeof trackEvent &&
			null !== trackEvent &&
			((e = e.toLowerCase()), trackEvent(e, 'content-share'));
	},
	init: function (a, e) {
		var t = STCUK[e];
		t.setDomElements(a, e), t.useQuizResult || t.printShareBtn();
	}
};
STCUK.storyContainer = {
	bindEvents: function () {
		var e = STCUK[this.invocationName],
			n = STCUK.utility,
			t = _.debounce(e.orientationCheck.bind(e), 50);
		window.addEventListener('resize', t),
			e.isAndroid &&
				e.isMobileRes &&
				e.$launchFullscreenBtn.addEventListener('click', e.launchFullScreen.bind(e)),
			document.addEventListener('fullscreenchange', function () {
				document.fullscreenElement ||
					(e.$launchFullscreenBtn.classList.remove('hidden'),
					document.documentElement.classList.remove('fullscreen-mode'));
			});
		var i = _.debounce(function () {
			var t = n.getAnchorLink().split('&')[0],
				i = e.getCurrentVisibleSection();
			if (t !== STCUK[i.dataset.invocationName].sectionId) {
				var o = e.$el.querySelector('[data-section-id="' + t + '"]');
				e.scrollToSection(o);
			}
		}, 100);
		window.addEventListener('hashchange', i),
			document.addEventListener('readystatechange', function n() {
				if ('interactive' === document.readyState || 'complete' === document.readyState) {
					e.$videoSections = Array.prototype.slice.call(e.$storySections).filter(function (e) {
						return e.querySelectorAll('video').length > 0;
					});
					var t = e.$videoSections[0].dataset.invocationName;
					STCUK[t].preloadVideos(), document.removeEventListener('readystatechange', n);
				}
			}),
			e.$storySections.forEach(function (n) {
				n.addEventListener('transitionend', e.transitionEndHandler.bind(e));
			}),
			window.addEventListener('load', function () {
				e.$orientationWarning && e.orientationCheck();
			});
	},
	setDomElements: function (e, n) {
		var t = STCUK[n];
		(t.$el = e),
			(e.dataset.invocationName = n),
			(t.invocationName = n),
			(t.$orientationWarning = e.querySelector('.orientation-warning')),
			(t.$storySectionsWrapper = e.querySelector('.story-sections')),
			(t.$storySections = e.querySelectorAll('.story-section')),
			(t.$videoSnippets = e.querySelectorAll('.video-snippet')),
			(t.$pannellumViewers = e.querySelectorAll('.pannellum')),
			(t.$header = e.querySelector('.story-header')),
			(t.$launchFullscreenBtn = e.querySelector('.launch-fullscreen-btn')),
			(t.$inAppBrowserMsg = e.querySelector('.in-app-browser-message')),
			t.$inAppBrowserMsg && (t.$arrowIcon = t.$inAppBrowserMsg.querySelector('.arrow-icon')),
			(t.$firstStorySection = e.querySelector('.story-section')),
			(t.youtubeLibLoaded = !1),
			(t.isAndroid = void 0 !== cssua.userAgent.mobile && 'android' === cssua.userAgent.mobile),
			(t.isMobileRes = STCUK.utility.checkMobileResolution());
	},
	launchFullScreen: function () {
		var e = STCUK[this.invocationName],
			n = window.document.documentElement;
		(n.requestFullscreen || n.mozRequestFullScreen || n.webkitRequestFullScreen || n.msRequestFullscreen).call(n),
			n.classList.add('fullscreen-mode'),
			e.$launchFullscreenBtn.classList.add('hidden'),
			e.customTracking('istories-full-screen');
	},
	toggleFullScreenIcon: function (e) {
		var n = STCUK[this.invocationName];
		'landscape' === e && n.isAndroid && n.isMobileRes && !document.fullscreenElement
			? n.$launchFullscreenBtn.classList.remove('hidden')
			: n.$launchFullscreenBtn.classList.add('hidden');
	},
	orientationCheck: function () {
		var e = STCUK[this.invocationName],
			n = STCUK.utility.getOrientation();
		e.setViewableAreaHeight(),
			e.toggleFullScreenIcon(n),
			e.$orientationWarning &&
				('portrait' === n
					? (e.fireOrientationEvent('show'), e.customTracking('istories-screen-rotate'))
					: e.fireOrientationEvent('hide'));
	},
	fireOrientationEvent: function (e) {
		var n = document.createEvent('Event'),
			t = 'show' === e ? 'ShowOrientationWarning' : 'HideOrientationWarning';
		n.initEvent(t, !0, !0), window.dispatchEvent(n);
	},
	initStoryElement: function () {
		var e = STCUK[this.invocationName],
			n = STCUK.utility.getAnchorLink().split('&')[0];
		e.isAuthor() ||
			(0 === n.length
				? e.$storySections[0].classList.remove('hidden')
				: e.$storySections.forEach(function (e) {
						n === e.dataset.sectionId && e.classList.remove('hidden');
				  }));
	},
	scrollToSection: function (e) {
		var n = STCUK[this.invocationName],
			t = STCUK[e.dataset.invocationName],
			i = n.getCurrentSection(),
			o = STCUK[i.dataset.invocationName];
		t.preloadVideos && !t.videosPreloaded && t.preloadVideos(),
			i.classList.add('disable'),
			e.classList.add('offscreen-right', 'disable'),
			e.classList.remove('hidden'),
			o.preAnimateOut && o.preAnimateOut(),
			t.preAnimateIn && t.preAnimateIn(),
			n.slideToLeft(i, !1),
			n.slideToLeft(e, !0);
	},
	transitionEndHandler: function (e) {
		var n = e.target,
			t = STCUK[n.dataset.invocationName];
		n.classList.remove('disable'),
			n.classList.contains('offscreen-left')
				? (n.classList.add('hidden'), n.classList.remove('offscreen-left'), t.unload && t.unload())
				: ((location.hash = t.sectionId), t.load && t.load(), t.transitionInHandler && t.transitionInHandler());
	},
	slideToLeft: function (e, n) {
		var t = STCUK[e.dataset.invocationName];
		n
			? (e.classList.remove('offscreen-right'),
			  t.invocationName.includes('pannellum') && (t.load(), e.classList.remove('disable')))
			: e.classList.add('offscreen-left');
	},
	getCurrentSection: function () {
		var e = STCUK[this.invocationName],
			n = void 0;
		return (
			e.$storySections.forEach(function (e) {
				e.classList.contains('hidden') || (n = e);
			}),
			n
		);
	},
	loadPannellumLibrary: function () {
		var e = STCUK[this.invocationName],
			n = document.createElement('script');
		(n.type = 'text/javascript'),
			(n.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.2/build/pannellum.js'),
			document.body.appendChild(n),
			(n.onload = function () {
				e.$pannellumViewers.forEach(function (e) {
					var n = STCUK[e.dataset.invocationName];
					n.isHidden() || n.loadViewer();
				});
			});
	},
	loadYTLibrary: function () {
		var e = STCUK[this.invocationName],
			n = STCUK.utility;
		window.onYouTubeIframeAPIReady = function () {
			n.isAuthorMode() &&
				e.$videoSnippets.forEach(function (e) {
					STCUK[e.dataset.invocationName].loadPlayer();
				});
		};
		var t = document.createElement('script');
		(t.type = 'text/javascript'),
			(t.src = 'https://www.youtube.com/iframe_api'),
			document.body.appendChild(t),
			t.addEventListener('load', function () {
				e.youtubeLibLoaded = !0;
			});
	},
	getCurrentVisibleSection: function () {
		var e = STCUK[this.invocationName].$el.querySelectorAll('.story-section:not(.hidden)');
		return e[e.length - 1];
	},
	setViewableAreaHeight: function () {
		var e = STCUK[this.invocationName],
			n = window.innerHeight + 'px';
		(document.body.style.height = n), (e.$el.style.height = n);
	},
	checkIfInAppBrowser: function () {
		var e = STCUK[this.invocationName],
			n = STCUK.utility.detectInAppBrowser();
		n.inApp &&
			e.$inAppBrowserMsg &&
			(e.$arrowIcon.classList.add(n.appName),
			e.$inAppBrowserMsg.classList.remove('hidden'),
			e.customTracking('istories-change-browser'));
	},
	customTracking: function (e) {
		'undefined' != typeof _satellite && _satellite.track && _satellite.track(e);
	},
	isAuthor: function () {
		return STCUK[this.invocationName].$el.classList.contains('author');
	},
	init: function (e, n) {
		var t = STCUK[n],
			i = STCUK.utility;
		i.removeHeader(),
			i.nonScrollingPage(),
			t.setDomElements(e, n),
			t.orientationCheck(),
			t.bindEvents(),
			t.checkIfInAppBrowser(),
			t.loadPannellumLibrary(),
			t.loadYTLibrary(),
			t.isAndroid &&
				t.isMobileRes &&
				void 0 !== t.$arrowIcon &&
				t.$arrowIcon.classList.contains('instagram') &&
				(t.$arrowIcon.classList.remove('instagram'), t.$arrowIcon.classList.add('top-right')),
			t.initStoryElement();
	}
};
STCUK.supportTracker = {
	bindEvents: function () {
		var e = STCUK[this.invocationName];
		e.$searchInput.addEventListener('focus', e.hideErrorMessage.bind(e)),
			e.$searchInput.addEventListener('keyup', function (t) {
				'' === e.$searchInput.value ? e.hideErrorMessage() : 13 === t.keyCode && e.search();
			}),
			e.$searchBtn.addEventListener('click', e.search.bind(e));
	},
	setDomElements: function (e, t) {
		var s = STCUK[t];
		(s.$el = e),
			(e.dataset.invocationName = t),
			(s.invocationName = t),
			(s.$controls = e.querySelector('.search-controls')),
			(s.$errorMessage = s.$controls.querySelector('.error-message')),
			(s.$searchInput = s.$controls.querySelector('.search-input')),
			(s.$searchBtn = s.$controls.querySelector('.search-btn')),
			(s.$results = e.querySelector('.search-results')),
			(s.$resultsTitle = s.$results.querySelector('.title')),
			(s.$resultsTitleTemplate = s.$results.querySelector('.title.template')),
			(s.$resultsPhoto = s.$results.querySelector('.photo')),
			(s.$resultsPositive = s.$results.querySelector('.positive')),
			(s.$resultsNegative = s.$results.querySelector('.negative')),
			(s.$resultsPositiveSupportText = s.$resultsPositive.querySelector('.support-text')),
			(s.$resultsNegativeSupportText = s.$resultsNegative.querySelector('.support-text')),
			(s.$resultsPositiveSupportTextTemplate = s.$resultsPositive.querySelector('.support-text.template')),
			(s.$resultsNegativeSupportTextTemplate = s.$resultsNegative.querySelector('.support-text.template')),
			(s.$resultsActionBtn = s.$results.querySelectorAll('.action-btn')),
			(s.$resultsAdditionalText = s.$results.querySelectorAll('.additional-text')),
			STCUK.serviceCalls.fetchPostcodeRegex('GB').then(function (e) {
				s.$searchInput.pattern = e;
			}),
			(s.dataServiceUrl = e.dataset.enDataServiceUrl),
			(s.token = e.dataset.enApiToken),
			(s.causeId = e.dataset.causeId),
			(s.supportCheckUrl = e.dataset.supportCheckUrl);
	},
	search: function () {
		var e = STCUK[this.invocationName],
			t = STCUK.serviceCalls;
		if (e.checkPostcodeValidity()) {
			var s = e.$searchInput,
				r = s.value;
			s.blur(),
				t.lookupMP(e.dataServiceUrl, e.token, r).then(function (t) {
					if (1 === t.length) {
						var s = t[0].columns;
						e.updateResults(s);
						var r = e.supportCheckUrl + '?mpId=' + s[0].value + '&causeId=' + e.causeId;
						fetch(r)
							.then(function (e) {
								return e.json();
							})
							.then(function (t) {
								e.showResults(t);
							})
							.catch(function (e) {
								console.error(e);
							});
					} else e.showErrorMessage();
				});
		}
	},
	checkPostcodeValidity: function () {
		var e = STCUK[this.invocationName];
		e.$searchInput.value = e.$searchInput.value.toUpperCase();
		var t = e.$searchInput.checkValidity();
		return t ? e.hideErrorMessage() : e.showErrorMessage(), t;
	},
	hideErrorMessage: function () {
		var e = STCUK[this.invocationName];
		e.$errorMessage.classList.add('hidden'), e.$searchInput.classList.remove('error');
	},
	showErrorMessage: function () {
		var e = STCUK[this.invocationName];
		e.$errorMessage.classList.remove('hidden'), e.$searchInput.classList.add('error');
	},
	updateResults: function (e) {
		var t = STCUK[this.invocationName];
		t.resetTemplate(t.$resultsTitle, t.$resultsTitleTemplate),
			t.resetTemplate(t.$resultsPositiveSupportText, t.$resultsPositiveSupportTextTemplate),
			t.resetTemplate(t.$resultsNegativeSupportText, t.$resultsNegativeSupportTextTemplate),
			e.forEach(function (e) {
				t.updateEl(t.$resultsTitle, e),
					t.updateEl(t.$resultsPositiveSupportText, e),
					t.updateEl(t.$resultsNegativeSupportText, e);
			});
	},
	resetTemplate: function (e, t) {
		e.innerHTML = t.innerHTML;
	},
	updateEl: function (e, t) {
		var s = '{' + t.name + '}',
			r = t.value,
			a = new RegExp(s, 'g');
		e.innerHTML = e.innerHTML.replace(a, r);
	},
	showResults: function (e) {
		var t = STCUK[this.invocationName],
			s = STCUK.utility;
		t.$results.classList.remove('hidden'),
			e
				? (t.$resultsPositive.classList.remove('hidden'), t.$resultsNegative.classList.add('hidden'))
				: (t.$resultsPositive.classList.add('hidden'), t.$resultsNegative.classList.remove('hidden')),
			s._scrollToElement(t.$results);
	},
	init: function (e, t) {
		var s = STCUK[t];
		s.setDomElements(e, t), s.bindEvents();
	}
};
STCUK.teaserCircleImage = {
	setDomElements: function (e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'teaserCircleImage';
		(this.$el = e),
			(e.dataset.invocationName = t),
			(this.invocationName = t),
			(this.$currentSection = e.closest('.section')),
			this.$currentSection && (this.$prevComponent = this.$currentSection.previousElementSibling);
	},
	adjustSpacing: function () {
		this.$prevComponent &&
			this.$prevComponent.classList.contains('teaserCircleImage') &&
			this.$el.classList.add('ui-circle-image-negative-margin');
	},
	init: function (e, t) {
		var i = STCUK[t];
		i.setDomElements(e, t), i.adjustSpacing();
	}
};
STCUK.textSnippet = _.extend({}, _.clone(STCUK.contentSnippet), {
	bindEvents: function () {
		var t = STCUK[this.invocationName],
			e = STCUK.utility;
		t.$icon = t.$pannellum.querySelector('.text-hotspot.' + this.invocationName);
		var n = _.debounce(t.alignVertically.bind(t), 100);
		window.addEventListener('resize', n),
			e.isAuthorMode() || t.$icon.addEventListener('click', t.show.bind(t)),
			t.$closeIcon.addEventListener('click', t.hide.bind(t));
	},
	getConfig: function () {
		var t = STCUK[this.invocationName],
			e = STCUK.pannellum;
		return {
			pitch: t.pitch,
			yaw: t.yaw,
			cssClass: 'text-hotspot ' + this.invocationName,
			createTooltipFunc: e.createTooltip,
			createTooltipArgs: t.markerText
		};
	}
});
STCUK.movingPortrait = _.extend({}, _.clone(STCUK.storyElement), {
	positionMap: { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six' },
	bindEvents: function () {
		var e = STCUK[this.invocationName];
		e.bindClick(e.$el);
		var i = _.debounce(e.sizeVideo.bind(e), 100);
		window.addEventListener('resize', i);
	},
	setDomElements: function (e, i) {
		var t = STCUK[i];
		STCUK.storyElement.setDomElements(e, i),
			(t.$storyGrid = e.closest('.story-grid')),
			(t.storyGrid = STCUK[t.$storyGrid.dataset.invocationName]),
			(t.$video = e.querySelector('.video')),
			(t.$overlayText = e.querySelector('.overlay-text')),
			(t.$strapLineText = e.querySelector('.strapLine-text')),
			(t.nextVideosPreloaded = !1);
		var o = void 0;
		o = t.$overlayText
			? (o = (o = t.$overlayText.innerHTML).replace(/<br>/g, ' ')).replace(/(<([^>]+)>)/gi, '')
			: t.$strapLineText.innerText;
		var n = i.replace('movingPortrait', ''),
			d = t.positionMap['' === n ? '1' : n];
		digitalData.page.component.story.grid.position[d] = o.trim();
	},
	videoPercentBuffered: function (e) {
		return (e.duration > 0 && e.buffered.length > 0 ? (e.buffered.end(0) / e.duration) * 100 : 0).toFixed(0);
	},
	hasVideoLoaded: function (e, i, t) {
		'100' === e.videoPercentBuffered(e.$video) &&
			(e.$video.classList.add('fully-loaded'),
			e.$video.play(),
			window.clearInterval(e.checkVidLoading),
			i.videosToLoad.splice(t, 1),
			i.preloadVideos());
	},
	preloadVideos: function (e, i) {
		var t = STCUK[this.invocationName];
		if (!STCUK.utility.isAuthorMode()) {
			var o = t.$video;
			o.setAttribute('preload', 'auto'),
				o.play(),
				o.pause(),
				(t.checkVidLoading = window.setInterval(t.hasVideoLoaded, 200, t, e, i));
		}
	},
	preloadNextVideos: function () {
		var e = STCUK[this.invocationName],
			i = e.$nextSection.dataset.invocationName;
		(e.nextVideosPreloaded = !0),
			setTimeout(function () {
				STCUK[i].preloadVideos();
			}, 2e3);
	},
	sizeVideo: function () {
		var e = STCUK[this.invocationName],
			i = e.$el.clientHeight,
			t = e.$video.clientHeight,
			o = e.$el.clientWidth,
			n = e.$video.clientWidth;
		i > t
			? (e.$video.classList.add('long'), e.$video.classList.remove('tall'))
			: o > n && (e.$video.classList.add('tall'), e.$video.classList.remove('long')),
			e.alignVideo();
	},
	alignVideo: function () {
		var e = STCUK[this.invocationName],
			i = e.$el.clientHeight,
			t = e.$video.clientHeight;
		e.$video.classList.contains('middle') &&
			(e.$video.style.transform = t > i ? 'translateY(-' + (t - i) / 2 + 'px)' : 'translateY(0)');
	},
	init: function (e, i) {
		var t = STCUK[i],
			o = STCUK.utility;
		STCUK.storyElement.init(e, i),
			o.isAuthorMode() || t.storyGrid.isHidden() || setTimeout(t.sizeVideo.bind(t), 1e3);
	}
});
STCUK.storyGrid = {
	bindEvents: function () {
		var t = STCUK[this.invocationName];
		document.addEventListener('readystatechange', function o() {
			('interactive' !== document.readyState && 'complete' !== document.readyState) ||
				((t.videosToLoad = Array.prototype.slice.call(t.$movingPortraits).map(function (t) {
					return STCUK[t.dataset.invocationName];
				})),
				window.location.hash.replace('#', '') === t.sectionId && (t.preAnimateIn(), t.preloadVideos()),
				document.removeEventListener('readystatechange', o));
		});
	},
	setDomElements: function (t, o) {
		var e = STCUK[o];
		(e.$el = t),
			(t.dataset.invocationName = o),
			(e.invocationName = o),
			(e.sectionId = t.dataset.sectionId),
			(e.$movingPortraits = t.querySelectorAll('.moving-portrait')),
			(e.randomiseVideoLoading = t.querySelector('.grid-items').classList.contains('randomise-loading')),
			(e.videosToLoad = []);
	},
	isHidden: function () {
		return STCUK[this.invocationName].$el.classList.contains('hidden');
	},
	transitionInHandler: function () {
		STCUK[this.invocationName].$movingPortraits.forEach(function (t) {
			var o = STCUK[t.dataset.invocationName];
			o.$video.paused && o.$video.classList.contains('fully-loaded') && o.$video.play();
		});
	},
	getRandomInt: function (t, o) {
		return (t = Math.ceil(t)), (o = Math.floor(o)), Math.floor(Math.random() * (o - t + 1)) + t;
	},
	preloadVideos: function () {
		var t = STCUK[this.invocationName];
		if (t.videosToLoad.length > 0) {
			var o = t.randomiseVideoLoading ? t.getRandomInt(0, t.videosToLoad.length - 1) : 0;
			t.videosToLoad[o].preloadVideos(t, o);
		}
	},
	loadNextVideo: function (t, o) {
		t.dataset.nextSectionId && !o.nextVideosPreloaded && o.preloadNextVideos(t.dataset.nextSectionId);
	},
	preAnimateIn: function () {
		var t = STCUK[this.invocationName];
		t.$movingPortraits.forEach(function (o) {
			var e = STCUK[o.dataset.invocationName];
			e.sizeVideo(), t.loadNextVideo(o, e);
		});
	},
	preAnimateOut: function () {
		STCUK[this.invocationName].$movingPortraits.forEach(function (t) {
			STCUK[t.dataset.invocationName].$video.pause();
		});
	},
	init: function (t, o) {
		var e = STCUK[o];
		e.setDomElements(t, o), e.bindEvents();
	}
};
STCUK.storyImage = _.extend({}, _.clone(STCUK.storyElement), {
	bindEvents: function () {
		var e = STCUK[this.invocationName],
			t = _.debounce(function () {
				e.sizeImage();
			}, 100);
		window.addEventListener('resize', t), e.bindClick(e.$button);
	},
	setDomElements: function (e, t) {
		var i = STCUK[t];
		STCUK.storyElement.setDomElements(e, t),
			(i.$content = e.querySelector('.content')),
			(i.$button = e.querySelector('.button')),
			(i.$image = e.querySelector('.image'));
	},
	sizeImage: function () {
		var e = STCUK[this.invocationName],
			t = e.$el.clientHeight,
			i = e.$image.clientHeight,
			n = e.$el.clientWidth,
			a = e.$image.clientWidth;
		t > i
			? (e.$image.classList.add('long'), e.$image.classList.remove('tall'))
			: n > a && (e.$image.classList.add('tall'), e.$image.classList.remove('long')),
			e.alignImage();
	},
	alignImage: function () {
		var e = STCUK[this.invocationName],
			t = e.$el.clientHeight,
			i = e.$image.clientHeight,
			n = e.$el.clientWidth,
			a = e.$image.clientWidth;
		(e.$image.style.left = a > n ? '-' + (a - n) / 2 + 'px' : 0),
			e.$image.classList.contains('middle') && (e.$image.style.top = i > t ? '-' + (i - t) / 2 + 'px' : 0);
	},
	unload: function () {
		STCUK[this.invocationName].$content.style.opacity = 0;
	},
	load: function () {
		var e = STCUK[this.invocationName];
		STCUK.utility.fadeIn(e.$content, 1e3);
	},
	init: function (e, t) {
		var i = STCUK[t];
		STCUK.storyElement.init(e, t),
			setTimeout(function () {
				i.sizeImage(), i.load();
			}, 1e3);
	}
});
STCUK.storyVideo = _.extend({}, _.clone(STCUK.storyElement), {
	bindEvents: function () {
		var t = STCUK[this.invocationName],
			e = STCUK.utility,
			i = _.debounce(function () {
				t.sizeVideo(), t.$content.classList.contains('hidden') || t.alignContent();
			}, 100);
		window.addEventListener('resize', i);
		var n = _.debounce(function () {
			t.setVideoOrienation();
		}, 100);
		window.addEventListener('resize', n),
			window.addEventListener('DOMContentLoaded', function () {
				window.location.hash.replace('#', '') === t.sectionId &&
					(t.$video.setAttribute('preload', 'auto'), t.playVideo());
			}),
			t.$video.addEventListener('ended', function (e) {
				t.$button || t.storyContainer.scrollToSection(t.$nextSection);
			}),
			window.addEventListener('ShowOrientationWarning', function () {
				t.isHidden() || t.$video.paused || t.$video.pause();
			}),
			window.addEventListener('HideOrientationWarning', function () {
				!t.isHidden() && t.$video.paused && t.$video.play();
			}),
			t.$button && t.bindClick(t.$button),
			t.$previousButton &&
				t.$previousButton.addEventListener('click', function () {
					t.storyContainer.scrollToSection(t.$previousSection);
				}),
			t.$playButton.addEventListener('click', function () {
				t.$video.play(),
					e.fadeOut(t.$playButton, 1e3, function () {
						t.$playButton.classList.add('hidden');
					});
			});
	},
	setVideoOrienation: function () {
		var t = STCUK[this.invocationName];
		'landscape' === STCUK.utility.getOrientation() && (t.$video.style.transform = '');
	},
	setDomElements: function (t, e) {
		var i = STCUK[e];
		STCUK.storyElement.setDomElements(t, e),
			(i.$video = t.querySelector('.video')),
			(i.$content = t.querySelector('.content')),
			(i.$button = t.querySelector('.button')),
			(i.$previousButton = t.querySelector('.previous-section')),
			(i.$playButton = t.querySelector('.play-button')),
			(i.videosPreloaded = !1),
			i.$previousButton &&
				((i.previousSectionId = t.dataset.previousSectionId),
				(i.$previousSection = document.querySelector('[data-section-id="' + i.previousSectionId + '"]'))),
			i.isMute() || (i.$video.muted = !1);
	},
	transitionInHandler: function () {
		var t = STCUK[this.invocationName];
		t.$video.paused && !t.$el.classList.contains('offscreen-left') && t.playVideo();
	},
	loadVideo: function () {
		var t = STCUK[this.invocationName];
		void 0 !== cssua.userAgent.mobile && t.$video.load();
	},
	preloadVideos: function () {
		var t = STCUK[this.invocationName];
		STCUK.utility.isAuthorMode() ||
			(t.$video.setAttribute('preload', 'auto'), t.loadVideo(), (t.videosPreloaded = !0));
	},
	unload: function () {
		var t = STCUK[this.invocationName];
		t.$button && t.$content.classList.add('hidden'),
			t.$previousButton && t.$previousButton.classList.add('hidden'),
			(t.$video.currentTime = 0);
	},
	load: function () {
		STCUK[this.invocationName].showContent();
	},
	preAnimateIn: function () {
		STCUK[this.invocationName].sizeVideo();
	},
	preAnimateOut: function () {
		STCUK[this.invocationName].$video.pause();
	},
	alignContent: function () {
		var t = STCUK[this.invocationName],
			e = t.$el.offsetHeight,
			i = t.$content.offsetHeight,
			n = STCUK.utility.getOrientation(),
			o = STCUK.utility.checkDesktopResolution();
		'landscape' === n && (t.$content.style.top = (e - i) / 1.6 + 'px'),
			('portrait' !== n && 'landscape' !== n) || o || (t.$content.style.top = (e - i) / 2 + 'px');
	},
	sizeVideo: function () {
		var t = STCUK[this.invocationName],
			e = t.$el.clientHeight,
			i = t.$video.clientHeight,
			n = t.$el.clientWidth,
			o = t.$video.clientWidth;
		e > i
			? (t.$video.classList.add('long'), t.$video.classList.remove('tall'))
			: n > o && (t.$video.classList.add('tall'), t.$video.classList.remove('long')),
			t.alignVideo();
	},
	alignVideo: function () {
		var t = STCUK[this.invocationName],
			e = t.$el.clientHeight,
			i = t.$video.clientHeight,
			n = t.$el.clientWidth,
			o = t.$video.clientWidth,
			a = '0',
			d = '0';
		o > n && (a = '-' + (o - n) / 2 + 'px'),
			t.$video.classList.contains('middle') && i > e && (d = '-' + (i - e) / 2 + 'px'),
			(t.$video.style.transform = 'translate(' + a + ', ' + d + ')');
	},
	isMute: function () {
		return 'true' === STCUK[this.invocationName].$el.dataset.muteVideo;
	},
	playVideo: function () {
		var t = STCUK[this.invocationName];
		(t.$video.currentTime = 0),
			t.$video.play().catch(function (e) {
				t.isMute() ? console.log(e) : t.$playButton.classList.remove('hidden');
			});
	},
	showContent: function () {
		var t = STCUK[this.invocationName],
			e = STCUK.utility;
		t.$button && (e.fadeIn(t.$content, 1e3), t.alignContent(), e.fadeIn(t.$previousButton, 1e3));
	},
	init: function (t, e) {
		var i = STCUK[e],
			n = STCUK.utility;
		STCUK.storyElement.init(t, e),
			n.isAuthorMode()
				? i.alignContent()
				: i.isHidden() ||
				  setTimeout(function () {
						i.sizeVideo(), i.showContent();
				  }, 1e3);
	}
});
STCUK.videoSnippet = _.extend({}, _.clone(STCUK.contentSnippet), {
	bindEvents: function () {
		var e = STCUK[this.invocationName],
			n = STCUK.utility;
		(e.$icon = e.$pannellum.querySelector('.video-hotspot.' + this.invocationName)),
			n.isAuthorMode() || e.$icon.addEventListener('click', e.show.bind(e)),
			e.$closeIcon.addEventListener('click', e.hide.bind(e)),
			window.addEventListener('ShowOrientationWarning', function () {
				e.isHidden() || 1 !== e.player.getPlayerState() || e.player.pauseVideo();
			}),
			window.addEventListener('HideOrientationWarning', function () {
				e.isHidden() || 2 !== e.player.getPlayerState() || e.player.playVideo();
			});
	},
	setDomElements: function (e, n) {
		var i = STCUK[n];
		STCUK.contentSnippet.setDomElements(e, n),
			(i.videoId = e.dataset.videoId),
			(i.$player = e.querySelector('.player'));
	},
	loadPlayer: function () {
		var e = STCUK[this.invocationName];
		e.player = new YT.Player(e.$player, { height: '100%', width: '100%', videoId: e.videoId });
	},
	show: function (e) {
		var n = STCUK[this.invocationName];
		_.clone(STCUK.contentSnippet).show.call(n, e), n.player || n.loadPlayer();
	},
	hide: function (e) {
		var n = STCUK[this.invocationName];
		_.clone(STCUK.contentSnippet).hide.call(n, e), n.player && n.player.pauseVideo();
	},
	isHidden: function () {
		return STCUK[this.invocationName].$el.classList.contains('hidden');
	},
	getConfig: function () {
		var e = STCUK[this.invocationName],
			n = STCUK.pannellum;
		return {
			pitch: e.pitch,
			yaw: e.yaw,
			cssClass: 'video-hotspot ' + this.invocationName,
			createTooltipFunc: n.createTooltip,
			createTooltipArgs: e.markerText,
			youtubeLibLoaded: !!window.YT
		};
	}
});
(STCUK.componentLoader = {
	onPageLoadComponentEls: [].slice.call(document.querySelectorAll('[data-role]')),
	pageComponents: [],
	componentsWaitingForPolyfills: [],
	formsComponents: [],
	invokeComponents: function (n) {
		n.forEach(function (n) {
			if (STCUK[n.name]) {
				var o, e;
				if (n.instanceOfComponent > 1) {
					var t = n.name + n.instanceOfComponent;
					(STCUK[t] = _.clone(STCUK[n.name])), (o = STCUK[t].init), (e = t);
				} else (o = STCUK[n.name].init), (e = n.name);
				STCUK.componentLoader.runComponentInitFunc(n, o, e);
			} else STCUK.componentLoader.formsComponents.push(n);
		});
	},
	runComponentInitFunc: function (n, o, e) {
		'function' == typeof o &&
			(STCUK.needsPolyfill && !0 !== STCUK.polyFillsLoaded
				? STCUK.componentLoader.componentsWaitingForPolyfills.push({
						func: o,
						componentEl: n.el,
						invocationName: e
				  })
				: o(n.el, e));
	},
	initialiseQueuedComponents: function (n) {
		n.length > 0 &&
			n.forEach(function (n) {
				n.func(n.componentEl, n.invocationName);
			});
	},
	init: function () {
		var n = [],
			o = {};
		STCUK.componentLoader.onPageLoadComponentEls.forEach(function (e) {
			var t = e.getAttribute('data-role');
			-1 !== STCUK.componentMap.indexOf(t) &&
				(-1 !== n.indexOf(t)
					? (o[t] ? (o[t].count = o[t].count + 1) : (o[t] = { count: 2 }),
					  STCUK.componentLoader.pageComponents.push({ name: t, el: e, instanceOfComponent: o[t].count }))
					: (n.push(t),
					  STCUK.componentLoader.pageComponents.push({ name: t, el: e, instanceOfComponent: 1 })));
		}),
			STCUK.componentLoader.invokeComponents(STCUK.componentLoader.pageComponents);
	}
}),
	STCUK.componentLoader.init();
(STCUK.app = {
	bindEvents: function () {
		var e = $(document);
		e
			.on('mousedown', 'a', function (n) {
				return e.focus(), e.blur(), !1;
			})
			.on('mousedown', 'button', function (n) {
				return e.focus(), e.blur(), !1;
			}),
			$(window).on('unload', function () {
				window.paypalWindow && window.paypalWindow.close();
			}),
			$('.body-text.ui-component').on('click', 'a[href^=#]', function (e) {
				e.preventDefault();
				var n,
					t = $(this).attr('href'),
					o = 0;
				(t = t.length ? t.substring(1) : ''),
					(n = $('[name=' + t + '], [id=' + t + ']')).length &&
						((o = STCUK.utility.getHeaderHeight(1)), $('body,html').scrollTop(n.offset().top - o - 15));
			}),
			document.addEventListener('DOMContentLoaded', function () {
				var e = document.querySelector('.admin-page');
				window.IntersectionObserver && !e
					? yall({
							observeChanges: !0,
							threshold: 200,
							lazyClass: 'lazyload',
							lazyBackgroundClass: 'lazyload-bg',
							lazyBackgroundLoaded: 'lazyload-bg-loaded',
							events: {
								load: function (e) {
									e.target.classList.contains('lazyload') || e.target.classList.add('lazy-loaded');
								}
							}
					  })
					: STCUK.utility.loadElsImmediately();
			}),
			window.addEventListener('load', function () {
				((cssua && cssua.userAgent.ie) || STCUK.utility.isLegacyEdge()) && STCUK.utility.showLegacyBanner();
			});
		var n = document.querySelector('.launch-ot-cookie-preferences');
		n &&
			n.addEventListener('click', function (e) {
				OneTrust && OneTrust.ToggleInfoDisplay();
			});
	},
	checkForFormsComponents: function () {
		var e = $(document.body).hasClass('donation-form-page');
		if (STCUK.componentLoader.formsComponents.length > 0 && !e) {
			var n = '?ts=' + Date.now();
			STCUK.utility.loadStyleSheet('/etc/clientlibs/ui/forms.css' + n),
				STCUK.utility.loadScript('/etc/clientlibs/ui/forms.js' + n);
		}
	},
	checkIfBlogPage: function () {
		var e = document.querySelector('#page-content');
		!!e && e.classList.contains('blog-page') && STCUK.blogPageUtils.checkForEmbeddedTweets();
	},
	init: function () {
		window._satellite || (window._satellite = { track: function () {} }),
			STCUK.app.bindEvents(),
			STCUK.app.checkForFormsComponents(),
			STCUK.app.checkIfBlogPage(),
			STCUK.captcha.init(),
			STCUK.xfLoader.init();
	}
}),
	STCUK.app.init();
