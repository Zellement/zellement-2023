<template>
    <div class="relative w-1/2 min-h-screen p-8 ml-auto text-black bg-white">
        <div class="grid items-start self-start justify-start grid-cols-2 gap-8">
            <img :alt="`Logo for ${data.title}`" class="block col-start-2 w-auto ml-auto 2 max-h-[5rem]" :src="data?.work.logo.url"/>
            <h1 class="sr-only">{{  data.work.title }}</h1>
            <h2 class="opacity-5 pointer-events-none translate-x-4 font-serif text-sm absolute text-[10vw] top-0  left-0">{{ data.work.teaserLine}}</h2>
            <div class="flex flex-col col-start-2 row-start-2 text-right text-gray-500">
                <ul class="flex flex-col justify-end gap-2" v-if="data.work.techStack">
                    <li
                        class="flex flex-row items-center gap-2 ml-auto"
                        v-for="item in data.work.techStack"
                        :key="item.id"
                    >
                        <span class="font-serif ">{{  item.title  }}</span>
                        <span class="w-6">
                            <img :src="item.logo.url" class="w-full h-auto" />
                        </span>
                    </li>
                    <li v-if="isNotFreelance" class="mt-8 font-serif leading-none">
                        <nuxt-link class="transition-colors duration-300 hover:text-plum" :to="data.work.employer.website" target="_blank">
                            <span class="block font-sans text-2xs">Under employment of</span>
                            {{ data.work.employer.title }}</nuxt-link></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- {{ route.params.slug }} -->
</template>

<script setup>

import { computed } from 'vue'

const QUERY = `
    query WorkQuery ($slug: String!) {
        work(filter: {slug: {eq: $slug}}) {
            id
            title
            employer {
                title
                id
                website
            }
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
            techStack {
                title
                id
                logo {
                    id
                    url
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

const isNotFreelance = computed(() => {
    return data?.value.work?.employer?.title !== 'Freelance'
})

if (!data.value.work?.slug) {
    navigateTo('/')
}

</script>
