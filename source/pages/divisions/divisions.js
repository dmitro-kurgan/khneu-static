import '../../components/scss/style.scss';

import '../../components/js/bootstrap.min.js';

import '../../components/js/header.js';

import '../../components/js/lang.js';

import '../../components/js/map.js';

import 'slick-carousel';

var SlickDivisions = $(".slick-divisions");
var SlickDivisionsTasks = $(".slick-divisions-tasks");

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