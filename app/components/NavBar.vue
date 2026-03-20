<template>
  <nav class="nav" :class="{ scrolled: isScrolled }">
    <div class="nav-inner container">
      <a href="#hero" class="nav-logo">GP</a>
      <ul class="nav-links">
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#skills" @click="closeMenu">Skills</a></li>
        <li><a href="#projects" @click="closeMenu">Projects</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
      <button class="nav-toggle" @click="toggleMenu" :aria-expanded="menuOpen" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="nav-mobile" :class="{ open: menuOpen }" :aria-hidden="!menuOpen">
      <ul>
        <li><a href="#about" @click="closeMenu" :tabindex="menuOpen ? 0 : -1">About</a></li>
        <li><a href="#skills" @click="closeMenu" :tabindex="menuOpen ? 0 : -1">Skills</a></li>
        <li><a href="#projects" @click="closeMenu" :tabindex="menuOpen ? 0 : -1">Projects</a></li>
        <li><a href="#contact" @click="closeMenu" :tabindex="menuOpen ? 0 : -1">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const isScrolled = ref(false)
const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  transition: background 0.3s, border-bottom 0.3s;
}

.nav.scrolled {
  background: rgba(13, 13, 13, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav-logo {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: 0.05em;
}

.nav-links {
  display: flex;
  gap: 36px;
  list-style: none;
}

.nav-links a {
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: color 0.2s;
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--accent);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  transition: 0.3s;
}

.nav-mobile {
  display: none;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.nav-mobile.open {
  max-height: 300px;
}

.nav-mobile ul {
  list-style: none;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.nav-mobile a {
  font-size: 1rem;
  color: var(--text-secondary);
}

.nav-mobile a:hover {
  color: var(--accent);
}

@media (max-width: 640px) {
  .nav-links {
    display: none;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-mobile {
    display: block;
  }
}
</style>
