<template>
  <UButton class="accordion-button mb-2" @click="toggleAccordion">
    {{ isExpanded ? $t('Panoramas.collapse') : $t('Panoramas.expand') }}
    <template #trailing>
      <ExpandedIcon v-if="isExpanded" />
      <CollapsedIcon v-else />
    </template>
  </UButton>
  <div v-show="isExpanded">
    <div v-if="panoramas.length > 0 && !isLoading">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          v-for="panorama in filteredPanoramas"
          :key="panorama.id"
          class="bg-white dark:bg-slate-800 shadow-md rounded-lg"
        >
          <nuxt-link class="container rounded-lg" :to="'/panoramas/' + panorama.id">
            <div class="photo rounded-t-lg">
              <img
                v-if="panorama.thumbnail_url"
                :src="getThumbnailUrl(panorama.thumbnail_url)"
                loading="lazy"
                :alt="panorama.title"
              />
              <img v-else :src="isDocker ? 'default-image.jpg' : './../public/' + 'default-image.jpg'" />
              <div class="title">
                <h2 class="text-sm md:text-base lg:text-lg">
                  {{ panorama.title }}
                </h2>
              </div>
            </div>
            <div v-auto-animate class="info-card dark:bg-slate-600 rounded-b-lg">
              <div v-if="panorama.description" class="description-container">
                <p class="description">
                  {{ panorama.description }}
                </p>
              </div>
              <div v-if="panorama.address" class="map" @click.stop>
                <a
                  class="dark:text-white flex flex-row items-center mb-1"
                  :href="'https://maps.google.com/?q=' + encodeURIComponent(panorama.address)"
                  target="_blank"
                >
                  <IconsGeoPin class="size-6 text-white text-[25px]" />
                  <span>{{ panorama.address }}</span>
                </a>
              </div>
              <div class="icons-container up p-1">
                <div class="time dark:text-white">
                  <IconsClock />
                  <div flex>
                    {{ $t('Panoramas.created') + ' ' + formatDate(panorama.created_at) }}
                    <div v-if="panorama.updated_at !== panorama.created_at">
                      {{ $t('Panoramas.updated') + ' ' + formatDate(panorama.updated_at) }}
                    </div>
                    <div v-if="panorama.shooting_date">
                      {{ $t('Panoramas.shootingDate') + ' ' + formatDate(panorama.shooting_date) }}
                    </div>
                  </div>
                </div>
              </div>
              <nuxt-link :to="'/'" class="btn">
                {{ $t('Panoramas.see') }}
              </nuxt-link>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="flex justify-center pagination">
        <UPagination
          v-model="currentPage"
          :total="panoramas.length"
          :page-count="perPage"
          size="md"
          :ui="{
            rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md',
          }"
          class="custom-pagination"
        >
          <template #prev="{ onClick }">
            <UTooltip text="Previous page">
              <UButton
                color="primary"
                :ui="{ rounded: 'rounded' }"
                class="rtl:[&_span:first-child]:rotate-180 me-2"
                :disabled="isFirstPage"
                @click="onClick"
              >
                <IconsChevronLeft />
              </UButton>
            </UTooltip>
          </template>
          <template #next="{ onClick }">
            <UTooltip text="Next page">
              <UButton
                color="primary"
                :ui="{ rounded: 'rounded' }"
                class="rtl:[&_span:last-child]:rotate-180 ms-2"
                :disabled="isLastPage"
                @click="onClick"
              >
                <IconsChevronRight />
              </UButton>
            </UTooltip>
          </template>
        </UPagination>
      </div>
    </div>
  </div>
</template>

<script setup>
import ExpandedIcon from '~/components/icons/ExpandedIcon.vue';
import CollapsedIcon from '~/components/icons/CollapsedIcon.vue';
const isExpanded = ref(true);
const config = useRuntimeConfig();
const isDocker = config.public.isDocker;

const props = defineProps({
  panoramas: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  searchTerm: {
    type: String,
    default: '',
  },
  center: {
    type: Object,
    default: () => ({ lat: 49.7548762, lng: 27.1951962 }), // Центр области 49.7548762, 27.1951962
  },
  radius: {
    type: Number,
    default: 10, // Радиус в километрах
  },
});

