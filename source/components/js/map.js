GoogleMapsLoader.KEY = 'AIzaSyBQPGU8_aL3lqJ794PpoUCYSO_5ncEq7Sw';
GoogleMapsLoader.LANGUAGE = 'ua';

GoogleMapsLoader.load(function(google) {
	
	var myLatLng = {lat: 50.013928, lng: 36.224399};
    var map = new google.maps.Map(document.getElementById('map'), {
      	center: myLatLng,
	    scrollwheel:false,
	    zoom: 17
    });
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: 'ХНЕУ'
    });
});