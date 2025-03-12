<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
const name = "Claudio" //data statis, tidak dapat berubah
const age = ref(true) //data dinamis, dapat berubah, sama seperti state di react
const sidebar = ref(true)
const handleClick = () => {
  age.value = !age.value
  console.log(age.value)
}
const handleSidebar = () => {
  sidebar.value = !sidebar.value
}
</script>

<template>
  <Sidebar />
  <div>
    <h3>App.vue, hello there!</h3>
    <p>my name is {{ name }}</p>
  </div>
  <div>
    <button @click="handleClick">Click</button>
    <p v-if="age">18</p>
    <p v-else>woi tuwa</p>
  </div>
  <button v-if="!sidebar" @click="handleSidebar">=</button>
  <Sidebar v-if="sidebar" :handleSidebar="handleSidebar"/> 
</template>

<style scoped>

</style>