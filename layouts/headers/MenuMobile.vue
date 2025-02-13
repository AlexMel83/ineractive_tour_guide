<template>
  <div v-auto-animate class="menu-group mx-auto">
    <HeaderButtons
      class="flex md:hidden"
      :is-search-visible="isSearchVisible"
      @toggle-search="toggleSearch"
      @open-login-modal="openLoginModal"
    />
    <button
      v-if="!isAuthed"
      class="cabinet flex text-white rounded hover:scale-105 focus:outline-none min-w-[70px] py-2 ml-auto"
      aria-label="cabinet"
      @click="!isLoginMobaileOpen ? (isLoginMobaileOpen = true) : (isLoginMobaileOpen = false)"
    >
      {{ isLoginMobaileOpen ? $t('header.autorization_close') : $t('header.enter') }}
      <IconsUser v-if="!isLoginMobaileOpen" class="mx-auto h-5 w-5" />
      <IconsCloseIcon v-else class="mx-1 h-6 w-6 text-white" />
    </button>
    <LoginRegistrationMobile v-if="isLoginMobaileOpen" />
    <div v-if="isSearchVisible" class="search-container my-2">
      <SearchInput />
    </div>
    <ul class="flex flex-col p-0 m-0 list-none space-y-2 text-right mt-5">
      <!-- Home -->
      <li class="text-sm sm:text-base lg:text-lg">
        <NuxtLink
          class="hover:text-primary-300 p-1 inline-block transition-colors border-b-2 border-transparent hover:border-primary-300"
          to="/"
        >
          {{ $t('menu.home') }}
        </NuxtLink>
      </li>
      <!-- About -->
      <li v-auto-animate class="relative text-sm sm:text-base lg:text-lg">
        <div class="flex">
          <NuxtLink
            class="hover:text-primary-300 p-1 inline-block transition-colors border-b-2 border-transparent hover:border-primary-300 ml-auto"
            to="/about"
          >
            {{ $t('menu.about') }}
          </NuxtLink>
          <button aria-label="submenu" class="ml-2" @click="isMenuAboutOpen = !isMenuAboutOpen">
            <CollapsedIcon v-if="!isMenuAboutOpen" />
            <ExpandedIcon v-if="isMenuAboutOpen" class="text-primary-300" />
          </button>
        </div>
        <ul v-if="isMenuAboutOpen" class="space-y-2 pl-4 mt-2 bg-gray-800 rounded-md p-2 ml-auto">
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.mission') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.history') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.team') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.partners') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.contacts') }}
            </NuxtLink>
          </li>
        </ul>
      </li>
      <!-- Blog -->
      <li class="text-sm sm:text-base lg:text-lg">
        <NuxtLink
          class="hover:text-primary-300 p-1 inline-block transition-colors border-b-2 border-transparent hover:border-primary-300"
          to="/page_under_construction"
        >
          {{ $t('menu.blog') }}
        </NuxtLink>
      </li>
      <!-- objects -->
      <li v-auto-animate class="relative text-sm sm:text-base lg:text-lg">
        <div class="flex">
          <NuxtLink
            class="hover:text-primary-300 p-1 inline-block transition-colors border-b-2 border-transparent hover:border-primary-300 ml-auto"
            to="/page_under_construction"
          >
            {{ $t('menu.objects') }}
          </NuxtLink>
          <button aria-label="submenu" class="ml-2" @click="isMenuResourcesOpen = !isMenuResourcesOpen">
            <CollapsedIcon v-if="!isMenuResourcesOpen" />
            <ExpandedIcon v-if="isMenuResourcesOpen" class="text-primary-300" />
          </button>
        </div>
        <ul v-if="isMenuResourcesOpen" class="space-y-2 pl-4 mt-2 bg-gray-800 rounded-md p-2 ml-auto">
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.routes') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.heritage') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.industry') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.nature') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.transport') }}
            </NuxtLink>
          </li>
        </ul>
      </li>
      <!-- Join -->
      <li v-auto-animate class="relative text-sm sm:text-base lg:text-lg">
        <div class="flex">
          <NuxtLink
            class="hover:text-primary-300 p-1 inline-block transition-colors border-b-2 border-transparent hover:border-primary-300 ml-auto"
            to="/join"
          >
            {{ $t('menu.join') }}
          </NuxtLink>
          <button aria-label="submenu" class="ml-2" @click="isMenuJoinOpen = !isMenuJoinOpen">
            <CollapsedIcon v-if="!isMenuJoinOpen" />
            <ExpandedIcon v-if="isMenuJoinOpen" class="text-primary-300" />
          </button>
        </div>
        <ul v-if="isMenuJoinOpen" class="space-y-2 pl-4 mt-2 bg-gray-800 rounded-md p-2 ml-auto">
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.services') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.feedback') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.donate') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.volunteer') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.newsletter') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors"
              to="/page_under_construction"
            >
              {{ $t('menu.collaboration') }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import CollapsedIcon from '~/components/icons/CollapsedIcon.vue';
import ExpandedIcon from '~/components/icons/ExpandedIcon.vue';
import LoginRegistrationMobile from './LoginRegistrationMobile.vue';
import { useAuthStore } from '~/stores/app.store';
import HeaderButtons from './HeaderButtons.vue';
import SearchInput from './SearchInput.vue';

const isAuthed = computed(() => authStore.isAuthed);
const loginRegistrationRef = ref(null);
const isMenuResourcesOpen = ref(false);
const isMenuAboutOpen = ref(false);
const isMenuJoinOpen = ref(false);
const authStore = useAuthStore();
const isLoginMobaileOpen = ref(false);

const isSearchVisible = ref(false);
const toggleSearch = () => {
  isSearchVisible.value = !isSearchVisible.value;
};
const openLoginModal = () => {
  if (loginRegistrationRef.value) {
    loginRegistrationRef.value.openModal();
  }
};
</script>
