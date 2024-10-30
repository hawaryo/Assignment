import styles from "./CallToAction.module.scss";

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.welcometext}>
        <h2>Temporibus autem quibusdam</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className={styles.primarybutton}>Get Started</button>
      </div>
    </section>
  );
}
