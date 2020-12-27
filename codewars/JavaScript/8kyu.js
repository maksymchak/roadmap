
/*============================== String repeat ============================================================*/
	
Write a function called repeat_str which repeats the given string src exactly count times.

	repeatStr(6, "I") // "IIIIII"
	repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// Solution: 

	function repeatStr (n, s) {
	  return s.repeat(n);
	}

/*============================== Array Madness ============================================================*/

Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares 
	of each element in a is strictly greater than the sum of the cubes of each element in b.


	arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

// Solution: 

	function arrayMadness(a, b) {
		return a.reduce((sum, i) => { return sum + i*i}, 0) > b.reduce((sum, i) => { return sum + i*i*i}, 0)
	}


/*============================== Remove First and Last Character  ===========================================*/

It is pretty straightforward. Your goal is to create a function that removes the first and last characters of a 
	string. You are given one parameter, the original string. You do not have to worry with strings with less 
	than two characters.


// Solution: 

	function removeChar(str) {
	  return str.slice(1, -1);
	}


/*============================== Remove String Spaces  ===========================================*/

Simple, remove the spaces from the string, then return the resultant string.

// Solution: 

	function noSpace(x){
	  return x.replace(/\s/g, '');
	}


/*============================== Find the smallest integer in the array  ===========================================*/

Given an array of integers your solution should find the smallest integer.

// For example:

	Given [34, 15, 88, 2] your solution will return 2
	Given [34, -345, -1, 100] your solution will return -345

// Solution: 

	findSmallestInt(args) {
		return Math.min(...args)
	}


/*============================== Summation  ===========================================*/

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

	summation(8) -> 36
	1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// Solution: 

	function summation(num) {
	  return num * (num + 1) / 2
	}



// Solution2: 

	function summation(num) {
		if (num === 1) return 1;
		return num + summation(num-1);
	}


/*============================== Reversed Strings  ===========================================*/

Complete the solution so that it reverses the string passed into it.

// For example:
	
	'world'  =>  'dlrow'


// Solution: 

	function solution(str){
	  return str.split('').reverse().join('');  
	}


/*============================== Counting sheep  ===========================================*/


Consider an array/list of sheep where some sheep may be missing from their place. We need a 
	function that counts the number of sheep present in the array (true means present).

// For example:

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]


// Solution: 

	function countSheeps(arrayOfSheep) {
	  return arrayOfSheep.filter(i => i === true).length
	}

// Solution2: 

	let countSheeps = x => x.filter( s => s ).length;


/*============================== Square(n) Sum  ===========================================*/

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// Solution: 

	function squareSum(numbers){
	  return numbers.reduce((sum,num) => sum + (num * num), 0);
	}