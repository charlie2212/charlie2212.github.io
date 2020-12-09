function changeBg(){
	var buttonId = this.id;
	var target = document.getElementById(buttonId + 'Div');
	if(!target){
		alert('No element found: ' +buttonId+ 'Div');
	}
	else{
		/*if(buttonId === 'block1'){
			target.style.backgroundColor = 'yellow';
		}
		else if (buttonId === 'block2'){
			target.style.backgroundColor = 'orange';
		}
		else{
			target.style.backgroundColor = 'green';
		}*/
		// ||是or的意思 &&是and的意思
		// and和or 可以組合使用A || (B && C)
		if (buttonId === 'block1' || buttonId === 'block2'){
			target.style.backgroundColor = 'yellow';
		}
		else{
			target.style.backgroundColor = 'green';
		}
	}
}

window.onload = function(){
	/*//let condition = 4 > 5; 
	let condition = 5 == 5;
	//如果是寫'5' == 5 會自動把字串變成數字（用兩個等號的時候js會試著把結果轉成其他型態試試看）
	//如果是三個等號就會看是不是完全一樣(不自動轉換成其他形態)
	let condition = '5'!== 5;//(!== 是不等於的意思<不會轉換> !=也是不等於<但是會轉換>)
	if(condition){
		console.log('true');
	}
	else{
		console.log('false');
	}
	/*可以只有if沒有else*/

	var buttons = document.getElementsByTagName('button');
	buttons[0].addEventListener('click', changeBg);
	buttons[1].addEventListener('click', changeBg);
	buttons[2].addEventListener('click', changeBg);
	buttons[3].addEventListener('click', changeBg);

}