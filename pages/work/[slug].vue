<template>
    <div class="relative z-10 w-full h-screen pb-12 ml-auto overflow-y-scroll text-black bg-white dark:text-slate-300 slug-content">
        <div class="w-1/2 p-4 ml-auto overflow-hidden xl:px-16">
            <h2 class="w-2/5 text-gray-500/10 pointer-events-none font-serif absolute text-[9vw] dark:text-slate-50/10 lg:text-[7vw] xl:text-[6vw] 2xl:text-[5vw] leading-none top-0 mt-2.5 right-0 text-right">
                {{ data.work.teaserLine }}
            </h2>
            <div class="relative z-10 flex flex-col items-start self-start justify-start gap-8 ">
                <nuxt-link
                    class="fixed top-0 mt-4 transition-colors duration-300 -translate-x-1/2 lg:ml-4 btn left-1/2 lg:translate-x-0"
                    to="/"
                    title="Go back"
                >
                    <Icon
                        name="uil:arrow-left"
                        class="w-3 h-3 m-auto lg:w-6 lg:h-6"
                    />
                    <span class="hidden lg:block">Go back</span>
                </nuxt-link>
                <div class="flex w-full aspect-square sm:aspect-video 2xl:aspect-short 3xl:aspect-xshort">
                    <img
                        loading="eager"
                        :class="logoIsBlack"
                        :alt="`${data.work.title} logo`"
                        class="flex w-full h-auto mt-auto ml-auto lg:w-auto lg:max-h-32"
                        :src="data?.work?.logo?.url"
                    >
                </div>
                <h1 class="sr-only">
                    {{ data.work.title }}
                </h1>
            </div>
        </div>

        <div class="relative w-full ml-auto lg:max-w-2/3 lg:mt-4 aspect-square md:aspect-video 2xl:max-w-3/4">
            <datocms-image
                class="w-full h-full"
                picture-class="object-cover w-full h-full"
                :data="data?.work?.heroImage?.responsiveImage"
            />
        </div>

        <div class="w-1/2 p-4 ml-auto overflow-hidden 3xl:flex 3xl:flex-row 3xl:gap-16 3xl:items-center 3xl:justify-between ">
            <ul
                v-if="data.work.techStack"
                class="flex flex-col justify-end w-full gap-2 text-right 2xl:w-auto "
            >
                <ul
                    v-if="data.work.techStack"
                    class="flex flex-col items-end justify-end space-y-2 lg:space-y-1 lg:space-x-4 lg:flex-row lg:flex-wrap"
                >
                    <li
                        v-for="item in data.work.techStack"
                        :key="item.id"
                        class="flex flex-row items-center gap-2 3xl:flex-wrap"
                    >
                        <span class="font-serif ">{{ item.title }}</span>
                        <span class="w-4 h-4">
                            <img
                                :src="item?.logo?.url"
                                class="w-full h-auto"
                            >
                        </span>
                    </li>
                </ul>
            </ul>
            <div class="flex flex-row items-end justify-end gap-8 mt-8 3xl:m-0 3xl:flex-shrink-0">
                <div class="font-serif leading-none text-right">
                    <template v-if="isFreelance">
                        {{ data.work.employer.title }} <span class="text-gray-400"><em>in {{ getYear }}</em></span>
                    </template>
                    <template v-else>
                        <nuxt-link
                            class="leading-none transition-colors duration-300 hover:text-plum 3xl:flex 3xl:gap-1 3xl:items-end"
                            :to="data.work.employer.website"
                            target="_blank"
                        >
                            <span class="block font-sans leading-none text-gray-400 text-2xs 3xl:mb-px">Delivered with</span>
                            {{ data.work.employer.title }} <span class="text-gray-400"><em>in {{ getYear }}</em></span>
                        </nuxt-link>
                    </template>
                </div>
            </div>
        </div>

        <div class="hidden w-1/2 h-px ml-auto bg-gradient-to-r from-shiraz to-plum 3xl:block" />

        <div
            v-if="data.work.overview"
            class="w-3/5 p-4 my-6 ml-auto text-xs bg-white bg-gradient-to-r from-shiraz-10 to-white dark:from-plum-600 dark:to-plum-500 dark:text-slate-300 aspect-video lg:max-w-3/4 lg:aspect-auto lg:p-8 2xl:p-12"
        >
            <h2 class="mb-8 font-serif text-base dark:text-plum-50 text-shiraz-500 lg:text-lg xl:text-xl">
                Overview
            </h2>
            <div
                class=" lg:text-sm content"
                v-html="data.work.overview"
            />
        </div>

        <div
            v-if="data.work.additional"
            class="w-3/5 p-4 my-6 ml-auto text-xs text-black bg-gradient-to-r from-plum-50 to-white dark:text-white dark:from-shiraz-700 dark:to-shiraz-800 xl:max-w-1/4 xl:p-8 2xl:p-12 xl:mr-1/4"
        >
            <h3 class="mb-4 font-serif text-sm text-plum-500 dark:text-shiraz-100 lg:text-base">
                Additional
            </h3>
            <div
                class="dark:text-gray-400 text-2xs lg:text-xs content"
                v-html="data.work.additional"
            />
        </div>

        <!-- Visit website button -->
        <nuxt-link
            class="fixed bottom-0 right-0 flex flex-row items-center gap-2 px-1 py-0.5 mb-4 mr-4 text-white transition-colors duration-300 rounded  lg:px-2 lg:py-1.5 bg-gradient-to-br from-plum-500 to-shiraz hover:underline"
            :to="data.work.website"
            target="_blank"
            title="Visit website"
        >
            <span class="hidden lg:block">{{ data.work.website.replace('https://','').replace('/','') }}</span>
            <Icon
                name="uil:external-link-alt"
                class="w-4 h-5 lg:w-6 lg:h-6"
            />
        </nuxt-link>
    </div>
</template>

<script setup>

import { Image as datocmsImage } from 'vue-datocms'

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
            logoIsBlack
            logo {
                id
                url
                format
                responsiveImage {
                    alt
                    base64
                    bgColor
                    title
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
            date
            heroImage {
                responsiveImage(
                    imgixParams: { fit: crop, w: 1000, h: 530, auto: format }
                )
                {
                    src
                    width
                    height
                    alt
                    title
                }
            }
            overview
            additional
        }
    }
`

const route = useRoute()
const { data } = await useGraphqlQuery({ query: QUERY, variables: { slug: route.params.slug } })

const logoIsBlack = computed(() => {
    return data?.value?.work?.logoIsBlack ? 'dark:invert dark:brightness-200' : ''
})

const isFreelance = computed(() => {
    return data?.value.work?.employer?.title.includes('Freelance')
})

if (!data.value.work?.slug) {
    navigateTo('/')
}

const getYear = computed(() => {
    const date = new Date(data?.value.work?.date)
    const year = date.getFullYear()
    return year
})

// const heroIsLoaded = () => {
//     return data.value.work.heroImage.url.isLoaded
// }

</script>
