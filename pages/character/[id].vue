<template>
  <section class="flex flex-col w-full max-w-[1224px] mx-auto gap-8">

    <div v-if="pending" class="text-center">
      <p>Carregando...</p>
    </div>

    <div v-else-if="error" class="text-center text-red-500">
      <p>Erro ao carregar personagem: {{ error.message }}</p>
    </div>

    <div v-else-if="data" class="flex p-14">

      <div class="w-[30%]">
        <img :src="data.image" class="object-cover rounded-lg">
      </div>

      <div class="w-[70%] flex flex-col gap-8">
        <div class="flex gap-5">
          <p class="text-5xl font-bold">
            {{ data.name }}
          </p>
          <span>
            <IconsHeartFilled v-if="data.status === 'Alive'" />
            <IconsHeartOutlined v-else />
          </span>
        </div>

        <div class="flex gap-2 text-xl items-center">
          <IconsPlay :color="isDark ? '#fff' : '#000'" />
          <p>Participou de {{ data.episode?.length || 0 }} episódios</p>
        </div>

        <div class="flex gap-6 text-2xl">
          <div class="flex gap-2 items-center">
            <IconsPulse />
            <p>
              {{ data.status === "Alive" ? "Vivo" : "Morto" }}
            </p>
          </div>

           <div class="flex gap-2 items-center">
            <IconsAlien :color="isDark ? '#fff' : '#000'" />
             <p>{{ data.species === "Human" ? "Humano" : "Alien" }}</p>
           </div>

            <div class="flex gap-2 items-center">
              <IconsGenderMale v-if="data.gender === 'Male'" :color="isDark ? '#fff' : '#000'"/>
              <IconsGenderFemale v-else :color="isDark ? '#fff' : '#000'"/>
              <p>{{ data.gender === "Male" ? "Masculino" : "Feminino" }}</p>
            </div>

        </div>

        <div class="flex gap-8 justify-end">
          <Card class="flex-col items-center max-w-[140px] relative gap-[4px]">
            <IconsPlanet class="top-[-32px] absolute" />
            <p>Planeta</p>
            <p class="text-[#11B0C8] text-center">{{ data.origin.name }}</p>
            <span>
              <IconsHeartFilled v-if="data.status === 'Alive'" />
              <IconsHeartOutlined v-else />
            </span>
          </Card>

          <Card class="flex-col items-center max-w-[140px] relative">
            <IconsMap class="top-[-35px] absolute" />
            <p class="text-center">{{ data.location.name }}</p>
            <span>
              <IconsHeartFilled v-if="data.status === 'Alive'" />
              <IconsHeartOutlined v-else />
            </span>
          </Card>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { useTheme } from '../composables/useTheme';

const {isDark} = useTheme()
const route = useRoute();
const characterId = route.params.id // Obtém o ID do personagem da rota

const { data, pending, error } = await useFetch(`https://rickandmortyapi.com/api/character/${characterId}`);
</script>