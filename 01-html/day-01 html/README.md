# 🌐 Day 1 — HTML Structure & Browser Understanding

> Learn how browsers transform HTML into visible web pages and why semantic HTML is essential for modern web development.

---

## 🎯 Learning Goals

By the end of Day 1, you should be able to:

* Understand what the DOM is.
* Explain how browsers render web pages.
* Understand Semantic HTML elements.
* Build a proper page structure using semantic tags.
* Explain why Semantic HTML improves SEO and Accessibility.

---

# 📖 Module 1 — DOM Tree & Browser Rendering Process

## What You'll Learn

* What is the DOM?
* HTML Parsing
* DOM Tree Creation
* CSS Parsing
* CSSOM Creation
* Render Tree
* Layout (Reflow)
* Paint
* Composite
* Browser Rendering Pipeline

---

## Browser Rendering Pipeline

```text
HTML
 ↓
HTML Parser
 ↓
DOM Tree
 ↓
CSS Parser
 ↓
CSSOM Tree
 ↓
Render Tree
 ↓
Layout (Reflow)
 ↓
Paint
 ↓
Composite
 ↓
Screen
```

---

## Key Concepts

### DOM

**Document Object Model**

A tree representation of all HTML elements.

```html
<body>
  <h1>Hello</h1>
  <p>World</p>
</body>
```

```text
Document
└── body
    ├── h1
    └── p
```

---

### CSSOM

**CSS Object Model**

A tree representation of all CSS rules.

```css
h1 {
  color: red;
}
```

```text
CSSOM
└── h1
     └── color: red
```

---

### Render Tree

Combination of:

```text
DOM Tree
      +
CSSOM Tree
      =
Render Tree
```

Only visible elements are included.

---

### Layout (Reflow)

Browser calculates:

* Width
* Height
* Position
* Margin
* Padding

---

### Paint

Browser draws:

* Text
* Colors
* Borders
* Images
* Shadows

---

### Composite

Browser combines layers and displays the final page on screen.

---

## Important Comparisons

| Concept     | Description                    |
| ----------- | ------------------------------ |
| DOM         | Structure of HTML              |
| CSSOM       | Structure of CSS               |
| Render Tree | DOM + CSSOM                    |
| Layout      | Calculates positions and sizes |
| Paint       | Draws pixels                   |
| Composite   | Combines layers                |

---

# 📖 Module 2 — Semantic HTML Elements

## What is Semantic HTML?

Semantic HTML provides **meaning** to content rather than simply defining appearance.

Instead of:

```html
<div>
```

Use:

```html
<header>
<nav>
<main>
```

This makes your code easier to understand for:

* Browsers
* Search Engines
* Screen Readers
* Developers

---

## Core Semantic Elements

### `<header>`

Represents the introductory section of a page.

```html
<header>
  My Portfolio
</header>
```

---

### `<nav>`

Contains navigation links.

```html
<nav>
  Home
  About
  Contact
</nav>
```

---

### `<main>`

Contains the primary content.

```html
<main>
  Main Content
</main>
```

---

### `<section>`

Groups related content together.

```html
<section>
  Skills
</section>
```

---

### `<article>`

Represents independent content.

```html
<article>
  Blog Post
</article>
```

---

### `<aside>`

Contains related or secondary information.

```html
<aside>
  Related Articles
</aside>
```

---

### `<footer>`

Represents the bottom section of a page.

```html
<footer>
  Copyright © 2026
</footer>
```

---

## Complete Semantic Structure

```text
<header>
    ↓
<nav>
    ↓
<main>
 ├── <section>
 │       └── <article>
 │
 └── <aside>
    ↓
<footer>
```

---

## Memory Trick

```text
Top     → Header
Menu    → Nav
Content → Main
Group   → Section
Post    → Article
Side    → Aside
Bottom  → Footer
```

---

# 📖 Module 3 — Why Semantic HTML Matters

## 1️⃣ SEO Benefits

Semantic HTML helps search engines understand page structure.

Example:

```html
<article>
  React Tutorial
</article>
```

Search engines understand:

```text
This is important content.
```

---

### SEO Advantages

✅ Better Crawling

✅ Better Indexing

✅ Better Content Understanding

✅ Better Search Visibility

✅ Better Website Structure

---

## SEO Flow

```text
Semantic HTML
       ↓
Clear Structure
       ↓
Search Engine Understanding
       ↓
Better SEO
```

---

# 2️⃣ Accessibility Benefits

Semantic HTML improves support for assistive technologies.

---

## Without Semantic HTML

```html
<div>Home</div>
<div>About</div>
<div>Contact</div>
```

Screen readers only read text.

```text
Home
About
Contact
```

No context is provided.

---

## With Semantic HTML

```html
<nav>
  Home
  About
  Contact
</nav>
```

Screen readers understand:

```text
Navigation Region
```

Users instantly know the purpose of the content.

---

## Accessibility Tree

```text
HTML
 ↓
DOM Tree
 ↓
Accessibility Tree
 ↓
Screen Reader
```

---

## Landmark Regions

Semantic elements create landmarks.

```text
Header
Navigation
Main Content
Sidebar
Footer
```

Users can jump directly between these regions.

---

## Accessibility Advantages

✅ Better Screen Reader Support

✅ Better Navigation

✅ Better User Experience

✅ Improved Accessibility Compliance

---

# 📝 Quick Revision

## Browser Rendering

```text
HTML
 ↓
DOM
 ↓
CSSOM
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
 ↓
Composite
```

---

## Semantic Elements

```text
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

---

## Why Semantics Matter

```text
Semantic HTML
       ↓
Meaning
       ↓
SEO + Accessibility
```

#

##
