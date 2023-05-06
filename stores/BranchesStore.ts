import { defineStore } from "pinia";

export const useBranchesStore = defineStore('branches', {
  state() {
    return {
      addBranchModalOpen: false,
      editBranchModalOpen: false,
      deleteBranchModalOpen: false,
      selectedBranch: null
    }
  },
  actions: {
    handleAddBranchModal() {      
      this.addBranchModalOpen = !this.addBranchModalOpen
    }
  }
})