<script setup>
import BranchCard from './BranchCard.vue';


const props = defineProps({
  branches: Object
})

</script>

<template>
  <div class="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 min-h-[30vh] mb-4">
    <BranchCard v-for="branch in branches.raw" :branch="branch" :key="branch.id" />
  </div>
</template>