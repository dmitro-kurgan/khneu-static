$(document).ready(function() {
	var layout = document.getElementById('Layout');
	var wrapper = document.getElementById('wrapper');
	var showscroll = document.getElementById('svg-container');
	var showheader = document.getElementById('header');
	function Hide() {
		layout.style.opacity = '0';
	}
	function ShowScroll() {
		showscroll.style.opacity = '0';
	}
	function HideUnder() {
		layout.style.zIndex = '-1';
	}
	function Show() {
		wrapper.style.height = 'initial';
		wrapper.style.visibility = 'visible';
		wrapper.style.overflow = 'initial';
		showheader.style.visibility = 'visible';
	}
	setTimeout(Hide, 4400);
	setTimeout(Show, 4400);
	setTimeout(HideUnder, 5000);
	setTimeout(ShowScroll, 4000);
	// setTimeout(Hide, 0);
	// setTimeout(Show, 0);
	// setTimeout(HideUnder, 0);
	// setTimeout(ShowScroll, 0);
})