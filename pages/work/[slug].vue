<template>
    <div class="flex flex-col items-start w-1/2 min-h-screen p-8 ml-auto space-y-12 text-black bg-white">
        <img :alt="`Logo for ${data.title}`" class="block w-full " :src="data?.work.logo.url"/>
        <h1 class="sr-only">{{  data.work.title }}</h1>
        <h2 class="font-serif text-sm">{{ data.work.teaserLine}}</h2>
        {{ data.work.title }}
    </div>
    <!-- {{ route.params.slug }} -->
</template>

<script setup>

// import { computed } from 'vue'

const QUERY = `
    query WorkQuery ($slug: String!) {
        work(filter: {slug: {eq: $slug}}) {
            id
            title
            logo {
                id
                url
                responsiveImage {
                    alt
                    base64
                    bgColor
                    title
                    srcSet
                    webpSrcSet
                }
            }
            teaserLine
            teaserStack
            slug
            logoIsBlack
            date
        }
    }
`

const route = useRoute()
const { data } = await useGraphqlQuery({ query: QUERY, variables: { slug: route.params.slug } })

if (!data.value.work?.slug) {
    navigateTo('/')
}

</script>
