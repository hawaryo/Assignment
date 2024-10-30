import Image from "next/image";
import styles from "./TeamSection.module.scss";
export default function TeamSection() {
  return (
    <section className={styles.teamsection}>
      <h3>Team</h3>
      <div className={styles.teamimages}>
        <Image
          src="/third/Ceo-picture.webp"
          alt="image"
          width={400}
          height={400}
        ></Image>
        <Image
          src="/third/co-founder.webp"
          alt="image"
          width={400}
          height={400}
        ></Image>
        <Image
          src="/third/customer.webp"
          alt="image"
          width={400}
          height={400}
        ></Image>
        <Image
          src="/third/founder.webp"
          alt="image"
          width={400}
          height={400}
        ></Image>
      </div>
    </section>
  );
}
