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

const images = document.querySelector('.about-images'),
			favorite = document.querySelector('#favorite-img')

images?.addEventListener('click', (e)=>{
	const elem = e.target
	const check = document.querySelector('.about-images-active')
	if (elem.classList.contains('about-images__img')) {
		check?.classList.remove('about-images-active')
		favorite.src = elem.src
		elem.classList.add('about-images-active')
	}
})
const mq = window.matchMedia('(min-width: 1200px)');
let swiper;

function checkBreakpoint(mq) {
  if (mq.matches) {
    if (swiper) {
      swiper.destroy(true, true);
    }
  } else {
    swiper = new Swiper('.services-gallery__swiper', {
      pagination: {
        el: '.gallery-pagination',
      },
      spaceBetween: 18,
      slidesPerView: 'auto',
    });
  }
}

mq.addListener(checkBreakpoint);
checkBreakpoint(mq);