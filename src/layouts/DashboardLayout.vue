<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <div class="flex">
    <AppSidebar />
    <div class="flex-1">
      <AppHeader />
      <slot />
    </div>
  </div>
</template>
