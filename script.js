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

//6.Given an array consisting from the arrays of numbers (like a two-dimensional array).
//Find sum of each row and print them as an array

// function setArrNumSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr[i].length; k++) {
//       sum += arr[i][k];
//     }
//   }
//   return sum
// }
// console.log(
//   setArrNumSum([
//     [0, 1, 2],
//     [3, 4, 5],
//   ])
// );

// const age = [1, 5, 9, 51, 16, 99, 100, 6, 8, 15, 19];
// function insertionSort(arr) {
//   let i,
//     len = arr.length,
//     el,
//     j;
//   for (i = 1; i < len; i++) {
//     el = arr[i];
//     j = i;
//     while (j > 0 && arr[j - 1] > el) {
//       arr[j] = arr[j - 1];
//       j--;
//     }
//     arr[j] = el;
//   }
//   return arr;
// }
// console.time();
// console.log("insertionSort", insertionSort(age));
// console.timeEnd();

// function mergeSort(arr) {
//   var len = arr.length;
//   if (len < 2) return arr;
//   var mid = Math.floor(len / 2),
//     left = arr.slice(0, mid),
//     right = arr.slice(mid);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [],
//     lLen = left.length,
//     rLen = right.length,
//     l = 0,
//     r = 0;
//   while (l < lLen && r < rLen) {
//     if (left[l] < right[r]) {
//       result.push(left[l++]);
//     } else {
//       result.push(right[r++]);
//     }
//   }
//   return result.concat(left.slice(l)).concat(right.slice(r));

// }
// console.time();
// console.log("mergeSort", mergeSort(age));
// console.timeEnd();

// console.time();
// console.log(
//   "customSOrt",
//   age.sort((a, b) => a - b)
// );
// console.timeEnd();

// var items = [1, 5, 9, 51, 16, 99, 100, 6, 8, 15, 19];
// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)],
//         i       = left,
//         j       = right;
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j);
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right);
//         if (left < index - 1) {
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) {
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }

// var sortedArray = quickSort(items, 0, items.length - 1);

// function sortAgePeoples(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let temp  = arr[0];

//   let left = [];
//   let right = [];

//   for (var i = 1; i < arr.length; i++) {
//     arr[i] < temp ? left.push(arr[i]) : right.push(arr[i]);
//   }

//   return sortAgePeoples(left).concat(temp, sortAgePeoples(right));
// }

// console.log(sortAgePeoples([1, 5, 9, 51, 16, 99, 100, 6, 8, 15, 19]));

////////OOP////////////
// 1.   Create a Rectangle class. Rectangle should have: length and width.
//    It should have getters and setters for all fields.
//    It should have getArea() method.It should have getArea() method.
//    It should have getPerimeter() method.
//    It should have a toString method

// class Rectangle {
//   constructor(length, width) {
//     this._length = length;
//     this._width = width;
//   }
//   get length() {
//     return this._length;
//   }
//   get width() {
//     return this._width;
//   }

//   set length(value) {
//     if (value <= 0) {
//       console.log("wrong size");
//     } else {
//       console.log(this._length);
//     }
//   }
//   set width(value1) {
//     if (value1 <= 0) {
//       console.log("wrong size");
//     } else {
//       console.log(this._width);
//     }
//   }

//   getArea() {
//     return this._length * this._width;
//   }
//   getPerimeter() {
//     return (this._length + this._width) * 2;
//   }
//   toString() {
//     return (`rectangle length is ${this._length} and width is ${this._width}`)
//   }

// }

// let rectangle = new Rectangle(5, 26);

// 2.   Create an object called shape that has the type property and a getType() method.
//    Define a Triangle() constructor function whose prototype is shape . Objects created
//    with Triangle() should have three properties — a, b, and c , representing the lengths
//    of the sides of a triangle.
//    Add a new method to the prototype called getPerimeter()

// let shape = {
//   type: 'triangle',
//   getType() {
//     return this.type;
//   },
// };

// function Triangle (a,b,c) {
//   this.a = a,
//   this.b = b,
//   this.c = c

// }

// Triangle.prototype.getPerimeter = function () {
//   console.log(this.a + this.b + this.c);
// };
// let triangle = new Triangle(2,3,4)
// triangle.prototype = Object.create(shape);

// console.log(triangle);

// 3.   Create an Author class and a Book class.
//    Author should have: name, email, gender.
//    It should have getters.
//    It should have a toString method.
//    Book should have: title, author(Author), price, quantity.
//    It should have appropriate getters and setters.
//    It should have a method: getProfit(), which calculates the profit from the book based
//    on the price and quantity.
//    It should have a toString method.

