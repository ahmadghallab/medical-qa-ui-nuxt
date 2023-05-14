<script setup>
import BranchesList from '~/features/branches/index.vue';

definePageMeta({
  middleware: 'auth'
});

useHead({
  title: 'Welcome'
})

</script>

<template>
  <BranchesList />
</template>