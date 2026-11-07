import { useState } from 'react';
import Sticker from '../components/Sticker.jsx';

// 1. Apni teenon gift images ko yahan import karein (path apne assets folder ke hisab se check kar lein)
import gift1Img from '../assets/inbox.jpeg';
import gift2Img from '../assets/flower.png';
import gift3Img from '../assets/gift_box.jpeg';

export default function Choose({ go }) {
  const gifts = [
    { img: gift1Img, tag: 'Gift 1', to: 'letter' },
    { img: gift2Img, tag: 'Gift 2', to: 'flowers' },
    { img: gift3Img, tag: 'Gift 3', to: 'journal' },
  ];

  return (
    <div className="choose-scene">
      {/* Romantic Header Title */}
      <h1 className="title choose-title">Yay! Choose your gift 💝</h1>

      {/* Gift Cards Row */}
      <div className="gift-row">
        {gifts.map((g, i) => (
          <button 
            key={g.to} 
            className="gift-card" 
            style={{ '--d': `${i * 0.15}s` }} 
            onClick={() => go(g.to)}
          >
            <div className="gift-img-container">
              <img src={g.img} alt={g.tag} className="gift-icon-img" />
            </div>
            <span className="tag">{g.tag}</span>
          </button>
        ))}
      </div>

      {/* Bottom Cursive Underlined Text */}
      <div className="more-gift-container" onClick={() => go('precious')} style={{ cursor: 'pointer' }}>
  <p className="cursive-more-text">more gift for you -&gt;</p>
</div>
    </div>
  );
}