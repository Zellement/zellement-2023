<template>
    <div class="relative flex w-1/2 h-screen max-h-screen pt-2 pr-0 ml-auto overflow-hidden md:w-3/5 md:py-4 2xl:py-16 lg:w-1/2 " v-if="data">
        <ul class="relative flex flex-col w-full h-screen gap-4 pb-4 pb-8 pr-4 my-auto overflow-y-scroll work-stack 2xl:pb-16 2xl:pr-12">
            <atoms-work-stack-item
                v-for="item in data.allWorks"
                :key="item.id"
                :data="item"
            />
        </ul>
    </div>
</template>

<script setup>
const QUERY = `
  query {
    allWorks {
        id
        title
        logo {
            id
            url
            responsiveImage {
                alt
                base64
                bgColor
                title
                srcSet
                webpSrcSet
            }
        }
        teaserLine
        teaserStack
        slug
        logoIsBlack
        date
    }
  }
`
const { data } = await useGraphqlQuery({ query: QUERY })

// const invertLogoOnHover = computed(() => {
//     return data.
// })
</script>
