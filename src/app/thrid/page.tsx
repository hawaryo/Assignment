import WelcomeScreen from "./component/welcomescreen";
import NavBar from "./component/NavBar";
import AboutSection from "./component/AboutSection";
import styles from "./style.module.scss";
import SectionIntro from "./component/SectionIntro";
export default function Page() {
  return (
    <>
      <NavBar />
      <WelcomeScreen />
      <AboutSection />
    </>
  );
}
