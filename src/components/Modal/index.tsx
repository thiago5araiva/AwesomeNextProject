import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Input from "../Input";
import styles from "./styles.module.scss";
import {
  addSubscribeLeads,
  getSubscribersLeads,
} from "@/services/subscribersController";
import {
  validationPhone,
  validationEmail,
  validationName,
} from "@/helpers/validations";

interface Props {
  id: string;
}
type Data = {
  name: { value: string; valid: boolean };
  email: { value: string; valid: boolean };
  phone: { value: string; valid: boolean };
};

const ModalComponent = ({ id }: Props): JSX.Element => {
  const [show, setShow] = useState<string>("");
  const [data, setData] = useState<Data>({
    name: { value: "", valid: false },
    email: { value: "", valid: false },
    phone: { value: "", valid: false },
  });
  const [error, setError] = useState<boolean>(true);
  const btnRef = useRef(null);

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
      const close = btnRef.current as any;
      close !== null && close.click();
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    setError(false);
  }, [data]);

  return (
    <div
      className={`modal fade ${styles.modal}`}
      id={id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className={`modal-content ${styles.modal__content}`}>
          <Header
            title="Modal"
            id="staticBackdropLabel"
            customClass={styles.modal__header}
          />
          <div className={`modal-body ${styles.modal__body}`}>
            <h2 className={styles.modal__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              facilis at quos reprehenderit repellat modi velit beatae quia.
            </h2>
            <form onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
              <Input
                id="name"
                type="text"
                placeholder="Nome"
                customClass={styles.modal__input}
                value={data.name.value}
                onChange={(e: React.SyntheticEvent) => handleInputs(e)}
              />
              <Input
                id="email"
                type="text"
                placeholder="E-mail"
                customClass={styles.modal__input}
                value={data.email.value}
                onChange={(e: React.SyntheticEvent) => handleInputs(e)}
              />
              <Input
                id="phone"
                type="text"
                placeholder="Whatsapp"
                customClass={styles.modal__input}
                value={data.phone.value}
                onChange={(e: React.SyntheticEvent) => handleInputs(e)}
              />
              <div className={`modal-footer ${styles.modal__footer}`}>
                <button
                  ref={btnRef}
                  type="button"
                  className={`${styles.modal__button} ${styles.modal__button_close}`}
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
                <button
                  type="submit"
                  className={styles.modal__button}
                  data-bs-dismiss={show}
                  disabled={false}
                >
                  Enviar
                </button>
              </div>
            </form>
            {error && (
              <p className={styles.modal__status}>
                Preencha todos os campos corretamente
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
