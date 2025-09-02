// src/Layout.js
import { Outlet } from 'react-router-dom';
import MusicButton from './components/MusicButton';

// Import all .mp3 files from /public/bgm manually
const audioFiles = [
  `${process.env.PUBLIC_URL}/bgm/bgm1.mp3`,
  `${process.env.PUBLIC_URL}/bgm/bgm2.mp3`,
  `${process.env.PUBLIC_URL}/bgm/bgm3.mp3`,
  `${process.env.PUBLIC_URL}/bgm/bgm4.mp3`,
  `${process.env.PUBLIC_URL}/bgm/bgm5.mp3`,
];

export default function Layout() {
  console.log("Layout component rendered");

  return (
    <div className="layout-container">
      {/* Pass the list of mp3 files to MusicButton */}
      <MusicButton audioList={audioFiles} />
      
      {/* Nested routes */}
      <Outlet />
    </div>
  );
}