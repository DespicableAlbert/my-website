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

        // Always show typewriter animation
        setShowAnimation(true);

        // Small delay to ensure component is ready
        setTimeout(() => setIsReady(true), 50);
    }, []);

    if (!isReady) return null;

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

                {/* English line in neon yellow with flicker */}
                <p className="flicker" style={{ color: '#ffff00', fontSize: 16 }}>
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
                        />
                    ) : (
                        "Explore AI, software engineering, and neon dreams."
                    )}
                </p>

                {/* Japanese line in neon pink with flicker */}
                <p className="flicker" style={{ color: '#ff00ff', fontSize: 16 }}>
                    {showAnimation ? (
                        <Typewriter
                            options={{
                                strings: ["AI、ソフトウェアエンジニアリング、そしてネオンドリームを探求する。"],
                                autoStart: true,
                                loop: false,
                                delay: 50,
                                deleteSpeed: Number.MAX_SAFE_INTEGER,
                                startDelay: 3500, // slight delay after English line
                                cursor: '',
                            }}
                        />
                    ) : (
                        "AI、ソフトウェアエンジニアリング、そしてネオンドリームを探求する。"
                    )}
                </p>

                <div className={`button-container`}>
                    <CyberButton to="/about">About Me</CyberButton>
                    <CyberButton to="/projects">Projects</CyberButton>
                    <CyberButton to="/contact">Contact</CyberButton>
                    <CyberButton to="/diversions">Diversions</CyberButton>
                </div>
            </div>
        </div>
    );
}