import React from "react";
import styles from "./styles.module.scss";

interface Props {
  customClass?: string;
  target?: string;
  toggle?: string;
  label: string;
  onClick?: () => void;
}

const ButtonComponent = ({
  customClass,
  target,
  toggle,
  label,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
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
