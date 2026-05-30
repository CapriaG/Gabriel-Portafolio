import { useEffect, useRef } from 'react'

const skills = {
  Diseño: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Wireframing', 'Pruebas de usabilidad', 'Benchmarking'],
  Frontend: ['React', 'Vite', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'Git / GitHub'],
  'Marketing & Branding': ['Estrategia de contenidos', 'Identidad visual', 'Community management', 'Análisis de métricas'],
}

const metrics = [
  { num: '+100K', label: 'Reproducciones en reel' },
  { num: '3+', label: 'Marcas construidas' },
  { num: '2+', label: 'Años de experiencia' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="gc-section" id="sobre-mi">
      <div className="gc-section-label">Sobre mí</div>
      <div ref={ref} className="fade-up row g-5">
        {/* Left */}
        <div className="col-12 col-lg-5">
          <h2 className="gc-about-heading">
            Profesional <em>híbrido</em> en el cruce del diseño y el código
          </h2>
          <p className="gc-about-text">
            Me muevo desde siempre por la estética, es mi forma de pensar y construir.
            Hoy esa visión vive en productos digitales reales: interfaces que retienen usuarios,
            identidades de marca que duran, y código que hace exactamente lo que el diseño prometió.
          </p>
          <p className="gc-about-text">
            Trabajo como freelance para proyectos de distintos rubros y busco sumar a un equipo
            donde el diseño y la ingeniería se fusionen.
          </p>
          <div className="d-flex gap-5 mt-4">
            {metrics.map((m) => (
              <div key={m.label}>
                <span className="gc-metric-num">{m.num}</span>
                <span className="gc-metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — skills */}
        <div className="col-12 col-lg-7">
          <div className="d-flex flex-column gap-4">
            {Object.entries(skills).map(([cat, tags]) => (
              <div key={cat}>
                <div className="gc-skill-category">{cat}</div>
                <div>
                  {tags.map((t) => (
                    <span
                      key={t}
                      className={`gc-tag ${cat === 'Marketing & Branding' ? 'neutral' : ''}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
