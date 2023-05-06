<script setup>

const { handleAddBranchModal } = useBranches();

</script>

<template>
  <div class="flex flex-row justify-between items-center mb-7">
    <h1 class="text-2xl font-semibold">Branches</h1>
    <SecondaryButton @onClick="handleAddBranchModal">Add Branch</SecondaryButton>
  </div>
</template>