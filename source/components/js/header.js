var menuToggle = $('#menuToggle');

var menuHeader = $('.header_menu');

$(window).bind('resize', function () {	
    if (window.matchMedia('(max-width: 1869px)').matches) {
		menuHeader.appendTo('.header_bottom');
    }
    else if (window.matchMedia('(max-width: 1199px)').matches) {
		menuHeader.appendTo('#menuToggle');
    }
    else {
    	menuHeader.appendTo('.header_top')
    }
}).trigger('resize');

menuToggle.click(function() {
	$(this).toggleClass('open');
	menuHeader.toggleClass('is-open');
})

$(document).ready(function() {
    var searchBtn = $('#headerSearchBtn');
    var searchInput = $('#headerSearchInput');
    var searchClose = $('#headerSearchClose');
    var searchIcon = $('#headerSearchIcon');

    searchIcon.click(function() {
        $(this).removeClass('open');
        searchBtn.addClass('open');
        searchInput.toggleClass('open');
        searchClose.toggleClass('open');
    });

    searchClose.click(function() {
        $(this).removeClass('open');
        searchInput.removeClass('open');
        searchBtn.removeClass('open');
        searchIcon.addClass('open');
    });
});

// function emptyForm () {
//     var txt = document.getElementById('headerSearchInput').value;
//     console.log('Не работает');
//     console.log(txt);
//     if(txt == '') {
//         alert('Вы забыли ввести текст');
//         return false;
//     }
//     return true;
// }