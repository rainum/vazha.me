//= require jquery

(function ($) {
  var $root = $('html, body');
  var $backTopBtn = $('.back-to-top');

  $(window).on('scroll', function () {
    $backTopBtn.toggle($(this).scrollTop() > 400);
  });

  $('.scroll-to').on('click', function (e) {
    e.preventDefault();
    var $el = $($(this).attr('href'));
    var elOffset = $el.length ? $el.offset().top : 0;
    var scrollTime = elOffset / 7;

    $root.animate({
      scrollTop: elOffset
    }, scrollTime > 300 ? scrollTime : 300);
  });
}(jQuery));
