<template>
    <div>
        <section>
            <div ref="carouselWrapper">
                <Carousel :value="images" :numVisible="1" :numScroll="1" :showNavigators="false" circular
                    :allowAutoplay="true" :autoplayInterval="4000" :pt="{
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
            </div>
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
                            <div
                                class="border border-[var(--secondary) rounded-full p-2 text-center] w-5 h-5 md:w-10 md:h-10 flex items-center justify-center">
                                <span class="text-primary font-bold text-xs md:text-base">06</span>
                            </div>
                            <div
                                class="border border-[var(--secondary) rounded-full p-2 text-center] w-5 h-5 md:w-10 md:h-10 flex items-center justify-center">
                                <span class="text-primary font-bold text-xs md:text-base">53</span>
                            </div>
                            <div
                                class="border border-[var(--secondary) rounded-full p-2 text-center] w-5 h-5 md:w-10 md:h-10 flex items-center justify-center">
                                <span class="text-primary font-bold text-xs md:text-base">20</span>
                            </div>
                        </div>
                    </div>

                    <Carousel :value="flashSales" :numVisible="6" :numScroll="1"
                        :responsiveOptions="responsiveOptionsFs" :showNavigators="true" :showIndicators="false" circular
                        :allowAutoplay="false" :pt="{
                    container: { class: 'relative' },
                    previousButton: { class: ['absolute', 'top-0', 'right-[2rem]', 'text-white', 'hover:text-secondary',] },
                    nextButton: { class: ['absolute', 'top-0', 'right-0', 'text-white', 'hover:text-secondary',] },
                    itemsContainer: { class: ['mt-[4rem]', 'md:mt-[6rem]'] },
                }">

                        <template #item="slotProps">
                            <ProductCardWithoutColor :product="slotProps.data" />
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
        <section>
            <div data-aos="fade-out" class="mt-4">
                <img src="/assets/img/banner-2.png" alt="" class="w-full h-auto object-cover">
            </div>
            <div data-aos="fade-out" class="mt-4">
                <img src="/assets/img/banner.png" alt="" class="w-full h-auto object-cover">
            </div>
        </section>
        <section>
            <div class="container">
                <div class="">
                    <h2 class="font-bold uppercase">Sản PHẨM YÊU THÍCH</h2>
                    <div class="mt-4 gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <div v-for="p in products" :key="p.id">
                            <ProductCardWithColor :product="p" />
                        </div>
                    </div>
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


