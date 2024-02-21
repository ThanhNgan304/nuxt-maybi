<template>
    <div class="preloader w-screen h-screen flex justify-center fixed z-20 bg-white">
        <div class="preloader-percent text-6xl self-center">
            {{ percentage }}%
        </div>
    </div>
</template>

<script setup>

    const percentage = ref(0)

    onMounted(() => {

        const tl = gsap.timeline()
        
        tl.to(percentage, {
            progress: 100,
            duration: 1,
            onUpdate() {
                percentage.value = Math.floor(percentage.progress)
            },
            onComplete() {
                general.isPreloaderVisible = false
            }
        })

        tl.fromTo('.preloader', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' 
        }, {
            clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
            duration: 1
        })
    })

</script>

<style scoped>

</style>