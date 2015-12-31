/*
 * Check Pemutation
 */

// Use Hashtable and Array
// O(n+m) shortArray length + hashtable length
function checkPermutation (shortStr, longStr){
	if (shortStr.length > longStr.length) {
		return false;
	};

	// Iterate with short array
	var shortStrArray = shortStr.split("");

	// Put long string in hashtable
	var longStrHashTable = {};

	for(var i = 0; i <= longStr.length - 1; i++){
		if (!longStrHashTable[longStr[i]]) {
			longStrHashTable[longStr[i]] = 1;
		}else{
			longStrHashTable[longStr[i]] = longStrHashTable[longStr[i]] + 1;
		}
	}

	for (var i = shortStrArray.length - 1; i >= 0; i--) {
		if(longStrHashTable[shortStrArray[i]] > 0 || longStrHashTable[shortStrArray[i]] != undefined){
			longStrHashTable[shortStrArray[i]] = longStrHashTable[shortStrArray[i]] - 1;			
		}else{
			return false;
		}
	};

	return true;

}

console.log('Hello World');
console.log(checkPermutation("aif", "af "));