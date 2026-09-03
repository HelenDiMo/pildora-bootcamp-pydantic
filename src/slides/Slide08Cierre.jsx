import Slide from "../components/Slide.jsx";

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
        <span>Trámite completado · Equipo 4</span>
      </div>
    </Slide>
  );
}
