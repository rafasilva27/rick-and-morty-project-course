<template>
  <NuxtLink
    :to="actionUrl"
    target="_blank"
    class="self-end bg-[#11B0C8] rounded-3xl py-1 px-3 flex gap-2 text-sm items-center text-white"
  >
    <IconsInfo />
    Saiba mais
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  actionUrl: String, // passando a URL de ação como prop
  required: true,
});
</script>
