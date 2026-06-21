import { contact, processSteps } from '../data/siteContent'

export function AboutProcess() {
  return (
    <section className="bio section-pad" id="bio">
      <div className="bio-image"></div>

      <div className="bio-copy">
        <p className="eyebrow">
          {' '}
          Experienced - Responsive - Honest - Transparent
        </p>
        <h2>
          Lending guidance for real borrowers, not one-size-fits-all files.
        </h2>
        <p>
          Work with {contact.name} to understand your mortgage options before
          you commit. The goal is a clear path forward, whether your file is
          traditional, self-employed, investor-focused, or missing standard W2
          income.
        </p>

        <div className="bio-features">
          {processSteps.map((step) => (
            <article className="bio-feature-card hover-card" key={step.title}>
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
