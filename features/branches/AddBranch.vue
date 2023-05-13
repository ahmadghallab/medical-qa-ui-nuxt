<script setup>
import { useMutation } from '~/composables/useMutation';
import BranchForm from './BranchForm.vue';

const { handleAddBranchModal, branchesList, handleUpdateBranchesList } = useBranches();

const defaultValues = {
  name: ''
}

const handleOnComplete = (data) => {

  const newData = {
    count: branchesList.value.count + 1,
    raw: [data.data, ...branchesList.value.raw]
  }

  handleUpdateBranchesList(newData)

  handleAddBranchModal();
}

const { loading, error, mutate } = useMutation({
  onCompleted: (data) => {
    handleOnComplete(data)
  }
});

const handleSubmit = (formData) => {
  mutate('/branches', { method: 'post', body: formData })
}

</script>

<template>
  <Error v-if="error" :error="error" />

  <BranchForm :defaultValues="defaultValues" :loading="loading" @handleSubmit="handleSubmit" />
</template>