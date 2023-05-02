$(document).ready(function() {
  // Ініціалізувати Select2
  $('.filter-item__select').select2();

  // Додати обробник подій для кнопки reset
  $('.filter-wrapper__btn').on('click', function() {
    // Отримати всі елементи Select2
    var select2Elements = $('.filter-item__select');

    // Скинути значення всіх Select2 до null
    select2Elements.val(null).trigger('change');
  });
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
