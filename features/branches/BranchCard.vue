<script setup>

const { handleEditBranchModal, handleDeleteBranchModal } = useBranches();

const { branch } = defineProps({
  branch: Object
})

const handleEditModal = () => {
  handleEditBranchModal(branch)
}

const handleDeleteModal = () => {
  handleDeleteBranchModal(branch)
}

</script>

<template>
  <div class="bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
    <h2 class="block text-base text-slate-900 font-semibold dark:text-slate-300">
      <NuxtLink :to="`/topics/branch/${branch.id}?branchName=${branch.name}`">
        {{ branch.name }}
      </NuxtLink>
    </h2>
    <div class="mt-5 inline-flex gap-2 items-center">
      <SecondaryButton @onClick="handleEditModal">Edit</SecondaryButton>
      <SecondaryButton @onClick="handleDeleteModal" variant="danger">Delete</SecondaryButton>
    </div>
  </div>
</template>