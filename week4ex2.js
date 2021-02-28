function print5(){
		alert(1);
		alert(2);
		alert(3);
		alert(4);
		alert(10);
}

print5();
print5();

function myLoadFunction(){
			var element = document.getElementById('pageheading');
			element.firstChild.nodeValue = 'New Heading';
}
document.addEventListener('DOMContentLoadId', myLoadFunction);