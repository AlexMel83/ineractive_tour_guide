<template>
  <div class="header-main text-white bg-[var(--header-bg)] sticky top-0 z-50">
    <div class="header-wrapper">
      <!-- Используем flex с равномерным распределением -->
      <div
        class="heder-container flex items-center justify-between w-full min-h-[50px] sm:min-h-[60px] lg:min-h-[70px] px-2"
      >
        <!-- Логотип -->
        <div class="logo pl-2 cursor-pointer flex items-center space-x-2 flex-grow-0 max-w-[130px]" @click="hideMenu">
          <NuxtLink to="/" class="relative flex items-center space-x-2">
            <div class="text-start flex flex-col text-gray-200 text-sm">
              <div class="font-bold whitespace-normal">
                {{ $t('header.title') }}
              </div>
              <!-- <span class="truncate">{{ $t('header.subtitle') }}</span> -->
            </div>
          </NuxtLink>
        </div>
        <MenuDesctop class="hidden md:flex flex-grow flex-wrap justify-center min-w-[150px] sm:min-w-[200px]" />
        <!-- Кнопки справа -->
        <HeaderButtons
          class="hidden md:flex flex-grow-0"
          :is-search-visible="isSearchVisible"
          @toggle-search="toggleSearch"
          @open-login-modal="openLoginModal"
        />
        <!-- Мобильное меню -->
        <div class="burger md:hidden">
          <button aria-label="mobilemenubutton" @click="toggleMenu">
            <IconsBarsIcon v-if="!isMenuOpen" class="h-8 w-8 hover:scale-110" />
            <IconsCloseIcon v-else class="h-8 w-8 text-white hover:scale-110 hover:text-white" />
          </button>
          <MenuMobile
            v-if="isMenuOpen"
            class="transition-all duration-300 ease-in-out transform absolute left-0 right-0 bg-[var(--header-bg)] z-10 top-full p-4"
          />
        </div>
      </div>
      <div>
        <LoginRegistration ref="loginRegistrationRef" @modal-closed="handleModalClosed" />
      </div>
      <div v-if="isSearchVisible" class="search-container">
        <SearchInput />
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginRegistration from '@/components/modal/LoginRegistration.vue';
import { useAppStore } from '~/stores/app.store';
import HeaderButtons from './HeaderButtons.vue';
import SearchInput from './SearchInput.vue';
import MenuDesctop from './MenuDesctop.vue';
import MenuMobile from './MenuMobile.vue';

const isSearchVisible = ref(false);
const store = useAppStore();

const toggleSearch = () => {
  isSearchVisible.value = !isSearchVisible.value;
};

const loginRegistrationRef = ref(null);
const menuOpen = ref(false);

const isMenuOpen = computed(() => store.menuOpen);

const hideMenu = () => {
  store.menuOpen = false;
};

const toggleMenu = () => {
  store.menuOpen = !store.menuOpen;
};

const handleModalClosed = () => {
  menuOpen.value = false;
};

const openLoginModal = () => {
  if (loginRegistrationRef.value) {
    loginRegistrationRef.value.openModal();
  }
};
</script>
