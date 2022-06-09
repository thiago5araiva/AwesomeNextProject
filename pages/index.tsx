import type { NextPage } from "next";
import Navbar from "_components/Navbar";
import Image from "_components/Image";
import Button from "_components/Button";
import Modal from "_components/Modal";

import styles from "_styles/styles.module.scss";

const Home: NextPage = () => {
  return (
    <main>
      <Navbar />
      <section className={`${styles.hero}`}>
        <Image
          src={require("_assets/images/hero-image.png")}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-9 col-lg-8 col-xl-6">
              <h1 className={styles.hero__title}>Se enxergue com mais amor</h1>
              <p className={styles.hero__text}>
                Eu acredito que a beleza não tem tamanho, número ou cor. Que
                cada cicatriz e marca é uma peça vital de uma história toda sua,
                e que toda mulher pode ser seu próprio tipo de beleza. Quero que
                você se sinta confortável em sua própria pele e celebre todos os
                momentos de sua vida.
              </p>
              <Button
                target="#staticBackdrop"
                toggle="modal"
                label="Saiba mais"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-9 col-lg-8 col-xl-4">
              <div className={styles.about__content}>
                <h1 className={styles.about__title}>O Ensaio</h1>
                <p className={styles.about__text}>
                  Meu trabalho envolve os estilos de Fotografia de Boudoir e
                  Retratos femininos.
                </p>
                <p className={styles.about__text}>
                  A Fotografia de boudoir lê-se Buduah e quer dizer intimidade
                  em Francês. Esse estilo envolve um certo nível de nudez
                  (lingerie, roupa de dormir, outro vestuário íntimo ou nada). É
                  destinada a abraçar a sexualidade, a independência, a
                  feminilidade, a personalidade e a intimidade de uma mulher.
                </p>
                <p className={styles.about__text}>
                  A Fotografia de retratos femininos. Esta é uma ótima opção
                  para mulheres que podem ficar um pouco intimidadas com a idéia
                  de mostrar muito para uma sessão de boudoir. Os looks podem
                  ser um vestido de festa, rendas, drapeados, ou até uma calça
                  jeans com aquela camiseta que você ama.
                </p>
              </div>
            </div>
            <div className="col-md-9 col-lg-8 col-xl-5">
              <Image
                src={require("_assets/images/about-image.png")}
                alt="Picture of the author"
                customClass="offset-xl-1"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.photographer}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="order-2 order-sm-2 order-md-2 order-lg-1 col-md-9 col-lg-8 col-xl-4">
              <Image
                src={require("_assets/images/photographer-image.png")}
                alt="Picture of the author"
                layout="responsive"
              />
            </div>
            <div className="order-1 order-sm-1 order-md-1 order-lg-2 col-md-9 col-lg-8 col-xl-5 offset-xl-1">
              <div className={styles.photographer__content}>
                <h1 className={styles.photographer__title}>
                  “ Te ajudo a se enxergar mais com mais amor ”
                </h1>
                <p className={styles.photographer__text}>
                  Oi, me chamo Mirian Olimpia, uma geminiana que odeia café
                  fraco e adora dar palpites.Sou fotógrafa de mulheres e estou
                  na missão de celebrar você , inspirar a sua confiança . Eu
                  acredito na preservação das coisas simples, não sou de truques
                  ou tendências, procuro me distanciar cada vez mais disso, e ao
                  passo que me distancio, me encontro. Meu objetivo é poder te
                  retratar da maneira mais orgânica e sincera possível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal id="staticBackdrop" />
    </main>
  );
};

export default Home;
