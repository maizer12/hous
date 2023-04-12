new Swiper('.categories-swiper__inner', {
	slidesPerView: 'auto',
	pagination: {
		el: '.categories-pagination',
	},
	spaceBetween: 38,
})
$('#accordion-categories').accordion({
	active: 2,
	collapsible: true,
	heightStyle: 'content',
})
const test = document.querySelector('#test')
const searchBtnProduct = document.querySelector('#search-products')

test?.addEventListener('click', ()=>{
	addBodyClass('menu-open')
	addBodyClass('filter-open')
})

searchBtnProduct?.addEventListener('click', ()=>{
	addBodyClass('menu-open')
	addBodyClass('search-open')
})