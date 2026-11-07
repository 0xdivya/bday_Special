import React, { useState, useEffect, useRef } from 'react';
import Sticker from '../components/Sticker.jsx';

// 1. Apni song file import karein
import loveSong from '../assets/audio.mp3';

// Sabhi 22 photos import karein
import photo1 from '../assets/photo/photo1.jpg';
import photo2 from '../assets/photo/photo2.jpg';
import photo3 from '../assets/photo/photo3.jpg';
import photo4 from '../assets/photo/photo4.jpg';
import photo5 from '../assets/photo/photo5.jpg';
import photo6 from '../assets/photo/photo6.jpg';
import photo7 from '../assets/photo/photo7.jpg';
import photo8 from '../assets/photo/photo8.jpg';
import photo9 from '../assets/photo/photo9.jpg';
import photo10 from '../assets/photo/photo10.jpg';
import photo11 from '../assets/photo/photo11.jpg';
import photo12 from '../assets/photo/photo12.jpg';
import photo13 from '../assets/photo/photo13.jpg';
import photo14 from '../assets/photo/photo14.jpg';
import photo15 from '../assets/photo/photo15.jpg';
import photo16 from '../assets/photo/photo16.jpg';
import photo17 from '../assets/photo/photo17.jpg';
import photo18 from '../assets/photo/photo18.jpg';
import photo19 from '../assets/photo/photo19.jpeg';
import photo20 from '../assets/photo/photo20.jpeg';
import photo21 from '../assets/photo/photo21.jpeg';
import photo22 from '../assets/photo/photo22.jpeg';

export default function PreciousMoments({ go }) {
  // Total 22 photos ki list
  const allPhotos = [
    photo1, photo2, photo3, photo4, photo5, 
    photo6, photo7, photo8, photo9, photo10, 
    photo11, photo12, photo13, photo14, photo15,
    photo16, photo17, photo18, photo19, photo20, 
    photo21, photo22
  ];

  const [stripPhotos, setStripPhotos] = useState(allPhotos.slice(0, 6));
  const [currentIndex, setCurrentIndex] = useState(6);
  
  // Center photo shuru se hi active rahegi taaki screen blank na ho
  const [activeCenterPhoto, setActiveCenterPhoto] = useState(allPhotos[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Audio ref for controlling song playback
  const audioRef = useRef(null);

  // Screen khulte hi song play hoga
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((error) => {
        console.log("Autoplay blocked by browser:", error);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  // Rapid transition & continuous center photo update
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      // Thodi si animation ke baad strip shift hogi aur next photo center mein aa jayegi
      setTimeout(() => {
        const nextCenterPhoto = stripPhotos[1] || allPhotos[0];
        setActiveCenterPhoto(nextCenterPhoto);
        setIsAnimating(false);

        setStripPhotos((prev) => {
          const newPrev = prev.slice(1);
          const nextPhotoToPull = allPhotos[currentIndex % allPhotos.length];
          return [...newPrev, nextPhotoToPull];
        });

        setCurrentIndex((prev) => (prev + 1) % allPhotos.length);
      }, 400); // Rapid switch delay

    }, 2000); // Har 2 seconds mein photo change hogi

    return () => clearInterval(interval);
  }, [stripPhotos, currentIndex, allPhotos]);

  return (
    <div className="precious-scene">
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={loveSong} loop />

      {/* 1. Header Title */}
      <h1 className="title precious-title">Precious Moments ✨</h1>

      {/* 2. Center Big Highlight Polaroid Photo (Kabhi blank nahi hogi) */}
      <div className="center-spotlight-container show">
        {activeCenterPhoto && (
          <div className="polaroid-card big-polaroid">
            <div className="polaroid-img-box">
              <img src={activeCenterPhoto} alt="Precious Moment" />
            </div>
            <p className="polaroid-caption">Forever with you 💖</p>
          </div>
        )}
      </div>

      {/* 3. Bottom Horizontal Polaroid Film Strip */}
      <div className="film-strip-wrapper">
        <div className="film-strip-track">
          {stripPhotos.map((photo, index) => (
            <div 
              key={index} 
              className={`polaroid-card strip-polaroid ${index === 0 && isAnimating ? 'moving-out' : ''}`}
            >
              <div className="polaroid-img-box">
                <img src={photo} alt={`Memory ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Back button at bottom-left */}
      <button className="cloud back-btn" onClick={() => go('choose')}>
        ← Back
      </button>
    </div>
  );
}