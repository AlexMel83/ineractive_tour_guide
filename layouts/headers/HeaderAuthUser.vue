<template>
  <div :class="{ 'header-main': true, 'home-page': isHomePage }">
    <div class="header-wrapper">
      <div class="logo-container">
        <div class="cursor-pointer logo" @click="hideMenu">
          <NuxtLink to="/" class="inline-block relative">
            <div class="absolute inset-0 bg-white blur-sm" />
            <img src="/cfhope-logo-tranparent.png" alt="logo" class="relative h-auto w-12 object-contain" />
          </NuxtLink>
        </div>
        <div class="header-buttons">
          <div class="auth-user-name">
            <UserName />
          </div>
          <div class="pr-2">
            <div class="flex items-center px-1">
              <button
                v-for="(lang, index) in locales"
                :key="lang.code"
                :class="{
                  'text-primary-300 hover:text-primary-500': lang.code === currentLocale,
                }"
                class="flex items-center"
                @click="changeLanguage(lang.code)"
              >
                <span class="hover:scale-110">{{ lang.name }}</span>
                <span v-if="index < locales.length - 1" class="text-white px-1">|</span>
              </button>
            </div>
          </div>
          <ColorMode class="color-mode" />
          <button icon class="burger" @click="toggleMenu">
            <IconsBarsIcon v-if="!isMenuOpen" class="h-8 w-8 hover:scale-110" />
            <IconsCloseIcon v-else class="h-8 w-8 text-white hover:scale-110 hover:text-white" />
          </button>
          <button icon class="search-icon mx-3" :class="{ 'text-primary-300': isSearchVisible }" @click="toggleSearch">
            <IconsMagnifyingGlassIcon class="h-6 w-6" />
          </button>
        </div>
      </div>
      <div v-if="isMenuOpen" class="menu">
        <div class="mobile-auth-user-name">
          <UserName />
        </div>
      </div>
      <p class="text-center text-gray-200 mb-2 text-xl">
        <span class="font-bold">{{ $t('header.title') }}</span>
        {{ $t('header.subtitle') }}
      </p>
      <div v-if="isSearchVisible" class="search-container">
        <SearchInput />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useAppStore } from '~/stores/app.store';
import SearchInput from './SearchInput.vue';
import ColorMode from './ColorMode.vue';
import UserName from './UserName.vue';

const store = useAppStore();

const route = useRoute();
const isHomePage = computed(() => route.path === '/');
const isMenuOpen = computed(() => store.menuOpen);
const isSearchVisible = ref(false);

//i18n
const { locale, locales } = useI18n();
const currentLocale = computed(() => locale.value);
const changeLanguage = (langCode) => {
  locale.value = langCode;
};

const hideMenu = () => {
  store.menuOpen = false;
};

const toggleMenu = () => {
  store.menuOpen = !store.menuOpen;
};

const toggleSearch = () => {
  isSearchVisible.value = !isSearchVisible.value;
};
</script>

<style scoped>
.search-container,
.color-mode {
  margin-right: 10px;
}
.search-icon:hover {
  transform: scale(1.1);
}

.header-main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--header-bg);
  color: var(--white-color);
  position: relative;
}

.logo img {
  width: 50px;
  height: 30px;
}

.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px;
  padding-bottom: 0;
}

.header-btn {
  margin-left: 24px;
  height: 30px;
  display: none;
  text-transform: capitalize;
}

.burger {
  margin-left: 15px;
  color: white;
  background-color: transparent;
  box-shadow: none;
}

.menu {
  position: relative;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--header-bg);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px 0 0 0;
}

.lang {
  margin-right: 30px;
}

.header-menu-btn {
  width: 100%;
  max-width: 343px;
  height: 46px;
  text-transform: capitalize;
}

.header-menu-btn:hover {
  color: var(--btn-border);
}
.header-menu-btn:active {
  border-radius: 4px;
  border: 1px solid var(--btn-border);
  background: var(--white-color);
}

.header-menu-btn:not(:last-child) {
  margin-bottom: 24px;
}

.header-buttons {
  height: 30px;
  display: flex;
  align-items: center;
}

.header-text {
  display: none;
}

.lang-active {
  font-weight: 700;
}

.bold {
  font-size: 2.25rem;
  font-weight: 900;
}
.is-user {
  margin-right: 20px;
  font-size: 16px;
}
.is-user span {
  margin-right: 5px;
}

.auth-user-name {
  display: none;
}
.mobile-auth-user-name {
  margin-bottom: 50px;
}

@media (min-width: 768px) {
  .header-main.home-page {
    background-image: url('~/assets/header_bg.png');
    background-size: cover;
    background-loading: lazy;
    content-visibility: auto;
  }
  .header-main.home-page .header-text {
    display: block;
    text-align: center;
    font-size: 1.3rem;
    max-width: 1092px;
    margin: 0 auto;
  }

  .header-text {
    display: none;
  }

  .logo img {
    width: 84px;
    height: 50px;
  }

  .burger {
    display: none;
  }

  .header-btn {
    display: block;
    letter-spacing: normal;
    font-size: 16px;
    padding: 0 12px;
  }

  .header-btn:hover {
    background-color: var(--white-color);
    color: var(--btn-border);
  }

  .header-buttons {
    display: flex;
    align-items: center;
  }
  .menu {
    display: none;
  }

  .auth-user-name {
    display: block;
    margin-right: 20px;
  }

  @media (min-width: 1024px) {
    .logo-container {
      padding: 32px 64px;
    }
  }
}
</style>
