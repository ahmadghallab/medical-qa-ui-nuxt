
<script setup>
defineProps({
  placeholder: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  validator: {
    type: Object,
    required: true
  },
})
</script>

<template>
  <label class="block mt-5">
    <span class="block text-sm font-medium text-slate-700 dark:text-white">{{ label }}</span>
    <input @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" :type="type"
      class="mt-2 appearance-none w-full text-base leading-6 bg-transparent rounded-md py-2 px-2 ring-1 shadow-sm focus:outline-none focus:ring-2 dark:ring-0 dark:focus:ring-2"
      :class="[
        validator.$error
          ? 'ring-pink-600 focus:ring-pink-600 text-pink-600 placeholder:text-pink-600'
          : 'ring-slate-200 focus:ring-violet-500 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500'
      ]" />
    <p class="mt-1 text-pink-600 text-sm" v-if="validator.$error">
      {{ validator.$errors[0].$message }}
    </p>
  </label>
</template>