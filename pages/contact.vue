<template>
    <div>
        <atoms-go-back-button class="bg-gray-100 dark:bg-slate-800" />
        <div class="relative z-10 w-full min-h-screen ml-auto bg-white dark:bg-slate-900 slug-content">
            <div class="w-2/3 p-4 ml-auto bg-gray-100 dark:bg-slate-800 lg:w-1/2 xl:px-16">
                <div class="relative flex flex-col items-start self-start justify-start gap-8 pb-8 content">
                    <h1 class="block mt-16 font-serif h1">
                        Contact
                    </h1>

                    <h2 class="font-serif text-sm">
                        Find me on the usual platforms...
                    </h2>

                    <div class="flex gap-4 fle-row">
                        <molecules-social-icons />
                    </div>

                    <h2 class="font-serif text-sm">
                        Or leave me a message and I'll get back to you.
                    </h2>

                    <form
                        action="https://formspree.io/f/mqkvrqwj"
                        method="POST"
                        class="flex flex-col w-full gap-8 form"
                    >
                        <label class="">
                            <span>Your name:</span>
                            <input
                                type="text"
                                name="name"
                            >
                        </label>
                        <label class="">
                            <span> Your email:</span>
                            <input
                                type="email"
                                name="email"
                            >
                        </label>
                        <label class="">
                            <span>Your message:</span>
                            <textarea
                                name="message"
                                rows="6"
                            />
                        </label>
                        <!-- your other form fields go here -->
                        <button
                            type="submit"
                            class="ml-auto btn"
                        >
                            Contact me
                        </button>
                    </form>
                </div>
            </div>

            <div class="relative w-full ml-auto overflow-hidden xl:max-w-2/3 2xl:max-w-3/5">
                <nuxt-picture
                    src="/images/dan-callme.jpg"
                    class="w-full h-full"
                    loading="lazy"
                    format="avif,webp"
                    fit="crop"
                    sizes="100vw sm:50vw md:400px"
                    :img-attrs="{class:'object-cover w-full h-full'}"
                />
            </div>
        </div>
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

const seoTitle = computed(() => {
    return 'Contact me | Dan Farrow | Front-end Developer'
})

useSeoMeta({
    title: seoTitle.value
})

</script>
