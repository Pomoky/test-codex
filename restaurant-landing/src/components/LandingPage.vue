<template>
  <section class="hero">
    <div class="hero-content">
      <SparklesIcon class="hero-icon" />
      <h1 class="hero-title">{{ restaurantName }}</h1>
      <p class="hero-description">{{ description }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { SparklesIcon } from '@heroicons/vue/24/solid';
import { analyzeMenu } from '../services/openai';

const restaurantName = 'Mon Restaurant';
const description = ref('');

analyzeMenu('/menu.json').then(resp => {
  description.value = resp.description;
});
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.hero-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
  color: #2563eb; /* blue-600 */
}

.hero-title {
  font-size: 2.5rem;
  margin: 0.5rem 0;
}

.hero-description {
  max-width: 600px;
  font-size: 1.125rem;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .hero {
    min-height: 80vh;
  }
  .hero-title {
    font-size: 3rem;
  }
}
</style>
