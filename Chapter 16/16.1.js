function swapNumbers (a, b){
	a += b; // a = 6
	b = a - b;
	a -= b

	console.log(a, b);
}
swapNumbers(-12, 4);