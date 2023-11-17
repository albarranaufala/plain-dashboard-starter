<script setup lang="ts">
import DashboardContent from '@/components/DashboardContent.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'
import ButtonSecondary from '@/components/buttons/ButtonSecondary.vue'
import ButtonSuccess from '@/components/buttons/ButtonSuccess.vue'
import ButtonWarning from '@/components/buttons/ButtonWarning.vue'
import ButtonDanger from '@/components/buttons/ButtonDanger.vue'
import CardBordered from '@/components/cards/CardBordered.vue'
</script>

<template>
  <DashboardLayout
    :breadcrumb="[
      {
        name: 'Components'
      },
      {
        name: 'Buttons',
        path: '/components/buttons'
      }
    ]"
  >
    <DashboardContent>
      <CardBordered>
        <h1 class="mb-4 text-lg font-semibold">Default Button</h1>
        <ButtonPrimary class="mt-2 mr-2"> Primary </ButtonPrimary>
        <ButtonSecondary class="mt-2 mr-2"> Secondary </ButtonSecondary>
        <ButtonSuccess class="mt-2 mr-2"> Success </ButtonSuccess>
        <ButtonWarning class="mt-2 mr-2"> Warning </ButtonWarning>
        <ButtonDanger class="mt-2 mr-2"> Danger </ButtonDanger>
      </CardBordered>
      <CardBordered class="mt-6">
        <h1 class="mb-4 text-lg font-semibold">Outlined Button</h1>
        <ButtonPrimary variant="outline" class="mt-2 mr-2"> Primary </ButtonPrimary>
        <ButtonSecondary variant="outline" class="mt-2 mr-2"> Secondary </ButtonSecondary>
        <ButtonSuccess variant="outline" class="mt-2 mr-2"> Success </ButtonSuccess>
        <ButtonWarning variant="outline" class="mt-2 mr-2"> Warning </ButtonWarning>
        <ButtonDanger variant="outline" class="mt-2 mr-2"> Danger </ButtonDanger>
      </CardBordered>
      <CardBordered class="mt-6">
        <h1 class="mb-4 text-lg font-semibold">Loading Button</h1>
        <ButtonPrimary loading class="mt-2 mr-2"> Primary </ButtonPrimary>
        <ButtonSecondary loading class="mt-2 mr-2"> Secondary </ButtonSecondary>
        <ButtonSuccess loading class="mt-2 mr-2"> Success </ButtonSuccess>
        <ButtonWarning loading class="mt-2 mr-2"> Warning </ButtonWarning>
        <ButtonDanger loading class="mt-2 mr-2"> Danger </ButtonDanger>
      </CardBordered>
    </DashboardContent>
  </DashboardLayout>
</template>
