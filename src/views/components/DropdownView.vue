<script setup lang="ts">
import DashboardContent from '@/components/DashboardContent.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import CardBordered from '@/components/cards/CardBordered.vue'
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'
import DropdownWrapper from '@/components/dropdown/DropdownWrapper.vue'
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
        <h1 class="mb-4 text-lg font-semibold">Default Dropdown</h1>
        <DropdownWrapper>
          <template #trigger="{ toggle }">
            <ButtonPrimary @click="toggle"> Dropdown </ButtonPrimary>
          </template>

          <div class="p-4 bg-white border">This is the dropdown content</div>
        </DropdownWrapper>
      </CardBordered>
      <CardBordered class="mt-6">
        <h1 class="mb-4 text-lg font-semibold">Right Aligned Dropdown</h1>
        <DropdownWrapper align="right">
          <template #trigger="{ toggle }">
            <ButtonPrimary @click="toggle"> Dropdown </ButtonPrimary>
          </template>

          <div class="p-4 bg-white border">This is the dropdown content</div>
        </DropdownWrapper>
      </CardBordered>
      <CardBordered class="mt-6">
        <h1 class="mb-4 text-lg font-semibold">Center Aligned Dropdown</h1>
        <DropdownWrapper align="center">
          <template #trigger="{ toggle }">
            <ButtonPrimary @click="toggle"> Dropdown </ButtonPrimary>
          </template>

          <div class="p-4 bg-white border">This is the dropdown content</div>
        </DropdownWrapper>
      </CardBordered>
    </DashboardContent>
  </DashboardLayout>
</template>
