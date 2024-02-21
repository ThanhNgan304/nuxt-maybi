<template>
    <div>
        <header class="container mx-auto p-4">
            <nav>
                <NuxtLink class="font-bold" to="/projects">Projects </NuxtLink>
                <NuxtLink class="font-bold" to="/projects/asdd">Projects abc</NuxtLink>
            </nav>
        </header>

        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <NuxtPage />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/projects">Projects</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/projects/fdsjff">Projects detail</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<style scoped>.router-link-exact-active,
.router-link-active {
    color: aqua;
}</style>