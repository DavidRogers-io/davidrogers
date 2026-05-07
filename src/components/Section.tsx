import styles from "./Section.module.css";

interface SectionProps {
  title: string;
  paragraphs: string[];
}

export default function Section({ title, paragraphs }: SectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionDetails}>
        <h2>{title}</h2>
        <div>
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
