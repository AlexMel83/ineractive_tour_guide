<template>
  <div class="hidden md:flex space-x-6 items-center flex-1 justify-center">
    <div
      v-for="(subItems, item) in menuItems"
      :key="item"
      class="relative group"
      @mouseenter="showSubMenu(item)"
      @mouseleave="hideSubMenu()"
    >
      <NuxtLink
        :to="`#${item.toLowerCase().replace(/\s+/g, '-')}`"
        :class="[{ 'text-custom-orange': activeSection === item.toLowerCase().replace(/\s+/g, '-') }]"
        class="font-space-grotesk text-custom-black dark:text-custom-white hover:text-custom-orange dark:hover:text-custom-orange transition-colors inline-flex items-center space-x-1"
        @click.prevent="scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))"
      >
        <span>{{ item }}</span>
        <i
          v-if="subItems.length"
          :class="[
            'fas fa-chevron-down text-xs ml-1 transition-transform duration-300 ease-in-out',
            hoveredMenu === item ? 'rotate-180' : '',
          ]"
        />
      </NuxtLink>

      <div
        v-if="subItems.length && hoveredMenu === item"
        class="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-custom-black border border-custom-border dark:border-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      >
        <NuxtLink
          v-for="subItem in subItems"
          :key="subItem"
          :to="`#${subItem.toLowerCase().replace(/\s+/g, '-')}`"
          class="block w-full text-left px-4 py-2 text-sm text-custom-black dark:text-custom-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-custom-orange dark:hover:text-custom-orange transition-colors duration-200"
          @click.prevent="scrollToSection(subItem.toLowerCase().replace(/\s+/g, '-'))"
        >
          {{ subItem }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

defineProps({
  activeSection: {
    type: String,
    default: '',
  },
});

const { t } = useI18n();

const hoveredMenu = ref(null);
let timeoutId = null;

const menuItems = computed(() => ({
  [t('menu.home')]: [],
  [t('menu.about')]: [t('menu.mission'), t('menu.history'), t('menu.team'), t('menu.partners'), t('menu.contacts')],
  [t('menu.blog')]: [],
  [t('menu.objects')]: [
    t('menu.routes'),
    t('menu.heritage'),
    t('menu.industry'),
    t('menu.nature'),
    t('menu.transport'),
  ],
  [t('menu.join')]: [
    t('menu.services'),
    t('menu.feedback'),
    t('menu.donate'),
    t('menu.volunteer'),
    t('menu.newsletter'),
    t('menu.collaboration'),
  ],
}));

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const showSubMenu = (item) => {
  clearTimeout(timeoutId);
  hoveredMenu.value = item;
};

const hideSubMenu = () => {
  timeoutId = setTimeout(() => {
    hoveredMenu.value = null;
  }, 200); // Затримка 200мс перед закриттям
};
</script>

<style scoped>
/* Додаткові стилі для анімації */
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style>
