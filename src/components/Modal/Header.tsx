import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  customClass?: string;
  id: string;
}

function ModalHeaderComponent({ title, customClass, id }: Props): JSX.Element {
  return (
    <div className={`modal-header ${styles.modal__header}`}>
      <h5 className={`modal-title ${styles.modal__title}`} id={id}>
        {title}
      </h5>
      <button
        type="button"
        className={`btn-close ${styles.modal__close}`}
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
  );
}
export default ModalHeaderComponent;
