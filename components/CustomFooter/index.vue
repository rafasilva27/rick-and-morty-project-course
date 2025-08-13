<template>
  <section class="flex flex-col w-full max-w-[1224px] mx-auto gap-8 py-9">

    <div class="flex justify-between items-center">
      <IconsLogo />
      <div @click="scrollToTop" class="flex gap-2 items-center cursor-pointer">
        <p class="text-sm text-[#313234] dark:text-white">Voltar ao topo</p>
        <IconsArrowUp />
      </div>
    </div>

    <div class="border-t-2 border-[#D9D9D9]">
      <div class="flex justify-between items-center pt-3 text-sm">
        <p>
          © 2025
        </p>
        <p> <span class="text-[#11B0C8]">
            <>
          </span>Desenvolvido por <span class="text-[#11B0C8]">Rafaela Silva</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTheme } from '~/pages/composables/useTheme';

const {isDark} = useTheme()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

</script>