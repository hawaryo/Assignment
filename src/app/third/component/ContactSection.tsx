import SectionIntro from "./SectionIntro"
import ContactCard from "./ContactCard"
import styles from "./ContactSection.module.scss"

export default function ContactSection() {

    return (
      <section className={styles.contactsection}>
        <SectionIntro title="Contact" />

        <div className={styles.maincontant}>
          <div className={styles.cardscontainer}>
            <ContactCard
              icon="bi bi-geo-alt"
              title="Address"
              text1="A108 Adam Street"
              text2="New York, NY 535022"
            />
            <ContactCard
              icon="bi bi-telephone"
              title="Call Us"
              text1="+1 5589 55488 55"
              text2="+1 6678 254445 41"
            />
            <ContactCard
              icon="bi bi-envelope"
              title="Email Us"
              text1="info@example.com"
              text2="contact@example.com"
            />
            <ContactCard
              icon="bi bi-clock"
              title="Open Hours"
              text1="Monday - Friday"
              text2="9:00AM - 05:00PM"
            />
          </div>
   <form action="/" className={styles.contactform}>
            <div>
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Message"
            ></textarea>
            <button type="submit">Send Message</button>
          </form> 
        </div>
      </section>
    );
}