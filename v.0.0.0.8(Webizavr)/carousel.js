var width = 389; // ширина изображения
var count = 1; // количество изображений
var position = 0; // текущий сдвиг влево
var positionV=document.documentElement.clientWidth ;

var carousel = document.getElementById('carousel');
var leftButton = document.getElementById("leftButton");
var rightButton = document.getElementById("rightButton");
var leftGrad = document.getElementById("gradientLeft");
var rightGrad = document.getElementById("gradientRight");
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

leftButton.hidden=true;
leftGrad.hidden=true;

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
	rightButton.hidden=false;
	rightGrad.hidden=false;
	if(position==0){
		leftButton.hidden=true;
		leftGrad.hidden=true;
	}else{
		leftButton.hidden=false;
		leftGrad.hidden=false;
	}
};

carousel.querySelector('.footer-button-right').onclick = function() {
// сдвиг вправо
// последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
	position = position - width * count;
	list.style.marginLeft = position + 'px';
	if ((listElems.length*width-(positionV-position))<389){
		var trans=position - (listElems.length * width - (positionV - position));
		list.style.marginLeft = trans + 'px';
		rightButton.hidden=true;
		rightGrad.hidden=true;
	}
	leftButton.hidden=false;
	leftGrad.hidden=false;
};

