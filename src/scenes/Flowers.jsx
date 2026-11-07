import Sticker from '../components/Sticker.jsx';
import BackButton from '../components/BackButton.jsx';
import flowerForyou from '../assets/flowers_for_you.jpeg';

// 3 Photos ko proper path se import karein
import p1 from '../assets/photo/p1.jpeg';
import p2 from '../assets/photo/p2.jpeg';
import p3 from '../assets/photo/p3.jpeg';

export default function Flowers({ go }) {
  // Imported photos ka array
  const flowerPhotos = [p1, p2, p3];

  return (
    <div className="flowers">
      {/* Purani film strip aur cells wapas use kiye hain */}
      <div className="film">
        {flowerPhotos.map((p, i) => (
          <div className="cell" key={i} style={{ '--d': `${0.3 + i * 0.25}s` }}>
            <img src={p} alt={`Flower Memory ${i + 1}`} onError={(e) => (e.currentTarget.style.display = 'none')} />
          </div>
        ))}
      </div>

      <div className="fl-right">
        <h1 className="title left">Some flowers for you!! 💐</h1>
        <Sticker emoji="🐱💐" src={flowerForyou} className="static" style={{ '--w': 'clamp(120px,24vw,220px)' }} delay={0.6} />
      </div>

      <BackButton go={go} />
    </div>
  );
}