"use client";
import styles from "./welcome.module.scss";

export default function WellcomeScreen() {
  return (
    <section
      style={{
        backgroundImage: "url(third/head-image-1.webp)",
      }}
      className={styles.section}
    >
      {/*    <div className={styles.slider}>
        <span style={{ alignSelf: "end" }}>{`<`}</span>
        <span style={{ alignSelf: "start" }}>{`>`}</span>
      </div>
 */}
      <div className={styles.welcometext}>
        <h1>Temporibus autem quibusdam</h1>
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
