<script setup lang="ts">
import TheBreadcrumb from './TheBreadcrumb.vue'
import type { BreadcrumbItem } from '@/types'

defineProps<{
  breadcrumb?: Array<BreadcrumbItem>
}>()
</script>

<template>
  <header class="border-b flex items-center justify-between px-6 min-h-[72px]">
    <div>
      <TheBreadcrumb v-if="breadcrumb" :data="breadcrumb" />
    </div>
    <div>
      <button class="flex items-center p-2 hover:bg-gray-100">
        <div class="mr-3 h-8 w-8 bg-gray-500 rounded-full" />
        <p class="font-semibold">John Doe</p>
      </button>
    </div>
  </header>
</template>
