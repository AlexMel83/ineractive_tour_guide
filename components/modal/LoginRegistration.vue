<script setup>
import { useAuthStore } from '~/stores/app.store';
import { object, string, ref as yupRef } from 'yup';
import { defineShortcuts } from '#imports';
import EyeIcon from '../icons/EyeIcon.vue';
import EyeSlashIcon from '../icons/EyeSlashIcon.vue';

const authStore = useAuthStore();
const { $api, $load } = useNuxtApp();

const minPwd = 4;
const isOpen = ref(false);
const isLoading = ref(false);
const emailActive = ref(false);
const passwordActive = ref(false);
const passConfirmActive = ref(false);
const userIsNotRegistered = ref(false);
const sendActivationEmail = ref(false);
const togglePasswordVisibility = ref(false);

const emit = defineEmits(['modalClosed']);
const state = reactive({
  email: '',
  password: '',
  passConfirm: '',
});
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = computed(() => emailRegex.test(state.email));
const errors = reactive({
  form: '',
  email: '',
  password: '',
});
const clearErrors = () => {
  errors.form = '';
  errors.email = '';
  errors.password = '';
};
const clearVars = (email) => {
  state.email = email || '';
  state.password = '';
  state.passConfirm = '';
  isLoading.value = false;
  userIsNotRegistered.value = false;
  sendActivationEmail.value = false;
  togglePasswordVisibility.value = false;
};

const handleTogglePasswordVisibility = async () => {
  togglePasswordVisibility.value = !togglePasswordVisibility.value;
};

const loginSchema = object({
  email: string().email('Невірний email').required('Потрібен Email'),
  password: string().min(minPwd, `Пароль має бути не менше ${minPwd} симовлів`).required('Потрібен пароль'),
});
const registrationSchema = object({
  email: string().email('Невірний email').required('Потрібен Email'),
  password: string().min(minPwd, `Пароль не менше ${minPwd} символів`).required('Потрібен пароль'),
  passConfirm: string().oneOf([yupRef('password'), ''], 'Паролі не співпадають'),
});
const schema = computed(() => (userIsNotRegistered.value ? registrationSchema : loginSchema));

const openModal = () => {
  isOpen.value = !isOpen.value;
};
const closeModal = () => {
  isOpen.value = false;
  clearErrors();
  clearVars();
  emit('modalClosed');
};
defineExpose({ openModal });
defineShortcuts({
  escape: {
    usingInput: true,
    whenever: [isOpen],
    handler: closeModal,
  },
});

const handleFocus = (field) => {
  if (field === 'email') emailActive.value = true;
  if (field === 'password') passwordActive.value = true;
  if (field === 'passConfirm') passConfirmActive.value = true;
};
const handleBlur = (field) => {
  if (field === 'email' && !state.email) emailActive.value = false;
  if (field === 'password' && !state.password) passwordActive.value = false;
  if (field === 'passConfirm' && !state.passConfirm) passConfirmActive.value = false;
};

const handleSubmit = async (event) => {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }
  isLoading.value = true;
  clearErrors();

  const payload = {
    email: state.email,
    password: state.password,
    role: 'user',
  };

  try {
    if (userIsNotRegistered.value && state.passConfirm !== state.password) {
      errors.password = 'Портібно підтвердити пароль';
      if (state.passConfirm) errors.passConfirm = 'Паролі не співпадають';
      isLoading.value = false;
      return;
    }
    const res = await $load(
      () => (userIsNotRegistered.value ? $api.auth.signUp(payload) : $api.auth.signIn(payload)),
      errors,
    );

    if (res && [200, 201].includes(res.status) && ![400, 401, 403, 404, 500].includes(res.data.status)) {
      const data = res.data;
      if (!userIsNotRegistered.value) {
        authStore.saveUserData(data);
      }
      if (data.user.isactivated === false) {
        sendActivationEmail.value = true;
      } else {
        isOpen.value = false;
        clearVars(userIsNotRegistered.value ? state.email : '');
      }
      isLoading.value = false;
    }
    if (errors) {
      if (errors.email.includes('Цей email не зареєстровано')) {
        userIsNotRegistered.value = true;
      }
      console.log(errors);
    }
  } catch (error) {
    console.log(error);
    if (error) {
      errors.email = 'Користувача не авторизовано';
    }
  }
  isLoading.value = false;
};

