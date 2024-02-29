<template>
    <div data-aos="fade-up" class="mx-2">
        <NuxtLink to="/" class="group">
            <div class="relative">
                <div class="h-[212px] sm:h-[256px] lg:h-[302px] relative">
                    <img :src="product.src02" alt=""
                        class="opacity-1 group-hover:opacity-1 transition-all duration-300 w-full h-full object-cover absolute">
                    <img :src="product.src" alt=""
                        class="group-hover:opacity-0 transition-all duration-300 w-full h-full object-cover absolute">

                </div>
                <div class="p-2 bg-white">
                    <p class="font-bold mb-1 text-primary">{{ product.sale_price }}</p>
                    <p class="line-through text-sm">{{ product.price }}</p>
                </div>
                <div
                    class="absolute top-2 left-2 rounded p-1 md:py-1 md:px-3 bg-[#B44726] text-white font-bold text-[10px] sm:text-xs md:text-sm">
                    <span>-25%</span>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">

const { product } = defineProps(['product'])

</script>

<style scoped></style>