// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['nuxt-auth-utils'],
    extends: [
        ['github:Kazkovy-Kit/ui', {install: true}]
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
