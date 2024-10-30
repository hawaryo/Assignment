import styles from "./NumbersCard.module.scss";
type Props = {
  icon: string;
  number: number;
  title: string;
  text: string;
};
export default function NumbersCard({ icon, number, title, text }: Props) {
  return (
    <div className={styles.numbercard}>
      <i className={icon}></i>
      <div className={styles.numbercontent}>
        <span>{number}</span>
        <p>
          <strong>{title}</strong>
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
}
