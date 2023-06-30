
<script setup>
import { ErrorMessage, Field } from 'vee-validate';

defineProps({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    required: true
  },
});

defineOptions({ inheritAttrs: false });

</script>

<template>
  <label class="block mt-5">
    <span class="block text-sm font-medium text-slate-700 dark:text-white">{{ label }}</span>
    <Field :type="type" :name="name" v-bind="$attrs"
      class="bg-slate-100 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 mt-2 appearance-none w-full text-base leading-6 rounded-md py-2 px-2 ring-1 shadow-sm focus:outline-none focus:ring-2 dark:ring-0 dark:focus:ring-2 ring-slate-100 focus:ring-violet-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500" />
    <ErrorMessage class="mt-1 text-pink-600 text-sm" :name="name" />
  </label>
</template>