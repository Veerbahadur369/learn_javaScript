const score=434
console.log(score)


const balance=new Number(3434.67654);
console.log(balance)

// toFixed()  it is used for decimal value's, it means how many value are you need after decimal
console.log(balance.toFixed(2))

//toPrecision() means fixed the digit,s of number
console.log(balance.toPrecision(4))

console.log(balance.toExponential())


let num=new Number(433.87654)

toExponential() 
console.log(num.toExponential())


console.log(num.toString().length)
console.log(num.toString().charAt(3))
console.log(num.toString()[2])
console.log(num.toString()[4])
console.log(num.toString()[5])


// tolocalString()
let anotherNum=10000000000000;
console.log(anotherNum.toLocaleString())


console.log(Number.MAX_VALUE)  // 1.7976931348623157e+308
console.log(Number.MIN_VALUE) //  5e-324
console.log(Number.EPSILON)   //2.220446049250313e-16
console.log(Number.MAX_SAFE_INTEGER)//9007199254740991
console.log(Number.MIN_SAFE_INTEGER)//-9007199254740991
console.log(Number.POSITIVE_INFINITY)  //Infinity
console.log(Number.NEGATIVE_INFINITY)  //  -Infinity



// +++++++++++++++++++  Math library of javaScript  +++++++++++++++++++
console.log(Math)


         //abs()  it work similar to modulus in math convert negative value in postive and positive into positive
console.log(Math.abs(-345))


        // round()  it help to round of float value

 console.log(Math.round(4.5))   // 5
console.log(Math.round(4.3))   // 4

       //ceil() it means top if value slightly greater then integer value then it takes larger value integer
console.log(Math.ceil(4.3))     //5

           // floor( )  if means it provide lower integers value like 4.9=4
/ console.log(Math.floor(5.9))   //5

         // random()
console.log(Math.random()*1000)

     // sqrt()
console.log(Math.sqrt(54))
console.log(Math.sqrt(25))

   //pow()
console.log(Math.pow(2,5))

     //  sin(),cos(),tan(),cot()  input must be radian
     let pi=Math.PI
    //  c/onsole.log(Math.sin(pi/2))
     console.log(Math.sinh(pi/2))


     console.log(Math.cos(0))
     console.log(Math.cosh(0))

     console.log(Math.tan(pi/4))
     console.log(Math.tanh(45))



//    //exp() it is used to get power of e=2.718
console.log(Math.exp(2))
console.log(Math.E)    //e=2.718281828459045

//  max() and min() in Math
console.log(Math.max(3,4,5,6,2,5,7,54,3))
console.log(Math.min(4,5,6,4,3,5,6,))


// random()
let min =10

console.log(Math.round(Math.random()*(min ))+10)
