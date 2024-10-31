import styles from "./SectionIntro.module.scss";

type Props = {
  title: string;
};
export default function SectionIntro({ title }: Props) {
  return (
    <div className={styles.sectionintro}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
  );
}
