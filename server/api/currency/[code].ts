export default defineEventHandler(async (event) => {

    const params = event.context.params

    const { currencyKey } = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/latest?currencies=${params.code}&apikey=${currencyKey}`

    const data = await $fetch(uri)

    return data

})