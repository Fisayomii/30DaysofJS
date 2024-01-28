const trial = Array(5).fill(3);
console.log(trial);

const myArr = Array(6);
console.log(myArr.length);
console.log(myArr[0]);
console.log(myArr[4]);
console.log(myArr.lastIndexOf);

const myArr1 = [3, "Fisayomi", true, [3, 2, 1], 22, "hello world"];
console.log(myArr1);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies.lastIndexOf);
console.log(itCompanies.toString());
itCompanies[0] = "FACEBOOK";
itCompanies[1] = "GOOGLE";
itCompanies[2] = "MICROSOFT";
itCompanies[3] = "APPLE";
itCompanies[4] = "IBM";
itCompanies[5] = "ORACLE";
itCompanies[6] = "AMAZON";
console.log(itCompanies);
console.log(itCompanies.toString() + "are big IT companies");

if (itCompanies.includes("Facebook") === "true") {
  console.log("Facebook");
} else {
  console.log("A company is not found");
}

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 2));
console.log(itCompanies.slice(4, 6));
console.log(itCompanies.slice(3, 3));
console.log(itCompanies.shift());
console.log(itCompanies.splice([3], 1));
console.log(itCompanies.pop());
console.log(itCompanies.splice(0, itCompanies.length));
console.log(itCompanies);
