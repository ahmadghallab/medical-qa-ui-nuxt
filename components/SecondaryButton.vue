<script setup>

const emits = defineEmits(['onClick'])

const handleClick = () => {
  emits('onClick');
}

</script>

<template>
  <button type="button"
    class="inline-flex justify-center border border-transparent bg-violet-100 px-4 py-2 rounded-md text-sm font-medium text-violet-700 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
    @click="handleClick">
    <slot />
  </button>
</template>