export default function Hero() {
  return (
    <section className="gc-hero" id="inicio">
      <div className="gc-hero-bg" />

      <div className="gc-eyebrow">Disponible para trabajo remoto internacional</div>

      <h1 className="gc-hero-title">
        Diseño que<br /><em>piensa.</em><br />Código que<br />actúa.
      </h1>

      <p className="gc-hero-sub">
        Soy Gabriel Capria, diseñador UX/UI y desarrollador frontend de Buenos Aires.
        Creo productos digitales donde la identidad visual y la funcionalidad técnica son una sola cosa.
      </p>

      <div className="d-flex gap-3 flex-wrap">
        <a href="#proyectos" className="btn-gc-primary">Ver proyectos</a>
        <a href="#contacto" className="btn-gc-outline">Escribirme</a>
      </div>

      <div className="gc-scroll-indicator">
        <div className="gc-scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
