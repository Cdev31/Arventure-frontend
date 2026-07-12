# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Configuración de versiones

- **Node (recomendado):** >= 18 (se detectó `22.17.1` en el entorno).
- **npm (recomendado):** >= 8 (se detectó `10.9.2`).

Recomendaciones rápidas:

- Usar `nvm` para gestionar la versión de Node:

```bash
nvm install 22.17.1
nvm use 22.17.1
```

- Alternativamente crear un archivo `.nvmrc` con la versión usada (ya incluido en este repo).

- Para instalar dependencias:

```bash
npm install
```

- Si usas `pnpm`/`corepack`, ajusta según tu gestor preferido.

Si quieres que fije versiones exactas de paquetes o actualice dependencias ahora, dime y lo aplico.
