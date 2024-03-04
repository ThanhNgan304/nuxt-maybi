<template>
    <div data-aos="fade-up">
        <div class="">
            <div class="">
                <div class="group h-[212px] sm:h-[256px] lg:h-[302px] relative" :title="product.title">
                    <img :src="product.src02" alt=""
                        class="opacity-1 group-hover:opacity-1 transition-all duration-300 w-full h-full object-cover absolute">
                    <img :src="product.src" alt=""
                        class="group-hover:opacity-0 transition-all duration-300 w-full h-full object-cover absolute">
                    <div class="variants-img absolute w-full h-full">
                        <img :src="dataImg" :class="showVariantImg ? 'opacity-100 block' : 'opacty-0 d-none'"
                            class="transition-all duration-300 w-full h-full object-cover absolute">
                    </div>
                    <div
                        class="actions absolute translate-y-full invisible transition-all group-hover:translate-y-0 group-hover:visible bottom-[5px] left-1/2 -translate-x-1/2 ">
                        <div class="flex items-center rounded">
                            <button
                                class="group/btnViewMore relative bg-white border-r flex items-center px-3 py-1 rounded-l hover:bg-secondary">
                                <span class="material-symbols-outlined group-hover/btnViewMore:text-white text-lg">
                                    shopping_cart
                                </span>
                                <div class="tooltip absolute bottom-full -translate-x-1/2 left-1/2 invisible transition-all
                                                group-hover/btnViewMore:visible group-hover/btnViewMore:bottom-[calc(100%+5px)]
                                                w-max bg-secondary text-white text-xs md:text-sm px-2 py-1 rounded">
                                    <span>Tùy chọn</span>
                                </div>
                            </button>
                            <button @click="showDialog = true"
                                class="group/btnShowPopup relative bg-white flex items-center px-3 py-1 rounded-r hover:bg-secondary">
                                <span class="material-symbols-outlined group-hover/btnShowPopup:text-white text-lg">
                                    visibility
                                </span>
                                <div class="tooltip absolute bottom-full -translate-x-1/2 left-1/2 invisible transition-all
                                                group-hover/btnShowPopup:visible group-hover/btnShowPopup:bottom-[calc(100%+5px)]
                                                w-max bg-secondary text-white text-xs md:text-sm px-2 py-1 rounded">
                                    <span>Xem nhanh</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="p-2">
                    <div class="flex gap-1 flex-col md:flex-row md:items-center">
                        <p class="font-bold text-primary">{{ product.sale_price }}</p>
                        <p class="line-through text-sm">{{ product.price }}</p>
                    </div>
                    <div class="flex gap-2 my-2">
                        <div v-for="v in product.variants" :key="v.id" :data-img="v.image.src"
                            @click="changeVariantImage(v.image.src)" @mouseover="changeVariantImage(v.image.src)"
                            @mouseleave="resetVariantImage()" :style="`background-color: ${v.colorCode}`"
                            class="group/color w-4 h-4 md:w-5 md:h-5 rounded-full transition-all relative -outline-offset-4 hover:border-solid hover:border-[1px] hover:border-[var(--secondary)] hover:outline hover:outline-3 hover:outline-white">
                            <div class="tooltip absolute bottom-full -translate-x-1/2 left-1/2 invisible transition-all delay-300
                                                group-hover/color:visible group-hover/color:bottom-[calc(125%+5px)]
                                                w-max bg-secondary text-white text-xs md:text-sm px-2 py-1 rounded">
                                <span>{{ v.colorText }}</span>
                            </div>
                        </div>
                    </div>
                    <a href="/">
                        <p class="line-clamp-2">{{ product.title }}</p>
                    </a>
                </div>
                <div
                    class="absolute top-2 left-2 rounded p-1 md:py-1 md:px-3 bg-[#B44726] text-white font-bold text-[10px] sm:text-xs md:text-sm">
                    <span>-25%</span>
                </div>
            </div>
        </div>
        <Dialog :visible="showDialog" modal :style="{ width: '70%' }">
            <div class="grid grid-cols-2 gap-4">
                <div></div>
                <div>
                    <h3 class="font-bold text-[#2f80ed] mb-2">{{ product.title }}</h3>
                    <p class="">Thương hiệu: Maybi | Mã sản phẩm: {{ product.id }}</p>
                    <p class="font-bold mt-2">Màu sắc:</p>
                    <div class="flex gap-2 my-2">
                        <div v-for="v in product.variants" :key="v.id" :data-img="v.image.src"
                            @click="changeVariantImage(v.image.src)" @mouseover="changeVariantImage(v.image.src)"
                            @mouseleave="resetVariantImage()"
                            :style="{ background: `url(${v.image.src}) center no-repeat`, backgroundSize: 'cover' }"
                            class="group/color w-4 h-4 md:w-8 md:h-8 rounded-full transition-all relative -outline-offset-4 hover:border-solid hover:border-[1px] hover:border-[var(--secondary)] hover:outline hover:outline-3 hover:outline-white">
                            <div class="tooltip absolute bottom-full -translate-x-1/2 left-1/2 invisible transition-all delay-300
                                                group-hover/color:visible group-hover/color:bottom-[calc(125%+5px)]
                                                w-max bg-secondary text-white text-xs md:text-sm px-2 py-1 rounded">
                                <span>{{ v.colorText }}</span>
                            </div>
                        </div>
                    </div>
                    <p class="font-bold mt-3">Kích thước:</p>
                    <div class="flex gap-2 my-2">
                        <div v-for="size in product.size" class="rounded border px-2 py-1 cursor-pointer"
                            :class="selectedSize === size.name ? 'border-black' : ''"
                            @click="{ selectedSize = size.name; console.log(selectedSize) }">
                            <span>{{ size.name }}</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="quantity-num flex items-center">
                            <InputNumber v-model="quantity" showButtons buttonLayout="horizontal" class="rounded border"
                                :min="1" :max="10">
                                <template #incrementbuttonicon>
                                    <span class="material-symbols-outlined p-2">
                                        add
                                    </span>
                                </template>
                                <template #decrementbuttonicon>
                                    <span class="material-symbols-outlined p-2">
                                        remove
                                    </span>
                                </template>
                            </InputNumber>
                        </div>
                        <button class="btn-secondary hover:text-white">
                            Thêm vào giỏ
                        </button>
                    </div>
                </div>
            </div>
            <template #footer>
                <Button label="Cancel" text severity="secondary" @click="showDialog = false" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup>

const { product } = defineProps(['product'])

const dataImg = ref('')

const showVariantImg = ref(false)

const changeVariantImage = (val) => {
    dataImg.value = val
    showVariantImg.value = true
}

const resetVariantImage = () => {
    dataImg.value = ''
    showVariantImg.value = false
}

const showDialog = ref(false)

const selectedSize = ref('S')

const quantity = ref(1)

</script>

<style lang="postcss">
.tooltip::before {
    content: " ";
    position: absolute;
    top: 100%;
    /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--secondary-color) transparent transparent transparent;
}

.quantity-num {
    input {
        width: 5rem;
        text-align: center;
        border-left: solid 1px #cccc;
        border-right: solid 1px #cccc;
    }
}
</style>