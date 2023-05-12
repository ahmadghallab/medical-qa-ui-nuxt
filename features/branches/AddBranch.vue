<script setup>
import useVuelidate from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';
import { useMutation } from '~/composables/useMutation';

const { handleAddBranchModal, branchesList, handleUpdateBranchesList } = useBranches();

const formData = reactive({
  name: ''
})

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('Name is required', required)
    }
  }
});

const v$ = useVuelidate(rules, formData)

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

const submitForm = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    mutate('/branches', { method: 'post', body: formData })
  }
}

</script>

<template>
  <form @submit.prevent="submitForm">

    <div class="p-5 rounded-md bg-red-100 text-red-800" v-if="error">
      {{ error }}
    </div>

    <Input v-model="formData.name" label="Name" placeholder="Input name" :validator="v$.name" />

    <div class="flex justify-end mt-7">
      <Button type="submit" :loading="loading">Add branch</Button>
    </div>
  </form>
</template>