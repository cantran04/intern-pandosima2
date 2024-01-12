<template>
    <div class="card m-1 border-0 shadow-sm p-3 mb-5 bg-body-tertiary rounded" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.website }}</p>
            <button @click="" class="btn btn-primary">See company</button>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        item: Object,
        index: Number
    })
</script>