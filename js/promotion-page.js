const promoMod = $('[data-remodal-id=modal-promotion]').remodal();
const imgModal = document.querySelector('.promotion-content__images')


imgModal?.addEventListener('click',()=>{
	const img = imgModal.querySelector('img')
	const imgMod = document.querySelector('.remodal-promotion__img')
	imgMod.src = img.src
	promoMod.open();
	console.log(imgMod)
})
