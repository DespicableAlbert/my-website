// src/components/CyberButton.js
import { useNavigate } from 'react-router-dom';

export default function CyberButton({ to, children, className, onClick }) {
  const navigate = useNavigate();

  const playSound = (file) => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/${file}`);
    audio.volume = 0.3;
    audio.play().catch(() => console.log("Sound play blocked"));
  };

  return (
    <button
      className={className || "cyber-button"}
      onMouseEnter={() => playSound("hover.wav")}
      onClick={(e) => {
        playSound("click.wav");
        if (onClick) onClick(e);
        if (to && to !== "#") navigate(to);
      }}
    >
      {children}
    </button>
  );
}