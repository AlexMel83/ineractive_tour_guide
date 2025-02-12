<template>
  <div />
</template>

<script setup>
import { useRequestURL } from 'nuxt/app';
import { useAppStore } from '~/stores/app.store';

const props = defineProps({
  url: {
    type: String,
    required: false,
    default: '',
  },
  title: {
    type: String,
    required: false,
    default: 'Default Title',
  },
  description: {
    type: String,
    required: false,
    default: 'Default Description',
  },
  image: {
    type: String,
    required: false,
    default: '/cfhope-logo-tranparent.png',
  },
});

const store = useAppStore();
const { locale } = useI18n();
const requestUrl = useRequestURL();
const currentUrl = computed(() => props.url || requestUrl.href);
const currentLocale = computed(() => locale.value || 'uk');

const baseUrl =
  store.baseURL === 'https://tour_apidev.starkon.pp.ua'
    ? 'https://tour_dev.starkon.pp.ua'
    : 'https://tour.starkon.pp.ua';

const urlImage = computed(() => (props.image.startsWith('http') ? props.image : baseUrl + props.image));

useHead({
  htmlAttrs: {
    lang: currentLocale.value,
  },
  title: props.title,
  meta: [
    { name: 'description', content: props.description },
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
    { property: 'og:image', content: urlImage.value },
    { property: 'og:url', content: currentUrl.value },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: urlImage.value },
  ],
});

useSeoMeta({
  title: props.title,
  description: props.description,
  ogTitle: props.title,
  ogDescription: props.description,
  ogImage: urlImage.value,
  ogUrl: currentUrl.value,
});
</script>
