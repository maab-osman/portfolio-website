interface Project {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  link?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    id: 'Project 01',
    title: 'Personal Trainer',
    desc: 'A React application for managing customers and training sessions. It integrates with a REST API to handle client data, searchable workout logs, and scheduling.',
    tags: ['Typescript', 'React', 'Vite'],
    link: 'https://maab-osman.github.io/Personal-Trainer/',
    repo: 'https://github.com/maab-osman/Personal-Trainer'
  },
  {
    id: 'Project 02',
    title: 'Quizzer',
    desc: 'A full-stack quiz platform with a Spring Boot backend and React frontend. It includes authentication, REST APIs, and PostgreSQL persistence, all containerized with Docker.',
    tags: ['Typescript', 'React', 'Java', 'Spring Boot','PostgreSQL', 'Docker'],
    link: 'https://quizzer-778l.onrender.com/quizzes',
    repo: 'https://github.com/Project-Quiz-Masters/Quizzer'
    
  },
  {
    id: 'Project 03',
    title: 'Security Writeups',
    desc: 'A collection of security challenge writeups and system analysis exercises from information security courses, including debugging, reverse engineering, and vulnerability analysis.',
    tags: ['CLI', 'VirtualBox', 'Ghidra', 'LLDB'],
    
    repo: 'https://github.com/maab-osman/Application-Hacking-And-Vulnerabilities'
  },
  {
    id: 'Project 04',
    title: 'Fragrance Tracker',
    desc: 'A Spring Boot backend for tracking and rating fragrances. It includes authentication with Spring Security and persistent storage using MySQL and JPA.',
    tags: ['Java', 'APIs', 'SpringBoot', 'MySQL', 'Docker'],
    link: 'https://fragrance-tracker-78km.onrender.com/',
    repo: 'https://github.com/maab-osman/fragrance-tracker'
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrapper">
        <p className="section-title">Projects</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card fade-in">
              <div className="card-body">
                <div className="project-id">{project.id}</div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.desc}</p>
              </div>
              <div className="card-footer">
                <div className="card-footer-top">
                  <div className="stack-label">Stack</div>
                  <div className="stack-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer-actions">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-repo"
                      aria-label="GitHub repository"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
