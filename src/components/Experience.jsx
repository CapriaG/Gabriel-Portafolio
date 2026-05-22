import { useEffect, useRef } from 'react'

const experiences = [
  {
    role: 'Diseño & Desarrollo',
    company: 'Magically Developer',
    period: 'Agosto 2024 — Presente · Freelance',
    bullets: [
      'Identidad visual integral y logotipos para EMT Fitness y Storships, asegurando coherencia de marca.',
      'Sitios web responsivos con React + Bootstrap, navegación impecable en mobile y desktop.',
      'Cada entrega equilibra estética y funcionalidad técnica sin compromisos.',
    ],
  },
  {
    role: 'Community Manager',
    company: 'Magically CM',
    period: 'Septiembre 2024 — Presente',
    bullets: [
      'Crecimiento orgánico de 1.346 a 1.944 seguidores en Instagram para Nivel Cero.',
      'Reel de productos animados con más de 120.000 reproducciones.',
      'Estrategia de contenido para Storships: redes sociales + landing con calculadora de envíos en React.',
    ],
  },
]

export default function Experience() {
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
    <section className="gc-section gc-section-dark" id="experiencia">
      <div className="gc-section-label">Experiencia</div>
      <div ref={ref} className="fade-up row g-4">
        {experiences.map((exp) => (
          <div key={exp.company} className="col-12 col-md-6">
            <div className="gc-exp-card">
              <div className="gc-exp-role">{exp.role}</div>
              <div className="gc-exp-company">{exp.company}</div>
              <div className="gc-exp-period">{exp.period}</div>
              <ul className="gc-exp-bullets">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
