# Portfolio - Miguel Jesús

Portafolio profesional desarrollado con React + Vite que muestra mis proyectos y habilidades como desarrollador Full Stack.

## ✨ Características

- 🎨 Diseño moderno con efectos glassmorphism
- 🌙 Modo oscuro elegante con gradientes vibrantes
- 📱 Completamente responsive
- 🔄 Integración con GitHub API para mostrar proyectos automáticamente
- ⚡ Animaciones suaves y transiciones
- 🚀 Deployment automático a GitHub Pages

## 🛠️ Tecnologías

- **React 19** - Biblioteca de UI
- **Vite 7** - Build tool y dev server
- **CSS Vanilla** - Estilos personalizados
- **GitHub API** - Integración de proyectos
- **GitHub Actions** - CI/CD

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/MiguelJesus90/Portfolio.git

# Entrar al directorio
cd Portfolio

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## 🚀 Scripts

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Navigation.jsx   # Barra de navegación
│   ├── Hero.jsx        # Sección principal
│   ├── About.jsx       # Sobre mí
│   ├── Projects.jsx    # Proyectos de GitHub
│   ├── Skills.jsx      # Habilidades técnicas
│   └── Contact.jsx     # Contacto y footer
├── services/           # Servicios
│   └── githubService.js # API de GitHub
├── index.css          # Estilos globales
└── App.jsx            # Componente principal
```

## 🎨 Personalización

### Cambiar Usuario de GitHub

Edita `src/services/githubService.js`:

```javascript
const GITHUB_USERNAME = 'TuUsuario';
```

### Modificar Colores

Edita las variables CSS en `src/index.css`:

```css
--color-primary: hsl(250, 84%, 54%);
--color-secondary: hsl(280, 100%, 65%);
--color-accent: hsl(190, 94%, 55%);
```

### Actualizar Información Personal

- **Hero**: `src/components/Hero.jsx`
- **About**: `src/components/About.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Contact**: `src/components/Contact.jsx`

## 🌐 Deployment

El proyecto está configurado para deployment automático en GitHub Pages mediante GitHub Actions.

### Configurar GitHub Pages

1. Ve a **Settings** → **Pages** en tu repositorio
2. En **Source**, selecciona **GitHub Actions**
3. El workflow se ejecutará automáticamente en cada push a `main`

Tu portafolio estará disponible en:
```
https://migueljesus90.github.io/Portfolio/
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Miguel Jesús**

- GitHub: [@MiguelJesus90](https://github.com/MiguelJesus90)

---

Hecho con ❤️ usando React + Vite
