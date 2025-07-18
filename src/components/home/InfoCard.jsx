import React from "react";
import "./InfoCard.css"; // importa o CSS

function InfoCard({ icon: Icon, title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="info-card"
    >
      <div className="info-card-content">
        <div className="info-card-icon">
          <Icon />
        </div>
        <h3 className="info-card-title">{title}</h3>
        <p className="info-card-description">{description}</p>
      </div>
    </a>
  );
}

export default InfoCard;
