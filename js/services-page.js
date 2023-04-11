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

if (window.matchMedia('(max-width: 768px)').matches) {
  new Swiper('.order-from__swiper', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.order-from-prev-two',
      prevEl: '.order-from-next-two',
    },
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    pagination: {
      el: '.order-from-pagination',
    },
  });
}