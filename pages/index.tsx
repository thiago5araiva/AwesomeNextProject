import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import ArrowRight from "@assets/images/arrow-right.svg";
import HeroImage from "@assets/images/hero-image.svg";

import Button from "@atoms/Button/";
import type { NextPage } from "next";

import styles from "@styles/Home.module.css";
const Home: NextPage = () => {
  const router = useRouter();

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    let values = [];
    const childrens = e.target.children;
    for (const children of childrens) {
      values.push(children.value);
    }
    values.pop();
    setTimeout(() => {
      router.push("/pacotes");
    }, 1000);
  };
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.hero_content}>
          <h1 className={styles.content_title}>
            All the experience in the new credit card
          </h1>
          <Image src={ArrowRight} alt="Arrow Right" />
          <p className={styles.content_text}>
            Simple transfers, payments for utilities, functional statemement,
            card settings, for which you used to have to go too the brach
            oonline-banking
          </p>
          <div className="row">
            <Button
              label="Order a card"
              size="small"
              type="rounded"
              onClick={() => null}
            />
            <Button label="How it works" size="small" type="transparent" />
          </div>
        </div>
        <div className={styles.hero_image}>
          <Image
            alt="Mountains"
            src={HeroImage}
            quality={100}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
