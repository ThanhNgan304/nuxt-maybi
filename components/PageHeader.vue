<template>
    <div>
        <header class=" bg-[#F6EBDC] ">
            <nav class="container mx-auto flex justify-between items-center pt-4 pb-0">
                <NuxtLink to="/">
                    <img src="/assets/img/logo.svg" alt="logo" class="w-[100px] md:w-[120px] 2xl:w-[160px]">
                </NuxtLink>
                <div class="flex items-center sm:d-none mx-6" @click="toggleSidebarMenu">
                    <span class="material-symbols-outlined text-xl cursor-pointer">
                        menu
                    </span>
                </div>
                <div class="flex items-center">
                    <ul class="flex items-center gap-2 sm:gap-4 lg:gap-8 mr-2 sm:mr-4 text-black text-[15px]">
                        <li>
                            <label @click="toggleSearchForm">
                                <div class="hover:text-[var(--primary-color)] flex gap-1 items-center">
                                    <span class="d-none sm:inline">Tìm kiếm</span>
                                    <span class="material-symbols-outlined text-xl sm:text-2xl">
                                        search
                                    </span>
                                </div>
                            </label>
                        </li>
                        <li class="h-">
                            <NuxtLink to="/cart" class="hover:text-[var(--primary-color)] flex gap-1 items-center">
                                <span class="d-none sm:inline">Giỏ hàng</span>
                                <span class="material-symbols-outlined text-xl sm:text-2xl">
                                    local_mall
                                </span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/account" class="hover:text-[var(--primary-color)] flex gap-1 items-center">
                                <span class="d-none sm:inline">Tài khoản</span>
                                <span class="material-symbols-outlined text-xl sm:text-2xl">
                                    account_circle
                                </span>
                            </NuxtLink>
                        </li>
                    </ul>

                    <ul class="flex items-center gap-2 sm:gap-4 text-black text-[15px]">
                        <li>
                            <NuxtLink to="/account"
                                class="hover:text-[var(--primary-color)] flex items-center border-l border-black pl-2 sm:pl-4">
                                <span class="material-symbols-outlined text-xl sm:text-2xl">
                                    globe_uk
                                </span>
                            </NuxtLink>
                        </li>
                        <li>
                            <a href="tel:+084" class="hover:text-[var(--primary-color)] flex items-center">
                                <span class="material-symbols-outlined text-xl sm:text-2xl">
                                    headset_mic
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav class="container mx-auto py-4">
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

        <div class="fixed top-0 z-20" :class="showSearchForm ? 'w-full h-full' : 'w-0 h-0'">
            <div class="relative w-full h-full">
                <div class="absolute w-full h-full bg-black transition-all"
                    :class="showSearchForm ? 'opacity-50' : 'opacity-0'" @click="toggleSearchForm"></div>
                <div class="absolute w-full bg-white transition-all"
                    :class="showSearchForm ? 'translate-y-0' : '-translate-y-full '">
                    <nav class="container mx-auto flex justify-between items-center py-12">
                        <NuxtLink to="/" class="d-none sm:block">
                            <img src="/assets/img/logo.svg" alt="logo" class="w-[100px] md:w-[120px] 2xl:w-[160px]">
                        </NuxtLink>
                        <div class="flex items-center w-full sm:mx-8 md:mx-16 xl:mx-32 2xl:mx-48">
                            <IconField iconPosition="right" class="w-full flex items-center gap-1 rounded-full
                            bg-white border-[1px] border-[##A1A1A1] py-[5px] px-3">
                                <InputText v-model="value1" placeholder="Tìm kiếm"
                                    class="bg-transparent w-full placeholder-black font-ibm border-transparent outline-none shadow-none" />

                                <InputIcon>
                                    <span class="material-symbols-outlined">
                                        search
                                    </span>
                                </InputIcon>
                            </IconField>
                        </div>
                        <div class="flex items-center flex-shrink-0">
                            <ul class="flex items-center gap-4 lg:gap-8 text-black text-[15px]">
                                <li class="d-none sm:block">
                                    <NuxtLink to="/cart" class="hover:text-[var(--primary-color)] flex gap-1 items-center">
                                        <span class="d-none sm:inline">Giỏ hàng</span>
                                        <span class="material-symbols-outlined">
                                            local_mall
                                        </span>
                                    </NuxtLink>
                                </li>
                                <li class="d-none sm:block">
                                    <NuxtLink to="/account"
                                        class="hover:text-[var(--primary-color)] flex gap-1 items-center">
                                        <span class="d-none sm:inline">Tài khoản</span>
                                        <span class="material-symbols-outlined">
                                            account_circle
                                        </span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>

        </div>

        <div class="sidebar-menu fixed top-0 z-40" :class="showSidebarMenu ? 'w-full h-full' : 'w-0 h-0'">
            <div class="relative w-full h-full">
                <div class="absolute w-full h-full bg-black transition-all "
                    :class="showSidebarMenu ? 'opacity-50' : 'opacity-0'" @click="toggleSidebarMenu"></div>
                <div class="absolute right-0 w-4/5 h-full bg-white transition-all"
                    :class="showSidebarMenu ? 'translate-x-0 ' : 'translate-x-[120%] '">
                    <div :class="showSidebarMenu ? '' : 'd-none'">
                        <nav class="p-4">
                            <div class="flex justify-end" @click="toggleSidebarMenu">
                                <span class="material-symbols-outlined text-3xl cursor-pointer">
                                    close
                                </span>
                            </div>
                            <ul class="w-full flex flex-col justify-start items-center gap-6 mt-8 text-black text-3xl font-bold">
                                <li>
                                    <NuxtLink to="/" class="hover:text-[var(--primary-color)]" @click="toggleSidebarMenu">Services</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/projects" class="hover:text-[var(--primary-color)]" @click="toggleSidebarMenu">Projects</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/example" class="hover:text-[var(--primary-color)]" @click="toggleSidebarMenu">Blogs</NuxtLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>

const showSearchForm = ref(false)

const toggleSearchForm = () => {

    showSearchForm.value = !showSearchForm.value
}

const showSidebarMenu = ref(false)

const toggleSidebarMenu = () => {

    showSidebarMenu.value = !showSidebarMenu.value
    console.log(showSidebarMenu.value)
}
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