<template>
  <section class="flex flex-col w-full max-w-[1224px] mx-auto gap-8">

    <div v-if="data">
      <IconsPlay :width=72 :height=72 />
      <div class="flex gap-4 items-center">
        <p class="font-bold text-5xl">{{ data.name }}</p>
        <IconsHeartOutlined />
      </div>

      <div class="flex gap-6">
        <div class="flex gap-2 items-center">
          <IconsCalendar />
          <p>{{ data.air_date }}</p>
        </div>
        <div class="flex gap-2 items-center">
          <IconsList />
          <p>{{ data.episode }}</p>
        </div>
      </div>

      <div class="flex gap-2 items-center">
        <IconsSmileyFace />
        <p>{{ data.characters?.length || 0 }} Personagens participaram desse episódio</p>
      </div>
    </div>

  </section>
</template>

<script setup>

const route = useRoute();
const episodeId = route.params.id

const { data, pending, error } = await useFetch(`https://rickandmortyapi.com/api/episode/${episodeId}`);

</script>