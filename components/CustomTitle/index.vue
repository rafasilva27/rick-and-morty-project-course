<template>
   <header class="flex items-center gap-4">
      <h2 class="font-bold text-2xl">{{ title }}</h2>
      <button
        class="flex gap-2 px-4 py-2 items-center text-white bg-[#11B0C8] dark:bg-[#313234] rounded-3xl"
      >
        <IconsSquareForm />
        Ver todos
      </button>
    </header>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String // passando o título como prop
  }
});

</script>