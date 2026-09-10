import { useEffect, useMemo, useState } from "react";
import { usePyodide } from "../usePyodide.js";
import Stamp from "./Stamp.jsx";
import CodeBlock from "./CodeBlock.jsx";

const PY_MODEL = `from pydantic import BaseModel, Field, EmailStr, field_validator
from typing import Literal

class PasajeroGalactico(BaseModel):
    nombre: str = Field(..., min_length=1, max_length=50)
    edad: int = Field(..., gt=0, le=1000)
    especie: Literal["Humano", "Vogon", "Betelgeusiano", "Androide"]
    contacto: EmailStr

    @field_validator("nombre")
    @classmethod
    def nombre_no_vacio(cls, v):
        if v.strip() == "":
            raise ValueError("el nombre no puede estar vacío")
        return v.strip().title()`;

const ESPECIES = ["Humano", "Vogon", "Betelgeusiano", "Androide"];

const initialForm = {
  nombre: "Arthur Dent",
  edad: "30",
  especie: "Humano",
  contacto: "arthur@tierra.gal",
};

export default function PydanticDemo() {
  const { pyodide, status, statusMessage } = usePyodide();
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState({ stamp: "idle", output: "" });
  const [modelReady, setModelReady] = useState(false);

  // Define el modelo en el intérprete de Python una vez que Pyodide está listo
  useEffect(() => {
    if (status !== "ready") return;
    const py = pyodide.current;
    try {
      py.runPython(PY_MODEL);
      setModelReady(true);
    } catch (e) {
      console.error(e);
    }
  }, [status]);

  const runValidation = useMemo(
    () => async (currentForm) => {
      if (status !== "ready" || !modelReady) return;
      const py = pyodide.current;
      py.globals.set("nombre_in", currentForm.nombre);
      py.globals.set("edad_in", currentForm.edad);
      py.globals.set("especie_in", currentForm.especie);
      py.globals.set("contacto_in", currentForm.contacto);

      const code = `
import json
from pydantic import ValidationError

_salida = {}
try:
    p = PasajeroGalactico(nombre=nombre_in, edad=edad_in, especie=especie_in, contacto=contacto_in)
    _salida = {"ok": True, "repr": repr(p)}
except ValidationError as e:
    _salida = {"ok": False, "errors": e.errors()}
json.dumps(_salida)
`;
      try {
        const raw = py.runPython(code);
        const parsed = JSON.parse(raw);
        if (parsed.ok) {
          setResult({ stamp: "ok", output: parsed.repr });
        } else {
          const lines = parsed.errors.map(
            (e) => `• ${e.loc.join(".")}: ${e.msg}`,
          );
          setResult({ stamp: "error", output: lines.join("\n") });
        }
      } catch (err) {
        setResult({ stamp: "error", output: String(err) });
      }
    },
    [status, modelReady],
  );

  useEffect(() => {
    if (status === "ready" && modelReady) {
      runValidation(form);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, modelReady]);

  function handleChange(field, value) {
    const next = { ...form, [field]: value };
    setForm(next);
    setResult((r) => ({ ...r, stamp: "checking" }));
    runValidation(next);
  }

  return (
    <div className="demo-grid">
      <div className="demo-panel demo-panel--paper">
        <div className="demo-panel__header">
          <span>Formulario 42-B · Solicitud de Entrada</span>
        </div>
        <label className="demo-field">
          <span>Nombre completo</span>
          <input
            type="text"
            value={form.nombre}
            onChange={(e) => handleChange("nombre", e.target.value)}
          />
        </label>
        <label className="demo-field">
          <span>Edad (años terrestres)</span>
          <input
            type="text"
            value={form.edad}
            onChange={(e) => handleChange("edad", e.target.value)}
          />
        </label>
        <label className="demo-field">
          <span>Especie</span>
          <select
            value={form.especie}
            onChange={(e) => handleChange("especie", e.target.value)}
          >
            {ESPECIES.map((esp) => (
              <option key={esp} value={esp}>
                {esp}
              </option>
            ))}
          </select>
        </label>
        <label className="demo-field">
          <span>Email de contacto</span>
          <input
            type="text"
            value={form.contacto}
            onChange={(e) => handleChange("contacto", e.target.value)}
          />
        </label>

        <div className="demo-stamp-row">
          <Stamp
            status={
              status !== "ready"
                ? "checking"
                : result.stamp === "idle"
                  ? "checking"
                  : result.stamp
            }
          />
        </div>
      </div>

      <div className="demo-panel demo-panel--code">
        <div className="demo-panel__header demo-panel__header--dark">
          <span>modelo.py</span>
        </div>
        <CodeBlock className="demo-code">{PY_MODEL}</CodeBlock>

        <div className="demo-panel__header demo-panel__header--dark">
          <span>salida del intérprete (Python real, en tu navegador)</span>
        </div>
        <pre
          className={`demo-output ${
            result.stamp === "error" ? "demo-output--error" : ""
          } ${result.stamp === "ok" ? "demo-output--ok" : ""}`}
        >
          {status !== "ready"
            ? statusMessage || "Cargando…"
            : result.output || "…"}
        </pre>
      </div>
    </div>
  );
}