const currentPage = ref(1);
const perPage = ref(9);

const formatDate = (dateString) => {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  return new Date(dateString).toLocaleString('ru-RU', options);
};

const haversineDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Радиус Земли в километрах
  const toRad = (value) => (value * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Расстояние в километрах
};

const filteredPanoramas = computed(() => {
  const lowerCaseSearchTerm = props.searchTerm.toLowerCase();
  const startIndex = (currentPage.value - 1) * perPage.value;
  const endIndex = startIndex + perPage.value;
  return props.panoramas
    .filter((panorama) => {
      // Фильтрация по поисковому запросу
      const matchesSearch = panorama.title.toLowerCase().includes(lowerCaseSearchTerm);

      // Фильтрация по координатам
      if (!panorama.latitude || !panorama.longitude) {
        return matchesSearch; // Если координаты отсутствуют, учитываем только поиск
      }

      const distance = haversineDistance(
        parseFloat(props.center.lat),
        parseFloat(props.center.lng),
        parseFloat(panorama.latitude),
        parseFloat(panorama.longitude),
      );

      return matchesSearch && distance <= props.radius;
    })
    .slice(startIndex, endIndex);
});

const getThumbnailUrl = (thumbnailUrl) => {
  return isDocker ? thumbnailUrl : `./_nuxt/public${thumbnailUrl}`;
};

const toggleAccordion = () => {
  isExpanded.value = !isExpanded.value;
};

const isFirstPage = computed(() => currentPage.value === 1);
const isLastPage = computed(() => currentPage.value === Math.ceil(props.panoramas.length / perPage.value));
</script>

<style scoped>
.description-container {
  padding: 0 5px;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 3;
  -webkit-line-clamp: 3; /* Показывает только 3 строки */
  text-overflow: ellipsis; /* Добавляет "..." в конце */
  max-height: calc(1.5em * 3); /* Высота для 3 строк текста */
}

.pagination {
  margin-top: 10px;
}
.blurred {
  filter: blur(5px);
  pointer-events: none;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: var(--white-color); */
  width: 95%;
  margin: 10px auto;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.photo {
  width: 100%;
  max-height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border-radius: 10px; */
  overflow: hidden;
  position: relative;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  display: flex;
  max-width: 92%;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 20px 20px 0px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  position: absolute;
  bottom: 15px;
}

.info-card {
  padding: 10px 3px 20px 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icons-container.up {
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(25px);
  color: var(--black-color);
}

.icons-container.up img {
  margin-right: 7px;
}

.time {
  display: flex;
  align-items: center;
}

.icons-container.down {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  margin-bottom: 16px;
  padding: 4px 0;
  min-height: 32px;
}

.icons-container.down img {
  width: 27px;
  height: 26px;
  margin-right: 10px;
  border-radius: 4px;
  background-color: var(--header-bg);
}

.info-item {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
}

.btn {
  opacity: 0;
  text-transform: capitalize;
  font-size: 18px;
  line-height: normal;
  border-radius: 4px;
  background-color: var(--header-bg);
  color: var(--white-color);
  display: flex;
  max-width: 182px;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.btn:hover {
  background-color: var(--btn-border);
}

.btn:active {
  border: 2px solid var(--icons-contact-bg);
  background-color: var(--header-bg);
}

a {
  text-decoration: none;
  color: var(--text-color);
}

.custom-search-input {
  margin-top: 40px;
}

.icons-container .down {
  position: relative;
}

.dots-icon::before {
  position: absolute;
  bottom: -30%;
  left: 50%;
  transform: translateX(-50%);
}

.container:hover .btn {
  opacity: 1;
}

@media (min-width: 768px) {
  .blurred {
    filter: none;
    pointer-events: auto;
  }
}

@media (min-width: 1024px) {
  .btn {
    opacity: 0;
  }

  .photo {
    max-height: 274px;
  }

  .container {
    margin-bottom: 15px;
    width: 95%;
  }
  .icons-container.down img {
    width: 32px;
    height: 32px;
    border-radius: 6px;
  }
}
</style>
