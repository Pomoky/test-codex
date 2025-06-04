# Restaurant Landing

This Vue 3 application showcases a complete landing page for **Mon Menu Photo**, built with Vite and styled using **TailwindCSS**.

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
- **src/** – Contains Vue components, Tailwind styles and the service for the OpenAI API.
- **Heroicons** are used for small icons while all mockups rely on `placehold.co` images.
- **public/menu.json** – Example menu to analyze.

`LandingPage.vue` organise la page en plusieurs sections :

- Header avec logo et navigation
- Hero avec grande bannière
- Étapes « Comment ça marche ? »
- Démonstration visuelle
- Témoignages
- Bloc de tarifs
- Foire aux questions
- Formulaire de lead
- Footer

La palette de couleurs utilise l’orange `#F18A00` pour les actions principales,
le vert `#A2D729` pour les actions secondaires et un fond crème `#F5EFED`.

## Usage

```bash
npm install
npm run dev
```
