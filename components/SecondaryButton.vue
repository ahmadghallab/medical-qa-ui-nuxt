<script setup>

const { variant } = defineProps({
  variant: {
    type: String,
    default: 'default'
  }
})

const emits = defineEmits(['onClick'])

const handleClick = () => {
  emits('onClick');
}

</script>

<template>
  <button type="button"
    class="inline-flex justify-center border border-transparent  px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    :class="{
      'bg-violet-100 text-violet-700 hover:bg-violet-200 focus-visible:ring-violet-500': variant === 'default',
      'bg-rose-100 text-rose-700 hover:bg-rose-200 focus-visible:ring-rose-500': variant === 'danger'
    }" @click="handleClick">
    <slot />
  </button>
</template>