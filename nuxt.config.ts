// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['nuxt-auth-utils'],
    extends: [
        '@kazkovy-kit/ui'
    ],
    runtimeConfig: {
        oauth: {
            discord: {
                clientId: undefined,
                clientSecret: undefined,
            },
        },
    },
})
