$(document).ready(function() {
	$('.filter-item__select').select2();
});
const closeBtnFil = document.querySelector('.filter-wrapper__close')
const btnOpenFil = document.querySelector('.shops-filter-open')
const btnSubmitFil = document.querySelector('.filter-wrapper__submit')
function checkFilNow(){
	const checked = body.classList.contains('open-fil')
	if(checked){
		body.classList = ''
	}
}

closeBtnFil?.addEventListener('click', ()=>{
	checkFilNow()
})
btnOpenFil?.addEventListener('click', ()=>{
	body.classList.add('open-fil')
})
btnSubmitFil?.addEventListener('click', ()=>{
	checkFilNow()
})