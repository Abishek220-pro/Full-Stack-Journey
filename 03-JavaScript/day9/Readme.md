# JavaScript Advanced Concepts

This README covers three important JavaScript topics:

1. **Async/Await & Event Loop**
2. **DOM Manipulation & Event Delegation**
3. **Fetch API & LocalStorage**

---

# 1. Async/Await & Event Loop

## 1.1 Synchronous JavaScript

Synchronous code executes one task at a time, from top to bottom.

```javascript
console.log("First");
console.log("Second");
console.log("Third");
```

Output:

```text
First
Second
Third
```

---

## 1.2 Asynchronous JavaScript

Asynchronous operations allow JavaScript to handle tasks without blocking the execution of other code.

```javascript
console.log("First");

setTimeout(() => {
    console.log("Second");
}, 2000);

console.log("Third");
```

Output:

```text
First
Third
Second
```

---

## 1.3 Promise

A Promise represents the eventual result of an asynchronous operation.

A Promise has three states:

```text
Pending
   ↓
Fulfilled
   OR
Rejected
```

Example:

```javascript
const promise = new Promise((resolve, reject) => {
    resolve("Task completed");
});

promise.then((result) => {
    console.log(result);
});
```

Output:

```text
Task completed
```

---

## 1.4 `async`

The `async` keyword makes a function asynchronous.

An `async` function always returns a Promise.

```javascript
async function greet() {
    return "Hello";
}
```

Using `.then()`:

```javascript
greet().then((message) => {
    console.log(message);
});
```

Output:

```text
Hello
```

---

## 1.5 `await`

The `await` keyword waits for a Promise to settle inside an `async` function.

```javascript
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function fetchData() {
    const result = await getData();

    console.log(result);
}

fetchData();
```

Output after 2 seconds:

```text
Data received
```

### Important

`await` pauses the execution of the current `async` function, not the entire JavaScript program.

---

## 1.6 Error Handling with `try...catch`

Use `try...catch` to handle errors in asynchronous operations.

```javascript
async function fetchData() {
    try {
        const result = await getData();

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

fetchData();
```

Structure:

```javascript
try {
    // Code that may fail
} catch (error) {
    // Handle error
}
```

---

## 1.7 Event Loop

JavaScript is single-threaded. It executes JavaScript code using the Call Stack.

The Event Loop helps JavaScript handle asynchronous operations.

Simplified flow:

```text
JavaScript Code
      ↓
Call Stack
      ↓
Web APIs / Runtime APIs
      ↓
Task Queue / Microtask Queue
      ↓
Event Loop
      ↓
Call Stack
```

Example:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Output:

```text
A
C
B
```

The `setTimeout()` callback does not execute immediately. It waits until the Call Stack is empty and the Event Loop allows it to execute.

---

## 1.8 Microtask Queue

Promises use the Microtask Queue.

Example:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

General execution order:

```text
1. Synchronous Code
2. Microtask Queue
3. Task / Callback Queue
```

Promise callbacks and `async/await` continuations use the microtask mechanism.

---

## 1.9 Async/Await and Event Loop

```javascript
console.log("Start");

async function test() {
    console.log("Inside");

    await Promise.resolve();

    console.log("After Await");
}

test();

console.log("End");
```

Output:

```text
Start
Inside
End
After Await
```

Execution:

```text
Start
   ↓
test()
   ↓
Inside
   ↓
await
   ↓
End
   ↓
Promise resolves
   ↓
After Await
```

---

## Key Points

```text
async
→ Function returns a Promise

await
→ Waits for a Promise inside an async function

Promise
→ Represents a future asynchronous result

Event Loop
→ Manages asynchronous execution

Microtask Queue
→ Handles Promise callbacks and async continuations

Task Queue
→ Handles callbacks such as timers
```

---

# 2. DOM Manipulation & Event Delegation

## 2.1 What is DOM?

DOM stands for **Document Object Model**.

The browser converts HTML into a tree-like structure that JavaScript can access and modify.

Example:

```html
<h1>Hello</h1>
<button>Click Me</button>
```

Simplified DOM:

```text
Document
   ↓
HTML
   ↓
Body
 ├── h1
 └── button
```

JavaScript can use the DOM to:

* Select elements
* Change text
* Change styles
* Change classes
* Change attributes
* Create elements
* Remove elements
* Handle events

---

## 2.2 Selecting Elements

### `getElementById()`

```html
<h1 id="title">Hello World</h1>
```

```javascript
const heading = document.getElementById("title");
```

---

### `querySelector()`

Selects the first matching element.

```javascript
const heading = document.querySelector(".title");
```

Examples:

```javascript
document.querySelector("#title");
document.querySelector(".title");
document.querySelector("h1");
```

---

### `querySelectorAll()`

Selects all matching elements.

```javascript
const paragraphs = document.querySelectorAll("p");
```

---

## 2.3 Changing Text

```html
<h1 id="title">Hello</h1>
```

