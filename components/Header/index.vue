<template>
  <section class="flex flex-col w-full px-28 pt-10 mx-auto gap-8 dark:bg-black bg-white border-b-2 border-[#11B0C8] dark:border-none">
    <IconsLogo />

    <div class="flex justify-between">
      <div class="flex flex-col gap-8 w-[30%]">
        <p class="text-5xl font-bold text-black dark:text-white">Saiba tudo em um só <span class="text-[#11B0C8]">lugar</span></p>
        <p class="text-[#313234] dark:text-white">Personagens. localizações, episódios e muito mais</p>

        <div class="flex gap-4 items-center">
          <ThemeButton label="Claro" bgColor="bg-[#11B0C8]" :isActive="!isDark" @click="setTheme('light')"/>
          <ThemeButton label="Escuro" bgColor="bg-[#313234]" :isActive="isDark" @click="setTheme('dark')" />
        </div>

      </div>
      <div>
        <img v-if="isDark" src="/images/HighlightImage-dark.png" />
        <img v-else src="/images/HighlightImage-light.png" />
      </div>
    </div>
    
  </section>
</template>

<script setup>
import { useTheme } from '~/pages/composables/useTheme';

const { isDark, setTheme, initTheme } = useTheme()

onMounted(() => {
  initTheme()
}) // Inicia o tema quando o componente é montado

</script>