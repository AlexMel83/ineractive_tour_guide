<template>
  <div class="dark:text-white">
    <h1 class="text-center text-2xl mt-2">
      {{ $t('Callback.title') }}
    </h1>
    <p v-if="loading" class="text-center mt-1 mb-2">
      {{ $t('Callback.process') }}
    </p>
    <p v-if="error" class="text-red-500 text-center mt-1 mb-2">
      {{ error }}
    </p>
    <p v-if="success && !error" class="mt-1 mb-2 text-green-500 text-center">
      {{ $t('Callback.graduate') }}
    </p>

    <div v-if="editMode" class="mt-4">
      <h2 class="text-center text-xl mb-2">{{ $t('Callback.askForData1') }} <br />{{ $t('Callback.askForData2') }}</h2>
      <form class="w-1/2 mx-auto mb-2" @submit.prevent="updateUser">
        <div class="mb-2">
          <label for="name" class="block">{{ $t('Callback.name') }}</label>
          <input id="name" v-model="name" type="text" class="border rounded px-2 py-1 w-full" />
        </div>
        <div class="mb-2">
          <label for="surname" class="block">{{ $t('Callback.surname') }}</label>
          <input id="surname" v-model="surname" type="text" class="border rounded px-2 py-1 w-full" />
        </div>
        <div class="mb-2">
          <label for="phone" class="block">{{ $t('Callback.phone') }}</label>
          <input id="phone" v-model="phone" type="text" class="border rounded px-2 py-1 w-full" />
        </div>
        <div class="mb-2">
          <label for="picture" class="block">{{ $t('Callback.photo') }}</label>
          <input id="picture" v-model="picture" type="text" class="border rounded px-2 py-1 w-full" />
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          {{ $t('Callback.save') }}
        </button>
      </form>
    </div>
    <p v-if="!loading && (error || success)" class="text-center">
      <a href="/">{{ $t('Callback.return') }}</a>
    </p>
  </div>
</template>

<script setup>
import { useAppStore } from '~/stores/app.store';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const appStore = useAppStore();
const { $api } = useNuxtApp();
const editMode = ref(false);
const success = ref(false);
const router = useRouter();
const loading = ref(true);
const route = useRoute();
const error = ref(null);

const name = ref('');
const surname = ref('');
const phone = ref('');
const picture = ref('');

onMounted(async () => {
  try {
    const uuid = route.params.uuid;
    const response = await $api.auth.getAuthUser(uuid);
    if (response && [200, 201].includes(response.status) && ![400, 401, 403, 404, 500].includes(response.data.status)) {
      const data = response.data;
      appStore.saveUserData(data);
      success.value = true;
      if (!data.user.name || !data.user.surname || !data.user.phone) {
        name.value = data.user.name || '';
        surname.value = data.user.surname || '';
        phone.value = data.user.phone || '';
        picture.value = data.user.picture || '';
        editMode.value = true;
      } else {
        setTimeout(() => router.push('/'), 2000);
      }
    } else {
      error.value = 'Помилка запиту.';
      setTimeout(() => router.push('/'), 3000);
    }
  } catch (err) {
    error.value =
      'Помилка запиту: ' +
      (err.response?.data?.message.includes('Error:')
        ? err.response.data.message.replace('Error: ', '')
        : err.response?.data?.message);
    setTimeout(() => router.push('/'), 3000);
  } finally {
    loading.value = false;
  }
});

const updateUser = async () => {
  try {
    let cleaned = phone.value.replace(/\D/g, '');
    if (cleaned.startsWith('0')) {
      cleaned = '38' + cleaned;
    }
    if (cleaned.startsWith('380')) {
      cleaned = cleaned.replace(/^380/, '380');
    }
    const response = await $api.auth.updateUser({
      name: name.value,
      surname: surname.value,
      phone: cleaned,
      picture: picture.value,
    });
    if ([200, 201].includes(response.status)) {
      const data = response.data;
      appStore.saveUserData(data);
      success.value = true;
      editMode.value = false;
    } else {
      error.value = 'Не вдалося оновити дані користувача.';
      setTimeout(() => router.push('/'), 3000);
    }
  } catch (err) {
    error.value = 'Помилка оновлення: ' + (err.response?.data?.message || 'Невідома помилка.');
    setTimeout(() => router.push('/'), 3000);
  }
};
</script>
