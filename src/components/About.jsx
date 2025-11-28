import { useEffect, useState } from 'react';
import { fetchUserInfo } from '../services/githubService';
import './About.css';

export default function About() {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUserInfo() {
            try {
                const info = await fetchUserInfo();
                setUserInfo(info);
            } catch (error) {
                console.error('Error loading user info:', error);
            } finally {
                setLoading(false);
            }
        }

        loadUserInfo();
    }, []);

    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">Sobre mí</h2>

                <div className="about-content">
                    <div className="about-image">
                        {loading ? (
                            <div className="avatar-skeleton glass-card"></div>
                        ) : (
                            <img
                                src={userInfo?.avatar_url}
                                alt="Miguel Jesús"
                                className="avatar glass-card"
                            />
                        )}
                    </div>

                    <div className="about-text">
                        <div className="glass-card">
                            <h3>Desarrollador Full Stack</h3>
                            <p>
                                Soy un desarrollador apasionado por la tecnología y la creación de soluciones web.
                                Mi experiencia abarca desde el desarrollo backend con <strong>PHP</strong> y <strong>Java</strong>,
                                hasta el frontend moderno con <strong>JavaScript</strong>, <strong>HTML</strong> y <strong>CSS</strong>.
                            </p>
                            <p>
                                Actualmente estoy expandiendo mis habilidades en el ecosistema de <strong>React</strong> y
                                otras tecnologías modernas. Me encanta aprender cosas nuevas y enfrentar desafíos que me
                                permitan crecer como desarrollador.
                            </p>
                            <p>
                                Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos
                                de código abierto y compartir conocimiento con la comunidad.
                            </p>

                            {!loading && userInfo && (
                                <div className="github-stats">
                                    <div className="stat">
                                        <span className="stat-number">{userInfo.public_repos}</span>
                                        <span className="stat-label">Repositorios</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-number">{userInfo.followers}</span>
                                        <span className="stat-label">Seguidores</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-number">{userInfo.following}</span>
                                        <span className="stat-label">Siguiendo</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
