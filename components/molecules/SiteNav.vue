<template>
    <nav class="fixed bottom-0 left-0 z-20 flex flex-col p-4 font-serif text-3xl list-none site-nav lg:text-xl xl:text-2xl xl:p-16 3xl:text-3xl ">
        <li
            :class="isWorkPage"
            class="site-nav__list"
        >
            <nuxt-link
                class="site-nav__link"
                to="/"
            >
                Work
            </nuxt-link>
        </li>
        <li class="site-nav__list">
            <nuxt-link
                class="site-nav__link"
                to="/about"
            >
                About
            </nuxt-link>
        </li>
        <li class="site-nav__list">
            <nuxt-link
                class="site-nav__link"
                to="/contact"
            >
                Contact
            </nuxt-link>
        </li>
        <li class="flex flex-row items-center gap-4 mt-8">
            <nuxt-link
                class="flex  hover:-translate-y-0.5 transition-transform"
                to="https://www.linkedin.com/in/zellement/"
                target="_blank"
                aria-label="Visit my LinkedIn"
            >
                <Icon
                    name="ri:linkedin-line"
                    class="m-auto w-7 h-7 lg:w-6 lg:h-6"
                />
            </nuxt-link>
            <nuxt-link
                class="flex  hover:-translate-y-0.5 transition-transform"
                to="https://github.com/Zellement/"
                target="_blank"
                aria-label="Visit my GitHub profile"
            >
                <Icon
                    name="ph:github-logo-light"
                    class="m-auto w-7 h-7 lg:w-6 lg:h-6"
                />
            </nuxt-link>
            <button
                :class="darkModeIconClasses"
                class="flex  hover:-translate-y-0.5 transition-transform"
                aria-label="Use light mode"
                @click="toggleColorMode('light')"
            >
                <Icon
                    name="material-symbols:sunny-rounded"
                    class="m-auto w-7 h-7 lg:w-6 lg:h-6"
                />
            </button>
            <button
                class="flex hover:-translate-y-0.5 transition-transform"
                :class="lightModeIconClasses"
                aria-label="Use dark mode"
                @click="toggleColorMode('dark')"
            >
                <Icon
                    name="material-symbols-light:nightlight"
                    class="m-auto w-7 h-7 lg:w-6 lg:h-6"
                />
            </button>
        </li>
    </nav>
</template>

<script setup>
const route = useRoute()
const colorMode = useColorMode()

const isWorkPage = computed(() => {
    return route.path.includes('work') ? 'router-link-exact-active' : null
})

const toggleColorMode = (value) => {
    colorMode.preference = value
}

const isLightMode = computed(() => {
    return colorMode.preference === 'light'
})

const lightModeIconClasses = computed(() => {
    return isLightMode.value ? 'opacity-100' : 'opacity-50 pointer-events-none'
})

const darkModeIconClasses = computed(() => {
    return isLightMode.value ? 'opacity-50 pointer-events-none' : 'opacity-100'
})

// const isWorkPage = computed(() => {
//     return window.location.pathname.includes('work')
//     // return console.log(window.location.pathname)
// })

// console.log(isWorkPage.value)
// console.log(window.location.pathname)

</script>
