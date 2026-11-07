import React, { useState } from 'react';
import BackButton from '../components/BackButton.jsx';

export default function Journal({ go }) {
  // 4 Gift Notes ka data with your custom messages
  const notes = [
    { 
      id: 1, 
      title: 'Gift Note 1 🎁', 
      content: 'First gift ke liye... I give you bohot saari kisses aur ek pyaara sa tight wala hug Main abhi aapko sach mein toh hug nahi kar sakti, isliye bas yeh message padh kar wahi feeling feel kar lena! 🤗❤️' 
    },
    { 
      id: 2, 
      title: 'Gift Note 2 🧸', 
      content: "Why I Always Choose You?    Sach kahun toh I don't have any logical reason ki main aapko kyun choose karungi.. Because reasons are found by the mind, but heart simply feel it. If love had a reason, maybe that choice would change tomorrow if the reason ever did..But I don't have reason for choosing you. It feels like universe itself has written you into my destiny. What you mean to me is something I can never express in words. Aap sirf meri choice hi nahi mera sukoon ho. You are my everything..I choose you yesterday. I choose you unconditional today and in every tomorrow to come without needing a single reason. I will only and always choose you. ❤️" 
    },
    { 
      id: 3, 
      title: 'Gift Note 3 💌', 
      content: 'Aapko pata h..You are my lucky charm, babe! absolute mere lucky charm ho..meri gndi guju muju! ❤️✨' 
    },
    { 
      id: 4, 
      title: 'Gift Note 4 🌟', 
      content: 'Long distance... sach mein handle karna itna mushkil hota hai na? 🥺 Main aapki har ek cheez ko itna miss karti hoon... jaise aap baat karte ho, kabhi-kabhi mujhe tease karte ho, har chhoti se chhoti baat mere liye special hai. 💭✨ Jaise aap pyaar se bulate the, sath mein time spend krte the, kahin ghumne jate the... sab kuch kitna yaad aata h!! 🫂💖 Aapka physical presence, wo aaram se haath pakadna, wo normal se cute touches bhi... sach kehte h..distance teaches us everything..ab sab kitna dur ho gya h. 🥺 aapka wo hasna, humara sath baith kar be-wajah hasna, yahan tak ki wo chote-mote gusse aur jhagdre bhi... ab sab kuch itna precious lagta hai, jitna aap soch bhi nahi sakte. 🥀💫 Today, I wish I could be there right beside you, to look deep into your eyes, hold your hand tight, and make your birthday feel as special as you are to me. 🎂❤️ But distance has only separated our hands, never our hearts.* ♾️✨  Even when I cannot stand beside you, my love is right there with you—quietly holding you, supporting you, and celebrating every beautiful moment of your life. 🫂💖....So on your birthday, remember this: you may be far from me, but you are never alone. 🌟..My heart is with you, my prayers are with you, and a part of me will always be wherever you are. 🤲❤️...**Happy Birthday, my love.** 🎉🎂...Until the distance disappears...let my love be the closest thing you have to me. 💋✨🤗' 
    },
  ];

  // State jo track karegi ki kaun sa note center modal mein khula hai
 const [selectedNote, setSelectedNote] = useState(notes[0]); // Default first note open rahega

  return (
    <div className="journal-scene">
      <h1 className="title journal-heading" style={{ marginBottom: '15px' }}>Our Memory Journal 📖✨</h1>

      {/* Book Container */}
      <div className="book">
        {/* Left Page: Note List / Selection */}
        <div className="page left">
          <div className="bday-tag">Gift Notes 💖</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', marginTop: '10px' }}>
            {notes.map((note) => (
              <button
                key={note.id}
                onClick={() => setSelectedNote(note)}
                style={{
                  background: selectedNote.id === note.id ? '#ff6584' : '#fff3c4',
                  color: selectedNote.id === note.id ? '#fff' : '#333',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  transition: 'all 0.2s ease'
                }}
              >
                {note.title} ✨
              </button>
            ))}
          </div>
        </div>

        <div className="spine"></div>

        {/* Right Page: Selected Note Content (Scrollable & Clean) */}
        <div className="page right">
          <h3 style={{ color: '#d81b60', fontFamily: 'Georgia, serif', marginBottom: '8px' }}>
            {selectedNote.title}
          </h3>
          <div style={{ width: '100%', maxHeight: '280px', overflowY: 'auto', paddingRight: '5px', textAlign: 'left' }}>
            <p style={{ whiteSpace: 'pre-line', fontSize: '0.95rem', lineHeight: '1.5', color: '#444', margin: 0 }}>
              {selectedNote.content}
            </p>
          </div>
        </div>
      </div>

      <BackButton go={go} />
    </div>
  );
}