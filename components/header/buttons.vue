<template>
  <div :class="customClass">
    <div class="flex items-center px-1">
      <div class="flex">
        <button
          v-for="(lang, index) in locales"
          :key="lang.code"
          :class="{ 'text-custom-orange transition-colors': lang.code === currentLocale }"
          class="flex items-center"
          aria-label="change language"
          @click="changeLanguage(lang.code)"
        >
          <span>{{ lang.name }}</span>
          <span v-if="index < locales.length - 1" class="text-white px-1">|</span>
        </button>
        <button
          class="md:hidden text-custom-orange relative w-9 h-9 flex flex-col justify-center items-center gap-1 ml-5"
          @click="$emit('toggleMenu')"
        >
          <span
            :class="[
              'block w-7 h-1 bg-custom-orange rounded transition-all duration-300',
              isMenuOpen ? 'rotate-45 translate-y-2' : '',
            ]"
          />
          <span
            :class="[
              'block w-7 h-1 bg-custom-orange rounded transition-all duration-300',
              isMenuOpen ? 'opacity-0' : 'opacity-100',
            ]"
          />
          <span
            :class="[
              'block w-7 h-1 bg-custom-orange rounded transition-all duration-300',
              isMenuOpen ? '-rotate-45 -translate-y-2' : '',
            ]"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  // customClass: String,
  isMenuOpen: Boolean,
});

defineEmits(['toggleMenu']);

const router = useRouter();

// i18n
const { locale, locales } = useI18n();
const currentLocale = computed(() => locale.value);

const changeLanguage = async (langCode) => {
  try {
    const currentRoute = router.currentRoute.value;
    const newPath =
      langCode === 'uk'
        ? currentRoute.fullPath.replace(/^\/(en|uk)/, '')
        : `/${langCode}${currentRoute.fullPath.replace(/^\/(en|uk)/, '')}`;
    locale.value = langCode;
    await router.push(newPath);
  } catch (error) {
    console.error('Failed to change language:', error);
  }
};
</script>
