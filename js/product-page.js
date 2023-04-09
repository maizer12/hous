new Swiper('.promotion__swiper', {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	slidesPerView: 'auto',
	speed: 1000,
	navigation: {
		nextEl: '.slider-header__button_next',
		prevEl: '.slider-header__button_prev',
	},
	pagination: {
		el: '.promotion-pagination',
	},
	spaceBetween: 38,
	// autoplay:{
	// 	delay:3000
	// }
})
