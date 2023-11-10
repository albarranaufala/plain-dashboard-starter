<script setup lang="ts">
import DashboardContent from '@/components/DashboardContent.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
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
    <DashboardContent> Hello world! </DashboardContent>
  </DashboardLayout>
</template>
