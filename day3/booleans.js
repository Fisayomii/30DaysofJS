 

let firstName = "Fisayomi"
let lastName = "Aiyetogbon"
let country = "Nigeria"
let city = "Lagos"
let age = 21
let isMarried = false
let year = 2023

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

console.log(typeof(10) == typeof("10"))
console.log(10 == parseInt("9.8"))

console.log(true)
console.log("30")
console.log([])

console.log(false)
console.log("")
console.log(0)

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != "4")
console.log(4 == "4")
console.log(4 === "4")

let python = "python"
let jargon = "jargon"

console.log(python.length < jargon.length)


console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!(python.includes("on") && jargon.includes("on")))

const now = new Date()

const thisYear = now.getFullYear()
console.log(thisYear)
const thisMonth = now.getMonth()
console.log(thisMonth)
const thisDate = now.getDate()
console.log(thisDate)
const thisDay = now.getDay()
console.log(thisDay)
const thisHour = now.getHours()
console.log(thisHour)
const thisMinute = now.getMinutes()
console.log(thisMinute)

let secs = new Date() - new Date("1970-01-01")
console.log(secs/1000)

// let base = prompt("Enter a base:", "number")
// let height = prompt("Enter a height:", "number")
// let area = 0.5*base*height
// console.log(`The area of the triangle is ${area}`)

isRaining = true
? console.log("You need a rain coat")
: console.log("No need for a rain coat")

// let sideA = parseFloat(prompt("Enter side A:"))
// let sideB = parseFloat(prompt("Enter side B:"))
// let sideC = parseFloat(prompt("Enter side C:"))
// let perimeter = (sideA+sideB+sideC)
// prompt(`The perimeter of the tringle is ${perimeter}` )

// let length = parseFloat(prompt("Enter a length"))
// let  width = parseFloat(prompt("Enter a breadth"))
// let  aot = length * width
// let pot = length + width 
// console.log(`The area and perimeter of your triangle are ${aot} and ${pot} respectively.`)


// let radius = parseFloat(prompt("Enter a radius"))
// let pi = 3.14
// let area = pi * radius * radius
// let circumference = 2 * pi * radius
// console.log(`The area and circumference of your circle is ${area} and ${circumference} respectively.`)

// Equation: y = 2x - 2

// Calculate the slope (m), which is the coefficient of x
const slope = 2;

// Calculate the x-intercept by setting y to 0 and solving for x
const xIntercept = 0; // When y = 0, x = 1 (2x - 2 = 0 => 2x = 2 => x = 1)

// Calculate the y-intercept by setting x to 0 and solving for y
const yIntercept = -2; // When x = 0, y = -2 (y = 2x - 2 => y = 2*0 - 2 => y = -2)

console.log(`Slope is ${slope} `)
console.log(`X-Intercept: (${xIntercept}, 0)`);
console.log(`Y-Intercept: (0, ${yIntercept})`);


// Define the coordinates of the two points
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

// Calculate the slope (m)
const slope2 = (y2 - y1) / (x2 - x1);

// Output the result
console.log(`Slope (m) between points (2, 2) and (6, 10): ${slope2}`);

console.log(slope === slope2)

// let hours = parseFloat(prompt("Enter a time in hours"))
// let rate = parseFloat(prompt("Enter a rate per hour"))

// let earning = hours * rate 
// alert(`Your weekly earning is ${earning}`)

let myName = "Oluwafisayomi"
if (myName.length > 7) {
    console.log("My name is long")
}
else {
    console.log("My name is short")
}

if (firstName.length > lastName.length) {
    console.log(`Your firdt name, ${firstName} is longer than your last name.`)
}

// let myAge = 21
// let yourAge = 26
// console.log(`I am ${yourAge - myAge} younger than you`)

// let birthYear = window.prompt("Enter birth year: ") 
// let yourAge2 = 2023 - birthYear
// let allowedYear = 18 - yourAge2

// if (yourAge2 >= 18) {
// console.log(`You are ${yourAge2}. You are old enough to drive`)
// }
// else {
//     console.log(`You are ${yourAge2}. You'll be allowed to drive after ${allowedYear} years.`)
// }


let years = window.prompt("Enter number of years you live: ")

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;

const secondsInYear = secondsInMinute * minutesInHour * hoursInDay * 365;

const convertedSeconds = years * secondsInYear;

console.log(`${years} years is equal to ${convertedSeconds} seconds.`);


const now2 = new Date()
let fullYear= now2.getFullYear()
let month = now2.getMonth() + 1
let date = now2.getDate()
let hours = now2.getHours()
let minutes = now2.getMinutes()

console.log(`${fullYear}-0${month}-0${date} ${hours}:${minutes}`)
console.log(`0${date}-0${month}-${fullYear} ${hours}:${minutes}`)
console.log(`0${date}/0${month}/${fullYear} ${hours}:${minutes}`)
