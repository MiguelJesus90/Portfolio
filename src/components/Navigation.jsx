import './Navigation.css';

export default function Navigation() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navigation glass">
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="logo-text">MJ</span>
                </div>

                <ul className="nav-links">
                    <li>
                        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                            Sobre mí
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                            Habilidades
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
