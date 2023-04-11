$(function () {
  var mq = window.matchMedia('(min-width: 769px)');
  var accordion = $('#accordion').accordion({
    active: null,
    collapsible: true,
    heightStyle: 'content',
  });

  function checkBreakpoint(mq) {
    if (mq.matches) {
      accordion.accordion('destroy');
    } else {
      accordion = $('#accordion').accordion({
        active: null,
        collapsible: true,
        heightStyle: 'content',
      });
    }
  }

  mq.addListener(checkBreakpoint);
  checkBreakpoint(mq);
});
const labelSearch = document.querySelector('.header-content__label')

labelSearch?.addEventListener('click', ()=>{
  document.querySelector('.header-search')?.classList.toggle('header-search-open')
})

const burger = document.querySelector('.burger-menu')


burger?.addEventListener('click', ()=>{
  
})