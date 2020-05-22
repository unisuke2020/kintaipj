$(function() {
  var h = $(window).height();
  
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
  
$(window).load(function () { //全ての読み込みが完了したら実行
　window.scrollTo(0,0);
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});
  
//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});
  
function stopload(){
  $('#wrap').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}

$(function(){
	setInterval(function(){
		var now = new Date();
		var y = now.getFullYear();
		var m = now.getMonth() + 1;
		var d = now.getDate();
		var w = now.getDay();
		var wd = ['日', '月', '火', '水', '木', '金', '土'];
		var h = now.getHours();
		var mi = now.getMinutes();
		var s = now.getSeconds();
		var mm = ('0' + m).slice(-2);
		var dd = ('0' + d).slice(-2);
		var hh = ('0' + h).slice(-2);
		var mmi = ('0' + mi).slice(-2);
		var ss = ('0' + s).slice(-2);
	$('#hizuke').text(y + '年' + mm + '月' + dd + '日' + '(' + wd[w] + ')');
	$('#hi_fs').css("font-size","200%");
	$('#ji_fs').css("font-size","600%");
	$('#hours').text(hh);
	$('#minutes').text(mmi);
	$('#flash').fadeOut(1000).fadeIn(1000);
	}, 1000);
});

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
	$('.btn-circle-border-simple').on('click', function() {
	   if (navigator.geolocation) {
      		navigator.geolocation.getCurrentPosition(function(position){
			 $('#coment').text(position.coords.latitude, position.coords.longitude);
			 $('#coment').text("test");
	      });
           } else { // 現在位置を取得できない場合の処理
            $('#coment').text("ご使用中のブラウザは現在地検索に対応されておりません。");
    	   }
	});
});
