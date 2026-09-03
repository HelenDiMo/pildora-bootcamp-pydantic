export default function Stamp({ status }) {
  // status: "idle" | "checking" | "ok" | "error"
  const config = {
    idle: { label: "PENDIENTE DE REVISIÓN", color: "var(--text-on-dark-dim)" },
    checking: { label: "INSPECCIONANDO…", color: "var(--text-on-dark-dim)" },
    ok: { label: "TRÁMITE APROBADO", color: "var(--approved-green-bright)" },
    error: { label: "EXPEDIENTE RECHAZADO", color: "var(--stamp-red-bright)" },
  };
  const { label, color } = config[status] ?? config.idle;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",
        border: `2px solid ${color}`,
        color,
        padding: "0.4rem 0.9rem",
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: "0.8rem",
        letterSpacing: "0.04em",
        transform: status === "ok" || status === "error" ? "rotate(-2deg)" : "none",
        transition: "transform 0.15s ease",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: color,
          display: status === "checking" ? "inline-block" : "inline-block",
          opacity: status === "checking" ? 0.6 : 1,
        }}
      />
      {label}
    </div>
  );
}
