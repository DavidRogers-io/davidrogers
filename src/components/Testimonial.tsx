import styles from "./Testimonial.module.css";

interface Testimony {
  name: string;
  position: string;
  quote: string;
  linkedin: string;
}

interface TestimonialProps {
  testimonies: Testimony[];
  linkedinUrl: string;
}

export default function Testimonial({
  testimonies,
  linkedinUrl,
}: TestimonialProps) {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialGroup}>
        <h2>Testimonials</h2>
        <div>
          {testimonies.map((t, i) => (
            <div className={styles.testimony} key={i}>
              <a href={t.linkedin} className={styles.testimonyName}>
                {t.name}
              </a>
              <p className={styles.testimonyPosition}>{t.position}</p>
              <p>
                {t.quote} <a href={linkedinUrl}>read more</a>
              </p>
            </div>
          ))}
          <a className="button" href={linkedinUrl}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
