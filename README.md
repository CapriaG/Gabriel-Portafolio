# Gabriel Capria — Portfolio

Portfolio personal construido con **React + Vite + Bootstrap 5**.

## Stack

- React 18
- Vite 5
- Bootstrap 5.3
- Google Fonts (Playfair Display + DM Sans)

## Cómo correrlo localmente

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Estructura

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Deploy en Vercel (recomendado)

1. Subí el proyecto a un repositorio en GitHub
2. Entrá a [vercel.com](https://vercel.com) y conectá el repo
3. Vercel detecta Vite automáticamente — deploy en 1 clic

## Deploy en GitHub Pages

```bash
npm install --save-dev gh-pages
```

Agregá en `package.json`:
```json
"homepage": "https://tuusuario.github.io/tu-repo",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

```bash
npm run deploy
```

---

Diseñado y desarrollado con intención 🌿
