# 📅 Day 9 – CSS Box Model, Units & Positioning

## 📌 Topics Covered

- CSS Box Model
- Content, Padding, Border, Margin
- `box-sizing`
- CSS Units (`px`, `em`, `rem`, `%`, `vw`, `vh`)
- CSS Positioning
  - `static`
  - `relative`
  - `absolute`
  - `fixed`
  - `sticky`
- `top`, `right`, `bottom`, `left`
- `z-index`
- Overflow

---

# 📖 CSS Box Model

Every HTML element is treated as a rectangular box.

```
+-------------------------+
|         Margin          |
|  +-------------------+  |
|  |      Border       |  |
|  | +---------------+ |  |
|  | |    Padding    | |  |
|  | | +-----------+ | |  |
|  | | | Content   | | |  |
|  | | +-----------+ | |  |
|  | +---------------+ |  |
|  +-------------------+  |
+-------------------------+
```

## Box Model Components

### 1. Content
The actual text, image, or element content.

```css
width: 200px;
height: 100px;
```

---

### 2. Padding

Space between content and border.

```css
padding: 20px;
```

Example

```
Border
┌─────────────────────┐
│      Padding        │
│   ┌─────────────┐   │
│   │   Content   │   │
│   └─────────────┘   │
└─────────────────────┘
```

---

### 3. Border

Surrounds the padding and content.

```css
border: 2px solid black;
```

---

### 4. Margin

Space outside the border.

```css
margin: 30px;
```

---

# Box Size Calculation

```css
width: 200px;
padding: 20px;
border: 5px;
margin: 10px;
```

Actual occupied width

```
10 + 5 + 20 + 200 + 20 + 5 + 10
= 270px
```

---

# box-sizing

## content-box (Default)

```css
box-sizing: content-box;
```

Width excludes padding and border.

---

## border-box

```css
box-sizing: border-box;
```

Padding and border are included inside width.

Recommended in modern websites.

```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
```

---

# CSS Units

## 1. px (Pixels)

Absolute unit.

```css
font-size:16px;
width:200px;
```

Use for:

- Borders
- Icons
- Small spacing

---

## 2. em

Relative to parent font size.

Parent

```css
font-size:20px;
```

Child

```css
font-size:2em;
```

Result

```
2 × 20px = 40px
```

---

## 3. rem

Relative to root (`html`) font size.

```css
html{
    font-size:16px;
}
```

```css
font-size:2rem;
```

Result

```
2 × 16px = 32px
```

Recommended for typography.

---

## 4. %

Relative to parent size.

```css
width:50%;
```

---

## 5. vw

Viewport Width

```css
width:100vw;
```

---

## 6. vh

Viewport Height

```css
height:100vh;
```

---

# px vs em vs rem

| Unit | Relative To | Best Use |
|-------|-------------|----------|
| px | Fixed | Borders, icons |
| em | Parent | Components |
| rem | Root element | Fonts, spacing |
| % | Parent size | Responsive layouts |
| vw | Viewport width | Full-width sections |
| vh | Viewport height | Hero sections |

---

# CSS Positioning

Position controls where an element appears.

```
static
relative
absolute
fixed
sticky
```

---

## 1. static

Default position.

```css
position:static;
```

Cannot use

```
top
left
right
bottom
```

---

## 2. relative

Moves relative to its original position.

```css
position:relative;
top:20px;
left:30px;
```

Original space remains reserved.

---

## 3. absolute

Moves relative to the nearest positioned parent.

```css
.parent{
    position:relative;
}

.child{
    position:absolute;
    top:20px;
    right:20px;
}
```

Removed from normal document flow.

---

## 4. fixed

Relative to browser window.

```css
position:fixed;
bottom:20px;
right:20px;
```

Example:

- Chat button
- Back to top button

Stays visible while scrolling.

---

## 5. sticky

Acts like relative until scroll reaches a point.

```css
position:sticky;
top:0;
```

Commonly used for:

- Navigation bars
- Table headers

---

# Position Properties

```css
top
right
bottom
left
```

Example

```css
position:absolute;
top:30px;
left:50px;
```

---

# z-index

Controls stacking order.

```css
z-index:1;
```

Higher value appears on top.

```css
.box1{
    z-index:1;
}

.box2{
    z-index:10;
}
```

---

# Overflow

Controls content outside the box.

```css
overflow:visible;
overflow:hidden;
overflow:scroll;
overflow:auto;
```

---

# Mini Project

Create three colored boxes.

Practice:

- Margin
- Padding
- Border
- Relative Position
- Absolute Position
- Fixed Button
- Sticky Header

---

# Key Takeaways

✅ Understand the CSS Box Model

✅ Difference between Margin, Border, Padding, and Content

✅ Use `box-sizing: border-box`

✅ Know when to use `px`, `em`, and `rem`

✅ Understand viewport units (`vw`, `vh`)

✅ Master all five positioning methods

✅ Use `z-index` for overlapping elements

✅ Control overflowing content using `overflow`

---

# Files

```
Day-09/
│── index.html
│── style.css
│── README.md
```

---

## 🎯 Learning Outcome

After completing Day 9, I can:

- Explain the CSS Box Model
- Calculate the total size of an element
- Choose the correct CSS unit (`px`, `em`, `rem`, `%`, `vw`, `vh`)
- Build responsive layouts using relative units
- Position elements using `static`, `relative`, `absolute`, `fixed`, and `sticky`
- Control element stacking with `z-index`
- Handle overflowing content with the `overflow` property