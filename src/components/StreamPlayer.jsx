import React, { useState, useEffect, Suspense, lazy } from "react";
import ReactHowler from "react-howler";
import { pictures, musicOne } from "../assets/music1";
import { musicTwo } from "../assets/music2";
import { musicThree } from "../assets/music3";

const StreamPlayer = () => {
  const [play, setPlay] = useState(true); // Set initial state to true
  const [muted, setMuted] = useState(true); // New state for muting/unmuting
  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [array, setArray] = useState([]);
  const image = muted ? pictures.playing : pictures.pausing; // Update image based on muted state
  const music = [ ...musicTwo, ...musicThree, ...musicOne];

  const toggleAudio = () => {
    setMuted((prevMuted) => !prevMuted); // Toggle muted state
  };

  const handleEnd = () => {
    // Play the next song randomly when the current one ends
    const randomIndex = Math.floor(Math.random() * music.length);
    const choices = [0, 1, 2];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];

    if (array.length === 10) {
      setIndex(randomChoice);
      setCurrentIndex(randomChoice);
      setArray([]);
    } else {
      const updatedList = [...array, randomIndex];
      setIndex(randomIndex);
      setCurrentIndex(randomIndex);
      setArray(updatedList);
    }
  };

  const song = music[currentIndex] ? music[currentIndex].title : "";

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * music.length);
    setIndex(randomIndex);
    setCurrentIndex(randomIndex);
  }, []);

  return (
    <div className="home">
      <div className="streamPlayer-container">
        <div className="player-controls">
          <div className="player">
            <ReactHowler
              key={index}
              src={music[currentIndex]?.url}
              playing={play}
              loop={true} // Set loop to true to continue playing after it finishes
              mute={muted} // Set mute state
              html5={true}
              preload={true}
              onEnd={handleEnd} // Call handleEnd when the current song ends
            />
            <img
              id="pp-img"
              onClick={toggleAudio}
              src={image}
              alt="Mute/Unmute"
            />
          </div>
          <div className="card">
            <h3 className="title">{song}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamPlayer;
