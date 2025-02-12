<template>
  <div class="header-buttons flex items-center justify-end gap-3 md:gap-1 px-1 text-sm sm:text-base lg:text-lg flex-1">
    <div class="languages_toggle flex md:flex-col items-start px-1">
      <button
        v-for="(lang, index) in locales"
        :key="lang.code"
        :class="{ 'text-primary-300 hover:text-primary-500': lang.code === currentLocale }"
        class="flex items-center w-full md:border-t md:border-white first:border-t-0"
        aria-label="chengelanguage"
        @click="changeLanguage(lang.code)"
      >
        <span class="hover:scale-110">{{ lang.name }}</span>
        <span v-if="index < locales.length - 1" class="md:hidden text-white px-1">|</span>
      </button>
    </div>
    <div class="flex md:flex-col items-center gap-3 md:gap-1">
      <ColorMode />
      <button
        icon
        class="search-icon"
        aria-label="search"
        :class="{ 'text-primary-300': isSearchVisible }"
        @click="toggleSearch"
      >
        <IconsMagnifyingGlassIcon class="hover:scale-110 h-5 w-5" />
      </button>
    </div>
    <button
      v-if="!isAuthed"
      class="cabinet hidden md:flex text-white rounded hover:scale-110 focus:outline-none min-w-[70px] py-2"
      aria-label="cabinet"
      @click="openLoginModal"
    >
      <IconsUser class="mx-auto h-5 w-5" /> {{ $t('header.enter') }}
    </button>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/app.store';
import ColorMode from './ColorMode.vue';
import { useI18n } from 'vue-i18n';

const emit = defineEmits(['toggle-search', 'open-login-modal']);
const isAuthed = computed(() => authStore.isAuthed);
const authStore = useAuthStore();
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
const openLoginModal = () => {
  emit('open-login-modal');
};

defineProps({
  isSearchVisible: Boolean,
});

const toggleSearch = () => {
  emit('toggle-search');
};
</script>
