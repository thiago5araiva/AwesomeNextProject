import React, { FormEventHandler } from "react";
import Input from "@atoms/Input";

type Props = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

import styles from "./form.module.css";
import Button from "@components/atoms/Button";
const FormComponent = ({ onSubmit }: Props): JSX.Element => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input type="text" placeholder="Nome" />
      <Input type="text" placeholder="E-mail" />
      <Input type="text" placeholder="Telefone" />
      <Button label="Enviar" customStyle={styles.submit_button} />
    </form>
  );
};

export default FormComponent;
