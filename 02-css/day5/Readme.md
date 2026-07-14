# CSS Grid In-Depth

CSS Grid is a **2-dimensional layout system** that allows you to build complex layouts using **rows and columns**. Unlike Flexbox (which is one-dimensional), CSS Grid lets you control both horizontal and vertical layouts simultaneously.

---

# Table of Contents

1. What is CSS Grid?
2. Creating a Grid Container
3. Grid Columns
4. Grid Rows
5. Grid Gap
6. Fraction (`fr`) Unit
7. Repeat Function
8. Minmax Function
9. Auto-fit vs Auto-fill
10. Grid Item Placement
11. Grid Row
12. Span
13. Justify Items
14. Align Items
15. Place Items
16. Justify Content
17. Align Content
18. Place Content
19. Named Grid Areas
20. Implicit Grid
21. Grid Auto Flow
22. Responsive Layout
23. Complete Dashboard Example
24. Grid vs Flexbox
25. Best Practices
26. Common Mistakes
27. Interview Questions
28. Practice Projects

---

# 1. What is CSS Grid?

CSS Grid is a layout system designed to organize web pages into rows and columns.

It is mainly used for:

- Website layouts
- Dashboards
- Admin panels
- Card layouts
- Photo galleries
- Magazine layouts

Example:

```
+---------------------------+
|          Header           |
+-----------+---------------+
| Sidebar   |     Main      |
|           |               |
+-----------+---------------+
|          Footer           |
+---------------------------+
```

---

# 2. Creating a Grid Container

HTML

```html
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
</div>
```

CSS

```css
.container{
    display:grid;
}
```

Nothing changes visually until columns or rows are defined.

---

# 3. Grid Columns

## Fixed Width

```css
.container{
    display:grid;
    grid-template-columns:200px 200px 200px;
}
```

Result

```
+------+-------+------+
|200px |200px  |200px |
+------+-------+------+
```

---

## Equal Columns

```css
grid-template-columns:1fr 1fr 1fr;
```

Result

```
+---------+---------+---------+
|    1    |    2    |    3    |
+---------+---------+---------+
```

---

## Unequal Columns

```css
grid-template-columns:1fr 2fr 1fr;
```

```
+-----+-----------+-----+
| 1fr |   2fr     |1fr  |
+-----+-----------+-----+
```

The middle column occupies twice the available space.

---

# 4. Grid Rows

```css
.container{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:100px 200px;
}
```

```
-----------------
Row 1 → 100px
-----------------
Row 2 → 200px
-----------------
```

---

# 5. Gap

Gap adds spacing between rows and columns.

```css
.container{
    gap:20px;
}
```

Separate values

```css
row-gap:20px;
column-gap:10px;
```

---

# 6. Fraction Unit (fr)

The **fr** unit divides the remaining space.

Example

```css
grid-template-columns:1fr 1fr 1fr;
```

Each column receives equal width.

Example

```css
grid-template-columns:1fr 3fr 2fr;
```

Suppose the container width is **600px**.

Total fractions = **1 + 3 + 2 = 6**

```
600 / 6 = 100px

1fr =100px
3fr =300px
2fr =200px
```

---

# 7. Repeat Function

Without repeat

```css
grid-template-columns:100px 100px 100px;
```

Using repeat

```css
grid-template-columns:repeat(3,100px);
```

Another example

```css
grid-template-columns:repeat(4,1fr);
```

Equivalent to

```css
1fr 1fr 1fr 1fr
```

---

# 8. Minmax Function

Syntax

```css
minmax(minimum, maximum)
```

Example

```css
grid-template-columns:
repeat(3,minmax(150px,1fr));
```

Meaning

- Minimum width =150px
- Maximum width =Remaining available space

Perfect for responsive layouts.

---

# 9. Auto-fit vs Auto-fill

## Auto-fit

```css
grid-template-columns:
repeat(auto-fit,minmax(250px,1fr));
```

Automatically stretches items to fill available space.

Example

```
Desktop

+------+ +------+ +------+
|Card1| |Card2| |Card3|
+------+ +------+ +------+

Tablet

+-----------+-----------+
|  Card1    |  Card2    |
+-----------+-----------+
|      Card3            |
+------------------------+
```

---

## Auto-fill

```css
grid-template-columns:
repeat(auto-fill,minmax(250px,1fr));
```

Creates empty columns even if no content exists.

Most developers prefer **auto-fit**.

---

# 10. Grid Item Placement

```css
.item1{
    grid-column:1/3;
}
```

```
+----------------------+
|        Item1         |
+----------+-----------+
| Item2    | Item3     |
+----------+-----------+
```

Item1 spans two columns.

---

# 11. Grid Row

```css
.item1{
    grid-row:1/3;
}
```

```
+-------+------+
|Item1  |Item2 |
|       +------+
|       |Item3 |
+-------+------+
```

---

# 12. Span

Instead of

```css
grid-column:1/3;
```

Use

```css
grid-column:span 2;
```

Rows

```css
grid-row:span 3;
```

---

# 13. Justify Items

Moves items horizontally **inside each grid cell**.

```css
justify-items:center;
```

Available values

```
start
center
end
stretch
```

---

# 14. Align Items

