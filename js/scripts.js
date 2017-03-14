// plik scripts.js

function getTriangleArea(a, h) {
	var a = prompt('Wpisz wartość "a"');
	var h = prompt('Wpisz wartość "h"');
	
	if ( a <= 0 ) {
		alert('Nieprawidłowe dane');
		console.log('Nieprawidłowe dane');
	} 

	if ( h <= 0 ) {
		alert('Nieprawidłowe dane');
		console.log('Nieprawidłowe dane');
}

	return a*h/2;
}

console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 9);
var triangle3Area = getTriangleArea(2, 3);