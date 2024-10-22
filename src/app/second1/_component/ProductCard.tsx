import Image from "next/image";
import styles from "./ProductCard.module.scss";
import react from "react";

type Props = {
  photo: string;
  alt: string;
  title: string;
  newPrice: number;
  oldPrice: number;
  sale: boolean;
  review: boolean;
};
export default function ProductCard({
  photo,
  alt,
  title,
  newPrice,
  oldPrice,
  sale,
  review,
}: Props) {
  return (
    <div
      className="card text-center pb-4 position-relative"
      style={{ width: "16rem", height: "24rem" }}
    >
      {sale && (
        <span className="badge bg-secondary position-absolute m-2 end-0 top-0">
          sale
        </span>
      )}
      <Image
        className="card-img-top"
        src={photo}
        alt={alt}
        width={200}
        height={200}
      ></Image>

      <div>
        <h3 className="card-title pt-2">{title}</h3>

        <div
          className="d-flex justify-content-center gap-1"
          style={review ? { color: "#FFC107" } : { color: "#000000" }}
        >
          <i className="bi-star-fill"></i>
          <i className="bi-star-fill"></i>
          <i className="bi-star-fill"></i>
          <i className="bi-star-fill"></i>
          <i className="bi-star-fill"></i>
        </div>

        <p>
          {oldPrice !== 0 && (
            <span style={{ textDecoration: "line-through" }}>$45.00</span>
          )}{" "}
          {newPrice}$
        </p>
        <button type="button" className="btn btn-outline-dark mt-4">
          Add to cart
        </button>
      </div>
    </div>
  );
}
