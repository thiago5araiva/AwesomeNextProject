import type { NextPage } from "next";
import Navbar from "_components/Navbar";
import Image from "_components/Image";
import styles from "@/styles/home.module.scss";
import Button from "_components/Button";

const Home: NextPage = () => {
  return (
    <main>
      <Navbar />
      <section className={`${styles.hero}`}>
        <Image
          src={require("@/assets/images/hero-image.png")}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-6">
              <h1 className={styles.hero__title}>Se enxergue com mais amor</h1>
              <p className={styles.hero__text}>
                Eu acredito que a beleza não tem tamanho, número ou cor. Que
                cada cicatriz e marca é uma peça vital de uma história toda sua,
                e que toda mulher pode ser seu próprio tipo de beleza. Quero que
                você se sinta confortável em sua própria pele e celebre todos os
                momentos de sua vida.
              </p>
              <Button
                customClass={styles.hero__button}
                target="#staticBackdrop"
                toggle="modal"
                label="Saiba mais"
              />
            </div>
          </div>
        </div>
      </section>
      <div
        className={`modal fade ${styles.modal}`}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className={`modal-title ${styles.modal__title}`}
                id="staticBackdropLabel"
              >
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
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
            <div className="modal-footer">
              <button
                type="button"
                className={`${styles.modal__button}`}
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button
                type="button"
                className={`${styles.modal__button} ${styles.modal__submit}`}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
