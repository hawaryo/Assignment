"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
export default function Page() {
  const [showMenu, setShowMenu] = useState(false);
  const [index, setIndex] = useState(0);
  const benefitImageSize = 70;
  const blogImageSize = 200;
  const images = [
    "/slider-5.jpg.webp",
    "/slider-1.jpg.webp",
    "/slider-6.jpg.webp",
    "/slider-20.webp",
  ];
  function handleClick() {
    setShowMenu(!showMenu);
  }
  function handleClickImages() {
    index >= 0 && index <= 2 ? setIndex(index + 1) : setIndex(0);
  }

  return (
    <>
      {/* header section */}
      <header className={`${styles.mainheader} ${styles.colorwhite}`}>
        <nav className={styles.nav}>
          <a href="#" className={`${styles.homelogo} ${styles.colorwhite}`}>
            Hepta
          </a>
          <div
            onClick={handleClick}
            className={showMenu ? styles.close : styles.burger}
          >
            {showMenu ? "x" : "|||"}
          </div>
        </nav>
        <div
          className={styles.sidemenu}
          style={showMenu ? {} : { display: "none" }}
        >
          <a href="">Home</a>
          <a href="">Hotel</a>
          <a href="">About Us</a>
          <a href="">Gallery</a>
          <a href="">News</a>
          <a href="">Contact</a>
        </div>
        <h1 className={styles.headtitle}>Travel & Tours</h1>
        <p className={styles.headtext}>
          A free template by <a href="#">Colorlib</a>. Download and share!
        </p>
        <a href="#" className={styles.headlink}>
          Visit Colorlib
        </a>
      </header>

      {/* information  section*/}
      <section className={styles.information}>
        <Image
          alt="person looking to mountains"
          src="/img_1_long.jpg.webp"
          width={540}
          height={660}
        ></Image>
        <div className={styles.textsection}>
          <h2 className={styles.sectiontitle}>Welcome To Our Website</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className={styles.playvideo}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="70"
                cy="70"
                r="67.5"
                stroke="#CACACA"
                strokeOpacity="0.6"
                strokeWidth="5"
              />
              <path
                d="M103.759 65.2306C109.249 68.3416 109.144 76.2872 103.574 79.2525L59.4402 102.747C54.0706 105.606 47.6014 101.663 47.6816 95.5803L48.3159 47.4359C48.3961 41.3533 54.9668 37.582 60.2593 40.5811L103.759 65.2306Z"
                fill="#A9FFF1"
              />
            </svg>

            <span> Play The Video</span>
          </div>
        </div>
      </section>
      {/*  benefits section */}

      <section className={styles.benefits}>
        <div className={styles.benefitstext}>
          <h2>Experience Once In Your Life Time</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind text s. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className={styles.benefitscardcontainer}>
          <div className={styles.benefitscard}>
            <Image
              alt="play video icon"
              src="001-breakfast.svg"
              width={benefitImageSize}
              height={benefitImageSize}
            ></Image>
            <h3>Good Foods</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className={styles.benefitscard}>
            <Image
              alt="play video icon"
              src="002-planet-earth.svg"
              width={benefitImageSize}
              height={benefitImageSize}
            ></Image>
            <h3>Travel Anywhere</h3>
            <p>
              FFar far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className={styles.benefitscard}>
            <Image
              alt="play video icon"
              src="003-airplane.svg"
              width={benefitImageSize}
              height={benefitImageSize}
            ></Image>
            <h3>Airplane</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className={styles.benefitscard}>
            <Image
              alt="play video icon"
              src="004-beach.svg"
              width={benefitImageSize}
              height={benefitImageSize}
            ></Image>
            <h3>Good Foods</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className={styles.benefitscard}>
            <Image
              alt="play video icon"
              src="005-mountains.svg"
              width={benefitImageSize}
              height={benefitImageSize}
            ></Image>
            <h3>Mountain Climbing</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className={styles.benefitscard}>
            <Image
              alt="play video icon"
              src="006-hot-air-balloon.svg"
              width={benefitImageSize}
              height={benefitImageSize}
            ></Image>
            <h3>Good Foods</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </section>

      {/*blog section */}
      <section className={styles.blogsection}>
        <div className={styles.blogsectiontext}>
          <h2>International Tour Management.</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div>
          <Image
            onClick={handleClickImages}
            className={styles.hoverimages}
            alt="play video icon"
            src={images[index]}
            width={800}
            height={800}
          ></Image>

          <div className={styles.blogsectiontext}>
            <h2>Recent Blog Post</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
          <div className={styles.flexblogcard}>
            <div className={styles.blogscard}>
              <Image
                alt="play video icon"
                src="/blog-1.webp"
                width={blogImageSize}
                height={blogImageSize}
              ></Image>
              <div className={styles.blogscardtext}>
                <p>February 26, 2018</p>
                <a href="#">45 Best Places To Unwind</a>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>

            <div className={styles.blogscard}>
              <Image
                alt="play video icon"
                src="/blog-2.webp"
                width={blogImageSize}
                height={blogImageSize}
              ></Image>
              <div className={styles.blogscardtext}>
                <p>February 26, 2018</p>
                <a href="#">45 Best Places To Unwind</a>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>

            <div className={styles.blogscard}>
              <Image
                alt="play video icon"
                src="/blog3.webp"
                width={blogImageSize}
                height={blogImageSize}
              ></Image>
              <div className={styles.blogscardtext}>
                <p>February 26, 2018</p>
                <a href="#">45 Best Places To Unwind</a>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section */}

      <section className={styles.customerssection}>
        <h2>Happy Customers</h2>
        <div className={styles.customerscards}>
          <div className={styles.customersreview}>
            <Image
              alt="play video icon"
              src="/person1.webp"
              width={50}
              height={50}
            ></Image>
            <q>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </q>
            <p>— Clare Gupta</p>
          </div>

          <div className={styles.customersreview}>
            <Image
              alt="play video icon"
              src="/person2.webp"
              width={50}
              height={50}
            ></Image>
            <q>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </q>
            <p>— Clare Gupta</p>
          </div>

          <div className={styles.customersreview}>
            <Image
              alt="play video icon"
              src="/person3.webp"
              width={50}
              height={50}
            ></Image>
            <q>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </q>
            <p>— Clare Gupta</p>
          </div>
        </div>
      </section>

      {/* SECTION Top Destination */}
      <section className={styles.Destination}>
        <div className={styles.benefitstext}>
          <h2>Experience Once In Your Life Time</h2>
          <p>
            Far far away, behind the word mountains, far f rom the countries
            Vokalia and Consonantia, there live the blind text s. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className={styles.DestinationCards}>
          <div className={styles.DestinationCard}>
            <Image
              alt="play video icon"
              src="/blog3.webp"
              width={240}
              height={171}
            ></Image>
            <h3>
              <a href="#">Food & Wines</a>
            </h3>
            <div className={styles.DestinationRating}>
              <span>★★★★★</span>
              <span> 3,239 reviews </span>
            </div>
          </div>
          <div className={styles.DestinationCard}>
            <Image
              alt="play video icon"
              src="/blog-1.webp"
              width={240}
              height={171}
            ></Image>
            <h3>
              <a href="#">Food & Wines</a>
            </h3>
            <div className={styles.DestinationRating}>
              <span>★★★★★</span>
              <span> 3,239 reviews </span>
            </div>
          </div>
          <div className={styles.DestinationCard}>
            <Image
              alt="play video icon"
              src="/blog-2.webp "
              width={240}
              height={171}
            ></Image>
            <h3>
              <a href="#">Food & Wines</a>
            </h3>
            <div className={styles.DestinationRating}>
              <span>★★★★★</span>
              <span> 3,239 reviews </span>
            </div>
          </div>
          <div className={styles.DestinationCard}>
            <Image
              alt="play video icon"
              src="/slider-20.webp"
              width={240}
              height={171}
            ></Image>
            <h3>
              <a href="#">Food & Wines</a>
            </h3>
            <div className={styles.DestinationRating}>
              <span>★★★★★</span>
              <span> 3,239 reviews </span>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}

      <footer className={styles.footer}>
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <h3>Quick Link</h3>
            <ul className={styles.footerList}>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Rooms</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Support</h3>
            <ul className={styles.footerList}>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Location</a>
              </li>
              <li>
                <a href="#">The Hosts</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Restaurant</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerconstact}>
            <h3>Contact Info</h3>
            <dl>
              <dt>Address:</dt>
              <dd>98 West 21th Street, Suite 721 New York NY 10016</dd>

              <dt>Phone:</dt>
              <dd>(+1) 435 3533</dd>

              <dt>Email:</dt>
              <dd>info@yourdomain.com</dd>
            </dl>
          </div>
          <div className={styles.footerform}>
            <h3>Subscribe</h3>
            <form action="#">
              <label htmlFor="email" className={styles.emaillabel}>
                Sign up for our newsletter
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                className={styles.emailinput}
              />
              <button type="submit" className={styles.emailbutton}>
                ➤
              </button>
            </form>
          </div>
        </div>
        <hr className={styles.hr} />
        <p>
          Copyright © 2024 All rights reserved | This template is made with by
          Colorlib
        </p>
      </footer>
    </>
  );
}
