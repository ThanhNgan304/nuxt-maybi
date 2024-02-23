<template>
    <div>
        <div class="flex items-center">
            <h1 class="text-4xl font-semibold">Website
                <span class="hero-animation">
                    <!-- hide text until anime.js setup -->
                    <span class="text-wrapper opacity-0 transition duration-500 relative ml-2">
                        <!-- hidden text to make underline be right length -->
                        <span class="absolute text-transparent border-solid border-b-2 border-[var(--primary-color)]">Developer</span>
                        <!-- word 1 -->
                        <span class="absolute border-t-2 border-transparent text-white el-0">
                            <span class="letters">Designer</span>
                        </span>
                        <!-- word 2 -->
                        <span class="absolute border-t-2 border-transparent text-white el-1">
                            <span class="letters">Developer</span>
                        </span>
                    </span>
                </span>
            </h1>
        </div>
    </div>
</template>

<script setup>
const { $anime } = useNuxtApp()

onMounted(() => {
    const textWrappers = document.querySelectorAll(".hero-animation .letters");
textWrappers.forEach((textWrapper, idx) => {
  if (textWrapper.textContent) {
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /([^\x00-\x80]|\w)/g,
      `<span class='el-${idx}-letter'>$&</span>`
    );
  }
});

$anime
  .timeline({ loop: true })
  .add({
    targets: [".hero-animation .el-0-letter"],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 34 * (i + 1)
  })
  .add({
    targets: ".hero-animation .el-0",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
  .add({
    targets: ".hero-animation .el-1-letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 34 * (i + 1)
  })
  .add({
    targets: ".hero-animation .el-1",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// reveal text once anime.js setup
const textWrapper = document.querySelector(".hero-animation .text-wrapper");
if (textWrapper) textWrapper.classList.add("opacity-100");
})
//  Wrap every letter in a span

</script>

<style scoped></style>