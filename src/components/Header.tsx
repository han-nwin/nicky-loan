import { contact, navItems } from '../data/siteContent'

export function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" aria-label="Nicky Nguyen home">
        <span>NN</span>
        <small>Mortgage - Lending</small>
      </a>

      <nav aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>

      <a className="header-action" href={contact.phoneHref}>
        Free Consultation
      </a>
    </header>
  )
}
