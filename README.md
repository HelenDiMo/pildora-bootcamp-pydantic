# 🚀 Masterclass / Píldora Extendida: Validación Estricta de Tipos con Pydantic

Sesión MasterClass de estilo "píldora extendida" para el **Módulo de AI Engineering** sobre **desarrollo robusto y validación estricta de tipos en Python** con **Pydantic**, ambientada en la Aduana Intergaláctica Vogon. Incluye una web interactiva con una demo en vivo: un formulario que valida datos reales usando Pydantic ejecutado en el navegador vía **Pyodide** (Python compilado a WebAssembly), sin backend.

## 📋 Índice

- [Contenido de la entrega](#-contenido-de-la-entrega)
- [Stack y paleta de colores](#️-stack-y-paleta-de-colores)
- [Requisitos e instalación](#️-requisitos-e-instalación)
- [Cómo ejecutar cada parte](#️-cómo-ejecutar-cada-parte)
- [Recursos externos](#-recursos-externos)
- [Primeros auxilios (Troubleshooting)](#-primeros-auxilios-troubleshooting)
- [Criterio ético](#-criterio-ético)
- [Autoría](#-autoría)

---

## 📦 Contenido de la entrega

| Entregable | Enlace / archivo |
| --- | --- |
| Web interactiva (slides + demo en vivo) | [https://masterclass-pydantic.vercel.app/](https://masterclass-pydantic.vercel.app/) |
| Presentación teórica (`.pdf`) | `docs/teoria_pydantic.pdf` |
| Notebook con la solución completa (live coding) | `docs/masterclass_pydantic_docente_solucion.ipynb` |
| Reto de aplicación — para el alumnado | `docs/masterclass_pydantic_estudiantes_TODO.ipynb` |
| Reto de aplicación — _SOLUCIÓN_ | `docs/masterclass_pydantic_solucion_reto_DOCENTE.ipynb` |
| Documentación de la masterclass (estructura, troubleshooting, ética) | `docs/README.md` |

---

## 🛠️ Stack y paleta de colores

- React + Vite
- Pyodide (cargado desde CDN en `index.html`) + `micropip` para instalar `pydantic` y `email-validator` en el navegador (este último es necesario para que `EmailStr` funcione)
- CSS plano (sin framework), con tokens de diseño en `src/index.css`

Paleta inspirada en la estética burocrática Vogon (formularios, sellos, papeleo intergaláctico). Cada color tiene un origen y un uso semántico concreto — el rojo está reservado exclusivamente para errores/rechazos, nunca como decoración:

| Variable CSS | Color | Origen / uso |
|---|---|---|
| `--ink-black` | ![#1c1a1a](https://img.shields.io/badge/-%231c1a1a-1c1a1a) | Tinta de Sello — fondo principal de toda la web |
| `--paper` | ![#d5c5b3](https://img.shields.io/badge/-%23d5c5b3-d5c5b3) | Papel Manila — fondo del formulario de la demo |
| `--paper-line` | ![#5a6366](https://img.shields.io/badge/-%235a6366-5a6366) | Gris Hormigón/Burocrático — bordes y separadores |
| `--approved-green` / `--approved-green-bright` | ![#4a5d4e](https://img.shields.io/badge/-%234a5d4e-4a5d4e) ![#72866f](https://img.shields.io/badge/-%2372866f-72866f) | Verde Vogón — estado "aprobado", éxito |
| `--accent-yellow` | ![#f1c40f](https://img.shields.io/badge/-%23f1c40f-f1c40f) | Amarillo Demolición — acento decorativo (títulos, viñetas, hover, foco) |
| `--stamp-red` / `--stamp-red-bright` | ![#b23a3a](https://img.shields.io/badge/-%23b23a3a-b23a3a) ![#d4574f](https://img.shields.io/badge/-%23d4574f-d4574f) | Reservado **solo** para errores/rechazo (sello "RECHAZADO", mensajes de `ValidationError`) |

Tipografías: `IBM Plex Serif` (títulos) + `IBM Plex Mono` (todo lo demás), vía Google Fonts. Todos los tokens viven en `src/index.css` — cambiar un valor ahí lo actualiza en las 9 slides a la vez.

<details>
<summary>Estructura del proyecto</summary>

```
src/
  App.jsx                — orquestador de slides, navegación por teclado
  App.css                — todos los estilos de slides y demo
  index.css              — tokens de diseño (color, tipografía)
  usePyodide.js           — hook que carga Pyodide + pydantic una sola vez
  components/
    Slide.jsx              — wrapper base de cada slide
    Stamp.jsx               — sello visual de aprobado/rechazado
    PydanticDemo.jsx         — formulario + panel de código + validación en vivo
  slides/
    Slide01Cover.jsx … Slide09Cierre.jsx
docs/
  teoria_pydantic.pdf
  masterclass_pydantic_docente_solucion.ipynb
  masterclass_pydantic_estudiantes_TODO.ipynb
  masterclass_pydantic_solucion_reto_DOCENTE.ipynb
  README.md
```

</details>

---

## ⚙️ Requisitos e instalación

Necesitas Node.js (18 o superior) y npm.

```bash
git clone https://github.com/HelenDiMo/pildora-bootcamp-pydantic.git
cd pildora-bootcamp-pydantic
npm install
```

Para abrir los notebooks de `docs/` no hace falta nada especial: VSCode, Jupyter o Google Colab, todos con `pydantic` instalado (`pip install pydantic[email]`).

---

## ▶️ Cómo ejecutar cada parte

1. **Web (slides + demo):**
   ```bash
   npm run dev
   ```
   Abre `http://localhost:5173`. La primera carga de la demo (Slide 7) tarda unos segundos porque descarga Pyodide y pydantic en el navegador — quedan cacheados para las siguientes visitas.

   **Navegación:** flechas `←`/`→`, `Espacio`, `Page Up`/`Page Down`, o los puntos/flechas en pantalla (clicables). El teclado no interfiere si estás escribiendo dentro del formulario de la demo.

2. **Build de producción:**
   ```bash
   npm run build
   npm run preview   # para probar el build localmente
   ```

3. **Notebooks:** abre cualquiera de los tres `.ipynb` de `docs/` en VSCode, Jupyter o Google Colab. El notebook para el alumnado tiene bloques marcados con `# TODO: Implementar aquí`.

### Desplegar en Vercel

```bash
npm install -g vercel
vercel
```
Vercel detecta automáticamente que es un proyecto Vite (framework: vite, build command `npm run build`, output directory `dist`) — no hace falta configurar nada más.

---

## 🔗 Recursos externos

- **Web interactiva (Vercel):** [https://masterclass-pydantic.vercel.app/](https://masterclass-pydantic.vercel.app/) — slides navegables por teclado + demo en vivo con Pydantic ejecutándose de verdad en el navegador vía Pyodide.
- **Documentación oficial de Pydantic:** [https://docs.pydantic.dev/latest/](https://docs.pydantic.dev/latest/)
- **Documentación oficial de Pyodide:** [https://pyodide.org/en/stable/](https://pyodide.org/en/stable/)

---

## 🚑 Primeros auxilios (Troubleshooting)

| Error | Causa habitual | Solución |
|---|---|---|
| `ModuleNotFoundError: No module named 'pydantic'` | No está instalado en el entorno (al abrir los notebooks) | `pip install pydantic` |
| `ImportError: email-validator is not installed` | Falta el extra de email | `pip install "pydantic[email]"` (local) — en la web ya se instala solo vía micropip |
| `PydanticUserError` al usar `@validator` | Sintaxis de Pydantic v1 en v2 | Usa `@field_validator` + `@classmethod` debajo, no `@validator` |
| En la web, el formulario se queda en "INSPECCIONANDO…" sin resolver nunca | Sin conexión a internet (Pyodide no puede cargarse desde el CDN), o un error de JS sin capturar | Comprueba tu conexión; si persiste, abre la consola del navegador (F12) y revisa el error exacto |
| `npm error ... Could not read package.json` | Estás ejecutando `npm install`/`npm run dev` en la carpeta equivocada | Asegúrate de estar dentro de la carpeta del proyecto (`cd pildora-bootcamp-pydantic`) antes de ejecutar los comandos |
| El notebook de estudiantes da `SyntaxError` en los `TODO` | Los `...` (Ellipsis) son marcadores de posición, no código válido | Sustitúyelos por el tipo/expresión real antes de ejecutar la celda |

Más detalle de troubleshooting específico de cada notebook en [`docs/README.md`](docs/README.md).

---

## 🧭 Criterio ético

La validación estricta de tipos no es neutral: las reglas que definimos (longitudes mínimas, patrones de texto, formatos "válidos") reflejan supuestos sobre cómo deberían verse los datos, y pueden excluir casos legítimos que no encajan en ese molde — por ejemplo, un validador de nombres pensado solo para el alfabeto latino, o un patrón de teléfono diseñado para un único país. Ver la sección completa en [`docs/README.md`](docs/README.md#ficha-de-criterio-ético).

---

## 👥 Autoría

Preparado por Elena Díaz - [@HelenDiMo](https://github.com/HelenDiMo) para el bloque de AI Engineering del Bootcamp IA & Data Science de Somos F5