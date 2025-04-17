<template>
  <transition name="slide-fade">
    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-custom-black border-b border-custom-border p-4"
    >
      <div v-for="(menuItem, key) in menuItems" :key="key" class="mb-2">
        <button
          class="w-full text-left dark:text-white font-bold py-2 flex justify-between items-center hover:text-custom-orange transition-colors"
          @click="toggleSubMenu(key)"
        >
          <NuxtLink :to="menuItem.link" class="flex-1" @click.stop="closeMenuAndScroll(menuItem.link)">
            {{ key }}
          </NuxtLink>
          <i
            v-if="menuItem.subItems.length"
            class="fas fa-chevron-down text-xs ml-2 transition-transform duration-300 ease-in-out"
            :class="{ 'rotate-180': openSubMenu === key }"
          />
        </button>
        <div v-if="openSubMenu === key" class="pl-4">
          <NuxtLink
            v-for="subItem in menuItem.subItems"
            :key="subItem.text"
            :to="subItem.link"
            class="block py-2 dark:text-white hover:text-custom-orange transition-colors"
            @click="closeMenuAndScroll(subItem.link)"
          >
            {{ subItem.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

defineProps({
  isMenuOpen: Boolean,
  activeSection: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['closeMenu']);
const { t } = useI18n();
const openSubMenu = ref(null);

const menuItems = computed(() => ({
  [t('menu.home')]: { link: '#home', subItems: [] },
  [t('menu.about')]: {
    link: '#about',
    subItems: [
      { text: t('menu.mission'), link: '#mission' },
      { text: t('menu.history'), link: '#history' },
      { text: t('menu.team'), link: '#team' },
      { text: t('menu.partners'), link: '#partners' },
      { text: t('menu.contacts'), link: '#contacts' },
    ],
  },
  [t('menu.blog')]: { link: '#blog', subItems: [] },
  [t('menu.objects')]: {
    link: '#objects',
    subItems: [
      { text: t('menu.routes'), link: '#routes' },
      { text: t('menu.heritage'), link: '#heritage' },
      { text: t('menu.industry'), link: '#industry' },
      { text: t('menu.nature'), link: '#nature' },
      { text: t('menu.transport'), link: '#transport' },
    ],
  },
  [t('menu.join')]: {
    link: '#join',
    subItems: [
      { text: t('menu.services'), link: '#services' },
      { text: t('menu.feedback'), link: '#feedback' },
      { text: t('menu.donate'), link: '#donate' },
      { text: t('menu.volunteer'), link: '#volunteer' },
      { text: t('menu.newsletter'), link: '#newsletter' },
      { text: t('menu.collaboration'), link: '#collaboration' },
    ],
  },
}));

const toggleSubMenu = (item) => {
  openSubMenu.value = openSubMenu.value === item ? null : item;
};

const closeMenuAndScroll = (sectionId) => {
  document.getElementById(sectionId.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  emit('closeMenu');
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
