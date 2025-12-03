import React from "react";
import "./Home.css";
import homeimage from "../assets/homeimage.jpg";

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-image-wrapper">
        <img src={homeimage} alt="Hero Banner" className="hero-image" />
      </div>
      <div className="hero-overlay"></div>
    </section>

  );
}

export default Home;
