<script setup>
definePageMeta({
  middleware: 'guest',
})

useHead({
  title: 'Login'
})

import { useAuthStore } from '~/stores/AuthStore';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators';

const auth = useAuthStore();

const formData = reactive({
  email: '',
  password: '',
});

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage('The email field is required', required),
      email: helpers.withMessage('Invalid email format', email),
    },
    password: {
      required: helpers.withMessage('The password field is required', required),
      minLength: minLength(6),
    },
  };
});

const v$ = useVuelidate(rules, formData);

const login = (email) => {
  auth.authenticate(email)
  return navigateTo('/')
}

const submitForm = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    login(formData.email);
  }
};

</script>

<template>
  <div class="max-w-md w-full p-7 rounded-md border border-slate-200 mx-auto">
    <h1 class="text-lg font-semibold text-slate-900">Login</h1>
    <p class="text-slate-500">Enter you credentials</p>
    <form @submit.prevent="submitForm">
      <Input v-model="formData.email" label="Email" type="email" placeholder="Input your email" :validator="v$.email" />
      <Input v-model="formData.password" label="Password" type="password" placeholder="Input your password"
        :validator="v$.password" />
      <div class="flex justify-end mt-7">
        <button class="btn-primary disabled:bg-slate-100 disabled:text-slate-300">Login</button>
      </div>
    </form>
  </div>
</template>