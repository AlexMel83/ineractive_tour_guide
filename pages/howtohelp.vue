<template>
  <section class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8 dark:text-white">
      {{ $t('HowToHelp.title') }}
    </h1>

    <div class="bg-gray-100 p-6 rounded-lg shadow-md mb-1">
      <h2 class="text-2xl font-semibold">
        {{ $t('HowToHelp.volonters') }}
      </h2>
      <p class="mt-2 text-lg">
        {{ $t('HowToHelp.volontersDescription') }}
      </p>
      <ul class="list-disc list-inside mt-4 space-y-2 text-lg">
        <li>
          <strong>{{ $t('HowToHelp.designers[0]') }}</strong
          ><span>{{ $t('HowToHelp.designers[1]') }}</span>
        </li>
        <li>
          <strong>{{ $t('HowToHelp.QA[0]') }}</strong
          ><span>{{ $t('HowToHelp.QA[1]') }}</span>
        </li>
        <li>
          <strong>{{ $t('HowToHelp.lawyers[0]') }}</strong
          ><span>{{ $t('HowToHelp.lawyers[1]') }}</span>
        </li>
        <li>
          <strong>{{ $t('HowToHelp.ngos[0]') }}</strong
          ><span>{{ $t('HowToHelp.ngos[1]') }}</span>
        </li>
      </ul>
      <p class="mt-2 text-lg">
        {{ $t('HowToHelp.ifYouStarterText') }}
        <a href="mailto:it@starkon.pp.ua" target="_blank" class="text-blue-600 hover:text-blue-800">
          it@starkon.pp.ua
        </a>
        {{ $t('HowToHelp.ifYouStarterAfterLink') }}
      </p>
    </div>

    <div class="bg-gray-100 p-6 rounded-lg shadow-md mb-1">
      <h2 class="text-2xl font-semibold">
        {{ $t('HowToHelp.supportTitle') }}
      </h2>
      <p class="mt-2 text-lg">
        {{ $t('HowToHelp.supportDescription') }}
      </p>
    </div>

    <div class="bg-gray-100 p-6 rounded-lg shadow-md mb-1">
      <h3 class="text-2xl font-semibold">
        {{ $t('HowToHelp.joinTitle') }}
      </h3>
      <p class="mt-2 text-lg">
        {{ $t('HowToHelp.joinDescriptionText')
        }}<a href="mailto:it@starkon.pp.ua" _blank class="text-blue-600 hover:text-blue-800">it@starkon.pp.ua</a
        >{{ $t('HowToHelp.joinDescriptionAfterLink') }}
      </p>

      <!-- <p class="mt-2 text-lg">{{ $t('HowToHelp.aboutCompany') }}</p> -->
      <p class="mt-2 text-lg">
        {{ $t('HowToHelp.aboutCompany[0]')
        }}<a href="https://cfhope.in.ua" target="__blank" class="text-blue-500 underline hover:text-blue-700"
          >{{ $t('HowToHelp.aboutCompany[1]') }}
        </a>
      </p>
    </div>
  </section>
</template>
