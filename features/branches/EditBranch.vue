<script setup>

import { useMutation } from '~/composables/useMutation';
import BranchForm from './BranchForm.vue';

const { editBranch, handleEditBranchModal, branchesList, handleUpdateBranchesList } = useBranches();

const defaultValues = {
  name: editBranch.value.data.name
}

const handleOnComplete = (data) => {

  const updatedData = branchesList.value.raw.map(el => {
    if (el.id === editBranch.value.data.id) return data.data
    return el
  })

  const newData = {
    count: branchesList.value.count - 1,
    raw: updatedData
  }
  handleUpdateBranchesList(newData);
  handleEditBranchModal();
}

const { loading, error, mutate } = useMutation({
  onCompleted: (data) => {
    handleOnComplete(data)
  }
});

const handleSubmit = (formData) => {
  mutate(`/branches/${editBranch.value.data.id}`, { method: 'post', body: formData })
}

</script>

<template>
  <Error :error="error" v-if="error" />

  <BranchForm :loading="loading" :defaultValues="defaultValues" @handleSubmit="handleSubmit" />
</template>