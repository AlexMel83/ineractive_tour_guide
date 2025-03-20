<template>
  <transition name="slide-fade">
    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-custom-black border-b border-custom-border p-4"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.id"
        :to="`#${link.id}`"
        :class="[
          'block py-2 hover:text-custom-orange transition-colors',
          { 'text-custom-orange': activeSection === link.id },
        ]"
        @click="closeMenuAndScroll(link.id)"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  isMenuOpen: Boolean,
  activeSection: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['closeMenu']);

const activeSection = ref('');

const navLinks = computed(() => [
  { id: 'home', text: t('menu.home') },
  { id: 'technologies', text: t('menu.technologies') },
  { id: 'services', text: t('menu.services') },
  { id: 'about', text: t('menu.about') },
  { id: 'collaboration', text: t('menu.collaborations') },
  { id: 'contacts', text: t('menu.contacts') },
]);

const closeMenuAndScroll = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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
</style>
