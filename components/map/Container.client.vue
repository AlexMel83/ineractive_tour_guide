<template>
  <section
    v-if="panoramas.length > 0"
    :class="['mapsection relative', fullScreen ? 'fixed inset-0 w-full h-screen z-[1000]' : 'h-96']"
    name="image-map"
    :style="{
      transition: 'height 300ms ease-in-out, width 300ms ease-in-out',
      position: fullScreen ? 'fixed' : 'relative',
    }"
  >
    <MapExpandButton v-model:is-full-screen="fullScreen" :map-ref="map?.leafletObject ? map : null" />
    <MapGeoError v-if="geoError" :error-message="geoErrorMsg" @close="closeGeoError" />
    <map-features
      :search-results="searchResults"
      :fetch-coords="fetchCoords"
      :coords="coords"
      :map="map"
      :result-marker="resultMarker"
      @toggle-search-results="toggleSearchResults"
      @selected-result="handleSelectedResult"
      @get-geo-location="getGeoLocation"
      @remove-result="removeResult"
      @plot-result="plotResult"
    />
    <LMap
      ref="map"
      class="z-[1]"
      :marker-zoom-animation="false"
      :use-global-leaflet="true"
      :scroll-wheel-zoom="false"
      :fade-animation="false"
      :center="MAP_CONFIG.CENTER"
      :zoom="MAP_CONFIG.ZOOM"
      @ready="onMapReady"
    >
      <l-control-layers position="bottomleft" :collapsed="true" />
      <LTileLayer
        v-for="tileProvider in TILE_PROVIDERS"
        :key="tileProvider.name"
        :attribution="tileProvider.attribution"
        :max-zoom="tileProvider.maxZoom || 20"
        :min-zoom="tileProvider.minZoom || 3"
        :max-native-zoom="tileProvider.maxNativeZoom || 18"
        :min-native-zoom="tileProvider.minNativeZoom || 3"
        :visible="tileProvider.visible || false"
        :name="tileProvider.name"
        :url="tileProvider.url"
        layer-type="base"
      />
      <!-- <l-layer-group
        ref="memoriesGroup"
        :visible="showMemoryMarkers"
        layer-type="overlay"
        :name="$t('Map.memories')"
      /> -->
      <l-layer-group
        ref="panoramasGroup"
        :visible="showPanoramaMarkers"
        layer-type="overlay"
        :name="$t('Map.panoramas')"
      />
      <LControlScale position="bottomright" :imperial="false" :metric="true" />
    </LMap>
  </section>
</template>

<script setup>
import { MAP_CONFIG, TILE_PROVIDERS } from '@/constants/map-config';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { LControlLayers, LControlScale, LMap, LTileLayer, LLayerGroup } from '@vue-leaflet/vue-leaflet';
import { useAppStore } from '~/stores/app.store';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const store = useAppStore();

const props = defineProps({
  panoramas: {
    type: Array,
    default: () => [],
  },
});

const markerClusterGroupPanoramas = ref(null);
const showPanoramaMarkers = ref(true);
const markerCoordinates = ref({ lat: 0, lng: 0 });
const selectedResultData = ref(null);
const panoramasGroup = ref(null);
const searchResults = ref(null);
const resultMarker = ref(null);
const fullScreen = ref(false);
const fetchCoords = ref(null);
const geoErrorMsg = ref(null);
const geoMarker = ref(null);
const geoError = ref(null);
const coords = ref(null);
const map = ref(null);

// const baseURL =
//   store.baseURL === 'https://apidevtour.starkon.pp.ua' ? 'https://devtour.starkon.pp.ua' : 'https://tour.starkon.pp.ua';

const createPanoramaIcon = () => {
  return L.divIcon({
    html: createSvgIcon('#0000ff'),
    className: 'custom-div-icon',
    iconAnchor: [16, 32],
    iconSize: [32, 32],
  });
};

const markerPanoramaData = computed(() =>
  props.panoramas.map((panorama) => ({
    id: panorama.id,
    latitude: panorama.latitude_fact ? panorama.latitude_fact : panorama.latitude,
    longitude: panorama.longitude_fact ? panorama.longitude_fact : panorama.longitude,
    address: panorama.address,
    title: panorama.title,
    thumbnail_url: panorama.thumbnail_url,
  })),
);

