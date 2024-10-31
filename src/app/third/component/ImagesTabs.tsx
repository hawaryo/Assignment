"use client";

import { useState } from "react";
import Image from "next/image";
import SectionIntro from "./SectionIntro";
import styles from "./ImageTabs.module.scss";
type images = {
  URL: string;
  ID: string;
  type: string;
};

const images = [
  {
    URL: "/third/app-1.webp",
    ID: crypto.randomUUID(),
    type: "app",
  },
  {
    URL: "/third/books-1.webp",
    ID: crypto.randomUUID(),
    type: "books",
  },
  {
    URL: "/third/books-2.webp",
    ID: crypto.randomUUID(),
    type: "books",
  },
  {
    URL: "/third/books-3.webp",
    ID: crypto.randomUUID(),
    type: "books",
  },
  {
    URL: "/third/camera.webp",
    ID: crypto.randomUUID(),
    type: "product",
  },
  {
    URL: "/third/cream-1.webp",
    ID: crypto.randomUUID(),
    type: "branding",
  },
  {
    URL: "/third/lamp.webp",
    ID: crypto.randomUUID(),
    type: "product",
  },
  {
    URL: "/third/medicine.webp",
    ID: crypto.randomUUID(),
    type: "branding",
  },
  {
    URL: "/third/perfume.webp",
    ID: crypto.randomUUID(),
    type: "branding",
  },
  {
    URL: "/third/phone.webp",
    ID: crypto.randomUUID(),
    type: "app",
  },
  {
    URL: "/third/phone-3.webp",
    ID: crypto.randomUUID(),
    type: "app",
  },
  {
    URL: "/third/product-1.webp",
    ID: crypto.randomUUID(),
    type: "product",
  },
];

export default function ImageTabs() {
  const [select, Setselect] = useState("all");

  const mappingFunction = (x: images) => (
    <Image
      key={x.ID}
      src={x.URL}
      width={416}
      height={312}
      alt="product image"
      loading="lazy"
    ></Image>
  );
  const filterFunction = (x: images) => x.type === select;
  return (
    <section className={styles.mainSection}>
      <SectionIntro title="Portfolio" />
      <div className={styles.tabs}>
        <div
          onClick={() => Setselect("all")}
          style={{ color: select === "all" ? "#1bbca3" : "" }}
        >
          All
        </div>
        <div
          onClick={() => Setselect("app")}
          style={{ color: select === "app" ? "#1bbca3" : "" }}
        >
          App
        </div>
        <div
          onClick={() => Setselect("product")}
          style={{ color: select === "product" ? "#1bbca3" : "" }}
        >
          Product
        </div>
        <div
          onClick={() => Setselect("branding")}
          style={{ color: select === "branding" ? "#1bbca3" : "" }}
        >
          Branding
        </div>
        <div
          onClick={() => Setselect("books")}
          style={{ color: select === "books" ? "#1bbca3" : "" }}
        >
          Books
        </div>
      </div>
      <div className={styles.imagesSection}>
        {select === "all"
          ? images.map(mappingFunction)
          : images.filter(filterFunction).map(mappingFunction)}
      </div>
    </section>
  );
}
