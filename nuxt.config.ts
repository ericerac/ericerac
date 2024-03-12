// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:true,
  modules: [
   
    '@pinia/nuxt',
  ],
  components: [
  {
    path: '~/components', // will get any components nested in let's say /components/test too
    pathPrefix: false,
  },
],
  nitro: {
    plugins: ["~/server/plugins/mongodb.ts"],
  },
  runtimeConfig:{
    geoKey:process.env.GEO_KEY,
    dbUserName:process.env.DB_USERNAME,
    dbPassword:process.env.DB_PASSWORD,
    dbNameTab:process.env.DB_NAME_TAB,
    mongodbUri:process.env.MONGO_URI,
    keyHash:process.env.SECRET_KEY_HASH
  },
  router: {
    options: {
      strict: true,
    },
  },
})
