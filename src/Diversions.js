// src/Diversions.js
import BackButton from './components/BackButton';
import './Diversions.css';

export default function Diversions() {
  return (
    <div className="diversions-container">
      <h1 className="flicker">Neon Diversions</h1>
      <p className="intro">
        Pulsing lights, offbeat paths — this is how I recharge.
      </p>

      <div className="diversion-list">
        <div className="cyber-glow diversion-card">
          <h2>Karate</h2>
          <p>Discipline of body and code — sharpening reflexes like compiling an optimized build.</p>
        </div>

        <div className="cyber-glow diversion-card">
          <h2>Basketball</h2>
          <p>Street courts under flickering lights — fast breaks, tight teamwork, neon adrenaline.</p>
        </div>

        <div className="cyber-glow diversion-card">
          <h2>Saxophone</h2>
          <p>Breathing life into brass — analog soul echoing through a digital skyline.</p>
        </div>

        <div className="cyber-glow diversion-card">
          <h2>Music</h2>
          <p>Synthwave, jazz, or lo-fi loops — soundtracks to hacking sessions and midnight wanderings.</p>
        </div>
      </div>

      <BackButton />
    </div>
  );
}