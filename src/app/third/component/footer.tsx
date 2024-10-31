
import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        <div className={styles.introsection}>
          <h3>Shuffle</h3>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus
          </p>
          <div className={styles.socialLinks}>
            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Our Services</h3>
          <ul>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Product Management</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">Graphic Design</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerconstact}>
          <h3>Contact Us</h3>
          <address>
            A108 Adam Street <br />
            New York, NY 535022 <br />
            United States <br />
            Phone: +1 5589 55488 55 <br />
            Email: info@example.com
          </address>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© Copyright Shuffle All Rights Reserved</p>
        <p>
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </p>
      </div>
    </footer>
  );
}
