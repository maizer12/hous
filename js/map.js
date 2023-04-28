let accordion = $('#accordion-map').accordion({
	active: null,
	collapsible: true,
	heightStyle: 'content',
})
const images = document.querySelectorAll('.map-image-item-one')
const mapOneInfo = {
	item1: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 1',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item2: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 2',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item3: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 3',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	
	item5: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 4',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item6: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 5',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item7: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 8',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item8: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 20',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item9: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 30',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item10: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 1',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item11: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 1',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
}
const mapTwoInfo = {
	item1: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 1',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item2: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 2',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item3: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 3',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	
	item5: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 4',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item6: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 5',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item7: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 8',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item8: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 20',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item9: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 30',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item10: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 1',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
	item11: {
		itemImg: './img/map-item.jpg',
		logo: './img/logo-map.png',
		title: 'елемент 1',
		phone: [
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
			{ num: '+38 (050) ХХХ-ХХ-ХХ', tel: '+380509564646846' },
		],
		link: '/',
	},
}
function getLink(ell) {
	const itemsCont = document.querySelector('.map-item__cont')
	const item = `
					<div class="map-item">
						<div class="map-item__images">
							<img src=${ell?.itemImg} alt="map-item" class="map-item__img">
						</div>
						<div class="map-item__header">
							<a href='#' class="map-item__logo">
								<img src=${ell?.logo} alt="logo">
							</a>
							<div class="map-item__header-content">
								<h4 class="map-item__name">${ell.title}</h4>
								<div class="map-item__stars">
									<ul class="map-item__stars-star">
										<li class="map-item__stars-item">
											<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 2L3.66667 19L17 8.14894H1L14.3333 19L9 2Z" fill="url(#paint0_linear_3_5816)" />
												<path
													d="M9.14312 1.9551L9 1.4989L8.85688 1.9551L6.96077 7.99894H1H0.578049L0.905318 8.26528L5.66259 12.1369L3.52354 18.9551L3.37408 19.4315L3.76135 19.1163L9 14.853L14.2387 19.1163L14.6259 19.4315L14.4765 18.9551L12.3374 12.1369L17.0947 8.26528L17.422 7.99894H17H11.0392L9.14312 1.9551Z"
													stroke="#2F2F2F" stroke-opacity="0.4" stroke-width="0.3" />
												<defs>
													<linearGradient id="paint0_linear_3_5816" x1="1" y1="2" x2="257" y2="2"
														gradientUnits="userSpaceOnUse">
														<stop offset="1" stop-color="#FFC700" />
													</linearGradient>
												</defs>
											</svg>

										</li>
										<li class="map-item__stars-item">
											<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 2L3.66667 19L17 8.14894H1L14.3333 19L9 2Z" fill="url(#paint0_linear_3_5816)" />
												<path
													d="M9.14312 1.9551L9 1.4989L8.85688 1.9551L6.96077 7.99894H1H0.578049L0.905318 8.26528L5.66259 12.1369L3.52354 18.9551L3.37408 19.4315L3.76135 19.1163L9 14.853L14.2387 19.1163L14.6259 19.4315L14.4765 18.9551L12.3374 12.1369L17.0947 8.26528L17.422 7.99894H17H11.0392L9.14312 1.9551Z"
													stroke="#2F2F2F" stroke-opacity="0.4" stroke-width="0.3" />
												<defs>
													<linearGradient id="paint0_linear_3_5816" x1="1" y1="2" x2="257" y2="2"
														gradientUnits="userSpaceOnUse">
														<stop offset="1" stop-color="#FFC700" />
													</linearGradient>
												</defs>
											</svg>
										</li>
										<li class="map-item__stars-item">
											<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 2L3.66667 19L17 8.14894H1L14.3333 19L9 2Z" fill="url(#paint0_linear_3_5816)" />
												<path
													d="M9.14312 1.9551L9 1.4989L8.85688 1.9551L6.96077 7.99894H1H0.578049L0.905318 8.26528L5.66259 12.1369L3.52354 18.9551L3.37408 19.4315L3.76135 19.1163L9 14.853L14.2387 19.1163L14.6259 19.4315L14.4765 18.9551L12.3374 12.1369L17.0947 8.26528L17.422 7.99894H17H11.0392L9.14312 1.9551Z"
													stroke="#2F2F2F" stroke-opacity="0.4" stroke-width="0.3" />
												<defs>
													<linearGradient id="paint0_linear_3_5816" x1="1" y1="2" x2="257" y2="2"
														gradientUnits="userSpaceOnUse">
														<stop offset="1" stop-color="#FFC700" />
													</linearGradient>
												</defs>
											</svg>

										</li>
										<li class="map-item__stars-item">
											<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 2L3.66667 19L17 8.14894H1L14.3333 19L9 2Z" fill="url(#paint0_linear_3_5816)" />
												<path
													d="M9.14312 1.9551L9 1.4989L8.85688 1.9551L6.96077 7.99894H1H0.578049L0.905318 8.26528L5.66259 12.1369L3.52354 18.9551L3.37408 19.4315L3.76135 19.1163L9 14.853L14.2387 19.1163L14.6259 19.4315L14.4765 18.9551L12.3374 12.1369L17.0947 8.26528L17.422 7.99894H17H11.0392L9.14312 1.9551Z"
													stroke="#2F2F2F" stroke-opacity="0.4" stroke-width="0.3" />
												<defs>
													<linearGradient id="paint0_linear_3_5816" x1="1" y1="2" x2="257" y2="2"
														gradientUnits="userSpaceOnUse">
														<stop offset="1" stop-color="#FFC700" />
													</linearGradient>
												</defs>
											</svg>

										</li>
										<li class="map-item__stars-item">
											<svg width="18" height="20" viewBox="0 0 18 20" fill="rgb(158, 158, 158)"
												xmlns="http://www.w3.org/2000/svg">
												<path d="M9 2L3.66667 19L17 8.14894H1L14.3333 19L9 2Z" fill="url(#paint0_linear_3_5816)" />
												<path
													d="M9.14312 1.9551L9 1.4989L8.85688 1.9551L6.96077 7.99894H1H0.578049L0.905318 8.26528L5.66259 12.1369L3.52354 18.9551L3.37408 19.4315L3.76135 19.1163L9 14.853L14.2387 19.1163L14.6259 19.4315L14.4765 18.9551L12.3374 12.1369L17.0947 8.26528L17.422 7.99894H17H11.0392L9.14312 1.9551Z"
													stroke="#2F2F2F" stroke-opacity="0.4" stroke-width="0.3" />
												<defs>
													<linearGradient id="paint0_linear_3_5816" x1="1" y1="2" x2="257" y2="2"
														gradientUnits="userSpaceOnUse">
														<stop offset="1" stop-color="#FFC700" />
													</linearGradient>
												</defs>
											</svg>

										</li>
									</ul>
									<h4 class="map-item__stars-num">5.0</h4>
								</div>
							</div>
						</div>
						<div class="map-item__contact">
							<div class="map-item__numbers">
							
								${
									ell.phone?.filter(e => e).map(e => `<a href="tel:${e.tel}" class="map-item__number">${e.num}</a>`).join('').toString()

							}
							
							</div>
							<button class="map-item__btn">
								<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_299_3422)">
										<path
											d="M14.084 1.08335C14.084 0.796036 14.1981 0.520486 14.4013 0.317322C14.6044 0.114158 14.88 2.10641e-05 15.1673 2.10641e-05C18.0395 0.00317529 20.7932 1.14555 22.8241 3.17651C24.8551 5.20748 25.9975 7.96114 26.0006 10.8334C26.0006 11.1207 25.8865 11.3962 25.6833 11.5994C25.4802 11.8026 25.2046 11.9167 24.9173 11.9167C24.63 11.9167 24.3544 11.8026 24.1513 11.5994C23.9481 11.3962 23.834 11.1207 23.834 10.8334C23.8314 8.5356 22.9175 6.3327 21.2927 4.70795C19.668 3.08319 17.4651 2.16927 15.1673 2.16669C14.88 2.16669 14.6044 2.05255 14.4013 1.84939C14.1981 1.64622 14.084 1.37067 14.084 1.08335ZM15.1673 6.50002C16.3166 6.50002 17.4188 6.95657 18.2314 7.76923C19.0441 8.58188 19.5006 9.68408 19.5006 10.8334C19.5006 11.1207 19.6148 11.3962 19.8179 11.5994C20.0211 11.8026 20.2966 11.9167 20.584 11.9167C20.8713 11.9167 21.1468 11.8026 21.35 11.5994C21.5532 11.3962 21.6673 11.1207 21.6673 10.8334C21.6656 9.10998 20.9802 7.45767 19.7616 6.23906C18.543 5.02045 16.8907 4.33508 15.1673 4.33335C14.88 4.33335 14.6044 4.44749 14.4013 4.65066C14.1981 4.85382 14.084 5.12937 14.084 5.41669C14.084 5.70401 14.1981 5.97956 14.4013 6.18272C14.6044 6.38588 14.88 6.50002 15.1673 6.50002ZM25.0181 18.1339C25.6459 18.7635 25.9984 19.6163 25.9984 20.5054C25.9984 21.3944 25.6459 22.2472 25.0181 22.8768L24.0322 24.0132C15.1597 32.5076 -6.43111 10.9222 1.93222 2.02152L3.17805 0.938188C3.8083 0.327921 4.65348 -0.00967577 5.53073 -0.00156619C6.40799 0.00654339 7.24678 0.359708 7.86564 0.981521C7.89922 1.0151 9.90664 3.62269 9.90664 3.62269C10.5023 4.24845 10.8339 5.07969 10.8325 5.94362C10.831 6.80755 10.4967 7.63771 9.89905 8.26152L8.64455 9.83885C9.3388 11.5257 10.3595 13.0588 11.6481 14.35C12.9367 15.6411 14.4677 16.665 16.1531 17.3626L17.7402 16.1005C18.3641 15.5033 19.1941 15.1694 20.0578 15.1682C20.9215 15.167 21.7524 15.4985 22.378 16.094C22.378 16.094 24.9845 18.1004 25.0181 18.1339ZM23.5274 19.7091C23.5274 19.7091 20.935 17.7147 20.9014 17.6811C20.6782 17.4598 20.3766 17.3357 20.0623 17.3357C19.7481 17.3357 19.4465 17.4598 19.2233 17.6811C19.1941 17.7114 17.009 19.4524 17.009 19.4524C16.8617 19.5696 16.6865 19.6464 16.5005 19.6753C16.3145 19.7041 16.1242 19.6841 15.9484 19.617C13.7649 18.8041 11.7816 17.5313 10.1329 15.885C8.48415 14.2387 7.20849 12.2573 6.3923 10.075C6.31993 9.89676 6.29634 9.70245 6.32395 9.51206C6.35156 9.32166 6.42937 9.14205 6.54939 8.99169C6.54939 8.99169 8.2903 6.80552 8.31955 6.77735C8.54084 6.55417 8.665 6.25261 8.665 5.93831C8.665 5.62402 8.54084 5.32245 8.31955 5.09927C8.28597 5.06677 6.29155 2.47219 6.29155 2.47219C6.06503 2.26907 5.76939 2.16029 5.46524 2.16815C5.16109 2.176 4.87146 2.2999 4.65572 2.51444L3.40989 3.59777C-2.70228 10.9471 16.008 28.6195 22.4484 22.5334L23.4353 21.3959C23.6666 21.1816 23.8055 20.8859 23.8227 20.5711C23.8398 20.2563 23.734 19.9472 23.5274 19.7091Z"
											fill="black" />
									</g>
									<defs>
										<clipPath id="clip0_299_3422">
											<rect width="26" height="26" fill="white" />
										</clipPath>
									</defs>
								</svg>
								Показать
								номер
							</button>
						</div>
						<a href="#" class="map-item__detail">
							Перейти в магазин
							<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_299_3397)">
									<path
										d="M28.5077 17.6126L23.6309 22.5001C23.5137 22.6173 23.3744 22.7103 23.2208 22.7737C23.0672 22.8372 22.9025 22.8699 22.7362 22.8699C22.5698 22.8699 22.4051 22.8372 22.2515 22.7737C22.098 22.7103 21.9586 22.6173 21.8415 22.5001C21.7233 22.3839 21.6296 22.2457 21.5656 22.0933C21.5016 21.941 21.4687 21.7776 21.4687 21.6126C21.4687 21.4476 21.5016 21.2842 21.5656 21.1319C21.6296 20.9796 21.7233 20.8413 21.8415 20.7251L26.3276 16.2501L0.633067 16.2501C0.298854 16.2501 -0.0216721 16.1184 -0.257996 15.884C-0.494321 15.6496 -0.627085 15.3316 -0.627085 15.0001C-0.627085 14.6686 -0.494321 14.3507 -0.257996 14.1162C-0.0216719 13.8818 0.298854 13.7501 0.633068 13.7501L26.4032 13.7501L21.8415 9.22512C21.618 8.99265 21.4934 8.68379 21.4934 8.36262C21.4934 8.04144 21.618 7.73259 21.8415 7.50012C21.9586 7.38296 22.098 7.28996 22.2515 7.2265C22.4051 7.16304 22.5698 7.13037 22.7362 7.13037C22.9025 7.13037 23.0672 7.16304 23.2208 7.2265C23.3744 7.28996 23.5137 7.38296 23.6309 7.50012L28.5077 12.3126C29.2156 13.0157 29.6133 13.9689 29.6133 14.9626C29.6133 15.9564 29.2156 16.9095 28.5077 17.6126Z"
										fill="#9A2C31" />
								</g>
								<defs>
									<clipPath id="clip0_299_3397">
										<rect width="30.2925" height="30" fill="white"
											transform="matrix(-1 -8.65786e-08 -8.82752e-08 1 30.293 0)" />
									</clipPath>
								</defs>
							</svg>

						</a>
						</div>
	`
	if (itemsCont) {
		itemsCont.innerHTML = item
	}
}

