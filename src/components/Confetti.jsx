import { useMemo } from 'react';

export default function Confetti({ count = 120 }) {
  const shapes = ['circle', 'strip', 'star', 'square'];
  
  // Dark Red aur Light Red ke shades array mein rakhe hain
  const redColors = [
    '#ff4d4d', // Bright Light Red
    '#ff1a1a', // Vivid Red
    '#cc0000', // Deep Red
    '#990000', // Dark Red
    '#e60000', // Crimson Red
    '#ff6666'  // Soft Light Red
  ];

  const pieces = useMemo(() => Array.from({ length: count }, () => {
    return {
      id: Math.random(),
      left: Math.random() * 100,
      delay: Math.random() * 3,
      dur: 2.5 + Math.random() * 2.5, // Girne ki speed
      color: redColors[Math.floor(Math.random() * redColors.length)], // Random red shades
      size: 8 + Math.random() * 12,
      stripWidth: 6 + Math.random() * 6,   // Strip ke liye width
      stripHeight: 18 + Math.random() * 15, // Strip ke liye lamba height
      rot: Math.random() * 360,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    };
  }), [count]);

  return (
    <div className="confetti-container">
      {pieces.map((p) => (
        <div
          key={p.id}
          className={`confetti-piece ${p.shape}`}
          style={{
            left: `${p.left}%`,
            width: p.shape === 'strip' ? `${p.stripWidth}px` : `${p.size}px`,
            height: p.shape === 'strip' ? `${p.stripHeight}px` : `${p.size}px`,
            backgroundColor: p.shape !== 'star' ? p.color : 'transparent',
            color: p.color, // Stars ke liye color
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            transform: `rotate(${p.rot}deg)`,
          }}
        >
          {p.shape === 'star' && '⭐'}
        </div>
      ))}
    </div>
  );
}