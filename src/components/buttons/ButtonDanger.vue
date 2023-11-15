<script setup lang="ts">
defineProps<{
  variant?: 'outline'
}>()
</script>

<template>
  <button
    class="px-4 py-2 font-medium text-white transition rounded"
    :class="{
      'bg-red-500 text-white hover:bg-red-600': !variant,
      'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white': variant === 'outline'
    }"
  >
    <slot />
  </button>
</template>
