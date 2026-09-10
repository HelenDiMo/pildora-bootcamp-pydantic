import Slide from "../components/Slide.jsx";
import CodeBlock from "../components/CodeBlock.jsx";

export default function Slide04ComoFunciona() {
  return (
    <Slide code="VGN-0004" eyebrow="Cómo funciona" wide>
      <h2 className="slide-title">Un formulario, hecho clase</h2>
      <div className="two-col">
        <CodeBlock>
{`class Pasajero(BaseModel):
    nombre: str = Field(
        ..., min_length=1, max_length=50
    )
    edad: int = Field(..., gt=0, le=1000)
    especie: Literal[
        "Humano", "Vogon",
        "Betelgeusiano", "Androide"
    ]`}
        </CodeBlock>
        <ul className="check-list">
          <li>
            <strong>BaseModel</strong> — la clase de la que hereda cualquier
            "formulario" de datos
          </li>
          <li>
            <strong>Field()</strong> — añade restricciones: longitud mínima,
            rangos numéricos, valores por defecto
          </li>
          <li>
            <strong>Literal[...]</strong> — solo acepta esos valores
            exactos, como una lista cerrada de casillas
          </li>
        </ul>
      </div>
    </Slide>
  );
}
