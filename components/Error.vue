<script setup>
const { error } = defineProps({
  error: {
    type: String,
    default: 'Something went wrong'
  }
})
</script>

<template>
  <p class="p-3 rounded-md bg-rose-200 text-rose-900 mb-3">{{ error }}</p>
</template>