import Slide from "../components/Slide.jsx";

export default function Slide02Vogones() {
  return (
    <Slide code="VGN-0002" eyebrow="Antes de empezar... ¿quiénes son?" wide>
      <div className="two-col">
        <div>
          <h2 className="slide-title">Los Vogones</h2>
          <p className="slide-lede">
            Una raza alienígena célebre por su amor incondicional al papeleo:
            formularios en triplicado, sellos, expedientes y procedimientos
            que no admiten ni una coma fuera de sitio. Si tu solicitud no
            cumple el formato exacto, no pasa — sin excepciones, sin
            explicaciones, sin cortesía.
          </p>
          <p className="slide-note">
            Nada de esto es casualidad: hoy vamos a construir exactamente
            ese tipo de inspector implacable, pero para datos en Python.
          </p>
        </div>
        <img
          src="/Vogon.webp"
          alt="Ilustración de un Vogon"
          className="slide-image"
        />
      </div>
    </Slide>
  );
}