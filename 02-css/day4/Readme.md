# Day 10: Flexbox Deep Dive

## What is Flexbox?

Flexbox (Flexible Box Layout) is a CSS layout system used to arrange
elements in rows or columns.

``` html
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

``` css
.container{
  display:flex;
}
```

## Main Axis vs Cross Axis

-   **Main Axis**: Left → Right (default)
-   **Cross Axis**: Top → Bottom

## justify-content

Aligns items on the **main axis**.

``` css
justify-content:flex-start;
justify-content:center;
justify-content:flex-end;
justify-content:space-between;
justify-content:space-around;
justify-content:space-evenly;
```

## align-items

Aligns items on the **cross axis**.

``` css
align-items:flex-start;
align-items:center;
align-items:flex-end;
align-items:stretch;
```

## flex-direction

``` css
flex-direction:row;
flex-direction:column;
```

## flex-wrap

``` css
flex-wrap:nowrap;
flex-wrap:wrap;
```

## gap

``` css
gap:20px;
```

## Complete Example

``` html
<!DOCTYPE html>
<html>
<head>
<style>
.container{
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
    gap:20px;
    height:300px;
    border:2px solid black;
}

.box{
    width:100px;
    height:100px;
    background:skyblue;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:30px;
}
</style>
</head>
<body>
<div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
</div>
</body>
</html>
```

## Real-World Uses

-   Navigation bars
-   Login forms
-   Card layouts
-   Menus
-   Toolbars
-   Centering content

## Practice

1.  Create 5 colored boxes in one row.
2.  Center them using `justify-content`.
3.  Move them to the bottom using `align-items`.
4.  Add `gap:20px`.
5.  Add 10 boxes and enable `flex-wrap`.
6.  Change `flex-direction` to `column`.

## Quick Revision

  Property            Purpose
  ------------------- ------------------------
  `display:flex`      Makes a flex container
  `justify-content`   Aligns on main axis
  `align-items`       Aligns on cross axis
  `flex-direction`    Row or column
  `flex-wrap`         Wraps items
  `gap`               Spacing between items

## Next Topic

**Day 11:** `flex-grow`, `flex-shrink`, `flex-basis`, and the `flex`
shorthand.
