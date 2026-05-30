import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// ─── CONFIGURACIÓN EMAILJS ───────────────────────────────────────────────────
// 1. Creá cuenta gratis en https://www.emailjs.com
// 2. Creá un Service (Gmail recomendado) → copiá el Service ID
// 3. Creá un Email Template con las variables:
//    {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Copiá tu Public Key desde Account → API Keys
// 5. Reemplazá los valores de abajo con los tuyos
const EMAILJS_SERVICE_ID  = 'service_dxhakjp'
const EMAILJS_TEMPLATE_ID = 'template_yzxm539'
const EMAILJS_PUBLIC_KEY  = '3FnYBj9AeDtxHvsDZ'

// ─── WHATSAPP ────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '541173639452' // sin + ni espacios

const SUBJECTS = [
  'Proyecto freelance',
  'Posición full-time',
  'Consulta de diseño',
  'Consulta de desarrollo',
  'Otro',
]

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm]     = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  function validate() {
    const e = {}
    if (!form.name.trim())    e.name    = 'Ingresá tu nombre'
    if (!form.email.trim())   e.email   = 'Ingresá tu email'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido'
    if (!form.subject)        e.subject = 'Elegí un asunto'
    if (!form.message.trim()) e.message = 'Escribí tu mensaje'
    return e
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  function handleWhatsApp() {
    const text = form.message.trim()
      ? `Hola Gabriel! Soy ${form.name || 'alguien'}. ${form.message}`
      : `Hola Gabriel, me gustaría contactarte.`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  const sending = status === 'sending'

  return (
    <section className="gc-section" id="contacto">
      <div ref={sectionRef} className="fade-up">
        <div className="gc-section-label">Contacto</div>

        <div className="row g-5 align-items-start">

          {/* LEFT — heading + info */}
          <div className="col-12 col-lg-4">
            <h2 className="gc-contact-heading">
              ¿Trabajamos<br /><em>juntos?</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.85, marginBottom: '2.5rem' }}>
              Estoy disponible para proyectos freelance y posiciones full-time.
              Completá el formulario o escribime directamente.
            </p>

            <div className="d-flex flex-column">
              {[
                { label: 'Email',     value: 'gabrielcapria06@gmail.com',   href: 'mailto:gabrielcapria06@gmail.com' },
                { label: 'Portfolio', value: 'behance.net/gabrielcapria',   href: 'https://www.behance.net/gabrielcapria' },
                { label: 'Ubicación', value: 'Caseros, BA — Remoto 🌍',     href: null },
              ].map((l) =>
                l.href ? (
                  <a key={l.label} href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="gc-contact-link">
                    <div>
                      <div className="gc-contact-link-label">{l.label}</div>
                      <div className="gc-contact-link-value" style={{ fontSize: '0.85rem' }}>{l.value}</div>
                    </div>
                    <span className="gc-contact-arrow">↗</span>
                  </a>
                ) : (
                  <div key={l.label} className="gc-contact-link" style={{ cursor: 'default' }}>
                    <div>
                      <div className="gc-contact-link-label">{l.label}</div>
                      <div className="gc-contact-link-value" style={{ fontSize: '0.85rem' }}>{l.value}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="col-12 col-lg-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-3">

                <div className="col-12 col-md-6">
                  <label className="gc-form-label" htmlFor="name">Nombre</label>
                  <input
                    id="name" name="name" type="text"
                    className={`gc-form-input${errors.name ? ' gc-input-error' : ''}`}
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    disabled={sending}
                  />
                  {errors.name && <span className="gc-form-error">{errors.name}</span>}
                </div>

                <div className="col-12 col-md-6">
                  <label className="gc-form-label" htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email"
                    className={`gc-form-input${errors.email ? ' gc-input-error' : ''}`}
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={sending}
                  />
                  {errors.email && <span className="gc-form-error">{errors.email}</span>}
                </div>

                <div className="col-12">
                  <label className="gc-form-label" htmlFor="subject">Asunto</label>
                  <select
                    id="subject" name="subject"
                    className={`gc-form-input${errors.subject ? ' gc-input-error' : ''}`}
                    value={form.subject}
                    onChange={handleChange}
                    disabled={sending}
                  >
                    <option value="">Seleccioná un asunto</option>
                    {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.subject && <span className="gc-form-error">{errors.subject}</span>}
                </div>

                <div className="col-12">
                  <label className="gc-form-label" htmlFor="message">Mensaje</label>
                  <textarea
                    id="message" name="message"
                    className={`gc-form-input${errors.message ? ' gc-input-error' : ''}`}
                    placeholder="Contame sobre tu proyecto o propuesta..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    disabled={sending}
                    style={{ resize: 'vertical', minHeight: '130px' }}
                  />
                  {errors.message && <span className="gc-form-error">{errors.message}</span>}
                </div>

                {status === 'success' && (
                  <div className="col-12">
                    <div className="gc-form-feedback gc-form-feedback--success">
                      ✓ Mensaje enviado. ¡Te respondo a la brevedad!
                    </div>
                  </div>
                )}
                {status === 'error' && (
                  <div className="col-12">
                    <div className="gc-form-feedback gc-form-feedback--error">
                      Algo salió mal. Intentá de nuevo o escribime por WhatsApp.
                    </div>
                  </div>
                )}

                <div className="col-12 d-flex gap-3 flex-wrap align-items-center" style={{ marginTop: '0.25rem' }}>
                  <button
                    type="submit"
                    className="btn-gc-primary"
                    disabled={sending}
                    style={{ opacity: sending ? 0.6 : 1 }}
                  >
                    {sending ? 'Enviando...' : 'Enviar mensaje'}
                  </button>

                  <button
                    type="button"
                    className="btn-gc-whatsapp"
                    onClick={handleWhatsApp}
                    disabled={sending}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem', flexShrink: 0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
