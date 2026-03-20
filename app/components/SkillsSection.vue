<template>
  <section id="skills">
    <div class="container">
      <p class="section-label">02. Skills</p>
      <h2 class="section-title">What I Work With</h2>
      <p class="skills-intro">My core focus is front-end development — building responsive, accessible interfaces with modern web technologies. I also have practical back-end experience which helps me collaborate across the full stack and understand the bigger picture of how applications are built and deployed.</p>
      <div class="skills-grid">
        <div class="skill-group">
          <h3 class="skill-group-title">Front-End</h3>
          <ul class="skill-list">
            <li v-for="skill in frontEnd" :key="skill" class="skill-item">
              <span class="skill-dot"></span>{{ skill }}
            </li>
          </ul>
        </div>
        <div class="skill-group">
          <h3 class="skill-group-title">Back-End <span class="skill-group-note">(familiar)</span></h3>
          <ul class="skill-list">
            <li v-for="skill in backEnd" :key="skill" class="skill-item">
              <span class="skill-dot"></span>{{ skill }}
            </li>
          </ul>
        </div>
        <div class="skill-group">
          <h3 class="skill-group-title">Tools</h3>
          <ul class="skill-list">
            <li v-for="skill in tools" :key="skill" class="skill-item">
              <span class="skill-dot"></span>{{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const frontEnd = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Nuxt']
const backEnd = ['NestJS', 'SQL', 'PostgreSQL']
const tools = ['Git', 'VS Code', 'AI-assisted development (Claude Code)']
</script>

<style scoped>
.skills-intro {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.8;
  max-width: 680px;
  margin-bottom: 40px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.skill-group {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 28px;
}

.skill-group-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 20px;
  font-family: var(--font-mono);
}

.skill-group-note {
  color: var(--text-muted);
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  font-size: 0.8rem;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.skill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
