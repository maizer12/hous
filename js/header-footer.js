$(function () {
	var mq = window.matchMedia('(min-width: 769px)')
	var accordion = $('#accordion').accordion({
		active: null,
		collapsible: true,
		heightStyle: 'content',
	})

	function checkBreakpoint(mq) {
		if (mq.matches) {
			accordion.accordion('destroy')
		} else {
			accordion = $('#accordion').accordion({
				active: null,
				collapsible: true,
				heightStyle: 'content',
			})
		}
	}

	mq.addListener(checkBreakpoint)
	checkBreakpoint(mq)
})
const labelSearch = document.querySelector('.header-content__label')

labelSearch?.addEventListener('click', () => {
	document
		.querySelector('.header-search')
		?.classList.toggle('header-search-open')
})

const burger = document.querySelector('.burger-menu')
const body = document.querySelector('body')
const btnSearch = document.querySelector('#search-btn')
const btnContacts = document.querySelector('#btn-contacts')
const addBodyClass = text => {
	body.classList.add(text)
}

burger?.addEventListener('click', () => {
	if (body.classList.contains('menu-open')) {
		body.classList = ''
	} else {
		addBodyClass('menu-open')
		addBodyClass('catalog-open')
	}
})
btnSearch?.addEventListener('click', () => {
	addBodyClass('menu-open')
	addBodyClass('search-open')
})
btnContacts?.addEventListener('click', () => {
	addBodyClass('menu-open')
	addBodyClass('contacts-open')
})
$('#header-accordion').accordion({
  active: null,
  collapsible: true,
  heightStyle: 'content',
})