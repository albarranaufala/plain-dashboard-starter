<script setup lang="ts">
defineProps<{
  error?: boolean
}>()
</script>

<template>
  <input
    v-bind="$attrs"
    class="block px-3 py-2 transition border focus:ring focus:ring-gray-200 focus:border-gray-400"
    :class="{
      'border-gray-300': !error,
      'border-red-500': error
    }"
  />
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>
