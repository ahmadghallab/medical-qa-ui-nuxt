export default function useBranches() {

  // Branches list
  const useBranchesList = () => useState('branchesList', () => null)
  const branchesList = useBranchesList();
  const handleUpdateBranchesList = (data: any) => {
    branchesList.value = data
  }

  // Add branch
  const useAddBranchModal = () => useState('addBranchModal', () => false)
  const addBranchModal = useAddBranchModal();
  const handleAddBranchModal = () => {
    addBranchModal.value = !addBranchModal.value
  }

  return {
    branchesList,
    handleUpdateBranchesList,
    addBranchModal,
    handleAddBranchModal,
  }
}
