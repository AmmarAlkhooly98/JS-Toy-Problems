var arrayMax = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10000, 11, 12, 13, 14, 15, 333, 4444 ];

function max(arr) {
	return Math.max(...arrayMax);
}

function average(x, y) {
	return (x + y) / 2;
}

var me = {
	name: 'Ammar Alkhooly',
	age: 20,
	career: 'Programmer'
};

var myProperties = [];

for (var key in me) {
	myProperties.push(me[key]);
}

var x = true;
var y = new Boolean('hello');

var a = new Boolean(false);
var b = new Boolean(false);

var d = 12 / 'f';
var z = 2 < '12';

function canYouDrive(age) {
	if (age <= 17) {
		return 'you are too young to drive';
	}
	return 'have fun driving';
}

var f = 3 == 5 || '4' == 5;

//function sum that will add all of the numbers behind the function parameter input.
//how it works, we need a stop condition in the if statement and

function sum(n) {
	if (n === 0) {
		return 0;
	}
	return n + sum(n - 1);
}

function players(name, scores) {
	return {
		name: name,
		scores: scores
	};
}

var player1 = players('Ammar', 21);
var player2 = players('Ahmad', 6666);

//week2,data Modeling qu.1

function book(title, author, numberOfPages) {
	return {
		title: title,
		author: author,
		numberOfPages: numberOfPages
	};
}

//week2,data Modeling qu.2

var book1 = book('Harry Potter', 'Ahmad', 21);

//week2,data Modeling qu.4

function importantBookeys(book) {
	return book.title + ' is the title of the book with ' + book.numberOfPages + ' pages';
}

//week2,data Modeling qu.5

var book2 = book('birds', 'Ammar', 22);
var books = [ book1, book2 ];

function each(coll, f) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			f(coll[i], i);
		}
	} else {
		for (var key in coll) {
			f(coll[key], key);
		}
	}
}

function map(array, f) {
	var acc = [];
	each(array, function(element, i) {
		acc.push(f(element, i));
	});
	return acc;
}

// Abstraction q1

function select(object, keys) {
	var obj = {};

	for (i = 0; i < keys.length; i = i + 1) {
		for (var key in object) {
			if (keys[i] === key) {
				return;
			}
		}
	}
}

//select({a: 1, b: 2, c: 3}, ['a', 'b']); // => {a: 1, b: 2}

function summation(n) {
	if (n > 0) {
		n = n + summation(n - 1);
	}
	return n;
}

function factorial(n) {
	count = 1;
	if (n > count) {
		//console.log(n)
		n = n * factorial(n - 1);
		count = count + 1;
	}
	return n;
}

function repeatString(string, number) {
	var counter = 1;
	if (number > counter) {
		return string.repeat(number);
		counter += 1;
	}
}

function fibonacci(n) {
	//debugger;
	if (n === 0 || n === 1) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}

function multiplyByTen(number, n) {
	if (n === 0) {
		return number;
	}
	return 10 * multiplyByTen(number, n - 1);
}

var count = 0;

function counter() {
	count += 1;
	return count;
}

function summation1(n) {
	var total = 0;
	var count = 0;
	while (count <= n) {
		total = total + count;
		count++;
	}
	return total;
}

function factorial1(n) {
	var total = 1;
	var count = 1;
	while (count <= n) {
		total = total * count;
		count++;
	}
	return total;
}

function repeatString1(str, count) {
	var repeatStr = '';
	var counter = 0;
	while (counter <= count) {
		repeatStr = str.repeat(count);
		counter++;
	}
	return repeatStr;
}

function counting(n) {
	var str = '';
	var count = 1;
	while (count <= n) {
		if (count === n) {
			return str + count;
		}
		str = str + count + ',';

		count++;
	}
}

// function meetAndGreet(n) {
// 	var result = '';
// 	var count = 1;
// 	var meet = 1;
// 	var lineBreak = '\n';
// 	var comma = ',';

// 	while (count <= n) {
// 		if (n === 1) {
// 			result = result + 'Welcome ' + count + lineBreak;
// 			count++;
// 			// lineBreak;
// 		} else if (count === 1) {
// 			result = result + 'Welcome ' + count + ', meet ';
// 			count++;
// 		} else if (count === 3) {
// 			result = result + 'Welcome ' + count + ', meet ' + (count - 2) + ',' + (count - 1) + '\n';
// 			count++;
// 		} else if (count === 4) {
// 			result =
// 				result + 'Welcome ' + count + ', meet ' + (count - 3) + ',' + (count - 2) + ',' + (count - 1) + '\n';
// 			count++;
// 		} else if (count === 5) {
// 			result =
// 				result +
// 				'Welcome ' +
// 				count +
// 				', meet ' +
// 				(count - 4) +
// 				',' +
// 				(count - 3) +
// 				',' +
// 				(count - 2) +
// 				',' +
// 				(count - 1) +
// 				'\n';
// 			count++;
// 		}
// 	}
// 	return result;
// }

function reverseString(str) {
	var count = str.length - 1;
	var result = '';

	while (count >= 0) {
		result = result + str[count];
		count -= 1;
	}
	return result;
}
// console.log(reverseString('ammaR'));

