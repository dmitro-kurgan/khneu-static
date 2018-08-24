import '../../components/scss/style.scss';

import '../../components/js/bootstrap.min.js';

import '../../components/js/header.js';

import '../../components/js/lang.js';

import pickmeup from '../../components/js/pickmeup.min.js';

addEventListener('DOMContentLoaded', function () {
	// pickmeup('.single', {
	// 	flat : true
	// });
	// pickmeup('.multiple', {
	// 	flat : true,
	// 	mode : 'multiple'
	// });
	// pickmeup('.range', {
	// 	flat : true,
	// 	mode : 'range'
	// });
	// var plus_5_days = new Date;
	// plus_5_days.setDate(plus_5_days.getDate() + 5);
	// pickmeup('input', {
	// 	position       : 'top',
	// 	hide_on_select : true
	// });

	pickmeup('.date', {
		flat : true
	});
});

$(window).bind('resize', function () {	
    if (window.matchMedia('(max-width: 767px)').matches) {
		$('.anons li*[id != "event9"][id != "event3"]').hide();
    }
    else {
    	$('.anons li').show();
    }
}).trigger('resize');

import '../../components/js/map.js';

$(document).ready(function() {
	var hiddenAnons = $('.event_box_inner');
	hiddenAnons.hover(
		function () {
			// $(this).find('.event_box_date').css({'color': '#2a2a2a', 'z-index': '31'});
		},
		function () {
			// $(this).find('.event_box_date').css({'color': '#fff', 'z-index': '0'});
		}
	);

	// $(".event_box_showmore").mouseover(function(){
	// 	$('a:nth-child(n+4)').toggleClass('open');
		
        
 //    });
 //    $(".event_box").mouseleave(function(){
 //        $("a:nth-child(n+4)").removeClass('open')
 //    }); 
});

