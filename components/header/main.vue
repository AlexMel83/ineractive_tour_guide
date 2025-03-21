<template>
  <nav
    class="w-full px-4 py-2 bg-white dark:bg-custom-black dark:text-custom-white fixed z-[1500] border-b dark:border-gray-700 border-custom-border"
  >
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink
        to="/"
        class="font-space-grotesk hover:text-custom-orange transition-colors scroll-mt-[80px] cursor-pointer flex items-center space-x-2 flex-grow-0 max-w-[130px] text-start flex-col text-sm"
        @click.prevent="scrollToSection('home')"
      >
        {{ $t('header.title') }}
      </NuxtLink>
      <HeaderMenuDesctop :active-section="activeSection" />
      <HeaderButtons :is-menu-open="isMenuOpen" @toggle-menu="toggleMenu" />
    </div>
    <HeaderMenuMobile :is-menu-open="isMenuOpen" @close-menu="isMenuOpen = false" />
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const activeSection = ref('');

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = sectionId;
  } else {
    console.warn(`Element with id "${sectionId}" not found`);
  }
};

// onMounted(() => {
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           activeSection.value = entry.target.id;
//         }
//       });
//     },
//     { threshold: 0.3, rootMargin: '0px 0px -10% 0px' },
//   );

//   const sections = ['home', 'technologies', 'services', 'about', 'collaboration', 'contacts'];

//   // Ждем полной загрузки DOM
//   nextTick(() => {
//     sections.forEach((sectionId) => {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         observer.observe(element);
//       } else {
//         console.warn(`Section "${sectionId}" not found in DOM on initial mount`);
//       }
//     });

//     // Дополнительная проверка через 1 секунду для асинхронных компонентов
//     setTimeout(() => {
//       sections.forEach((sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element && !observer.takeRecords().some((entry) => entry.target.id === sectionId)) {
//           observer.observe(element);
//         }
//       });
//     }, 1000);
//   });

//   onUnmounted(() => {
//     observer.disconnect();
//   });
// });
</script>
