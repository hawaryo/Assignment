import SectionIntro from "./SectionIntro";
import Image from "next/image";
import styles from "./About.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NumbersCard from "./NumbersCard";
export default function AboutSection() {
  return (
    <>
      <SectionIntro title="About Us" />

      <section className={styles.aboutsection}>
        <div className={styles.abouttext}>
          <h3>Voluptatem dignissimos provident quasi corporis</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul>
            <li>
              <i className="bi bi-check-circle"></i>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>
              <i className="bi bi-check-circle"></i>
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li>
              <i className="bi bi-check-circle"></i>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </li>
          </ul>
          <button className={styles.aboutbutton}>Read More</button>
        </div>
        <Image
          src="/third/about-section-photo.webp"
          alt="about us"
          width={418}
          height={470}
        ></Image>
      </section>

      <section className={styles.numbersection}>
        <NumbersCard
          icon="bi bi-emoji-smile"
          number={232}
          title="Happy Clients"
          text="consequuntur quae"
        />
        <NumbersCard
          icon="bi bi-journal-richtext "
          number={521}
          title="Projects"
          text="adipisci atque cum quia aut"
        />
        <NumbersCard
          icon="bi bi-headset"
          number={1453}
          title="Hours Of Support"
          text="aut commodi quaerat"
        />
        <NumbersCard
          icon="bi bi-people"
          number={32}
          title="Hard Workers"
          text="rerum asperiores dolor"
        />
      </section>
    </>
  );
}
