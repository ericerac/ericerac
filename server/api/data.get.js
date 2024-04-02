const config = useRuntimeConfig()
// import { useCookies } from "vue3-cookies";

export default defineEventHandler(async (event) => {
    // const { cookies } = useCookies();

    const GeoKey = process.env.GEO_KEY
    const WeatherKey = process.env.WEATHER_KEY
    const IpAddressUrl = process.env.IP_ADDRESS_URL

// let dark =  useCookie('dark','')

    const Ip = await $fetch(`${IpAddressUrl}`)

    // console.log("RETURN IP", Ip);
    const local = await $fetch(`https://api.bigdatacloud.net/data/ip-geolocation?ip=${Ip}&localityLanguage=en&key=${GeoKey}`)

    const v = await local.location.city
    // console.log("CITY", v);
    let data = await $fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${v}?unitGroup=metric&key=${WeatherKey}`)

    let dataTime = {
        sunrise: data.currentConditions.sunriseEpoch,
        sunset: data.currentConditions.sunsetEpoch,
        time: data.currentConditions.datetimeEpoch
    }
console.log("DATA TIME",dataTime);
    if (dataTime.time >= dataTime.sunrise && dataTime.time <= dataTime.sunset) {
    //    dark.value = false
        return false //if DAY
    } else {
        // dark.value = true
        return true // if NIGHT
    }
})