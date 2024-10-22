import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "./second.module.scss";
import React from "react";
import ProductCard from "./_component/ProductCard";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Page() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      All Product
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Popular Items
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* Second section */}
      <section className="py-5 px-5 d-flex flex-wrap justify-content-center align-items-center gap-4">
        <Image
          src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
          alt="product image"
          width={600}
          height={700}
          priority
        ></Image>

        <div>
          <p>SKU: BST-498</p>
          <h1>Shop item template</h1>
          <p>
            <span className={styles.oldprice}>$45.00</span> $40.00
          </p>
          <p className={styles.productdescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi
            alias magni, accusamus eius blanditiis delectus ipsam minima ea iste
            laborum vero?
          </p>
          <input
            className="form-control d-inline  text-center mx-2 rounded border-black"
            style={{ maxWidth: "2.4rem", maxHeight: "2.4rem" }}
            type="tel"
            name="items-number"
            value="1"
          />
          <button className="btn btn-outline-dark mt-auto">
            <span className={styles.addtocarttext}>Add to cart</span>
          </button>
        </div>
      </section>

      {/* third section */}

      <section
        className="py-5 px-5 d-flex flex-wrap justify-content-center align-items-center gap-4"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <ProductCard
          photo="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="Fancy Product"
          title="Fancy Product"
          newPrice={40}
          oldPrice={0}
          sale={false}
          review={false}
        />
        <ProductCard
          photo="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="Special item"
          title="Special item"
          newPrice={20}
          oldPrice={18}
          sale={true}
          review={true}
        />
        <ProductCard
          photo="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="Sale item"
          title="Sale item"
          newPrice={50}
          oldPrice={25}
          sale={true}
          review={false}
        />
        <ProductCard
          photo="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="popular item"
          title="Popular item"
          newPrice={40}
          oldPrice={0}
          sale={false}
          review={true}
        />
      </section>

      <footer className="bg-dark text-center text-white py-5">
        Copyright © Your Website 2023
      </footer>
    </>
  );
}
