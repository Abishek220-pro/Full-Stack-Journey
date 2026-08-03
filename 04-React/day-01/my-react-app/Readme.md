# React — Day 1: Component Model, Virtual DOM & Vite Setup

## 📚 Topics Covered

* Component Model
* Virtual DOM
* Vite Setup

---

# 1. Vite Setup

## What is Vite?

Vite is a modern frontend build tool used to create and run React applications quickly.

It provides:

* Fast development server
* Fast Hot Module Replacement (HMR)
* Modern JavaScript support
* Production build tools

## Create a React Project

```bash
npm create vite@latest
```

Select:

```text
Framework → React
Variant → JavaScript
```

Then install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Important Project Structure

```text
my-react-app/
│
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── UserCard.jsx
│   │   └── Counter.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── ...
```

### Important Files

| File             | Purpose                              |
| ---------------- | ------------------------------------ |
| `index.html`     | Main HTML page                       |
| `main.jsx`       | Entry point of the React application |
| `App.jsx`        | Main/root React component            |
| `package.json`   | Project dependencies and scripts     |
| `vite.config.js` | Vite configuration                   |
| `public/`        | Static files                         |
| `src/`           | Main source code                     |
| `node_modules/`  | Installed packages                   |

---

# 2. React Application Entry Point

## `index.html`

Inside `index.html`, React has a root container:

```html
<div id="root"></div>
```

This is the container where React renders the application.

Think of it as:

```text
index.html
    ↓
<div id="root"></div>
    ↓
React Application
```

---

## `main.jsx`

Example:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### How it works

```text
index.html
    ↓
<div id="root"></div>
    ↓
document.getElementById("root")
    ↓
createRoot()
    ↓
<App />
    ↓
App.jsx
    ↓
Browser
```

### Important Parts

#### Import `App`

```jsx
import App from './App.jsx'
```

This imports the `App` component.

#### Find the root element

```jsx
document.getElementById('root')
```

This finds:

```html
<div id="root"></div>
```

#### Create React Root

```jsx
createRoot(...)
```

This creates the React root.

#### Render App

```jsx
<App />
```

This renders the `App` component.

---

# 3. Component Model

## What is a Component?

A React component is a reusable piece of UI.

Example:

```jsx
function Header() {
  return <h1>My Website</h1>;
}

export default Header;
```

Here:

```text
Header
```

is a React component.

---

## Create a Component

Example:

### `Header.jsx`

```jsx
function Header() {
  return <h1>My Website</h1>;
}

export default Header;
```

The component returns:

```html
<h1>My Website</h1>
```

---

## Export a Component

```jsx
export default Header;
```

This allows another file to use the component.

---

## Import a Component

In `App.jsx`:

```jsx
import Header from "./components/Header";
```

Now `App.jsx` can use the `Header` component.

---

## Render a Component

Importing alone does not display the component.

You must render it:

```jsx
<Header />
```

Example:

```jsx
function App() {
  return (
    <>
      <Header />
    </>
  );
}
```

### Flow

```text
Header.jsx
    ↓
export default Header
    ↓
App.jsx
    ↓
import Header
    ↓
<Header />
    ↓
Browser
```

---

# 4. Creating Multiple Components

A React application can contain many components.

Example:

```text
App
├── Header
├── UserCard
└── Counter
```

### Header Component

```jsx
function Header() {
  return <h1>My Website</h1>;
}

export default Header;
```

### UserCard Component

```jsx
function UserCard() {
  return (
    <div>
      <h2>Abishek</h2>
      <p>Full Stack Developer</p>
    </div>
  );
}

export default UserCard;
```

### Counter Component

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
```

---

# 5. Combining Multiple Components

`App.jsx` can combine multiple components.

```jsx
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Header />
      <UserCard />
      <Counter />
      <h1>Hello World</h1>
    </>
  );
}

export default App;
```

The component hierarchy is:

```text
App
│
├── Header
│
├── UserCard
│
└── Counter
```

Here:

```text
App
```

is the parent component.

```text
Header
UserCard
Counter
```

are child components.

---

# 6. Component Hierarchy

React applications are built as a tree of components.

Example:

```text
App
│
├── Header
│
├── Main
│   ├── UserCard
│   └── Counter
│
└── Footer
```

This makes large applications easier to organize and maintain.

Instead of putting everything into one component, we break the UI into smaller components.

---

# 7. Virtual DOM

## What is the Real DOM?

DOM means:

> Document Object Model

The browser converts HTML into a DOM tree.

Example:

```html
<div id="root">
  <h1>Hello World</h1>
