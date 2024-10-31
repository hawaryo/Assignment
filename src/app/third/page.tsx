import WelcomeScreen from "./component/welcomescreen";
import NavBar from "./component/NavBar";
import AboutSection from "./component/AboutSection";
import Services from "./component/Services";
import CallToAction from "./component//CallToAction";
import MoreServicesCard from "./component/MoreServicesCard";
import ImageTabs from "./component/ImagesTabs";
import styles from "./page.module.scss";
import SectionIntro from "./component/SectionIntro";
import TeamSection from "./component/TeamSection";
import QuestionSection from "./component/QuestionSection";
import Footer from "./component/footer";
import ContactSection from "./component/ContactSection";

export default function Page() {
  return (
    <>
      <NavBar />
      <WelcomeScreen />
      <AboutSection />
      <Services />
      <CallToAction />
      {/* More Services section */}
      <section>
        <SectionIntro title="More Services" />
        <div className={styles.moreServicesCardContainer}>
          <MoreServicesCard
            image="/third/other-services-1.webp"
            imageAlt="image"
            title="Ad cupiditate sed est odio"
            text="Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id."
          />
          <MoreServicesCard
            image="/third/other-services-2.webp"
            imageAlt="image"
            title="Voluptatem voluptatum alias"
            text="Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non."
          />
          <MoreServicesCard
            image="/third/other-services-2.5.webp"
            imageAlt="image"
            title="Fugit cupiditate alias nobis."
            text="Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi."
          />
        </div>
      </section>
      {/* Portfolio section */}
      <ImageTabs />
      <TeamSection />
      <QuestionSection />
        <ContactSection />
      <Footer />
    </>
  );
}
