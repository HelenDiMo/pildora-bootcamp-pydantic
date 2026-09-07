# Expediente VGN-0001 — Validación de Datos con Pydantic

Masterclass interactiva sobre desarrollo robusto y validación estricta de tipos en Python con **Pydantic**, ambientada en la Aduana Intergaláctica Vogon. Incluye una demo en vivo: un formulario que valida datos reales usando Pydantic ejecutado en el navegador vía **Pyodide** (Python compilado a WebAssembly) — sin backend.

## Stack

- React + Vite
- Pyodide (cargado desde CDN en `index.html`) + `micropip` para instalar `pydantic` en el navegador
- CSS plano (sin framework), con tokens de diseño en `src/index.css`

## Paleta de colores

Inspirada en la estética burocrática Vogon (formularios, sellos, papeleo intergaláctico). Cada color tiene un origen y un uso semántico concreto — el rojo está reservado exclusivamente para errores/rechazos, nunca como decoración:

| Variable CSS | Color | Hex | Origen / uso |
|---|---|---|---|
| `--ink-black` | ⬛ | `#1c1a1a` | Tinta de Sello — fondo principal de toda la web |
| `--paper` | 🟫 | `#d5c5b3` | Papel Manila — fondo del formulario de la demo |
| `--paper-line` | ◻️ | `#5a6366` | Gris Hormigón/Burocrático — bordes y separadores |
| `--approved-green` / `--approved-green-bright` | 🟩 | `#4a5d4e` / `#72866f` | Verde Vogón — estado "aprobado", éxito |
| `--accent-yellow` | 🟨 | `#f1c40f` | Amarillo Demolición — acento decorativo (títulos, viñetas, hover, foco) |
| `--stamp-red` / `--stamp-red-bright` | 🟥 | `#b23a3a` / `#d4574f` | Reservado **solo** para errores/rechazo (sello "RECHAZADO", mensajes de `ValidationError`) |

Tipografías: `IBM Plex Serif` (títulos) + `IBM Plex Mono` (todo lo demás), vía Google Fonts.

Todos los tokens viven en `src/index.css` — cambiar un valor ahí lo actualiza en las 8 slides a la vez.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`. La primera carga de la demo (Slide 6) tarda unos segundos porque descarga Pyodide y pydantic — quedan cacheados en el navegador para las siguientes visitas.

## Build de producción

```bash
npm run build
npm run preview   # para probar el build localmente
```

## Desplegar en Vercel

**Opción rápida (CLI):**
```bash
npm install -g vercel
vercel
```
Sigue las instrucciones; Vercel detecta automáticamente que es un proyecto Vite (framework: vite, build command `npm run build`, output directory `dist`).

**Opción desde GitHub:**
1. Sube este proyecto a un repo de GitHub.
2. En vercel.com → "Add New Project" → importa el repo.
3. Vercel detecta Vite automáticamente. No hace falta configurar nada más.
4. Deploy.

## Estructura

```
src/
  App.jsx              — orquestador de slides, navegación por teclado
  App.css              — todos los estilos de slides y demo
  index.css             — tokens de diseño (color, tipografía)
  usePyodide.js         — hook que carga Pyodide + pydantic una sola vez
  components/
    Slide.jsx            — wrapper base de cada slide
    Stamp.jsx             — sello visual de aprobado/rechazado
    PydanticDemo.jsx       — formulario + panel de código + validación en vivo
  slides/
    Slide01Cover.jsx … Slide08Cierre.jsx
```

## Navegación

- Flechas ←  →, Espacio, Page Up/Down
- Puntos de progreso o flechas en pantalla (clicables)

## Notas

- Pyodide se carga desde cdn.jsdelivr.net — necesita conexión a internet la primera vez.
- El modelo Pydantic de la demo (Slide 6) vive tanto en `PydanticDemo.jsx` (como string de Python) como visualmente en el panel de código — si cambias uno, actualiza el otro.