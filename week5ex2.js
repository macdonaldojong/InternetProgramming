function print5(){
		//alert(1);
		//alert(2);
		//alert(3);
		//alert(4);
		alert(5);
}

//print5();
print5();

function addition(){
		var num1 =5;
		var num2 =6;
		var num3 =var1 + var2;
		
}
alert(num3);

function myClickFunction(){

	var element = document.getElementById('pageheading');
	element.firstChild.nodeValue='New Heading';
}

function myLoadFunction(){
			var element = document.getElementById('pageheading');
			element.firstChild.nodeValue = 'New Heading';
}
document.addEventListener('DOMContentLoadId', myLoadFunction);
