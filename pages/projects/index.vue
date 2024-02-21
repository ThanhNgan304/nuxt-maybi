<template>
    <div>
        <h2 class="font-bold text-4xl my-10 text-center">All Projects</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div v-for="(p, index) in products" :key="index" :data-index="index">
                <ProjectCard :project="p" />
            </div>
        </div>

    </div>
</template>

<script setup>
// definePageMeta({
//     // layout: 'projects'
// })

const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Maskcodex | Projects'
})

const { $anime } = useNuxtApp()

onMounted(() => {
//   $anime({
//   targets: '.grid .card',
//   translateY: [250, 0],
//   duration: 800,
//   loop: false,
//   delay: function(el, i) { return i * 200; },
//   easing: 'easeInOutSine'
// });
})
</script>

<style scoped></style>