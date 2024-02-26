<template>
    <div>
        <header class=" bg-[#F6EBDC] ">
            <nav class="container mx-auto flex justify-between items-center p-4 pb-0">
                <NuxtLink to="/">
                    <img src="/assets/img/logo.svg" alt="logo" class="w-[100px] md:w-[120px] 2xl:w-[160px]">
                </NuxtLink>
                <div class="flex items-center">
                    <ul class="flex items-center gap-4 lg:gap-8 mr-4 text-black text-[15px]">
                        <li>
                            <IconField iconPosition="right"
                                class="group flex items-center gap-1 rounded-full transition-all duration-500
                            hover:bg-white hover:border-[1px] hover:border-[##A1A1A1] hover:py-2 hover:px-3 hover:rounded-full">
                                <InputText v-model="value1" placeholder="Tìm kiếm" class="bg-transparent  w-16 placeholder-black font-ibm border-transparent outline-none shadow-none transition-all duration-500
                                focus:w-48 focus:outline-none group-hover:w-48" />

                                <InputIcon>
                                    <span class="material-symbols-outlined h-">
                                        search
                                    </span>
                                </InputIcon>
                            </IconField>
                        </li>
                        <li class="h-">
                            <NuxtLink to="/cart" class="hover:text-[var(--primary-color)] flex gap-1 items-center">
                                <span class="d-none sm:inline">Giỏ hàng</span>
                                <span class="material-symbols-outlined">
                                    local_mall
                                </span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/account" class="hover:text-[var(--primary-color)] flex gap-1 items-center">
                                <span class="d-none sm:inline">Tài khoản</span>
                                <span class="material-symbols-outlined">
                                    account_circle
                                </span>
                            </NuxtLink>
                        </li>
                    </ul>
                    <ul class="flex items-center gap-4 text-black text-[15px]">
                        <li>
                            <NuxtLink to="/account"
                                class="hover:text-[var(--primary-color)] flex items-center border-l border-black pl-4">
                                <span class="material-symbols-outlined">
                                    globe_uk
                                </span>
                            </NuxtLink>
                        </li>
                        <li>
                            <a href="tel:+084" class="hover:text-[var(--primary-color)] flex items-center">
                                <span class="material-symbols-outlined">
                                    headset_mic
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <nav class="container mx-auto p-4">
                <ul class="w-full flex justify-between items-center gap-3 mr-4 text-black font-bold">
                    <li>
                        <NuxtLink to="/" class="hover:text-[var(--primary-color)]">Services</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/projects" class="hover:text-[var(--primary-color)]">Projects</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/example" class="hover:text-[var(--primary-color)]">Blogs</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color: var(--primary-color);
    font-weight: 500;
}

header {
    z-index: 999;
}
</style>