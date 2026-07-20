# Day 18: Functions in JavaScript

## 📌 What is a Function?

A **function** is a reusable block of code that performs a specific task. Instead of writing the same code multiple times, you can write it once and call it whenever needed.

---

## 🎯 Why Use Functions?

- Reuse code
- Reduce repetition
- Improve readability
- Make debugging easier
- Organize code into smaller pieces

---

# 1️⃣ Function Declaration

### Syntax

```javascript
function functionName() {
    // Code
}
```

### Example

```javascript
function greet() {
    console.log("Hello, Abishek!");
}

greet();
```

**Output**

```
Hello, Abishek!
```

---

# 2️⃣ Parameters and Arguments

### Parameters

Variables declared inside the function definition.

### Arguments

Actual values passed when calling the function.

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Abishek");
greet("John");
```

**Output**

```
Hello Abishek
Hello John
```

---

# 3️⃣ Multiple Parameters

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

**Output**

```
30
```

---

# 4️⃣ Return Statement

`return` sends a value back to the caller.

```javascript
function square(num) {
    return num * num;
}

let result = square(5);

console.log(result);
```

**Output**

```
25
```

---

# 5️⃣ return vs console.log()

## console.log()

Prints the value.

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

## return

Returns the value.

```javascript
function greet() {
    return "Hello";
}

let msg = greet();

console.log(msg);
```

---

# 6️⃣ Function Expression

A function stored inside a variable.

```javascript
const greet = function () {
    console.log("Hello!");
};

greet();
```

---

# 7️⃣ Arrow Functions (ES6)

Shorter syntax for writing functions.

```javascript
const greet = () => {
    console.log("Hello");
};

greet();
```

### Arrow Function with Parameters

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(5, 6));
```

**Output**

```
11
```

---

# 8️⃣ Short Arrow Function

If there is only one statement, remove `{}` and `return`.

```javascript
const square = num => num * num;

console.log(square(7));
```

**Output**

```
49
```

---

# 9️⃣ Default Parameters

```javascript
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
greet("Abishek");
```

**Output**

```
Hello Guest
Hello Abishek
```

---

# 🔟 Global Scope

Variables declared outside a function are accessible everywhere.

```javascript
let name = "Abishek";

function show() {
    console.log(name);
}

show();
```

---

# 1️⃣1️⃣ Local Scope

Variables declared inside a function can only be used inside that function.

```javascript
function show() {
    let age = 20;
    console.log(age);
}

show();

// console.log(age); // Error
```

---

# 1️⃣2️⃣ Anonymous Function

A function without a name.

```javascript
const message = function () {
    console.log("Anonymous Function");
};

message();
```

---

# 1️⃣3️⃣ Callback Function

A function passed as an argument to another function.

```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("Goodbye!");
}

greet("Abishek", bye);
```

**Output**

```
Hello Abishek
Goodbye!
```

---

# 1️⃣4️⃣ Immediately Invoked Function Expression (IIFE)

Runs immediately after being created.

```javascript
(function () {
    console.log("I run immediately!");
})();
```

---

# 1️⃣5️⃣ Rest Parameters

Allows multiple arguments.

```javascript
function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(1,2,3,4,5));
```

**Output**

```
15
```

---

# 💻 Practice Programs

## Even or Odd

```javascript
function evenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOdd(8));
```

---

## Maximum of Two Numbers

```javascript
function max(a, b) {
    return a > b ? a : b;
}

console.log(max(10, 25));
```

---

## Factorial

```javascript
function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

console.log(factorial(5));
```

---

## Prime Number

```javascript
function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }

    return true;
}

console.log(isPrime(17));
```

---

## Reverse String

```javascript
function reverse(str) {
    return str.split("").reverse().join("");
}

console.log(reverse("JavaScript"));
```

---

# 📝 Interview Questions

### 1. What is a function?

A reusable block of code that performs a specific task.

### 2. What is the difference between parameters and arguments?

- Parameters → Variables in function definition.
- Arguments → Actual values passed to the function.

### 3. Difference between `return` and `console.log()`?

| return | console.log() |
|---------|---------------|
| Returns a value | Prints a value |
| Ends function execution | Does not return anything |
| Can be stored in variables | Cannot be stored |

### 4. What is an Arrow Function?

A shorter syntax for writing functions using `=>`.

### 5. What is Function Scope?

Scope defines where variables can be accessed.

- Global Scope
- Local Scope

---

# 📚 Summary

- ✅ Function Declaration
- ✅ Parameters & Arguments
- ✅ Return Statement
- ✅ Function Expression
- ✅ Arrow Functions
- ✅ Default Parameters
- ✅ Global Scope
- ✅ Local Scope
- ✅ Anonymous Functions
- ✅ Callback Functions
- ✅ IIFE
- ✅ Rest Parameters

---

# 🎯 Practice Challenges

1. Check if a number is a palindrome.
2. Count vowels in a string.
3. Find the largest number in an array.
4. Calculate the average of an array.
5. Remove duplicate elements from an array.
6. Reverse a string without using `.reverse()`.
7. Count words in a sentence.
8. Find the factorial using recursion.
9. Check whether two strings are anagrams.
10. Find the second largest number in an array.

---

## 🚀 Day 18 Completed!

**Next Topic (Day 19):**
- Arrays in JavaScript
```