function oddOrEven(n) {
	var count = 0;
	str = '';
	while (count <= n) {
		if (count % 2 === 0) {
			str = str + count + ' is even' + '\n';
			count += 1;
		} else if (count % 2 !== 0) {
			str = str + count + ' is odd' + '\n';
			count += 1;
		}
	}
	return str;
}

function sumArr(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		total = total + array[i];
	}
	return total;
}

function maxNumInArray(array) {
	var max = array[0];
	for (var i = 0; i < array.length; i++) {
		// debugger;
		if (max < array[i]) {
			max = array[i];
		}
	}
	return max;
}

function remove(array, element) {
	var newArr = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] === element) {
			array.splice(i, 1);
		} else {
			newArr.push(array[i]);
		}
	}
	return newArr;
}

function EvenNums(array) {
	var newArr = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			newArr.push(array[i]);
		}
	}
	return newArr;
}

function average(array) {
	var result = 0;
	// debugger;
	for (var i = 0; i < array.length; i++) {
		result = result + array[i] / array.length;
	}
	return result;
}

function mininmum(array) {
	var min = array[0];
	for (var i = 0; i < array.length; i++) {
		if (min > array[i]) {
			min = array[i];
		}
	}
	return min;
}

function countChar(string, character) {
	var count = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i] === character) {
			count += 1;
		}
	}
	return count;
}

function evenLengthWords(array) {
	var newArr = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i].length % 2 === 0) {
			newArr.push(array[i]);
		}
	}
	return newArr;
}

var person = {
	firstName: 'Ammar',
	lastName: 'Alkhooly',
	age: 20,
	homeTown: 'Egypt',
	favoriteColor: 'Blue'
};

function formatName(object) {
	return object.firstName + ' ' + object.lastName;
}

var people = [
	{
		name: {
			first: 'Grace',
			middle: 'B.',
			last: 'Hopper'
		},
		age: 85
	},
	{
		name: {
			first: 'Adele',
			last: 'Goldstine'
		},
		age: 43
	},
	{
		name: {
			first: 'Ada',
			last: 'Lovelace'
		},
		age: 36
	},
	{
		name: {
			first: 'Hedy',
			middle: 'E.',
			last: 'Lamarr'
		},
		age: 85
	},
	{
		name: {
			first: 'Ruchi',
			last: 'Sanghvi'
		},
		age: 34
	},
	{
		name: {
			first: 'Ammar',
			middle: 'Yaser',
			last: 'Alkhooly'
		},
		age: 20
	}
];

function fullName(array) {
	var result = [];
	var s = ' ';
	for (var key in array) {
		if (array[key].name.middle) {
			result.push(array[key].name.first + s + array[key].name.middle + s + array[key].name.last);
		} else {
			result.push(array[key].name.first + s + array[key].name.last);
		}
	}
	return result;
}

function averageAge(array) {
	var average = 0;
	for (var key in array) {
		average = average + array[key].age / array.length;
	}
	return average;
}

function aboveAge(array, age) {
	result = [];
	for (var key in array) {
		if (age < array[key].age) {
			result.push(array[key].name.first + ' ' + array[key].name.last);
		}
	}
	return result;
}

var dirtyObject = {
	_fht: 192492,
	name: 'Yan Fan',
	age: 27,
	_byz: 939205,
	_ttrs: 510852
};

function clean(obj) {
	result = []; //should return an object
	for (var key in obj) {
		if (key[0] !== '_') {
			result.push(key + ':' + ' ' + obj[key]);
		}
	}
	return result;
}

var numbers = {
	components1: 'Even Numbers',
	components2: 'Odd Numbers',
	num1: 0,
	num2: 1,
	num3: 2,
	num4: 3,
	num5: 4,
	num6: 5,
	num7: 6
};

function removeOddValues(obj) {
	// debugger;
	for (var key in obj) {
		if (typeof obj[key] === 'number' && obj[key] % 2 !== 0) {
			delete obj[key];
		}
	}
	return obj;
}

function countWords(string) {}

//toy problem 07/04/2019

function firstNonRepeatedCharacter(string) {
	var obj = {};
	for (var i = 0; i < string.length; i++) {
		var count = 1;
		for (var j = 0; j < string.length; j++) {
			if (string[i] === string[j]) {
				obj[string[i]] = count++;
			}
		}
	}
	console.log(obj);
	for (var key in obj) {
		if (obj[key] === 1) {
			return key;
		}
	}
	return 'sorry';
}

//toy problem 08/04/2019

// commonCharacters = function(string1, string2) {
// 	var obj = {};
// 	result = '';
// 	for (var i = 0; i < string1.length; i++) {
// 		obj.string[i] = i;
// 		console.log(obj);
// 		for (var j = 0; j < string2.length; j++) {}
// 	}
// };

