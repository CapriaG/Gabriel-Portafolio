import { useState } from 'react'
import logo from '../assets/GcLogo.png'

export default function Navbar() {
  // Estado para controlar si el menú mobile está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#educacion', label: 'Formación' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <nav className="gc-nav d-flex justify-content-between align-items-center">
      <a href="#inicio" className="nav-logo">
        <img src={logo} alt="Gabriel Capria" height="50" style={{ display: 'block' }} />
      </a>

      {/* Botón Hamburguesa: Solo visible en mobile (d-md-none) */}
      <button 
        className="nav-toggle d-md-none" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
      </button>

      {/* Lista de Links: En escritorio es horizontal, en mobile es vertical y responde al estado */}
      <ul className={`nav-menu list-unstyled mb-0 gap-4 ${isOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <li key={l.href} className="w-100 text-center text-md-start">
            <a 
              href={l.href} 
              className="nav-link d-block py-3 py-md-0"
              onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en una opción
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}