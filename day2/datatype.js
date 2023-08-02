let challenge = "30 Days Of JavaScript"

console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 2))
console.log(challenge.substring(3, challenge.length))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(" "))

let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"

console.log(string.split(","))

console.log(challenge.replace("JavaScript", "Python"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt("J"))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))

let stringTwo = "You cannot end a sentence with because because because is a conjunction"

console.log(stringTwo.indexOf("because"))
console.log(stringTwo.lastIndexOf("because"))
console.log(stringTwo.search("because"))

let stringThree = " 30 Days Of JavaScript "
console.log(stringThree.trim(""))

console.log(challenge.startsWith("30"))
console.log(challenge.endsWith("Script"))

let pattern = /a/gi
console.log(challenge.match(pattern))

let stringFour = "30 Days of"
console.log(stringFour.concat(" JavaScript"))

console.log(challenge.repeat(2))


console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log("10" === 10)
let num = "10"
let numInt = parseInt(num)
console.log(typeof(numInt))

console.log(parseFloat("9.8") === 10)
let num2 = Math.round(9.8)
console.log(num2)

let stringFive = "python"
let stringSix = "jargon"
console.log(stringFive.includes("on"))
console.log(stringSix.includes("on"))

let stringSeven = "I hope this course is not full of jargon"
console.log(stringSeven.includes("jargon"))

console.log(Math.floor(Math.random() * 101))
console.log(Math.floor(Math.random() * 51) + 50)
console.log(Math.floor(Math.random() * 256))

let stringEight = "JavaScript"
console.log(stringEight[8])

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")

console.log(stringTwo.substr(31, 24))

let stringNine = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let patternTwo = /love/gi
console.log(stringNine.match(patternTwo))

let patternThree = /because/gi
console.log(stringTwo.match(patternThree))

const stringTen = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(stringTen.replace(/[%$@&#;]/g, ""))

let stringEleven = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let patternFour = /\d+/g
myArray = stringEleven.match(patternFour)
console.log(+myArray[0] + +myArray[1] + +myArray[2])




