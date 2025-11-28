import './Skills.css';

export default function Skills() {
    const skills = [
        {
            category: 'Frontend',
            items: [
                { name: 'HTML5', icon: '🌐', level: 90 },
                { name: 'CSS3', icon: '🎨', level: 85 },
                { name: 'JavaScript', icon: '⚡', level: 85 },
                { name: 'React', icon: '⚛️', level: 70 },
            ]
        },
        {
            category: 'Backend',
            items: [
                { name: 'PHP', icon: '🐘', level: 85 },
                { name: 'Java', icon: '☕', level: 80 },
                { name: 'MySQL', icon: '🗄️', level: 80 },
            ]
        },
        {
            category: 'Herramientas',
            items: [
                { name: 'Git', icon: '📦', level: 85 },
                { name: 'Vite', icon: '⚡', level: 75 },
                { name: 'GitHub', icon: '🐙', level: 85 },
            ]
        }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">Habilidades</h2>
                <p className="section-subtitle">
                    Tecnologías y herramientas con las que trabajo día a día
                </p>

                <div className="skills-grid">
                    {skills.map((category) => (
                        <div key={category.category} className="skill-category glass-card">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-list">
                                {category.items.map((skill) => (
                                    <div key={skill.name} className="skill-item">
                                        <div className="skill-header">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
