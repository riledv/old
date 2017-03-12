var news = document.getElementById('buttonNews');
var newsmag = document.getElementById('popUpNews');

var forkaen = document.getElementById('forkaen');

var checkn = false;
var notButn = true;

news.onclick = function(){
	if(checkn == false){
		newsmag.style.display = 'block';
		notButn = false;
		checkn = true;
		revsmag.style.display = 'none';
		checkr = false;
		notButr = false;
	} else {
		newsmag.style.display = 'none';
		checkn = false;
		notButn = false;
	}
}

news.onmouseout = function(){
	notButn = true;
}

var rev = document.getElementById('review');
var revsmag = document.getElementById('popUpRev');

var checkr = false;
var notButr = true;

rev.onclick = function(){
	if(checkr == false){
		revsmag.style.display = 'block';
		notButr = false;
		checkr = true;
		newsmag.style.display = 'none';
		checkn = false;
		notButn = false;
	} else {
		revsmag.style.display = 'none';
		checkr = false;
		notButr = false;
	}
}

rev.onmouseout = function(){
	notButr = true;
}

forkaen.onclick = function(){
	if((notButn == true && checkn == true) || (notButr == true && checkr == true)){
		newsmag.style.display = 'none';
		checkn = false;
		notButn = false;
		revsmag.style.display = 'none';
		checkr = false;
		notButr = false;
	}
}

var main = document.getElementById("main");

var alertBuf = document.getElementById('alertBuf');
var call =  document.getElementById('zvonok');
var num = document.getElementById('num');

function func() {
	alertBuf.style.display = 'none';
}
call.onclick = function(){
	var range = document.createRange();  
	range.selectNode(num);  
	window.getSelection().addRange(range); 
	alertBuf.style.display = 'block';
	setTimeout(func,900);
	var successful = document.execCommand('copy'); 
	window.getSelection().removeAllRanges();
}