<template>
    <div>
        <section>
            <Carousel :value="images" :numVisible="1" :numScroll="1" :showNavigators="false" circular :allowAutoplay="true"
                :autoplayInterval="4000" :pt="{
                    content: { class: 'relative' },
                    indicators: { class: ['absolute', 'bottom-4', 'left-2/4', '-translate-x-2/4'] },
                    indicatorButton: { class: ['bg-white', 'w-2', '2xl:w-3', 'h-2', '2xl:h-3', 'rounded-full'] }
                }">
                <template #item="slotProps">
                    <div class="h-[500px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[800px]">
                        <img :src="slotProps.data.src" alt=""
                            class="h-[500px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[800px] w-full object-cover" />
                    </div>
                </template>
            </Carousel>
        </section>
        <section>
            <div class="container">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-12">
                    <div data-aos="fade-left" class="text-center">
                        <h2 class="font-bold uppercase ">KHUYẾN MÃI 10%</h2>
                        <h3 class="uppercase ">CHO Đơn HÀNG TỪ 500.000Đ</h3>
                    </div>
                    <div class="flex justify-center">
                        <NuxtLink to="/" class="flex items-center justify-center w-3/5 lg:w-2/5 2xl:w-1/3">
                            <img src="/assets/img/Group 34.png" alt="" class="w-full">
                        </NuxtLink>
                    </div>
                    <div data-aos="fade-right" class="text-center">
                        <h2 class="font-bold uppercase ">KHUYẾN MÃI 20%</h2>
                        <h3 class="uppercase ">CHO ĐƠN HÀNG TỪ 1.000.000Đ</h3>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="relative">
                    <h2 class="font-bold uppercase absolute">MUA THEO THỂ LOẠI</h2>
                    <Carousel :value="categories" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions"
                        :showNavigators="true" :showIndicators="false" circular :allowAutoplay="false" :pt="{
                            container: { class: 'relative' },
                            previousButton: { class: ['absolute', 'top-0', 'right-[2rem]', 'hover:text-primary',] },
                            nextButton: { class: ['absolute', 'top-0', 'right-0', 'hover:text-primary',] },
                            itemsContainer: { class: 'mt-[4rem]' },
                        }">
                        <template #item="slotProps">
                            <div data-aos="fade-up" class="mx-4">
                                <NuxtLink to="/" class="group">
                                    <div
                                        class="mx-auto h-[100px] lg:h-[120px] 2xl:h-[140px] w-[100px] lg:w-[120px] 2xl:w-[140px] rounded-full overflow-hidden">
                                        <img :src="slotProps.data.src" alt=""
                                            class="h-full w-full object-cover group-hover:scale-110 transition-all" />
                                    </div>
                                    <h3 class="text-center font-bold mt-4">{{ slotProps.data.name }}</h3>
                                </NuxtLink>
                            </div>
                        </template>
                        <template #previousicon>
                            <span class="material-symbols-outlined text-2xl lg:text-3xl">
                                arrow_left_alt
                            </span>
                        </template>
                        <template #nexticon>
                            <span class="material-symbols-outlined  text-2xl lg:text-3xl">
                                arrow_right_alt
                            </span>
                        </template>
                    </Carousel>
                </div>
                <div class="flex justify-center">
                    <NuxtLink to="/projects">
                        <div class="btn-secondary group/btn mt-6 md:mt-12 flex gap-2 justify-center items-center">
                            <span class="pl-2 group-hover/btn:text-white">Xem tất cả</span>
                            <span
                                class="material-symbols-outlined transition-all -translate-x-2 group-hover/btn:translate-x-0.5 group-hover/btn:text-white">
                                chevron_right
                            </span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="bg-primary">
            <div class="container ">
                <div class="relative">
                    <div class=" absolute px-2 py-1 md:px-8 md:py-2 rounded-full flex items-center gap-2 bg-white">
                        <h2 class="font-bold uppercase text-base md:text-xl lg:text-3xl">FLASH SALE</h2>
                        <div class="grid grid-cols-3 gap-2">
                            <div class="border border-[var(--secondary) rounded-full p-2 text-center] w-5 h-5 md:w-10 md:h-10 flex items-center justify-center">
                                <span class="text-primary font-bold text-xs md:text-base">06</span>
                            </div>
                            <div class="border border-[var(--secondary) rounded-full p-2 text-center] w-5 h-5 md:w-10 md:h-10 flex items-center justify-center">
                                <span class="text-primary font-bold text-xs md:text-base">53</span>
                            </div>
                            <div class="border border-[var(--secondary) rounded-full p-2 text-center] w-5 h-5 md:w-10 md:h-10 flex items-center justify-center">
                                <span class="text-primary font-bold text-xs md:text-base">20</span>
                            </div>
                        </div>
                    </div>
                    
                    <Carousel :value="flashSales" :numVisible="6" :numScroll="1" :responsiveOptions="responsiveOptionsFs"
                        :showNavigators="true" :showIndicators="false" circular :allowAutoplay="false" :pt="{
                            container: { class: 'relative' },
                            previousButton: { class: ['absolute', 'top-0', 'right-[2rem]', 'text-white', 'hover:text-secondary',] },
                            nextButton: { class: ['absolute', 'top-0', 'right-0', 'text-white', 'hover:text-secondary',] },
                            itemsContainer: { class: ['mt-[4rem]', 'md:mt-[6rem]'] },
                        }">
                        <template #item="slotProps">
                            <div data-aos="fade-up" class="mx-2">
                                <NuxtLink to="/" class="group">
                                    <div class="relative">
                                        <div class="h-[212px] sm:h-[256px] lg:h-[302px] relative">
                                            <img :src="slotProps.data.src02" alt="" class="opacity-1 group-hover:opacity-1 transition-all duration-300 w-full h-full object-cover absolute">
                                            <img :src="slotProps.data.src" alt="" class="group-hover:opacity-0 transition-all duration-300 w-full h-full object-cover absolute">
                                            
                                        </div>
                                        <div class="p-2 bg-white">
                                            <h3 class="font-bold mb-1 text-primary">{{ slotProps.data.sale_price }}</h3>
                                            <p class="line-through text-sm">{{ slotProps.data.price }}</p>
                                        </div>
                                        <div class="absolute top-2 left-2 rounded p-1 md:py-1 md:px-3 bg-[#B44726] text-white font-bold text-[10px] sm:text-xs md:text-sm">
                                            <span>-25%</span>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                        </template>
                        <template #previousicon>
                            <span class="material-symbols-outlined text-2xl lg:text-3xl">
                                arrow_left_alt
                            </span>
                        </template>
                        <template #nexticon>
                            <span class="material-symbols-outlined  text-2xl lg:text-3xl">
                                arrow_right_alt
                            </span>
                        </template>
                    </Carousel>
                </div>
                <div class="flex justify-center">
                    <NuxtLink to="/projects">
                        <div class="btn-primary group/btn mt-6 md:mt-12 flex gap-2 justify-center items-center">
                            <span class="pl-2 group-hover/btn:text-secondary">Xem tất cả</span>
                            <span
                                class="material-symbols-outlined transition-all -translate-x-2 group-hover/btn:translate-x-0.5 group-hover/btn:text-secondary">
                                chevron_right
                            </span>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const images = ref([
    {
        src: '/_nuxt/assets/img/banner.png',
        alt: ''
    },
    {
        src: '/_nuxt/assets/img/banner.png',
        alt: ''
    },
    {
        src: '/_nuxt/assets/img/banner.png',
        alt: ''
    },
    {
        src: '/_nuxt/assets/img/banner.png',
        alt: ''
    },
    {
        src: '/_nuxt/assets/img/banner.png',
        alt: ''
    }
]);

