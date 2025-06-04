# Restaurant Landing

This mini Vue 3 application generates a landing page for a restaurant by analyzing its menu using ChatGPT. It uses Vite for development.

## Architecture

```
restaurant-landing/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── components/
│   │   └── LandingPage.vue
│   └── services/
│       └── openai.js
└── public/
    └── menu.json (example menu file)
```

- **index.html** – Entry HTML file.
- **package.json** – Defines dependencies and scripts.
- **vite.config.js** – Vite configuration with Vue plugin.
- **src/** – Contains Vue components and service for the OpenAI API. The landing
  page uses [Heroicons](https://github.com/tailwindlabs/heroicons) for icons in
  the header, hero section, features and contact form.
- **public/menu.json** – Example menu to analyze.

The `LandingPage.vue` component now features a complete responsive layout with a
header, hero section, feature list, contact form and footer.

## Usage

```bash
npm install
npm run dev
```
