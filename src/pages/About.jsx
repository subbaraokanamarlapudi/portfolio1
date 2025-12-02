// import React from "react";
// import { Link } from "react-scroll";
// import "../styles/About.css";
// import profilePic from "../assets/profile.jpg";

// const About = () => {
//   return (
//     <section id="about" className="about-section">
//       <h2 className="about-title">About Me</h2>

//       <div className="about-grid">
//         <div className="about-bio">
//           <p>
//             I'm Kanamarlapudi Venkata Subba Rao — a Python + Frontend developer
//             building responsive web apps with React and clean backend services
//             in Python. I enjoy working on AI, Computer Vision and improving UX.
//           </p>

//           <p>
//             I focus on readable, maintainable code and practical engineering —
//             shipping features quickly while keeping quality high.
//           </p>

//           {/* <div className="about-cta">
//             <Link to="projects" smooth={true} duration={500} className="link-btn">
//               See my projects
//             </Link>
//           </div> */}
//         </div>

//         <aside className="about-meta">
//           <div className="profile-card">
//             <img
//               src={profilePic}
//               alt="Kanamarlapudi Venkata Subba Rao"
//               className="profile-img"
//             />
//             <p className="profile-name">Kanamarlapudi Venkata Subba Rao</p>
//             {/* <p className="profile-role">Python • Frontend • AI</p> */}
//           </div>

//           <div className="meta-block">
//             <h3>Skills</h3>
//             <ul>
//               <li>React, HTML, CSS , Javascript</li>
//               <li>Python, Django</li>
//               <li>Computer Vision (OpenCV, PyTorch)</li>
//               <li>SQL</li>
//             </ul>
//           </div>

//           {/* <div className="meta-block">
//             <h3>Contact</h3>
//             <p>Email: <a href="mailto:kv.subba.rao521@gmail.com">kv.subba.rao521@gmail.com</a></p>
//             <p>Location: Remote / India</p>
//           </div> */}
//         </aside>
//       </div>
//     </section>
//   );
// };

// export default About;






import React from "react";
import "../styles/About.css";
import profilePic from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>

      <div className="about-grid">
        <div className="about-left">
          <p>
            Hello, I'm Kanamarlapudi Venkata Subba Rao - a passionate and dedicated Computer Science graduate with good experience in Python. 
            I have worked on some projects in web development, all of which are available on my GitHub.
          </p>

          <p>
            I enjoy writing clean code and crafting simple, effective solutions that make the user experience seamless.
            Currently learning frontend development with React applications to build dynamic and responsive web apps.
          </p>

          <p>
            I'm always excited to take on new challenges and collaborate with others to create innovative solutions.
            I’m eager to continue learning and exploring the areas of machine learning and AI.
          </p>

          <div className="skills-section">
            <h3>Skills</h3>
            <ul>
              <li>HTML, CSS, JavaScript, ReactJS</li>
              <li>Python, Django</li>
              <li>Computer Vision (OpenCV, PyTorch)</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>

        <aside className="about-right">
          <div className="profile-card">
            <img
              src={profilePic}
              alt="Kanamarlapudi Venkata Subba Rao"
              className="profile-img"
            />
            {/* <p className="profile-name">Kanamarlapudi Venkata Subba Rao</p> */}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
