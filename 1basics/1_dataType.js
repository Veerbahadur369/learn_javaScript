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

