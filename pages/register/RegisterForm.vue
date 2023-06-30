<script setup>
import { Form } from 'vee-validate';

const props = defineProps(['initialValues'])

const emits = defineEmits(['submit']);

function onSubmit(values) {
  emits('submit', values)
}

</script>

<template>
  <Form @submit="onSubmit" :initial-values="props.initialValues">

    <FormInput name="email" label="Email" type="email" placeholder="Input your email" rules="required|email" />

    <FormInput name="password" label="Password" type="password" placeholder="Input your password"
      rules="required|min:8" />

    <div class="flex justify-end mt-7">
      <Button type="submit">Login</button>
    </div>

  </Form>
</template>