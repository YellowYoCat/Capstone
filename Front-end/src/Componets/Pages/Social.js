import React from 'react';
import Navbar from './Nav/Navbar';
import './Social.css'; // Import the CSS file

const Social = () => {
  return (
    <div>
      <Navbar />
      <div className="social-container">
        <h1 className="social-title">SOCIALS</h1>
        <div className="phone">
          <div className="icons">
          <a href="https://www.twitch.tv/ihavetofrog" target="_blank" rel="noopener noreferrer">
              <img src="twitch.png" alt="Twitch" className="icon" />
            </a>
            <a href="https://www.youtube.com/@NinjaFrog777" target="_blank" rel="noopener noreferrer">
              <img src="YT.png" alt="YouTube" className="icon" />
            </a>
            <a href="https://x.com/nocontextfrogs" target="_blank" rel="noopener noreferrer">
              <img src="TT.png" alt="TikTok" className="icon" />
            </a>
            <a href="https://x.com/nocontextfrogs" target="_blank" rel="noopener noreferrer">
              <img src="x.png" alt="X" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
