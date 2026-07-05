# CSS Basics: Syntax, Selectors & Specificity

> Beginner-friendly notes for learning CSS.

---

# What is CSS?

**CSS (Cascading Style Sheets)** is used to style HTML.

- HTML creates the structure.
- CSS controls the appearance.

Example:

### HTML

```html
<h1>Hello World</h1>
```

### CSS

```css
h1 {
    color: blue;
    font-size: 40px;
}
```

Result:
- Text color becomes blue.
- Font size becomes 40px.

---

# CSS Syntax

Every CSS rule has three parts:

```css
selector {
    property: value;
}
```

Example:

```css
h1 {
    color: red;
}
```

Breakdown:

- **Selector** → `h1`
- **Property** → `color`
- **Value** → `red`

Another example:

```css
p {
    font-size: 20px;
}
```

---

# Ways to Add CSS

## 1. Inline CSS

```html
<h1 style="color:red;">Hello</h1>
```

- Used for quick testing.
- Not recommended for real projects.

---

## 2. Internal CSS

```html
<head>
    <style>
        h1 {
            color: red;
        }
    </style>
</head>
```

- CSS is written inside the HTML file.

---

## 3. External CSS (Recommended)

### HTML

```html
<link rel="stylesheet" href="style.css">
```

### style.css

```css
h1 {
    color: red;
}
```

Advantages:
- Keeps HTML clean.
- One CSS file can style multiple pages.
- Easier to maintain.

---

# CSS Selectors

Selectors tell CSS which HTML elements should be styled.

---

# 1. Element Selector

Targets every element with the specified HTML tag.

### HTML

```html
<h1>Heading One</h1>
<h1>Heading Two</h1>
<p>Hello</p>
```

### CSS

```css
h1 {
    color: blue;
}
```

Output:
- Both headings become blue.
- Paragraph is unchanged.

Use when:
- You want to style every element of the same type.

---

# 2. Class Selector

A class starts with a **dot (`.`)**.

### HTML

```html
<h1 class="title">Hello</h1>
<p class="title">Welcome</p>
```

### CSS

```css
.title {
    color: green;
}
```

Output:
- Both elements become green.

A class can be reused many times.

Example:

```html
<div class="box"></div>
<p class="box"></p>
<button class="box"></button>
```

All elements receive the same styles.

Use when:
- Multiple elements need the same styling.

---

# 3. ID Selector

An ID starts with a **hash (`#`)**.

### HTML

```html
<h1 id="logo">My Website</h1>
```

### CSS

```css
#logo {
    color: red;
}
```

An ID should be unique.

Correct:

```html
<h1 id="logo"></h1>
```

Incorrect:

```html
<h1 id="logo"></h1>
<p id="logo"></p>
```

Use when:
- Styling or identifying one unique element.

---

# 4. Group Selector

Style multiple selectors together.

Instead of:

```css
h1 {
    color: red;
}

p {
    color: red;
}

button {
    color: red;
}
```

Write:

```css
h1,
p,
button {
    color: red;
}
```

Benefits:
- Less repetition.
- Cleaner code.

---

# Selector Comparison

| Selector | Syntax | Example | Usage |
|----------|--------|---------|-------|
| Element | `h1` | `h1 {}` | Styles all `<h1>` elements |
| Class | `.title` | `.title {}` | Reusable styles |
| ID | `#logo` | `#logo {}` | One unique element |
| Group | `,` | `h1, p {}` | Style multiple selectors |

---

# When to Use Each Selector

## Use Element Selector

```css
button {
    font-size: 18px;
}
```

When every button should have the same style.

---

## Use Class Selector

```html
<button class="btn">Login</button>
<button class="btn">Signup</button>
<button class="btn">Logout</button>
```

```css
.btn {
    background: blue;
    color: white;
}
```

Reason:
- Many elements share the same style.

---

## Use ID Selector

```html
<h1 id="logo">Amazon</h1>
```

```css
#logo {
    color: orange;
}
```

Reason:
- Only one logo exists on the page.

---

# Class vs ID

| Class | ID |
|--------|----|
| Starts with `.` | Starts with `#` |
| Can be reused | Must be unique |
| Used for groups of elements | Used for one element |
| Most commonly used | Used less often |

**Rule of Thumb**

- Reusable style → **Class**
- Unique element → **ID**

---

# CSS Specificity

Specificity decides which CSS rule is applied when multiple rules target the same element.

Priority:

```
Inline Style
    ↓
ID Selector
    ↓
Class Selector
    ↓
Element Selector
```

Remember:

```
Inline > ID > Class > Element
```

---

## Example 1

### HTML

```html
<h1 class="title">Hello</h1>
```

### CSS

```css
h1 {
    color: red;
}

.title {
    color: blue;
}
```

Result:

```
Blue
```

Reason:
- Class has higher priority than an element selector.

---

## Example 2

### HTML

```html
<h1 id="main" class="title">
    Hello
</h1>
```

### CSS

```css
.title {
    color: blue;
}

#main {
    color: red;
}
```

Result:

```
Red
```

Reason:
- ID has higher priority than a class.

---

## Example 3

### HTML

```html
<h1 id="main" style="color: green;">
    Hello
</h1>
```

### CSS

```css
#main {
    color: red;
}
```

Result:

```
Green
```

Reason:
- Inline styles have the highest priority.

---

# Common Beginner Mistake

### Incorrect

HTML

```html
<h1>Hello</h1>
```

CSS

```css
.h1 {
    color: red;
}
```

Reason:
- `.h1` targets a class named `h1`.
- The HTML does not have `class="h1"`.

---

### Correct Option 1

```css
h1 {
    color: red;
}
```

---

### Correct Option 2

HTML

```html
<h1 class="h1">Hello</h1>
```

CSS

```css
.h1 {
    color: red;
}
```

---

# Best Practices

- Use **External CSS** for projects.
- Use **Class selectors** for reusable styles.
- Use **ID selectors** only for unique elements.
- Use **Element selectors** for global styling.
- Avoid repeating CSS by using **Group selectors**.

---

# Quick Revision

✅ CSS styles HTML.

✅ CSS syntax:

```css
selector {
    property: value;
}
```

✅ Element selector:

```css
h1 {}
```

✅ Class selector:

```css
.title {}
```

✅ ID selector:

```css
#logo {}
```

✅ Group selector:

```css
h1, p {}
```

✅ Specificity:

```
Inline > ID > Class > Element
```

---

# Practice Task

## HTML

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1 id="logo">My Website</h1>

<p class="text">Paragraph One</p>
<p class="text">Paragraph Two</p>

<button>Click Me</button>

</body>
</html>
```

## CSS

```css
button {
    background: blue;
    color: white;
}

.text {
    color: green;
}

#logo {
    color: red;
}

h1,
p {
    font-family: Arial, sans-serif;
}
```

### Expected Output

- Website title is red.
- Both paragraphs are green.
- Button has a blue background with white text.
- Heading and paragraphs use the same font.

---

# Key Takeaways

- CSS makes HTML look beautiful.
- Use **Element selectors** for all elements of the same type.
- Use **Class selectors** for reusable styles.
- Use **ID selectors** for one unique element.
- Use **Group selectors** to reduce repetition.
- Remember the specificity order:

```
Inline > ID > Class > Element
```