```javascript
const title = document.getElementById("title");

title.textContent = "Welcome Abishek";
```

`textContent` is used to read or change text.

---

## 2.4 `innerHTML`

Used to read or insert HTML.

```javascript
const container = document.getElementById("container");

container.innerHTML = "<h1>Hello</h1>";
```

Difference:

```javascript
element.textContent = "<h1>Hello</h1>";
```

Displays the HTML as text.

```javascript
element.innerHTML = "<h1>Hello</h1>";
```

Creates an actual `<h1>` element.

Avoid using `innerHTML` with untrusted user input because it can introduce XSS vulnerabilities.

---

## 2.5 Changing CSS

```javascript
const title = document.getElementById("title");

title.style.color = "red";
title.style.fontSize = "40px";
```

CSS:

```css
background-color
```

JavaScript:

```javascript
backgroundColor
```

CSS properties use `kebab-case`, while JavaScript style properties use `camelCase`.

---

## 2.6 `classList`

### Add Class

```javascript
title.classList.add("highlight");
```

### Remove Class

```javascript
title.classList.remove("highlight");
```

### Toggle Class

```javascript
title.classList.toggle("highlight");
```

### Check Class

```javascript
title.classList.contains("highlight");
```

`classList` is useful for:

* Dark mode
* Menus
* Dropdowns
* Show/hide elements
* Active states

---

## 2.7 Attributes

### `setAttribute()`

```javascript
const image = document.getElementById("photo");

image.setAttribute("src", "new.jpg");
```

### `getAttribute()`

```javascript
image.getAttribute("src");
```

### `removeAttribute()`

```javascript
image.removeAttribute("src");
```

---

## 2.8 Creating Elements

```javascript
const paragraph = document.createElement("p");

paragraph.textContent = "This is a new paragraph";

document.body.appendChild(paragraph);
```

Important methods:

```text
createElement()
→ Creates a new element

appendChild()
→ Adds an element to the DOM

remove()
→ Removes an element
```

---

## 2.9 Event Handling

An event is an action performed by the user or browser.

Common events:

```text
click
dblclick
mouseover
keydown
keyup
input
change
submit
```

Example:

```html
<button id="btn">Click Me</button>
```

```javascript
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

---

## 2.10 Event Object

The event object contains information about the event.

```javascript
button.addEventListener("click", (event) => {
    console.log(event);
});
```

---

## 2.11 `event.target`

`event.target` represents the element that actually triggered the event.

```javascript
button.addEventListener("click", (event) => {
    console.log(event.target);
});
```

---

# 3. Event Delegation

## 3.1 What is Event Delegation?

Event Delegation is a technique where you attach one event listener to a parent element instead of adding separate event listeners to every child element.

Example:

```html
<div id="container">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
</div>
```

Instead of:

```javascript
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Clicked");
    });
});
```

Use Event Delegation:

```javascript
const container = document.getElementById("container");

container.addEventListener("click", (event) => {
    console.log(event.target);
});
```

One parent listener can handle events from multiple child elements.

---

## 3.2 Event Bubbling

When an event occurs on a child element, it can bubble up through its parent elements.

Example:

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

Event flow:

```text
Button
   ↓
Parent Div
   ↓
Body
   ↓
HTML
   ↓
Document
```

This is called **Event Bubbling**.

Event Delegation uses Event Bubbling.

---

## 3.3 `target` vs `currentTarget`

```javascript
container.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
});
```

### `event.target`

The element that actually triggered the event.

### `event.currentTarget`

The element where the event listener is attached.

Example:

```text
<div id="container">
    <button>Click</button>
</div>
```

If the button is clicked:

```text
event.target
→ button

event.currentTarget
→ container
```

Remember:

```text
target
→ Actual clicked element

currentTarget
→ Element containing the event listener
```

---

## 3.4 Event Delegation with `matches()`

```javascript
const todoList = document.getElementById("todoList");

