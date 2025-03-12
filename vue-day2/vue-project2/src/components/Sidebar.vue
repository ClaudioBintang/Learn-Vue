<script setup>
import { ref } from 'vue'
defineProps({
    handleSidebar: {
        type: Function,
    }
})
</script>

<template>
<button @click="handleSidebar">x</button>
  <div>
    <p> sidebar </p>
    <p> menu </p>
    <p> Contact </p>
  </div>

</template>
<style scoped>

</style>