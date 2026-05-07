import Link from "next/link";
import Image from "next/image";
import styles from "./Project.module.css";

interface ProjectProps {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
}

export default function Project({
  title,
  description,
  href,
  image,
  alt,
}: ProjectProps) {
  return (
    <div className={styles.project}>
      <Link href={href}>
        <h2>{title}</h2>
      </Link>
      <div className={styles.projectDetails}>
        <h3>{description}</h3>
        <Link href={href}>View Case Study</Link>
      </div>
      <Link href={href}>
        <Image
          src={image}
          alt={alt}
          width={1200}
          height={675}
          sizes="(max-width: 1200px) 100vw, 1136px"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
    </div>
  );
}
