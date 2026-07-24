# JavaScript Scope & Hoisting

## 📌 Overview

**Scope** and **Hoisting** are fundamental concepts in JavaScript. Understanding them helps you know:

* Where variables can be accessed
* How JavaScript handles variables and functions
* Why some variables return `undefined`
* Why `let` and `const` produce `ReferenceError`
* How JavaScript searches for variables
* How functions are handled before execution

---

# 1. Scope

**Scope** defines the area where a variable or function can be accessed.

JavaScript mainly has three types of scope:

1. Global Scope
2. Function Scope
3. Block Scope

---

## 1.1 Global Scope

A variable declared outside any function or block has **Global Scope**.

```javascript
let name = "Abishek";

function greet() {
    console.log(name);
}

greet();

console.log(name);
```

### Output

```text
Abishek
Abishek
```

The `name` variable can be accessed from different parts of the program because it is declared globally.

---

## 1.2 Function Scope

Variables declared with `var` inside a function are available only inside that function.

```javascript
function test() {
    var message = "Hello";

    console.log(message);
}

test();

console.log(message); // Error
```

The `message` variable exists only inside the `test()` function.

### Example Structure

```text
Global Scope
    │
    └── Function Scope
            │
            └── var message
```

---

## 1.3 Block Scope

A block is code inside `{ }`.

Examples:

```javascript
if (true) {
    // Block
}
```

Variables declared using `let` and `const` are **Block Scoped**.

```javascript
if (true) {
    let age = 20;
    const name = "Abishek";

    console.log(age);
    console.log(name);
}

console.log(age);  // Error
console.log(name); // Error
```

The variables are available only inside the block.

---

# 2. var vs let vs const

| Keyword | Scope          | Hoisting Behavior        | Re-declaration |
| ------- | -------------- | ------------------------ | -------------- |
| `var`   | Function Scope | Hoisted with `undefined` | Allowed        |
| `let`   | Block Scope    | Hoisted but in TDZ       | Not Allowed    |
| `const` | Block Scope    | Hoisted but in TDZ       | Not Allowed    |

---

# 3. Hoisting

**Hoisting** is JavaScript's behavior where declarations are processed before the code is executed.

Example:

```javascript
console.log(name);

var name = "Abishek";
```

### Output

```text
undefined
```

Conceptually, JavaScript handles it approximately like this:

```javascript
var name;

console.log(name);

name = "Abishek";
```

The **declaration** is processed first, but the **assignment** happens later.

---

# 4. var Hoisting

Example:

```javascript
console.log(x);

var x = 10;
```

### Output

```text
undefined
```

Conceptually:

```javascript
var x;

console.log(x);

x = 10;
```

### Important

Only the declaration is hoisted.

```javascript
var x = 10;
```

Conceptually:

```javascript
var x; // Declaration

x = 10; // Assignment
```

---

# 5. let Hoisting

Consider:

```javascript
console.log(x);

let x = 10;
```

### Output

```text
ReferenceError
```

`let` declarations are technically hoisted, but they cannot be accessed before the declaration is reached.

This is related to the **Temporal Dead Zone (TDZ)**.

---

# 6. Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the period between entering a scope and reaching the `let` or `const` declaration.

Example:

```javascript
console.log(x); // TDZ

let x = 10;
```

This causes:

```text
ReferenceError
```

After the declaration:

```javascript
let x = 10;

console.log(x);
```

Output:

```text
10
```

### TDZ Flow

```text
Enter Scope
     │
     ▼
Variable exists but cannot be accessed
     │
     ▼
let / const declaration
     │
     ▼
Variable can now be accessed
```

---

# 7. const Hoisting

`const` behaves similarly to `let`.

```javascript
console.log(x);

const x = 10;
```

Result:

```text
ReferenceError
```

Also, `const` must be initialized when declared.

❌ Incorrect:

```javascript
const x;
```

✅ Correct:

```javascript
const x = 10;
```

---

# 8. Function Hoisting

Function declarations are hoisted.

Example:

```javascript
greet();

function greet() {
    console.log("Hello Abishek");
}
```

### Output

```text
Hello Abishek
```

The function declaration can be called before it appears in the code.

---

# 9. Function Expression Hoisting

Function expressions behave differently.

```javascript
greet();

var greet = function() {
    console.log("Hello");
};
```

This results in:

```text
TypeError: greet is not a function
```