const createPanoramaPopupContent = (panorama) => {
  const photoURL = panorama.thumbnail_url ? panorama.thumbnail_url : './default-memory.png';
  const address = panorama.address
    ? `<p><a href="https://www.google.com/maps?q=${encodeURIComponent(
        panorama.address,
      )}" target="_blank">${panorama.address}</a></p>`
    : '';

  return `
    <div class="popup-content" style="text-align: center;">
      <a href="/panoramas/${panorama.memory_id}">
        <b style="display: block; font-weight: bold; font-size: 130%;">${panorama.title}</b>
      </a>
      ${address}
      <a href="/panoramas/${panorama.id}">
        <img src="${photoURL}" alt="${panorama.title}" style="max-width: 100%; display: block;" />
      </a>
    </div>`;
};

const onMapReady = () => {
  if (!map.value?.leafletObject) return;

  markerClusterGroupPanoramas.value = L.markerClusterGroup({
    maxClusterRadius: 80, // Радиус в пикселях, в пределах которого маркеры будут объединяться
    spiderfyOnMaxZoom: true, // Разворачивать маркеры при максимальном зуме
    showCoverageOnHover: true, // Показывать область охвата кластера при наведении
    zoomToBoundsOnClick: true, // Приближать к границам кластера при клике
    animate: true, // Анимация при разворачивании/сворачивании кластера
  });

  updateMarkers();

  if (panoramasGroup.value?.leafletObject) {
    panoramasGroup.value.leafletObject.addLayer(markerClusterGroupPanoramas.value);
  }
};

const updateMarkers = () => {
  if (!markerClusterGroupPanoramas.value) return;

  markerClusterGroupPanoramas.value.clearLayers();

  if (showPanoramaMarkers.value) {
    markerPanoramaData.value.forEach((panorama) => {
      const marker = L.marker(
        [
          panorama.latitude_fact ? panorama.latitude_fact : panorama.latitude,
          panorama.longitude_fact ? panorama.longitude_fact : panorama.longitude,
        ],
        {
          icon: createPanoramaIcon(),
        },
      );
      marker.bindPopup(createPanoramaPopupContent(panorama));
      markerClusterGroupPanoramas.value.addLayer(marker); // Изменено с addLayers на addLayer
    });
  }
};

const plotGeoLocation = (coords) => {
  if (map.value?.leafletObject) {
    geoMarker.value = createCustomIcon(coords.lat, coords.lng).addTo(map.value.leafletObject);
    geoMarker.value.bindPopup(
      createCoordinatesPopupContent({
        lat: coords.lat.toFixed(4),
        lng: coords.lng.toFixed(4),
      }),
    );
    map.value.leafletObject.setView([coords.lat, coords.lng], MAP_CONFIG.ZOOM);
  }
};

const plotResult = (coords) => {
  if (resultMarker.value && map.value?.leafletObject) {
    map.value.leafletObject.removeLayer(resultMarker.value);
  }
  if (map.value?.leafletObject) {
    resultMarker.value = createCustomIcon(coords.coordinates[1], coords.coordinates[0]).addTo(map.value.leafletObject);
    resultMarker.value.bindPopup(
      createCoordinatesPopupContent({
        lat: coords.coordinates[1].toFixed(4),
        lng: coords.coordinates[0].toFixed(4),
      }),
      {
        offset: [0, -20],
      },
    );
    map.value.leafletObject.setView([coords.coordinates[1], coords.coordinates[0]], MAP_CONFIG.ZOOM);
    closeSearchResults();
  }
};

const createPlace = async (coords) => {
  const payload = {
    title: selectedResultData.value?.place_name || '',
    address: selectedResultData.value?.place_name || '',
    location: `POINT(${coords.lng} ${coords.lat})`,
    user_id: store?.userData?.user?.id,
  };
  console.log(payload);
};

