import { useState } from 'react';
// PNG na mile to emoji dikhata hai — baad me asli sticker daal dena
export default function Sticker({ src, emoji, style, delay = 0, className = '' }) {
  const [bad, setBad] = useState(!src);
  return (
    <div className={`sticker ${className}`} style={{ ...style, '--d': `${delay}s` }}>
      {bad ? <span>{emoji}</span> : <img src={src} alt="" draggable={false} onError={() => setBad(true)} />}
    </div>
  );
}