commonCharacters = function(string1, string2) {
	var str1 = string1.split('');
	var str2 = string2.split('');
	var result = '';
	//debugger;
	for (var i = 0; i < str1.length; i++) {
		if (str1[i] === str2[j] && result.indexOf(str1[i]) === -1 && str1[i] !== ' ') {
			result = result + str1[i];
		}
		for (var j = 0; j < str2.length; j++) {
			if (str1[i] === str2[j] && result.indexOf(str2[j]) === -1 && str2[j] !== ' ') {
				result = result + str2[j];
			}
		}
	}
	return result;
};

//toy problem 09/04/2019

Array.prototype.isSubsetOf = function(array) {
	var result = true;
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < this.length; j++) {
			if (this[j] !== array[i]) {
				return false;
			}
		}
	}
	return result;
};

//toy problem 10/04/2019

// Note: do not change the function signature to `function nthFibonacci(n) {}`
// It will cause the last test to fail!

nthFibonacci = function(n) {
	if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else if (n === 2) {
		var number = 1;
	} else if (n === 3) {
		var number = 2;
	} else if (n === 4) {
		var number = 3;
	} else if (n === 5) {
		var number = 5;
	} else if (n === 6) {
		var number = 8;
	} else if (n === 7) {
		var number = 13;
	} else if (n === 8) {
		var number = 21;
	} else if (n === 9) {
		var number = 34;
	} else if (n === 10) {
		var number = 55;
	}
	return number;
};

//toy problem 14/04/2019

var Stack = function() {
	this.storage = [];
};

Stack.prototype.push = function(val) {
	this.storage.push(val);
};

Stack.prototype.pop = function() {
	return this.storage.pop();
};

Stack.prototype.size = function() {
	return this.storage.length;
};

var Queue = function() {
	Stack.call(this);
	var inbox = new Stack();
	var outbox = new Stack();
};

Queue.prototype = Object.create(Stack.prototype);
Queue.prototype.constructor = Queue;

Queue.prototype.enqueue = function(val) {
	Stack.prototype.push.call(this);
};

Queue.prototype.dequeue = function() {
	outbox.pop();
};

Queue.prototype.size = function() {};

//toy problem 15/04/2019

function evenOccurrence(arr) {
	var obj = {};
	var r = 0;
	// debugger;
	for (var i = 0; i < arr.length; i++) {
		var count = 1;
		for (var j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				obj[arr[i]] = count++;
			}
		}
	}
	console.log(obj);
	for (var i = 0; i < arr.length; i++) {
		if (obj[arr[i]] % 2 === 0) {
			console.log(obj[arr[i]]);
			console.log(arr[i]);
			r = arr[i];
			return r;
		}
	}
	return null;
}

//toy problem 16/04/2019

function rockPaperPermutation(roundCount) {
	var possabilities = [ 'r', 'p', 's' ];
	var finalResult = [];

	if (roundCount === 0) {
		return [];
	} else if (roundCount === 1) {
		return possabilities;
	}
	while (roundCount > 1) {
		for (var i = 0; i < possabilities.length; i++) {
			finalResult.push(possabilities[i] + 'r');
			finalResult.push(possabilities[i] + 'p');
			finalResult.push(possabilities[i] + 's');
		}
		console.log(roundCount);
		roundCount--;
		possabilities = finalResult;
		console.log(roundCount);
	}
	return finalResult;
}

//toy problem 21/04/2019

function binarySearch(array, target) {
	for (var i = 0; i < array.length; i++) {
		if (target === array[i]) {
			return i;
		}
	}
	return -1;
}

//toy problem 22/04/2019

function parseQueryString(url) {
	var arr = [];
	var arr2 = [];
	for (var i = 0; i < url.length; i++) {
		if (url[i] === '&' && url[i] === '=') {
			url.splice(url[i], 1);
		}
	}
	return arr.push(url);
}

//toy problem 24/04/2019

var Tree = function(value) {
	this.value = value;
	this.children = [];
};

