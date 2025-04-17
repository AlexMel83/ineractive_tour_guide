<script setup>
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>

<template>
  <ClientOnly>
    <button
      :style="{ color: 'white !important' }"
      class="hover:scale-110"
      background="white"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    >
      <template v-if="isDark">
        <IconsMoon />
      </template>
      <template v-else>
        <IconsSun />
      </template>
    </button>
  </ClientOnly>
</template>
