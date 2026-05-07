import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGroup}>
        <h2>Let&apos;s Connect</h2>
        <h3>
          I&apos;m always eager to discuss design, technology and business.
          Let&apos;s nurture your ideas, tackle challenging problems and enrich
          people&apos;s lives.
        </h3>
        <a
          className={styles.footerButton}
          href="https://www.linkedin.com/in/davidrogerz/"
        >
          Get In Touch
        </a>
        <Link className={styles.footerLink} href="/about">
          Learn more about me
        </Link>
        <p className={styles.signature}>
          Designed and developed by David Rogers in San Francisco, California.
        </p>
      </div>
    </footer>
  );
}
