<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="btn-share" :class="type">
    <img :src="icon" :alt="type.charAt(0).toUpperCase() + type.slice(1)" class="w-6 h-6" />
    <span>{{ label }}</span>
  </a>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['facebook', 'viber', 'telegram'].includes(value),
  },
});
</script>

<style scoped>
.btn-share {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.3s;
  text-decoration: none;
  font-weight: bold;
}

.btn-share img {
  width: 24px;
  height: 24px;
}

.btn-share.facebook {
  background-color: #3b5998;
  color: white;
}

.btn-share.facebook:hover {
  background-color: #2d4373;
}

.btn-share.viber {
  background-color: #665ca7;
  color: white;
}

.btn-share.viber:hover {
  background-color: #4a3d77;
}

.btn-share.telegram {
  background-color: #0088cc;
  color: white;
}

.btn-share.telegram:hover {
  background-color: #005f8a;
}
</style>
