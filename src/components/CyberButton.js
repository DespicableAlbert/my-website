import React from "react";
import { useNavigate } from "react-router-dom";

export default function CyberButton({ to, children }) {
  const navigate = useNavigate();

  const playSound = (file) => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/${file}`);
    audio.volume = 0.3;
    audio.play().catch(err => console.log("Sound play blocked:", err));
  };

  return (
    <button
      onMouseEnter={() => playSound("hover.wav")}
      onClick={() => {
        playSound("click.wav");
        navigate(to);
      }}
    >
      {children}
    </button>
  );
}