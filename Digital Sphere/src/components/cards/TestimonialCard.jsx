export function TestimonialCard({ testimonial }) {
  return (
    <figure>
      <blockquote>
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption>
        {testimonial.name}, {testimonial.title}
      </figcaption>
    </figure>
  )
}
