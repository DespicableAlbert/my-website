// src/components/BackButton.js
import { useNavigate } from 'react-router-dom';
import './BackButton.css'; // Import CSS for styling

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate('/')}>
      Back to Home
    </button>
  );
}