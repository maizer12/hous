// const homeSwiper = new Swiper('.home-slider__swiper', {
// 	loop: true,
// 	navigation: {
// 		nextEl: '.swiper-home-btn_next',
// 		prevEl: '.swiper-home-btn_prev',
// 	},
// 	simulateTouch: false,
// 	effect: 'fade',
// 	fadeEffect: {
// 		crossFade: true,
// 	},
// 	 autoplay: {
// 	 	delay: 3000,
// 	 },
// })
// const prevHome = document.querySelector('.swiper-home-btn_prev')
// const nextHome = document.querySelector('.swiper-home-btn_next')
// const nImg = nextHome.querySelector('.swiper-home-btn__img')
// const pImg = prevHome.querySelector('.swiper-home-btn__img')
// const allImages = document.querySelectorAll('.swiper-home__img')
// const sum = allImages.length

// function getActiveSwipe() {
// 	const id = homeSwiper.realIndex
// 	const numNext = id + 1
// 	const numPrev = id - 1

// 	if (sum > numNext) {
// 		nImg.src = allImages[numNext].src
// 	} else {
// 		nImg.src = allImages[0].src
// 	}
// 	if (numPrev >= 0) {
// 		pImg.src = allImages[numPrev].src
// 	} else {
// 		pImg.src = allImages[allImages.length - 1].src
// 	}
// }
// getActiveSwipe()
// homeSwiper.on('slideChange', getActiveSwipe)
//swipe

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
//slice

// $(document).ready(function () {
// 	$('.promotion__swiper .swiper-wrapper').slick({
// 		infinite: true,
// 		slidesToShow: 1, // Кількість слайдів, які відображаються одночасно
// 		centerPadding: '0px',
// 		slidesToScroll: 1, // Кількість слайдів, які прокручуються за один раз
// 		prevArrow: '<button type="button" class="slick-prev">Previous</button>', // Власний HTML-код для кнопки "Назад"
// 		nextArrow: '<button type="button" class="slick-next">Next</button>', // Власний HTML-код для кнопки "Вперед"
// 		responsive: [
// 			{
// 				breakpoint: 768, // Задайте необхідну ширину екрану, для якої потрібно змінити кількість слайдів
// 				settings: {
// 					slidesToShow: 2, // Нова кількість слайдів для даного розміру екрану
// 				},
// 			},
// 			// Додайте інші responsive налаштування за потреби
// 		],
// 	})
// })

// $(document).on('ready', function () {
// 	$('.center').slick({
// 		dots: false,
// 		infinite: true,
// 		centerMode: true,
// 		slidesToShow: 4,
// 		slidesToScroll: 3,
// 		prevArrow: '.slider-header__button_prev',
// 		nextArrow: '.slider-header__button_next',
// 		responsive: [
// 			{
// 				breakpoint: 1900,
// 				settings: {
// 					slidesToShow: 3,
// 					slidesToScroll: 2,
// 				},
// 			},
// 			{
// 				breakpoint: 1500,
// 				settings: {
// 					slidesToShow: 1,
// 					centerMode: false,
// 				},
// 			},
// 		],
// 	});
// });
const promSwipe = new Swiper('.promotion__swiper', {
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
	breakpoints: {
		1700: {
			slidesPerGroup: 1,
			centeredSlides: true,
			initialSlide: 1,
		},
	},
})


// new Swiper('.promotion__swiper', {
//   slidesPerView: 'auto',
//   centeredSlides: true,
//   speed: 1000,
//   navigation: {
//     nextEl: '.slider-header__button_next',
//     prevEl: '.slider-header__button_prev',
//   },
//   pagination: {
//     el: '.promotion-pagination',
//   },
//   spaceBetween: 38,
//   breakpoints: {
//     768: {
//       slidesPerView: 3,
//     },
//     480: {
//       slidesPerView: 2,
//     }
//   }
// });