Tree.prototype.BFSelect = function(filter) {
	var queue = new Queue();

	//Your code here
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
 */

/**
 * add an immediate child
 * (wrap values in Tree nodes if they're not already)
 */
Tree.prototype.addChild = function(child) {
	if (!child || !(child instanceof Tree)) {
		child = new Tree(child);
	}

	if (!this.isDescendant(child)) {
		this.children.push(child);
	} else {
		throw new Error('That child is already a child of this tree');
	}
	// return the new child node for convenience
	return child;
};

/**
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
 */
Tree.prototype.isDescendant = function(child) {
	if (this.children.indexOf(child) !== -1) {
		// `child` is an immediate child of this tree
		return true;
	} else {
		for (var i = 0; i < this.children.length; i++) {
			if (this.children[i].isDescendant(child)) {
				// `child` is descendant of this tree
				return true;
			}
		}
		return false;
	}
};

/**
 * remove an immediate child
 */

Tree.prototype.removeChild = function(child) {
	var index = this.children.indexOf(child);
	if (index !== -1) {
		// remove the child
		this.children.splice(index, 1);
	} else {
		throw new Error('That node is not an immediate child of this tree');
	}
};

//toy problem 25/04/2019

function onlyUnique(str) {
	let obj = {};
	let result = '';
	for (let i = 0; i < str.length; i++) {
		let counter = 0;
		for (let j = 0; j < str.length; j++) {
			if (str[i] === str[j]) {
				counter += 1;
			}
		}
		obj[str[i]] = counter;
	}

	for (let key in obj) {
		if (obj[key] <= 1) {
			result += key;
		}
	}
	return result;
}

//toy problem 25/04/2019

var compose = function() {};

compose.prototype.func1 = function x(name) {
	return 'hi: ' + name;
};
compose.prototype.func2 = function y(comment) {
	return comment + '!';
};

var pipe = function() {
	var obj = {};
	obj.func1 = function x(name) {
		return 'how are you ' + name;
	};
	obj.func2 = function y(sport) {
		return 'I love ' + sport + '!';
	};

	return obj;
};

//toy problem 29/04/2019

var Range = function(start, end, step) {
	// debugger;
	var arr = [];
	for (var i = start; i <= end; ) {
		if (!step) {
			arr.push(i);
			i++;
		}
		if (step) {
			arr.push(i);
			i = step + i;
			i++;
		}
	}
	return arr;
};

Range.prototype.size = function() {
	//Your code here
};

Range.prototype.each = function(callback) {
	//Your code here
};

Range.prototype.includes = function(val) {
	//Your code here
};

//toy problem 30/04/2019

function isBalanced1(string) {
	var result = '';
	if (string.length === 0) {
		return true;
	}
	if (string.includes('(') || string.includes(')')) {
		var arr1 = [];
		var arr2 = [];
		for (var i = 0; i < string.length; i++) {
			if (string[i] === '(') {
				arr1.push(string[i]);
			}
			if (string[i] === ')') {
				arr2.push(string[i]);
			}
		}
		// console.log(arr1);
		// console.log(arr2);
		if (string[0] === ')') {
			return false;
		} else if (arr1.length === arr2.length) {
			return true;
		} else if (arr1.length !== arr2.length) {
			return false;
		}
		return result;
	}
}

//Code-Wars Question 30/04/2019

function XO(str) {
	// debugger;
	var arr1 = [];
	var arr2 = [];
	for (var i = 0; i < str.length; i++) {
		if (str[i] === 'x' || str[i] === 'X') {
			arr1.push(str[i]);
		}
		if (str[i] === 'o' || str[i] === 'O') {
			arr2.push(str[i]);
		}
	}
	// console.log(arr1);
	// console.log(arr2);
	if (arr1.length === arr2.length) {
		return true;
	} else if (arr1.length == 0 && arr2.length === 0) {
		return true;
	} else if (arr1.length !== arr2.length) {
		return false;
	}
}

//Code-Wars Question 01/05/2019

function isPowerOfTwo(n) {
	for (var i = 0; i < n; i++) {
		if (Math.pow(2, i) === n) {
			return true;
		}
	}
	return false;
}

//Code-Wars Question 01/05/2019

function abbrevName(name) {
	var arr = name.split(' ');
	var result = '';
	for (var i = 0; i < arr.length; i++) {
		result += arr[i][0].toUpperCase() + '.';
	}
	var arr2 = result.split('');
	console.log(arr2);
	arr2.splice(arr2.length - 1, 1);
	return arr2.join('');
}

//toy problem 02/05/2019

function insertionSort(array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if (array[i].order < array[j].order) {
				var holder1 = array[i];
				array[i] = array[j];
				array[j] = holder1;
			} else if (array[i].value < array[j].value) {
				var holder2 = array[i];
				array[i] = array[j];
				array[j] = holder2;
			}
		}
	}
	return array;
}

// function ageInDays(year, month, day) {
// 	var currentYear = 2019;
// 	var currentMonth = 5;
// 	var currentDay = 2;
// 	var finalResult = '';
// 	if (year) {
// 		var yearAge = (currentYear - year) * 365;
// 	} else if (month) {
// 		var monthAge = currentMonth - month;
// 		console.log(monthAge);
// 	}
// }

//toy problem 04/05/2019

var bubbleSort = function(array) {
	debugger;
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if (array[i] < array[j]) {
				var holder = array[i];
				array[i] = array[j];
				array[j] = holder;
			}
		}
	}
	return array.toString();
};

//toy problem 05/05/2019

function isBalanced(str) {
	var bArr1 = [];
	var bArr2 = [];
	var pArr1 = [];
	var pArr2 = [];
	var cArr1 = [];
	var cArr2 = [];
	for (var i = 0; i < str.length; i++) {
		if (bArr1.length === 0 && bArr2.length === 1) {
			return false;
		} else if (pArr1.length === 0 && pArr2.length === 1) {
			return false;
		} else if (cArr1.length === 0 && cArr2.length === 1) {
			return false;
		} else if (str[i] === '[') {
			bArr1.push(str[i]);
		} else if (str[i] === ']') {
			bArr2.push(str[i]);
		} else if (str[i] === '(') {
			pArr1.push(str[i]);
		} else if (str[i] === ')') {
			pArr2.push(str[i]);
		} else if (str[i] === '{') {
			cArr1.push(str[i]);
		} else if (str[i] === '}') {
			cArr2.push(str[i]);
		}
	}

	if (
		bArr1.length === bArr2.length &&
		pArr1.length === pArr2.length &&
		cArr1.length === cArr2.length &&
		str[2] !== ')' &&
		str[0] !== ')' &&
		str[3] !== '}'
	) {
		return true;
	}
	return false;
}

