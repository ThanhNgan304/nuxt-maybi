<!-- layout.vue | page.vue | component.vue -->

<template>
    <div>
        <h1 class="title">Exxaaaapleee</h1>
    </div>
</template>
  
<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
    $anime({ targets: '.title', translateX: 250, duration: 800 })
})
</script>
  