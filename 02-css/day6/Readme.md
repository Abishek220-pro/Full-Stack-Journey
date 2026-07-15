# 📱 Responsive Design & Media Queries

## 📖 What is Responsive Design?

Responsive Design is a web design approach that makes a website automatically adjust its layout, images, text, and components to look good on **all screen sizes**, such as:

- 📱 Mobile
- 📲 Tablet
- 💻 Laptop
- 🖥️ Desktop
- 📺 TV

Instead of creating separate websites for mobile and desktop, we build **one responsive website**.

---

# Why Responsive Design?

Without Responsive Design:

- Content becomes too small.
- Users must zoom in/out.
- Horizontal scrolling appears.
- Poor User Experience (UX).

With Responsive Design:

- Website fits every screen.
- Easy to read.
- Better User Experience.
- Professional appearance.

---

# Before Responsive Design

Previously developers created two websites.

```
Desktop Website
desktop.example.com

Mobile Website
m.example.com
```

Maintaining two websites was difficult.

Today we create only **one website**.

```
example.com
```

CSS automatically adjusts everything.

---

# Components of Responsive Design

Responsive Design mainly consists of:

```
Responsive Design
│
├── Flexible Layout
├── Flexible Images
├── Flexible Typography
├── Responsive Units
└── Media Queries
```

---

# 1. Flexible Layout

Instead of fixed widths, use flexible widths.

❌ Bad

```css
.container{
    width:1000px;
}
```

This will overflow on mobile screens.

✅ Good

```css
.container{
    width:100%;
}
```

or

```css
.container{
    max-width:1200px;
    margin:auto;
}
```

### Output

Desktop

```
--------------------------
|        Container       |
--------------------------
```

Mobile

```
------------
Container
------------
```

---

# width vs max-width

## width

```css
width:800px;
```

Always stays **800px**.

---

## max-width

```css
max-width:800px;
```

Maximum width is **800px**.

It can become smaller when necessary.

---

# 2. Flexible Images

❌ Bad

```css
img{
    width:700px;
}
```

Image may overflow on smaller screens.

✅ Good

```css
img{
    max-width:100%;
    height:auto;
}
```

This allows images to shrink automatically.

---

# 3. Flexible Typography

Avoid large fixed font sizes.

❌ Bad

```css
font-size:40px;
```

Better

```css
font-size:2rem;
```

Even Better

```css
font-size:clamp(1rem,4vw,3rem);
```

---

# 4. Responsive Units

Instead of pixels, use responsive units.

| Unit | Meaning |
|-------|----------|
| % | Percentage |
| rem | Root font size |
| em | Parent font size |
| vw | Viewport Width |
| vh | Viewport Height |
| fr | Grid Fraction |

Example

```css
width:50%;
height:100vh;
font-size:2rem;
```

---

# 5. Media Queries

Media Queries are the heart of Responsive Design.

They tell CSS:

> "Apply these styles only when the screen matches certain conditions."

---

# Syntax

```css
@media(condition){

    CSS Code

}
```

Example

```css
@media(max-width:768px){

}
```

Meaning

```
IF

Screen Width <=768px

Apply CSS
```

---

# First Media Query

HTML

```html
<div class="box"></div>
```

CSS

```css
.box{
    width:400px;
    height:200px;
    background:red;
}

@media(max-width:768px){

.box{
    width:200px;
    background:blue;
}

}
```

Desktop

```
██████████
RED
```

Mobile

```
█████
BLUE
```

---

# max-width

```css
@media(max-width:768px)
```

Applies to

```
768
700
600
500
400
```

---

# min-width

```css
@media(min-width:768px)
```

Applies to

```
768
900
1200
1600
```

---

# max-width vs min-width

## max-width

```
Desktop
↓

Tablet
↓

Phone
```

Used for smaller screens.

---

## min-width

```
Phone
↑

Tablet
↑

Desktop
```

Used for Mobile-First Design.

---

# Mobile First Design

Professional developers first design for mobile.

