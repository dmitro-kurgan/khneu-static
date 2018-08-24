var headerLang = $('.header_language');
var ohterlang = $('.other-lang');

headerLang.find('a').click(function() {
	ohterlang.addClass('show');
});

$(function(){
  $(document).click(function(event) {
    if ($(event.target).closest(headerLang).length) return;
    ohterlang.removeClass("show");
    event.stopPropagation();
  });
});

$(window).scroll(function () {
    var top = $(this).scrollTop();
    if((top) > 0) {
        ohterlang.removeClass('show');
    }
});