// Code-Wars Question 05/05/2019

function remove(str, n) {
	if (n > str.length) {
		return str.replace(/!/g, '');
	}
	var arr = str.split('');
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === '!' && count < n) {
			arr.splice(i, 1);
			--i;
			++count;
		}
		// --i;
	}

	return arr.join('');
}

//toy problem 06/05/2019

function largestProductOfThree(array) {
	array.sort((a, b) => a - b);
	var firstMultiple = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
	var secondMultiple = array[0] * array[1] * array[array.length - 1];
	if (firstMultiple > secondMultiple) {
		return firstMultiple;
	} else {
		return secondMultiple;
	}
}

//toy problem 07/05/2019

function longestRun(string) {
	var mainArr = [];
	var first = '';
	for (var i = 0; i < string.length; i++) {
		if (first !== string[i]) {
			first = string[i];
			mainArr.push([ string[i], i, i, 1 ]);
		} else if (first === string[i]) {
			mainArr[mainArr.length - 1][2] = i;
			mainArr[mainArr.length - 1][3]++;
		}
	}
	console.log(mainArr);
}

//toy problem 26/05/2019

function middle(numbers) {
	if (numbers.length % 2 !== 0) {
		return numbers[Math.floor(numbers.length / 2)];
	} else if (numbers.length === 2) {
		return (numbers[0] + numbers[1]) / 2;
	} else if (numbers.length % 2 === 0) {
		var midOne = numbers[numbers.length - numbers.length / 2];
		var midTwo = numbers[numbers.length - numbers.length / 2 - 1];
		return (midOne + midTwo) / 2;
	}
}

//toy problem 28/05/2019

function primeTester(n) {
	var arr = [];
	if (n === 1) {
		return false;
	} else if (n > 1) {
		while (n > 1) {
			arr.push(n);
			n--;
		}
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr.length; j++) {
				if (i * j === arr[0]) {
					return false;
				}
			}
		}
	}
	return true;
}

//toy problem 28/05/2019

function spiralTraversal(matrix) {
	var arr = [];
	for (var i = 0; i < matrix.length; i++) {
		arr.push(matrix[0][i]);
		// if (matrix[i][i] !== arr[i]) {
		// var lastEle = matrix[1][i].length - 1;
		// arr.push(matrix[1][i].length - 1);
		// }
		while (count >= 0) {
			var count = matrix.length;
			console.log(count);
			console.log(matrix[matrix[i].length - count]);
			count--;
		}
	}
}

//toy problem 30/05/2019
function characterFrequency(string) {
	var obj = {};
	var mainArr = [];
	var inputArr = string.split('');
	for (var i = 0; i < inputArr.length; i++) {
		var count = 1;
		for (var j = 0; j < inputArr.length; j++) {
			if (inputArr[i] === inputArr[j]) {
				obj[inputArr[i]] = count++;
			}
		}
	}

	for (var letters in obj) {
		mainArr.push([ letters, obj[letters] ]);
	}

	function ComparatorLetters(a, b) {
		if (a[0] < b[0]) return -1;
		if (a[0] > b[0]) return 1;
		return 0;
	}

	function ComparatorCount(a, b) {
		if (a[1] < b[1]) return 1;
		if (a[1] > b[1]) return -1;
		return 0;
	}

	myArray2 = mainArr.sort(ComparatorLetters);
	myArray1 = mainArr.sort(ComparatorCount);
	console.log(obj);
	return mainArr;
}

//toy problem 07/06/2019

/*
 * Basic tree that stores a value.
 */
var Tree = function(value) {
	this.value = value;
	this.children = [];
};

Tree.prototype.map = function(callback) {
	// TODO: return a new tree with the same structure as `this`,
	//       with values generated by the callback
};

/**
 * You shouldn't need to change anything below here,
 * but feel free to read it.
 */

/**
 * add an immediate child
 * (wrap values in Tree nodes if they're not already)
 */
Tree.prototype.addChild = function(child) {
	if (!child || !(child instanceof Tree)) {
		child = new Tree(child);
	}

	if (!this.isDescendant(child)) {
		this.children.push(child);
	} else {
		throw new Error('That child is already a child of this tree');
	}
	// return the new child node for convenience
	return child;
};

/**
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
 */
Tree.prototype.isDescendant = function(child) {
	if (this.children.indexOf(child) !== -1) {
		// `child` is an immediate child of this tree
		return true;
	} else {
		for (var i = 0; i < this.children.length; i++) {
			if (this.children[i].isDescendant(child)) {
				// `child` is descendant of this tree
				return true;
			}
		}
		return false;
	}
};

/**
 * remove an immediate child
 */
Tree.prototype.removeChild = function(child) {
	var index = this.children.indexOf(child);
	if (index !== -1) {
		// remove the child
		this.children.splice(index, 1);
	} else {
		throw new Error('That node is not an immediate child of this tree');
	}
};

