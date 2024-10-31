import Image from "next/image";
import styles from "./MoreServicesCard.module.scss";

type props = {
  image: string;
  imageAlt: string;
  title: string;
  text: string;
};
export default function MoreServicesCard({
  image,
  imageAlt,
  title,
  text,
}: props) {
  return (
    <div className={styles.servicescard}>
      <Image src={image} alt={imageAlt} width={400} height={300}></Image>
      <h3>More Services</h3>
      <p>There are many variations of passages of Lorem Ipsum</p>
    </div>
  );
}
