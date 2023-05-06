<template>
  <NuxtLayout name="default">
    <div class="flex flex-col min-h-screen">
      <TheHeader />
      <main class="max-w-5xl w-full mx-auto px-5 py-7 flex flex-col">
        <NuxtPage />
      </main>
      <TheFooter />
    </div>
  </NuxtLayout>
</template>

<script setup>

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
  }
})

</script>