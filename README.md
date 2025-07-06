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

## 🏁 How to Run the Project

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)**

   - Sign up and create an API key.
   - Open [`script.js`](./script.js) and replace the placeholder API key:

     ```js
     const apiKey = "YOUR_API_KEY_HERE";
     ```

3. **Run the app**

   Since this is a static frontend project (HTML, CSS, JS), you can run it directly in any modern browser:

   - Open the `index.html` file by double-clicking it.

   **Or**, to avoid CORS issues in some browsers when loading from `file://`, serve it using a local development server:

   - With **VS Code Live Server Extension**  
     (Recommended for professional frontend development)

   - Or with **Node.js http-server**:

     ```bash
     npm install -g http-server
     http-server .
     ```

4. **Enter a city name** to fetch and display weather information.

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
