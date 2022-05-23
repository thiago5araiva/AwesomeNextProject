import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  src: string;
  alt: string;
  layout?: "fixed" | "fill" | "intrinsic" | "responsive" | undefined;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down" | undefined;
  customClass?: string;
}

const ImageComponent = ({
  customClass,
  src,
  alt,
  layout,
  objectFit,
}: Props): JSX.Element => {
  return (
    <div className={`${styles.image} ${customClass}`}>
      <Image
        src={src}
        alt={alt}
        layout={layout}
        objectFit={objectFit}
        draggable={false}
      />
    </div>
  );
};

export default ImageComponent;
