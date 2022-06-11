import type { NextPage } from "next";
import Navbar from "_components/Navbar";
import Image from "_components/Image";
import Button from "_components/Button";
import Form from "_components/Form";
import Accordion from "_components/Accordion";

import styles from "_styles/styles.module.scss";
import bg from "_assets/images/hero-image.png";
import Link from "_components/Link";

const Home: NextPage = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container-fluid">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-md-9 col-lg-5 col-xl-5 col-xxl-5 offset-lg-1 offset-xl-1">
              <div className={styles.hero__content}>
                <Image
                  src={require("_assets/images/logo-mirian.png")}
                  alt="Picture of the author"
                  customClass={styles.hero__logo}
                />
                <h1 className={styles.hero__title}>
                  Para aumentar sua confiança
                </h1>
                <p className={styles.hero__text}>
                  Ao longo do tempo, conhecendo e fotografando mulheres, vejo
                  que existe um desejo em comum em todas: Elas querem ser
                  lembradas. Mas não é raro, terem medo de viver algo novo, medo
                  de experimentar. Elas não se sentem confiantes. Como, com o
                  meu trabalho, eu poderia ajudar essas mulheres a confiarem
                  mais em si mesmas ? - Com uma oportunidade. Com um pacote
                  fotográfico novo. Com o PARA EXPERIMENTAR.
                </p>
                {/* <Button label="Experimente" /> */}
              </div>
            </div>
            <div className="col-lg-5 col-xl-5 col-xxl-5 offset-lg-1 offset-xl-1 offset-xxl-1 p-0">
              <div
                className={styles.hero__image}
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url(${bg.src})`,
                  width: "100%",
                  height: "100vh",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-10 col-lg-8 col-xl-6 col-xxl-6">
              <h2 className={styles.about__title}>Para experimentar</h2>
              <p className={styles.about__subtitle}>
                Um pacote especial, para você que quer viver uma experiência
                fotográfica mas até hoje não se sentiu confiante para dizer Sim
                a ela.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.video}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className=" col-md-10 col-lg-6 col-xl-6 col-xxl-6">
              <video
                width={"100%"}
                src={require("_assets/videos/para-experimentar.mp4")}
                controls
              />
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <h2 className={styles.video__count}>15</h2>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.action}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-xxl-5">
              <h2 className={styles.action__title}>Cadastre-se</h2>
              <p className={styles.action__text}>
                Você terá a oportunidade de Experimentar uma experiência
                fotográfica, no mês de novembro. Mas as vagas são limitadas.
                Para garantir a sua, basta cadastrar o seu e-mail. E seguir os
                próximos passos.
              </p>
              <small className={styles.action__notice}>
                * Ainda restam 15 vagas disponíveis
              </small>
            </div>
            <div className="col-xl-5 offset-xl-1 col-xxl-6 offset-xxl-1">
              <Form customClass={styles.action__form} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.faq}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className={styles.faq__title}>FAQ</h2>
              <Accordion />
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className={styles.footer__contacts}>
                <li>
                  <Image
                    src={require("_assets/images/logo-mirian.png")}
                    alt="Picture of the author"
                    customClass={styles.hero__logo}
                  />
                </li>
                <li className={styles.footer__items}>62 99236-1972</li>
                <li className={styles.footer__items}>
                  contato@mirianolimpia.com.br
                </li>
                <li className={`${styles.footer__items} `}>
                  <Link
                    href="https://www.instagram.com/mirianolimpiafotos/"
                    customClass={styles.footer__link}
                  >
                    <Image
                      src={require("_assets/images/instagram-icon.png")}
                      alt="Picture of the author"
                      customClass={styles.footer__icon}
                    />
                    @mirianolimpiafotos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.footer__line}></div>
    </main>
  );
};

export default Home;
