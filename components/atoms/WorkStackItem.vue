<template>
    <li
        class="p-2 shadow-lg bg-white/50 rounded-2xl"
    >
        <nuxt-link :to="`work/${props.data.slug}`" class="relative grid items-center gap-4 p-8 text-gray-600 transition-all duration-300 bg-white shadow-lg lg:gap-12 lg:grid-cols-2 rounded-xl hover:bg-plum-500 hover:text-white group">
            <span class="sr-only">{{ props.data.title }}</span>
            <img
                :alt="`Logo for ${props.data.title}`" class="flex-grow-0 block max-h-[2rem] max-w-40" :src="props.data.logo.url"
                :class="invertLogoOnHover ? 'group-hover:invert group-hover:brightness-200 transition-all duration-300' : null" />
            <div class="flex flex-col">
                <span class="font-serif text-sm leading-tight ">{{ props.data.teaserLine }}</span>
                <span class="text-gray-400 group-hover:white-gray-100">{{ props.data.teaserStack }} </span>
            </div>
            <span class="absolute top-0 right-0 opacity-0 m-1 transition-all duration-300 group-hover:opacity-100 py-1 px-1.5 text-gray-500 bg-gray-100 text-[0.65rem] rounded-lg">{{ getYear }}</span>
            <!-- <span class="absolute top-0 right-0 p-2 text-3xs opacity-30">{{ convertDate }}</span> -->
        </nuxt-link>
    </li>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})

const invertLogoOnHover = computed(() => {
    return props.data.logoIsBlack
})

// const convertDate = computed(() => {
//     const date = new Date(props.data.date)
//     const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//     const month = date.getMonth()
//     const year = date.getFullYear()
//     return `${monthNames[month]} ${year}`
// })

const getYear = computed(() => {
    const date = new Date(props.data.date)
    const year = date.getFullYear()
    return year
})

</script>
