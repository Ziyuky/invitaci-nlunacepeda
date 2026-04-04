# Invitación — XV años

Sitio estático (Vite + React + TypeScript + Tailwind) para la invitación.

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue en GitHub Pages

1. En el repositorio: **Settings → Pages → Build and deployment → Source**: elige **GitHub Actions** (no “Deploy from a branch” con `gh-pages` a menos que configures otro flujo).

2. Haz push a la rama `main`. El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) construye el sitio con `BASE_PATH` igual al nombre del repositorio, para que las rutas funcionen en `https://<usuario>.github.io/<repo>/`. El script `copy-404` duplica `index.html` como `404.html` para que las recargas y enlaces directos sigan cargando la app (patrón típico de SPA en GitHub Pages).

3. Si cambias el nombre del repositorio, no hace falta tocar el código: el workflow usa el nombre actual del repo.

4. Si usas un dominio propio en la raíz del sitio, ajusta el build para `BASE_PATH=/` (por ejemplo en el workflow o en un secret/variable de entorno) y configura el dominio en **Pages**.

## Scripts

| Comando    | Descripción        |
| ---------- | ------------------ |
| `npm run build` | Compila a `dist/` |
| `npm run preview` | Previsualiza el build |
| `npm run test` | Tests (Vitest)     |
