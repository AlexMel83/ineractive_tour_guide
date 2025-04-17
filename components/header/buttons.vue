<template>
  <div class="flex items-center space-x-4">
    <!-- Переключатель языка -->
    <button
      class="text-custom-black dark:text-custom-white hover:text-custom-orange dark:hover:text-custom-orange transition-colors"
      @click="toggleLanguage"
    >
      {{ currentLocale.toUpperCase() === 'UK' ? 'ENG' : 'UKR' }}
    </button>

    <!-- Переключатель цветовой темы -->
    <button
      class="text-custom-black dark:text-custom-white hover:text-custom-orange dark:hover:text-custom-orange transition-colors"
      aria-label="Toggle dark mode"
      @click="appStore.toggleDarkMode"
    >
      <i :class="`fas ${appStore.isDark ? 'fa-sun' : 'fa-moon'}`" />
    </button>

    <!-- Кнопка поиска -->
    <button
      class="transition-colors"
      :class="{
        'text-custom-orange': localSearchVisible,
        'text-custom-black dark:text-custom-white hover:text-custom-orange dark:hover:text-custom-orange':
          !localSearchVisible,
      }"
      aria-label="Search"
      @click="toggleSearch"
    >
      <i class="fas fa-search" />
    </button>

    <!-- Кнопка личного кабинета -->
    <button
      class="text-custom-black dark:text-custom-white hover:text-custom-orange dark:hover:text-custom-orange transition-colors"
      aria-label="User cabinet"
      @click="openLoginModal"
    >
      <i :class="`fas ${isAuthed ? 'fa-user-check' : 'fa-user'}`" />
    </button>

    <!-- Кнопка мобильного меню -->
    <button
      class="md:hidden transition-colors"
      :class="{
        'text-custom-orange': isMenuOpen,
        'text-custom-black dark:text-custom-white hover:text-custom-orange dark:hover:text-custom-orange': !isMenuOpen,
      }"
      @click="toggleMenu"
    >
      <i :class="`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`" />
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAppStore } from '~/stores/app.store';
import { useAuthStore } from '~/stores/app.store';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const props = defineProps({
  isMenuOpen: {
    type: Boolean,
    default: false,
  },
  isSearchVisible: Boolean,
});

const emit = defineEmits(['toggleMenu', 'toggle-search', 'open-login-modal']);

const appStore = useAppStore();
const authStore = useAuthStore();
const isAuthed = computed(() => authStore.isAuthed);
const { locale } = useI18n();
const currentLocale = computed(() => locale.value);
const router = useRouter();
const localSearchVisible = ref(props.isSearchVisible);

watchEffect(() => {
  localSearchVisible.value = props.isSearchVisible;
});

// Синхронізуємо клас dark із станом isDark при завантаженні на клієнті
onMounted(() => {
  if (process.client) {
    if (appStore.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
});

const toggleLanguage = async () => {
  const newLang = currentLocale.value === 'uk' ? 'en' : 'uk';
  try {
    const currentRoute = router.currentRoute.value;
    const newPath =
      newLang === 'uk'
        ? currentRoute.fullPath.replace(/^\/(en|uk)/, '')
        : `/${newLang}${currentRoute.fullPath.replace(/^\/(en|uk)/, '')}`;
    locale.value = newLang;
    await router.push(newPath);
  } catch (error) {
    console.error('Failed to change language:', error);
  }
};

const toggleSearch = () => {
  localSearchVisible.value = !localSearchVisible.value;
  emit('toggle-search', localSearchVisible.value);
};
const openLoginModal = () => emit('open-login-modal');
const toggleMenu = () => emit('toggleMenu');
</script>
