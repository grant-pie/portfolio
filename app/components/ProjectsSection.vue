<template>
  <section id="projects">
    <div class="container">
      <p class="section-label">03. Projects</p>
      <h2 class="section-title">What I've Built</h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.name" class="project-card">
          <div class="project-header">
            <h3 class="project-name">{{ project.name }}</h3>
            <div class="project-links">
              <a v-if="project.live" :href="project.live" target="_blank" rel="noopener" aria-label="Live site">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener" aria-label="GitHub repo">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <span v-if="!project.live && !project.repo" class="project-coming-soon">Coming soon</span>
            </div>
          </div>
          <p class="project-description">{{ project.description }}</p>
          <ul class="project-tech">
            <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: 'Pipeline',
    description: 'A full-stack job application tracker built to manage the entire job hunt in one place. Log applications, move them through status stages, add notes and links, and keep track of what needs follow-up. Built with a Vue 3 frontend, a NestJS REST API, and a PostgreSQL database — with JWT authentication throughout.',
    tech: ['Vue', 'TypeScript', 'NestJS', 'PostgreSQL'],
    live: 'https://pipeline.grantpieterse.com',
    repo: 'https://github.com/grant-pie/pipeline'
  },
  {
    name: 'PieCade',
    description: 'A collection of classic arcade-style mini games built entirely with vanilla web technologies — no frameworks, no libraries, just pure HTML, CSS and JavaScript. Each game is self-contained and focuses on clean game logic, collision detection, and smooth browser rendering without relying on any external tools.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://grant-pie.github.io/piecade/',
    repo: 'https://github.com/grant-pie/piecade'
  },
  {
    name: 'Ultimate Outlander',
    description: 'A utility site for the Ultima Online Outlands community that generates vendor management scripts directly in the browser. The app uses string manipulation and regular expressions to produce correctly formatted, game-ready script output — no server required.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Regex'],
    live: 'https://ultimateoutlander.com/',
    repo: 'https://github.com/grant-pie/ultimate-outlander'
  },
  {
    name: 'ShowMeAMovie',
    description: 'A movie discovery app that helps you find something to watch. Browse, search and filter films pulled from a live movie database API. Built with Vue and Nuxt for fast page loads and a responsive layout that works cleanly across desktop and mobile.',
    tech: ['Vue', 'Nuxt', 'Bootstrap'],
    live: 'https://grant-pie.github.io/showmeamovie/',
    repo: 'https://github.com/grant-pie/showmeamovie'
  },
  {
    name: 'Southern Cartographer',
    description: 'A portfolio site built for a professional cartographer to showcase their maps and projects. A real-world client project focused on clean presentation, visual storytelling, and letting the work speak for itself. Built with vanilla HTML and CSS with an emphasis on layout, typography and performance.',
    tech: ['HTML', 'CSS'],
    live: 'https://grant-pie.github.io/southern-cartographer/',
    repo: 'https://github.com/grant-pie/southern-cartographer'
  },
]
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.project-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.2s, transform 0.2s;
}

.project-card:hover {
  border-color: var(--accent-border);
  transform: translateY(-4px);
}

.project-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.project-name {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
}

.project-links {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.project-links a {
  color: var(--text-secondary);
  transition: color 0.2s;
  display: flex;
  align-items: center;
}

.project-links a:hover {
  color: var(--accent);
}

.project-coming-soon {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  border: 1px solid var(--border);
  padding: 3px 8px;
  border-radius: 20px;
}

.project-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
  flex: 1;
}

.project-tech {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.project-tech li {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  background: var(--accent-dim);
  border: 1px solid var(--accent-border);
  padding: 3px 10px;
  border-radius: 20px;
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
