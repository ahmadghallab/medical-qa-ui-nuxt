<script setup>
import useVuelidate from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';

const { loading, defaultValues } = defineProps({
  loading: Boolean,
  defaultValues: Object
});

const emit = defineEmits(['handleSubmit']);

const formData = reactive({ ...defaultValues })

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage('Name is required', required)
    }
  }
});

const validator = useVuelidate(rules, formData)

const submitForm = () => {
  validator.value.$validate();
  if (!validator.value.$error) {
    emit('handleSubmit', formData)
  }
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <Input v-model="formData.name" label="Name" placeholder="Input name" :validator="validator.name" />

    <div class="flex justify-end mt-7">
      <Button type="submit" :loading="loading">Save</Button>
    </div>

  </form>
</template>