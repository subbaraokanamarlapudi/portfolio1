import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, featuring a responsive layout and smooth navigation.",
    tech: ["React", "CSS", "React Router"],
    github: "https://github.com/your-username/portfolio",
    // demo: '/',
    demo: null,
  },
  {
    id: 2,
    title: "GitHub User Finder",
    description:
      "A web application that allows users to search GitHub profiles by username and view their detailed information.",
    tech: ["ReactJS", "GitHub API"],
    github: "https://github.com/subbaraokanamarlapudi/github-user-finder",
    demo: null,
  },
  {
    id: 3,
    title: "QR Code Generator",
    description:
      "A React-based QR Code generator that lets users create QR codes for text, URLs, and other basic information.",
    tech: ["ReactJS", "qrcode.react", "api.qrserver"],
    github: "https://github.com/subbaraokanamarlapudi/Generating-QR",
    demo: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.id} className="project-card">
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>

                <ul className="project-tech">
                  {p.tech.map((t) => (
                    <li key={t} className="tech-item">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} GitHub`}
                    className="icon-link"
                    title="GitHub"
                  >
                    <FaGithub size={22} />
                  </a>
                )}

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} Live demo`}
                    className="icon-link"
                    title="Live demo"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3h-7zM5 5h6V3H3v8h2V5zm0 14v-6H3v8h8v-2H5z" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
