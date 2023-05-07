<template>
    <li
        class="p-2 bg-white/50 rounded-2xl"
    >
        <nuxt-link to="/" class="grid items-center gap-4 p-8 text-gray-600 transition-all duration-300 bg-white shadow-xl lg:gap-12 lg:grid-cols-2 rounded-xl hover:bg-plum-500 hover:text-white group">
            <span class="sr-only">{{ props.data.title }}</span>
            <img :alt="`Logo for ${props.data.title}`" class="flex-grow-0 block max-h-[2rem]" :src="props.data.logo.url"
                 :class="invertLogoOnHover ? 'group-hover:invert group-hover:brightness-200 transition-all duration-300' : null" />
            <div class="flex flex-col">
                <span class="font-serif text-sm leading-tight ">{{ props.data.teaserLine }}</span>
                <span class="text-gray-400 group-hover:white-gray-100">{{ props.data.teaserStack }}</span>
            </div>
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

</script>