todoList.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        event.target.remove();
    }
});
```

Now clicking an `<li>` removes it.

---

# 4. Fetch API & LocalStorage

## 4.1 Fetch API

The Fetch API is used to make HTTP requests from JavaScript.

It is commonly used to communicate with:

* REST APIs
* Backend servers
* Databases through backend APIs
* External services

Basic syntax:

```javascript
fetch(url)
```

`fetch()` returns a Promise.

---

## 4.2 GET Request

Example:

```javascript
async function getUsers() {
    try {
        const response = await fetch("https://example.com/users");

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers();
```

Flow:

```text
fetch()
   ↓
HTTP Request
   ↓
Response
   ↓
response.json()
   ↓
JavaScript Object
```

---

## 4.3 Understanding `response.json()`

The response from an API is not immediately available as a JavaScript object.

You need:

```javascript
const data = await response.json();
```

Example:

```javascript
const response = await fetch(url);

const data = await response.json();

console.log(data);
```

`response.json()` also returns a Promise, so we use `await`.

---

## 4.4 Checking HTTP Errors

`fetch()` does not automatically reject the Promise for HTTP errors such as `404` or `500`.

Use `response.ok`:

```javascript
async function getData() {
    try {
        const response = await fetch("https://example.com/data");

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
```

---

## 4.5 POST Request

A POST request is commonly used to send data to a server.

```javascript
async function createUser() {
    try {
        const response = await fetch("https://example.com/users", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Abishek",
                age: 20
            })
        });

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
```

Important:

```text
method
→ HTTP method

headers
→ Information about the request

body
→ Data sent to the server

JSON.stringify()
→ Converts JavaScript object to JSON string
```

---

# 5. LocalStorage

`localStorage` allows you to store data in the browser.

Data stored in LocalStorage remains available even after:

* Page refresh
* Browser restart

LocalStorage stores data as **strings**.

---

## 5.1 Store Data

```javascript
localStorage.setItem("username", "Abishek");
```

---

## 5.2 Get Data

```javascript
const username = localStorage.getItem("username");

console.log(username);
```

Output:

```text
Abishek
```

---

## 5.3 Remove One Item

```javascript
localStorage.removeItem("username");
```

---

## 5.4 Remove Everything

```javascript
localStorage.clear();
```

---

# 6. Storing Objects in LocalStorage

LocalStorage only stores strings.

This will not work as expected:

```javascript
const user = {
    name: "Abishek",
    age: 20
};

localStorage.setItem("user", user);
```

Use `JSON.stringify()`:

```javascript
const user = {
    name: "Abishek",
    age: 20
};

localStorage.setItem("user", JSON.stringify(user));
```

Retrieve it using `JSON.parse()`:

```javascript
const data = localStorage.getItem("user");

const user = JSON.parse(data);

console.log(user.name);
```

Flow:

```text
JavaScript Object
      ↓
JSON.stringify()
      ↓
String
      ↓
LocalStorage
      ↓
JSON.parse()
      ↓
JavaScript Object
```

---

# 7. Complete Example: Todo List + LocalStorage

HTML:

```html
<input id="taskInput" type="text">

<button id="addButton">Add Task</button>

<ul id="taskList"></ul>
```

JavaScript:

```javascript
const input = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.textContent = task;

        li.dataset.index = index;

        taskList.appendChild(li);
    });
}

addButton.addEventListener("click", () => {
    const task = input.value.trim();

    if (task === "") {
        return;
    }

    tasks.push(task);

    saveTasks();

    displayTasks();

    input.value = "";
});

taskList.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        const index = event.target.dataset.index;

        tasks.splice(index, 1);

        saveTasks();

        displayTasks();
    }
});

displayTasks();
```

This project combines:

```text
DOM Manipulation
      ↓
Event Handling
      ↓
Event Delegation
      ↓
LocalStorage
      ↓
JSON.stringify()
      ↓
JSON.parse()
```

---

# 8. Complete Concept Flow

```text
ASYNC JAVASCRIPT
│
├── Synchronous
├── Asynchronous
├── Promise
├── async
├── await
├── try...catch
├── Call Stack
├── Event Loop
├── Microtask Queue
└── Task Queue


DOM
│
├── getElementById()
├── querySelector()
├── querySelectorAll()
├── textContent
├── innerHTML
├── style
├── classList
├── Attributes
├── createElement()
├── appendChild()
└── remove()


EVENTS
│
├── addEventListener()
├── Event Object
├── event.target
├── event.currentTarget
├── Event Bubbling
└── Event Delegation


FETCH API
│
├── GET
├── POST
├── response.json()
├── response.ok
├── Headers
├── Body
└── Error Handling


LOCALSTORAGE
│
├── setItem()
├── getItem()
├── removeItem()
├── clear()
├── JSON.stringify()
└── JSON.parse()
```

# Quick Revision

| Topic            | Important Concepts                                  |
| ---------------- | --------------------------------------------------- |
| Async/Await      | `async`, `await`, Promise, `try...catch`            |
| Event Loop       | Call Stack, Event Loop, Microtask Queue, Task Queue |
| DOM              | Select, Change, Create, Remove                      |
| Events           | `addEventListener()`, Event Object                  |
| Event Delegation | Event Bubbling, `target`, `currentTarget`           |
| Fetch API        | GET, POST, `response.json()`, `response.ok`         |
| LocalStorage     | `setItem()`, `getItem()`, `removeItem()`, `clear()` |
| JSON             | `JSON.stringify()`, `JSON.parse()`                  |

# Final Learning Order

```text
1. Promise
      ↓
2. async / await
      ↓
3. Event Loop
      ↓
4. DOM Manipulation
      ↓
5. Events
      ↓
6. Event Bubbling
      ↓
7. Event Delegation
      ↓
8. Fetch API
      ↓
9. LocalStorage
      ↓
10. Combine Everything
      ↓
11. Build a Todo Application
```
