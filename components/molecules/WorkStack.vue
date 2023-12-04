<template>
    <div
        v-if="data"
        class="relative flex w-2/3 ml-auto md:w-3/5 lg:w-1/2"
    >
        <ul class="relative z-10 flex flex-col w-full h-full gap-4 py-4 pb-10 pr-4 my-auto xl:py-16 work-stack 2xl:pr-12">
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

</script>
