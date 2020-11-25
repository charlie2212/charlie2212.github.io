
//建立function之後用var印出來 之後的運算跟加法的一樣邏輯
function addmsg(x,y){
	var result = x + y;
	var msg = 'The sum of ' + x + ' and ' + y + ' is ' + result;
	return msg;

}

var basicMath ={
	add: addmsg,
	//substract: ,
	//multuply: ,
	//divide: 
};



console.log(basicMath.add(10,21));
//console.log(basicMath.substract(10,21));
//console.log(basicMath.divide(80, 4));
//console.log(basicMath.multuply(5, 17));
