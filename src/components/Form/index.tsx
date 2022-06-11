import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import styles from "./styles.module.scss";
import { addSubscribeLeads } from "_services/subscribersController";
import { useRouter } from "next/router";

import {
  validationPhone,
  validationEmail,
  validationName,
} from "_helpers/validations";
type Props = {
  customClass?: string;
};
type Data = {
  name: { value: string; valid: boolean };
  email: { value: string; valid: boolean };
  phone: { value: string; valid: boolean };
};

const FormComponent = ({ customClass }: Props): JSX.Element => {
  const router = useRouter();
  const [data, setData] = useState<Data>({
    name: { value: "", valid: false },
    email: { value: "", valid: false },
    phone: { value: "", valid: false },
  });
  const [error, setError] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);

  function handleInputs(e: React.SyntheticEvent): void {
    const type = e.currentTarget.id;
    const value = (e.currentTarget as HTMLInputElement).value;
    if (type === "name") {
      const isValid = validationName(value);
      setData((prevState) => ({
        ...prevState,
        name: { value: value, valid: isValid },
      }));
    }

    if (type === "email") {
      const isValid = validationEmail(value);
      setData((prevState) => ({
        ...prevState,
        email: { value: value, valid: isValid },
      }));
    }
    if (type === "phone") {
      const formatedPhone = validationPhone(value);
      const isValid = formatedPhone.length === 15 ? true : false;
      setData((prevState) => ({
        ...prevState,
        phone: {
          value: formatedPhone,
          valid: isValid,
        },
      }));
    }
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const lead = {
      name: data.name.value,
      email: data.email.value,
      phone: data.phone.value,
    };

    if (data.name.valid && data.email.valid && data.phone.valid) {
      setError(false);
      addSubscribeLeads(lead);
      router.push("/welcome");
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    setError(false);
  }, [data, show]);

  return (
    <form
      className={`${styles.form} ${customClass}`}
      onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}
    >
      <Input
        id="name"
        type="text"
        placeholder="Nome"
        value={data.name.value}
        onChange={(e: React.SyntheticEvent) => handleInputs(e)}
      />
      <Input
        id="email"
        type="text"
        placeholder="E-mail"
        value={data.email.value}
        onChange={(e: React.SyntheticEvent) => handleInputs(e)}
      />
      <Input
        id="phone"
        type="text"
        placeholder="Whatsapp"
        value={data.phone.value}
        onChange={(e: React.SyntheticEvent) => handleInputs(e)}
      />
      <button type="submit" className={styles.form__button} disabled={false}>
        Enviar
      </button>
      {error && (
        <p className={styles.form__status}>
          preencha todos os campos corretamente
        </p>
      )}
    </form>
  );
};

export default FormComponent;
