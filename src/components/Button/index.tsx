import React from "react";
import styles from "./styles.module.scss";

interface Props {
  customClass?: string;
  target: string;
  toggle: string;
  label: string;
}

const ButtonComponent = ({ customClass, target, toggle, label }: Props) => {
  return (
    <button
      className={`${styles.button} ${customClass}`}
      type="button"
      data-bs-toggle={toggle}
      data-bs-target={target}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
