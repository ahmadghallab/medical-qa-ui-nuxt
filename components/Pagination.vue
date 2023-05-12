<script setup>

const perPage = 25;

const { modelValue } = defineProps({
  modelValue: {
    type: Number,
    default: 1
  },
  count: {
    type: Number,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const handleClick = (val) => {
  emit('update:modelValue', val)
}

</script>

<template>
  <div class="flex gap-2 justify-end" v-if="count">
    <Button @onClick="handleClick(modelValue - 1)" :disabled="modelValue === 1">Previous</Button>
    <Button @onClick="handleClick(modelValue + 1)" :disabled="modelValue === Math.ceil(count / perPage)">Next</Button>
  </div>
</template>