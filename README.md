# Weather App

A front-end weather lookup tool that fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/current). Built with minimal dependencies and a clean, component-style layout, this app demonstrates practical client-side techniques for interactive UI rendering, data fetching, and conditional asset loading.

---

## 🔍 Techniques Used

- **[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)** for asynchronous HTTP requests to a public REST API.
- **[DOM manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)** using [jQuery](https://jquery.com/) for simplified element selection and updates.
- **[Moment.js](https://momentjs.com/)** to format timestamps (`moment().format("MMMM Do YYYY, h:mm:ss a")`) in a readable way.
- **[Dynamic asset loading](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src)** via JavaScript, based on data values returned from the API.
- **[CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)** and **[transform hover effects](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale)** for basic UI interaction.
- **[Responsive flexbox layout](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)** for vertically and horizontally centering content.
- Use of **[external web fonts](https://fonts.google.com/specimen/Montserrat)** via Google Fonts.

---

## 🧰 Libraries & Technologies

- [jQuery 3.6.0](https://code.jquery.com/jquery-3.6.0.min.js) — DOM manipulation and event handling.
- [Moment.js](https://momentjs.com/downloads/moment.min.js) — Date and time formatting.
- [Animate.css](https://cdnjs.com/libraries/animate.css) — Fade-in animations.
- [Font Awesome 5.15.1](https://cdnjs.com/libraries/font-awesome) — Optional icon support.
- [Google Fonts - Montserrat](https://fonts.google.com/specimen/Montserrat) — UI typography.

All libraries are loaded via CDN and require no build tooling.

---

## 📁 Project Structure

```
.
├── index.html
├── style.css
├── script.js
└── images/
```

- [`index.html`](./index.html) — Main HTML file; sets up structure and references external resources.
- [`style.css`](./style.css) — All UI styling including layout, fonts, colors, and responsive adjustments.
- [`script.js`](./script.js) — Contains fetch logic, API integration, and weather icon rendering.
- `images/` — Weather icons used dynamically (`clouds.png`, `clear.png`, etc.) based on the `weather.main` field.

---