const createCustomIcon = (lat, lng) => {
  const icon = L.divIcon({
    html: createSvgIcon(),
    className: 'custom-div-icon',
    iconAnchor: [17, 35],
    iconSize: [35, 35],
  });
  const marker = L.marker([lat, lng], { icon, draggable: true });
  markerCoordinates.value = { lat, lng };
  marker.on('moveend', (event) => {
    const newLatLng = event.target.getLatLng();
    markerCoordinates.value = {
      lat: newLatLng.lat.toFixed(7),
      lng: newLatLng.lng.toFixed(7),
    };
    marker.setPopupContent(createCoordinatesPopupContent(markerCoordinates.value), {
      offset: [0, -20],
    });
  });
  return marker;
};

const createSvgIcon = (color = '#ef4444') => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" class="custom-map-pin">
    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
  </svg>
`;

const createCoordinatesPopupContent = (coords) => {
  return `
      <div class="px-1">
        <p class="text-center font-bold mb-2">${t('Map.coordinates')} <p class="text-center">${t('Map.latitude')} ${coords.lat}, ${t('Map.longitude')} ${coords.lng}</p>
          <label for="title">Заголовок</label>
        <input class="border p-1 w-full" name="title" value="${selectedResultData.value?.place_name || ''}" placeholder="${selectedResultData.value?.place_name || t('Map.inputTitle')}" class="border p-1 w-full" />
        <label for="address">${t('Map.address')}</label>
        <input name="address" value="${selectedResultData.value?.place_name || ''}" placeholder="${selectedResultData.value?.place_name || t('Map.inputAddress')}" class="border p-1 w-full" />
        <button type="button" @click="${createPlace(coords)}" class="bg-blue-500 text-white p-1 rounded mt-2">${t('Map.createPlace')}</button>
      </div>
    `;
};

const getGeoLocation = () => {
  if (coords.value) {
    resetCoords();
  } else if (sessionStorage.getItem('coords')) {
    setCoordsFromSession();
  } else {
    requestGeoLocation();
  }
};

const resetCoords = () => {
  coords.value = null;
  sessionStorage.removeItem('coords');
  map.value?.leafletObject?.removeLayer(geoMarker.value);
};

const setCoordsFromSession = () => {
  coords.value = JSON.parse(sessionStorage.getItem('coords'));
  plotGeoLocation(coords.value);
};

const requestGeoLocation = () => {
  fetchCoords.value = true;
  navigator.geolocation.getCurrentPosition(setCoords, handleGeoError);
};

const setCoords = (position) => {
  fetchCoords.value = null;
  coords.value = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  sessionStorage.setItem('coords', JSON.stringify(coords.value));
  plotGeoLocation(coords.value);
};

const handleGeoError = (error) => {
  geoErrorMsg.value = error.message;
  geoError.value = true;
  fetchCoords.value = null;
};

const closeSearchResults = () => {
  searchResults.value = null;
};

// Map event handlers
const closeGeoError = () => {
  geoErrorMsg.value = null;
  geoError.value = null;
};

const toggleSearchResults = () => {
  searchResults.value = !searchResults.value;
};

const removeResult = () => {
  if (resultMarker.value && map.value?.leafletObject) {
    map.value.leafletObject.removeLayer(resultMarker.value);
    resultMarker.value = null;
  }
};

const handleSelectedResult = (result) => {
  selectedResultData.value = result;
};
watch(
  () => [showPanoramaMarkers.value, props.panoramas],
  () => {
    updateMarkers();
  },
  { deep: true },
);

onMounted(() => {
  if (map.value?.leafletObject) {
    onMapReady();
  }
});
</script>

<style scoped>
.custom-div-icon {
  background: none;
  border: none;
}

.custom-map-pin {
  width: 35px;
  height: 35px;
}

.btn {
  color: var(--white-color);
  background-color: var(--header-bg);
  cursor: pointer;
  margin-right: 20px;
}

:deep(.leaflet-popup-content p) {
  margin: 0 !important;
  min-width: 200px !important;
}

:deep(.leaflet-popup-content) {
  margin: 0 0 10px 0 !important;
  min-width: 200px !important;
}

:deep(.leaflet-popup-content-wrapper) {
  border-radius: 0 !important;
  min-width: 200px !important;
  max-width: 300px;
}

.btn:hover {
  background-color: var(--btn-border);
}
</style>
