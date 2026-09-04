# 🚀 Masterclass: Desarrollo robusto y validación estricta de tipos con Pydantic
### Temática: La Inspección Vogon de Datos (Guía del Autoestopista Galáctico)
**Duración total:** 60–70 min | **Equipo 4** | Formato: 4 bloques (píldora extendida)

---

## Contenido de esta carpeta

| Archivo | Para quién | Descripción |
|---|---|---|
| `masterclass_pydantic_docente_solucion.ipynb` | Docente (tú) | Notebook de live coding del Bloque 2, código completo y comentado, ya ejecutado sin errores |
| `masterclass_pydantic_estudiantes_TODO.ipynb` | Estudiantes | Notebook del reto del Bloque 3, con `# TODO` para completar en parejas |
| `masterclass_pydantic_solucion_reto_DOCENTE.ipynb` | Docente (tú) | Clave de corrección del reto — **no compartir con el equipo antes del cierre** |
| `README.md` | Todos | Este documento |

---

## Estructura de la sesión (60–70 min)

1. **Bloque 1 — Contextualización e intuición (20 min):** en pizarra, sin diapositivas densas. Explica el problema (Python no valida type hints en runtime) y presenta Pydantic como el "Inspector Vogon automático".
2. **Bloque 2 — Live coding (25 min):** usa `masterclass_pydantic_docente_solucion.ipynb`, compartiendo pantalla y explicando línea a línea.
3. **Bloque 3 — Reto de aplicación (20 min):** reparte `masterclass_pydantic_estudiantes_TODO.ipynb`, trabajo en parejas.
4. **Bloque 4 — Code review y cierre (10–15 min):** revisa 2-3 soluciones en común, usa `masterclass_pydantic_solucion_reto_DOCENTE.ipynb` como referencia. Cierra con la ficha ética y el coste computacional (más abajo).

---

## Requisitos técnicos

```bash
pip install pydantic
pip install "pydantic[email]"   # necesario para el tipo EmailStr del Bloque 2
```

Versión usada y probada: **Pydantic v2.13** (sintaxis `field_validator`, `model_validator` — v2, no v1).

---

## 🆘 Guía de primeros auxilios (Troubleshooting)

| Error que puede aparecer | Causa probable | Solución |
|---|---|---|
| `ModuleNotFoundError: No module named 'pydantic'` | No está instalado en el entorno | `pip install pydantic` |
| `ImportError: email-validator is not installed` | Falta el extra de email | `pip install "pydantic[email]"` |
| `PydanticUserError` al usar `@validator` | Estás usando sintaxis de Pydantic v1 en v2 | Usa `@field_validator` en vez de `@validator`, y añade `@classmethod` debajo |
| El validador no se dispara nunca | Falta el decorador `@classmethod` justo debajo de `@field_validator` | Pydantic v2 requiere ambos decoradores en ese orden |
| `TypeError: Field() got an unexpected keyword argument` | Mezclando sintaxis de v1 (`regex=`) con v2 (`pattern=`) | Revisa la [documentación oficial](https://docs.pydantic.dev/latest/) para el nombre correcto en v2 |
| Un modelo anidado no valida | Le estáis pasando ya una instancia del modelo hijo en vez de un diccionario, o al revés | Ambos funcionan en Pydantic v2, pero comprobad que los nombres de campo coincidan exactamente |
| El notebook de estudiantes da `SyntaxError` en los TODO | Los `...` (Ellipsis) son marcadores de posición, no código válido | Hay que sustituirlos por el tipo/expresión real, no ejecutar la celda tal cual |

---

## Ficha de Criterio Ético

La validación estricta de tipos no es neutral: las reglas que definimos (longitudes mínimas, patrones de texto, formatos "válidos") reflejan supuestos sobre cómo *deberían* verse los datos, y pueden excluir casos legítimos que no encajan en ese molde — por ejemplo, un validador de nombres pensado solo para el alfabeto latino puede rechazar nombres con otros alfabetos o caracteres especiales, o un patrón de teléfono diseñado para un país puede bloquear números internacionales válidos. Además, un pipeline que descarta silenciosamente cualquier registro que no pase la validación (en vez de registrar y revisar esos casos) puede introducir sesgos sistemáticos en los datos que finalmente llegan a un modelo de ML, sub-representando a los grupos cuyos datos no encajan en el formato esperado. Por eso, al diseñar validadores es importante preguntarse a quién podrían estar excluyendo las reglas, y tratar los registros rechazados como una señal a investigar, no solo como "basura" a descartar.

---

## Coste computacional (para el cierre del Bloque 4)

Validar datos tiene un pequeño overhead de CPU comparado con no validar nada. En la inmensa mayoría de casos (APIs, configs, pipelines de datos) este coste es insignificante frente al beneficio de detectar errores pronto. La excepción son bucles de altísima frecuencia (millones de iteraciones internas) donde puede tener sentido validar una sola vez al entrar los datos y no en cada iteración interna del cálculo.
