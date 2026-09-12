import Slide from "../components/Slide.jsx";

export default function Slide03QueEs() {
  return (
    <Slide code="VGN-0004" eyebrow="La solución">
      <h2 className="slide-title">Pydantic es el inspector automático</h2>
      <p className="slide-lede">
        Defines la forma que deben tener tus datos una vez. Pydantic
        comprueba cada "pasajero" que intenta entrar contra ese formulario —
        y lo hace al instante, no tres pasos después.
      </p>
      <div className="three-col">
        <div className="three-col__item">
          <h3>Valida</h3>
          <p>Comprueba tipos, rangos y formatos en cuanto llegan los datos.</p>
        </div>
        <div className="three-col__item">
          <h3>Convierte</h3>
          <p>
            Si el dato es compatible ("30" → 30), lo transforma en vez de
            rechazarlo sin motivo.
          </p>
        </div>
        <div className="three-col__item">
          <h3>Explica</h3>
          <p>Si algo falla, dice exactamente qué campo y por qué.</p>
        </div>
      </div>
    </Slide>
  );
}
