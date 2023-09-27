import React from 'react';
import './Sponser.css';

const sponsors = [
  './3.jpeg',
  './4.jpeg',
  './5.jpeg',
  './6.jpeg',
  
];

const SponsorComponent = () => {
  return (
    <div className="sponsor-container">
      {sponsors.map((imageSrc, index) => (
        <div className="sponsor" key={index}>
          <img src={imageSrc} alt={`Sponsor ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default SponsorComponent;
