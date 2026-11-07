// import { useState } from 'react';
// import Sticker from '../components/Sticker.jsx';
// import Gift from '../assets/gift.jpeg';
// export default function Accept({ go }) {
//   const [retry, setRetry] = useState(false);
//   return (
//     <>
//       <h1 className="title faded" key={String(retry)}>{retry ? 'Please try again' : 'Accept your gifts?'}</h1>
//       <Sticker emoji="🐱" src={Gift} className="static" style={{ '--w': 'clamp(110px,22vw,190px)' }} />
//       <div className="btn-row">
//         {!retry ? (
//           <>
//             <button className="cloud" onClick={() => go('choose')}>YES</button>
//             <button className="cloud" onClick={() => setRetry(true)}>NO</button>
//           </>
//         ) : (
//           <button className="cloud" onClick={() => setRetry(false)}>OKAY</button>
//         )}
//       </div>
//     </>
//   );
// }


import { useState } from 'react';
import Sticker from '../components/Sticker.jsx';
import Gift from '../assets/gift.jpeg';

export default function Accept({ go }) {
  const [retry, setRetry] = useState(false);

  return (
    <div className="accept-scene">
      {/* Romantic Title jo retry par change hoga */}
      <h1 className="title faded romantic-title" key={String(retry)}>
        {retry ? 'Aww, please say yes! 🥺' : 'Accept your gifts? 💝'}
      </h1>
      
      {/* Gift Image with bigger size and float animation */}
      <div className="gift-sticker-wrapper">
        <Sticker 
          emoji="🎁" 
          src={Gift} 
          className="static gift-img" 
          style={{ '--w': 'clamp(180px, 35vw, 260px)' }} 
        />
      </div>

      {/* Aesthetic Buttons */}
      <div className="btn-row romantic-btns">
        {!retry ? (
          <>
            <button className="cloud yes-btn" onClick={() => go('choose')}>
              YES ✨
            </button>
            <button className="cloud no-btn" onClick={() => setRetry(true)}>
              NO 😢
            </button>
          </>
        ) : (
          <button className="cloud okay-btn" onClick={() => setRetry(false)}>
            OKAY, YES! 💖
          </button>
        )}
      </div>
    </div>
  );
}