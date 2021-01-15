//actionCompleted();

function actionCompleted(){
	alert('Completed!');
}

//actionCompleted();

var actionCompletedAgain =  function(){
	alert('Completed Again!');
};

//actionCompletedAgain();

function popupMsg(msg){
	var finalMsg = 'Site message: '+msg;
	alert(finalMsg);
}

//popupMsg('Test!');
//popupMsg('Warning!');

function userMsg(name, msg = 'nothing'){
	var finalMsg = name +' says: '+ msg;
	alert(finalMsg);
}

//userMsg('Victor','Hi!');
//userMsg('Victor');


function complexCalc(x, y){
	var result = 0;
	result = x * y;
	result = result/ (x-y);
	result = result*y-x;
	return result;
}

//var finalResult = complexCalc(5,10);
//alert(finalResult);

var demoFunc = {
	popupMsgFunc: popupMsg,
	userMsgFunc :userMsg,
	complexCalcFunc: complexCalc
};

demoFunc.userMsgFunc('Victor', 'I am calling a fuction in an object. ')