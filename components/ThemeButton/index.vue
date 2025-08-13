<template>
  <button class="self-end rounded-3xl py-1 px-3 flex gap-2 text-sm items-center text-white"
    :class="[bgColor]" @click="$emit('click')">
    <IconsMoon v-if="label === 'Escuro'" />
    <IconsSun v-else />
    {{ label }}
  </button>
</template>

<script setup>

const props = defineProps({
  label: String,
  bgColor: String,
  isActive: Boolean
})

defineEmits(['click'])

</script>