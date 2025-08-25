// components/Section.js
export default function Section({ title, paragraphs = [] }) {
  return (
    <section className="section">
      <div className="section-details">
        <h2>{title}</h2>
        <div>
          {paragraphs.map((paragraph, index) => (
            paragraph && <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}