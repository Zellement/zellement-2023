<template>
    <div
        v-show="data"
        :key="workData?.id"
        class="relative z-10 w-full h-screen pb-56 ml-auto overflow-y-scroll text-black bg-white lg:pb-12 dark:text-slate-300 slug-content"
    >
        <div class="w-1/2 p-4 ml-auto overflow-hidden xl:px-16">
            <h1 class="w-2/5 text-gray-500/10 pointer-events-none font-serif absolute text-[9vw] dark:text-slate-50/10 lg:text-[7vw] xl:text-[6vw] 2xl:text-[5vw] leading-none top-0 mt-2.5 right-0 text-right">
                {{ workData?.teaserLine }}
            </h1>
            <div class="relative z-10 flex flex-col items-start self-start justify-start gap-8 ">
                <nuxt-link
                    class="fixed top-0 z-50 mt-4 transition-colors duration-300 -translate-x-1/2 lg:ml-4 btn left-1/2 lg:translate-x-0"
                    to="/"
                    title="Go back"
                >
                    <Icon
                        name="uil:arrow-left"
                        class="w-3 h-3 m-auto lg:w-6 lg:h-6"
                    />
                    <span class="hidden lg:block">Go back</span>
                </nuxt-link>
                <div class="flex w-full mt-4 aspect-square sm:aspect-video 2xl:aspect-short 3xl:aspect-xshort">
                    <img
                        loading="eager"
                        :class="logoIsBlack"
                        :alt="`${data?.work.title} logo`"
                        class="flex w-full h-auto mt-auto ml-auto lg:w-auto lg:max-h-32"
                        :src="workData?.logo?.url"
                    >
                </div>
                <h1 class="sr-only">
                    {{ workData?.title }}
                </h1>
            </div>
        </div>

        <div class="relative grid w-full ml-auto lg:w-3/5 lg:mt-4 aspect-square md:aspect-video 2xl:max-w-3/4 lg:max-w-3/4 ">
            <div
                class="inset-0 flex col-start-1 row-start-1 transition-opacity duration-500 col-span-full bg-gradient-to-l dark:from-shiraz-700 from-gray-100 to-gray-200 dark:to-shiraz-600"
            >
                <Icon
                    name="eos-icons:bubble-loading"
                    class="m-auto text-xl dark:text-shiraz-300"
                />
            </div>
            <datocms-image
                class="w-full h-full col-start-1 row-start-1 transition-opacity duration-500 col-span-full relati"
                picture-class="object-cover w-full h-full"
                :data="featuredImgData.responsiveImage"
            />
        </div>

        <div
            v-if="screenshotImgData"
            class="relative grid w-10/12 monitor p-1.5 pb-2 lg:pb-4 ml-auto mr-1/12 -mt-12 -translate-y-4 rounded-tl-lg  md:mr-4 md:w-7/12 lg:-mb-12 lg:-translate-y-20 lg:p-2  rounded-tr-xl from-gray-200 to-gray-300 bg-gradient-to-br dark:from-slate-700 dark:to-slate-900 lg:w-2/5 lg:mt-4 2xl:max-w-3/4 lg:max-w-3/4"
        >
            <div
                class="inset-0 flex col-start-1 row-start-1 transition-opacity duration-500 col-span-full bg-gradient-to-l dark:from-shiraz-700 from-gray-100 to-gray-200 dark:to-shiraz-600"
            >
                <Icon
                    name="eos-icons:bubble-loading"
                    class="m-auto text-xl dark:text-shiraz-300"
                />
            </div>
            <datocms-image
                class="w-full h-full col-start-1 row-start-1 transition-opacity duration-500 col-span-full "
                picture-class="w-full h-auto "
                :data="screenshotImgData.responsiveImage"
            />
        </div>

        <div class="w-1/2 p-4 ml-auto overflow-hidden 3xl:flex 3xl:flex-row 3xl:gap-16 3xl:items-center 3xl:justify-between ">
            <ul
                v-if="data?.work.techStack"
                class="flex flex-col justify-end w-full gap-2 text-right 2xl:w-auto "
            >
                <ul
                    v-if="data?.work.techStack"
                    class="flex flex-col items-end justify-end space-y-2 lg:space-y-1 lg:space-x-4 lg:flex-row lg:flex-wrap"
                >
                    <li
                        v-for="item in data?.work.techStack"
                        :key="item.id"
                        class="flex flex-row items-center gap-2 3xl:flex-wrap"
                    >
                        <span class="font-serif ">{{ item.title }}</span>
                        <span class="w-4 h-4">
                            <img
                                :src="item?.logo?.url"
                                class="w-full h-auto"
                                :class="invertLogo(item?.logoIsDark)"
                            >
                        </span>
                    </li>
                </ul>
            </ul>
            <div class="flex flex-row items-end justify-end gap-8 mt-8 3xl:m-0 3xl:flex-shrink-0">
                <div class="font-serif leading-none text-right">
                    <template v-if="isFreelance">
                        {{ data?.work.employer.title }} <span class="text-gray-400"><em>in {{ getYear }}</em></span>
                    </template>
                    <template v-else>
                        <nuxt-link
                            class="leading-none transition-colors duration-300 hover:text-shiraz-500 3xl:flex 3xl:gap-1 3xl:items-end"
                            :to="data?.work.employer.website"
                            target="_blank"
                        >
                            <span class="block font-sans leading-none text-gray-400 text-2xs 3xl:mb-px">Delivered with</span>
                            {{ data?.work.employer.title }} <span class="text-gray-400"><em>in {{ getYear }}</em></span>
                        </nuxt-link>
                    </template>
                </div>
            </div>
        </div>

        <div class="hidden w-1/2 h-px ml-auto bg-gradient-to-r from-shiraz to-plum 3xl:block" />

        <div
            v-if="data?.work.overview"
            class="w-3/5 p-4 mt-10 mb-6 ml-auto text-xs bg-white bg-gradient-to-r from-shiraz-10 to-white dark:from-plum-600 dark:to-plum-500 dark:text-slate-300 aspect-video lg:max-w-3/4 lg:aspect-auto lg:p-8 2xl:p-12"
        >
            <h2 class="mb-8 font-serif text-base dark:text-plum-50 text-shiraz-500 lg:text-lg xl:text-xl">
                Overview
            </h2>
            <div
                class=" lg:text-sm content"
                v-html="data?.work.overview"
            />
        </div>

        <div
            v-if="data?.work.additional"
            class="w-3/5 p-4 my-6 ml-auto text-xs text-black lg:-translate-x-8 bg-gradient-to-r from-plum-50 to-white dark:text-white dark:from-shiraz-700 dark:to-shiraz-800 xl:max-w-1/3 xl:p-8 2xl:p-12 xl:mr-1/6"
        >
            <h3 class="mb-4 font-serif text-sm text-plum-500 dark:text-shiraz-100 lg:text-base">
                Additional
            </h3>
            <div
                class="dark:text-gray-400 text-2xs lg:text-xs content"
                v-html="data?.work.additional"
            />
        </div>

        <nuxt-link
            class="fixed bottom-0 right-0 flex flex-row border border-white border-opacity-10 items-center gap-2 px-1 py-0.5 mb-4 mr-4 text-white  duration-300 rounded  lg:px-2 lg:py-1.5 bg-gradient-to-br from-plum-500 to-shiraz hover:border-opacity-50 hover:shadow-xl transition-all"
            :to="data?.work.website"
            target="_blank"
            title="Visit website"
        >
            <span class="hidden lg:block">{{ displayUrl }}</span>
            <Icon
                name="uil:external-link-alt"
                class="w-4 h-5 lg:w-6 lg:h-6"
            />
        </nuxt-link>
    </div>
