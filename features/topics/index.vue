<script setup>
const { branchId } = defineProps({
  branchId: Number,
  branchName: String
})
</script>

<template>
  <h2>Topics for branch {{ branchName }}</h2>
</template>