</div>
```

Conceptually:

```text
DOM
│
└── div#root
    │
    └── h1
        │
        └── Hello World
```

The Real DOM is the actual DOM structure managed by the browser.

---

# 8. What is Virtual DOM?

The Virtual DOM is an in-memory representation of the UI that React uses during its rendering and reconciliation process.

Conceptually:

```text
React UI
    ↓
Virtual DOM representation
    ↓
React rendering/reconciliation
    ↓
Necessary DOM updates
    ↓
Real DOM
    ↓
Browser
```

The Virtual DOM is not the actual browser DOM.

```text
Virtual DOM
    ↓
React's in-memory UI representation

Real DOM
    ↓
Actual DOM managed by the browser
```

---

# 9. State Change and UI Update

Our Counter component has:

```jsx
const [count, setCount] = useState(0);
```

Initially:

```text
count = 0
```

When we click:

```jsx
setCount(count + 1);
```

The state changes:

```text
0 → 1 → 2 → 3
```

React responds to the state update by rendering the updated UI.

Conceptually:

```text
User clicks button
        ↓
setCount()
        ↓
State changes
        ↓
React re-renders
        ↓
New UI result
        ↓
Reconciliation
        ↓
Necessary DOM updates
        ↓
Browser displays new UI
```

---

# 10. Re-rendering

A re-render means React runs the component again to produce the updated UI result.

Example:

Before:

```text
Count: 0
```

After state change:

```text
Count: 1
```

The component produces the updated UI.

---

# 11. Reconciliation

Reconciliation is the process where React compares the previous rendered result with the new rendered result and determines what updates are necessary.

Example:

### Previous result

```text
Count: 0
```

### New result

```text
Count: 1
```

React determines that the displayed count changed.

Conceptually:

```text
Old UI result
Count: 0
     ↓
Compare
     ↓
New UI result
Count: 1
     ↓
Determine necessary update
     ↓
Update DOM
```

---

# 12. Complete React Update Flow

Remember this flow:

```text
User Interaction
      ↓
State Change
      ↓
React Re-render
      ↓
New UI Result
      ↓
Reconciliation
      ↓
Necessary DOM Update
      ↓
Browser Screen
```

Example:

```text
Click Increase
      ↓
setCount(count + 1)
      ↓
0 → 1
      ↓
Counter re-renders
      ↓
React reconciles old/new UI
      ↓
DOM is updated
      ↓
Browser shows Count: 1
```

---

# 13. `useState` in the Counter

We imported:

```jsx
import { useState } from "react";
```

`useState` is a React Hook used to create state in a component.

```jsx
const [count, setCount] = useState(0);
```

This gives us:

```text
count
    ↓
Current state value

setCount
    ↓
Function used to update the state
```

Example:

```jsx
setCount(count + 1);
```

This changes the state and causes React to update the UI.

---

# 14. Final Component Model Example

Our final application structure:

```text
main.jsx
    ↓
<App />
    ↓
App.jsx
    │
    ├── <Header />
    │       ↓
    │   Header.jsx
    │
    ├── <UserCard />
    │       ↓
    │   UserCard.jsx
    │
    └── <Counter />
            ↓
        Counter.jsx
```

---

# 🎯 Learning Progress

## Vite Setup

* [x] Create React project using Vite
* [x] Understand project structure
* [x] Understand `src`
* [x] Understand `App.jsx`
* [x] Understand `main.jsx`
* [x] Understand `index.html`
* [x] Understand `createRoot()`
* [x] Understand `root` element
* [x] Run `npm run dev`
* [x] Clean the initial project

## Component Model

* [x] Understand components
* [x] Create components
* [x] Export components
* [x] Import components
* [x] Render components
* [x] Create multiple components
* [x] Combine components
* [x] Parent and child components
* [x] Component hierarchy

## Virtual DOM

* [x] Understand Real DOM
* [x] Understand Virtual DOM
* [x] Understand state changes
* [x] Understand re-rendering
* [x] Understand reconciliation
* [x] Understand DOM updates
* [x] Understand the React UI update flow

---

# ✅ Completed Topics

```text
Component Model  → COMPLETE ✅
Virtual DOM      → COMPLETE ✅
Vite Setup       → COMPLETE ✅
```

# 🚀 Next Topic

## JSX Fundamentals

Next, learn:

* JSX syntax
* JSX expressions `{ }`
* JavaScript inside JSX
* JSX attributes
* `className`
* Inline styles
* JSX rules
* Multiple elements
* Fragments `<> </>`
* Conditional rendering basics
* Lists and keys basics
