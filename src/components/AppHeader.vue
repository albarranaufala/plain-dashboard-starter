<script setup lang="ts">
import TheBreadcrumb from './TheBreadcrumb.vue'
import DropdownWrapper from './dropdown/DropdownWrapper.vue'
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
      <DropdownWrapper align="right">
        <template #trigger="{ toggle }">
          <button class="flex items-center p-2 hover:bg-gray-100" @click="toggle">
            <div class="w-8 h-8 mr-3 bg-gray-500 rounded-full" />
            <p class="font-semibold">John Doe</p>
          </button>
        </template>

        <div class="flex flex-col w-[200px] p-2 bg-white border">
          <RouterLink to="/setting" class="px-4 py-2 text-left hover:bg-gray-100"
            >Setting</RouterLink
          >
          <button class="px-4 py-2 text-left hover:bg-gray-100">Logout</button>
        </div>
      </DropdownWrapper>
    </div>
  </header>
</template>
