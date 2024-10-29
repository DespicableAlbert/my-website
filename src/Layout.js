import { Outlet } from 'react-router-dom'; // Used to render nested routes
import { useRef, useEffect, useState } from 'react';
// import './Layout.css'; // Add your styling here

export default function Layout() {
    const audioRef = useRef(null); // Audio element ref
    const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state

    const toggleAudio = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                audio.play().catch((error) => {
                    console.error('Audio playback blocked:', error);
                });
                setIsPlaying(true);
            }
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio && audio.paused) {
            audio.play().catch((error) =>
                console.error('Audio playback blocked:', error)
            );
            setIsPlaying(true);
        }
    }, []); // Only run on component mount

    return (
        <div className="layout-container">
            {/* Persistent Music Button */}
            <button className="music-button" onClick={toggleAudio}>
                {isPlaying ? 'Pause Music' : 'Play Music'}
            </button>

            {/* Background Music */}
            <audio ref={audioRef} src="/bgm.mp3" loop />

            {/* Render the current route */}
            <Outlet />
        </div>
    );
}