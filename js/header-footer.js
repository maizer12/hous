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
