<template>
    <nav class="fixed bottom-0 left-0 z-20 flex flex-col p-4 font-serif text-lg list-none site-nav lg:text-xl xl:text-2xl xl:p-16 3xl:text-3xl ">
        <li :class="isWorkPage" class="site-nav__list" ><nuxt-link class="site-nav__link" to="/">Work</nuxt-link></li>
        <li class="site-nav__list"><nuxt-link class="site-nav__link" to="/about">About</nuxt-link></li>
        <li class="site-nav__list"><nuxt-link class="site-nav__link" to="/contact">Contact</nuxt-link></li>
    </nav>
</template>

<script setup>
const route = useRoute()

const isWorkPage = computed(() => {
    return route.path.includes('work') ? 'router-link-exact-active' : null
})

// const isWorkPage = computed(() => {
//     return window.location.pathname.includes('work')
//     // return console.log(window.location.pathname)
// })

// console.log(isWorkPage.value)
// console.log(window.location.pathname)

</script>
