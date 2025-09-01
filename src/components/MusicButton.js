// src/components/MusicButton.js
import { useRef, useState, useEffect } from 'react';
import CyberButton from './CyberButton';
import './MusicButton.css';

export default function MusicButton({ audioList = [] }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Play next track when one ends
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % audioList.length);
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioList]);

  // Whenever currentIndex changes, auto-play if already playing
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("User interaction required to play audio");
      });
    }
  }, [currentIndex, isPlaying]);

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
      <CyberButton onClick={toggleAudio} className="cyber-button music-button">
        {isPlaying ? "Pause Music" : "Play Music"}
      </CyberButton>
      {audioList.length > 0 && (
        <audio ref={audioRef} src={audioList[currentIndex]} />
      )}
    </>
  );
}