export default function useBranches() {
  const useAddBranchModal = () => useState<boolean>('addBranchModal', () => false)
  const addBranchModal = useAddBranchModal();

  const handleAddBranchModal = () => {
    addBranchModal.value = !addBranchModal.value
  }

  return {
    addBranchModal,
    handleAddBranchModal
  }
}
