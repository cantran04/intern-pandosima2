<!-- Trong một component Vue -->
<template>
    <h1 >User {{ $route.params.id }}</h1>
    <div class="d-flex flex-wrap justify-content-center justify-content-lg-start">
        <UserItem v-for="(item, index) in users" :item="item" :index="index" :key="item.id" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

let users = ref(null)

onMounted(async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    users.value = response.data
})

</script>



