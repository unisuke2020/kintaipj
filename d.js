$(function(){
  function successFunc(position) {
    // 現在位置取得 成功時の処理
    $('#text1').text("緯度:"+position.coords.latitude+" , 経度:"+position.coords.longitude);
    var locationName;
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)

   //Reverse Geocoding using Google maps api.
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                locationName = results[1].formatted_address;
		console.log(locationName);
            }
            else {
                locationName = "Unknown";
		console.log(locationName);
            }
        }
        else {
            locationName = "Couldn't find location. Error code: " + status;
	    console.log(locationName);
        }
        $('#text2').text(locationName);
	console.log(locationName);
    });
  }

  function errorFunc(error) {
    // 現在位置取得 失敗時の処理
    var errorMessage = {
      0: "現在位置を取得できませんでした。" ,
      1: "位置情報の使用が許可されていないので、現在位置を取得できませんでした。" ,
      2: "現在位置の取得に失敗しました。" ,
      3: "位置情報の取得に時間がかかったため、タイムアウトされました。" ,
    };
    $('#text1').text(errorMessage[error.code]);
  }

  // 現在位置取得 オプション
  let options = {
    enableHighAccuracy: true
  }

  $('#button1').on('click', function(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( successFunc , errorFunc , options ) ;
    } else { // 現在位置を取得できない場合の処理
      $('#text1').text("ご使用中のブラウザは現在地検索に対応されておりません。");
    }
  });
});