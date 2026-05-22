import { useEffect, useRef } from 'react'

const education = [
  { year: '2025–2026', title: 'Diplomatura en Diseño UX/UI', school: 'Coderhouse', badge: 'En curso' },
  { year: '2026', title: 'Curso Diseñador de Impacto', school: 'Nature Academy', badge: null },
  { year: '2024', title: 'Master en Diseño Gráfico', school: 'Udemy', badge: null },
  { year: '2022–2024', title: 'Tecnicatura en Programación', school: 'Instituto Superior TECLAB', badge: null },
]

export default function Education() {
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
    <section className="gc-section gc-section-dark" id="educacion">
      <div className="gc-section-label">Formación</div>
      <div ref={ref} className="fade-up" style={{ maxWidth: 720 }}>
        {education.map((e) => (
          <div key={e.title} className="gc-edu-item">
            <div className="row g-3 align-items-start">
              <div className="col-auto" style={{ minWidth: '6rem' }}>
                <span className="gc-edu-year">{e.year}</span>
              </div>
              <div className="col">
                <div className="gc-edu-title">{e.title}</div>
                <div className="gc-edu-school">{e.school}</div>
                {e.badge && <span className="gc-edu-badge">{e.badge}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
