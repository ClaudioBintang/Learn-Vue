<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { onMounted, ref } from 'vue'
const data = ref([]) //useState
const todos = ref([]) //useState
const fetchData = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const result = await response.json();
    console.log("data", result.data);
    data.value = result.data
  } catch (error) {
    console.log(error);
  }
}
const fetchtype = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await response.json()
    console.log("data", result);
    data.value = result.todos
  } catch (error) {
    console.log(error);
  }
}
onMounted(() => {
  fetchData()
  fetchtype()
}
) //useEffect in Vue

//updating use (watch) 
//routing, detail user (meet 4)
//post rewuest login auth authorizaytion 
//composable & state management 
</script>

<template>
    <h1 class="text-center text-4xl text-blue-500">test api</h1>
    <div>
    <p v-for="item in data">{{ item.first_name }}</p>
    <p v-for="item in data">{{ item.email }}</p>
    </div>

    <h1>Test API ke-2</h1>
    <div>
      <p v-for="item in todos">{{ item.title }}</p>
    </div>
</template>

<style scoped>

</style>
