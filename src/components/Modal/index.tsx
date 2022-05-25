import React, { useEffect, useState } from "react";
import Header from "./header";
import Input from "_components/input";
import styles from "./styles.module.scss";
import { subscribeLeads } from "@/services/subscribersController";
import { validationPhone, validationEmail } from "@/helpers/validations";

interface Props {
  id: string;
}
type Data = {
  name: { value: string; valid: false };
  email: { value: string; valid: false };
  phone: { value: string; valid: false };
};

const ModalComponent = ({ id }: Props): JSX.Element => {
  const [show, setShow] = useState<string>("");
  const [data, setData] = useState<Data>({
    name: { value: "", valid: false },
    email: { value: "", valid: false },
    phone: { value: "", valid: false },
  });

  function handleSubmit() {}

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
                type="text"
                id="name"
                placeholder="Nome"
                customClass={styles.modal__input}
                value={data.name.value}
                error={data.name.valid}
              />
              <Input
                type="text"
                id="email"
                placeholder="E-mail"
                customClass={styles.modal__input}
                value={data.email.value}
                error={data.email.valid}
                onChange={(e: React.SyntheticEvent) =>
                  setEmail((e.target as HTMLInputElement).value)
                }
              />
              <Input
                type="text"
                id="phone"
                value={data.name.value}
                error={data.name.valid}
                placeholder="Whatsapp"
                customClass={styles.modal__input}
                onChange={(e: React.SyntheticEvent) =>
                  setPhone(validationPhone(e))
                }
              />
              <div className={`modal-footer ${styles.modal__footer}`}>
                <button
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
                >
                  Enviar
                </button>
              </div>
              {error ? <p>Preencha todos os campos corretamente</p> : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
