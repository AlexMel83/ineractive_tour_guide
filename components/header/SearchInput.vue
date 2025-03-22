<template>
  <div class="search-wrapper">
    <UInput
      v-model="searchTerm"
      name="searchTerm"
      :placeholder="$t('SearchInput.placeholder')"
      autocomplete="off"
      class="custom-search-input mt-2"
      :ui="{ icon: { trailing: { pointer: '' } } }"
    >
      <template #leading>
        <MagnifyingGlassIcon class="icon-class text-black dark:text-white" />
      </template>
      <template #trailing>
        <UButton v-show="searchTerm !== ''" color="gray" variant="link" :padded="false" @click="clearSearch">
          <CloseIcon class="icon-class" />
        </UButton>
      </template>
    </UInput>
  </div>
</template>

<script setup>
import { useAppStore } from '~/stores/app.store';
import MagnifyingGlassIcon from '~/components/icons/MagnifyingGlassIcon.vue';
import CloseIcon from '~/components/icons/CloseIcon.vue';

const appStore = useAppStore();

const searchTerm = computed({
  get: () => appStore.searchTerm,
  set: (value) => appStore.setSearchTerm(value),
});

const clearSearch = () => {
  searchTerm.value = '';
};
</script>

<style scoped>
.search-wrapper {
  padding: 0 10px 5px 10px;
  width: 100%;
}
</style>
