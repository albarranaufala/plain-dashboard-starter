<script setup lang="ts">
defineProps<{
  error?: string | null
}>()
</script>

<template>
  <span v-if="error" class="text-xs text-red-500">{{ error }}</span>
</template>
