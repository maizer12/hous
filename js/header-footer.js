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
const inputSearch = document.querySelector('.header-content__input')
const inputLabel = document.querySelector('.header-content__label')
const searchColumns = document.querySelector('.header-search')
let openSearchCheck = false
inputSearch?.addEventListener('input', () => {
	if (inputSearch.value) {
		searchColumns?.classList.add('header-search-open')
		openSearchCheck = true
	}else{
		searchColumns?.classList.remove('header-search-open')
	}
})
window.addEventListener('click', (event) => {
  if (!inputLabel?.contains(event.target) && openSearchCheck) {
    searchColumns?.classList.remove('header-search-open')
		openSearchCheck = false
  }
});
//adaptive
const burger = document.querySelector('.burger-menu')
const body = document.querySelector('body')
const btnSearch = document.querySelector('#search-btn')
const btnContacts = document.querySelector('#btn-contacts')
const header = document.querySelector('.header')
const addBodyClass = text => {
	body.classList.add(text)
	body.style.paddingTop = header.clientHeight + 'px'
}

burger?.addEventListener('click', () => {
	if (body.classList.contains('menu-open')) {
		body.classList = ''
		body.style = ''
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
