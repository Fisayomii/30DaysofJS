const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
console.log(countries);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text.split(" "));
console.log(text.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.push("Meat");
shoppingCart.join("Sugar");
console.log(shoppingCart);
shoppingCart[2] = "Green Tea";

if (countries.includes("Ethiopia") === true) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}
console.log(countries);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
console.log(ages[0]);
console.log(ages.lastIndexOf);
let totalAges =
  ages[0] +
  ages[1] +
  ages[2] +
  ages[3] +
  ages[4] +
  ages[5] +
  ages[6] +
  ages[7] +
  ages[8] +
  ages[9];
let averageAge = totalAges / ages.length;
console.log(averageAge);
console.log(ages.length - 1);
