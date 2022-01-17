import classNames from "classnames";
import React, { ChangeEventHandler } from "react";
import styles from "./input.module.css";

type Props = {
  type: string;
  placeholder: string;
  customStyle?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const InputComponent = ({
  type,
  placeholder,
  onChange,
  customStyle,
}: Props): JSX.Element => {
  let cx = classNames.bind(styles);
  const bindedStyles = classNames({
    [`${styles.submit}`]: type === "submit",
  });
  return (
    <input
      className={cx(styles.input, bindedStyles, customStyle)}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;
