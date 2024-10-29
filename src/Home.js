import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import Typewriter from 'typewriter-effect';
import './Home.css';

export default function Home() {
    const navigate = useNavigate();
    const [showAnimation, setShowAnimation] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');
        if (!hasSeenAnimation) {
            setShowAnimation(true);
            sessionStorage.setItem('hasSeenAnimation', 'true');
        }
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
                                strings: ["Kuang Shen's Cyberpunk World"],
                                autoStart: true,
                                loop: false,
                                delay: 50,
                                cursor: '_',
                            }}
                            onInit={(typewriter) =>
                                typewriter.typeString("Kuang Shen's Cyberpunk World")
                                    .callFunction(() => setShowButtons(true))
                                    .start()
                            }
                        />
                    ) : (
                        "Kuang Shen's Cyberpunk World"
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
                    <button onClick={() => navigate('/about')}>About Me</button>
                    <button onClick={() => navigate('/projects')}>My Projects</button>
                    <button onClick={() => navigate('/contact')}>Contact</button>
                </div>
            </div>
        </div>
    );
}