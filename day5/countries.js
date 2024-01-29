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

console.log(countries.slice(0, 10));

const middleIndex = Math.floor(countries.length / 2);
const middleElement = countries[middleIndex];

console.log("Middle Element:", middleElement);

const firstHalf = countries.slice(0, middleIndex);
const secondHalf = countries.slice(middleIndex + 1);

if (countries.length % 2 === 0) {
  console.log(firstHalf, secondHalf);
} else {
  secondHalf.push("Nigeria");
  console.log(secondHalf);
}
