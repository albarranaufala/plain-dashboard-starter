<script setup lang="ts">
defineProps<{
  required?: boolean
}>()
</script>

<template>
  <label class="text-sm font-semibold">
    <slot /><span v-if="required" class="text-red-500">&nbsp;*</span>
  </label>
</template>
