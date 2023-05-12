<script setup>
const config = useRuntimeConfig();
const router = useRouter();

import AddBranch from './AddBranch.vue';
import BranchesListBody from './BranchesListBody.vue';

const { addBranchModal, handleAddBranchModal, branchesList, handleUpdateBranchesList } = useBranches();

let page = ref(router.query?.page ? Number(router.query.page) : 1);

const { data, pending, error } = await useLazyFetch('/branches', {
  baseURL: config.public.apiBase,
  query: { page },
});

watch(data, (newData) => {
  handleUpdateBranchesList(newData.data)
})

watch(page, (newPage) => {
  router.push({
    path: '/',
    query: { page: newPage },
  })
})


</script>

<template>
  <Loading v-if="pending" />
  <Error v-else-if="error" />
  <BranchesListBody v-else :branches="branchesList" />

  <Pagination v-model="page" :count="branchesList?.count" />

  <Modal title="Add Branch" :isOpen="addBranchModal" @onClose="handleAddBranchModal">
    <AddBranch />
  </Modal>
</template>