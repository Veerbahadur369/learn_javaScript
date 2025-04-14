/*
There are two types of Data types
1. Primitive DataType      2.Non-Primitive
*/

//  Primitive dataTypes


//    1 Number
let num =34334
console.log(typeof num)

//    2  String
let st="sitaRam"

//  3  Boolean
let bol  =true;
console.log(typeof bol)

//  4 BigInt
let bigNum=BigInt(5348993487349803498043987348975489435789547894)
console.log(typeof bigNum);

//    5  Null

 let n=null;
 console.log(typeof n)

//    6 Undefine
let number;
console.log(typeof number)

//   7  Symbol
let sym =Symbol("uniqe")
console.log(typeof sym)

console.table([num,st,bol,bigNum,n,number,sym]);

// Non Primitive Data Type 
// In JavaScript, there is one non-primitive data type, which is the Object. It encompasses arrays, functions, and other objects. Objects in JavaScript are used to store collections of data or more complex entities. Here's a quick breakdown:
// - Arrays: Special types of objects used to store ordered lists.
// - Functions: Objects that are callable and can execute code.
// - Objects: General containers for key-value pairs.

// Primitives like string, number, boolean, null, undefined, and symbol are separate from these non-primitive types. If you'd like, I can explain more about these or show some examples!
// .
console.log("+++++++++++++++*********Non primitive Data Type Start From This line*******++++++++++++++")
//   2.1  Array 
console.log("2.1  This is Array")
const arr=["car","Bike","Scooter"];
console.log(arr);

//  2.2 Function 
console.log("2.2  This is Function")
   function UseName (name){
console.log(name)
}
UseName("SitaRam");


//  2.3 Obect
console.log("2.3  This is Object")
const ob={
    name:"Ram",
    age:24

}
console.log(ob)
console.log(ob.name)
console.log(ob.age)

