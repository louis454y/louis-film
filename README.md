# LOUIS FILM — Portfolio App-like

Sitio optimizado **mobile-first** con aspecto de app nativa y animaciones completas.

## Qué incluye
- Bottom navigation tipo app (móvil)
- Animaciones de entrada, hover/tap, filtros, modal
- Safe-area (notch / home indicator)
- Mismos datos que el sitio original
- Marca: **LOUIS FILM** (sin traducir)

## Abrir en VS Code
1. Extrae el ZIP
2. Archivo → Abrir carpeta → `louisfilm`
3. Extensión: **Live Server** → clic derecho en `index.html` → Open with Live Server

---

## Subir a GitHub (desde VS Code)

### 1. Crear repositorio en GitHub
1. Entra a https://github.com/new
2. Nombre del repo: `louis-film` (o el que quieras)
3. Déjalo **público**
4. **NO** marques “Add a README”
5. Create repository

### 2. Conectar y subir desde la terminal de VS Code

Abre la terminal en VS Code (`Ctrl + ñ` o Terminal → New Terminal) y pega esto **uno por uno** (cambia `TU-USUARIO` por tu usuario de GitHub):

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit: LOUIS FILM portfolio"
git remote add origin https://github.com/TU-USUARIO/louis-film.git
git push -u origin main
```

Si GitHub te pide login, usa un **Personal Access Token** (no la contraseña).  
Crear token: GitHub → Settings → Developer settings → Personal access tokens → Generate (permiso `repo`).

---

## Desplegar en Render (sitio estático)

1. Entra a https://dashboard.render.com y crea cuenta (o inicia sesión con GitHub)
2. **New +** → **Static Site**
3. Conecta el repositorio `louis-film`
4. Configuración:
   - **Name:** `louis-film` (o el que quieras)
   - **Branch:** `main`
   - **Root Directory:** (déjalo vacío)
   - **Build Command:** (déjalo vacío)
   - **Publish Directory:** `.`  (punto = raíz, donde está index.html)
5. Create Static Site

Render te dará una URL tipo:  
`https://louis-film.onrender.com`

---

## Formulario de contacto
En Render el formulario no usa Netlify Forms.  
Opciones:
- Dejar el botón de WhatsApp (ya funciona)
- O conectar Formspree / Getform más adelante

## Estructura
```
louisfilm/
├── index.html
├── css/styles.css
├── js/main.js
├── assets/
└── README.md
```
