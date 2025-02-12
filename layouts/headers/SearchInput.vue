<template>
  <div class="search-wrapper">
    <UInput
      v-model="searchTerm"
      name="searchTerm"
      :placeholder="$t('SearchInput.placeholder')"
      autocomplete="off"
      class="custom-search-input"
      :ui="{ icon: { trailing: { pointer: '' } } }"
    >
      <template #leading>
        <MagnifyingGlassIcon class="icon-class text-black dark:text-white" />
      </template>
      <template #trailing>
        <UButton v-show="searchTerm !== ''" color="gray" variant="link" :padded="false" @click="searchTerm = ''">
          <CloseIcon class="icon-class" />
        </UButton>
      </template>
    </UInput>
  </div>
</template>

<script setup>
import MagnifyingGlassIcon from '~/components/icons/MagnifyingGlassIcon.vue';
import CloseIcon from '~/components/icons/CloseIcon.vue';
import debounce from 'lodash.debounce';

const searchTerm = ref('');
provide('searchTerm', searchTerm);

const bus = useNuxtApp().$bus;

watch(
  searchTerm,
  debounce((newValue) => {
    bus.$emit('searchTermUpdated', newValue);
  }, 500),
);
</script>

<style scoped>
.search-wrapper {
  padding: 0 10px 5px 10px;
  width: 100%;
}
</style>
