import Image from "next/image";
import styles from "./card.module.scss";

type Props = {
  type?: string;
  typeStyle?: string;
  date?: string;
  title?: string;
};
export default function Card({ type, date, title, typeStyle }: Props) {
  return (
    <div
      className={`card-body d-flex justify-content-between align-items-center  border rounded shadow-sm ${styles.card}`}
    >
      <div className=" pt-4 pb-4 ps-4">
        <strong className={`mb-2 d-block ${typeStyle}`}>{type}</strong>
        <h3 className="card-title">
          <a href="#" className="text-dark">
            {title}
          </a>
        </h3>
        <div className="text-muted mb-2">{date}</div>
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
