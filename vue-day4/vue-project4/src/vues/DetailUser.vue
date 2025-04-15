<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const user = ref({}); 

const id = useRoute().params.id; //routing dari home page ke detail page dengan id

const getUser = async (param) => {
   try {
      const response = await axios.get(`https://reqres.in/api/users/${param}`);
      console.log(response.data);
      user.value = response.data.data;
   } catch (error) {
      console.log(error);
   }
};

onMounted(() => {
   if (id) {
      getUser(id);
   }
});
</script>

<template>
   <div>
      <h1>detail page</h1>
      <p>{{ id }}</p>

      <div>
         <h3>{{ user?.first_name }} {{ user?.last_name }}</h3>
         <p>{{ user?.email }}</p>
      </div>
   </div>
</template>

<style scoped></style>