import React from "react";
import { Link } from "react-scroll";
import '../styles/Home.css';

const Home = () => {
  return (
    <div id="home" className="home-section">
      <p className="home-intro">Hi, my name is</p>

      <h1 className="home-title">Kanamarlapudi Venkata Subba Rao</h1>

      <p className="home-description">
        I am a dedicated Python and Frontend developer with good experience in building web applications using React. 
        I’m passionate about AI, Computer Vision, and creating efficient Python-based solutions.
      </p>

      <div>
        <Link to="projects" smooth={true} duration={500} className="group">
          <button className="home-btn">View My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
