import { useCallback, useEffect, useState } from "react";
import "./App.css";

import Slide01Cover from "./slides/Slide01Cover.jsx";
import Slide02Vogones from "./slides/Slide02Vogones.jsx";
import Slide03Problema from "./slides/Slide03Problema.jsx";
import Slide04QueEs from "./slides/Slide04QueEs.jsx";
import Slide05ComoFunciona from "./slides/Slide05ComoFunciona.jsx";
import Slide06Validadores from "./slides/Slide06Validadores.jsx";
import Slide07Demo from "./slides/Slide07Demo.jsx";
import Slide08UsoReal from "./slides/Slide08UsoReal.jsx";
import Slide09Cierre from "./slides/Slide09Cierre.jsx";

const SLIDES = [
  Slide01Cover,
  Slide02Vogones,
  Slide03Problema,
  Slide04QueEs,
  Slide05ComoFunciona,
  Slide06Validadores,
  Slide07Demo,
  Slide08UsoReal,
  Slide09Cierre,
];

export default function App() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((next) => {
    setIndex((current) => {
      const clamped = Math.max(0, Math.min(SLIDES.length - 1, next));
      return clamped === current ? current : clamped;
    });
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      const tag = e.target.tagName;
      const isTypingInField =
        tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || e.target.isContentEditable;
      if (isTypingInField) return; // no interceptar teclas mientras se rellena el formulario

      if (["ArrowRight", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        goTo(index + 1);
      } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        goTo(index - 1);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, goTo]);

  const CurrentSlide = SLIDES[index];

  return (
    <div className="deck">
      <CurrentSlide />

      <nav className="deck-nav" aria-label="Navegación de slides">
        <button
          className="deck-nav__arrow"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Slide anterior"
        >
          ‹
        </button>

        <ol className="deck-nav__dots">
          {SLIDES.map((_, i) => (
            <li key={i}>
              <button
                className={`deck-nav__dot ${
                  i === index ? "deck-nav__dot--active" : ""
                }`}
                onClick={() => goTo(i)}
                aria-label={`Ir a slide ${i + 1}`}
                aria-current={i === index}
              />
            </li>
          ))}
        </ol>

        <button
          className="deck-nav__arrow"
          onClick={() => goTo(index + 1)}
          disabled={index === SLIDES.length - 1}
          aria-label="Slide siguiente"
        >
          ›
        </button>
      </nav>

      <div className="deck-progress-label">
        {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
      </div>
    </div>
  );
}