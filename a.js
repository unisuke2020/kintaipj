$(function(){
	setInterval(function(){
		var now = new Date();
		var y = now.getFullYear();
		var m = now.getMonth() + 1;
		var d = now.getDate();
		var w = now.getDay();
		var wd = ['“ú', 'Œ', '‰Î', '…', '–Ø', '‹à', '“y'];
		var h = now.getHours();
		var mi = now.getMinutes();
		var s = now.getSeconds();
		var mm = ('0' + m).slice(-2);
		var dd = ('0' + d).slice(-2);
		var hh = ('0' + h).slice(-2);
		var mmi = ('0' + mi).slice(-2);
		var ss = ('0' + s).slice(-2);
	$('#hizuke').text(y + '”N' + mm + 'Œ' + dd + '“ú' + '(' + wd[w] + ')');
	$('#hours').text(hh);
	$('#minutes').text(mmi);
	$('#flash').fadeOut(1000).fadeIn(1000);
	}, 1000);
});
