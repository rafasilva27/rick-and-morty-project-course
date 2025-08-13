<template>
  <main class="dark:text-white py-4 dark:bg-[#1e1e1e] flex flex-col gap-8">
    <!-- Páginas de conteúdo -->
     <NuxtPage />
     
    <!-- Footer -->
    <CustomFooter />
  </main>
</template>

<script setup>
// Aplica o tema antes de qualquer renderização
useHead({
  script: [
    {
      innerHTML: `
        (function() {
          const theme = localStorage.getItem('theme');
          if (theme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        })();
      `,
      type: 'text/javascript'
    }
  ]
})
</script>