import Slide from "../components/Slide.jsx";

export default function Slide01Cover() {
  return (
    <Slide code="VGN-0001" eyebrow="Servicio de Aduanas Intergaláctico">
      <h1 className="cover-title">
        Validación estricta
        <br />
        de datos con <span className="cover-title__accent">Pydantic</span>
      </h1>
      <p className="cover-sub">
        Ningún dato sube a la nave sin pasar por inspección. Aprende a
        construir esa inspección en Python.
      </p>
      <div className="cover-stamp">
        <span>Formulario oficial · Uso Educativo</span>
      </div>
    </Slide>
  );
}
