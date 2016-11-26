var width = 389; // ширина изображения
var count = 1; // количество изображений
var position = 0; // текущий сдвиг влево
var positionV=document.documentElement.clientWidth ;
var interval;

var carousel = document.getElementById('carousel');
var leftButton = document.getElementById("leftButton");
var rightButton = document.getElementById("rightButton");
var leftGrad = document.getElementById("gradientLeft");
var rightGrad = document.getElementById("gradientRight");
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

leftButton.style.opacity=0;
leftGrad.style.opacity=0;
leftButton.style.display='none';

var lis=carousel.querySelectorAll('li');

for (var i = 0; i < lis.lenght; i++) {
	lis[i].style.position='relative';
	var span = document.createElement('id',span);
	span.style.cssText = 'position:absolute;left:0;top:0';
 	span.innerHTML=i+1;
 	lis[i].appendChild(span);
}

carousel.querySelector('.footer-button-left').onclick = function() {
// сдвиг влево
// последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
	position = Math.min(position + width * count, 0);
	list.style.marginLeft = position + 'px';
	rightButton.style.opacity=0.999;
	rightGrad.style.opacity=0.999;
	interval=setTimeout(function(){
		rightButton.style.display='inline';
	},0.999);
	//rightButton.hidden=false;
	//rightGrad.hidden=false;
	if(position==0){
		leftButton.style.display='none';
		leftButton.style.opacity=0;
		leftGrad.style.opacity=0;
		//leftButton.hidden=true;
		//leftGrad.hidden=true;
	}else{
		leftButton.style.opacity=0.999;
		leftGrad.style.opacity=0.999;
		interval=setTimeout(function(){
			leftButton.style.display='inline';
		},0.999);
		//leftButton.hidden=false;
		//leftGrad.hidden=false;
	}
};

carousel.querySelector('.footer-button-right').onclick = function() {
// сдвиг вправо
// последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
	leftButton.style.transitionDuration=1000+'ms';
	rightButton.style.transitionDuration=1000+'ms';
	leftGrad.style.transitionDuration=1000+'ms';
	rightGrad.style.transitionDuration=1000+'ms';
	position = position - width * count;
	list.style.marginLeft = position + 'px';
	if ((listElems.length*width-(positionV-position))<389){
		var trans=position - (listElems.length * width - (positionV - position));
		list.style.marginLeft = trans + 'px';
		rightButton.style.display='none';
		rightButton.style.opacity=0;
		rightGrad.style.opacity=0;
		//rightButton.hidden=true;
		//rightGrad.hidden=true;
	}
	leftButton.style.opacity=0.999;
	leftGrad.style.opacity=0.999;
	interval=setTimeout(function(){
		leftButton.style.display='inline';
	},0.999);
	//leftButton.hidden=false;
	//leftGrad.hidden=false;
};

