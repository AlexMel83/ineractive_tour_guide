<template>
  <div class="bg-gray-800 mt-auto p-4">
    <div class="container-footer max-w-[500px] mx-auto px-2 text-sm text-white text-center">
      <div class="contacts flex items-center justify-between gap-4 mb-2">
        <a href="https://maps.app.goo.gl/TV82VnCCFqWFcaM2A" target="_blank">
          <div class="address hover:scale-105 flex items-center gap-2">
            <img width="18" height="18" src="~assets/icon_location.png" alt="icon" loading="lazy" />
            {{ $t('Footer.address') }}
          </div>
        </a>
        <a href="tel:+380954664190">
          <div class="phone hover:scale-105 flex items-center gap-2">
            <img width="18" height="18" src="~assets/icon_phone.png" alt="icon" loading="lazy" />
            +38 095 466-41-90
          </div>
        </a>
      </div>
      {{ $t('Footer.social') }}
      <div class="social-media flex justify-around w-full mt-3">
        <a href="https://www.facebook.com/cfhopeua" target="_blank" class="social">
          <img width="32" height="32" src="/icons/facebook.png" alt="icon" loading="lazy" />
        </a>
        <a href="https://t.me/cfhopeua" target="_blank" class="social">
          <img width="32" height="32" src="/icons/telegram.png" alt="icon" loading="lazy" />
        </a>
        <a href="viber://chat?number=+380987654321" target="_blank" class="social">
          <img width="32" height="32" src="/icons/viber.png" alt="icon" loading="lazy" />
        </a>
        <a href="https://www.instagram.com/cfhopeua/" target="_blank" class="social">
          <img width="32" height="32" src="/icons/instagram.png" alt="icon" loading="lazy" />
        </a>
      </div>
      <div class="flex items-center justify-between gap-4 my-3">
        <nuxt-link to="/terms" class="hover:underline">
          {{ $t('Footer.terms') }}
        </nuxt-link>
        <nuxt-link to="/privacy-policy" class="hover:underline">
          {{ $t('Footer.policy') }}
        </nuxt-link>
        <nuxt-link to="/howtohelp" class="hover:underline">
          {{ $t('Footer.howToHelp') }}
        </nuxt-link>
      </div>
      <div class="mt-2 flex justify-center items-center w-full mx-auto">
        <nuxt-link
          to="https://it.starkon.pp.ua"
          target="_blank"
          class="flex items-center justify-center gap-4 hover:underline"
        >
          <div class="inline-block relative">
            <div class="absolute inset-0 bg-white blur-sm" />
            <img
              src="/cfhope-logo-tranparent.png"
              alt="logo"
              width="48"
              height="48"
              class="relative h-auto object-contain"
              loading="lazy"
            />
          </div>
          <p class="ml-3">{{ $t('Footer.developer') }}<br />it.starkon.pp.ua<br />{{ $t('Footer.copyright') }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.social {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: transform 0.3s;
}
.social img {
  border-radius: 50%;
}
.social:hover img {
  transform: scale(1.2);
}
</style>
