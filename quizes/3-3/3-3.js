
function changeBg1(){
	var bg1 = document.getElementById('item1').style.backgroundColor
	var bg2 = document.getElementById('item2').style.backgroundColor
	var em = document.getElementById('item1');
	em.style.backgroundColor= bg2;
	em = document.getElementById('item2');
	em.style.backgroundColor = bg1;
}

function changeBg2(){
	var bg2 = document.getElementById('item2').style.backgroundColor
	var bg3 = document.getElementById('item3').style.backgroundColor
	var em = document.getElementById('item2');
	em.style.backgroundColor= bg3;
	em = document.getElementById('item3');
	em.style.backgroundColor = bg2;
}




window.onload = function(){
	var em = document.getElementById('switch12');
	em.addEventListener('click', changeBg1);
	var em = document.getElementById('switch23');
	em.addEventListener('click', changeBg2);
}