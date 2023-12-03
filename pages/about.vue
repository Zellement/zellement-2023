<template>
    <div class="relative z-10 w-full h-screen pb-12 ml-auto overflow-y-scroll text-black bg-white dark:text-slate-300 slug-content">
        <div class="w-1/2 p-4 ml-auto overflow-hidden xl:px-16">
            <h1 class="w-2/5 text-gray-500/10 pointer-events-none font-serif absolute text-[9vw] dark:text-slate-50/10 lg:text-[7vw] xl:text-[6vw] 2xl:text-[5vw] leading-none top-0 mt-2.5 right-0 text-right">
                About
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

                <h1 class="sr-only">
                    hi
                </h1>
            </div>
        </div>

        <div class="relative w-full ml-auto lg:max-w-2/3 lg:mt-4 aspect-square md:aspect-video 2xl:max-w-3/4">
            <nuxt-picture src="/dan.jpg" />
        </div>

        <div class="w-1/2 p-4 ml-auto overflow-hidden 3xl:flex 3xl:flex-row 3xl:gap-16 3xl:items-center 3xl:justify-between " />
    </div>
</template>

<script setup>

// import WORK_QUERY from '@/graphql/work'

// const invertLogo = (logoIsDark) => {
//     return logoIsDark ? 'dark:invert dark:brightness-200' : null
// }

// const route = useRoute()
// const { data } = await useGraphqlQuery({ query: WORK_QUERY, variables: { slug: route.params.slug } })

// const logoIsBlack = computed(() => {
//     return data?.value?.work?.logoIsBlack ? 'dark:invert dark:brightness-200' : ''
// })

// const isFreelance = computed(() => {
//     return data?.value.work?.employer?.title.includes('Freelance')
// })

// if (!data.value.work?.slug) {
//     navigateTo('/')
// }

// const getYear = computed(() => {
//     const date = new Date(data?.value.work?.date)
//     const year = date.getFullYear()
//     return year
// })

// // const heroIsLoaded = () => {
// //     return data.value.work.heroImage.url.isLoaded
// // }

</script>
