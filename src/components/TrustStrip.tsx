import { trustPoints } from '../data/siteContent'

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Trust highlights">
      {trustPoints.map((point) => (
        <div key={point.label}>
          <span className="trust-icon" aria-hidden="true">
            ✓
          </span>
          <div>
            <strong>{point.label}</strong>
            <span>{point.text}</span>
          </div>
        </div>
      ))}
    </section>
  )
}
