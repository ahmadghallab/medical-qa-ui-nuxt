<script setup>

const {
  deleteBranch,
  handleDeleteBranchModal,
  branchesList,
  handleUpdateBranchesList
} = useBranches();

const handleOnComplete = () => {
  const updatedData = branchesList.value.raw.filter(el => el.id !== deleteBranch.value.data.id)
  const newData = {
    count: branchesList.value.count - 1,
    raw: updatedData
  }

  handleUpdateBranchesList(newData)
  handleDeleteBranchModal()
}

const { loading, error, mutate } = useMutation({
  onCompleted: () => {
    handleOnComplete();
  }
});

const handleSubmit = () => {
  mutate(`/branches/${deleteBranch.value.data.id}`, { method: 'delete' })
}

</script>

<template>
  <div class="max-w-xs mx-auto">

    <Error :error="error" v-if="error" />

    <p class="text-base text-slate-500 dark:text-slate-100 mb-4">
      You are about to delete branch <span class="font-semibold">{{ deleteBranch.data.name }}</span>
    </p>

  </div>

  <div class="flex justify-end">
    <Button @onClick="handleSubmit" :loading="loading" variant="danger">Delete</Button>
  </div>
</template>