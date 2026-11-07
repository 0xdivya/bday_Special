import duduImg from '../assets/dudu.png'; // Upar import karein
import Sticker from '../components/Sticker.jsx';
import Envelope from '../components/envelope.jsx';   // ← NEW import
import heart from '../assets/heart.jpg';
import heroImg from '../assets/photo/myboy.jpeg'; // Yahan apne photo ka sahi path aur naam dein
import { C } from '../data/content.js';
import React, { useState, useEffect } from 'react';

export default function Intro({ go }) {
  const [showHearts, setShowHearts] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [showEnvelope, setShowEnvelope] = useState(false);

  // 5 seconds baad hearts aur envelope dono start
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHearts(true);
      setShowEnvelope(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Hearts generate karte raho
  useEffect(() => {
    if (!showHearts) return;

    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 45,
        animationDuration: Math.random() * 2 + 2,
        size: Math.random() * 10 + 10,
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 4000);
    }, 300);

    return () => clearInterval(interval);
  }, [showHearts]);

  const word = (t, off) =>
    t.split('').map((ch, i) => (
      <span key={i} className={`cut c${(i + off) % 4}`} style={{ '--i': i + off }}>
        {ch}
      </span>
    ));

  return (
    <div className="intro" onClick={() => go('cake')}>

      {/* Left side falling hearts */}
      <div className="left-heart-container">
        {showHearts && hearts.map((heart) => (
          <div
            key={heart.id}
            className="falling-heart"
            style={{
              left: `${heart.left}%`,
              animationDuration: `${heart.animationDuration}s`,
              fontSize: `${heart.size}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* 1. Photo frame */}
      <div className="frame">
  <img src={heroImg} alt="My Boy" onError={(e) => (e.currentTarget.style.display = 'none')} />
  <span className="myboy">MY BOY</span>
</div>

      {/* 2. HAPPY Birthday text */}
      <div className="hb">
        <div>{word('HAPPY', 0)}</div>
        <div>{word('Birthday', 5)}</div>
      </div>

      {/* 3. Envelope + Letter (sab logic Envelope.jsx mein) */}
      <Envelope show={showEnvelope} />

      {/* 4. Raccoon sticker */}
      <div className="icon-popup-container">
        <Sticker emoji="🦝" src={duduImg} style={{ bottom: '4%', right: '3%', '--w': '200px' }} delay={0.8} />
      </div>

      {/* 5. Hint */}
      <p
       className="hint"
       onClick={() => go('cake')}
       style={{cursor: 'pointer'}}
      >tap to here ✨</p>

      <Sticker emoji="⭐" src={heart} style={{ bottom: '8%', left: '6%', '--w': '140px' }} delay={0.6} />
    </div>
  );
}