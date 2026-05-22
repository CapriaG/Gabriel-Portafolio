import { useEffect, useRef } from 'react'

const projects = [
  {
    tag: 'UX/UI Case Study',
    name: 'GymFinder',
    desc: 'Caso de diseño UX/UI completo — investigación, wireframes, prototipo y pruebas de usabilidad para una app de búsqueda de gimnasios.',
    href: 'https://www.behance.net/gallery/248760239/GymFinder-UXUI-case',
    cta: 'Ver en Behance',
  },
  {
    tag: 'Branding & Web',
    name: 'EMT Fitness',
    desc: 'Identidad de marca completa para personal trainer: logo, paleta, tipografía y gestión de redes orientada al posicionamiento.',
    href: 'https://www.behance.net/gallery/240933139/EMT-Fitness',
    cta: 'Ver en Behance',
  },
  {
    tag: 'Frontend + UX',
    name: 'Storships',
    desc: 'Landing page con calculadora de envíos en React, identidad visual de marca y estrategia de contenido para startup logística.',
    href: "https://storships.com.ar/",
    cta: 'Próximamente en Behance',
  },
  {
    tag: 'Portfolio completo',
    name: 'Ver todo el trabajo →',
    desc: 'Explorá el perfil de Behance con todos los proyectos, procesos de diseño y entregables completos.',
    href: 'https://www.behance.net/gabrielcapria',
    cta: 'Behance',
  },
]

export default function Projects() {
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
    <section className="gc-section" id="proyectos">
      <div className="gc-section-label">Proyectos</div>
      <div ref={ref} className="fade-up row g-4">
        {projects.map((p) => {
          const inner = (
            <>
              <div className="gc-project-tag">{p.tag}</div>
              <div className="gc-project-name">{p.name}</div>
              <p className="gc-project-desc">{p.desc}</p>
              <div className="gc-project-arrow">
                {p.cta} {p.href ? '↗' : ''}
              </div>
            </>
          )

          return (
            <div key={p.name} className="col-12 col-md-6">
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="gc-project-card">
                  {inner}
                </a>
              ) : (
                <div className="gc-project-card" style={{ cursor: 'default', opacity: 0.65 }}>
                  {inner}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
