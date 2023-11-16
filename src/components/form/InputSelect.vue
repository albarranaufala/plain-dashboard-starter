<script setup lang="ts">
defineProps<{
  placeholder?: string
  error?: boolean
}>()
</script>

<template>
  <select
    v-bind="$attrs"
    class="block px-3 py-2 transition border focus:ring focus:ring-gray-200 focus:border-gray-400"
    :class="{
      'border-gray-300': !error,
      'border-red-500': error
    }"
  >
    <option v-if="placeholder" selected disabled>{{ placeholder }}</option>
    <slot />
  </select>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
