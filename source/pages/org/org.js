import '../../components/scss/style.scss';

import '../../components/js/bootstrap.min.js';

import '../../components/js/header.js';

import '../../components/js/lang.js';

import '../../components/js/map.js';

import fancybox from '../../components/js/jquery.fancybox.min.js';

import 'slick-carousel';

var SlickDivisions = $(".slick-divisions");
var SlickDivisionsTasks = $(".slick-divisions-tasks");
var SlickDivisionsGallery = $(".slick-div-gallery");

SlickDivisions.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true
});

SlickDivisionsTasks.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true
});

SlickDivisionsGallery.slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
});