</template>

<script setup>

import { Image as datocmsImage } from 'vue-datocms'

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
                url
                id
                responsiveImage {
                    src
                    width
                    height
                    srcSet
                    alt
                }
            }
            screenshot {
                url
                id
                responsiveImage {
                    src
                    width
                    height
                    srcSet
                    alt
                }
            }
            overview
            additional
        }
    }
`

const route = useRoute()

const { data } = await useGraphqlQuery({ query: QUERY, variables: { slug: route.params.slug } })

// Computed

const workData = computed(() => {
    return data.value?.work
})

const displayUrl = computed(() => {
    return data?.value.work.website.replace('https://', '').replace('/', '')
})

const featuredImgData = computed(() => {
    return workData.value?.heroImage
})

const screenshotImgData = computed(() => {
    return workData.value?.screenshot
})

const logoIsBlack = computed(() => {
    return data?.value?.work?.logoIsBlack ? 'dark:invert dark:brightness-200' : ''
})

const isFreelance = computed(() => {
    return data?.value?.work?.employer?.title.includes('Freelance')
})

const getYear = computed(() => {
    const date = new Date(data?.value.work?.date)
    const year = date.getFullYear()
    return year
})

// Methods

const invertLogo = (logoIsDark) => {
    return logoIsDark ? 'dark:invert dark:brightness-200' : null
}

if (!data?.value?.work?.slug) {
    navigateTo('/')
}

</script>
