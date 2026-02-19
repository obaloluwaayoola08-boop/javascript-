// //writing output
 alert("welcome to my website");
 console.log("mr isiah loves making money");
document.write("aisha,oba, mr isiah are cpism7 student");


//writing input 
  var username = prompt("what is your name");
 document.write("userinput");


// //let , var , const
// let age = 20; //is mutable
// const pi= 3.14;
// var course = "cpism7";

// //data types
// //primitive data tpyes
// //number, string, boolean, undefined, null, symbol, bigInt
// let name="mr isiah";
// console.log(typeof name);
// var newAge= 50;
// const areYouStudent= true;
// console.log(typeof areYouStudent);
// var middleName;
// console.log(typeof middleName);
// var pocketMoney = null;
// console.log(typeof pocketMoney);

// //operation in javascript
// //Arithmetic operators(+, -, *, /, %, ++, --)
// let a;
// let b;
// let c;
// let d;
// a= 10;
// b= 5;
// c= 3;
// d= 7;
// let w = "7";
// var e = a+b;
// console.log(e);
// var f = a-b;
// console.log(f);
// var g = a*d;
// console.log(g);
// var h = a/c;
// console.log(h);
// var i = a%c;
// console.log(i);
// a++;
// console.log(a);
// b--
// console.log(b);

// //Assignment operators(=, +=, -=, *=, /= %=)
// a += 6; //a = a+6;
// console.log(a)

// //Relational or comparison operators(==, ===, !=, !==, >, <, >=, <=)
// var j = a > b;
// console.log(j)
// var k = d === w;
// console.log(k);

// //logical operators(&&, ||, !)
// var q = (a > b) && (d > c);
// console.log(q);
// var r = (a < b) || (d > c);
// console.log(r);
// var s = !(a > b);
// console.log(s);

// //Non-printing data types
// //arrays, object, function
// //objects

// var person = {
//     name:"obaloluwa",
//     age: 14,
//     isStudent:false,
//     bestFood:"pounded yam",
// }
// console.log(person);
// console.log(person.age);
// console.log(person.bestFood);

// //arrays 
// //arrays is a collection of items that are stores in a variable
// var fruits = ["Apple", "Banana", "Orange", "Mango"];
// console.log(fruits);
// console.log(fruits[2]);
// console.log(fruits.length);
 
// //array methods
// var arr= [1, 3, 2, 4, 5];
// arr.sort();
// console.log("sorted array ascending",arr);
// arr.reverser();
// console.log("sorted array descending",arr);
// //
// arr.push(10,7);
// console.log("after pushing 10 to the array",arr);
// arr.pop();
// console.log("after popping the last element of the array",arr);
// arr.shift();
// console.log("after shifting the first element of the array",arr);
// arr.unshift(0);
// console.log("after unshifting 0 to the front of the array",arr);
// arr.splic(2,3);
// console.log("after splicing the array",arr);

// //creates a new array
// var newArr = arr.slice(1,2);
// console.log("the new array created using slice",newArr);
// var olarotimiArray = [2,4,6,8];
// var neMappedArray = olarotimiArray.map(el => el>5);
// console.log("the new filtered array", filtered-array);

// var myStudent = [
//     {
//         name:"habib",
//         age: 14,
//         isStudent: true,
//         bestFood:"pounded yam",
//     }
//      {
//         name:"aisha",
//         age: 12,
//         isStudent: true,
//         bestFood:"pounded yam",
//     }
//      {
//         name:"oba",
//         age: 12,
//         isStudent: true,
//         bestFood:"pounded yam",
//     }
  

   
// ]
// var searchArray = myStudent.filter(student => student.bestFood ==="pounded yam");
// console.log("the search array",searchArray);
// //selection construct (if, if and else, if else if, switch case)
// var userAge = prompt("kindly type your age");
// if (userAge>= 18){
//     alert("you are eligible to drive");
// }else{
//     alert("you cannot drive because you are not 18 years old");
// }

// var userScore = prompt("type in your score");
// if (userScore >= 70 && userScore<= 100){
//     alert("you got A");
// }else if (userScore >= 60 && userScore<70){
//     alert("you got B");
// }else if (userScore>=50 && userScore<60){
//     alert("you got c");
// }else if (userScore >= 45 && userScore<50){
//     alert("you got D");
// }else if (userScore>= 40 && userScore<45){
//       alert("you got E");
// }else if(userScore>= 0 && userScore <40){
//     alert("you got an F");
// }else{
//     alert("invalid score");
// }
  
// alert("what is the capital of Ghana \n a. Accra \n b. Lagos \n c. Nairobi \n d. Dakar ");
// var userAnswer = prompt("Type in your answer");

// switch(userAnswer){
//     case 'a':
//         alert('Correct answer');
//         break;
//     case 'b':
//         alert('Wrong answer');
//         break;   
//     case 'c':
//         alert('Wrong answer');
//         break;
//     case 'd':
//         alert('Wrong answer');
//         break; 
//     default:
//         alert('Invalid answer');                  
// }

// //iteration construct (for loop, while loop, do while loop)

// for (let i = 1; i < 11; i++){
//     console.log( 'I love programming', i);
// }

// var count = 1;

// while (count <= 10){
//     console.log('I love programming', count);
//     count++;
// }


// do{
//     console.log('I love programming', count);
//     count++;
// }while(count < 0);

// //function
// //function without an argument
// function calculator(){

//     let number1= 30;
//     let number2= 40;

//     let sum = number1 + number2;
//     console.log("the result of your calculation is" + sum);
//     console.log(`the result is $(sum")`);

// }
// calculator();
// calculator();
// calculator();
// calculator();

// //funtions with argument 
// function addUserNumber(num1,num2){

//     let sum = num1 + num2;
//     console.log("another way of writing result of adding"+ " "+ num1+" "+ "and"+ " "+ num2 +" "+ "is"+ "" + sum);
//     console.log(`the result of adding $(num1) and $(num2) ia $(sum)`)
// }
// addUserNumber(10,40);
// addUserNumber(30,5);

// //FUNCTION with retun statement

// function multiplyUserNumber(num1,num2){

//     let product = num1 * num2;
//     return product;
// }

// console.log(product);
// var calculatedResult = multiplyUserNumber(30,40);
// console.log("the result of multiplying 30 and 40 is" + calculatedResult);
