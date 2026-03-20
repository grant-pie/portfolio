<template>
  <section id="about">
    <div class="container">
      <p class="section-label">01. About Me</p>
      <h2 class="section-title">Who I Am</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            Building things has always been what drives me — and programming is the best tool I've found for doing that.
            I've been learning and creating on the web for over 10 years, not because I had to, but because I genuinely love it.
            What started as a fascination with how websites worked grew into a deep commitment to understanding
            every layer of the stack, from markup and styling through to application logic and APIs.
          </p>
          <p>
            Front-end development sits right at the intersection of everything I enjoy: the visual craft,
            the logic of solving problems, and the satisfaction of shipping something people actually use.
            I care about the details — clean structure, readable code, and interfaces that feel intuitive
            without drawing attention to themselves.
          </p>
          <p>
            My primary stack is HTML, CSS, JavaScript, TypeScript and Vue, with additional experience in
            Nuxt for static and server-rendered applications. I also have working knowledge of back-end
            technologies including NestJS and PostgreSQL, which gives me a broader understanding of how
            front-end and back-end systems fit together — something I find genuinely useful when building
            full-featured applications.
          </p>
          <p>
            I hold an IT Diploma from Unisa and I'm someone who genuinely enjoys the work. Development
            isn't just a career path for me — it's where I'm most in my element. I'm currently seeking
            a junior front-end developer position where I can contribute to a real product, keep growing,
            and build things that matter.
          </p>
        </div>
        <div class="about-card">
          <div class="about-card-inner">
            <span class="about-card-label">Currently looking for</span>
            <span class="about-card-value">Junior Front-End Developer</span>
            <span class="about-card-label">Based in</span>
            <span class="about-card-value">South Africa</span>
            <span class="about-card-label">Education</span>
            <span class="about-card-value">ICT Diploma, Unisa</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 64px;
  align-items: start;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-text p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.8;
}

.about-card {
  position: sticky;
  top: calc(var(--nav-height) + 24px);
}

.about-card-inner {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 28px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.about-card-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 12px;
}

.about-card-label:first-child {
  margin-top: 0;
}

.about-card-value {
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 500;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-card {
    position: static;
  }
}
</style>
