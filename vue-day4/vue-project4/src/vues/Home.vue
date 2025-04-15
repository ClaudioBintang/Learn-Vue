<script setup>
import { onMounted, ref } from "vue"
import axios from "axios"
import { RouterLink } from "vue-router"

const users = ref([])
const getUsers = async () => {
    try {
        const response = await axios.get("https://reqres.in/api/users?page=1")
        console.log(response.data.data);
        users.value = response.data.data
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getUsers()
})
</script>

<template>
<div>
    <h2>Home Page</h2>
</div>
<div v-for="user in users">
    <h3>{{ user.first_name }} {{ user.last_name }}</h3>
    <RouterLink :to="/detail/ + user.id"><button>Detail</button></RouterLink>
    
</div>
</template>

<style scoped>

</style>