const categories = ref([
    {
        id: '',
        src: '/_nuxt/assets/img/Group 10.png',
        name: 'Đồ tắm'
    },
    {
        id: '',
        src: '/_nuxt/assets/img/banner.png',
        name: 'Váy, đầm'
    },
    {
        id: '',
        src: '/_nuxt/assets/img/banner.png',
        name: 'Áo croptop'
    },
    {
        id: '',
        src: '/_nuxt/assets/img/Group 10.png',
        name: 'Quần'
    },
    {
        id: '',
        src: '/_nuxt/assets/img/Group 10.png',
        name: 'Áo sơ mi'
    }
])

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 2,
        numScroll: 1
    }

]);

const flashSales = ref([
    {
        id: '',
        src: '/_nuxt/assets/img/3.png',
        src02: '/_nuxt/assets/img/2.png',
        sale_price: '4.500.000 Đ',
        price: '5.200.000 Đ'
    },
    {
        id: '',
        src: '/_nuxt/assets/img/2.png',
        src02: '/_nuxt/assets/img/7.png',
        sale_price: '4.500.000 Đ',
        price: '5.200.000 Đ'
    },
    {
        id: '',
        src: '/_nuxt/assets/img/4.png',
        src02: '/_nuxt/assets/img/2.png',
        sale_price: '4.500.000 Đ',
        price: '5.200.000 Đ'
    },
    {
        id: '',
        src: '/_nuxt/assets/img/5.png',
        src02: '/_nuxt/assets/img/3.png',
        sale_price: '4.500.000 Đ',
        price: '5.200.000 Đ'
    },
    {
        id: '',
        src: '/_nuxt/assets/img/6.png',
        src02: '/_nuxt/assets/img/7.png',
        sale_price: '4.500.000 Đ',
        price: '5.200.000 Đ'
    },
    {
        id: '',
        src: '/_nuxt/assets/img/2.png',
        src02: '/_nuxt/assets/img/7.png',
        sale_price: '4.500.000 Đ',
        price: '5.200.000 Đ'
    },
])

const responsiveOptionsFs = ref([
    {
        breakpoint: '1400px',
        numVisible: 6,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 2,
        numScroll: 1
    }

]);
</script>

<!-- <style>
/*  */
.p-carousel-indicator.p-highlight button {
    background-color: var(--secondary-color) !important;
}
</style> -->


<style lang="postcss">
.p-carousel-indicator {

    &.p-highlight {
        button {
            background-color: var(--secondary-color) !important;

            &:hover {
                background-color: var(--primary-color) !important;
            }
        }
    }

    button {
        &:hover {
            background-color: var(--primary-color) !important;
        }
    }

}
</style>