Conceptually:

```javascript
var greet;

greet(); // Error

greet = function() {
    console.log("Hello");
};
```

The variable declaration is hoisted, but the function assignment happens later.

---

# 10. Arrow Function Hoisting

Arrow functions are also function expressions.

Example:

```javascript
greet();

const greet = () => {
    console.log("Hello");
};
```

Result:

```text
ReferenceError
```

The `greet` variable is in the **Temporal Dead Zone** until its declaration is executed.

---

# 11. Scope Chain

JavaScript searches for variables from the current scope outward.

Example:

```javascript
let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();
```

### Output

```text
10
20
30
```

The search happens approximately like this:

```text
inner()
   │
   ▼
Does inner have `a`?
   │
   └── No
        │
        ▼
Does outer have `a`?
   │
   └── No
        │
        ▼
Does Global Scope have `a`?
   │
   └── Yes → 10
```

This is called the **Scope Chain**.

---

# 12. Variable Shadowing

A local variable can have the same name as a variable in an outer scope.

Example:

```javascript
let x = 10;

function test() {
    let x = 20;

    console.log(x);
}

test();

console.log(x);
```

### Output

```text
20
10
```

The local `x` shadows the global `x`.

### Scope Structure

```text
Global Scope
    x = 10
       │
       ▼
Function Scope
    x = 20
```

---

# 13. Scope + Hoisting Example

Consider:

```javascript
var x = 10;

function test() {
    console.log(x);

    var x = 20;
}

test();
```

### Output

```text
undefined
```

Why?

Because the local `x` declaration is hoisted.

Conceptually:

```javascript
var x = 10;

function test() {
    var x;

    console.log(x);

    x = 20;
}

test();
```

The local variable `x` is used instead of the global `x`.

---

# 14. Quick Reference

## `var`

```javascript
console.log(x);

var x = 10;
```

Result:

```text
undefined
```

---

## `let`

```javascript
console.log(x);

let x = 10;
```

Result:

```text
ReferenceError
```

---

## `const`

```javascript
console.log(x);

const x = 10;
```

Result:

```text
ReferenceError
```

---

## Function Declaration

```javascript
hello();

function hello() {
    console.log("Hello");
}
```

Result:

```text
Hello
```

---

## Function Expression

```javascript
hello();

var hello = function() {};
```

Result:

```text
TypeError
```

---

# 15. Key Takeaways

* **Scope** determines where a variable can be accessed.
* **Global Scope** is accessible throughout the program.
* **Function Scope** is associated with functions.
* **Block Scope** applies to `let` and `const`.
* `var` is function-scoped.
* `let` and `const` are block-scoped.
* JavaScript processes declarations before execution.
* `var` can be accessed before declaration and returns `undefined`.
* `let` and `const` are inaccessible during the **Temporal Dead Zone**.
* Function declarations are hoisted.
* Function expressions and arrow functions are not callable before initialization.
* **Scope Chain** allows JavaScript to search outer scopes for variables.
* **Shadowing** occurs when an inner scope declares a variable with the same name as an outer scope variable.

---

# 16. Practice Questions

### Question 1

What is the output?

```javascript
console.log(a);

var a = 10;
```

<details>
<summary>Answer</summary>

```text
undefined
```

</details>

---

### Question 2

What happens here?

```javascript
console.log(a);

let a = 10;
```

<details>
<summary>Answer</summary>

```text
ReferenceError
```

Because `a` is in the Temporal Dead Zone.

</details>

---

### Question 3

What is the output?

```javascript
var x = 10;

function test() {
    var x = 20;
    console.log(x);
}

test();
```

<details>
<summary>Answer</summary>

```text
20
```

The local `x` shadows the global `x`.

</details>

---

### Question 4

What is the output?

```javascript
hello();

function hello() {
    console.log("Hello");
}
```

<details>
<summary>Answer</summary>

```text
Hello
```

Function declarations are hoisted.

</details>

---

# 🔗 Next Topics

After learning Scope and Hoisting, study these topics in this order:

1. **Scope Chain**
2. **Variable Shadowing**
3. **Execution Context**
4. **Call Stack**
5. **Lexical Environment**
6. **Closures**
7. **`this` Keyword**
8. **Call, Apply & Bind**

> **Main Goal:** Understand how JavaScript finds variables, creates execution contexts, and manages memory during program execution.
