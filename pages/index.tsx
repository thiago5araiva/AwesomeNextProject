import type { NextPage } from "next";
import Image from "next/image";
import Link from "@/components/Link";

import styles from "@/styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <main>
      <nav className="navbar fixed-top mt-3 mb-3">
        <div className="container">
          <Link href={"/"}>
            <Image
              src={require("@/assets/images/navbar__logo.png")}
              alt="Picture of the author"
              width={144}
              height={39}
            />
          </Link>
        </div>
      </nav>
      <section className={`${styles.hero}`}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className={`${styles.hero__image}`}>
              <Image
                src={require("@/assets/images/hero__image.png")}
                alt="Picture of the author"
                layout="responsive"
                objectFit="fill"
              />
            </div>
          </div>
        </div>
      </section>
      {/* hero */}
      <section className={styles.intro}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-9 col-lg-6">
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
            <div className="col-sm-9 col-lg-5 offset-lg-1">
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
            <div className="col-sm-9 col-lg-4 offset-lg-1">
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
        <div className="container-fluid">
          <div className={`row align-items-center ${styles.about__container}`}>
            <div className="col-sm-9 col-lg-4">
              <div className={`${styles.about__image}`}>
                <Image
                  src={require("@/assets/images/about__image.png")}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="col-sm-8 col-lg-4 offset-lg-1">
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
            <div className="col-sm-9 col-lg-4">
              <div className={styles.benefits__item}>
                <div className={styles.benefits__item__header}>
                  <h2 className={styles.benefits__item__header__int}>01</h2>
                  <h3 className={styles.benefits__item__header__title}>
                    Mussum Ipsum, cacildis.
                  </h3>
                </div>
                <p className={styles.benefits__item__text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  suscipit in consequatur incidunt quidem id illum, voluptate
                  eum delectus nulla vel praesentium.
                </p>
              </div>
            </div>
            <div className="col-sm-9 col-lg-4">
              <div className={styles.benefits__item}>
                <div className={styles.benefits__item__header}>
                  <h2 className={styles.benefits__item__header__int}>01</h2>
                  <h3 className={styles.benefits__item__header__title}>
                    Mussum Ipsum, cacildis.
                  </h3>
                </div>
                <p className={styles.benefits__item__text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  suscipit in consequatur incidunt quidem id illum, voluptate
                  eum delectus nulla vel praesentium.
                </p>
              </div>
            </div>
            <div className="col-sm-9 col-lg-4">
              <div className={styles.benefits__item}>
                <div className={styles.benefits__item__header}>
                  <h2 className={styles.benefits__item__header__int}>01</h2>
                  <h3 className={styles.benefits__item__header__title}>
                    Mussum Ipsum, cacildis.
                  </h3>
                </div>
                <p className={styles.benefits__item__text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  suscipit in consequatur incidunt quidem id illum, voluptate
                  eum delectus nulla vel praesentium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.price}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-9 col-lg-10">
              <div className={styles.price__header}>
                <h2 className={styles.price__header__title}>Mussum Ipsum</h2>
                <p className={styles.price__header__text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  suscipit in consequatur incidunt quidem id illum, voluptate
                  eum delectus nulla vel praesentium quae rem harum debitis,
                  obcaecati tempora distinctio nobis.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className={`col-sm-7 col-lg-3 ${styles.price__container}`}>
              <div
                className={`${styles.price__item} ${styles.price__item__basic}`}
              >
                <div className={styles.price__item__content}>
                  <h2 className={styles.price__item__title}>Para Viver</h2>
                  <h3 className={styles.price__item__value}>
                    <span className={styles.price__item__currency}>R$</span>869
                  </h3>
                  <ul>
                    <li>12 fotos digitais</li>
                    <li>1h30 hora de ensaio</li>
                    <li>2 trocas de roupas</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`col-sm-7 col-lg-3 ${styles.price__container}`}>
              <div
                className={`${styles.price__item} ${styles.price__item__middle}`}
              >
                <div className={styles.price__item__content}>
                  <h2 className={styles.price__item__title}>Para Viver</h2>
                  <h3 className={styles.price__item__value}>
                    <span className={styles.price__item__currency}>R$</span>
                    1.260
                  </h3>
                  <ul>
                    <li>25 fotos digitais</li>
                    <li>2 horas de ensaio</li>
                    <li>3 trocas de roupas</li>
                    <li>Locação</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`col-sm-7 col-lg-3 ${styles.price__container}`}>
              <div
                className={`${styles.price__item} ${styles.price__item__premium}`}
              >
                <div className={styles.price__item__content}>
                  <h2 className={styles.price__item__title}>Para Viver</h2>
                  <h3 className={styles.price__item__value}>
                    <span className={styles.price__item__currency}>R$</span>869
                  </h3>
                  <ul>
                    <li>40 fotos digitais</li>
                    <li>3 horas de ensaio</li>
                    <li>4 trocas de roupas</li>
                    <li>Video Making Off</li>
                    <li>Case para fotos</li>
                    <li>Locação</li>
                    <li>Maquiagem</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.faq}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-9 col-lg-10">
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
      </section>
      <footer className={styles.footer}></footer>
    </main>
  );
};

export default Home;
