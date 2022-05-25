import React from "react";

interface Props {
  type: "email" | "text" | "password";
  customClass?: string;
  id: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  error: boolean;
}
const InputComponent = ({
  type,
  customClass,
  id,
  placeholder,
  onChange,
  value,
}: Props): JSX.Element => {
  return (
    <input
      id={id}
      type={type}
      className={`form-control ${customClass}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputComponent;
