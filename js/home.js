const homeSwiper = new Swiper('.home-slider__swiper', {
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
//swiper home logic
//const prevHome = document.querySelector('.swiper-home-btn_prev');
//const nextHome = document.querySelector('.swiper-home-btn_next');
//
//function getActiveSwipe() {
//  const nImg = nextHome.querySelector('.swiper-home-btn__img');
//  const pImg = prevHome.querySelector('.swiper-home-btn__img');
//  const allImages = document.querySelectorAll('.swiper-home__img');
//  const id = homeSwiper.realIndex;
//  const numNext = id + 1;
//  const numPrev = id - 1;
//
//  if (numNext < allImages.length) {
//    nImg.src = allImages[numNext].src;
//  } else {
//    nImg.src = allImages[0].src;
//  }
//
//  if (numPrev >= 0) {
//    pImg.src = allImages[numPrev].src;
//  } else {
//    pImg.src = allImages[allImages.length - 1].src;
//  }
//}
//
//getActiveSwipe();
//prevHome?.addEventListener('click', getActiveSwipe);
//nextHome?.addEventListener('click', getActiveSwipe);
const prevHome = document.querySelector('.swiper-home-btn_prev')
const nextHome = document.querySelector('.swiper-home-btn_next')
const nImg = nextHome.querySelector('.swiper-home-btn__img')
const pImg = prevHome.querySelector('.swiper-home-btn__img')
const allImages = document.querySelectorAll('.swiper-home__img')
const sum = allImages.length

function getActiveSwipe() {
	const id = homeSwiper.realIndex
	const numNext = id + 1
	const numPrev = id - 1

	if (sum > numNext) {
		nImg.src = allImages[numNext].src
	} else {
		nImg.src = allImages[0].src
	}
	if (numPrev >= 0) {
		pImg.src = allImages[numPrev].src
	} else {
		pImg.src = allImages[allImages.length - 1].src
	}
}
getActiveSwipe()
homeSwiper.on('slideChange', getActiveSwipe)
//prevHome?.addEventListener('click', getActiveSwipe)
//nextHome?.addEventListener('click', getActiveSwipe)

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
