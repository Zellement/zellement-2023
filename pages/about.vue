<template>
    <div>
        <atoms-go-back-button class="" />
        <div class="relative z-10 w-full ml-auto text-black bg-gray-100 dark:bg-slate-800 dark:text-slate-100 slug-content">
            <div class="w-2/3 p-4 ml-auto bg-white dark:bg-slate-900 lg:w-1/2 xl:px-16">
                <div class="relative flex flex-col items-start self-start justify-start gap-8 content">
                    <h1 class="block mt-16 font-serif h1">
                        About
                    </h1>

                    <h2 class="font-serif text-sm">
                        Developer
                    </h2>

                    <p class="w-full p-4 -mx-8 text-xs text-white bg-shiraz-500 ">
                        I have over 18 years of experience working in leading development &amp; marketing agencies across the UK, and I've been lucky to have the chance to work on a multitude of languages, platforms and frameworks.
                    </p>

                    <p>With a strong historical background in <em>WordPress</em>, in recent years I have worked predominantly with Headless CMS platforms such as <em>Contentful</em>, <em>DatoCMS</em> &amp; <em>Prismic</em>, delivered with front-ends such as <em>GatsbyJS</em>, <em>NextJS</em> and <em>NuxtJS</em>.</p>
                </div>
            </div>

            <div class="relative w-full ml-auto overflow-hidden 2xl:max-w-3/4 lg:max-w-3/5 ">
                <nuxt-picture
                    src="/images/dan-landscape.jpg"
                    class="w-full h-full"
                    loading="lazy"
                    format="avif,webp"
                    fit="crop"
                    sizes="100vw sm:50vw md:400px"
                    :img-attrs="{class:'object-cover w-full h-full'}"
                />
            </div>
            <div class="w-2/3 p-4 p-6 ml-auto bg-white lg:pt-12 dark:bg-slate-900 lg:w-1/2 xl:px-16">
                <div class="flex flex-col items-start self-start justify-start gap-8 content">
                    <h2 class="font-serif text-sm">
                        Designer
                    </h2>

                    <p>I've been designing websites since the late nineties, when web designer and webmaster were the catch all roles. I have lived through iterations of fixed width, responsive, mobile-first, gradients, no gradients, drop shadows, no drop shadows, gradients again...</p>

                    <p class="w-full p-4 -mx-8 text-xs text-white bg-shiraz-500 dark:border-slate-800">
                        It's safe to say I've seen a lot of change in the industry as regards design. Although I no longer class myself as a designer, I still dabble occasionally, particularly for <nuxt-link
                            class="font-serif"
                            to="/"
                        >
                            freelance.
                        </nuxt-link>
                    </p>

                    <h2>Manager &amp; Leader</h2>

                    <p>
                        Whilst with <nuxt-link
                            target="_blank"
                            class="font-serif"
                            to="https://www.adtrak.co.uk"
                        >
                            Adtrak
                        </nuxt-link>, I held numerous different managerial and leadership roles, including:
                    </p>
                    <ul>
                        <li>Head of Web Design</li>
                        <li>Senior Manager</li>
                        <li>Assistant Customer Operations Director</li>
                    </ul>

                    <p>I have years of experience with the standard tasks associated to people management, including but not limited to;</p>

                    <ul>
                        <li>Monthly 1-1s</li>
                        <li>Objective setting & KPIs</li>
                        <li>PIPs, PDPs & Disciplinaries</li>
                        <li>Project Management</li>
                    </ul>
                    <h3 class="text-xs">
                        Training
                    </h3>
                    <p>I have been professionally trained in numerous management styles and techniques, including:</p>
                    <ul>
                        <li>MBTI (receiving ISTJ)</li>
                        <li>Tilt 365 (receiving MasterMind)</li>
                        <li>Situational Leadership</li>
                    </ul>
                    <div class="w-full p-4 -mx-8 text-xs text-white bg-shiraz-500">
                        <p class="mb-4">
                            ISTJs are defined as:
                        </p>
                        <p class="pl-4 text-xs border-l-2 border-current opacity-90">
                            "Quietly systematic. Factual. Organized. Logical. Detailed. Conscientious. Analytical. Responsible. Pragmatic. Critical. Conservative. Decisive. Stable. Concrete. Efficient."
                        </p>
                    </div>

                    <h2>Hobbies</h2>

                    <h3>Music</h3>

                    <p>I'm hugely into a select few genres of music, but mostly a massive metalhead. From old school metal bands like <em>Slayer</em> and <em>Metallica</em>, all the way through to heavier bands such as <em>Lamb of God</em>, <em>Behemoth</em> and <em>Sylosis</em>.</p>
                </div>
            </div>
            <div class="relative w-full ml-auto overflow-hidden 2xl:max-w-3/4 lg:max-w-3/5 ">
                <nuxt-picture
                    format="avif,webp"
                    src="/images/download.jpg"
                    class="w-full h-full"
                    fit="crop"
                    sizes="100vw sm:50vw md:400px"
                    loading="lazy"
                    :img-attrs="{class:'object-cover w-full h-full'}"
                />
            </div>

            <div class="w-2/3 p-4 ml-auto bg-white dark:bg-slate-900 lg:w-1/2 xl:px-16">
                <div class="flex flex-col items-start self-start justify-start gap-8 content">
                    <p>In addition to metal, I've found myself listening to a lot of "modern classical", much of which consists of film and TV music. I can't get enough of my self-proclaimed classical playlist on Spotify, a lot of which comes in the form on <em>Hans Zimmer</em>.</p>

                    <h3>Other hobbies</h3>

                    <p>I grew up playing some old school games on both PC and the old Commodore 64, from <em>Emlyn Hughes Soccer</em>, <em>Spy vs. Spy</em> and <em>Prince of Persia</em>. Nowadays it's mostly the PS5 with either some <em>Railway Empire</em>, the <em>Arkham</em> series, <em>The Last of Us</em>, <em>Battlefield</em> or any other RTS or strategy game.</p>

                    <p>Pre-Covid I went to the gym three to four times a week; however since working from home have found a home workout to be sufficient.</p>

                    <p>I have a whole right arm sleeve tattoo and left leg tattooed, I support <em>Nottingham Forest</em> and thoroughly enjoy most things related to <em>Batman</em>.</p>
                </div>
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

</script>
