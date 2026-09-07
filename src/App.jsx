import { useCallback, useEffect, useState } from "react";
import "./App.css";

import Slide01Cover from "./slides/Slide01Cover.jsx";
import Slide02Problema from "./slides/Slide02Problema.jsx";
import Slide03QueEs from "./slides/Slide03QueEs.jsx";
import Slide04ComoFunciona from "./slides/Slide04ComoFunciona.jsx";
import Slide05Validadores from "./slides/Slide05Validadores.jsx";
import Slide06Demo from "./slides/Slide06Demo.jsx";
import Slide07UsoReal from "./slides/Slide07UsoReal.jsx";
import Slide08Cierre from "./slides/Slide08Cierre.jsx";

const SLIDES = [
  Slide01Cover,
  Slide02Problema,
  Slide03QueEs,
  Slide04ComoFunciona,
  Slide05Validadores,
  Slide06Demo,
  Slide07UsoReal,
  Slide08Cierre,
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