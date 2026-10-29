let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

// 1. Arithmetic Operators
console.log("Addition =", num1 + num2);
console.log("Subtraction =", num1 - num2);
console.log("Multiplication =", num1 * num2);
console.log("Division =", num1 / num2);
console.log("Modulus =", num1 % num2);
console.log("Power =", num1 ** num2);

// 2. Assignment Operators
let a = 10;

a += 5;
console.log("Addition Assignment =", a); // 15

a -= 3;
console.log("Subtraction Assignment =", a); // 12

a *= 2;
console.log("Multiplication Assignment =", a); // 24

a /= 4;
console.log("Division Assignment =", a); // 6

a %= 4;
console.log("Modulus Assignment =", a); // 2

a **= 3;
console.log("Power Assignment =", a); // 8

// 3. Comparison Operators
console.log("Equal =", num1 == num2);
console.log("Strict Equal =", num1 === num2);
console.log("Not Equal =", num1 != num2);
console.log("Strict Not Equal =", num1 !== num2);
console.log("Greater Than =", num1 > num2);
console.log("Less Than =", num1 < num2);
console.log("Greater or Equal =", num1 >= num2);
console.log("Less or Equal =", num1 <= num2);

// 4. Logical Operators
console.log("AND =", num1 > 0 && num2 > 0);
console.log("OR =", num1 > 0 || num2 > 0);
console.log("NOT =", !(num1 > 0));

// 5. Increment and Decrement
let count = 5;

console.log("Post Increment =", count++);
console.log("After Increment =", count);

console.log("Pre Increment =", ++count);

console.log("Post Decrement =", count--);
console.log("After Decrement =", count);

console.log("Pre Decrement =", --count);

// 6. String Operator
let firstName = "Rehan";
let lastName = "Khan";

console.log("Full Name =", firstName + " " + lastName);

// 7. Ternary Operator
let result = num1 > num2 ? "First number is greater" : 
             num1 < num2 ? "Second number is greater" : 
             "Both numbers are equal";

console.log("Result =", result);

// 8. Type Operators
console.log("Type of num1 =", typeof num1);
console.log("Type of firstName =", typeof firstName);

// 9. Nullish Coalescing Operator
let username = null;

console.log("Username =", username ?? "Guest");

// 10. Optional Chaining Operator
let student = {
    name: "Rehan",
    address: {
        city: "Jodhpur"
    }
};

console.log("Student City =", student.address?.city);
console.log("Student Country =", student.address?.country);

// 11. Bitwise Operators
console.log("Bitwise AND =", num1 & num2);
console.log("Bitwise OR =", num1 | num2);
console.log("Bitwise XOR =", num1 ^ num2);
console.log("Bitwise NOT =", ~num1);
console.log("Left Shift =", num1 << 1);
console.log("Right Shift =", num1 >> 1);
console.log("Unsigned Right Shift =", num1 >>> 1);

// 12. Relational Operators
console.log("num1 is in student =", "name" in student);
console.log("Student object check =", student instanceof Object);