<template>
  <div class="index-page p-2">
    <MetaTags
      :url="'https://tour.starkon.pp.ua'"
      :title="$t('header.title')"
      :description="$t('header.subtitle')"
      :image="'/cfhope-logo-tranparent.png'"
    />
    <main>
      <section class="tour-list" :class="{ blurred: appStore.isMenuOpen }">
        <MapContainer :panoramas="filteredPanoramas || []" />
        <div v-auto-animate class="tour-wrapper">
          <Panoramas
            :panoramas="filteredPanoramas"
            :is-loading="isLoading"
            :search-term="searchTerm"
            :center="{ lat: 49.7548762, lng: 27.1951962 }"
            :radius="100"
          />
        </div>
      </section>
    </main>
    <div v-if="panoramasDataApi.length" class="flex justify-center p-2">
      <ShareButtons
        class="max-w-[800px]"
        :url="'https://tour.starkon.pp.ua'"
        :page-object="{ title: $t('header.title') }"
      />
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '~/stores/app.store';

const isLoading = ref(false);
const { $api } = useNuxtApp();
const panoramasDataApi = ref([]);
const appStore = useAppStore();
const searchTerm = computed(() => appStore.searchTerm);
const page = ref(1);

onMounted(async () => {
  try {
    if (!searchTerm.value) {
      await fetchPanoramas();
    }
  } catch (error) {
    console.error('Error in onMounted:', error);
  }
});

const fetchPanoramas = async (searchQuery = null) => {
  isLoading.value = true;
  try {
    const response = await $api.panoramas.getPanoramas(searchQuery);

    panoramasDataApi.value = response.data;
  } catch (error) {
    console.error('Error fetching panoramas data:', error);
  } finally {
    isLoading.value = false;
  }
};

const filteredPanoramas = computed(() => {
  const lowerCaseSearchTerm = searchTerm.value?.toLowerCase() || '';
  // const startIndex = (page.value - 1) * perPage;
  // const endIndex = startIndex + perPage;
  return panoramasDataApi.value.filter((panorama) => panorama.title.toLowerCase().includes(lowerCaseSearchTerm));
  // .slice(startIndex, endIndex);
});

watch(page, () => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
@import '../assets/src/styles.css';

.index-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

main {
  flex: 1;
}

.tour-wrapper {
  padding: 5px 25px 5px 25px;
}

.search {
  background-color: var(--header-bg);
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-wrapper {
  padding: 0 16px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  background: var(--white-color);
  width: 95%;
  margin: 10px auto;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.map {
  display: flex;
  margin-bottom: 5px;
}

.map img {
  width: 25px;
  height: 25px;
}

.map a {
  display: flex;
  align-items: center;
  column-gap: 7px;
}

.custom-search-input {
  margin-top: 40px;
}

@media (min-width: 768px) {
  .blurred {
    filter: none;
    pointer-events: auto;
  }
}

@media (min-width: 1024px) {
  .search {
    padding: 0 10px;
  }

  .search-wrapper {
    padding: 0 8px;
  }
}

@media (min-width: 1440px) {
  .tour-wrapper {
    padding: 20px 25px;
  }
}
</style>
