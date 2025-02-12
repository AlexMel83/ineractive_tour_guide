<template>
  <div>
    <h1>Alerts</h1>
    <div v-if="error">Помилка: {{ error }}</div>
    <div v-else-if="data">Дані: {{ data }}</div>
  </div>
</template>

<script setup>
const data = ref(null);
const error = ref(null);

onMounted(async () => {
  try {
    // Додавання заголовка Authorization
    data.value = await $fetch('/api/alerts', {
      headers: {
        Authorization: `Bearer ${authStore.userData.tokens.accessToken}`,
      },
    });
  } catch (err) {
    error.value = err;
    console.error('Помилка отримання даних:', err);
  }
});
</script>
