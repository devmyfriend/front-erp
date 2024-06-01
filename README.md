# erp-mf

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```
### 
Create .env file and set enviorement varible
```
VITE_APP_PATH_API_BUSINESSENTITY
VITE_APP_PATH_API_PRODUCTS
```
### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
### Proyect directory structure
```
├───📁 src/
│   ├───📁 assets/
│   │   ├───📄 bg-login.svg
│   │   └───📄 userIco.svg
│   ├───📁 commons/
│   │   └───📁 ui/
│   │       ├───📁 btn-login/
│   │       │   └───📄 btn-login.vue
│   │       └───📁 btn-save/
│   │           └───📄 btn-save.vue
│   ├───📁 components/
│   │   ├───📁 icons/
│   │   │   ├───📄 IconCommunity.vue
│   │   │   ├───📄 IconDocumentation.vue
│   │   │   ├───📄 IconEcosystem.vue
│   │   │   ├───📄 IconSupport.vue
│   │   │   └───📄 IconTooling.vue
│   │   └───📄 HelloWorld.vue
│   ├───📁 modules/
│   │   ├───📁 businessentity/
│   │   │   ├───📁 components/
│   │   │   ├───📁 composable/   
│   │   │   ├───📁 layout/
│   │   │   ├───📁 routes/
│   │   │   └───📁 views/
│   │   └───📁 loging/
│   │       ├───📁 components/
│   │       │   └───📄 FrmLogin.vue
│   │       └───📁 views/
│   │           └───📄 Loging.vue
│   ├───📁 router/
│   │   └───📄 index.js
│   ├───📁 service/
│   │   └───📁 businessentity/
│   ├───📁 stores/
│   │   └───📁 businessentity/
│   ├───📄 App.vue
│   ├───📄 index.css
│   └───📄 main.js
├───📄 index.html
├───📄 jsconfig.json
├───📄 package-lock.json
├───📄 package.json
├───📄 postcss.config.js
├───📄 README.md
├───📄 tailwind.config.js
└───📄 vite.config.js
```
### Stack
* axops
* pinia
* sweetalert2
* autoprefixer
* postcss
* tailwindcss
  
