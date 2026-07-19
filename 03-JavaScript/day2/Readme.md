# 📘 Day 16 - Operators & Conditionals (JavaScript)

## 📖 Overview

Operators and conditionals are the foundation of decision-making in JavaScript. Operators allow you to perform calculations, compare values, and combine expressions, while conditionals let your program choose different actions based on specific conditions.

---

# 📚 Topics Covered

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Increment & Decrement Operators
- `if` Statement
- `if...else`
- `else if`
- Nested `if`
- `switch` Statement
- Ternary Operator (`? :`)

---

# 1️⃣ Arithmetic Operators

Used to perform mathematical operations.

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `5 + 3` |
| `-` | Subtraction | `5 - 3` |
| `*` | Multiplication | `5 * 3` |
| `/` | Division | `10 / 2` |
| `%` | Modulus (Remainder) | `10 % 3` |
| `**` | Exponentiation | `2 ** 3` |

### Example

```javascript
let a = 20;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** 2);
```

---

# 2️⃣ Assignment Operators

Used to assign and update values.

| Operator | Example | Equivalent |
|----------|---------|------------|
| `=` | `x = 5` | Assign value |
| `+=` | `x += 2` | `x = x + 2` |
| `-=` | `x -= 2` | `x = x - 2` |
| `*=` | `x *= 2` | `x = x * 2` |
| `/=` | `x /= 2` | `x = x / 2` |
| `%=` | `x %= 2` | `x = x % 2` |

### Example

```javascript
let x = 10;

x += 5;
x -= 2;
x *= 2;
x /= 2;

console.log(x);
```

---

# 3️⃣ Comparison Operators

Comparison operators return either `true` or `false`.

| Operator | Description |
|----------|-------------|
| `==` | Equal value |
| `===` | Equal value and type |
| `!=` | Not equal |
| `!==` | Not equal value or type |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |

### Example

```javascript
console.log(10 > 5);
console.log(10 < 5);
console.log(10 == "10");
console.log(10 === "10");
```

### `==` vs `===`

```javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false
```

> **Best Practice:** Always use `===` and `!==` whenever possible.

---

# 4️⃣ Logical Operators

Used to combine multiple conditions.

| Operator | Name |
|----------|------|
| `&&` | AND |
| `||` | OR |
| `!` | NOT |

### Example

```javascript
let age = 20;
let citizen = true;

console.log(age >= 18 && citizen);
console.log(age < 18 || citizen);
console.log(!citizen);
```

---

# 5️⃣ Increment & Decrement

Increase or decrease a value by one.

| Operator | Description |
|----------|-------------|
| `++` | Increment |
| `--` | Decrement |

### Example

```javascript
let count = 5;

count++;
count--;

console.log(count);
```

---

# 6️⃣ if Statement

Executes code only when the condition is true.

### Syntax

```javascript
if (condition) {
    // code
}
```

### Example

```javascript
let age = 18;

if (age >= 18) {
    console.log("Eligible to vote");
}
```

---

# 7️⃣ if...else Statement

Chooses between two blocks of code.

### Syntax

```javascript
if (condition) {

} else {

}
```

### Example

```javascript
let age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

# 8️⃣ else if Statement

Checks multiple conditions.

### Example

```javascript
let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
```

---

# 9️⃣ Nested if

An `if` statement inside another `if`.

```javascript
let age = 20;
let citizen = true;

if (age >= 18) {

    if (citizen) {
        console.log("Eligible");
    }

}
```

---

# 🔟 switch Statement

Useful when checking one variable against many values.

### Example

```javascript
let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");

}
```

---

# 1️⃣1️⃣ Ternary Operator

A shorter version of `if...else`.

### Syntax

```javascript
condition ? value1 : value2;
```

### Example

```javascript
let age = 19;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

---

# 📝 Practice Programs

### 1. Even or Odd

```javascript
let num = 15;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

### 2. Largest of Two Numbers

```javascript
let a = 25;
let b = 40;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}
```

### 3. Positive, Negative or Zero

```javascript
let number = -8;

if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
```

### 4. Voting Eligibility

```javascript
let age = 17;

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}
```

---

# 📌 Key Takeaways

- Operators perform calculations and comparisons.
- Comparison operators always return `true` or `false`.
- Prefer `===` instead of `==`.
- Logical operators combine multiple conditions.
- `if`, `if...else`, and `else if` help make decisions.
- `switch` is cleaner for multiple fixed options.
- The ternary operator is a concise alternative to `if...else`.

---

# 🎯 Practice Questions

- Check whether a number is even or odd.
- Check if a person is eligible to vote.
- Find the largest of three numbers.
- Check whether a year is a leap year.
- Build a simple calculator using `switch`.
- Convert marks into grades using `else if`.
- Check whether a number is positive, negative, or zero.
- Determine whether a character is a vowel or consonant.
- Use the ternary operator to check if a number is even or odd.
- Create a menu-driven program using `switch`.

---

## 🚀 Next Topic

**Day 17 – Loops in JavaScript**
- `for`
- `while`
- `do...while`
- `break`
- `continue`
- Nested Loops