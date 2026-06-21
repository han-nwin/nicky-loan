import { reviews } from '../data/siteContent'

export function Reviews() {
  return (
    <section className="reviews section-pad" id="reviews">
      <div className="section-title">
        <span></span>
        <h2>What Clients Value</h2>
        <span></span>
      </div>

      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review-card hover-card" key={review.name}>
            <div className="review-top">
              <div className="review-avatar" aria-hidden="true">
                {review.name.charAt(0)}
              </div>
              <div>
                <b>{review.name}</b>
                <small>{review.date}</small>
              </div>
            </div>
            <div className="stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <p>{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
