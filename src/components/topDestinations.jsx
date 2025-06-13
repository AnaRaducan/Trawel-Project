import React, { useState } from "react";
import "./topDestinations.css";
import img2 from "../img/img2.jpg";
import img4 from "../img/img4.jpg";

function TopDestinations() {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (imgSrc) => {
    setModalImg(imgSrc);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  return (
    <section className="top-destinations">
      <div className="background-shadow"></div>
      <h2 className="animation-dest" data-text="Top Destinations🏖️">
        Top Destinations🏖️
      </h2>

      <div className="destination-block">
        <div
          className="destination-img-wrapper"
          onClick={() => openModal(img2)}
        >
          <img src={img2} alt="Destination Left" className="destination-img" />
        </div>
        <div className="destination-text">
          <h3>Dream Beach</h3>
          <p>
            Explore the golden sands and crystal waters of this tranquil beach
            destination. Perfect for relaxing and recharging.
          </p>
        </div>
      </div>

      <div className="destination-block reverse">
        <div
          className="destination-img-wrapper"
          onClick={() => openModal(img4)}
        >
          <img src={img4} alt="Destination Right" className="destination-img" />
        </div>
        <div className="destination-text">
          <h3>Ocean Paradise</h3>
          <p>
            Relax on a pristine private island surrounded by turquoise waters,
            overwater bungalows, and endless sky. Perfect for romantic getaways
            and peaceful escapes.
          </p>
        </div>
      </div>

      {modalImg && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImg} alt="Zoomed" />
        </div>
      )}
    </section>
  );
}

export default TopDestinations;
