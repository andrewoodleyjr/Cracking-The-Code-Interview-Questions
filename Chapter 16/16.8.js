// function placeHolder (length){
// 	var word
// 	switch(length){
// 		case 0:
// 			word = ""
// 			break;
// 		case 1:
// 			word = ""
// 			break;
// 		case 2
// 	}
// }

function currentNumber(n, remainingLength) {

	

    var word
    switch (n) {
        case 0:
            word = ''
            break;
        case 1:
            word = 'one'
            break;
        case 2:
            word = 'two'
            break;
        case 3:
            word = 'three'
            break;
        case 4:
            word = 'four'
            break;
        case 5:
            word = 'five'
            break;
        case 6:
            word = 'six'
            break;
        case 7:
            word = 'seven'
            break;
        case 8:
            word = 'eight'
            break;
        case 9:
            word = 'nine'
            break;
        case 10:
            word = 'ten'
            break;
        case 11:
            word = 'eleven'
            break;
        case 12:
            word = 'twelve'
            break;
        default:
            break;
    }

    return word
}

function numberToWords (number){
	var strNumber = String(number)
	for (var i = 0; i < strNumber.length; i++) {
		currentNumber(strNumber[i], strNumber.length - i);
	};
}

console.log(numberToWords(10000));
