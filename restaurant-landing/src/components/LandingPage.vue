<template>
  <header class="site-header">
    <nav class="container nav">
      <h1 class="logo">MenuGPT</h1>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-content">
      <SparklesIcon class="hero-icon" />
      <h2 class="hero-title">Generate your restaurant landing page with AI</h2>
      <p class="hero-description">{{ description }}</p>
      <a class="cta-button" href="#contact">Get Early Access</a>
    </div>
  </section>

  <section id="features" class="features">
    <div class="feature">
      <LightBulbIcon class="feature-icon" />
      <h3>AI Insights</h3>
      <p>Highlight your menu's star dishes with AI-driven descriptions.</p>
    </div>
    <div class="feature">
      <DevicePhoneMobileIcon class="feature-icon" />
      <h3>Mobile Friendly</h3>
      <p>Your landing page looks great on any device.</p>
    </div>
    <div class="feature">
      <SparklesIcon class="feature-icon" />
      <h3>Instant Setup</h3>
      <p>Upload your menu and go live in minutes.</p>
    </div>
  </section>

  <section id="contact" class="contact-form">
    <h2>Join the Beta</h2>
    <form @submit.prevent="submitForm">
      <input type="email" v-model="email" placeholder="Your email" required />
      <button type="submit">Sign Up</button>
    </form>
    <p v-if="submitted">Thanks for signing up!</p>
  </section>

  <footer class="site-footer">
    <p>&copy; {{ currentYear }} MenuGPT</p>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import {
  SparklesIcon,
  LightBulbIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/vue/24/solid";
import { analyzeMenu } from "../services/openai";

const description = ref("");
const email = ref("");
const submitted = ref(false);
const currentYear = new Date().getFullYear();

analyzeMenu("/menu.json").then((resp) => {
  description.value = resp.description;
});

function submitForm() {
  submitted.value = true;
  // placeholder for submission logic
}
</script>

<style scoped>
.site-header {
  background: #1f2937; /* gray-800 */
  color: white;
  padding: 1rem 0;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1rem;
}

.hero-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
  color: #2563eb; /* blue-600 */
}

.hero-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.hero-description {
  max-width: 600px;
  margin: 0 auto 1.5rem;
  font-size: 1.125rem;
}

.cta-button {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: #2563eb;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}

.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 3rem 1rem;
  background: #f9fafb;
}

.feature {
  max-width: 260px;
  text-align: center;
}

.feature-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 0.5rem;
  color: #2563eb;
}

.contact-form {
  padding: 3rem 1rem;
  text-align: center;
}

.contact-form form {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.contact-form input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  width: 240px;
}

.contact-form button {
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.site-footer {
  background: #1f2937;
  color: white;
  text-align: center;
  padding: 1rem;
}

@media (min-width: 640px) {
  .hero {
    min-height: 60vh;
  }
  .hero-title {
    font-size: 2.5rem;
  }
}
</style>
