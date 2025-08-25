// src/components/MusicButton.js
import { useRef, useState } from 'react';
import CyberButton from './CyberButton';
import './MusicButton.css';

export default function MusicButton({ audioSrc }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {
        console.log("User interaction required to play audio");
      });
      setIsPlaying(true);
    }
  };

  return (
    <>
      <CyberButton onClick={toggleAudio} className="music-button">
        {isPlaying ? "Pause Music" : "Play Music"}
      </CyberButton>
      <audio ref={audioRef} src={audioSrc} loop />
    </>
  );
}