<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <label class="inline-flex">
    <input type="radio" class="w-5 h-5" />
    <span v-if="label" class="ml-2 text-sm">{{ label }}</span>
  </label>
</template>
