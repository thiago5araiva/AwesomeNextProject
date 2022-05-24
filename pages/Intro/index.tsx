import type { NextPage } from "next";
import Navbar from "_components/Navbar";
import Image from "_components/Image";
import Button from "_components/Button";
import Modal from "_components/Modal";
import { firestore } from "@/services/firebase";
import { collection, addDoc } from "firebase/firestore";

import styles from "./styles.module.scss";

const Home: NextPage = () => {
  async function handleFirebase() {
    try {
      const docRef = await addDoc(collection(firestore, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log(docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

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
                target="#staticBackdrop"
                toggle="modal"
                label="Saiba mais"
              />
            </div>
          </div>
        </div>
      </section>
      <Modal id="staticBackdrop" />
    </main>
  );
};

export default Home;
