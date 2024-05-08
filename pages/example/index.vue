<!-- layout.vue | page.vue | component.vue -->

<template>
    <div class="container mx-auto py-20 bg-black">
        <h1 class="title">Exxaaaapleee</h1>
        <TextAnime />
        <div>{{ products }}</div>
    </div>
</template>
  
<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
    $anime({ targets: '.title', translateX: 250, duration: 800 })
})

const client = useMedusaClient();

const { products } = await client.products.list();


</script>
  