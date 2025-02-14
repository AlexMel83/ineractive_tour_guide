const config = useRuntimeConfig();
const mapboxApiKey = config.public.apiKeyMapbox;

export const MAP_CONFIG = {
  CENTER: [49.7548762, 27.1951962],
  ZOOM: 14,
  defaultZoom: 11,
  defaultCenter: {
    lat: 59.95,
    lng: 30.33,
  },
};

export const TILE_PROVIDERS = [
  {
    name: 'OpenStreetMap',
    visible: true,
    attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    name: 'ArcGIS satellite',
    visible: false,
    maxZoom: 22,
    minZoom: 3,
    minNativeZoom: 3,
    maxNativeZoom: 18,
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, NOAA',
  },
  {
    name: 'Mapbox satellite',
    visible: false,
    maxZoom: 19,
    url: `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=${mapboxApiKey}`,
    attribution: '&copy; <a href="https://www.mapbox.com/">Mapbox</a>',
  },
  {
    name: 'Mapbox hybrid',
    visible: false,
    maxZoom: 19,
    url: `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxApiKey}`,
    attribution: '&copy; <a href="https://www.mapbox.com/">Mapbox</a>',
  },
  {
    name: 'OpenTopoMap',
    visible: false,
    maxZoom: 18,
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution:
      'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  },
];
