
let dob = prompt("Enter your Date of Birth (YYYY-MM-DD):");

let birthDate = new Date(dob);
let today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

let month = today.getMonth() - birthDate.getMonth();

if (
  month < 0 ||
  (month === 0 && today.getDate() < birthDate.getDate())
) {
  age--;
}

console.log("Your Date of Birth is:", dob);
console.log("Your Date of Birth + 5 is:",  `${birthDate.getFullYear() + 5}`);
console.log("your date off birth is :", `-${birthDate.getMonth() + 1}-${birthDate.getDate()}`);
