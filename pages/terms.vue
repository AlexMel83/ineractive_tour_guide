<template>
  <main class="bg-gray-50 min-h-screen">
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          {{ $t('DonationServiceTerms.title') }}
        </h1>
      </div>
    </div>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg p-4">
          <h2 class="text-2xl font-semibold mb-4">
            {{ $t('DonationServiceTerms.contractTitle') }}
          </h2>

          <p class="mb-4">
            {{ $t('DonationServiceTerms.description') }}
          </p>

          <h3 class="text-xl font-semibold mt-6 mb-2">
            {{ $t('DonationServiceTerms.definitionTitle') }}
          </h3>
          <ul class="list-disc pl-5 mb-4">
            <li>
              <p>
                <strong>{{ $t('DonationServiceTerms.definition1[0]') }}</strong
                >{{ $t('DonationServiceTerms.definition1[1]') }}
              </p>
            </li>
            <li>
              <p>
                <strong>{{ $t('DonationServiceTerms.definition2[0]') }}</strong
                >{{ $t('DonationServiceTerms.definition2[1]') }}
              </p>
            </li>
            <li>
              <p>
                <strong>{{ $t('DonationServiceTerms.definition3[0]') }}</strong
                >{{ $t('DonationServiceTerms.definition3[1]') }}
              </p>
            </li>
            <li>
              <p>
                <strong>{{ $t('DonationServiceTerms.definition4[0]') }}</strong
                >{{ $t('DonationServiceTerms.definition4[1]') }}
              </p>
            </li>
          </ul>

          <h3 class="text-xl font-semibold mt-6 mb-2">
            {{ $t('DonationServiceTerms.subjectTitle') }}
          </h3>
          <p class="mb-4">
            {{ $t('DonationServiceTerms.subjectDescription1') }}
          </p>
          <p class="mb-4">
            {{ $t('DonationServiceTerms.subjectDescription2') }}
          </p>
          <p class="mb-4">
            {{ $t('DonationServiceTerms.subjectDescription2') }}
          </p>

          <!-- Додайте інші розділи аналогічним чином -->

          <h3 class="text-xl font-semibold mt-6 mb-2">
            {{ $t('DonationServiceTerms.contactsTitle') }}
          </h3>
          <p class="mb-2">
            {{ $t('DonationServiceTerms.fondName') }}<br />
            {{ $t('DonationServiceTerms.edrpou') }}<br />
            {{ $t('DonationServiceTerms.address') }}<br />
            https://cfhope.in.ua boss@cfhope.in.ua
          </p>
          <p class="mb-4">
            {{ $t('DonationServiceTerms.bankName') }}<br />
            {{ $t('DonationServiceTerms.bankAccount') }}
          </p>
          <p class="font-semibold">
            {{ $t('DonationServiceTerms.director') }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
