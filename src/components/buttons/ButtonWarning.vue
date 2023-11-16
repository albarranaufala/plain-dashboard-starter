<script setup lang="ts">
defineProps<{
  variant?: 'outline'
}>()
</script>

<template>
  <button
    class="px-4 py-2 font-medium transition"
    :class="{
      'bg-yellow-500 text-white hover:bg-yellow-600': !variant,
      'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white':
        variant === 'outline'
    }"
  >
    <slot />
  </button>
</template>
