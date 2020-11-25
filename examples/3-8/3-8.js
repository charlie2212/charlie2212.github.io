//window 頁面的長寬

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

//console.log(winWidth + '/' +winHeight);
//當所有東西都跑完之後會執行onload裡面的東西
window.onload = function(){
	//alert('Website is ready!');

	//window.document
	var WebsiteTitle = window.document.title;
	console.log(WebsiteTitle);
	var anotherTitle = document.title;
	console.log(anotherTitle);
};