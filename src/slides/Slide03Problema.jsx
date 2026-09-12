import Slide from "../components/Slide.jsx";
import CodeBlock from "../components/CodeBlock.jsx";

export default function Slide02Problema() {
  return (
    <Slide code="VGN-0003" eyebrow="El problema">
      <h2 className="slide-title">Python confía. Demasiado.</h2>
      <p className="slide-lede">
        Un type hint como <code>edad: int</code> es una nota para humanos y
        editores. Python no la comprueba en tiempo real.
      </p>
      <CodeBlock>
{`def registrar_pasajero(edad: int):
    return edad * 2

registrar_pasajero("no soy un número")
# no explota aquí...
# explota tres funciones más abajo,
# en un lugar que no tiene nada que
# ver con el error original`}
      </CodeBlock>
      <p className="slide-note">
        El resultado: errores que aparecen lejos de su causa, difíciles de
        rastrear — justo el tipo de papeleo mal archivado que un inspector
        Vogon no toleraría.
      </p>
    </Slide>
  );
}
