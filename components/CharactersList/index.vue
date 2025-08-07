<template>
  <section class="flex flex-col w-full max-w-[1224px] mx-auto gap-8">
    <CustomTitle title="Personagens" />

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
      <Card v-for="currentCharacter in data.results" class="justify-between">
        <img :src="currentCharacter.image" class="rounded-2xl" />
        
        <div class="grid grid-cols-[1fr,48px]">
          <!-- 1 coluna com 1fr e 1 coluna com 48px -->
          <div class="flex flex-col gap-1">
            <p class="text-base font-bold">{{ currentCharacter.name }}</p>
            <div class="flex flex-col text-base">
              <p>
                {{ currentCharacter.status === "Alive" ? "Vivo" : "Morto" }}
              </p>
              <p>{{ currentCharacter.species === "Human" ? "Humano" : "Alien" }}</p>
              <p>{{ currentCharacter.origin.name }}</p>
            </div>
          </div>
          <span>
            <IconsHeartFilled v-if="currentCharacter.status === 'Alive'" />
            <IconsHeartOutlined v-else />
          </span>
        </div>

        <DetailsButton :actionUrl="`/character/${currentCharacter.id}`" />
        <!-- Link para ver detalhes -->
      </Card>
    </div>
  </section>
</template>

<script setup>
const { data } = await useFetch("https://rickandmortyapi.com/api/character");
</script>
