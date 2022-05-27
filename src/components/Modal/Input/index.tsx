import React from "react";
import styles from "./styles.module.scss";
interface Props {
  id: string;
  type: "email" | "text" | "password";
  value?: string;
  customClass?: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
function InputComponent({
  id,
  type,
  value,
  customClass,
  placeholder,
  onChange,
}: Props): JSX.Element {
  return (
    <input
      id={id}
      type={type}
      className={`
       form-control 
       input
       ${styles.input} 
       ${customClass} 
       `}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

export default InputComponent;
