<template>
    <div class="relative z-10 w-full h-screen ml-auto overflow-y-scroll text-black bg-white lg:p-4 slug-content">

        <div class="w-1/2 p-4 ml-auto overflow-hidden ">
            <h2 class="opacity-5 w-2/5 text-gray-500 pointer-events-none font-serif absolute text-[9vw] lg:text-[7vw] xl:text-[6vw] 2xl:text-[5vw] leading-none top-0 mt-2 -mr-1 right-0 text-right">{{ data.work.teaserLine}}</h2>
            <div class="relative z-10 flex flex-col items-start self-start justify-start gap-8 ">
                <nuxt-link class="fixed left-1/2 top-0 ml-4 mt-4 flex flex-row gap-2 p-1 lg:py-1.5 lg:px-2 text-gray-500 bg-white transition-colors duration-300 border border-gray-500 rounded hover:bg-shiraz hover:text-white" to="/"  title="Go back">
                    <Icon name="uil:arrow-left" class="w-3 h-3 m-auto lg:w-6 lg:h-6" />
                    <span class="hidden lg:block">Go back</span>
                </nuxt-link>
                <div class="flex w-full aspect-square sm:aspect-video xl:aspect-short">
                    <img :alt="`Logo for ${data.title}`" class="flex w-full mt-auto ml-auto xl:max-h-72 xl:w-auto" :src="data?.work.logo.url"/>
                </div>
                <h1 class="sr-only">{{  data.work.title }}</h1>
            </div>
        </div>

        <div class="w-full ml-auto lg:max-w-3/4 lg:mt-4 aspect-square md:aspect-video">
            <img :alt="`Main image for ${data.title}`" class="object-cover w-full h-full" :src="data?.work.heroImage.url"/>
        </div>

        <div class="w-1/2 p-4 ml-auto overflow-hidden ">

            <ul class="flex flex-col justify-end w-full gap-2 text-right" v-if="data.work.techStack">

                <ul class="flex flex-col items-end justify-end gap-2 lg:gap-6 lg:flex-row lg:flex-wrap" v-if="data.work.techStack">

                    <li
                        class="flex flex-row items-center gap-2"
                        v-for="item in data.work.techStack"
                        :key="item.id"
                    >
                        <span class="font-serif ">{{  item.title  }}</span>
                        <span class="w-4 h-4">
                            <img :src="item.logo.url" class="w-full h-auto" />
                        </span>
                    </li>
                </ul>
            </ul>

            <div v-if="isNotFreelance" class="mt-8 font-serif leading-none text-right">
                <nuxt-link class="transition-colors duration-300 hover:text-plum" :to="data.work.employer.website" target="_blank">
                    <span class="block font-sans text-gray-400 text-2xs">Under employment of</span>
                    {{ data.work.employer.title }}
                </nuxt-link>
            </div>
        </div>

        <div class="w-3/5 p-4 my-6 ml-auto text-xs bg-white aspect-video lg:max-w-3/4 lg:aspect-auto xl:p-8 2xl:p-12" v-if="data.work.overview">
            <h2 class="mb-8 font-serif text-base text-plum-500 lg:text-xl">Overview</h2>
            <div class="text-gray-500 lg:text-base content" v-html="data.work.overview" />
        </div>

        <!-- Visit website button -->
        <nuxt-link class="fixed bottom-0 right-0 flex flex-row items-center gap-2 px-1 py-0.5 mb-4 mr-4 text-white transition-colors duration-300 rounded  lg:px-2 lg:py-1.5 bg-plum hover:bg-shiraz" :to="data.work.website" target="_blank" title="Visit website">
            <span class="hidden lg:block">{{ data.work.website.replace('https://','').replace('/','')}}</span>
            <Icon name="uil:external-link-alt" class="w-4 h-5 lg:w-6 lg:h-6" />
        </nuxt-link>
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
            heroImage {
                url
                responsiveImage {
                    alt
                    base64
                    bgColor
                    title
                }
            }
            overview
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
