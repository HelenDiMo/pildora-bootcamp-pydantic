# 🚀 Guía de preparación — Masterclass Pydantic
### Fecha de la sesión: 14/09 · Hoy: 04/09 · **11 días disponibles**

Esta guía cubre tres cosas en paralelo: que tú domines la teoría lo suficiente para reexplicarla, que revisemos juntas todo el material ya creado, y que llegues al 14/09 con la sesión ensayada y con los tiempos controlados.

---

## 1. Objetivo de estas dos semanas

No se trata de memorizar Pydantic — se trata de que puedas **responder preguntas improvisadas** de tus compañeros sin quedarte en blanco. La prueba de fuego: si puedes explicarle a alguien sin Python por qué `edad: int` no protege nada por sí solo, y por qué Pydantic sí, ya vas bien encaminada.

---

## 2. Cronograma día a día

### 🗓️ Días 1-2 (04/09 – 05/09) — Dominar la teoría
- [ ] Leer `teoria_pydantic.pdf` completo, sin prisa, una vez de principio a fin
- [ ] Segunda pasada: por cada sección, cerrar el PDF e intentar explicarla en voz alta con tus palabras (a ti misma, a un peluche, a quien sea)
- [ ] Anota aquí las 2-3 cosas que más te cuesten explicar — las repasamos juntas en la próxima sesión conmigo
- [ ] Ejecutar tú misma, línea a línea, el notebook `masterclass_pydantic_docente_solucion.ipynb` — no solo leerlo, **ejecutarlo y modificar valores** para ver qué pasa (cambia edades, prueba especies que no existen, rompe el email)

**Preguntas que deberías poder responder sin mirar el PDF al final del día 2:**
- ¿Por qué un type hint normal de Python no evita errores?
- ¿Qué hace `Field()` que no hace un type hint solo?
- ¿Qué diferencia hay entre que Pydantic *convierta* un dato y que lo *rechace*?
- ¿Para qué sirve un modelo anidado, con un ejemplo propio (no el de la clase)?

### 🗓️ Días 3-4 (06/09 – 07/09) — Revisión conjunta de materiales
- [ ] Sesión conmigo: repasamos tus dudas del bloque anterior
- [ ] Revisamos juntas, uno por uno: el notebook docente, el notebook de estudiantes (TODO), y la solución del reto — ¿el nivel de dificultad encaja con "básico, poca POO"? Podemos simplificar si algo se ve muy denso
- [ ] Revisamos la web en React: navega las 8 slides tú misma, prueba la demo interactiva en el navegador (no solo en local — pruébala también en el móvil, por si alguien la mira desde ahí)
- [ ] Decide si el bonus del reto (`@model_validator`) se queda como estaba (para investigar) o lo simplificamos

### 🗓️ Día 5 (08/09) — Entender y personalizar la web

Este día es solo para la web: entenderla por dentro y darle tu toque, no para ensayar la clase todavía.

- [ ] Abre el proyecto en local (`npm run dev`) y recórrete el código junto al resultado visual: abre `src/App.jsx` (cómo se navega entre slides), luego cada archivo de `src/slides/` uno a uno mientras ves esa slide en el navegador
- [ ] Entiende `src/index.css` — ahí están los "tokens" de diseño (colores, tipografías) que se usan en toda la web. Cambiar algo aquí lo cambia en todas las slides a la vez
- [ ] Entiende `src/components/PydanticDemo.jsx` a alto nivel (no hace falta dominar cada línea): el formulario de la izquierda, el panel de código de la derecha, y `usePyodide.js` que carga Python en el navegador
- [ ] Lista de retoques a considerar (marca los que te interesen):
  - [ ] Cambiar la paleta de colores (`--stamp-red`, `--approved-green`, `--paper`, etc. en `index.css`) por otra que sientas más "tuya"
  - [ ] Cambiar el texto de portada o el tono de algún slide para que suene más a como hablas tú
  - [ ] Añadir tu nombre/equipo en la portada o en el cierre
  - [ ] Revisar si algún texto se corta o se ve mal en pantallas pequeñas (redimensiona la ventana del navegador para simularlo)
  - [ ] Opcional: añadir una slide propia (ej. una foto tuya, un dato curioso, o una diapositiva de "sobre mí") siguiendo el patrón de `Slide.jsx`
- [ ] Guarda los cambios y vuelve a probar `npm run build` para confirmar que todo sigue compilando sin errores antes de hacer commit

**Nota:** los cambios de contenido (textos, colores) son seguros y fáciles. Si tocas `PydanticDemo.jsx` o `usePyodide.js`, ve con más cuidado — ahí vive la lógica de la demo en vivo; si algo deja de funcionar, dímelo y lo revisamos juntas antes de seguir.

