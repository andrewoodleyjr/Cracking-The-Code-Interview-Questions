// With only string object
// O(n)
function uniqueCharsStr(str) {
    for(var i = 0; i <= str.length - 1; i++){
    	var char = str[i];
    	var tempStr = str.substr(0, i) + str.substr(i+1, str.length);
    	if(tempStr.indexOf(char) > -1){
    		return false;
    	}
    }
    return true;
}

// With Hash Table
// O(n)
function uniqueCharsHashTable(str) {
	var obj = {};
	for(var i = 0; i <= str.length - 1; i++){
		if (!obj[str[i]]) {
			obj[str[i]] = 1;
		}else{
			return false;
		}
	}
	return true;
}

// With Array
// O(n)
function uniqueCharsArray(str) {
    var array = str.split("");
    for (var i = array.length - 1; i >= 0; i--) {
    	var rm = str.indexOf(array[i])
    	var temp = str.substr(0, rm) + str.substr(rm + 1, str.length)
    	if (temp.indexOf(array[i]) > -1) {
    		return false;
    	};
    };
    return true
}

var str = "helo"
console.log(uniqueCharsHashTable(str));
console.log(uniqueCharsStr(str));
console.log(uniqueCharsArray(str));