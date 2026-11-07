import { useState } from 'react';
import Sticker from './components/Sticker.jsx';
import ribbonImg from './assets/ribbon.png';
import discoImg from './assets/disco_ball.png';
import PreciousMoments from './scenes/PreciousMoment.jsx';
import Intro from './scenes/Intro.jsx';
import Cake from './scenes/Cake.jsx';
import Accept from './scenes/Accept.jsx';
import Choose from './scenes/Choose.jsx';
import Letter from './scenes/Letter.jsx';
import Flowers from './scenes/Flowers.jsx';
import Journal from './scenes/Journal.jsx';

const SCENES = { intro: Intro, cake: Cake, accept: Accept, choose: Choose, letter: Letter, flowers: Flowers, journal: Journal,
  precious: PreciousMoments };
 

// Har scene ke peeche rehne wali decoration (scene badalne par bhi nahi hilti)
function Decor({ scene }) {
  const intro = scene === 'intro';
  return (
    <>
      <div className="gingham corner-bl" />
      {intro && <div className="stripes" />}
      
      {/* 2. Yahan ribbonImg variable pass karein */}
      <Sticker emoji="🎀" src={ribbonImg} style={{ top: '-1%', left: '2%', '--w': '120px', '--r': '-8deg' }} />
      <Sticker emoji="🎀" src={ribbonImg} style={{ top: '-1%', right: '2%', '--w': '120px', '--r': '8deg' }} delay={0.15} />
      
      {!intro && <Sticker emoji="🪩" src={discoImg} style={{ top: '3%', right: '8%', '--w': '150px' }} delay={0.3} />}
      {!intro && <Sticker emoji="🪩" src={discoImg} style={{ top: '22%', right: '4%', '--w': '90px' }} delay={0.45} />}
      
      
    </>
  );
}

export default function App() {
  const [scene, setScene] = useState('intro');
  const [leaving, setLeaving] = useState(false);

  // Pehle exit animation, phir naya scene
  const go = (next) => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(() => { setScene(next); setLeaving(false); }, 450);
  };

  const Current = SCENES[scene];
  return (
    <div className="stage">
      <Decor scene={scene} />
      <div key={scene} className={`scene ${leaving ? 'leaving' : ''}`}>
        <Current go={go} />
      </div>
    </div>
  );
}
