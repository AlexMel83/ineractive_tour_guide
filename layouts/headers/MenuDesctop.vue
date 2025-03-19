<template>
  <div class="menu-group mx-auto">
    <ul class="flex flex-wrap justify-around p-0 m-0 list-none">
      <li class="relative mx-1 lg:mx-2 text-sm sm:text-base lg:text-lg">
        <NuxtLink
          class="hover:text-gray-600 dark:hover:text-gray-300 p-1 inline-block transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
          to="/"
        >
          {{ $t('menu.home') }}
        </NuxtLink>
      </li>
      <li
        class="relative mx-0 lg:mx-2 flex items-center group text-sm sm:text-base lg:text-lg"
        @mouseenter="isMenuAboutOpen = true"
        @mouseleave="isMenuAboutOpen = false"
      >
        <NuxtLink
          class="hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap p-1 inline-block transition-colors border-b-2 border-transparent group-hover:border-gray-600 dark:hover:border-gray-300"
          to="/about"
        >
          {{ $t('menu.about') }}
        </NuxtLink>
        <ul
          class="absolute z-50 left-1/2 top-full hidden bg-white dark:bg-gray-900 shadow-md rounded-md p-1 group-hover:block transition-all duration-300 transform -translate-x-1/2"
        >
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.mission') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.history') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.team') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.partners') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.contacts') }}
            </NuxtLink>
          </li>
        </ul>
        <CollapsedIcon v-if="!isMenuAboutOpen" />
        <ExpandedIcon v-if="isMenuAboutOpen" />
      </li>
      <li class="relative mx-0 lg:mx-2 text-sm sm:text-base lg:text-lg">
        <NuxtLink
          class="hover:text-gray-600 dark:hover:text-gray-300 p-1 inline-block transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
          to="/page_under_construction"
        >
          {{ $t('menu.blog') }}
        </NuxtLink>
      </li>
      <li
        class="relative mx-0 lg:mx-2 flex items-center group text-sm sm:text-base lg:text-lg"
        @mouseenter="isMenuResourcesOpen = true"
        @mouseleave="isMenuResourcesOpen = false"
      >
        <NuxtLink
          class="whitespace-nowrap hover:text-gray-600 dark:hover:text-gray-300 p-1 inline-block transition-colors border-b-2 border-transparent group-hover:border-gray-600 dark:hover:border-gray-300"
          to="/page_under_construction"
        >
          {{ $t('menu.objects') }}
        </NuxtLink>
        <ul
          class="absolute z-50 left-1/2 top-full hidden bg-white dark:bg-gray-900 shadow-md rounded-md p-1 group-hover:block transition-all duration-300 transform -translate-x-1/2"
        >
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.routes') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.heritage') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.industry') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.nature') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.transport') }}
            </NuxtLink>
          </li>
        </ul>
        <CollapsedIcon v-if="!isMenuResourcesOpen" />
        <ExpandedIcon v-if="isMenuResourcesOpen" />
      </li>
      <li
        class="relative mx-0 lg:mx-2 flex items-center group text-sm sm:text-base lg:text-lg"
        @mouseenter="isMenuJoinOpen = true"
        @mouseleave="isMenuJoinOpen = false"
      >
        <NuxtLink
          class="hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap p-1 inline-block transition-colors border-b-2 border-transparent group-hover:border-gray-600 dark:hover:border-gray-300"
          to="/join"
        >
          {{ $t('menu.join') }}
        </NuxtLink>
        <ul
          class="absolute z-50 left-1/2 top-full hidden bg-white dark:bg-gray-900 shadow-md rounded-md p-1 group-hover:block transition-all duration-300 transform -translate-x-1/2"
        >
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.services') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.feedback') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.donate') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.volunteer') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.newsletter') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="whitespace-nowrap block p-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              to="/page_under_construction"
            >
              {{ $t('menu.collaboration') }}
            </NuxtLink>
          </li>
        </ul>
        <CollapsedIcon v-if="!isMenuJoinOpen" />
        <ExpandedIcon v-if="isMenuJoinOpen" />
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
