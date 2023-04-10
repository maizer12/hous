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
const body = document.querySelector('body');
test.addEventListener('click', ()=>{
	body.classList.add('menu-open');
  body.classList.add('filter-open');
})