<script setup>
const config = useRuntimeConfig();

import AddBranch from './AddBranch.vue';
import BranchesListBody from './BranchesListBody.vue';

const { addBranchModal, handleAddBranchModal } = useBranches();

const { data, pending, error } = await useLazyAsyncData(
  'branches',
  () => $fetch(`/branches`, { baseURL: config.public.apiBase })
);


</script>

<template>
  <Loading v-if="pending" />
  <Error v-else-if="error" />
  <BranchesListBody v-else :branches="toRaw(data.data)" />


  <Modal title="Add Branch" :isOpen="addBranchModal" @onClose="handleAddBranchModal">
    <AddBranch />
  </Modal>
</template>