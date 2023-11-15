<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { BreadcrumbItem } from '@/types'

defineProps<{
  data: Array<BreadcrumbItem>
}>()
</script>

<template>
  <div class="flex px-3 py-1.5 rounded-full bg-gray-100 text-sm">
    <template v-for="(breadcrumbItem, index) in data" :key="index">
      <component
        :is="breadcrumbItem.path ? RouterLink : 'span'"
        :to="breadcrumbItem.path"
        class="last:font-semibold"
      >
        {{ breadcrumbItem.name }}
      </component>
      <span v-if="index < data.length - 1" class="mx-3">/</span>
    </template>
  </div>
</template>
