import './envelope.css';
import React, { useState } from 'react';
import useTypewriter from './useTypewriter.js';
import envelopeImg from '../assets/message.png';

const DEFAULT_LETTER = `To my special one 💙

Happy Birthday..meri Poku! 🥰!!!

I pray that you always stay happy, healthy, and successful, and that everything wonderful comes your way. That is my only blessing for you. I love you so much, and once again, a very Happy Birthday! 🎂💖✨

— Always yours 🤍`;

/* Letter modal: alag component hai, isliye har baar open hone par typing shuru se hoti hai */
function LetterModal({ text: fullText, closing, onClose }) {
  const text = useTypewriter(fullText, 45); // bada number = dheere typing

  return (
    <div
      className={`letter-modal-overlay ${closing ? 'closing' : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={`letter-card ${closing ? 'closing' : ''}`}>
        <span className="letter-seal">💌</span>
        <div className="letter-text">
          {text}
          <span className="caret">|</span>
        </div>
        <button className="close-letter-btn" onClick={onClose}>
          Close 🤍
        </button>
      </div>
    </div>
  );
}

/*
  Props:
  - show   : true hone par envelope center mein pop hoga (Intro se 5 sec baad true aayega)
  - letter : (optional) letter ka text. Na do to DEFAULT_LETTER use hoga
*/
export default function Envelope({ show = false, letter = DEFAULT_LETTER }) {
  // letter: 'closed' -> 'open' -> 'closing' -> 'closed'
  const [letterState, setLetterState] = useState('closed');
  // docked: close ke baad envelope right-bottom side chala jaye
  const [docked, setDocked] = useState(false);

  if (!show) return null;

  const openLetter = (e) => {
    e.stopPropagation(); // background click se 'cake' page par na jaye
    setLetterState('open');
  };

  const closeLetter = () => {
    setLetterState('closing'); // letter sikudti hai
    setTimeout(() => {
      setLetterState('closed');
      setDocked(true); // envelope slide hokar chhota ho jata hai
    }, 650);
  };

  return (
    <>
      <div
        className={`env ${docked ? 'docked' : 'center'} ${letterState === 'open' ? 'env-hidden' : ''}`}
        onClick={openLetter}
      >
        <div className="env-inner">
          <img src={envelopeImg} alt="Love Envelope" className="center-envelope-img" />
          <span className="open-envelope-text">
            {docked ? 'Open again 💙' : 'Open It 💌'}
          </span>
        </div>
      </div>

      {letterState !== 'closed' && (
        <LetterModal
          text={letter}
          closing={letterState === 'closing'}
          onClose={closeLetter}
        />
      )}
    </>
  );
}