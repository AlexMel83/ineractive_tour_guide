<template>
  <div class="container-user-auth-name">
    <div class="item main-user-auth-name">
      <span> {{ userName }}</span> &nbsp;<span>{{ userSurname }}</span>
    </div>
    <div class="item cabinet" :class="{ active: isInCabinet }">
      <a :href="setRout()">
        <span class="flex items-center" @click="menuOpen = false">
          <IconsUser class="icon" />{{ $t('UserName.cabinet') }}</span
        >
      </a>
    </div>
    <div class="item exit">
      <nuxt-link href="/">
        <span class="flex items-center" @click="goOut">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15m5.25-3h-12m3-3l-3 3m0 0l3 3m-3-3h12"
            />
          </svg>
          {{ $t('UserName.exit') }}</span
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import IconsUser from '@/components/icons/User.vue';
import { useAuthStore } from '~/stores/app.store';
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const store = useAuthStore();
const menuOpen = ref(false);
const route = useRoute();

const userName = ref('');
const userSurname = ref('');

const updateUserData = () => {
  userName.value = store.userData.user.name;
  userSurname.value = store.userData.user.surname;
};

watch(
  () => localStorage.getItem('userData'),
  (newVal) => {
    if (newVal) {
      updateUserData();
    }
  },
  { immediate: true },
);

const isInCabinet = computed(() => {
  const currentPath = route.path;
  return currentPath.startsWith('/manager') || currentPath.startsWith('/user') || currentPath.startsWith('/admin');
});

const setRout = () => {
  switch (store.userData.user.role) {
    case 'manager':
      return '/manager';
    case 'user':
      return '/user';
    case 'admin':
      return '/admin';
    default:
      return '/';
  }
};

const goOut = () => {
  menuOpen.value = false;
  store.logOut();
  localStorage.removeItem('userData');
};
</script>

<style scoped>
.container-user-auth-name {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
}

.main-user-auth-name {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.icon {
  margin-right: 5px;
  width: 24px;
  height: 24px;
}

img {
  margin-right: 5px;
}

.cabinet:hover,
.exit:hover {
  transform: scale(1.1);
}

.item.active {
  display: none;
}

@media (min-width: 768px) {
  .container-user-auth-name {
    flex-direction: row;
    align-items: center;
  }
}
</style>
