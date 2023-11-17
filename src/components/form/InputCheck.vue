<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: any
  value?: any
  label?: string
  trueValue?: any
  falseValue?: any
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
  <label class="inline-flex">
    <input
      v-model="value"
      type="checkbox"
      :true-value="trueValue"
      :false-value="falseValue"
      class="w-5 h-5"
    />
    <span v-if="label" class="ml-2 text-sm">{{ label }}</span>
  </label>
</template>
