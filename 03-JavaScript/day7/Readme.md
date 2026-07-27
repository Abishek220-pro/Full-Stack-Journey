# JavaScript – Day 21, Day 22 & Day 23

## 📚 Topics Covered

* Closures
* Day 22: `==` vs `===` & Type Coercion
* Day 23: Arrow Functions & Rest/Default Parameters

---

# 1. Closures

## Simple Explanation

A **closure** happens when an inner function **remembers and can access variables from its outer function**, even after the outer function has finished running.

### Example

```javascript
function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
```

### How It Works

```text
counter()
    ↓
count = 0
    ↓
Returns inner function
    ↓
increment remembers count
    ↓
increment() → 1
increment() → 2
increment() → 3
```

The inner function remembers the `count` variable.

### Key Point

> **Closure = A function that remembers variables from its outer function.**

---

# 2. Day 22: `==` vs `===` & Type Coercion

## `==` Loose Equality

`==` compares two values after JavaScript may convert their types.

```javascript
console.log(5 == "5");
```

Output:

```text
true
```

Why?

JavaScript converts `"5"` (string) into `5` (number) before comparing.

---

## `===` Strict Equality

`===` compares both:

1. Value
2. Data type

```javascript
console.log(5 === "5");
```

Output:

```text
false
```

Why?

```text
5    → Number
"5"  → String
```

The values look similar, but their types are different.

---

## Difference

| Operator | Checks Value | Checks Type | Example     | Result  |
| -------- | ------------ | ----------- | ----------- | ------- |
| `==`     | Yes          | No          | `5 == "5"`  | `true`  |
| `===`    | Yes          | Yes         | `5 === "5"` | `false` |

### Best Practice

Use `===` in most cases because it avoids unexpected type conversions.

---

## Type Coercion

**Type coercion** means JavaScript automatically converts one data type into another.

### Example

```javascript
let number = 10;
let text = "5";

console.log(number + text);
```

Output:

```text
105
```

Why?

The `+` operator with a string causes JavaScript to convert the number into a string.

```text
10 + "5"
   ↓
"10" + "5"
   ↓
"105"
```

Another example:

```javascript
console.log(10 == "10");
```

Output:

```text
true
```

JavaScript converts `"10"` into a number before comparing.

### Key Point

> **Type coercion = JavaScript automatically converts one data type into another.**

---

# 3. Day 23: Arrow Functions

## What is an Arrow Function?

An **arrow function** is a shorter way to write a function in JavaScript.

### Normal Function

```javascript
function add(a, b) {
    return a + b;
}
```

### Arrow Function

```javascript
const add = (a, b) => {
    return a + b;
};
```

Both functions do the same job.

```javascript
console.log(add(10, 20));
```

Output:

```text
30
```

---

## Short Arrow Function

If the function has only one statement, we can make it shorter.

### Normal Arrow Function

```javascript
const multiply = (a, b) => {
    return a * b;
};
```

### Short Version

```javascript
const multiply = (a, b) => a * b;
```

Example:

```javascript
console.log(multiply(3, 5));
```

Output:

```text
15
```

---

## One Parameter

If there is only one parameter, parentheses can be removed.

```javascript
const square = number => number * number;

console.log(square(5));
```

Output:

```text
25
```

### Key Point

> **Arrow function = A shorter and cleaner way to write a function.**

---

# 4. Default Parameters

A **default parameter** gives a parameter a default value if no value is provided.

### Example

```javascript
function greet(name = "Abishek") {
    return "Hello " + name;
}

console.log(greet());
console.log(greet("Kumar"));
```

Output:

```text
Hello Abishek
Hello Kumar
```

When no argument is passed:

```javascript
greet()
```

The default value `"Abishek"` is used.

When a value is passed:

```javascript
greet("Kumar")
```

The provided value `"Kumar"` is used instead.

### Arrow Function with Default Parameter

```javascript
const greet = (name = "Abishek") => {
    return "Hello " + name;
};

console.log(greet());
```

Output:

```text
Hello Abishek
```

---

# 5. Rest Parameters

The **rest parameter** allows a function to accept any number of arguments.

It uses three dots:

```javascript
...
```

### Example

```javascript
function add(...numbers) {
    return numbers;
}

console.log(add(10, 20, 30));
```

Output:

```text
[10, 20, 30]
```

The `...numbers` collects all the arguments into an array.

### Example with Calculation

```javascript
function add(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(add(10, 20, 30));
```

Output:

```text
60
```

Here:

```text
10 + 20 + 30 = 60
```

### Rest Parameter with Arrow Function

```javascript
const add = (...numbers) => {
    return numbers.reduce((total, number) => total + number, 0);
};

console.log(add(10, 20, 30, 40));
```

Output:

```text
100
```

---

# 🧠 Quick Revision

## Closures

> A function remembers variables from its outer function.

```javascript
function counter() {
    let count = 0;

    return () => ++count;
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
```

---

## `==` vs `===`

```javascript
5 == "5"   // true
5 === "5"  // false
```

* `==` → Loose equality
* `===` → Strict equality

---

## Type Coercion

JavaScript automatically converts one type into another.

```javascript
10 == "10" // true
```

---

## Arrow Function

Shorter function syntax:

```javascript
const add = (a, b) => a + b;
```

---

## Default Parameter

Provides a default value:

```javascript
const greet = (name = "Abishek") => `Hello ${name}`;
```

---

## Rest Parameter

Collects multiple arguments into an array:

```javascript
const add = (...numbers) => {
    // numbers is an array
};
```

---

# 🎯 Summary

| Topic              | Main Idea                                 |
| ------------------ | ----------------------------------------- |
| Closures           | Function remembers outer variables        |
| `==`               | Compares values with type conversion      |
| `===`              | Compares value and type                   |
| Type Coercion      | Automatic type conversion                 |
| Arrow Functions    | Shorter function syntax                   |
| Default Parameters | Gives parameters default values           |
| Rest Parameters    | Collects multiple arguments into an array |

## 🚀 Practice

Try creating:

1. A counter using a closure.
2. Examples showing the difference between `==` and `===`.
3. A function that demonstrates type coercion.
4. An arrow function to calculate the square of a number.
5. An arrow function with a default parameter.
6. A function using rest parameters to find the sum of any number of values.
