#   Arrays & Objects

Today I learned about **Arrays and Objects in JavaScript**.

## 📌 Topics Covered

* Arrays
* Array Indexing
* Array Methods
* Objects
* Object Properties
* Dot Notation
* Bracket Notation
* Adding Object Properties
* Deleting Object Properties
* Object Methods
* `this` Keyword
* Array of Objects

---

## 1. Arrays

An array is used to store multiple values in a single variable.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
```

Array indexing starts from `0`.

```text
Index:   0        1         2
Value: Apple    Banana    Mango
```

---

## 2. Common Array Methods

### `push()`

Adds an element to the end of an array.

```javascript
const fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
```

### `pop()`

Removes the last element.

```javascript
fruits.pop();
```

### `unshift()`

Adds an element to the beginning.

```javascript
fruits.unshift("Orange");
```

### `shift()`

Removes the first element.

```javascript
fruits.shift();
```

### `length`

Returns the number of elements.

```javascript
console.log(fruits.length);
```

---

# 3. Objects

An object stores data using **key-value pairs**.

```javascript
const student = {
    name: "Abishek",
    age: 20,
    course: "Cyber Security"
};

console.log(student);
```

---

## 4. Accessing Object Properties

### Dot Notation

```javascript
console.log(student.name);
console.log(student.age);
```

### Bracket Notation

```javascript
console.log(student["name"]);
console.log(student["age"]);
```

---

## 5. Adding a New Property

We can add a new property to an existing object.

```javascript
student.city = "Salem";

console.log(student);
```

---

## 6. Deleting a Property

We can delete an existing property using the `delete` keyword.

```javascript
delete student.city;

console.log(student);
```

---

## 7. Object Methods

An object can contain a function. A function inside an object is called a **method**.

```javascript
const user = {
    name: "Abishek",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

user.greet();
```

### Output

```text
Hello Abishek
```

---

## 8. `this` Keyword

The `this` keyword refers to the current object.

```javascript
const user = {
    name: "Abishek",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

user.greet();
```

Here:

```javascript
this.name
```

refers to:

```javascript
user.name
```

---

# 9. Array of Objects

We can store multiple objects inside an array.

```javascript
const students = [
    {
        name: "Abishek",
        age: 20
    },
    {
        name: "Rahul",
        age: 21
    }
];

console.log(students[0].name);
console.log(students[1].name);
```

### Output

```text
Abishek
Rahul
```

We can access the first student's name using:

```javascript
students[0].name
```

---

# 🧠 Important Learning

Today I learned that:

* Arrays store multiple values.
* Array indexing starts from `0`.
* Objects store data as key-value pairs.
* Object properties can be accessed using dot notation or bracket notation.
* We can add and delete object properties.
* Functions inside objects are called methods.
* The `this` keyword refers to the current object.
* We can create an array containing multiple objects.


