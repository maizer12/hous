new Swiper('.home-slider__swiper', {
	// Navigation arrows
	loop: true,
	navigation: {
		nextEl: '.swiper-home-btn_next',
		prevEl: '.swiper-home-btn_prev',
	},
	simulateTouch:false,
	effect: 'fade',
	fadeEffect:{
		crossFade:true
	},
	 autoplay:{
	 	delay:3000
	 }
})
new Swiper('.promotion__swiper', {
	slidesPerView: 'auto',
	loop: true,
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
new Swiper('.articles-slider', {
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.new-banners__button_next',
		prevEl: '.new-banners__button_prev',
	},
	pagination: {
    el: '.new-pagination',
  },
	speed: 1000,
	spaceBetween: 38,
	// autoplay:{
	// 	delay:3000
	// }
})
new Swiper('.shops-swiper', {
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.shops-btn-next',
		prevEl: '.shops-btn-prev',
	},
	spaceBetween: 80,
	 autoplay:{
	 	delay:2000
	 }
})