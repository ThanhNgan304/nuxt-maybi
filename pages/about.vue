<template>
    <div class="p-4">
        <Transition appear name="fade" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <h2 class="font-bold text-6xl mb-7">About</h2>
        </Transition>
        <p >{{ data }}</p>
    </div>
</template>

<script setup>
    // const { data } = await useFetch('/api/ninja?name=mario', {
    //     method: 'post',
    //     body: {
    //         age: 30
    //     }
    // })

    const { data } = await useFetch('/api/currency/GBP')

    const beforeEnter = (el) => {
        console.log('before enter - set initial state')
        el.style.transform = 'translateY(-60px)'
        el.style.opacity = 0
    }

    const enter = (el, done) => {
        console.log('starting to enter - make transition')
        gsap.to(el, {
            duration: 3,
            y: 0,
            opacity: 1,
            ease: 'bounce.out',
           
        })
    }

    const afterEnter = () => {
        console.log('after enter')
    }
</script>

<style>

</style>