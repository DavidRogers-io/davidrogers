import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navGroup}>
        <Link href="/">
          <Image
            className={styles.navLogo}
            src="/images/logo.png"
            alt="David Rogers home page"
            width={48}
            height={48}
          />
        </Link>
        <div className={styles.navRight}>
          <Link className={styles.navLink} href="/">
            Portfolio
          </Link>
          <Link className={styles.navLink} href="/about">
            About
          </Link>
          <a
            className={styles.navLink}
            href="/images/david_rogers_resume.pdf"
          >
            Resume
          </a>
          <a
            className={styles.navLink}
            href="https://www.linkedin.com/in/davidrogerz/"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
