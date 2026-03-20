<template>
  <section id="hero" class="hero">
    <div class="container">
      <h1 class="hero-name">Hi, I'm Grant Pieterse.</h1>
      <h2 class="hero-title">Turning ideas into interfaces.</h2>
      <p class="hero-description">
        I'm a front-end developer who loves building things for the web.
        I specialise in Vue, TypeScript and creating clean, responsive interfaces
        that people enjoy using.
      </p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">My Work</a>
        <a href="#contact" class="btn btn-secondary">Contact Me</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  padding-top: var(--nav-height);
}

.hero .container {
  width: 100%;
}

.hero-name {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.1;
  margin-bottom: 8px;
}

.hero-title {
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--text-secondary);
  line-height: 1.2;
  margin-bottom: 24px;
}

.hero-description {
  max-width: 520px;
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 13px 28px;
  width: 160px;
  text-align: center;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: all 0.2s;
  cursor: pointer;
}

.btn-primary {
  background: var(--accent);
  color: #0d0d0d;
}

.btn-primary:hover {
  background: transparent;
  color: var(--accent);
  outline: 1px solid var(--accent);
}

.btn-secondary {
  background: transparent;
  color: var(--accent);
  outline: 1px solid var(--accent);
}

.btn-secondary:hover {
  background: var(--accent-dim);
}
</style>
