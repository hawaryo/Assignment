import styles from "./ServicesCard.module.scss";
type Props = {
  icon: string;
  title: string;
  text: string;
};

export default function ServicesCard({ icon, title, text }: Props) {
  return (
    <div className={styles.servicescard}>
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
