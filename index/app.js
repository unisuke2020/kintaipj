﻿//Firebase初期設定
  var firebaseConfig = {
    apiKey: "AIzaSyA8zeue6O4l9SlXr_LM43Qa73szgsHV44Q",
    authDomain: "model-palace-277910.firebaseapp.com",
    databaseURL: "https://model-palace-277910.firebaseio.com",
    projectId: "model-palace-277910",
    storageBucket: "model-palace-277910.appspot.com",
    messagingSenderId: "981845155739",
    appId: "1:981845155739:web:2e21aae1b758fbfbd0cb3e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//DOM取得
var inputarea = document.getElementById('input-area');
var tcardarea = document.getElementById('tcard-area');
var newuser = document.getElementById('newuser');
var login = document.getElementById('login');
var logout = document.getElementById('logout');


//新規登録処理
newuser.addEventListener('click', function(e) {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    alert('登録できません（' + error.message + '）');
  });
});



//ログイン処理
login.addEventListener('click', function(e) {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    alert('ログインできません（' + error.message + '）');
  });
});



//ログアウト処理
logout.addEventListener('click', function() {
  firebase.auth().signOut();
});



//認証状態の確認
firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    loginDisplay();
  }
  else {
    logoutDisplay();
  }
});



function loginDisplay() {
  inputarea.classList.add('hide');
  tcardarea.classList.remove('hide');
}


function logoutDisplay() {
  inputarea.classList.remove('hide');
  tcardarea.classList.add('hide'); 
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
$('.btn-gradient-radius').on({
  //ひとつ目のイベントハンドラ
  'mouseenter': function() {
    console.log("マウスオーバーされました");
  },
  //ふたつ目のイベントハンドラ
  'mouseleave': function() {
    console.log("マウスアウトされました");
  }
});