### 🗓️ Días 6-7 (09/09 – 10/09) — Primer ensayo de Bloque 1 y 2
- [ ] Ensaya el Bloque 1 (contextualización) en voz alta, con cronómetro — objetivo: 20 min, sin diapositivas densas (recuerda: la guía pide pizarra/diagrama, no lectura)
- [ ] Ensaya el Bloque 2 (live coding) siguiendo tu propio notebook docente, explicando cada línea como si fuera la primera vez que lo ven — objetivo: 25 min
- [ ] Anota en qué punto te trabas o te alargas más de lo esperado
- [ ] Ajusta el guion si algún bloque se dispara de tiempo

### 🗓️ Día 8 (11/09) — Ensayo del reto y cierre
- [ ] Resuelve tú misma el reto del Bloque 3 desde cero, cronometrando cuánto tarda alguien con nivel básico (usa la solución del docente solo para comprobar, no para copiar mientras ensayas)
- [ ] Prepara 2-3 errores típicos que vas a "dejar" que aparezcan a propósito durante el reto, para poder usarlos como ejemplo en el Bloque 4 (code review)
- [ ] Ensaya el cierre: ficha ética + coste computacional — que no se sienta como un añadido leído deprisa al final

### 🗓️ Día 9 (12/09) — Ensayo completo cronometrado
- [ ] Corre la sesión entera de principio a fin, con cronómetro real, simulando que tus compañeros están delante
- [ ] Comprueba que el total cae entre 60 y 90 min (según la guía oficial)
- [ ] Prueba explícitamente el "modo peor caso": Pyodide tarda en cargar, alguien pregunta algo que no esperabas, el proyector no muestra bien el código — ¿tienes un plan B para cada uno?

### 🗓️ Día 10 (13/09) — Repaso ligero y logística
- [ ] Repaso rápido (no intensivo) de las preguntas que más te costaron al principio
- [ ] Comprueba que tienes: notebooks descargados y probados en el portátil que vas a usar el día de la clase, la web desplegada (o corriendo en local como respaldo), conexión a internet para Pyodide
- [ ] Ten un plan B sin internet: si Pyodide no carga en directo, ¿enseñas la demo en vídeo/capturas o la saltas y sigues con el resto?
- [ ] Duerme bien — en serio, un ensayo cronometrado de más ese día suele generar más nervios que seguridad

### 🗓️ Día 11 (14/09) — Día de la masterclass
- [ ] Llega con margen para comprobar proyector, internet y que la web carga
- [ ] Ten a mano: notebook docente abierto, web abierta en una pestaña ya "precalentada" (para que Pyodide ya esté cargado antes de empezar el Bloque de demo, si la usas ahí)
- [ ] Respira — te lo sabes mejor de lo que crees a estas alturas

---

## 3. Checklist de revisión de materiales (para el día 3-4)

| Material | ¿Revisado? | ¿Cambios necesarios? |
|---|---|---|
| `teoria_pydantic.pdf` / `.docx` | ☐ | |
| `masterclass_pydantic_docente_solucion.ipynb` | ☐ | |
| `masterclass_pydantic_estudiantes_TODO.ipynb` | ☐ | |
| `masterclass_pydantic_solucion_reto_DOCENTE.ipynb` | ☐ | |
| Web React (slides 1-5, teoría) | ☐ | |
| Web React (slide 6, demo interactiva) | ☐ | |
| Web React (slides 7-8, cierre) | ☐ | |
| `README-pildora.md` (troubleshooting, ética) | ☐ | |

---

## 4. Preguntas de debate que te pueden hacer (prepárate respuestas breves)

- "¿Esto no es lo mismo que los type hints normales de Python?" → No: los type hints normales no se comprueban en tiempo de ejecución, son solo documentación. Pydantic sí valida de verdad al crear el objeto.
- "¿Y si no quiero que convierta el tipo, solo que lo rechace?" → Se puede configurar un modo estricto (`strict=True`), pero no lo hemos cubierto en la sesión — es una buena pregunta para dejar abierta como "para investigar".
- "¿Esto ralentiza mucho el código?" → Overhead pequeño, normalmente irrelevante salvo en bucles de muy alta frecuencia (ya está en el cierre del PDF).
- "¿Se puede usar fuera de FastAPI?" → Sí, es una librería independiente; FastAPI la usa, pero Pydantic funciona sola en cualquier proyecto Python.

---

## 5. Nota para ti

No hace falta que domines cada rincón de Pydantic — hace falta que domines **lo que enseña tu propia sesión**. Si alguien pregunta algo fuera de ese alcance y no lo sabes, "buena pregunta, lo miro y os digo" es una respuesta perfectamente válida y profesional. Es mejor eso que inventar.

Cuando quieras, empezamos por donde tú digas: puedo hacerte preguntas tipo examen oral sobre la teoría, revisar contigo el notebook, o cronometrar un ensayo del Bloque 1 ahora mismo.