//toy problem 08/06/2019

function sumArray(array) {
	var sum = 0;
	debugger;
	// for (var j = 0; j < array.length; j++) {
	// 	if (array[j] < 0) {
	// 		array.splice(j, 1);
	// 	}
	// }
	for (var i = 0; i < array.length; i++) {
		if (array[i + 1] >= array[i]) {
			sum = sum + array[i];
		}
	}
	console.log(array);
	return sum;
}

//toy problem 09/06/2019

function telephoneWords(digitString) {
	var two = [ 'a', 'b', 'c' ];
	var three = [ 'd', 'e', 'f' ];
	var four = [ 'g', 'h', 'i' ];
	var five = [ 'j', 'k', 'l' ];
	var six = [ 'm', 'n', 'o' ];
	var seven = [ 'p', 'q', 'r', 's' ];
	var eight = [ 't', 'u', 'v' ];
	var nine = [ 'w', 'x', 'y', 'z' ];
	var arr = digitString.split('');
	var resArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === '0') {
			resArr.push('0');
		} else if (arr[i] === '1') {
			resArr.push('1');
		} else if (arr[i] === '2') {
			resArr.push(two[0]);
			resArr.push(two[1]);
			resArr.push(two[2]);
		} else if (arr[i] === '3') {
			resArr.push(three[0]);
			resArr.push(three[1]);
			resArr.push(three[2]);
		} else if (arr[i] === '4') {
			resArr.push(four[0]);
			resArr.push(four[1]);
			resArr.push(four[2]);
		} else if (arr[i] === '5') {
			resArr.push(five[0]);
			resArr.push(five[1]);
			resArr.push(five[2]);
		} else if (arr[i] === '6') {
			resArr.push(six[0]);
			resArr.push(six[1]);
			resArr.push(six[2]);
		} else if (arr[i] === '7') {
			resArr.push(seven[0]);
			resArr.push(seven[1]);
			resArr.push(seven[2]);
			resArr.push(seven[3]);
		} else if (arr[i] === '8') {
			resArr.push(eight[0]);
			resArr.push(eight[1]);
			resArr.push(eight[2]);
		} else if (arr[i] === '9') {
			resArr.push(nine[0]);
			resArr.push(nine[1]);
			resArr.push(nine[2]);
		}
	}
	return resArr;
}

//toy problem 10/06/2019

var bind = function(func, context) {
	//Your code here
	return function() {
		//Your code here
	};
};

Function.prototype.bind = function(context) {
	//Your code here
	return function() {
		//Your code here
	};
};

//toy problem 11/06/2019

function alphaCount(alphabet, text) {
	var output = '';
	var alphaArr = alphabet.split('');
	var textArr = text.split('');
	var obj = {};
	for (var j = 0; j < alphaArr.length; j++) {
		var count = 1;
		for (var i = 0; i < textArr.length; i++) {
			if (textArr[i].toUpperCase() === alphaArr[j].toUpperCase()) {
				obj[alphaArr[j]] = count++;
			}
		}
	}
	console.log(obj);
	for (var i = 0; i < alphaArr.length; i++) {
		if (obj[alphaArr[i]] >= 1) {
			output = output + alphaArr[i].toLowerCase() + ':' + obj[alphaArr[i]] + ',';
		}
	}
	if (output === '') {
		return 'no matches';
	}
	var output = output.split('');
	var comma = output.splice(output.length - 1, 1);
	return output.join('');
}

//toy problem 12/06/2019
function selectionSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length; j++) {
			if (arr[i] < arr[j]) {
				var holder = arr[i];
				arr[i] = arr[j];
				arr[j] = holder;
			}
		}
	}
	return arr;
}

//toy problem 13/06/2019

function longestPalindrome(string) {
	// Write your code here, and
	// return your final answer.
}

//toy problem 15/06/2019
//Hash Table
var makeHashTable = function() {
	var table = {};
	var storage = [];
	var storageLimit = 1000;

	table.insert = function(key, value) {
		var index = getIndexBelowMaxForKey(key, storageLimit);
		storage[index] = storage[index] || [];
		//YOUR CODE HERE
		var mates = storage[index];
		var mate;
		var change = false;
		for (var i = 0; i < mates.length; i++) {
			var mate = mates[i];
			if (mate[0] === key) {
				mate[1] = value;
				change = true;
			}
		}
		if (!changed) {
			mates.push([ key, value ]);
			size++;
		}
		if (size >= storageLimit * 0.75) {
			resize(storageLimit * 2);
		}
	};

	table.retrieve = function(key) {
		//YOUR CODE HERE
		var index = getIndexBelowMaxForKey(key, storageLimit);
		var mates = storage[index];
		if (!mates) {
			return;
		}
		var mate;
		for (var i = 0; i < mates.length; i++) {
			mate = mates[i];
			if (mate && mate[0] === key) {
				return mate[1];
			}
		}
	};

	table.remove = function(key) {
		//YOUR CODE HERE
	};
	return table;
};
var getIndexBelowMaxForKey = function(str, max) {
	var hash = 0;
	for (var i = 0; i < str.length; i++) {
		hash = (hash << 5) + hash + str.charCodeAt(i);
		hash = hash & hash; // Convert to 32bit integer
		hash = Math.abs(hash);
	}
	return hash % max;
};

