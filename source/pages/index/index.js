import '../../components/scss/style.scss';

import '../../components/js/bootstrap.min.js';

import '../../components/js/hidescreen.js';

import '../../components/js/lang.js';

import '../../components/js/header.js';

import '../../components/js/map.js';

import 'slick-carousel';

var SlickBannerFor = $(".slick-for");
var SlickBannerNav = $(".slick-nav");
var SlickNewspaper = $(".slick-newspaper");
var SlickParnters = $(".slick-partners");
var SlickAnnounceFor = $(".announce-for");
var SlickAnnounceNav = $(".announce-nav");
var SlickBanners = $(".slick-banners");

SlickBannerFor.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slick-nav',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true
			}
		}
	]
});
SlickBannerNav.slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slick-for',
	dots: false,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1470,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		}
	]
});

SlickAnnounceFor.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 0,
	draggable: false,
	asNavFor: '.announce-nav',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				speed: 300
			}
		}
	]

});
SlickAnnounceNav.slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	speed: 0,
	asNavFor: '.announce-for',
	dots: false,
	focusOnSelect: true
});

SlickNewspaper.slick({
	slidesToShow: 1
})

SlickParnters.slick({
  centerMode: true,
  slidesToShow: 7,
  centerPadding: '0px',
  responsive: [
  	{
  		breakpoint: 1670,
  		settings: {
  			slidesToShow: 5
  		}
  	},
  	{
  		breakpoint: 1350,
  		settings: {
  			slidesToShow: 4
  		}
  	},
  	{
  		breakpoint: 1200,
  		settings: {
  			slidesToShow: 3
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
SlickBanners.slick({
  slidesToShow: 1,
  slidesToScroll: 1
});

$(function () {
	if(screen.height > 900) {
	    var lastScrollTop = $(window).scrollTop(),
	        delta = 5,
	        eleH = $('.banner').outerHeight(),
	        isScolling = false ;
	    $(window).scroll(function () {
	        if(isScolling)
	            return;
	            
	        var nowScrollTop = $(this).scrollTop();
	        if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
	            if (nowScrollTop <= eleH && nowScrollTop >= lastScrollTop) {
	                isScolling = true;
	                $('html,body').animate({
	                    scrollTop: $('body section:first-of-type').offset().top
	                }, 600, function() {
	                    isScolling = false;
	                    lastScrollTop = $(window).scrollTop();
	                });
	                console.log('Scroll down');
	            } else if (nowScrollTop <= eleH && nowScrollTop < lastScrollTop) {
	                isScolling = true;
	                $('html,body').animate({
	                    scrollTop: 0
	                }, 600, function() {
	                    isScolling = false;
	                    lastScrollTop = $(window).scrollTop();
	                });
	                console.log('Scroll up');
	            }
	            lastScrollTop = nowScrollTop;
	        }
	    });
	}
});