Then improve for larger screens.

Example

```css
.card{
    width:100%;
}

@media(min-width:768px){

.card{
    width:50%;
}

}
```

---

# Common Breakpoints

| Device | Width |
|---------|-------|
| Small Phone | 320px |
| Phone | 480px |
| Large Phone | 576px |
| Tablet | 768px |
| Laptop | 992px |
| Desktop | 1200px |
| Large Desktop | 1400px+ |

---

# Responsive Flexbox

Desktop

```
[Box][Box][Box]
```

Mobile

```
[Box]

[Box]

[Box]
```

CSS

```css
.container{
    display:flex;
    gap:20px;
}

@media(max-width:768px){

.container{
    flex-direction:column;
}

}
```

---

# Responsive Sidebar Layout

Desktop

```
Sidebar | Content
```

Mobile

```
Content

Sidebar
```

CSS

```css
.container{
    display:flex;
}

@media(max-width:768px){

.container{
    flex-direction:column;
}

}
```

---

# Responsive Navigation

Desktop

```
Home About Blog Contact
```

Mobile

```
☰
```

CSS

```css
@media(max-width:768px){

nav ul{
    display:none;
}

}
```

---

# Responsive Grid

Desktop

```
□ □ □ □
```

Tablet

```
□ □

□ □
```

Mobile

```
□

□

□
```

CSS

```css
.container{

display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;

}

@media(max-width:900px){

.container{
grid-template-columns:repeat(2,1fr);
}

}

@media(max-width:600px){

.container{
grid-template-columns:1fr;
}

}
```

---

# Responsive Images

```css
img{

max-width:100%;
height:auto;
display:block;

}
```

This is the most common image style used in responsive websites.

---

# Viewport Meta Tag

Always include this in the `<head>` section.

```html
<meta
name="viewport"
content="width=device-width, initial-scale=1.0">
```

Without it, mobile browsers may scale the page incorrectly.

---

# Complete Example

## HTML

```html
<div class="container">

<div class="card">1</div>

<div class="card">2</div>

<div class="card">3</div>

</div>
```

---

## CSS

```css
.container{

display:flex;
gap:20px;

}

.card{

flex:1;
padding:20px;
background:skyblue;

}

@media(max-width:768px){

.container{

flex-direction:column;

}

}
```

Desktop

```
+-----+ +-----+ +-----+
|  1  | |  2  | |  3  |
+-----+ +-----+ +-----+
```

Mobile

```
+-----+
|  1  |
+-----+

+-----+
|  2  |
+-----+

+-----+
|  3  |
+-----+
```

---

# Best Practices

- ✅ Use Mobile-First Design.
- ✅ Prefer `min-width` Media Queries.
- ✅ Use Flexbox and Grid.
- ✅ Avoid fixed widths.
- ✅ Use responsive units (`%`, `rem`, `vw`, `fr`).
- ✅ Use `max-width` for images.
- ✅ Always include the viewport meta tag.
- ✅ Test on different screen sizes using Developer Tools.

---

# Mini Project

Build a **Responsive Product Card Layout**.

### Desktop

```
+-------+ +-------+ +-------+
| Card1 | | Card2 | | Card3 |
+-------+ +-------+ +-------+
```

### Tablet

```
+-------+ +-------+
| Card1 | | Card2 |
+-------+ +-------+

+-------+
| Card3 |
+-------+
```

### Mobile

```
+-------+
| Card1 |
+-------+

+-------+
| Card2 |
+-------+

+-------+
| Card3 |
+-------+
```

### Requirements

- Use CSS Grid.
- Use two Media Queries.
- Add spacing using `gap`.
- Add `padding`.
- Add `border-radius`.
- Make it responsive without horizontal scrolling.

---

# Summary

- Responsive Design makes websites work on all devices.
- Media Queries change styles based on screen size.
- Use flexible layouts, responsive units, and flexible images.
- Mobile-First Design is the modern standard.
- Flexbox and CSS Grid are the preferred layout systems for responsive websites.