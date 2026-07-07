# CSS Fundamentals – Colors, Backgrounds, Typography, Borders & Spacing

This document covers the fundamental CSS concepts every frontend developer should know.

---

# Table of Contents

1. Colors
2. Backgrounds
3. Typography (Fonts)
4. Borders
5. Spacing (Margin & Padding)
6. Mini Project
7. Interview & Exam Notes

---

# 1. Colors

Colors are used to style:

- Text
- Backgrounds
- Borders
- Shadows
- Icons

## Syntax

```css
h1 {
    color: red;
}
```

---

## Ways to Define Colors

### 1. Color Name

```css
color: red;
color: blue;
color: green;
```

Simple but limited.

---

### 2. Hexadecimal

Format

```text
#RRGGBB
```

Example

```css
color: #ff0000;
```

| Color | Hex Code |
|--------|----------|
| Black | #000000 |
| White | #ffffff |
| Red | #ff0000 |
| Green | #00ff00 |
| Blue | #0000ff |

---

### 3. RGB

Format

```text
rgb(red, green, blue)
```

Each value ranges from **0–255**.

Example

```css
color: rgb(255,0,0);
```

Another Example

```css
color: rgb(100,150,255);
```

---

### 4. RGBA

RGBA adds **Alpha (Transparency)**.

Format

```text
rgba(red, green, blue, opacity)
```

Opacity Range

```
0 = Invisible

1 = Fully Visible
```

Example

```css
background-color: rgba(255,0,0,0.5);
```

---

### 5. HSL

Format

```text
hsl(Hue, Saturation, Lightness)
```

Example

```css
color: hsl(0,100%,50%);
```

Useful for creating themes and color variations.

---

## color Property

```css
p {
    color: blue;
}
```

Changes only the text color.

---

# 2. Backgrounds

Background properties control what appears behind an element.

---

## Background Color

```css
body {
    background-color: lightgray;
}
```

---

## Background Image

```css
body {
    background-image: url("bg.jpg");
}
```

---

## Background Repeat

```css
background-repeat: no-repeat;
```

Possible values

```text
repeat

repeat-x

repeat-y

no-repeat
```

---

## Background Position

```css
background-position: center;
```

Common values

```text
top

bottom

left

right

center
```

---

## Background Size

```css
background-size: cover;
```

Other values

```text
cover

contain

100% 100%
```

### cover

- Covers the whole container
- May crop the image

### contain

- Shows the complete image
- May leave empty space

---

## Background Attachment

```css
background-attachment: fixed;
```

The background stays fixed while the page scrolls.

---

## Background Shorthand

Instead of

```css
background-color: black;
background-image: url(bg.jpg);
background-repeat: no-repeat;
background-position: center;
background-size: cover;
```

Use

```css
background: black url(bg.jpg) no-repeat center;
background-size: cover;
```

---

# 3. Typography (Fonts)

Typography controls how text looks.

---

## Font Family

```css
font-family: Arial;
```

Better

```css
font-family: Arial, Helvetica, sans-serif;
```

The browser checks fonts in order.

---

## Font Size

```css
font-size: 20px;
```

Common Units

| Unit | Meaning |
|------|----------|
| px | Fixed size |
| rem | Relative to root element |
| em | Relative to parent |
| % | Percentage |
| vw | Viewport width |

Example

```css
font-size: 2rem;
```

If root font size is 16px

```
2rem = 32px
```

Modern websites prefer **rem**.

---

## Font Weight

```css
font-weight: bold;
```

or

```css
font-weight: 700;
```

| Value | Meaning |
|--------|----------|
|100|Thin|
|200|Extra Light|
|300|Light|
|400|Normal|
|500|Medium|
|600|Semi Bold|
|700|Bold|
|800|Extra Bold|
|900|Black|

---

## Font Style

```css
font-style: italic;
```

---

## Text Align

```css
text-align: center;
```

Possible values

```text
left

center

right

justify
```

---

## Text Decoration

```css
text-decoration: none;
```

Usually removes underline from links.

```css
a {
    text-decoration: none;
}
```

---

## Text Transform

```css
text-transform: uppercase;
```

Other values

```text
lowercase

capitalize
```

---

## Line Height

```css
line-height: 1.6;
```

Controls spacing between lines.

---

## Letter Spacing

```css
letter-spacing: 2px;
```

---

## Word Spacing

```css
word-spacing: 8px;
```

---

## Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
```

Then

```css
body {
    font-family: "Poppins", sans-serif;
}
```

---

# 4. Borders

Borders create outlines around elements.

---

## Border

```css
border: 2px solid black;
```

Meaning

```
2px  → Width

