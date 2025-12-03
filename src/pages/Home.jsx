import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const offset = 72;  
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
      return;
    }

    
    navigate("/projects");
  };

  return (
    <div id="home" className="home-section">
      <p className="home-intro">Hi, my name is</p>

      <h1 className="home-title">Kanamarlapudi Venkata Subba Rao</h1>

      <p className="home-description">
        I am a dedicated Python and Frontend developer with good experience in building web applications using React. 
        I’m passionate about AI, Computer Vision, and creating efficient Python-based solutions.
      </p>

      <div>
        <button onClick={handleViewProjects} className="home-btn">View My Work</button>
      </div>
    </div>
  );
};

export default Home;
