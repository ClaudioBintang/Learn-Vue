<script setup>
import { ref } from 'vue'
import img from '../assets/Random Symboles 3.png'
import thebox from '../assets/TheBox.png'

</script>

<template>
  <nav class="navbar">
  <img :src="img" alt="Symboles" />
    <ul class="nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Services</a></li> 
      <li><a href="#">Contact Us</a></li>
    </ul>
  </nav>
</template>

<style scoped> 
.navbar{
  background-color: #ffff;
  color: white;
  padding: 5px;
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.nav {
 display: flex;
 justify-content: center;
 gap: 20px; 
} 
.nav a {
  text-decoration: none;
  color: black;
}
</style>