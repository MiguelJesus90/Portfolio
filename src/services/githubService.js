const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USERNAME = 'MiguelJesus90';

/**
 * Obtiene los repositorios públicos del usuario de GitHub
 * @returns {Promise<Array>} Lista de repositorios
 */
export async function fetchUserRepositories() {
    try {
        const response = await fetch(
            `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos = await response.json();

        // Filtrar y ordenar repositorios
        return repos
            .filter(repo => !repo.fork) // Excluir forks
            .sort((a, b) => b.stargazers_count - a.stargazers_count) // Ordenar por estrellas
            .map(repo => ({
                id: repo.id,
                name: repo.name,
                description: repo.description || 'Sin descripción',
                html_url: repo.html_url,
                homepage: repo.homepage,
                language: repo.language,
                stargazers_count: repo.stargazers_count,
                forks_count: repo.forks_count,
                topics: repo.topics || [],
                created_at: repo.created_at,
                updated_at: repo.updated_at,
            }));
    } catch (error) {
        console.error('Error fetching repositories:', error);
        throw error;
    }
}

/**
 * Obtiene los lenguajes utilizados en un repositorio
 * @param {string} repoName - Nombre del repositorio
 * @returns {Promise<Object>} Objeto con lenguajes y sus bytes
 */
export async function fetchRepositoryLanguages(repoName) {
    try {
        const response = await fetch(
            `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/languages`
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching repository languages:', error);
        return {};
    }
}

/**
 * Obtiene información del usuario de GitHub
 * @returns {Promise<Object>} Información del usuario
 */
export async function fetchUserInfo() {
    try {
        const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const user = await response.json();

        return {
            name: user.name,
            bio: user.bio,
            avatar_url: user.avatar_url,
            html_url: user.html_url,
            public_repos: user.public_repos,
            followers: user.followers,
            following: user.following,
        };
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }
}