//toy problem 15/06/2019
//Hash Table Resizing
var makeHashTable = function() {
	var result = {};
	var storage = [];
	var storageLimit = 4;
	var size = 0;
	var resizing = false;
	//***Finish This Function***//

	function resize(newSize) {
		//Your code here
	}

	//*************************//

	result.insert = function(key, value) {
		var index = getIndexBelowMaxForKey(key, storageLimit);
		storage[index] = storage[index] || [];
		var pairs = storage[index];
		var pair;
		var replaced = false;
		for (var i = 0; i < pairs.length; i++) {
			pair = pairs[i];
			if (pair[0] === key) {
				pair[1] = value;
				replaced = true;
			}
		}

		if (!replaced) {
			pairs.push([ key, value ]);
			size++;
		}
		if (size >= storageLimit * 0.75) {
			// increase the size of the hash table
			resize(storageLimit * 2);
		}
	};

	result.retrieve = function(key) {
		var index = getIndexBelowMaxForKey(key, storageLimit);
		var pairs = storage[index];
		if (!pairs) {
			return;
		}
		var pair;

		for (var i = 0; i < pairs.length; i++) {
			pair = pairs[i];
			if (pair && pair[0] === key) {
				return pair[1];
			}
		}
	};

	result.remove = function(key) {
		var index = getIndexBelowMaxForKey(key, storageLimit);
		var pairs = storage[index];
		var pair;

		for (var i = 0; i < pairs.length; i++) {
			pair = pairs[i];
			if (pair[0] === key) {
				var value = pair[1];
				delete pairs[i];
				size--;
				if (size <= storageLimit * 0.25) {
					// decrease the size of the hash table
					resize(storageLimit / 2);
				}
				return value;
			}
		}
	};

	//This next function you would never have for a hash table
	//It is here merely for testing purposes. So we can check that
	//you are resizing correctly
	result.find = function(index) {
		//return the bucket at a given index
		return storage[index];
	};

	return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
	var hash = 0;
	for (var i = 0; i < str.length; i++) {
		hash = (hash << 5) + hash + str.charCodeAt(i);
		hash = hash & hash; // Convert to 32bit integer
		hash = Math.abs(hash);
	}
	return hash % max;
};

//toy problem 23/06/2019
function flatten(arrays) {
	var mainArr = [];
	debugger;
	if (Array.isArray(arrays)) {
		var arr = arrays.join(',');
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] !== ',') {
				mainArr.push(arr[i]);
			}
		}
	}
	return mainArr;
}

//toy problem 24/06/2019
function binaryToDecimal(n) {
	var arr = n.split('');
	var N = n.length - 1;
	var holder = '';
	for (var i = 0; i < arr.length; i++) {
		var equation = parseInt(arr[i]) * Math.pow(2, N--);
		holder = holder + parseInt(equation) + ',';
	}
	var holderArr = holder.split(',');
	console.log(holderArr);
	holderArr.pop();
	var output = holderArr.reduce((a, b) => parseInt(a) + parseInt(b));
	return parseInt(output);
}

//toy problem 29/06/2019
function toMilitary(time) {
	// Write your code here, and
	// return your final answer.
	if (time === '04:00') return time;
	var output = '';
	if (time.includes('a')) {
		if (time[0] === '1' && time[1] === '2') {
			console.log('hi');
			console.log(time);
			output += '00:' + time[3] + time[4];
			return output;
		} else if (time.length === 6) {
			console.log('hi');
			console.log(time);
			output += '0' + time[0] + ':' + time[2] + time[3];
			return output;
		} else if (time.length === 7) {
			output += time[0] + time[1] + ':' + time[3] + time[4];
			return output;
		}
		return output;
	}

	if (time.includes('p')) {
		if (time[0] === '1' && time[1] === '2') {
			output += '12:' + time[3] + time[4];
			return output;
		} else if (time.length === 6) {
			output += parseInt(time[0]) + 12 + ':' + time[2] + time[3];
		} else if (time.length === 7) {
			var time7 = [];
			time7.push(time[0], time[1]);
			time7.join('');
			output += parseInt(time7) + 12 + ':' + time[3] + time[4];
		}

		return output;
	}
}

//toy problem 30/06/2019
function translateRomanNumeral(romanNumeral) {
	var arr = [];
	var DIGIT_VALUES = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	if (romanNumeral === '') {
		return 0;
	}

	for (var key in DIGIT_VALUES) {
		for (var i = 0; i < romanNumeral.length; i++) {
			if (romanNumeral[i] === key) {
				arr.push(DIGIT_VALUES[key]);
				console.log(arr);
			}
			if (romanNumeral[i] !== key) {
				return 'null';
			}
		}
	}
	var output = arr.reduce((a, b) => a + b);
	return output;
}

