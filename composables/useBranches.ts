export default function useBranches() {

  // Branches list
  const useBranchesList = () => useState('branchesList', () => null)
  const branchesList = useBranchesList();
  const handleUpdateBranchesList = (data: any) => {
    branchesList.value = data
  }

  // Add branch
  const useAddBranch = () => useState('addBranch', () => ({ modalOpen: false }))
  const addBranch = useAddBranch();
  const handleAddBranchModal = () => {
    addBranch.value.modalOpen = !addBranch.value.modalOpen
  }

  // Edit branch
  const useEditBranch = () => useState('editBranch', () => ({ modalOpen: false, data: null }))
  const editBranch = useEditBranch();
  const handleEditBranchModal = (data?: any) => {    
    editBranch.value.modalOpen = !editBranch.value.modalOpen
    editBranch.value.data = data
  }

  // Delete branch
  const useDeleteBranch = () => useState('deleteBranch', () => ({ modalOpen: false, data: null }))
  const deleteBranch = useDeleteBranch();
  const handleDeleteBranchModal = (data?: any) => {
    deleteBranch.value.modalOpen = !deleteBranch.value.modalOpen
    deleteBranch.value.data = data
  }

  return {
    branchesList,
    handleUpdateBranchesList,

    addBranch,
    handleAddBranchModal,

    editBranch,
    handleEditBranchModal,

    deleteBranch,
    handleDeleteBranchModal
  }

}
