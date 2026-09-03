import Slide from "../components/Slide.jsx";
import PydanticDemo from "../components/PydanticDemo.jsx";

export default function Slide06Demo() {
  return (
    <Slide code="VGN-0006" eyebrow="Inspección en vivo" wide>
      <h2 className="slide-title">Rellena el formulario. Rompe las reglas.</h2>
      <p className="slide-lede slide-lede--tight">
        Esto no es una simulación: es Python + Pydantic ejecutándose de
        verdad en tu navegador. Prueba a dejar el nombre vacío, poner una
        edad de texto, o un email sin @.
      </p>
      <PydanticDemo />
    </Slide>
  );
}
