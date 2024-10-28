import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; // Import React hooks
import Typewriter from 'typewriter-effect'; // Import Typewriter.js
import './Home.css'; // CSS styling

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const [showAnimation, setShowAnimation] = useState(false); // Track animation display
  const [isReady, setIsReady] = useState(false); // Track when content is ready to be shown
  const [showButtons, setShowButtons] = useState(false); // NEW STATE for button visibility

  // Check if the animation has been shown this session
  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');
    if (!hasSeenAnimation) {
      setShowAnimation(true); // Show animation if not seen in this session
      sessionStorage.setItem('hasSeenAnimation', 'true'); // Set the flag
    }
    // Once animation check is complete, set content as ready
    setTimeout(() => setIsReady(true), 50); // Minimal delay to avoid flash
  }, []);

  // Prevent rendering until content is ready
  if (!isReady) return null;

  return (
    <div className="home-container">
      {/* Main Content */}
      <div className="content">
        <h1 className={'flicker'}> {/* ADDED 'flicker' CLASS */}
            {showAnimation ? (
                <Typewriter
                    options={{
                        strings: ["Kuang Shen's Cyberpunk World"],
                        autoStart: true,
                        loop: false,
                        delay: 50,
                        deleteSpeed: Number.MAX_SAFE_INTEGER,
                        cursor: '_',
                    }}
                    onInit={(typewriter) => {
                    typewriter
                        .typeString("Kuang Shen's Cyberpunk World")
                        .callFunction(() => setShowButtons(true)) // SHOW BUTTONS AFTER ANIMATION
                        .start();
                    }}
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
                        deleteSpeed: Number.MAX_SAFE_INTEGER,
                        cursor: '',
                    }}
                    onInit={(typewriter) => typewriter.start()}
                />
            ) : (
                "Explore AI, software engineering, and neon dreams."
            )}
        </p>
        
        <div className={`button-container ${showAnimation ? 'fade-in' : 'visible'}`}>
          <button onClick={() => handleClick('/about')}>About Me</button>
          <button onClick={() => handleClick('/projects')}>My Projects</button>
          <button onClick={() => handleClick('/contact')}>Contact</button>
        </div>
      </div>
    </div>
  );
}