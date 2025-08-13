<template>
  <section class="flex flex-col w-full max-w-[1224px] mx-auto gap-8">
    <CustomTitle title="Episódios" />

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <Card v-for="currentEpisode in data.results" class="flex flex-col justify-between">
        <div class="flex items-center gap-2">
          <IconsPlay class="flex-[0_0_24px]" :color="isDark ? '#fff' : '#000'" />
          <p>{{ currentEpisode.name }} / {{ currentEpisode.episode }}</p>
        </div>

        <div class="flex justify-between items-center gap-2">
          <DetailsButton :actionUrl="currentEpisode.url" />
          <IconsHeartFilled :width="32" :height="32" />
        </div>
      </Card>
    </div>
  </section>
</template>

<script setup>
import { useTheme } from '~/pages/composables/useTheme';

const {isDark} = useTheme()

const { data } = await useFetch("https://rickandmortyapi.com/api/episode");
</script>
