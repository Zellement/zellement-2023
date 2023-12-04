<template>
    <nav class="fixed bottom-0 left-0 z-20 flex flex-col gap-2 p-4 font-serif text-[6vw] list-none site-nav lg:text-xl xl:text-2xl xl:p-16 3xl:text-3xl lg:gap-0">
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
        <li class="flex flex-row items-center gap-2 mt-8 lg:gap-4">
            <nuxt-link
                class="flex  hover:-translate-y-0.5 transition-transform"
                to="https://www.linkedin.com/in/zellement/"
                target="_blank"
                aria-label="Visit my LinkedIn"
            >
                <Icon
                    name="ri:linkedin-line"
                    class="w-4 h-4 m-auto lg:w-6 lg:h-6"
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
                    class="w-4 h-4 m-auto lg:w-6 lg:h-6"
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
                    class="w-4 h-4 m-auto lg:w-6 lg:h-6"
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
                    class="w-4 h-4 m-auto lg:w-6 lg:h-6"
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
    return isLightMode.value ? 'opacity-100' : 'opacity-50 '
})

const darkModeIconClasses = computed(() => {
    return isLightMode.value ? 'opacity-50 ' : 'opacity-100'
})

// const isWorkPage = computed(() => {
//     return window.location.pathname.includes('work')
//     // return console.log(window.location.pathname)
// })

// console.log(isWorkPage.value)
// console.log(window.location.pathname)

</script>
