<script setup>
import { ref } from 'vue'
</script>

<template>
<footer class="footer">
    <p>&copy; 2021</p>
    <p>Created by: <a href="#">Claudio Bintang Wibowo</a></p>
</footer>
</template>

<style scoped>
.footer{
    background-color: blue;
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    bottom: 0;
    position: fixed;
}
</style>