<script setup>
const { $api, $load } = useNuxtApp();

const errors = reactive({
  textError: '',
});

const handleSocialLogin = async (provider) => {
  try {
    const res = await $load(() => $api.auth.socAuth(provider), errors);
    if (res.data.url) {
      window.location.href = res.data.url;
    }
  } catch (error) {
    errors.textError = $t('LoginRegistration.errorSocialAuth') + error;
  }
};
</script>

<template>
  <div class="flex flex-col items-end md:items-center text-white md:text-gray-700 md:dark:text-white w-full">
    <div class="flex flex-col md:flex-row gap-2 md:gap-4 max-w-md">
      <!-- Google Login Button -->
      <div
        class="flex items-center justify-center w-full px-4 py-3 bg-slate-600 md:bg-slate-100 md:dark:bg-slate-600 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform cursor-pointer whitespace-nowrap"
        @click="handleSocialLogin('google')"
      >
        <icons-google class="w-6 h-6 mr-3" />
        <span class="text-sm">{{ $t('LoginRegistration.via') }} Google</span>
      </div>

      <!-- Facebook Login Button -->
      <div
        class="flex items-center justify-center w-full px-4 py-3 bg-slate-600 md:bg-slate-100 md:dark:bg-slate-600 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform cursor-pointer whitespace-nowrap"
        @click="handleSocialLogin('facebook')"
      >
        <icons-facebook class="w-6 h-6 mr-3" />
        <span class="text-sm">{{ $t('LoginRegistration.via') }} Facebook</span>
      </div>
    </div>

    <!-- Error Notification -->
    <UNotifications v-if="errors.textError" color="red" :timeout="3000" class="mt-4">
      {{ errors.textError }}
    </UNotifications>
  </div>
</template>