// class Author{
//   constructor(name,email,gender) {
//     this.name = name,
//     this.email = email,
//     this.gender = gender
//   }
//   get getName() {
//     return this.name
//   }
//   get getEmail () {
//     return this.email
//   }
//   get getgetGender() {
//     return this.gender
//   }
//   toString() {
//     return (`author name is ${this.name} email is ${this.email} and gender is ${this.gender}`)
//   }

// }

// class Book extends Author{
//   constructor(bookName,name,price,quantity) {
//     super(name)
//     this.bookName = bookName,
//     this.price = price,
//     this.quantity = quantity

//   }
//   get getBookName() {
//     return (`Book's name is ${this.bookName}`)
//   }
//   get getPrice() {
//     return (`the book's  price ${this.price}`)
//   }
//   get getQuantity() {
//     return (`the books quantity is ${this.quantity}`)
//   }
//   getProfit() {
//     return (`the book's profit ${this.quantity * this.price}$`)
//   }
//   toString() {
//     return (`the book write is ${this.name}`)
//   }
// }

// let author = new Author('Arayik','ar@mail.com','male')
// let book  = new Book ('Harry Potter','Arayik',500,25)

// 4.   Write Car class, which have
//    properties:
// static finishPosition: number
// name: string,
// color: string(hashcode of color), #ffffff
// currentPosition: number(on start it equal to 0),
// intervalPinter: number(setInterval pointer, that need for stopping interval)
// speed: number(ex. 10, it means car can go 10px for 1 second),
// methods:
// reset() -> it will reset currentPosition to 0
// start() -> it should update currentPosition value by speed each 300ms(with
// setInterval) and log it to console, if currentPosition equal
// or more then finishPosition,
// then call stop method
// stop() -> will stop interval and log`[name] car was finished`
// set some finishPosition value for Car
// create 3 Cars with different parameters
// create function that will start car competition

// class Car {
//   static finishPosition = 21;

//   constructor(name, color,speed) {
//     this._name = name;
//     this._color = color;
//     this._currentPosition = 0;
//     this._speed = speed;
//   }

//   reset() {
//     if (Car.finishPosition <= this._currentPosition) {
//       this._currentPosition = 0;
//     }
//   }

//   stop(timerId) {
//     clearInterval(timerId);
//     console.log("Winner is ", this._name);
//     // return;
//   }

//   start() {
//     const id = setInterval(() => {
//       this._currentPosition += (300*this._speed)/1000;
//       if (this._currentPosition >= Car.finishPosition) {
//         this.stop(id);
//       }
//     }, 300);
//     return this._currentPosition;
//   }
// }

// let carOne = new Car("Reng", "#D37328 ", 10);
// let carTwo = new Car("BMW", "#171716 ", 15);
// let carThree = new Car("Dodge", "#1B8CD6 ", 12);

// function competition(cars) {
//   return cars.forEach((car) => {
//     car.start();
//   });
// }

// competition([carOne, carTwo, carThree]);

//////////////////////////////////////////////////////////

// 1. Have 2 functions validateName(which get argument some string and return true if it valid name or false otherwise (Name is valid if have 2 parts. like Jon Doe, and not  empty))
//  and validateAge(get number argument and return true if value > 19 ).
// Create some functions by currying,so I can filter list of users by valid name and age.

// function validateName(str) {
//   let arr = str.split(" ");
//   if (arr.length === 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function validateAge(num) {
//   if (num > 19) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let users = [
//   { name: "jack babken", age: 15 },
//   { name: "asd D", age: 34 },
//   { name: "DD", age: 999 },
// ];

// function curry() {
//   return () => {
//     return users.filter((user) => {
//       if (validateName(user.name) && validateAge(user.age)) {
//         return user
//       }
//     });
//   };
// }

// console.log(curry()());

// 4.   Create an infinite sequence that generates the next value of the Fibonacci sequence.
//    The Fibonacci sequence is defined as follows:
// fib(0) = 0
// fib(1) = 1
// for n > 1, fib(n) = fib(n - 1) + fib(n - 2)

// function fib(n) {
//   if(n <= 1) {
//     return n
//   }else{
//     return fib(n -1) + fib(n-2)
//   }
// }
// console.log(fib(8));

// 5.   Create async generator function which will get 3 promise arguments and will yeald
//    from latest to first finished promise values
// example -> for
// Promise1 -> (200ms, result: 15),
// Promise2 -> (600ms, result: 17),
// Promise3 -> (500ms, result: 42),
// result will be 17, 42, 15.

// async function* generatеSeqondAsync() {
//   yield await new Promise((resolve) => setTimeout(() => resolve(17), 600));
//   yield await new Promise((resolve) => setTimeout(() => resolve(42), 500));
//    yield await new Promise((resolve) => setTimeout(() => resolve(15), 200));
// }

// async function printSecondAsync() {
//   const secondGenerator = generatеSeqondAsync();
//   for await(second of secondGenerator){
//     console.log(second)
//   }
// }
// printSecondAsync()