import styles from "./Services.module.scss";
import ServicesCard from "./ServicesCard";
import SectionIntro from "./SectionIntro";

export default function Services() {
  return (
    <section className={styles.servicessection}>
      <SectionIntro title="Services" />

      <div className={styles.services}>
        <ServicesCard
          icon="bi bi-activity icon"
          title="Lorem Ipsum"
          text="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
        />
        <ServicesCard
          icon="bi bi-bounding-box-circles icon"
          title="Dolor Sitema"
          text="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"
        />
        <ServicesCard
          icon="bi bi-calendar4-week icon"
          title="Sed ut perspiciatis"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        />
        <ServicesCard
          icon="bi bi-broadcast icon"
          title="Nemo Enim"
          text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
      </div>
    </section>
  );
}
