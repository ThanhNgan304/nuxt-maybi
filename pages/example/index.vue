<!-- layout.vue | page.vue | component.vue -->

<template>
    <div class="container mx-auto py-20">
        <h1 class="title">Exxaaaapleee</h1>
        <TextAnime />
    </div>
</template>
  
<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
    $anime({ targets: '.title', translateX: 250, duration: 800 })
})
</script>
  