interface LogEntry {
  status: 'active' | 'ongoing';
  topic: string;
  note: string;
}

const log: LogEntry[] = [
  {
    status: 'active',
    topic: 'Cloud Operations',
    note: 'Monitoring, scaling, and managing resources in cloud environments to ensure high availability.',
  },
  {
    status: 'active',
    topic: 'Systems Design',
    note: 'Designing scalable, resilient architectures and understanding the trade-offs between components.',
  },
  {
    status: 'active',
    topic: 'Software Automation Testing',
    note: 'Implementing automated test suites to maintain code quality and accelerate the development lifecycle.',
  },
  {
    status: 'ongoing',
    topic: 'CI/CD Pipelines',
    note: 'Automating the path from code to production—integrating, testing, and deploying with zero friction.',
  },
];

export default function Learning() {
  return (
    <section id="learning">
      <div className="wrapper">
        <div className="learning-header">
          <p className="section-title" style={{ marginBottom: 0 }}>Currently Learning</p>
          <span className="learning-meta">Updated March 2026</span>
        </div>
        <p className="learning-note">Documenting the systems I'm currently exploring and experimenting with.</p>
        <div className="log-entries">
          {log.map((entry, i) => (
            <div key={i} className="log-entry fade-in">
              <span className={`log-status log-status--${entry.status}`}>
                {entry.status}
              </span>
              <div className="log-body">
                <span className="log-topic">{entry.topic}</span>
                <span className="log-note">{entry.note}</span>
              </div>
              <span className="log-index">{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
