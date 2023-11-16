<script setup lang="ts">
defineProps<{
  variant?: 'outline'
}>()
</script>

<template>
  <button
    class="px-4 py-2 font-medium transition"
    :class="{
      'bg-gray-500 text-white hover:bg-gray-600': !variant,
      'border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white':
        variant === 'outline'
    }"
  >
    <slot />
  </button>
</template>
