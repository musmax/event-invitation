import React, { useRef, useState } from 'react';
import '../styles/header.css';

const Body = () => {
  const videoRef = useRef(null); 

  const [audioToggle, setAudioToggle] = useState(true);
  const [audioVideo, setAudioVideo] = useState(true);

  function pauseVideo() {
      setAudioToggle(!audioToggle);
      if (videoRef.current) {
            videoRef.current.muted = audioToggle;
      }
  }
  function playVideo() {
    setAudioVideo(!audioVideo);
    if (videoRef.current) {
        if (audioVideo) {
            videoRef.current.pause();
        } else {
            videoRef.current.play(); 
        }
    }
}
  return (
    <div className='body-main'>
      <video autoPlay unmute loop id="myVideo" ref={videoRef} width="100%">
        <source src="wiz.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <button id="myBtn" onClick={pauseVideo}> {audioToggle ? 'Remove Audio': 'Add Audio'}</button>
        <button id="myBtn" onClick={playVideo}> {audioVideo ? 'Pause': 'Play'}</button>
      </div>
      <div className="hero-text">
        <h2>Easy Event Management <br /> Solutions for Creators</h2>
        <h3>Set up an event page, invite friends and sell tickets.<br /> Host a memorable event today.</h3>
        <button className='btn'>Create Event</button>
      </div>
    </div>
  );
}

export default Body;
