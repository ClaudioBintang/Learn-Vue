<script setup>
import { ref } from "vue";
import Cards from "./Cards.vue";
import iconVue from "../assets/vue.svg";
const data = [
  {
    id: 1,
    icon: iconVue,
    title: "Best Services",
    description: "we offer the best services in the southeast asia",
  },
  {
    id: 2,
    icon: iconVue,
    title: "Best Teams",
    description: "Lorem, ipsum dolor  voluptate? yayaya",
  },
  {
    id: 3,
    icon: iconVue,
    title: "Best Design",
    description: "we offer the best services in the southeast asia",
  },
];
</script>

<template>
  <div class="container">
      <h2>Our Reputation</h2>
    <div class="cards">
      <div v-for="item in data">
        <Cards :title="item.title" :icon="item.icon" :description="item.description"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.cards {
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>
