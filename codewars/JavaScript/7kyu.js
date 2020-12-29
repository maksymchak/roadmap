/*============================== Vowel Count  ===========================================*/

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


// Solution: 

	function getCount(str) {
	  return str.split('').filter(i => i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u' ).length
	}

// Solution2: 

	function getCount(str) {
	  return (str.match(/[aeiou]/ig)||[]).length;
	}

// Solution3: 

	function getCount(str) {
	  return str.replace(/[^aeiou]/gi, '').length;
	}


/*============================== Mumbling ===========================================*/

This time no story, no theory. The examples below show you how to write function accum:


// For example:
	accum("abcd") -> "A-Bb-Ccc-Dddd"
	accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
	accum("cwAt") -> "C-Ww-Aaa-Tttt"

// Solution: 

	function accum(s) {
		const arr = s.split('');

		const newArr = arr.map((elem, index) => {

			let str = elem.toUpperCase();

			for (let i = 0; i < index; i++) {
			  str = str + elem.toLowerCase()
			}
			return str
		})
		return newArr.join('-');
	}


// Solution2: 

	function accum(s) {
	  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
	}


// Solution3: 

	function accum(s) {
	  return s.split('')
	  .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
	  .join('-');
	}


/*============================== Get the Middle Character ===========================================*/

You are going to be given a word. Your job is to return the middle character of the word. If the words 
	length is odd, return the middle character. If the words length is even, return the middle 2 characters.


// For example:
	Kata.getMiddle("test") should return "es"
	Kata.getMiddle("testing") should return "t"
	Kata.getMiddle("middle") should return "dd"


// Solution: 
	function getMiddle(s) {
	  if (s.length % 2 === 0) {
	    const world = s.substr(s.length / 2 - 1, 2);
	    return world;
	  } else {
	    const world = s.substr(Math.ceil(s.length / 2) - 1, 1);
	    return world;
	  }
	}

// Solution2: 
	function getMiddle(s){
	  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
	}


/*============================== Highest and Lowest ===========================================*/

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// For example:
	highAndLow("1 2 3 4 5");  // return "5 1"
	highAndLow("1 2 -3 4 5"); // return "5 -3"
	highAndLow("1 9 3 4 -5"); // return "9 -5"

// Solution: 
	function highAndLow(numbers){
	  return Math.max(...numbers.split(' ')) + ' ' + Math.min(...numbers.split(' '))
	}

// Solution2: 
	function highAndLow(numbers){
	  numbers = numbers.split(' ').map(Number);
	  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
	}


/*============================== Square Every Digit ===========================================*/

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer


// Solution: 
	function squareDigits(num){
	  return +num.toString().split('').map(i => i*i).join('');
	}


/*============================== Disemvowel Trolls ===========================================*/

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y is not considered a vowel.

// Solution: 
	function disemvowel(str) {
	  return str.split(' ').map(i => {
	    return i.split('').filter(i => i.toLowerCase() !== 'a' && i.toLowerCase() !== 'e' && i.toLowerCase() !== 'i' && i.toLowerCase() !== 'o' && i.toLowerCase() !== 'u' ).join('')
	  }).join(' ');
	}

// Solution: 
	function disemvowel(str) {
	  return str.replace(/[aeiou]/gi, '');
	}


/*============================== Descending Order ===========================================*/

Your task is to make a function that can take any non-negative integer as an argument and return it 
	with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// For example:
	Input: 42145 Output: 54421
	Input: 145263 Output: 654321
	Input: 123456789 Output: 987654321

// Solution: 
	function descendingOrder(n){
	  return +n.toString().split('').sort((a, b) => b - a ).join('')
	}


/*============================== Find the divisors! ===========================================*/

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integers 
	divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string 
	'(integer) is prime'

// For example:
	divisors(12); // should return [2,3,4,6]
	divisors(25); // should return [5]
	divisors(13); // should return "13 is prime"


// Solution: 
	function divisors(integer) {
	  var divs = [];
	  
	  for(var i = 2; i < integer; i++) {
	    if(integer % i === 0) {
	      divs.push(i);
	    }
	  }
	  
	  return divs.length ? divs : integer + ' is prime';
	};