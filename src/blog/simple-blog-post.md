---
title: Simple blog post
date: '2020-01-25'
tags:
  - sample-content
  - code
  - native-elements
---

This is a sample blog post to demostrate how posts look with Native Elements. All the content of this article is inside a markdown file which is transformed by Eleventy into an HTML page.

This starter use [Native Elements](https://native-elements.stackblitz.io) css to add a basic style to native html elements without any extra framework. You can customize it by setting their global custom properties inside the `:root` css selector.

For example, this is a `blockquote` with a basic style:

> Less is more. Isn't it?
> <cite>by Someone</cite>

Bullet list with some typography elements

- Sed posuere consectetur est at lobortis
- Aenean lacinia <del>bibendum</del> <ins>nulla</ins> sed consectetur
- Sed posuere consectetur <s>est at lobortis</s>
- Lorem ipsum dolor <mark>sit amet</mark> consectetur
- Press <kbd>⌥</kbd> **+** <kbd>↩</kbd>

---

## Code highlight

XITY provides code highlighting using prism, by default it uses the [Material Theme Lighter](https://github.com/PrismJS/prism-themes/tree/master/themes) as color scheme. If you want to change the theme, put the `css` file inside the `assets/css` folder and set the name inside `_data/config.json`.

```jsx
const MyComponent = props => (
  <Fragment>
    <p>Hello {props.name}</p>
  </Fragment>
)
```

... and here some css code with line highlight

```css/1,3-4
:root {
  --background-color: white;

  .MyComponent {
    background-color: var(--background-color);
  }
}
```
