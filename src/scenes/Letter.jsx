import useTypewriter from '../components/useTypewriter.js';
import Polaroid from '../components/Polaroid.jsx';
import BackButton from '../components/BackButton.jsx';

// 1. Apni dono photos yahan import karein (path apne folder ke hisab se check kar lein)
import ph1 from '../assets/photo/ph1.jpeg';
import ph2 from '../assets/photo/ph2.jpeg';

export default function Letter({ go }) {
  // 2. Apna romantic message yahan direct likh dein
  const myMessage = `Happy birthday meri gndi.. 🥺❤️ You are so special for me.. bht hi jyada! 🫂✨ You make everything lighter for me in hardest times, and you always find a way to make me laugh and smile no matter what. 🥹💕 I don't say it enough, but you are my absolute favourite feeling, my safe place, and one of the best things that ever happened to me. 🌹✨ Thank you for always being there for me, for holding my hand, and for loving me the way you do. 💋😘 I love you more than words can say, my whole world! You mean everything to me! 💖💫♾️`;

  const text = useTypewriter(myMessage, 22);

  return (
    <div className="letter-wrap">
      {/* Typewriter text paper */}
      <div className="paper letter">
        {text}<span className="caret">|</span>
      </div>

      {/* 3. Stack mein ph1 aur ph2 polaroid photos pass karein */}
      <div className="stack">
        <Polaroid src={ph1} rot={6} delay={0.4} />
        <Polaroid src={ph2} rot={-5} delay={0.8} />
      </div>

      <BackButton go={go} />
    </div>
  );
}