// const score=3434
// const scoreValue=43.3;
// const id=Symbol('123')

// const Userid=Symbol('123')
// console.log(id===Userid)
// console.log(id)
// console.log(Userid)

const bigNumber=3422222222222342543434234234n
// const num =prompt("enter number")
// console.log(bigNumber)

// let ar=[3,5,6,7,8,9]
// console.log(ar)
// console.log(typeof ar)
const valueFunction=function(){
    console.log("Hi veer")
}
console.log(typeof valueFunction)
const obj={
    name:"veer",
    age:22
}
// console.log(typeof obj)
let a=9;
let b=a++;
// console.log(a)
// console.log(b)
// ========================= STACk & HEAP  ============================
// All primitive data type  store in the stack 
//         An send copy of data
let val=34343;
let val2=val
val2=54
// console.log(val)
// console.log(val2)

// All non primitive data type store in the heap
//     An send reference of the data

let ar=[4,5,6,7,88,4]
let ra=ar
// ra[3]=23;
// console.log(ar)
// console.log(ra)

let ob={
    emailId:"her@gmail.com",
    name:"veer"
}
let bo=ob
bo.emailId="veer@gmail.com"
// console.log(ob.emailId)
// console.log(bo.emailId)

let fun1=function(){
    console.log("h1 veer")
}
let fun2=fun1
console.log(typeof fun)
console.log(`My emailId is ${ob.emailId } and my name is ${ob.name}`)