Moves items vertically inside each grid cell.

```css
align-items:center;
```

Values

```
start
center
end
stretch
```

---

# 15. Place Items

Shortcut property.

```css
place-items:center;
```

Equivalent to

```css
justify-items:center;
align-items:center;
```

---

# 16. Justify Content

Moves the **entire grid horizontally**.

```css
justify-content:center;
```

Values

```
start
center
end
space-between
space-around
space-evenly
```

---

# 17. Align Content

Moves the entire grid vertically.

```css
align-content:center;
```

---

# 18. Place Content

Shortcut property.

```css
place-content:center;
```

Equivalent to

```css
justify-content:center;
align-content:center;
```

---

# 19. Named Grid Areas

HTML

```html
<div class="container">
    <header>Header</header>
    <aside>Sidebar</aside>
    <main>Main</main>
    <footer>Footer</footer>
</div>
```

CSS

```css
.container{
display:grid;

grid-template-columns:250px 1fr;

grid-template-areas:
"header header"
"sidebar main"
"footer footer";
}

header{
grid-area:header;
}

aside{
grid-area:sidebar;
}

main{
grid-area:main;
}

footer{
grid-area:footer;
}
```

Result

```
+------------------------+
|        Header          |
+-----------+------------+
| Sidebar   |   Main     |
|           |            |
+-----------+------------+
|        Footer          |
+------------------------+
```

---

# 20. Implicit Grid

Sometimes extra items are added automatically.

Control their size.

```css
grid-auto-rows:100px;
```

Every new row becomes 100px.

Columns

```css
grid-auto-columns:200px;
```

---

# 21. Grid Auto Flow

Default

```css
grid-auto-flow:row;
```

Items fill row by row.

Column flow

```css
grid-auto-flow:column;
```

Items fill column by column.

---

# 22. Responsive Card Layout

HTML

```html
<div class="container">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
</div>
```

CSS

```css
.container{
display:grid;

grid-template-columns:
repeat(auto-fit,minmax(250px,1fr));

gap:20px;
}
```

Automatically changes the number of columns depending on screen size.

---

# 23. Complete Dashboard Example

HTML

```html
<div class="container">
    <header>Header</header>
    <aside>Sidebar</aside>
    <main>Main Content</main>
    <footer>Footer</footer>
</div>
```

CSS

```css
.container{

display:grid;

grid-template-columns:250px 1fr;

grid-template-rows:70px 1fr 60px;

grid-template-areas:

"header header"

"sidebar main"

"footer footer";

height:100vh;

}

header{
grid-area:header;
}

aside{
grid-area:sidebar;
}

main{
grid-area:main;
}

footer{
grid-area:footer;
}
```

Layout

```
+----------------------------+
|          Header            |
+------------+---------------+
| Sidebar    | Main Content  |
|            |               |
+------------+---------------+
|          Footer            |
+----------------------------+
```

---

# 24. Grid vs Flexbox

| CSS Grid | Flexbox |
|----------|----------|
| Two-dimensional | One-dimensional |
| Rows + Columns | Row OR Column |
| Best for layouts | Best for components |
| Dashboards | Navigation bars |
| Galleries | Forms |
| Admin Panels | Buttons |

Rule

- Grid → Overall page layout
- Flexbox → Component layout

---

# 25. Best Practices

- Use Grid for page layouts.
- Use Flexbox inside Grid items.
- Prefer `fr` instead of percentages.
- Use `gap` instead of margins.
- Use `repeat()` to reduce code.
- Use `minmax()` for responsive designs.
- Use `auto-fit` for card layouts.
- Name grid areas for readability.

---

# 26. Common Mistakes

❌ Forgetting `display:grid`

❌ Mixing Grid and Flexbox incorrectly

❌ Using fixed widths everywhere

❌ Not making layouts responsive

❌ Using margins instead of `gap`

---

# 27. Interview Questions

1. What is CSS Grid?
2. Difference between Grid and Flexbox?
3. What is `1fr`?
4. What is `repeat()`?
5. Explain `minmax()`.
6. Difference between `auto-fit` and `auto-fill`.
7. What is `grid-template-areas`?
8. Difference between `justify-items` and `justify-content`.
9. Difference between `align-items` and `align-content`.
10. What is an implicit grid?
11. What is `grid-auto-flow`?
12. What is the purpose of `span`?

---

# 28. Practice Projects

## Beginner

- 2-column webpage
- 3×3 image gallery
- Pricing cards
- Product grid

---

## Intermediate

- Admin dashboard
- Portfolio website
- News homepage
- Blog layout

---

## Advanced

- YouTube homepage clone
- Netflix homepage
- Amazon product page
- Trello board
- Discord dashboard
- GitHub profile layout

---

# Summary

By mastering these concepts, you will be able to build almost any modern website layout using CSS Grid.

✅ Grid Container

✅ Grid Columns

✅ Grid Rows

✅ Fraction Units

✅ Gap

✅ Repeat

✅ Minmax

✅ Auto-fit

✅ Auto-fill

✅ Grid Item Placement

✅ Grid Areas

✅ Responsive Layouts

✅ Dashboard Layouts

✅ Best Practices

✅ Interview Questions
