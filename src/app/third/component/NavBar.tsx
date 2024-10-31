    "use client";

import { useState } from "react";

import styles from "./NavBar.module.scss";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo}>Shuffle</div>

        <div className={styles.navlinks}>
          <div className={styles.toggle} onClick={toggleMenu}>
            |||
          </div>
          <ul style={{ display: showMenu ? "flex" : "" }}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#Team">Team</a>
            </li>
            <li>
              <a>Dropdown</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
