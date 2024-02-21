<template>
    <div data-aos="fade-up" class="card group text-center">
        <img :src="project.image" alt="product thumb" class="thumb group-hover:scale-105 transition-all">
        <p class="font-bold text-gray-500 m-3 truncate">{{ project.title }}</p>
        <NuxtLink :to="`/projects/${project.id}`">
            <div class="btn group/btn my-4 flex justify-center items-center">
                <span>View more</span>
                <span class="material-symbols-outlined ml-2 transition-all delay-100 -translate-x-2 group-hover/btn:translate-x-0.5">
                    chevron_right
                </span>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>

const { project } = defineProps(['project'])

</script>

<style scoped>
.thumb {
    height: 120px;
    max-width: 70%;
    object-fit: contain;
    margin: 0 auto;
}
</style>