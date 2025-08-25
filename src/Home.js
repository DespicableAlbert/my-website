import { useEffect, useState } from 'react'; 
import Typewriter from 'typewriter-effect';
import CyberButton from './components/CyberButton'; // Import CyberButton
import './Home.css';

export default function Home() {
    const [showAnimation, setShowAnimation] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Preload sounds to avoid lag on first hover/click
        const hoverSound = new Audio(`${process.env.PUBLIC_URL}/hover.wav`);
        const clickSound = new Audio(`${process.env.PUBLIC_URL}/click.wav`);
        hoverSound.load();
        clickSound.load();

        const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');
        if (!hasSeenAnimation) {
            setShowAnimation(true);
            sessionStorage.setItem('hasSeenAnimation', 'true');
        }
        setTimeout(() => setIsReady(true), 50);
    }, []);

    if (!isReady) return null;

    console.log("Home component rendered");
    return (
        <div className="home-container">
            <div className="content">
                <h1 className="flicker">
                    {showAnimation ? (
                        <Typewriter
                            options={{
                                strings: ["Kuang's Cyberpunk World"],
                                autoStart: true,
                                loop: false,
                                delay: 50,
                                deleteSpeed: Number.MAX_SAFE_INTEGER,
                                cursor: '_',
                            }}
                        />
                    ) : (
                        "Kuang's Cyberpunk World"
                    )}
                </h1>

                <p className="sub-caption">
                    {showAnimation ? (
                        <Typewriter
                            options={{
                                strings: ["Explore AI, software engineering, and neon dreams."],
                                autoStart: true,
                                loop: false,
                                delay: 50,
                                deleteSpeed: Number.MAX_SAFE_INTEGER,
                                startDelay: 2500,
                                cursor: '',
                            }}
                            onInit={(typewriter) => typewriter.start()}
                        />
                    ) : (
                        "Explore AI, software engineering, and neon dreams."
                    )}
                </p>

                <div className={`button-container ${showAnimation ? 'fade-in' : 'visible'}`}>
                    <CyberButton to="/about">About Me</CyberButton>
                    <CyberButton to="/projects">My Projects</CyberButton>
                    <CyberButton to="/contact">Contact</CyberButton>
                </div>
            </div>
        </div>
    );
}