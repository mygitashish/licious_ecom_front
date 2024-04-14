import React from "react";
import backgroundImg from "./banner.png"; // Import your background image
import "./banner.css";

function Banner() {
  return (
    <div
      className="banner"
      style={{
        height: "400px",
        position: "relative",
      }}
    >
      <div className="overlay">
        <div
          className="banner-content"
          style={{
            width: "60%",
            textAlign: "center",
            color: "#fff",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            Meat Shop
          </h1>
          <p style={{ fontSize: "1rem", marginBottom: "20px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="btn buyButton">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
