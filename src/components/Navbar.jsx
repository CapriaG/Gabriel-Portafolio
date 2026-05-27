import logo from '../assets/GcLogo.png'

export default function Navbar() {
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
      <ul className="d-none d-md-flex list-unstyled mb-0 gap-4">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="nav-link">{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}