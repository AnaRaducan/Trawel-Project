import React from "react";
import "./topDestinations.css";
import img2 from "../img/img2.jpg";
import img4 from "../img/img4.jpg";

function TopDestinations() {
  return (
    <section className="top-destinations">
      <h2 className='animation-dest'data-text="Top Destinations🏖️">Top Destinations🏖️</h2>

      <div className="destination-block">
        <img src={img2} alt="Destination Left" className="destination-img" />
        <div className="destination-text">
          <h3>Dream Beach</h3>
          <p>Explore the golden sands and crystal waters of this tranquil beach destination. Perfect for relaxing and recharging.</p>
        </div>
      </div>

      <div className="destination-block reverse">

        <img src={img4} alt="Destination Right" className="destination-img" />
        <div className="destination-text">
          <h3>Mountain Escape</h3>
          <p>Discover fresh air, scenic trails, and the peaceful calm of nature in this stunning mountainous retreat.</p>
        </div>
      </div>
    </section>
  );
}

export default TopDestinations;