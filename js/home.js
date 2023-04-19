new Swiper('.home-slider__swiper', {
	// Navigation arrows
	loop: true,
	navigation: {
		nextEl: '.swiper-home-btn_next',
		prevEl: '.swiper-home-btn_prev',
	},
	simulateTouch: false,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	autoplay: {
		delay: 3000,
	},
})
new Swiper('.promotion__swiper', {
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
})
new Swiper('.recommendation__swiper', {
	slidesPerView: 'auto',
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: false,
	// },
	speed: 1000,
	navigation: {
		nextEl: '.slider-header__recommend_next',
		prevEl: '.slider-header__recommend_prev',
	},
	pagination: {
		el: '.recommendation-pagination',
	},
	spaceBetween: 38,
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
})
new Swiper('.shops-swiper', {
	navigation: {
		nextEl: '.shops-btn-next',
		prevEl: '.shops-btn-prev',
	},
	pagination: {
		el: '.shops-pagination',
	},
	slidesPerView: 2,
	spaceBetween: 80,

	breakpoints: {
		500: {
			spaceBetween: 80,
			slidesPerView: 'auto',
		},
	},
})

const mq = window.matchMedia('(min-width: 1650px)')
let swiper

function checkBreakpoint(mq) {
	if (mq.matches) {
		if (swiper) {
			swiper.destroy(true, true)
		}
	} else {
		swiper = new Swiper('.about-us__swiper', {
			pagination: {
				el: '.about-us-pagination',
			},
			spaceBetween: 18,
			slidesPerView: 'auto',
		})
	}
}

mq.addListener(checkBreakpoint)
checkBreakpoint(mq)
