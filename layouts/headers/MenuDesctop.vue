<template>
  <div class="menu-group mx-auto">
    <ul class="flex justify-around p-0 m-0 list-none">
      <li class="relative mx-1 lg:mx-2 text-sm sm:text-base lg:text-lg">
        <NuxtLink
          class="hover:text-primary-300 p-1 inline-block transition-colors border-b-2 border-transparent hover:border-primary-300"
          to="/"
        >
          {{ $t('menu.home') }}
        </NuxtLink>
      </li>
      <li
        class="relative mx-1 lg:mx-2 flex items-center group text-sm sm:text-base lg:text-lg"
        @mouseenter="isMenuAboutOpen = true"
        @mouseleave="isMenuAboutOpen = false"
      >
        <NuxtLink
          class="hover:text-primary-300 whitespace-nowrap p-1 inline-block transition-colors border-b-2 border-transparent group-hover:border-primary-300"
          to="/about"
        >
          {{ $t('menu.about') }}
        </NuxtLink>
        <ul
          class="absolute z-50 right-3 top-full hidden bg-gray-800 shadow-md rounded-md p-1 group-hover:block transition-all duration-300"
        >
          <li>
            <NuxtLink
              class="block p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors border-b-2 border-transparent hover:border-primary-300"
              to="/page_under_construction"
            >
              {{ $t('menu.reporting') }}
            </NuxtLink>
          </li>
        </ul>
        <CollapsedIcon v-if="!isMenuAboutOpen" />
        <ExpandedIcon v-if="isMenuAboutOpen" class="text-primary-300" />
      </li>
      <li class="relative mx-1 lg:mx-2 text-sm sm:text-base lg:text-lg">
        <NuxtLink
          class="hover:text-primary-300 p-1 inline-block transition-colors border-b-2 border-transparent hover:border-primary-300"
          to="/page_under_construction"
        >
          {{ $t('menu.blog') }}
        </NuxtLink>
      </li>
      <li
        class="relative mx-1 lg:mx-2 flex items-center group text-sm sm:text-base lg:text-lg"
        @mouseenter="isMenuResourcesOpen = true"
        @mouseleave="isMenuResourcesOpen = false"
      >
        <NuxtLink
          class="hover:text-primary-300 p-1 inline-block transition-colors border-b-2 border-transparent group-hover:border-primary-300"
          to="/page_under_construction"
        >
          {{ $t('menu.resources') }}
        </NuxtLink>
        <ul
          class="absolute z-50 left-1/2 top-full hidden bg-gray-800 shadow-md rounded-md p-1 group-hover:block transition-all duration-300 transform -translate-x-1/2"
        >
          <li>
            <NuxtLink
              class="block whitespace-nowrap p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors border-b-2 border-transparent hover:border-primary-300"
              to="/page_under_construction"
            >
              {{ $t('menu.housing') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block whitespace-nowrap p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors border-b-2 border-transparent hover:border-primary-300"
              to="/page_under_construction"
            >
              {{ $t('menu.employment') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block whitespace-nowrap p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors border-b-2 border-transparent hover:border-primary-300"
              to="/page_under_construction"
            >
              {{ $t('menu.support') }}
            </NuxtLink>
          </li>
        </ul>
        <CollapsedIcon v-if="!isMenuResourcesOpen" />
        <ExpandedIcon v-if="isMenuResourcesOpen" class="text-primary-300" />
      </li>
      <li
        class="relative mx-1 lg:mx-2 flex items-center group text-sm sm:text-base lg:text-lg"
        @mouseenter="isMenuJoinOpen = true"
        @mouseleave="isMenuJoinOpen = false"
      >
        <NuxtLink
          class="hover:text-primary-300 whitespace-nowrap p-1 inline-block transition-colors border-b-2 border-transparent group-hover:border-primary-300"
          to="/join"
        >
          {{ $t('menu.join') }}
        </NuxtLink>
        <ul
          class="absolute z-50 left-1/2 top-full hidden bg-gray-800 shadow-md rounded-md p-1 group-hover:block transition-all duration-300 transform -translate-x-1/2"
        >
          <li>
            <NuxtLink
              class="block whitespace-nowrap p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors border-b-2 border-transparent hover:border-primary-300"
              to="/page_under_construction"
            >
              {{ $t('menu.donate') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block whitespace-nowrap p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors border-b-2 border-transparent hover:border-primary-300"
              to="/page_under_construction"
            >
              {{ $t('menu.volunteer') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="block whitespace-nowrap p-1 hover:bg-gray-700 hover:text-primary-300 transition-colors border-b-2 border-transparent hover:border-primary-300"
              to="/page_under_construction"
            >
              {{ $t('menu.newsletter') }}
            </NuxtLink>
          </li>
        </ul>
        <CollapsedIcon v-if="!isMenuJoinOpen" />
        <ExpandedIcon v-if="isMenuJoinOpen" class="text-primary-300" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import CollapsedIcon from '~/components/icons/CollapsedIcon.vue';
import ExpandedIcon from '~/components/icons/ExpandedIcon.vue';

const isMenuResourcesOpen = ref(false);
const isMenuAboutOpen = ref(false);
const isMenuJoinOpen = ref(false);
</script>
