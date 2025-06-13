import "../App.css";
import "./trawelCard.css";

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img14 from "../img/img14.jpg";

import starIcon from "../icons/star.png";
import heartIcon from "../icons/heart.png";

import React, { useState } from "react";

function TrawelCard() {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (imgSrc) => {
    setModalImg(imgSrc);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  const locations = [
    { name: "Scotland", img: img1 },
    { name: "Tropical Retreat", img: img2 },
    { name: "Mountain Escape", img: img3 },
    { name: "Private Island", img: img4 },
    { name: "Ocean Paradise", img: img5 },
    { name: "Coastal Serenity", img: img6 },
    { name: "Hidden Lagoon", img: img7 },
    { name: "Jungle Retreat", img: img14 }
  ];

  return (
    <section className="destination-section" id="destination" >
      <div className="destination-intro">
        <h2>Explore Popular Destinations 🌍</h2>
        <p>
          Discover a selection of the world's most stunning places to visit.
          Whether you're dreaming of nature, luxury, or adventure — find your next unforgettable escape.
        </p>
      </div>

      <div className="grid-container">
  {locations.map((place, i) => (
    <div className="card zoom-effect" key={i}>
      <img
        className="dimension-img"
        src={place.img}
        alt={place.name}
        onClick={() => openModal(place.img)}
      />
      <img className="heart-icon" src={heartIcon} alt="favorite" />
      <div className="icons--star">
        <h3>{place.name}</h3>
        <p>New</p>
        <img className="icon--dimension" src={starIcon} alt="icon star" />
      </div>
      <div className="description__img">
        <p>{(10 + i * 5).toFixed(1)} kilometers away</p>
        <p>17-19 July</p>
      </div>
      <p><strong>{(70000 + i * 3000).toLocaleString()}</strong> night</p>
    </div>
  ))}
</div>

      {modalImg && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImg} alt="Zoomed Destination" />
        </div>
      )}
    </section>
  );
}

export default TrawelCard;