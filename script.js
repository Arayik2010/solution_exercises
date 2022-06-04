//1. What are the outputs of these expressions: '7' + 1 + 5 and 1 + 5 + '7';
//  715 and 67


//2. Swap 2 variables.
//  a. With third variable;
//  b. With arithmetic operators.
//   c. with destructuring

// let a =5;
// let b =6;
// let k = a;
//  k = b;

// let a = 5;
// let b = ++a;
// a = b--

// let a = 5;
// let b = 6;

// [a,b] = [b,a]


//3. Check whether a given number is negative. Print “yes”, if it is not negative, print “no” otherwise.

// function checkNumberNegative(num) {
//  if(num > 0 && num!=0) {
//      return 'yes'
//  }if(num < 0 || num ===0) {
//      return 'no'
//  }
// }
// console.log(checkNumberNegative(0));


//4. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.


// function checkNumbers(x,y) {
//     if(x % y == 0 || y % x == 0) {
//         return 1
//     }else if(x % y !=0 && y % x != 0) {
//         return 0
//     }
// }
// console.log(checkNumbers(15,3))


//5.Given three numbers. Find the maximum one

// function findMaxNumber(a,b,c) {
//     if(a > b && b > c || a > b && a > c ) {
//         return a
//     }else if(a < b && b > c) {
//         return b
//     }else if(c > b && b > a || c > b && b < a) {
//         return c
//     }

// }
// console.log(findMaxNumber(30,55,5))


//6.. Given string ‘test’. Use variables and string methods and print ‘tetsetesesesesteest’;

// function getTest(str) {
//     let stringTest = ""
//     let str1 = str.slice(0,2)
//     let str2 = str.split("").reverse().join("")
//     let str3 = str.slice(1,3)
//     let str4 = str.slice(0,2)
//     let str5 = str.substr(1,3)
//     stringTest+= str1 + str2 + str3 + str3 + str3 + str3 + str4 + str5
//     return stringTest


// }
// console.log(getTest('test'));

