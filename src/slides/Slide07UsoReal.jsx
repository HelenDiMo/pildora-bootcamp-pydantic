import Slide from "../components/Slide.jsx";

export default function Slide07UsoReal() {
  return (
    <Slide code="VGN-0007" eyebrow="Más allá de la nave">
      <h2 className="slide-title">¿Dónde vive esto en el mundo real?</h2>
      <div className="three-col">
        <div className="three-col__item">
          <h3>APIs</h3>
          <p>FastAPI usa Pydantic para validar cada request y response.</p>
        </div>
        <div className="three-col__item">
          <h3>Configuración</h3>
          <p>
            Validar variables de entorno o archivos YAML/JSON antes de
            arrancar una app.
          </p>
        </div>
        <div className="three-col__item">
          <h3>Pipelines de ML</h3>
          <p>
            Comprobar que los datos de entrada tienen la forma correcta
            antes de llegar al modelo.
          </p>
        </div>
      </div>
    </Slide>
  );
}
