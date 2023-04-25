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
$(document).ready(function () {
	if ($(window).width() < 533) {
		$('.about-product__images').fotorama({
			width: 'auto',
			height: 'auto',
			nav: 'thumbs',
			click:false,
			thumbwidth: 106,
			thumbheight: 77,
			thumbmargin: 20,
			thumbbordercolor: '#9A2C31',
		})
	} else {
		$('.about-product__images').fotorama({
			width: 'auto',
			height: 'auto',
			nav: 'thumbs',
			thumbwidth: 160,
			thumbheight: 117,
			thumbmargin: 20,
			click:false,
			thumbbordercolor: '#9A2C31',
		})
	}
})

const mq = window.matchMedia('(min-width: 1200px)')
let swiper

function checkBreakpoint(mq) {
	if (mq.matches) {
		if (swiper) {
			swiper.destroy(true, true)
		}
	} else {
		swiper = new Swiper('.services-gallery__swiper', {
			pagination: {
				el: '.gallery-pagination',
			},
			spaceBetween: 18,
			slidesPerView: 'auto',
		})
	}
}

mq.addListener(checkBreakpoint)
checkBreakpoint(mq)




