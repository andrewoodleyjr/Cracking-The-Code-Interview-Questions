function numberOfOccurances(text){
	text = text.toLowerCase(); // Lowercase the entire string.
	text = text.replace(/\./g,' '); // Remove all periods
	text = text.replace(/\r?\n|\r/); // Remove all paragraphs
	text = text.trim(); // Remove the remaining white space from string.

	// Create a dictionary
	var occurances = {};

	// Create an array from the text
	var tempArray = text.split(" ");

	for (var i in tempArray){
		if (occurances[tempArray[i]] == undefined) {
			occurances[tempArray[i]] = 1
		}else{
			occurances[tempArray[i]] += 1
		}
		
	};

	console.log(occurances);
}

var str = 'A rather long string of English text, an error message ' +
      'actually that just keeps going and going -- an error ' +
      'message to make the Energizer bunny blush (right through ' +
      'those Schwarzenegger shades)! Where was I? Oh yes, ' +
      'you\'ve got an error and all the extraneous whitespace is ' +
      'just gravy.  Have a nice day.';

numberOfOccurances(str)