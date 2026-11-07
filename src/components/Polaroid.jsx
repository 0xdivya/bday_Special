import { useState } from 'react';
export default function Polaroid({ src, rot = 0, delay = 0 }) {
  const [bad, setBad] = useState(!src);
  return (
    <div className="polaroid" style={{ '--r': `${rot}deg`, '--d': `${delay}s` }}>
      <div className="ph">{bad ? '📷' : <img src={src} alt="" onError={() => setBad(true)} />}</div>
    </div>
  );
}
