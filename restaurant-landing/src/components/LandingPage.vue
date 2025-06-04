<template>
  <div class="landing-page">
    <h1>{{ restaurantName }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { analyzeMenu } from '../services/openai';

const restaurantName = 'Mon Restaurant';
const description = ref('');

analyzeMenu('/menu.json').then(resp => {
  description.value = resp.description;
});
</script>
