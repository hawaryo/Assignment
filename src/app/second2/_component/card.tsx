import Image from "next/image";
import styles from "./card.module.scss";
export default function Card() {
  return (
    <div
      className={`card-body d-flex justify-content-between align-items-center  border rounded shadow-sm ${styles.card}`}
    >
      <div className=" pt-4 pb-4 ps-4">
        <strong>World</strong>
        <h3 className="card-title">
          <a href="#">Featured post</a>
        </h3>
        <div>Nov 12</div>
        <p className="card-text" style={{ maxWidth: "93" }}>
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </p>
        <a href="#">Continue reading</a>
      </div>

      <Image
        className={styles.cardimages}
        src="/download.svg"
        alt="blog image"
        width="200"
        height="200"
      ></Image>
    </div>
  );
}
