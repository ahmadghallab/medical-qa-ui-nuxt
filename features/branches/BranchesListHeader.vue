<script setup>

const { count } = defineProps({
  count: Number
})

const { handleAddBranchModal } = useBranches();


</script>

<template>
  <div class="flex flex-row justify-between items-center mb-7">
    <div class="flex items-center gap-2">
      <h1 class="text-2xl font-semibold">Branches</h1>
      <Dots v-if="!count" />
      <span v-else>({{ count }})</span>
    </div>
    <Button @onClick="handleAddBranchModal">Add Branch</Button>
  </div>
</template>