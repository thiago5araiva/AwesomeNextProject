import Image from "next/image";
import React, { MouseEventHandler } from "react";
import styles from "./button.module.css";
import classNames from "classnames";

type Props = {
  label?: string;
  type?: "outlined" | "outlined-round" | "rounded" | "small" | "transparent";
  size?: "small" | "big";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  customStyle?: string | object;
  icon?: React.ReactElement;
};

const ButtonComponent = ({
  type,
  label,
  size,
  icon,
  onClick,
  customStyle,
}: Props): JSX.Element => {
  const cx = classNames.bind(styles);
  const bindedStyles = classNames(styles.button, {
    [`${styles.outlined}`]: type === "outlined",
    [`${styles.outlined_round}`]: type === "outlined-round",
    [`${styles.rounded}`]: type === "rounded",
    [`${styles.transparent}`]: type === "transparent",
    [`${styles.small}`]: size === "small",
  });
  return (
    <button onClick={onClick} className={cx(bindedStyles, customStyle)}>
      {label}
    </button>
  );
};

export default ButtonComponent;
