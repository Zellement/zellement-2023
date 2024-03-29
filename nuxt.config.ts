import { defineNuxtConfig } from 'nuxt/config'
import eslintVitePlugin from 'vite-plugin-eslint'
import { ofetch } from 'ofetch'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            datoCmsToken: process.env.DATO_CMS_TOKEN,
            gTagId: process.env.GTAG_ID
        }
    },
    target: 'static',
    devServerHandlers: [], // Fix for issue - https://github.com/nuxt-modules/tailwindcss/issues/480
    modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-icon'],
    colorMode: {
        classSuffix: '',
        preference: 'dark'
    },
    image: {
        provider: 'netlify',
        netlify: {
            baseURl: process.env.IMAGES_URL
        }
    },
    tailwindcss: {
        cssPath: '~/assets/scss/app.scss'
    },
    css: [
        '@/assets/scss/app.scss'
    ],
    build: {
        extractCSS: true
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                }, {
                    name: 'description',
                    content: 'Zellement'
                },
                { hid: 'og-type', property: 'og:type', content: 'website' }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    hooks: {
        async 'nitro:config' (nitroConfig) {
            const workRoutes = await getWorkRoutes()
            // add the routes to the nitro config
            nitroConfig.prerender.routes.push(...workRoutes)
        }
    },
    vite: {
        plugins: [
            eslintVitePlugin({
                include: ['./**/*.vue']
            })
        ]
    }
})

const useGraphqlQuery = async (options) => {
    const { query, variables = {} } = options
    const key = JSON.stringify(options)
    return ofetch('https://graphql.datocms.com', {
        key,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.DATO_CMS_TOKEN}`
        },
        body: {
            query,
            variables
        },
        transform: ({ data, errors }) => {
            if (errors) throw new errors()

            return data
        }
    })
}

const WORK_QUERY = `
query workQuery {
    allWorks {
      id
      slug
    }
  }
`

const getWorkRoutes = async () => {
    const { data } = await useGraphqlQuery({ query: WORK_QUERY })

    const routes = data.allWorks
        .map((item) => `/work/${item.slug}`)
    return routes
}
