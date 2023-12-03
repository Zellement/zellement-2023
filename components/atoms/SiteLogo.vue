<template>
    <nuxt-link
        to="/"
        class="group fixed transition-all duration-300 z-50 top-0 left-0 p-4 m-0   font-serif text-4xl leading-[0.75] flex flex-col lg:flex-row lg:items-end group gap-2 lg:gap-0 xl:p-16 xl:flex-col xl:items-start xl:space-y-10"
    >
        <div class="relative self-start">
            <span>Z</span>
            <div class="absolute w-3/5 h-0.5 lg:h-1 -translate-x-1/2 bg-current left-1/2 top-1/2 group-hover:w-3/4 transition-width" />
        </div>

        <div class="flex flex-col gap-0.5 justify-end font-serif leading-none text-2xs lg:text-xs lg:pl-2 xl:mb-px xl:text-lg xl:pl-0 xl:opacity-50">
            <h1 class="opacity-50 leading-[1]">
                Dan Farrow
            </h1>
            <h2 class="leading-[1]">
                Front-end Developer
            </h2>
        </div>
    </nuxt-link>
</template>
