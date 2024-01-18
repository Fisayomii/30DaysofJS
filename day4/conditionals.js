// let yourAge = window.prompt("Enter your age: ");

// let allowedYear = 18 - yourAge;
// if (yourAge >= 18) {
//   console.log(`You are old enough to drive`);
// } else {
//   console.log(`You are left with ${allowedYear} years to drive.`);
// }

// let myAge = 22;
// let oYears = yourAge - myAge;
// if (yourAge > myAge) {
//   console.log(`You are ${oYears} years older than me`);
// } else {
//   console.log(`I am ${oYears} years older than you`);
// }

// let a = 65;
// let b = 28;
// // if (a > b) {
// //   console.log("A is greater than B");
// // } else {
// //   console.log("A is not greater than B");
// // }

// a > b
//   ? console.log("A is greater than B")
//   : console.log("A is not greater than B");

// if (yourAge % 2 === 0) {
//   console.log(`You age (${yourAge}) is an even number `);
// } else {
//   console.log(`You age (${yourAge}) is an odd number `);
// }

// let yourScore = parseInt(prompt("Enter your score over 100: "));

// if (!isNaN(yourScore)) {
//   if (yourScore <= 100 && yourScore >= 80) {
//     console.log("You scored an A");
//   } else if (yourScore <= 79 && yourScore >= 70) {
//     console.log("You scored a B");
//   } else if (yourScore <= 69 && yourScore >= 60) {
//     console.log("You scored a C");
//   } else if (yourScore <= 59 && yourScore >= 50) {
//     console.log("You scored a D");
//   } else if (yourScore <= 49 && yourScore >= 0) {
//     console.log("You scored an F");
//   } else {
//     console.log("Invalid score. Please enter a number between 0 and 100.");
//   }
// } else {
//   console.log("Invalid input. Please enter a valid number.");
// }

// let month = prompt("What month of the year is it?").toLowerCase();

// switch (month) {
//   case "september":
//   case "october":
//   case "november":
//     console.log("It's autumn season");
//     break;
//   case "december":
//   case "january":
//   case "february":
//     console.log("It's winter season");
//     break;
//   case "march":
//   case "april":
//   case "may":
//     console.log("It's spring season");
//     break;
//   case "june":
//   case "july":
//   case "august":
//     console.log("It's summer season");
//     break;
//   default:
//     console.log("Not a valid month");
// }

// let day = prompt("What day of the week is it?").toLowerCase();

// switch (day) {
//   case "monday":
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
//   case "friday":
//     console.log("It is a working day!");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("It's weekend");
//     break;
//   default:
//     console.log("Not a valid day");

//     break;
// }

let month = prompt("Enter a month:").toLowerCase();
switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log("31");
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log("30");
    break;
  case "february":
    // Check if it's a leap year for February
    console.log("28");
    break;
  default:
    console.log("Invalid month"); // Invalid month
}
