<template>
  <div class="flex gap-2">
    <div
      class="bg-violet-700 dark:bg-violet-300 w-[5px] h-[5px] rounded-full grow-0 shrink-0 basis-auto animate-dots bounce1">
    </div>
    <div
      class="bg-violet-700 dark:bg-violet-300 w-[5px] h-[5px] rounded-full grow-0 shrink-0 basis-auto animate-dots bounce2">
    </div>
    <div class="bg-violet-700 dark:bg-violet-300 w-[5px] h-[5px] rounded-full grow-0 shrink-0 basis-auto animate-dots">
    </div>
  </div>
</template>

<style scoped>
.bounce1 {
  animation-delay: -0.32s;
}

.bounce2 {
  animation-delay: -0.16s;
}
</style>