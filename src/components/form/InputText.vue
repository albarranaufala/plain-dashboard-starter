<script setup lang="ts">
defineProps<{
  error?: string | null
}>()
</script>

<template>
  <input
    v-bind="$attrs"
    class="block px-3 py-2 transition border rounded focus:ring focus:ring-gray-200 focus:border-gray-400"
    :class="{
      'border-gray-300': !error,
      'border-red-500': error
    }"
  />
  <span v-if="error" class="text-xs text-red-500">{{ error }}</span>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