const products = ref([
    {
        id: '1',
        src: 'https://product.hstatic.net/1000341902/product/dsc03538_3d31eec3a9ea45e48da1dc87d45efe67_large.jpg',
        src02: 'https://product.hstatic.net/1000341902/product/dsc03530_fa690731aa0e4fccb9c773e93833fb5e_1024x1024.jpg',
        sale_price: '4.500.000 Đ',
        price: '5.200.000 Đ',
        title: 'Áo liền quần nữ Thắt lưng Tương phản Mesh Chia tôn vóc dáng.',
        size: [
            { name: 'S', 'so_luong': 120 },
            { name: 'M', 'so_luong': 0 },
            { name: 'L', 'so_luong': 140 }
        ],
        variants: [
            {
                id: 'var_01_1',
                colorText: 'Đỏ',
                colorCode: '#a52a22',
                size: [
                    { name: 'S', 'so_luong': 100 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 100 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/dsc03538_3d31eec3a9ea45e48da1dc87d45efe67_large.jpg',
                }
            },
            {
                id: 'var_01_2',
                colorText: 'Vàng phối',
                colorCode: '#f8f5aa',
                size: [
                    { name: 'S', 'so_luong': 0 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 40 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/dsc03575_18f6905c65244268b3235260fae03739.jpg',
                }
            },
            {
                id: 'var_01_3',
                colorText: 'Xanh phối',
                colorCode: '#225c48',
                size: [
                    { name: 'S', 'so_luong': 10 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 0 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/z5013768690355_aaec6c3baf7986b234a2e0115a19bfd6_34371c2d8ff74d52a856523770b2f3c9.jpg',
                }
            },

        ]
    },
    {
        id: '2',
        src: 'https://product.hstatic.net/1000341902/product/dsc03538_3d31eec3a9ea45e48da1dc87d45efe67_large.jpg',
        src02: 'https://product.hstatic.net/1000341902/product/dsc03530_fa690731aa0e4fccb9c773e93833fb5e_1024x1024.jpg',
        sale_price: '4.500.000 Đ',
        price: '5.200.000 Đ',
        title: 'Áo liền quần nữ Thắt lưng Tương phản Mesh Chia tôn vóc dáng.',
        size: [
            { name: 'S', 'so_luong': 120 },
            { name: 'M', 'so_luong': 0 },
            { name: 'L', 'so_luong': 140 }
        ],
        variants: [
            {
                id: 'var_02_1',
                colorText: 'Đỏ',
                colorCode: '#a52a22',
                size: [
                    { name: 'S', 'so_luong': 100 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 100 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/dsc03538_3d31eec3a9ea45e48da1dc87d45efe67_large.jpg',
                }
            },
            {
                id: 'var_02_2',
                colorText: 'Vàng phối',
                colorCode: '#f8f5aa',
                size: [
                    { name: 'S', 'so_luong': 0 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 40 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/dsc03575_18f6905c65244268b3235260fae03739.jpg',
                }
            },
            {
                id: 'var_02_3',
                colorText: 'Xanh phối',
                colorCode: '#225c48',
                size: [
                    { name: 'S', 'so_luong': 10 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 0 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/z5013768690355_aaec6c3baf7986b234a2e0115a19bfd6_34371c2d8ff74d52a856523770b2f3c9.jpg',
                }
            },

        ]
    },
    {
        id: '3',
        src: 'https://product.hstatic.net/1000341902/product/dsc03538_3d31eec3a9ea45e48da1dc87d45efe67_large.jpg',
        src02: 'https://product.hstatic.net/1000341902/product/dsc03530_fa690731aa0e4fccb9c773e93833fb5e_1024x1024.jpg',
        sale_price: '4.500.000 Đ',
        price: '5.200.000 Đ',
        title: 'Áo liền quần nữ Thắt lưng Tương phản Mesh Chia tôn vóc dáng.',
        size: [
            { name: 'S', 'so_luong': 120 },
            { name: 'M', 'so_luong': 0 },
            { name: 'L', 'so_luong': 140 }
        ],
        variants: [
            {
                id: 'var_03_1',
                colorText: 'Đỏ',
                colorCode: '#a52a22',
                size: [
                    { name: 'S', 'so_luong': 100 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 100 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/dsc03538_3d31eec3a9ea45e48da1dc87d45efe67_large.jpg',
                }
            },
            {
                id: 'var_03_2',
                colorText: 'Vàng phối',
                colorCode: '#f8f5aa',
                size: [
                    { name: 'S', 'so_luong': 0 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 40 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/dsc03575_18f6905c65244268b3235260fae03739.jpg',
                }
            },
            {
                id: 'var_03_3',
                colorText: 'Xanh phối',
                colorCode: '#225c48',
                size: [
                    { name: 'S', 'so_luong': 10 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 0 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/z5013768690355_aaec6c3baf7986b234a2e0115a19bfd6_34371c2d8ff74d52a856523770b2f3c9.jpg',
                }
            },

        ]
    },
    {
        id: '4',
        src: 'https://product.hstatic.net/1000341902/product/dsc03538_3d31eec3a9ea45e48da1dc87d45efe67_large.jpg',
        src02: 'https://product.hstatic.net/1000341902/product/dsc03530_fa690731aa0e4fccb9c773e93833fb5e_1024x1024.jpg',
        sale_price: '4.500.000 Đ',
        price: '5.200.000 Đ',
        title: 'Áo liền quần nữ Thắt lưng Tương phản Mesh Chia tôn vóc dáng.',
        size: [
            { name: 'S', 'so_luong': 120 },
            { name: 'M', 'so_luong': 0 },
            { name: 'L', 'so_luong': 140 }
        ],
        variants: [
            {
                id: 'var_04_1',
                colorText: 'Đỏ',
                colorCode: '#a52a22',
                size: [
                    { name: 'S', 'so_luong': 100 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 100 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/dsc03538_3d31eec3a9ea45e48da1dc87d45efe67_large.jpg',
                }
            },
            {
                id: 'var_04_2',
                colorText: 'Vàng phối',
                colorCode: '#f8f5aa',
                size: [
                    { name: 'S', 'so_luong': 0 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 40 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/dsc03575_18f6905c65244268b3235260fae03739.jpg',
                }
            },
            {
                id: 'var_04_3',
                colorText: 'Xanh phối',
                colorCode: '#225c48',
                size: [
                    { name: 'S', 'so_luong': 10 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 0 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/z5013768690355_aaec6c3baf7986b234a2e0115a19bfd6_34371c2d8ff74d52a856523770b2f3c9.jpg',
                }
            },

        ]
    },
    {
        id: '5',
        src: 'https://product.hstatic.net/1000341902/product/dsc03538_3d31eec3a9ea45e48da1dc87d45efe67_large.jpg',
        src02: 'https://product.hstatic.net/1000341902/product/dsc03530_fa690731aa0e4fccb9c773e93833fb5e_1024x1024.jpg',
        sale_price: '4.500.000 Đ',
        price: '5.200.000 Đ',
        title: 'Áo liền quần nữ Thắt lưng Tương phản Mesh Chia tôn vóc dáng.',
        size: [
            { name: 'S', 'so_luong': 120 },
            { name: 'M', 'so_luong': 0 },
            { name: 'L', 'so_luong': 140 }
        ],
        variants: [
            {
                id: 'var_05_1',
                colorText: 'Đỏ',
                colorCode: '#a52a22',
                size: [
                    { name: 'S', 'so_luong': 100 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 100 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/dsc03538_3d31eec3a9ea45e48da1dc87d45efe67_large.jpg',
                }
            },
            {
                id: 'var_05_2',
                colorText: 'Vàng phối',
                colorCode: '#f8f5aa',
                size: [
                    { name: 'S', 'so_luong': 0 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 40 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/dsc03575_18f6905c65244268b3235260fae03739.jpg',
                }
            },
            {
                id: 'var_05_3',
                colorText: 'Xanh phối',
                colorCode: '#225c48',
                size: [
                    { name: 'S', 'so_luong': 10 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 0 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/z5013768690355_aaec6c3baf7986b234a2e0115a19bfd6_34371c2d8ff74d52a856523770b2f3c9.jpg',
                }
            },

        ]
    },
    {
        id: '6',
        src: 'https://product.hstatic.net/1000341902/product/dsc03538_3d31eec3a9ea45e48da1dc87d45efe67_large.jpg',
        src02: 'https://product.hstatic.net/1000341902/product/dsc03530_fa690731aa0e4fccb9c773e93833fb5e_1024x1024.jpg',
        sale_price: '4.500.000 Đ',
        price: '5.200.000 Đ',
        title: 'Áo liền quần nữ Thắt lưng Tương phản Mesh Chia tôn vóc dáng.',
        size: [
            { name: 'S', 'so_luong': 120 },
            { name: 'M', 'so_luong': 0 },
            { name: 'L', 'so_luong': 140 }
        ],
        variants: [
            {
                id: 'var_06_1',
                colorText: 'Đỏ',
                colorCode: '#a52a22',
                size: [
                    { name: 'S', 'so_luong': 100 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 100 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/dsc03538_3d31eec3a9ea45e48da1dc87d45efe67_large.jpg',
                }
            },
            {
                id: 'var_06_2',
                colorText: 'Vàng phối',
                colorCode: '#f8f5aa',
                size: [
                    { name: 'S', 'so_luong': 0 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 40 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/dsc03575_18f6905c65244268b3235260fae03739.jpg',
                }
            },
            {
                id: 'var_06_3',
                colorText: 'Xanh phối',
                colorCode: '#225c48',
                size: [
                    { name: 'S', 'so_luong': 10 },
                    { name: 'M', 'so_luong': 0 },
                    { name: 'L', 'so_luong': 0 }
                ],
                image: {
                    src: 'https://product.hstatic.net/1000341902/product/z5013768690355_aaec6c3baf7986b234a2e0115a19bfd6_34371c2d8ff74d52a856523770b2f3c9.jpg',
                }
            },

        ]
    },
]);

</script>

<!-- <style>
/*  */
.p-carousel-indicator.p-highlight button {
    background-color: var(--secondary-color) !important;
}
</style> -->


<style lang="postcss">
.p-carousel {
    touch-action: auto;
}

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