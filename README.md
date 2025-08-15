### My First Interactive Page

#### Overview

---

A single web page with three boxes and three buttons.  
Each button applies a different visual effect to its corresponding box using JavaScript and CSS.

#### Features

---

- **Button 1 affects Box 1:** change colour
- **Button 2 affects Box 2:** change from square into a circle (border-radius)
- **Button 3 affects Box 3:** hide (opacity 0)

#### Files

---

- **index.html** — uses `defer` so HTML parses before JavaScript runs.
- **style.css** — Layout, base `.box` styles, and effect classes.
- **app.js** — Utility functions, DOM element references, event listeners.

#### How to Run

---

1. Open `index.html` in a browser.
2. No build tools or dependencies required.

#### Behaviour

---

Effect classes applied by JavaScript:

```css
.box--colour {
  background-color: #18e222;
}
.box--shape {
  border-radius: 50%;
}
.box--hide {
  opacity: 0;
}
```

#### Notes

---

- `defer` ensures JavaScript runs after HTML parsing.
- Base visual styles are in `.box`.
- Each effect is applied by a separate modifier class when the button is clicked.
- Dark mode background colour, to help visualize the cards better