//toy problem 30/06/2019
function powerSet(string) {
	string = string.split('');
	var sortedString = string.sort();
	return sortedString;
}

//Code Wars 10/07/2019
function century(year) {
	var century = year / 100;
	var output = Math.ceil(century);
	return output;
}

function avgArray(arr) {
	var outputArr = [];
	// debugger
	var length = arr.length;
	for (var j = 0; j < arr[0].length; j++) {
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i][j];
		}
		var out = sum / length;
		outputArr.push(out);
		console.log(outputArr);
	}
	return outputArr;
}

//Code Wars 15/07/2019

//In this little assignment you are given a string of space separated numbers, and have to
//return the highest and lowest number.
//Examples:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
	var numArr = numbers.split(' ');
	var max;
	var min;
	console.log(numArr);
	for (var i = 0; i < numArr.length; i++) {
		if (parseInt(numArr[i]) < parseInt(numArr[i + 1])) {
			max = parseInt(numArr[i]);
		}
		if (parseInt(numArr[i]) > parseInt(numArr[i + 1])) {
			min = parseInt(numArr[i]);
		}
		console.log(min);
		console.log(max);
	}
}

//Code Wars 16/07/2019

//Given a string of digits, you should replace any digit below 5 with '0' and any
//digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
	var output = '';
	for (var i = 0; i < x.length; i++) {
		if (x[i] >= 5) {
			output += 1;
		} else if (x[i] < 5) {
			output += 0;
		}
	}
	return output;
}

//Code Wars 18/07/2019 {7kyu}

//Jumping number is the number that All adjacent digits in it differ by 1.

function jumpingNumber(n) {
	var numbers = n.toString();
	if (numbers.length === 1) {
		return 'Jumping!!';
	}
	var arr = [];
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i + 1] == parseInt(numbers[i]) + 1 || numbers[i + 1] == parseInt(numbers[i]) - 1) {
			arr.push(numbers[i]);
			// console.log(arr);
		}
	}
	if (arr.length === numbers.length - 1) {
		return 'Jumping!!';
	} else {
		return 'Not!!';
	}
}

//Code Wars 19/07/2019 {7kyu}

//Given an array/list [] of n integers , find maximum triplet sum in the array
//Without duplications .

//maxTriSum ({3,2,6,8,2,3}) ==> return (17)
//As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

function maxTriSum(numbers) {
	var nums = [ ...new Set(numbers.map((a) => a)) ].sort(function(a, b) {
		return b - a;
	});
	if (numbers.length === 3) {
		return numbers.reduce((total, item) => (total += item), 0);
	}
	return nums[0] + nums[1] + nums[2];
}

//Code Wars 19/07/2019 {7kyu}

//You need to design a recursive function called replicate which will receive
//arguments times and number.
//The function should return an array containing repetitions of the number argument.

//For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative,
//return an empty array.

function replicate(times, number) {
	var arr = [];
	// debugger;

	function helper(nt, num) {
		if (nt < 1) {
			return arr;
		} else {
			arr.push(num);
			return helper(nt - 1, num);
		}
	}
	return helper(times, number);
}

function replicate2(times, number) {
	var arr = [];

	if (times < 1) {
		arr.concat(number);
		return arr;
	} else {
		return arr.concat(number, replicate2(times - 1, number));
	}
}

/*
arr.concat(5, replicate2(2, 5));
arr.concat(5, arr.concat(5, replicate2(1, 5)));
arr.concat(5, arr.concat(5, arr.concat(5, replicate2(0, 5)));
arr.concat(5, arr.concat(5, arr.concat(5, arr.concat(5))));
arr.concat(5, arr.concat(5, arr.concat(5, [5])));
[5,5,5]
*/

//Debugging Lecture
function EvenOdd(arr) {
	var evenCount = 0;
	var oddCount = 0;
	debugger;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			evenCount++;
		} else if (arr[i] % 2 === 1) {
			oddCount++;
		}
	}
	return 'There are ' + evenCount + ' even numbers and ' + oddCount + ' odd numbers in your array.';
}

//bank account OOP lecture live coding
function bank(init) {
	var obj = {};

	obj.value = init;
	obj.balance = balance;
	obj.withdraw = withdraw;
	obj.deposit = deposit;

	return obj;
}

var balance = function() {
	var balance = this.value;
	return balance;
};

var withdraw = function(amount) {
	var newB = this.value - amount;
	if (amount > this.value) {
		return 'insufficient funds';
	} else {
		return "here's your " + amount + ', your new balance is ' + newB;
	}
};

var deposit = function(amount) {
	this.value = this.value + amount;
	return 'Your new Balance is ' + this.value;
};

//counter OOP lecture live coding
function counter(init) {
	var counter = {};
	counter.value = init;
	counter.up = up;
	counter.down = down;

	return counter;
}

var up = function() {
	this.value = this.value + 1;
	return this.value;
};

var down = function() {
	this.value = this.value - 1;
	return this.value;
};

//code wars 8 kyu

function removeEveryOther(arr) {
	for (var i = 1; i < arr.length; i++) {
		arr.splice(i, 1);
	}
	return arr;
}
