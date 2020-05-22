function getLocationName(latitude, longitude, callback) {
    if (isNaN(parseFloat(latitude)) || isNaN(parseFloat(longitude))) {
        return false;
    }

    var locationName;
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude)

   //Reverse Geocoding using Google maps api.
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                locationName = results[1].formatted_address;
                console.log(locationName);
            }
            else {
                locationName = "Unknown";
            }
        }
        else {
            locationName = "Couldn't find location. Error code: " + status;
        }
        console.log(locationName);
        callback(locationName);
    });
}

$(function(){
$("#button1").on("click", function () {
  navigator.geolocation.getCurrentPosition(
  function(position){
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
        console.log(latitude,longitude);
	    });
//    getLocationName(latitude, longitude, function(result){
//        $("#userLocation").text(result);
//	});
});
});