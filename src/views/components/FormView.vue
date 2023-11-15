<script setup lang="ts">
import DashboardContent from '@/components/DashboardContent.vue'
import CardBordered from '@/components/cards/CardBordered.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import InputText from '@/components/form/InputText.vue'
import InputLabel from '@/components/form/InputLabel.vue'
</script>

<template>
  <DashboardLayout
    :breadcrumb="[
      {
        name: 'Components'
      },
      {
        name: 'Buttons',
        route: '/components/buttons'
      }
    ]"
  >
    <DashboardContent>
      <CardBordered>
        <h1 class="mb-4 text-lg font-semibold">Text Input</h1>
        <div>
          <InputLabel>This is label</InputLabel>
          <InputText placeholder="Input here..." class="mt-2" />
        </div>
        <div class="mt-4">
          <InputLabel>This is label</InputLabel>
          <InputText value="This is value" placeholder="Input here..." class="mt-2" />
        </div>
        <div class="mt-4">
          <InputLabel>This is label</InputLabel>
          <InputText
            value="This is value"
            error="This is error"
            placeholder="Input here..."
            class="mt-2"
          />
        </div>
      </CardBordered>
    </DashboardContent>
  </DashboardLayout>
</template>
