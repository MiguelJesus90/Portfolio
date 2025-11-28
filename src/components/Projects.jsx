import { useEffect, useState } from 'react';
import { fetchUserRepositories } from '../services/githubService';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState('all');

    useEffect(() => {
        async function loadProjects() {
            try {
                const repos = await fetchUserRepositories();
                setProjects(repos);
                setFilteredProjects(repos);
            } catch (err) {
                setError('Error al cargar los proyectos. Por favor, intenta de nuevo más tarde.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        loadProjects();
    }, []);

    useEffect(() => {
        if (selectedLanguage === 'all') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(p => p.language === selectedLanguage));
        }
    }, [selectedLanguage, projects]);

    const languages = ['all', ...new Set(projects.map(p => p.language).filter(Boolean))];

    if (loading) {
        return (
            <section id="projects" className="projects section">
                <div className="container">
                    <h2 className="section-title">Mis Proyectos</h2>
                    <div className="loading">
                        <div className="spinner"></div>
                        <p>Cargando proyectos desde GitHub...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="projects" className="projects section">
                <div className="container">
                    <h2 className="section-title">Mis Proyectos</h2>
                    <div className="error glass-card">
                        <p>{error}</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">Mis Proyectos</h2>
                <p className="section-subtitle">
                    Explora mis proyectos más recientes en GitHub. Desde aplicaciones web hasta herramientas útiles.
                </p>

                <div className="filter-bar">
                    <span className="filter-label">Filtrar por:</span>
                    <div className="filter-buttons">
                        {languages.map((lang) => (
                            <button
                                key={lang}
                                className={`filter-btn ${selectedLanguage === lang ? 'active' : ''}`}
                                onClick={() => setSelectedLanguage(lang)}
                            >
                                {lang === 'all' ? 'Todos' : lang}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredProjects.length === 0 ? (
                    <div className="no-projects glass-card">
                        <p>No se encontraron proyectos con este filtro.</p>
                    </div>
                ) : (
                    <div className="projects-grid grid grid-3">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
