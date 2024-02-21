<template>
    <div class="container mx-auto py-20 overflow-hidden">
        <Head>
            <Title>Maskcodex | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProjectDetail :project="product" />
    </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

//fetch product data
const { data: product } = await useFetch(uri)

if(!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found!', fatal: true})
}


</script>

<style scoped>

</style>