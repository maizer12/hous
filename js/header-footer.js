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

const searchInputAdapt = document.querySelector('#search-input-adapt')
const headerSearchAdapt = document.querySelector('#header-search-adapt')

searchInputAdapt?.addEventListener('input', ()=>{
	if(searchInputAdapt.value){
		headerSearchAdapt?.classList.add('header-search-open')
	}else{
		headerSearchAdapt?.classList.remove('header-search-open')
	}
})

const btnSearchProduct = document.querySelector('.header-content__search')

btnSearchProduct?.addEventListener('click', ()=>{
	body?.classList.add('open-input')
})
window.addEventListener('click', (event) => {
	const ell = event.target
	const logoTest = document.querySelector('.logo-get')
  if (!inputLabel?.contains(event.target) && openSearchCheck) {
    searchColumns?.classList.remove('header-search-open')
		openSearchCheck = false
  } 
	if(!inputLabel?.contains(event.target) && body.classList.contains('open-input')){
		body.classList = ''
	}
	if(ell.classList.contains('map-item-btn')){
		ell.parentElement.parentElement.classList.remove('active-add-popup')
	}
	if(ell.classList.contains('ui-tabs-anchor')  && logoTest){
		logoTest.style.display = 'none'
	}
});