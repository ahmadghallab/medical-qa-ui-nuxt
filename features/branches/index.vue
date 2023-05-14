<script setup>
const config = useRuntimeConfig();
const router = useRouter();

import AddBranch from './AddBranch.vue';
import BranchesListBody from './BranchesListBody.vue';
import BranchesListHeader from './BranchesListHeader.vue';
import DeleteBranch from './DeleteBranch.vue';
import EditBranch from './EditBranch.vue';

const {
  addBranch,
  handleAddBranchModal,
  branchesList,
  handleUpdateBranchesList,
  editBranch,
  handleEditBranchModal,
  deleteBranch,
  handleDeleteBranchModal
} = useBranches();

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
  <BranchesListHeader :count="branchesList?.count" />

  <Dots v-if="pending" />
  <Error v-else-if="error" :error="error" />
  <BranchesListBody v-else :branches="branchesList" />

  <Pagination v-model="page" :count="branchesList?.count" />

  <Modal title="Add Branch" :isOpen="addBranch.modalOpen" @onClose="handleAddBranchModal">
    <AddBranch />
  </Modal>

  <Modal title="Edit branch" :isOpen="editBranch.modalOpen" @onClose="handleEditBranchModal">
    <EditBranch />
  </Modal>

  <Modal title="Delete branch" :isOpen="deleteBranch.modalOpen" @onClose="handleDeleteBranchModal">
    <DeleteBranch />
  </Modal>
</template>