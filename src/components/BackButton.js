// src/components/BackButton.js
import CyberButton from './CyberButton';
import './BackButton.css'

export default function BackButton() {
  return (
    <CyberButton className="cyber-button back-button" to="/">
      Back to Home
    </CyberButton>
  );
}