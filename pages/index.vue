<script setup>
import BranchesListHeader from '~/features/branches/BranchesListHeader.vue';
import BranchesList from '~/features/branches/index.vue';

definePageMeta({
  middleware: 'auth'
});

useHead({
  title: 'Welcome'
})

</script>

<template>
  <BranchesListHeader />
  <BranchesList />
</template>