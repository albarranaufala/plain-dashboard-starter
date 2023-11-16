<script setup lang="ts">
defineProps<{
  variant?: 'outline'
}>()
</script>

<template>
  <button
    class="px-4 py-2 font-medium transition"
    :class="{
      'bg-green-500 text-white hover:bg-green-600': !variant,
      'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white':
        variant === 'outline'
    }"
  >
    <slot />
  </button>
</template>
