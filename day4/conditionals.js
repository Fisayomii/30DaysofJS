
let yourAge = window.prompt("Enter your age: ")
let allowedYear = 18 - yourAge
if (yourAge >= 18) {
    console.log(`You are old enough to drive`)
}
else {
    console.log(`You are left with ${allowedYear} years to drive.`)
}
console.log()