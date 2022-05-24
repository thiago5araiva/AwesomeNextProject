//TODO Create a input component
//TODO Integrate with Firebase/Firestore

import React from "react";
import Header from "./Header";
import styles from "./styles.module.scss";

interface Props {
  id: string;
}

const ModalComponent = ({ id }: Props): JSX.Element => {
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
        <div className="modal-content">
          <Header title="Modal" id="staticBackdropLabel" />
          <div className="modal-body">
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="inputName"
                placeholder="Nome"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                placeholder="E-mail"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="inputPhone"
                placeholder="Whatsapp"
              />
            </div>
          </div>
          <div className={`modal-footer ${styles.modal__footer}`}>
            <button type="button" className={``} data-bs-dismiss="modal">
              Fechar
            </button>
            <button type="button" className={``}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
