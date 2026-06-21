import { contact, faqs } from '../data/siteContent'

export function ContactFaq() {
  return (
    <>
      <section className="faq section-pad" id="faq">
        <div className="section-title">
          <span></span>
          <h2>Frequently Asked Questions</h2>
          <span></span>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta section-pad" id="contact">
        <p className="eyebrow">Ready to take the next step?</p>
        <h2>Start with a free consultation.</h2>
        <p>
          Share your goal and get a clear next step for your purchase,
          refinance, investment, ITIN, foreign national, or non-QM scenario.
        </p>
        <div className="contact-links">
          <a className="btn btn-gold" href={contact.phoneHref}>
            {contact.phone}
          </a>
          <a className="btn btn-ghost" href={contact.emailHref}>
            Email Nicky
          </a>
        </div>
      </section>
    </>
  )
}
