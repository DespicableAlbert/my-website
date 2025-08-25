// src/Layout.js
import { Outlet } from 'react-router-dom';
import MusicButton from './components/MusicButton';

export default function Layout() {
  console.log("Layout component rendered");
  return (
    <div className="layout-container">
      {/* Persistent music button */}
      <MusicButton audioSrc={`${process.env.PUBLIC_URL}/bgm.mp3`} />
      
      {/* Nested routes */}
      <Outlet />
    </div>
  );
}