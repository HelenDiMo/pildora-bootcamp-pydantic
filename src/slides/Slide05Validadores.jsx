import Slide from "../components/Slide.jsx";
import CodeBlock from "../components/CodeBlock.jsx";

export default function Slide05Validadores() {
  return (
    <Slide code="VGN-0005" eyebrow="Reglas propias" wide>
      <h2 className="slide-title">Cuando la regla no es un tipo estándar</h2>
      <div className="two-col">
        <CodeBlock>
{`@field_validator("nombre")
@classmethod
def nombre_no_vacio(cls, v):
    if v.strip() == "":
        raise ValueError(
            "el nombre no puede "
            "estar vacío"
        )
    return v.strip().title()`}
        </CodeBlock>
        <ul className="check-list">
          <li>
            <strong>@field_validator</strong> — lógica de validación propia,
            del tamaño que necesites
          </li>
          <li>
            <strong>Modelos anidados</strong> — un formulario puede contener
            otro formulario (ej. <code>Equipaje</code> dentro de{" "}
            <code>Pasajero</code>)
          </li>
          <li>
            El validador también puede <strong>normalizar</strong> el dato,
            no solo rechazarlo
          </li>
        </ul>
      </div>
    </Slide>
  );
}
