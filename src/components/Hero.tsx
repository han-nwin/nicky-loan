import { contact } from '../data/siteContent'
import bioImg from '../assets/bio.png'

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Nicky Nguyen • Mortgage Loan Originator</p>
        <h1>
          Professional
          <br />
          <span>Stress Free</span>
          <br />
          Process
        </h1>
        <p className="hero-lead">
          Experienced, responsive, honest, and transparent lending guidance for
          buyers, investors, self-employed borrowers, and families purchasing
          real estate in the U.S.
        </p>
        <div className="hero-points">
          <span>Personalized loan solutions</span>
          <span>Fast, clear, responsive communication</span>
          <span>Vietnamese and English support</span>
        </div>

        <div className="hero-actions">
          <div className="hero-action-callout">
            <p>Free Consultation</p>
          </div>
          <a className="btn btn-gold" href={contact.phoneHref}>
            Call Me Today
          </a>
          <a className="btn btn-ghost" href={contact.emailHref}>
            Email Me
          </a>
        </div>
      </div>

      <figure className="hero-portrait">
        <img src={bioImg} alt="Nicky Nguyen mortgage lending service flyer" />
      </figure>
    </section>
  )
}