watch(isOpen, (newValue) => {
  if (!newValue) {
    togglePasswordVisibility.value = false;
    state.email = '';
  }
});
watch(
  () => state.email,
  (newEmail) => {
    errors.email = '';
    if (emailRegex.test(newEmail)) {
      isEmailValid.value = true;
    } else {
      isEmailValid.value = false;
    }
  },
);
</script>

<template>
  <div>
    <UModal v-model="isOpen" :ui="{ wrapper: 'z-500' }">
      <UCard
        v-if="!sendActivationEmail"
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <div class="flex items-center">
          <h3 class="ml-10 flex-grow text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center">
            {{ $t('LoginRegistration.title') }}
          </h3>
          <button class="flex items-center justify-center w-8 h-8 ml-2" @click="closeModal">
            <IconsCloseIcon />
          </button>
        </div>
        <ModalSocial />
        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center">
          {{ $t('LoginRegistration.orInputEmail') }}
        </h3>
        <UForm v-auto-animate :schema="schema" :state="state" class="space-y-4" @submit="handleSubmit">
          <div class="space-y-3 mt-2">
            <UFormGroup
              name="email"
              :error="errors.email"
              :class="{
                'has-value': state.email !== '' || emailActive,
                'form-group': true,
                'text-right': true,
              }"
            >
              <UInput
                v-model="state.email"
                variant="none"
                color="primary"
                autocomplete="new-email"
                class="text-base dark:text-[#999]"
                :ui="{
                  base: 'border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0',
                  input: 'bg-transparent',
                  rounded: 'rounded-none',
                }"
                @focus="handleFocus('email')"
                @blur="handleBlur('email')"
              >
                <template #leading>
                  <IconsEnvelopeIcon class="icon" />
                </template>
                <label>{{ $t('LoginRegistration.email') }}</label>
              </UInput>
            </UFormGroup>
            <UFormGroup
              v-if="isEmailValid"
              name="password"
              :error="errors.password"
              :class="{
                'has-value': state.password !== '' || passwordActive,
                'form-group': true,
                'text-right': true,
                'dark:text-[#999]': true,
              }"
            >
              <div class="password-input-wrapper relative">
                <UInput
                  v-if="!togglePasswordVisibility"
                  v-model="state.password"
                  type="password"
                  variant="none"
                  color="primary"
                  :ui="{
                    base: 'border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0',
                    input: 'bg-transparent pl-100',
                    rounded: 'rounded-none',
                  }"
                  :password-visible="false"
                  @focus="handleFocus('password')"
                  @blur="handleBlur('password')"
                >
                  <template #leading>
                    <IconsLockClosedIcon class="absolute left-2 top-1/2 transform -translate-y-1/2" />
                  </template>
                  <label>{{ $t('LoginRegistration.password') }}</label>
                </UInput>
                <UInput
                  v-else
                  v-model="state.password"
                  type="text"
                  variant="none"
                  color="primary"
                  :ui="{
                    base: 'border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0',
                    input: 'bg-transparent pl-10',
                    rounded: 'rounded-none',
                  }"
                  @focus="handleFocus('password')"
                  @blur="handleBlur('password')"
                >
                  <template #leading>
                    <IconsLockClosedIcon class="absolute left-2 top-1/2 transform -translate-y-1/2" />
                  </template>
                  <label>{{ $t('LoginRegistration.password') }}</label>
                </UInput>
                <button
                  v-if="state.password"
                  type="button"
                  class="password-toggle absolute right-2 top-1/2 transform -translate-y-1/2"
                  @click="handleTogglePasswordVisibility"
                >
                  <component :is="togglePasswordVisibility ? EyeSlashIcon : EyeIcon" />
                </button>
              </div>
            </UFormGroup>
          </div>
          <UFormGroup
            v-if="userIsNotRegistered && isEmailValid"
            name="passConfirm"
            :error="errors.passConfirm"
            :class="{
              'has-value': state.passConfirm !== '' || passConfirmActive,
              'form-group': true,
              'text-right': true,
              'dark:text-[#999]': true,
            }"
          >
            <div class="password-input-wrapper relative">
              <UInput
                v-if="!togglePasswordVisibility"
                v-model="state.passConfirm"
                type="password"
                :error="errors.passConfirm"
                variant="none"
                color="primary"
                :ui="{
                  base: 'border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0',
                  input: 'bg-transparent pl-10',
                  rounded: 'rounded-none',
                }"
                @focus="handleFocus('passConfirm')"
                @blur="handleBlur('passConfirm')"
              >
                <template #leading>
                  <IconsLockClosedIcon class="absolute left-2 top-1/2 transform -translate-y-1/2" />
                </template>
                <label>{{ $t('LoginRegistration.repeat') }}</label>
              </UInput>
              <UInput
                v-else
                v-model="state.passConfirm"
                type="text"
                :error="errors.passConfirm"
                variant="none"
                color="primary"
                :ui="{
                  base: 'border-t-0 border-l-0 border-r-0 border-b-2 focus:ring-0',
                  input: 'bg-transparent pl-10',
                  rounded: 'rounded-none',
                }"
                @focus="handleFocus('passConfirm')"
                @blur="handleBlur('passConfirm')"
              >
                <template #leading>
                  <IconsLockClosedIcon class="absolute left-2 top-1/2 transform -translate-y-1/2" />
                </template>
                <label>{{ $t('LoginRegistration.repeat') }}</label>
              </UInput>
              <button
                type="button"
                class="password-toggle absolute right-2 top-1/2 transform -translate-y-1/2"
                @click="handleTogglePasswordVisibility"
              >
                <component :is="togglePasswordVisibility ? EyeSlashIcon : EyeIcon" />
              </button>
            </div>
          </UFormGroup>
          <UButton
            v-if="isEmailValid && state.password.length >= minPwd"
            class="dark:text-white dark:bg-slate-600 hover:bg-primary-600 dark:hover:bg-primary-500"
            type="submit"
            color="black"
            :loading="isLoading"
          >
            {{ isEmailValid && userIsNotRegistered ? 'Зареєструватись' : 'Увійти' }}
          </UButton>
        </UForm>
      </UCard>
      <UCard
        v-else
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <div class="flex items-center">
          <h3 class="flex-grow text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center">
            {{ $t('LoginRegistration.graduate') }}
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="flex items-center justify-center w-8 h-8 ml-2"
            @click="
              () => {
                isOpen = false;
                clearVars();
              }
            "
          />
        </div>
        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-[#999] text-center">
          {{ $t('LoginRegistration.sendEmail') }} {{ state.email }}
        </h3>
      </UCard>
    </UModal>
  </div>
</template>

<style scoped>
.password-input-wrapper {
  position: relative;
}
.password-toggle {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.input-error {
  color: red;
}
.form-group {
  position: relative;
  margin: 1.4rem 0;
  transition: all 0.3s ease;
}

.form-group label {
  position: absolute;
  top: 85%;
  left: 35px;
  transform: translateY(-90%);
  transition: all 0.3s;
  pointer-events: none;
  color: #999;
  z-index: 10;
  font-size: 125%;
}

.form-group.has-value label,
.form-group input:focus + label {
  top: 8px;
  left: 0;
}
</style>
