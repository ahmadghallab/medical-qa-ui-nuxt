<script setup>
import RegisterForm from './RegisterForm.vue';

useHead({
  title: 'Register'
});

const initialValues = { email: '', password: '' }

function handleSubmit(values) {
  console.log(values);
}

</script>

<template>
  <div class="max-w-md w-full p-7 rounded-md border border-slate-200 mx-auto">

    <h1 class="text-lg font-semibold text-slate-900 mb-3">Register</h1>

    <RegisterForm @submit="handleSubmit" :initial-values="initialValues" />

  </div>
</template>