import styles from "./QuestionSection.module.scss";

export default function QuestionSection() {
  return (
    <section className={styles.questionsection}>
      <div className={styles.sectionintro}>
        <h3>
          Frequently Asked <strong>Questions</strong>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
          irure dolor in reprehenderit
        </p>
      </div>

      <div className={styles.questions}>
        <details>
          <summary>
            2. Feugiat scelerisque varius morbi enim nunc faucibus a
            pellentesque?
          </summary>
          Dolor sit amet consectetur adipiscing elit pellentesque habitant
          morbi. Id interdum velit laoreet id donec ultrices. Fringilla
          phasellus faucibus scelerisque eleifend donec pretium. Est
          pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
          cursus turpis massa tincidunt dui.
        </details>
        <details>
          <summary>
            3. Dolor sit amet consectetur adipiscing elit pellentesque?
          </summary>
          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
          orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra
          diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
          Lectus urna duis convallis convallis tellus. Urna molestie at
          elementum eu facilisis sed odio morbi quis
        </details>
        <details>
          <summary>
            4. Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
          </summary>
          Dolor sit amet consectetur adipiscing elit pellentesque habitant
          morbi. Id interdum velit laoreet id donec ultrices. Fringilla
          phasellus faucibus scelerisque eleifend donec pretium. Est
          pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
          cursus turpis massa tincidunt dui.
        </details>
        <details>
          <summary>
            5. Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
          </summary>
          Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim
          suspendisse in est ante in. Nunc vel risus commodo viverra maecenas
          accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus
          gravida quis blandit turpis cursus in
        </details>
      </div>
    </section>
  );
}
