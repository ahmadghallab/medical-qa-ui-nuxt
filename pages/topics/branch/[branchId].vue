<script setup>

import TopicsList from '~/features/topics/index.vue'

const route = useRoute();

</script>

<template>
  <TopicsList :branchId="Number(route.params.branchId)" :branchName="route.query.branchName" />
</template>