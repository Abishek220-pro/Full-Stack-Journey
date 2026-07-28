# JavaScript: `this` Keyword, Classes & Promises

This README covers three important JavaScript concepts:

1. `this` Keyword
2. Classes (ES6+)
3. Promises

---

# 1. `this` Keyword

The `this` keyword refers to the object that is currently calling the function.

## Example

```javascript
const person = {
    name: "Abishek",

    hello: function() {
        console.log(`Hi, I am ${this.name}`);
    }
};

person.hello();
```

### Output

```text
Hi, I am Abishek
```

Here:

```javascript
this.name
```

refers to:

```javascript
person.name
```

Because `person` is calling the `hello()` method.

---

## `this` in Object Methods

```javascript
const person = {
    name: "Abishek",
    age: 20,

    introduce() {
        console.log(`My name is ${this.name}`);
        console.log(`My age is ${this.age}`);
    }
};

person.introduce();
```

Output:

```text
My name is Abishek
My age is 20
```

---

## `this` and Arrow Functions

Arrow functions do not have their own `this`.

### ❌ Avoid this for object methods when you need `this`

```javascript
const person = {
    name: "Abishek",

    hello: () => {
        console.log(this.name);
    }
};

person.hello();
```

This does not refer to the `person` object.

### ✅ Use a regular method

```javascript
const person = {
    name: "Abishek",

    hello() {
        console.log(this.name);
    }
};

person.hello();
```

### Important Rule

```text
Regular function/method
        ↓
this depends on how the function is called

Arrow function
        ↓
Does not have its own this
        ↓
Gets this from the surrounding scope
```

---

# 2. Classes (ES6+)

A class is a blueprint for creating objects.

```text
Class
  ↓
Blueprint
  ↓
Objects
```

## Creating a Class

```javascript
class Student {

}
```

---

## Constructor

The `constructor()` method runs automatically when a new object is created.

```javascript
class Student {

    constructor() {
        console.log("I am a student of MEC");
    }

}

const student1 = new Student();
```

Output:

```text
I am a student of MEC
```

The `new` keyword creates a new object.

---

## Class with Properties

```javascript
class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

const student1 = new Student("Abishek", 20);

console.log(student1.name);
console.log(student1.age);
```

Output:

```text
Abishek
20
```

### How it works

```javascript
const student1 = new Student("Abishek", 20);
```

The constructor receives:

```text
name = "Abishek"
age  = 20
```

Then:

```javascript
this.name = name;
this.age = age;
```

stores those values inside the new object.

---

## Class Methods

Classes can contain methods.

```javascript
class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }

}

const student1 = new Student("Abishek", 20);

student1.introduce();
```

Output:

```text
Hi, I am Abishek
I am 20 years old
```

---

## Creating Multiple Objects

One class can create many objects.

```javascript
class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}`);
    }

}

const student1 = new Student("Abishek", 20);
const student2 = new Student("Hari", 21);

student1.introduce();
student2.introduce();
```

Output:

```text
Hi, I am Abishek
Hi, I am Hari
```

### Remember

```text
class       → Blueprint
constructor → Initializes object data
this        → Refers to the current object
new         → Creates a new object
method      → Defines object behavior
```

---

# 3. Promises

A Promise represents the eventual result of an asynchronous operation.

Promises are commonly used for:

* API requests
* Fetching data
* Database operations
* File operations
* Other asynchronous tasks

A Promise has three states:

```text
Pending
   ↓
   ├── Fulfilled (Success)
   │
   └── Rejected (Failure)
```

---

## Creating a Promise

The basic syntax is:

```javascript
const myPromise = new Promise((resolve, reject) => {

});
```

There are two important functions:

```text
resolve()
    ↓
Success

reject()
    ↓
Failure
```

---

## Example

```javascript
const mypromise = new Promise((resolve, reject) => {

    let a = 10;

    if (a % 2 == 0) {
        resolve("Operation success");
    } else {
        reject("Operation failed");
    }

});
```

Here:

```javascript
a % 2 == 0
```

checks whether the number is even.

Since `10` is even:

```javascript
resolve("Operation success");
```

is executed.

---

## Handling Success with `.then()`

The `.then()` method handles a successful Promise.

```javascript
mypromise.then((result) => {
    console.log(result);
});
```

Output:

```text
Operation success
```

---

## Handling Failure with `.catch()`

The `.catch()` method handles a rejected Promise.

```javascript
mypromise.catch((error) => {
    console.log(error);
});
```

---

## Using `.then()` and `.catch()` Together

```javascript
const mypromise = new Promise((resolve, reject) => {

    let a = 10;

    if (a % 2 == 0) {
        resolve("Operation success");
    } else {
        reject("Operation failed");
    }

});

mypromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

Output:

```text
Operation success
```

If `a` is changed to `11`:

```javascript
let a = 11;
```

The output will be:

```text
Operation failed
```

---

# Promise Flow

```text
new Promise()
      ↓
  Operation
      ↓
 ┌────┴────┐
 ↓         ↓
resolve   reject
 ↓         ↓
.then()  .catch()
 ↓         ↓
Success  Failure
```

---

# Quick Comparison

| Topic       | Main Concept                         |
| ----------- | ------------------------------------ |
| `this`      | Refers to the current object/context |
| Class       | Blueprint for creating objects       |
| Constructor | Initializes object properties        |
| `new`       | Creates a new object                 |
| Promise     | Handles future asynchronous results  |
| `resolve()` | Promise success                      |
| `reject()`  | Promise failure                      |
| `.then()`   | Handles success                      |
| `.catch()`  | Handles errors                       |

---

# Key Takeaways

### `this`

```javascript
this.name
```

Accesses a property of the current object when used in an appropriate method context.

### Class

```javascript
class Student {
    constructor(name) {
        this.name = name;
    }
}

const student = new Student("Abishek");
```

A class provides a blueprint for creating objects.

### Promise

```javascript
const promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

Promises help handle asynchronous operations and their success or failure.

---

# Practice Tasks

## Task 1: `this`

Create an object with:

* `name`
* `age`
* `introduce()` method

Use `this.name` and `this.age`.

---

## Task 2: Classes

Create a `Person` class with:

* `name`
* `age`
* `work`
* `introduce()` method

Create two objects from the class.

---

## Task 3: Promises

Create a Promise that checks a student's mark.

```text
Mark >= 50 → "Pass"
Mark < 50  → "Fail"
```

Use:

```javascript
resolve()
reject()
.then()
.catch()
```

---

# Learning Flow

```text
JavaScript Functions
       ↓
Objects
       ↓
this Keyword
       ↓
Classes
       ↓
Objects with Classes
       ↓
Promises
       ↓
.then() and .catch()
       ↓
async / await
       ↓
fetch() and APIs
```
