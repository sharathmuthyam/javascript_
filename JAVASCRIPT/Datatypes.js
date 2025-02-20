/*Numbers*/

let num1 = 5;
let num2 = 10;
alert(num1+num2);
alert(num1+Infinity);//Infinity
//NaN==not a number it is sticky any operation on nan is nan
alert(NaN+10)
//Big Int it i s used when we want to store large rnumbers than 2pow(53)-1 or less than -2pow(53)-1
let bigInt = 1234567890123456789012345678901234567890n;//last n is important
console.log(bigInt);
//strings
let str = "hello",a='hello',b=`hello`;//double quotes and single quotes and backticks are used
//back ticks have functionality  that allows using $(variable) hemlps to add strings 
let name = "John";
let p=`hello ${name}`;
console.log(p);
//boolean true,false
let isTrue = 3>1;
let isFalse = 3<1;
alert(isTrue);
//null and undefinde are also datatypes which point to nothing
let a1= null;
let b1 = undefined;
//type of is used to check the type of variable
//typeof is not an fuction it is an operator
alert(typeof a1);