solid → Style

black → Color
```

---

## Border Width

```css
border-width: 5px;
```

---

## Border Style

```css
border-style: solid;
```

Common styles

```text
solid

dashed

dotted

double

none
```

---

## Border Color

```css
border-color: red;
```

---

## Border Radius

Rounded corners

```css
border-radius: 10px;
```

Circle

```css
border-radius: 50%;
```

---

## Individual Borders

```css
border-top: 2px solid red;

border-right: 2px solid blue;

border-bottom: 2px solid green;

border-left: 2px solid yellow;
```

---

# 5. Spacing

There are two important spacing properties.

- Margin
- Padding

---

## CSS Box Model

```
+------------------------------+
|            Margin            |
|  +------------------------+  |
|  |         Border         |  |
|  |  +------------------+  |  |
|  |  |     Padding      |  |  |
|  |  | +--------------+ |  |  |
|  |  | |   Content    | |  |  |
|  |  | +--------------+ |  |  |
|  |  +------------------+  |  |
|  +------------------------+  |
+------------------------------+
```

---

## Padding

Padding is the space **inside** the border.

```css
padding: 20px;
```

Moves the content away from the border.

---

## Margin

Margin is the space **outside** the border.

```css
margin: 20px;
```

Moves the element away from other elements.

---

## Individual Padding

```css
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;
```

---

## Individual Margin

```css
margin-top: 20px;
margin-right: 30px;
margin-bottom: 10px;
margin-left: 50px;
```

---

## Shorthand

### One Value

```css
padding: 20px;
```

All four sides = 20px.

---

### Two Values

```css
padding: 20px 40px;
```

```
Top Bottom = 20px

Left Right = 40px
```

---

### Three Values

```css
padding: 10px 20px 30px;
```

```
Top = 10px

Left Right = 20px

Bottom = 30px
```

---

### Four Values

```css
padding: 10px 20px 30px 40px;
```

Order

```
Top

Right

Bottom

Left
```

Remember

```
TRBL

Top → Right → Bottom → Left
```

The same shorthand applies to `margin`.

---

# 6. Mini Project

## index.html

```html
<!DOCTYPE html>
<html>

<head>
    <title>CSS Practice</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="card">
    <h1>Abishek</h1>
    <p>Future Full Stack Developer</p>
    <button>Learn More</button>
</div>

</body>
</html>
```

---

## style.css

```css
body{
    background-color:#f2f2f2;
    font-family:Arial,sans-serif;
}

.card{
    background:white;
    width:300px;
    margin:50px auto;
    padding:20px;
    border:2px solid #ddd;
    border-radius:12px;
    text-align:center;
}

h1{
    color:#0077ff;
    font-size:32px;
}

p{
    color:#555;
    line-height:1.6;
}

button{
    background:#0077ff;
    color:white;
    padding:10px 20px;
    border:none;
    border-radius:6px;
    font-size:16px;
}
```

---

# 7. Quick Revision

## Colors

- `color`
- Hex
- RGB
- RGBA
- HSL

---

## Backgrounds

- background-color
- background-image
- background-repeat
- background-position
- background-size
- background-attachment

---

## Typography

- font-family
- font-size
- font-weight
- font-style
- text-align
- text-decoration
- text-transform
- line-height
- letter-spacing
- word-spacing

---

## Borders

- border
- border-width
- border-style
- border-color
- border-radius

---

## Spacing

- margin
- padding
- shorthand
- TRBL (Top Right Bottom Left)

---

# Interview Questions

### Difference between Margin and Padding?

| Margin | Padding |
|---------|----------|
| Outside border | Inside border |
| Creates space between elements | Creates space between content and border |

---

### Difference between RGB and RGBA?

- RGB defines colors.
- RGBA defines colors with transparency.

---

### Difference between `cover` and `contain`?

**cover**

- Fills entire container
- May crop image

**contain**

- Shows complete image
- May leave empty space

---

### What is `border-radius`?

It creates rounded corners.

Example

```css
border-radius: 10px;
```

---

### What does `font-family` do?

It specifies the font used for displaying text.

---

# Summary

After learning this guide, you should be able to:

- ✅ Apply colors using different formats
- ✅ Work with CSS backgrounds
- ✅ Style text professionally
- ✅ Create borders and rounded corners
- ✅ Understand the CSS Box Model
- ✅ Use margin and padding correctly
- ✅ Build a simple responsive card UI

---

**Next Topics**

- CSS Box Model (Deep Dive)
- Display (`block`, `inline`, `inline-block`)
- Position (`static`, `relative`, `absolute`, `fixed`, `sticky`)
- Flexbox
- CSS Grid