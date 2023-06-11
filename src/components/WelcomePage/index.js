import React from "react";
import { Link } from "react-router-dom";
import logo from '../Logo_Brand/Chills.svg';
import videoFile from './ChillsVideo.mp4';
import './style.scss';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
     <div>
        <video className="welcome-page-video" src={videoFile} autoPlay loop muted  />
      <h1>Welcome to Chills!</h1>
      <p>Time to relax, discover our amazing services</p>
      </div>
      <div className='welcome-page-LOGO'>
        <img className='welcome-page-logo' src={logo} alt="brand logo" />
      </div>
      <Link to="/services" className="cta-button">Explore</Link>
    </div>
  );
};

export default WelcomePage;
