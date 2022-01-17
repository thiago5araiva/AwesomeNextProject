import Link from "next/link";
import React from "react";
import styles from "./link.module.css";

type LinkType = {
  href: string;
  customStyle?: string;
  label: string;
};

const LinkComponent = ({ href, label, customStyle }: LinkType): JSX.Element => {
  return (
    <Link href={href}>
      <a className={`${styles.link} ${customStyle}`}>{label}</a>
    </Link>
  );
};

export default LinkComponent;
