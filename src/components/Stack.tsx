const groups = [
  { label: 'Cloud & Infra',  items: ['AWS', 'EC2', 'VPC', 'Linux', 'Bash', 'CLI', 'Networking', 'IAM'] },
  { label: 'Backend',        items: ['Node.js', 'Java', 'Python', 'REST APIs', 'MongoDB', 'PostgreSQL'] },
  { label: 'Frontend',       items: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'] },
  { label: 'Tools',          items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'] },
];

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrapper">
        <p className="section-title">Tech Stack</p>
        <div className="stack-rows">
          {groups.map((group) => (
            <div key={group.label} className="stack-row fade-in">
              <span className="stack-row-label">{group.label}</span>
              <div className="stack-chips">
                {group.items.map((item) => (
                  <span key={item} className="stack-chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
