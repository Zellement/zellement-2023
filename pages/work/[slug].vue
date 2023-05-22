<template>
    <div class="relative w-1/2 min-h-screen p-8 ml-auto overflow-hidden text-black bg-white">

        <nuxt-link class="fixed bottom-0 right-0 flex w-5 h-5 mb-8 mr-8 text-white transition-colors duration-300 rounded aspect-square bg-plum hover:bg-shiraz" :to="data.work.website" target="_blank" title="Visit website">
            <Icon name="uil:external-link-alt" class="w-3 h-3 m-auto" />
        </nuxt-link>
        <h2 class="opacity-5 text-gray-500 pointer-events-none translate-x-4 font-serif  absolute text-[11vw] leading-none top-0 left-0">{{ data.work.teaserLine}}</h2>
        <div class="relative z-10 grid items-start self-start justify-start grid-cols-2 gap-8">
            <nuxt-link class="absolute top-0 left-0 flex w-5 h-5 text-gray-700 transition-colors duration-300 bg-gray-300 rounded aspect-square hover:bg-shiraz hover:text-white" to="/"  title="Visit website">
                <Icon name="uil:arrow-left" class="w-3 h-3 m-auto" />
            </nuxt-link>
            <img :alt="`Logo for ${data.title}`" class="block col-start-2 w-auto ml-auto 2 max-h-[5rem]" :src="data?.work.logo.url"/>
            <h1 class="sr-only">{{  data.work.title }}</h1>
            <div class="flex flex-col col-start-2 row-start-2 text-right text-gray-500">

                <ul class="flex flex-col justify-end gap-2" v-if="data.work.techStack">

                    <li
                        class="flex flex-row items-center gap-2 ml-auto"
                        v-for="item in data.work.techStack"
                        :key="item.id"
                    >
                        <span class="font-serif ">{{  item.title  }}</span>
                        <span class="w-4 h-4">
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
</template>

<script setup>

import { computed } from 'vue'

const QUERY = `
    query WorkQuery ($slug: String!) {
        work(filter: {slug: {eq: $slug}}) {
            id
            title
            website
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
