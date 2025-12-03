import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    id: 1,
    company: "Timing Technologies",
    role: "Technical Support",
    period: "June-2025 — Present",
    details: "Deliver comprehensive technical support to internal teams and clients by diagnosing and resolving software, hardware, and network-related issues through both remote tools (AnyDesk/TeamViewer) and on-site assistance. Work closely with field teams during live events to troubleshoot real-time technical issues, while executing SQL queries to update, validate, and manage backend candidate/client data efficiently.",
    tech: ["SQL", "troubleshoot", "network-related"],
  },
  {
    id: 2,
    company: "Naresh IT",
    role: "Training",
    period: "July 2024 — March 2025",
    details: "Completed intensive training in Python Full Stack Development, covering Python , Django, ReactJS, SQL and Web Development. Worked with SQL databases (MySQL/PostgreSQL) to design schemas, write optimized queries, and manage relational data. Learned to deploy projects on platforms like Vercel and Netlify.Collaborated in team-based mini-projects, practicing Git, GitHub workflows, version control and writing clean.",
    tech: ["Python", "SQL", "Django", "ReactJS" , "HTML , CSS , JS"],
  },
  {
    id: 3,
    company: "Quantum Wave IT Solutions",
    role: "Frontend Developer Intern",
    period: "December 2023 — March 2024",
    details: " Developed and implemented user interfaces for a Saloon CRM as a Front-End Developer at Quantum Wave IT Solutions. Utilized ReactJS to build responsive and engaging web applications. Contributed to the project’s success by ensuring high-quality code and adhering to best practices. Gained valuable experience in front-end development within a professional setting.",
    tech: ["ReactJS", "NodeJS", "ExpressJS", "Appwrite" , ],
  },
  {
    id: 4,
    company: "Parul University",
    role: 'Computer Vision',
    period: "September 2022 — December 2022",
    details: " Developed expertise in computer vision through a certification course. Successfully completed projects focused on face and nose detection, leveraging computer vision techniques to achieve accurate results. Demonstrated strong analytical and problem-solving skills within the field of computer vision. Eager to apply  these skills to contribute to innovative projects.",
    tech: ["OpenCV", "Python", "Computer Vision"],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-inner">
        <h2 className="experience-title">Experience</h2>

        <div className="experience-list">
          {experiences.map((exp) => (
            <article key={exp.id} className="experience-card">
            <p className="exp-company">{exp.company}</p>
              <header className="exp-header">
                <h3 className="exp-role">{exp.role}</h3>
                <span className="exp-period">{exp.period}</span>
              </header>

              
              <p className="exp-details">{exp.details}</p>

              <ul className="exp-tech">
                {exp.tech.map((t) => (
                  <li key={t} className="exp-tech-item">{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;