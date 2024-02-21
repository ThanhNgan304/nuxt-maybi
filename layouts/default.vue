<template>
    <div>
        <header 
        class="w-screen shadow-sm bg-white fixed top-0" >
            <nav class="container mx-auto flex justify-between items-center p-4 bg-white">
                <NuxtLink class="font-bold" to="/">Demo</NuxtLink>
                <ul class="flex items-center gap-3">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/example">Example</NuxtLink></li>
                    <li><NuxtLink to="/projects"><p class="btn">Projects</p></NuxtLink></li>
                </ul>
            </nav>
        </header>

        <ThePreloader />
        <!-- output the page content -->
        <div class="">
            <NuxtPage />
        </div>
        
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color:aqua;
}

header {
    z-index: 999;
}
</style>