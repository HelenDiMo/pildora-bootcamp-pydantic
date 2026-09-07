import Slide from "../components/Slide.jsx";
import archivoNotebook from "../docs/masterclass_pydantic_estudiantes_TODO.ipynb";

export default function Slide08Cierre() {
  return (
    <Slide code="VGN-0008" eyebrow="Cierre del expediente">
      <h2 className="slide-title">Una regla nunca es neutral</h2>
      <p className="slide-lede">
        Cada restricción que escribimos refleja un supuesto sobre cómo{" "}
        <em>deberían</em> verse los datos. Un patrón de email o de teléfono
        pensado para un solo país puede rechazar casos legítimos que
        simplemente no encajan en el molde.
      </p>
      <p className="slide-note">
        Coste computacional: validar tiene un pequeño overhead frente a no
        validar nada — casi siempre merece la pena. La excepción son bucles
        internos de altísima frecuencia, donde conviene validar una sola vez
        al entrar los datos.
      </p>
      <div className="cover-stamp cover-stamp--approved">
        <span>Trámite completado</span>
      </div>

      <a
        className="download-link"
        href={archivoNotebook}
        download="masterclass_pydantic_estudiantes_TODO.ipynb"
      >
        📥 Descargar el notebook del reto (.ipynb)
      </a>
    </Slide>
  );
}