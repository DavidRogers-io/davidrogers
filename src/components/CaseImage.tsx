import Image from "next/image";

interface CaseImageProps {
  src: string;
  alt: string;
}

export default function CaseImage({ src, alt }: CaseImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={675}
      sizes="(max-width: 1200px) 100vw, 1136px"
      style={{ width: "100%", height: "auto" }}
    />
  );
}
