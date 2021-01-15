function resetBg(){
	var em = document.getElementById('item1');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item2');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item3');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item4');
	
}

function changeBg(){
	resetBg();
	this.style.backgroundColor = 'blue';
	//直接點元件改顏色 上述方法只是比較清楚的先點id然後call叫的id改顏色
}

window.onload = function(){
	var em = document.getElementById('item1');
	em.addEventListener('click', changeBg);
	em = document.getElementById('item2');
	em.addEventListener('click', changeBg);
	em = document.getElementById('item3');
	em.addEventListener('click', changeBg);
	em = document.getElementById('item4');
	em.addEventListener('click', changeBg);

} 