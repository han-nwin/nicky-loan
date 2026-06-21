import { credentials } from '../data/siteContent'

export function Credentials() {
  return (
    <section className="credentials section-pad" id="credentials">
      <div className="section-title">
        <span></span>
        <h2>Experience & Recognition</h2>
        <span></span>
      </div>

      <div className="credential-grid">
        {credentials.map((credential) => (
          <article className="credential-card" key={credential}>
            <b>{credential}</b>
          </article>
        ))}
      </div>
    </section>
  )
}
