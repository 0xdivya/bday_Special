import { useState, useEffect } from 'react';
import Confetti from '../components/Confetti.jsx';
import Sticker from '../components/Sticker.jsx';
import heartFall from '../assets/heart_fall.jpg';
import CatFlower from '../assets/cat_flower.jpg';
import bdaynote from '../assets/bday_note.png';
export default function Cake({ go }) {
  const [blown, setBlown] = useState(false);
  useEffect(() => { if (!blown) return; const t = setTimeout(() => go('accept'), 3600); return () => clearTimeout(t); }, [blown]);
  return (
    <>
      <h1 className="title">{blown ? 'Yay!! Happy Birthdayyy' : 'Blow out the Candles !!!'}</h1>
      <div className={`cake ${blown ? 'blown' : ''}`} onClick={() => setBlown(true)}>
        <div className="candles">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div className="candle" key={i} style={{ '--i': i }}><div className="flame" /><div className="smoke" /></div>
          ))}
        </div>
        <div className="tier t1" /><div className="tier t2" /><div className="plate" />
      </div>
      {!blown && <button className="cloud" onClick={() => setBlown(true)}>blow 💨</button>}
      {blown && <Confetti />}
      <Sticker emoji="🐶" src={CatFlower} style={{ bottom: '-11%', left: '-1%', '--w': '320px' }} delay={0.4} />
      <Sticker emoji="🐕" src={heartFall} style={{ bottom: '-8%', right: '5%', '--w': '320px' }} delay={0.6} />
      <Sticker emoji="🐕" src={bdaynote} style={{ bottom: '-8%', left: '10%', '--w': '420px' }} delay={0.6} />
    </>
  );
}
