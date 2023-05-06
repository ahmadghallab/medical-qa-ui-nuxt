<script setup>

const props = defineProps({
  branch: Object
})

</script>

<template>
  <div class="bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
    <h2 class="text-base text-slate-900 font-semibold dark:text-slate-300">
      {{ props.branch.name }}
    </h2>
  </div>
</template>