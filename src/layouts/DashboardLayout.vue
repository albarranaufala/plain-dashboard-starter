<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import type { BreadcrumbItem } from '@/types'

defineProps<{
  breadcrumb?: Array<BreadcrumbItem>
}>()
</script>

<template>
  <div class="flex">
    <AppSidebar />
    <div class="flex-1">
      <AppHeader :breadcrumb="breadcrumb" />
      <slot />
    </div>
  </div>
</template>
