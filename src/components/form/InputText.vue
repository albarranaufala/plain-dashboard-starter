<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: any
  error?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: any): void
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input
    v-bind="$attrs"
    v-model="value"
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
