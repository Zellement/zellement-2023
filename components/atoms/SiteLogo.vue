<template>
    <div
        class="fixed transition-all space-y-4 duration-300 w-1/3 md:w-1/3 lg:w-1/2 z-20 top-0 left-0 pt-4 pl-4 m-0 pb-4 font-serif text-4xl leading-[0.75] flex flex-col pr-8 gap-2 lg:gap-0 xl:p-16 xl:flex-col xl:items-start xl:space-y-4"
    >
        <nuxt-link
            class="relative self-start group"
            to="/"
        >
            <span>Z</span>
            <div class="absolute w-3/5 h-0.5 lg:h-1 -translate-x-1/2 bg-current left-1/2 top-1/2 group-hover:w-3/4 transition-width" />
        </nuxt-link>

        <div
            :class="subHeaderClasses"
            class="flex flex-col justify-end gap-1 font-serif text-lg leading-none transition-opacity duration-1000 lg:text-xs xl:pl-0 xl:mb-px xl:text-lg xl:opacity-50 xl:gap-0"
        >
            <span class="text-[4vw] leading-none opacity-50 lg:text-lg 2xl:text-xl">
                Dan Farrow
            </span>
            <span class="text-[4.8vw] leading-none lg:text-lg 2xl:text-xl">
                Front-end Developer
            </span>
            <span class="font-serif text-[2.7vw] italic opacity-50 xl:ml-auto xl:mt-3">for
                <nuxt-link
                    class="hover:underline"
                    target="_blank"
                    :to="`https://www.effectdigital.com/`"
                >@effectdigital</nuxt-link>
            </span>
        </div>
    </div>
</template>

<script setup>

// Hacky fix to ensure the mobile nav sits over the Dot Digital chat widget
const subHeaderClasses = computed(() => {
    return state.smallHeader ? 'opacity-100' : 'opacity-0 lg:opacity-100 '
})

const state = reactive({
    lastScrollPosition: 0,
    scrollOffset: 40,
    smallHeader: true
})

onMounted(() => {
    state.lastScrollPosition = window.scrollY
    window.addEventListener('scroll', onScroll)
})

const onScroll = () => {
    if (window.scrollY < 0) {
        return
    }
    if (Math.abs(window.scrollY - state.lastScrollPosition) < state.scrollOffset) {
        return
    }
    state.smallHeader = window.scrollY < state.lastScrollPosition
    state.lastScrollPosition = window.scrollY
}

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})

</script>
