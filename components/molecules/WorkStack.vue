<template>
    <div class="relative flex w-2/3 max-h-screen p-2 ml-auto overflow-y-auto md:w-3/5 md:p-4 lg:w-1/2" v-if="data">
        <ul class="relative flex flex-col w-full gap-4 my-auto overflow-y-auto lg:pr-2 snap-y snap-end work-stack lg:m-4">
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
