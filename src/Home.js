import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect'; // Import Typewriter.js
import './Home.css'; // CSS styling

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      {/* Main Content */}
      <div className="content">
        <h1 className="caption">
          <Typewriter
            options={{
              strings: ["Kuang Shen's Cyberpunk World"],
              autoStart: true,
              loop: false, // Ensure it types only once
              delay: 50,
              deleteSpeed: Number.MAX_SAFE_INTEGER,
              cursor: '_', // No cursor at the end
            }}
          />
        </h1>

        <p className="sub-caption">
          <Typewriter
            options={{
              strings: ["Explore AI, software engineering, and neon dreams."],
              autoStart: true,
              loop: false,
              delay: 50,
              startDelay: 2500, // Delay so it starts after the first text finishes typing
              deleteSpeed: Number.MAX_SAFE_INTEGER,
              cursor: '',
            }}
          />
        </p>
        
        <div className="button-container">
          <button onClick={() => handleClick('/about')}>About Me</button>
          <button onClick={() => handleClick('/projects')}>My Projects</button>
          <button onClick={() => handleClick('/contact')}>Contact</button>
        </div>
      </div>
    </div>
  );
}