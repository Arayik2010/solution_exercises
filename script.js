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
// let b = 6;
//  a = a+b;
//  b = a-b;
//  a = a-b

// let a = 5;
// let b = 6;

// [a,b] = [b,a]

//3. Check whether a given number is negative. Print “yes”, if it is not negative, print “no” otherwise.

// function checkNumberNegative(number) {
//   return (number <= 0 && "no") || "yes";
// }
// console.log(checkNumberNegative(0));

//4. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

// function checkNumbers(x, y) {
//   return (x % y == 0 || y % x == 0) && "1" || "0"
// }
// console.log(checkNumbers(10,20));

//5.Given three numbers. Find the maximum one

// function findMaxNumber(a, b, c) {
//   return (a > b && a > c) && a || (b > a && b > c) && b || c;
// }
// console.log(findMaxNumber(25, 7, 5));

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

/////////////////////////////////////////////////////////////////////////////////////

// 1. Given two numbers 1 and 10;
//     a. Print all number between 1 and 10.
//     b. Print all number between 1 and 10 except 6.
//    c. Print all even number between 1 and 10.
//   d. Calculate sum of all numbers between 1 and 10 (using loop).
//  e. Calculate sum of all numbers between 1 and 10 except 8.
//  f. Calculate sum of all odd numbers between 1 and 10.
//  g. Calculate sum of squares of all numbers between 1 and 10.

// a.
// for(let i = 1; i <= 10;i++)  {
//     console.log(i)
// }

//b.
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

//c.
// for(let i = 1; i <=10; i++) {
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }

//d.
// let num = 0;
// for (let i = 1; i <= 10; i++) {
//   num += i;
// }
// console.log(num);

//e
// let num = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i === 8) {
//     continue;
//   } else {
//     num += i;
//   }
// }
// console.log(num);

//f.
// let num = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     num += i;
//   }
// }
// console.log(num);

//g.
// let num = 0;
// for (let i = 1; i <= 10; i++) {
//   num += i*i;
// }
// console.log(num);

//3. . Enter a number. Reverse its first and last digits. Print the new number.

// function reverseNumber(num) {
//     let str = ''

//   if (num < 10) {
//     return num;
//   } else {
//     str+= (num % 10);
//     str += reverseNumber(Math.floor(num / 10));
//   }
//   return parseInt(str)

// }

// console.log(reverseNumber(29));

//4. Enter a number. Find the difference between its biggest and smallest digits.

// function diferentsNumbers(num) {
//     let arr = String(num).split('')
//     let sortArr = arr.sort((a,b)=> a-b)
//     for(let i = 0; i < sortArr.length; i++) {
//         return sortArr[sortArr.length -1] - sortArr[0]
//     }

// }
// console.log(diferentsNumbers(3548))

//5.Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

// function numPrime(num) {
//     let isPrime = "yes"
//   if(num === 1) {
//     return "yes"
//   }else if(num>1) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         isPrime = "no";
//         break;
//       }
//     }
//   }
//   return isPrime
// }
// console.log(numPrime(6));

////////////////////////////////////////////////////////
//1.// 1.   You have some 3 async functions. Need to create function which get that 3 functions
//    and some callback in arguments and call that callback when last async function was
//    ending and send that function returning data to callback. That 3 functions have 1
//    callback arguments.

// function getNum1(arr, callbackList) {
//   setTimeout(() => {
//     const result = 1;
//     arr.push(result);
//     callbackList[arr.length](arr, callbackList);
//   }, 2000);
// }

// function getNum2(arr, callbackList) {
//   setTimeout(() => {
//   const result = 2;
//     arr.push(result);
//     callbackList[arr.length](arr, callbackList);
//   }, 2000);
// }

// function getNum3(arr, callbackList) {
//   setTimeout(() => {
//      const result = 3;
//     arr.push(result);
//      callbackList[arr.length](arr, callbackList);
//   }, 2000);
// }

// function funcs(a,b,c,callbackFunc) {
//   const result = [];
//    a(result, [a,b,c,callbackFunc]);
// }

// function callback(result) {
//     console.log(result)
// }

// funcs(getNum1,getNum2,getNum3, callback)

//2.// 2.   You have some 3 async Promises. create some function (like promise all,race ….)
//    which will get promises and return some promise which will invoked on last finished
//    promise time and will send that last returned value to resolve function, or reject some
//    error on error case

// const p1 = new Promise((resolve, reject) => {
//   resolve(1);
// });
// const p2 = new Promise((resolve, reject) => {
//   resolve(2);
// });
// const p3 = new Promise((resolve, reject) => {
//   resolve (3);
// });

// Promise.all([p1, p2, p3,])
//   .then((result) => {
//     setTimeout(() => {
//       console.log(result);
//     }, 2000);
//   })

//////////////////////////////////////////////////////////////

//1. Write a function that accepts a string(a sentence) as a parameter and finds the
// longest word within the string․ If there are several words which are the longest ones,
//print the last word(words can be separated by space, comma or hyphen).,

// function findLongestWord(str) {

//  let arr = str.match(/\w[a-z]{0,}/gi);
//  let result = arr[0];

//  for (let i = 0; i < arr.length; i++) {
//    if (result.length <= arr[i].length) {
//      result = arr[i];
//    }
//  }
//  return result;

// }
// console.log(findLongestWord("hello, word  buyyy, hi "));

//2.Write a function to find longest substring in a given a string without repeating
//characters except space character.
//  If there are several, return the last one. Consider that all letters are lowercase.

//  function getLongestSubstring(str) {
//    let str1  = str.toLowerCase();
//    let arr = str1.split(' ')
//     var result = arr[0];

//     for (var i = 0; i < arr.length; i++) {
//       if (result.length <= arr[i].length) {
//         result = arr[i];
//       }
//     }
//     return result;
//  }
//  console.log(getLongestSubstring('HELLO Karen '))

//3.Write a function, which receives two numbers as arguments and finds all numbers
//between them such that each digit of the number is even. The numbers obtained
// should be printed in a comma-separated sequence on a single line

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function getNums(a, b) {
//   let arr = [];
//   for (let i = a+1; i < b; i++) {
//    if(isEven(i)) {
//     arr.push(i)
//    }
//   }
//   return arr
// }
// console.log(getNums(1,10));

//4.Write a function, which receives an array as an argument which elements arrays of
//numbers. Find biggest negative number of each array. Return product of that
//numbers.If there is not any negative number in an array, ignore that one. Check that
//items of the given array are arrays.

// function findBigNegativNum(arr) {
//   let arr2 = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       arr2.push(arr[i] * -1);
//     }
//   }
//   arr2.sort((a, b) => a - b);
//   return arr2[arr2.length - 1];
// }
// console.log(findBigNegativNum([[1], [2], [3]]));

//5.Given an array of strings and numbers. Print the number of integers and the number
//of strings in the array

// function checkArr(arr) {
//   let arr1 = [];
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i])) {
//      count++
//     }else{
//         arr1.push(arr[i])
//     }
//   }
//   return `the number of integers ${arr1}  and the number
//   of strings in the array ${count} `;
// }
// console.log(checkArr([1, 5, "hello", "buy", 6]));

