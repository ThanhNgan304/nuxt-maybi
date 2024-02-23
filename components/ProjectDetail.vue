<template>
    <div>
        <div class="card">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="p-7">
                    <img :src="project.image" alt="product img" class="mx-auto my-7 max-w-full">
                </div>
                <div class="animate-content p-7 text-[var(--secondary-color)]">
                    <h2 class="text-4xl my-7">{{ project.title }}</h2>
                    <p class="text-xl my-7">Price - ${{ project.price }}</p>
                    <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
                    <p class="mb-7">{{ project.description }}</p>
                    <button class="btn flex">
                        <span class="material-symbols-outlined mr-2">
                            favorite
                        </span>
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="h-48"></div>
        <div class="flex justify-center items-center">
            <div data-aos="fade-left"
            data-aos-anchor-placement="bottom-bottom"
                class="w-80 h-80 rounded-full bg-[#b41256] flex justify-center items-center">
                <span class="text-3xl font-bold">fade-left</span>
            </div>
        </div>
        <div class="h-48"></div>
        <div class="flex justify-center items-center">
            <div data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
                class="w-80 h-80 rounded-full bg-[#b41256] flex justify-center items-center">
                <span class="text-3xl font-bold">fade-right</span>
            </div>
        </div>

        <Knob v-model="value" :min="-50" :max="10" />

    </div>
</template>

<script setup lang="ts">

const { project } = defineProps(['project'])

const { $anime } = useNuxtApp()

onMounted(() => {
    $anime({
        targets: '.animate-content > *',
        translateX: [250, 0],
        duration: 400,
        delay: function (el, i) { return i * 100; },
        easing: 'easeInOutSine'
    });
})

const value = ref(10);

</script>

<style scoped>
</style>
