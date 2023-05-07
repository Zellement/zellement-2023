<template>
    <div class="relative flex w-2/3 max-h-screen p-2 ml-auto overflow-y-auto md:p-1 lg:w-1/2" v-if="data">
        <ul class="relative flex flex-col w-full gap-4 pr-2 my-auto overflow-y-auto snap-y snap-end work-stack lg:m-4">
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
        }
        teaserLine
        teaserStack
        slug
    }
  }
`
const { data } = await useGraphqlQuery({ query: QUERY })

// const invertLogoOnHover = computed(() => {
//     return data.
// })
</script>
