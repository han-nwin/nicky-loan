import { contact, navItems } from '../data/siteContent'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <a className="brand-mark brand-mark-footer" href="#home">
          <span>NN</span>
          <small>Mortgage - Lending</small>
        </a>
        <strong>Free consultation. Clear mortgage options.</strong>
        <p>
          {contact.brand}, a DBA of AML Funding LLC. Equal Housing Opportunity.
          NMLS #{contact.branchNmls}.
        </p>
      </div>

      <nav className="footer-links" aria-label="Footer navigation">
        <h4>Quick Links</h4>
        {navItems.slice(1).map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>

      <div className="footer-action">
        <h4>Contact</h4>
        <a className="footer-phone" href={contact.phoneHref}>
          {contact.phone}
        </a>
        <a href={contact.emailHref}>{contact.email}</a>
        <p>{contact.address}</p>
      </div>
    </footer>
  )
}