images.forEach((e, i) => {
	e.addEventListener('click', () => {
		const logo = document.querySelector('.logo-get')
		const itemAct = document.querySelector('.active-map-item')
		const elem = mapOneInfo['item' + (i + 1)]
		if(!elem){
			remodalWindow.open();
			return
		}
		itemAct?.classList.remove('active-map-item')
		e.classList.add('active-map-item')
		getLink(elem)
		const eBounds = e.getBoundingClientRect()
		const imageBounds = document
			.querySelector('.map__image')
			.getBoundingClientRect()
		const x = eBounds.left - imageBounds.left
		const y = eBounds.top - imageBounds.top
		logo.style.display = 'block'
		logo.src = elem?.logo
		logo.style.top =
			y + (e.getBoundingClientRect().height / 2 - logo.offsetHeight / 2) + 'px'
		logo.style.left =
			x + (e.getBoundingClientRect().width / 2 - logo.offsetWidth / 2) + 'px'
		if (e.id === 'dz-cos') {
			logo.style.top = y + (e.getBoundingClientRect().height / 2 + 20) + 'px'
		}
	})
})
var remodalWindow = $('[data-remodal-id=modal]').remodal();
const openNumber = document.querySelector('.map__content');

openNumber?.addEventListener('click', (event)=>{
	const element = event.target
	if(element.classList.contains('map-item__btn')){
		const items = document.querySelectorAll('.map-item__number')
		items.forEach((e)=>{
			e.innerHTML = e.href.replace(/^tel:/, '')
			element.style.display = 'none'
		})
	}
})
$(function() {
  $("#map-tab").tabs({
		active: 1
	});
});

