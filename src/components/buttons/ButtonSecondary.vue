<script setup lang="ts">
defineProps<{
  variant?: 'outline'
}>()
</script>

<template>
  <button
    class="px-4 py-2 font-medium transition"
    :class="{
      'bg-gray-200 hover:bg-gray-300': !variant,
      'border border-gray-200 hover:bg-gray-200': variant === 'outline'
    }"
  >
    <slot />
  </button>
</template>
