import { useEffect, useRef, useState } from "react";

/**
 * Carga Pyodide desde el CDN (ya inyectado en index.html) e instala pydantic
 * una única vez, sin importar cuántos componentes lo pidan.
 */
let pyodideSingleton = null;
let pyodideLoadingPromise = null;

async function loadPyodideOnce(onStatus) {
  if (pyodideSingleton) return pyodideSingleton;
  if (pyodideLoadingPromise) return pyodideLoadingPromise;

  pyodideLoadingPromise = (async () => {
    onStatus("Cargando intérprete de Python (Pyodide)…");
    const pyodide = await window.loadPyodide();
    onStatus("Instalando pydantic…");
    await pyodide.loadPackage("micropip");
    const micropip = pyodide.pyimport("micropip");
    await micropip.install("pydantic");
    onStatus("listo");
    pyodideSingleton = pyodide;
    return pyodide;
  })();

  return pyodideLoadingPromise;
}

export function usePyodide() {
  const [status, setStatus] = useState("idle"); // idle | loading | ready | error
  const [statusMessage, setStatusMessage] = useState("");
  const pyodideRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    loadPyodideOnce(setStatusMessage)
      .then((pyodide) => {
        if (cancelled) return;
        pyodideRef.current = pyodide;
        setStatus("ready");
      })
      .catch((err) => {
        console.error(err);
        if (cancelled) return;
        setStatusMessage(String(err));
        setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { pyodide: pyodideRef, status, statusMessage };
}
