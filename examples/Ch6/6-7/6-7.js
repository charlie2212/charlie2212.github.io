$(document).ready(function(){
	$('#animateDiv').on('click',function(){
		$('div').animate({left: '100px', opacity: 1 }, 1000);
	});

});

//animate({display:'none'}, 1000) // Doesn't work
//animate({font:'16px 16px sans-serif'}, 1000)//沒辦法套用在需要很多設定的物件上
//沒辦法用動畫的方式改變顏色
//hover 在js裡面叫作mouseenter