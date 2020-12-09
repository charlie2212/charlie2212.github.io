function changeAllBgs(){
	var targets = document.getElementsByTagName('div');
	for(var index = 0; index < targets.length ; index++){
		var div = targets[index];
		if (div.id !== 'nochange'){
			div.style.backgroundColor = 'green'; 
		}
		

	}
}

window.onload = function(){
	//for(loop variable ; loop condition ;loop action ){}
	//counter++ -> counter = counter + 1
	/*for(var counter = 1; counter <=10; counter++){
		console.log(counter);

	}*/
	//Infinite loop!! Dangerous!!
	/*變數名稱打錯
	var counterB = 100;
	for(var counter = 1; counter <=10; counterB++){
		console.log(counter);
	}*/
	//Infinite loop!! Dangerous!!
	/*範圍設錯
	for(var counter = 1; counter <=10; counter--){
		console.log(counter);
	}*/
	var button = document.getElementById('changeAll');
	button.addEventListener('click', changeAllBgs);
};