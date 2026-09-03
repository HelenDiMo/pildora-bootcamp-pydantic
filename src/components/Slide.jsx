export default function Slide({ code, eyebrow, children, wide }) {
  return (
    <section className={`slide ${wide ? "slide--wide" : ""}`}>
      <div className="slide__frame">
        <div className="slide__meta">
          <span className="slide__code">EXPEDIENTE {code}</span>
          {eyebrow && <span className="slide__eyebrow">{eyebrow}</span>}
        </div>
        <div className="slide__content">{children}</div>
      </div>
    </section>
  );
}
