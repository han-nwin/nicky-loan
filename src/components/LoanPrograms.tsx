import { loanPrograms } from '../data/siteContent'

export function LoanPrograms() {
  return (
    <section className="programs section-pad" id="programs">
      <div className="section-title">
        <span></span>
        <h2>Loan Programs</h2>
        <span></span>
      </div>

      <div className="program-grid">
        {loanPrograms.map((program) => (
          <article className="program-card hover-card" key={program}>
            <span aria-hidden="true">•</span>
            <p>{program}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
