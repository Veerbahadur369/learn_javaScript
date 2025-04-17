let st="HEllo world"
console.log(st[0])
console.log(st[1])
console.log(st[2])
console.log(st[3])
console.log(st[4])
console.log(st[5])
console.log(st[6])
console.log(st[7])
console.log(st[8])
console.log(st[9])
console.log(st[10])
console.log(typeof st)
console.log(st[11])
console.log(st[12])
let str=new String ("   ahELLllo    ")
// let st=" me"
console.log(typeof str)
//     //   bold() 
console.log(str.bold())

//     //    blink
 console.log(str.blink())

//      //      chartAt()
 console.log(str.charAt(2))

//      //    charCodeAt()
     console.log(str.charCodeAt(0))
    
//      //     codePointAt()
     console.log(str.codePointAt(0))
    
//      //        concat()
     console.log(str.concat(st))   //str is font string  and st is end string
    
//      // endWith()
     console.log(str.endsWith("o")) // return true or false wether end character pass correct or incorrect
    
//      // fontColor()
     console.log(str.fontcolor('red'))
    
//      //   indexOf()
     console.log(str.indexOf('l'))

//      // valueof()
     console.log(str.valueOf())
     
//      // trim()     remove space to both side starting to end side
     console.log(str.trim())

//      //  trimEnd()  remove spaces from end
     console.log(str.trimEnd())

//      //  trimStart() remove spaces from start
     console.log(str.trimStart())

//      // anchor()
     console.log(str.anchor('hello'))

//      // at()
     console.log(str.at('l'))

     //toUpperCase()
     console.log(str.toUpperCase())
     console.log(str.toLocaleLowerCase())

    //  replace()
    console.log(str.replace('ll',"mm"))

    //  slice()
console.log(str.slice(2,5))

       //  replaceAll()
       let str1=str.replaceAll("SitaRam")
console.log(str1);

      //   subString()
console.log(str.substring(2,5))

// search()
console.log(str)
console.log(str.search("l"))
console.log(str.search("h"))
console.log(str.search("o"))


