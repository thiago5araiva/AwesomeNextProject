import type { NextPage } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import styles from "@/styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <main>
      <Nav />
      <section className={`${styles.hero}`}>
        <div className={styles.hero__image}>
          <Image
            src={require("@/assets/images/hero__image.png")}
            alt="Picture of the author"
            objectFit="cover"
            layout="fill"
            draggable="false"
          />
        </div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-6">
              <h1 className={styles.hero__title}>Se enxergue com mais amor!</h1>
              <p className={styles.hero__text}>
                Eu acredito que a beleza não tem tamanho, número ou cor. Que
                cada cicatriz e marca é uma peça vital de uma história toda sua,
                e que toda mulher pode ser seu próprio tipo de beleza. Quero que
                você se sinta confortável em sua própria pele e celebre todos os
                momentos de sua vida.
              </p>
            </div>
            <div className="col-1">
              <div className={`${styles.hero__control}`}></div>
              <div className={styles.hero__control}></div>
              <div className={styles.hero__control}></div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.intro}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2 className={`${styles.intro__title}`}>Mussum Ipsum</h2>
              <p className={`${styles.intro__text}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                suscipit in consequatur incidunt quidem id illum, voluptate eum
                delectus nulla vel praesentium quae rem harum debitis, obcaecati
                tempora distinctio nobis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.boudoir}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <h2 className={styles.boudoir__title}>Mussum Ipsum, cacildis.</h2>
              <p className={styles.boudoir__text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                suscipit in consequatur incidunt quidem id illum, voluptate eum
                delectus nulla vel praesentium quae rem harum debitis, obcaecati
                tempora distinctio nobis. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Odio suscipit in consequatur
                incidunt quidem id illum, voluptate eum delectus nulla vel
                praesentium quae rem harum debitis, obcaecati tempora distinctio
                nobis.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Odio suscipit in consequatur incidunt quidem id illum, voluptate
                eum delectus nulla vel praesentium quae rem harum debitis,
                obcaecati tempora distinctio nobis.
              </p>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className={`${styles.hero__image}`}>
                <Image
                  src={require("@/assets/images/boudoir__image.png")}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className="container">
          <div className={`row align-items-center`}>
            <div className="col-lg-5">
              <div className={`${styles.about__image}`}>
                <Image
                  src={require("@/assets/images/about__image.png")}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <h2 className={styles.about__title}>
                “Mussum Ipsum, Cacildis Litris Abertis”
              </h2>
              <p className={styles.about__text}>
                Odio suscipit in consequatur incidunt quidem id illum, voluptate
                eum delectus nulla vel praesentium quae rem harum debitis,
                obcaecati tempora distinctio nobis. Odio suscipit in consequatur
                incidunt quidem id illum, voluptate eum delectus nulla vel
                praesentium quae rem harum debitis, obcaecati tempora distinctio
                nobis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className="container">
          <div className="row justify-content-center">
            {[1, 2, 3].map((i, idx) => (
              <div key={idx} className="col-lg-4">
                <div className={styles.item}>
                  <div className="d-flex align-items-center">
                    <h2 className={styles.item__integer}>01</h2>
                    <h3 className={styles.item__title}>
                      Mussum Ipsum, cacildis.
                    </h3>
                  </div>
                  <p className={styles.item__text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Odio suscipit in consequatur incidunt quidem id illum,
                    voluptate eum delectus nulla vel praesentium.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.price}>
        <div className="container">
          <div className={styles.price__header}>
            <div className="row justify-content-center align-items-center">
              <div className="col-3">
                <h2 className={styles.price__title}>
                  Isto não é apenas uma sessão de fotos
                </h2>
              </div>
              <div className="col-5">
                <p className={styles.price__subtitle}>
                  É uma experiência! E eu desafio você a encontrar a coragem
                  dentro de você para deixar sua luz brilhar .
                </p>
              </div>
            </div>
          </div>
          <PriceTable prices={price} />
        </div>
      </section>

      <section className={styles.faq}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className={styles.faq__title}>FAQ</h2>
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className={`accordion-item ${styles.faq__item}`}>
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className={`accordion-button ${styles.faq__item__button}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Odio suscipit in ?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div
                      className={`accordion-body ${styles.faq__item__button}`}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Odio suscipit in consequatur incidunt quidem id illum,
                      voluptate eum delectus nulla vel praesentium quae rem
                      harum debitis, obcaecati tempora distinctio nobis.
                    </div>
                  </div>
                </div>
                <div className={`accordion-item ${styles.faq__item}`}>
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingTwo"
                  >
                    <button
                      className={`accordion-button ${styles.faq__item__button}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div
                      className={`accordion-body ${styles.faq__item__button}`}
                    >
                      <strong>This is the second accordion body.</strong> It is
                      hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. Also worth noting that just about any HTML can
                      go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className={`accordion-item ${styles.faq__item}`}>
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingThree"
                  >
                    <button
                      className={`accordion-button ${styles.faq__item__button}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div
                      className={`accordion-body ${styles.faq__item__button}`}
                    >
                      <strong>This is the third accordion body.</strong> It is
                      hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. Also worth noting that just about any HTML can
                      go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <footer className={styles.footer}></footer> */}
    </main>
  );
};

export default Home;
