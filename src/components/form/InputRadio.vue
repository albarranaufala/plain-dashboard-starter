<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: any
  value?: any
  label?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: any): void
}>()

const vModelValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <label class="inline-flex">
    <input v-model="vModelValue" :value="value" type="radio" class="w-5 h-5" />
    <span v-if="label" class="ml-2 text-sm">{{ label }}</span>
  </label>
</template>
