$(document).on('click', '.lb-prev', function(e) {
  e.preventDefault();
  $('#lightbox').trigger('prev');
});

$(document).on('click', '.lb-nav', function(e) {
  e.preventDefault();
  $('#lightbox').trigger('next');
});
lightbox.option({
  resizeToFit: true
})
new Swiper('.order-swiper__slider', {
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.btn-slider-next',
		prevEl: '.btn-slider-prev',
	},
	spaceBetween: 0,
	sped:1000,
	loop: true,
})
new Swiper('.order-swiper__slider-two', {
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.btn-slider-prev-two',
		prevEl: '.btn-slider-next-two',
	},
	spaceBetween: 0,
	sped:1000,
	loop: true,
})