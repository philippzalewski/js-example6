// plik scripts.js

var a = 10,
    h = 4,
    value;

function getTriangleArea(a, h) {
	
	if ( a <= 0 || h<=0 ) {
		alert('Nieprawidłowe dane');
		console.log('Nieprawidłowe dane');
	} 

	return a*h/2;
}

console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 8);
var triangle3Area = getTriangleArea(7, 14);

console.log('Pole pierwszego trójkąta to:' +triangle1Area);
console.log('Pole drugiego trójkąta to:' +triangle2Area);
console.log('Pole trzeciego trójkąta to:' +triangle3Area);
