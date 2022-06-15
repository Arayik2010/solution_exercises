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

