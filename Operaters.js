//Arathmatic Operaters
let a = 5
let b = 2
console.log("A= ",a)
console.log("B= ",b)
console.log("A+B= ",a+b)
console.log("A-B= ",a-b)
console.log("A/B= ",a/b)
console.log("A*B= ",a*b)
console.log("A%B= ",a%b)
console.log("A**B= ",a**b)

// Comparison Operators
console.log("\n--- Comparison Operators ---")
console.log("A == B: ", a == b)
console.log("A === B: ", a === b)
console.log("A != B: ", a != b)
console.log("A !== B: ", a !== b)
console.log("A > B: ", a > b)
console.log("A < B: ", a < b)
console.log("A >= B: ", a >= b)
console.log("A <= B: ", a <= b)

// Logical Operators
console.log("\n--- Logical Operators ---")
console.log("(A > B) && (B > 0): ", (a > b) && (b > 0))
console.log("(A > B) || (B > 10): ", (a > b) || (b > 10))
console.log("!(A > B): ", !(a > b))

// Assignment Operators
console.log("\n--- Assignment Operators ---")
let x = a
console.log("x = a: ", x)
x += b
console.log("x += b: ", x)
x -= 2
console.log("x -= 2: ", x)
x *= 2
console.log("x *= 2: ", x)
x /= 2
console.log("x /= 2: ", x)
x %= 3
console.log("x %= 3: ", x)

// Ternary Operator
console.log("\n--- Ternary Operator ---")
let result = (a > b) ? "A is greater" : "B is greater"
console.log("result: ", result)

// Bitwise Operators
console.log("\n--- Bitwise Operators ---")
console.log("A & B (AND): ", a & b)
console.log("A | B (OR): ", a | b)
console.log("A ^ B (XOR): ", a ^ b)
console.log("~A (NOT): ", ~a)
console.log("A << 1 (Left Shift): ", a << 1)
console.log("A >> 1 (Right Shift): ", a >> 1)