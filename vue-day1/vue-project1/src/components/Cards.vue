<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
});
</script>

<template>
  <div class="card">
    <img :src="icon" alt="icon" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.card {
  background-color: #ffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  margin: 10px;
}
</style>
