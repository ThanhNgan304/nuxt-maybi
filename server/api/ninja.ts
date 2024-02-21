export default defineEventHandler(async (event) => {

    // // handle query params
    // const query = getQuery(event)

    // // handle post data
    // const { age } = await readBody(event)

    // api call with private key
    const data = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_e7rUqzPNimKxuPh4esr3MThAAOK1esqTWa1bKMZR')

    // return {
    //     message: `Hallo, ${query.name} your are ${age}`
    // }

    return data
})