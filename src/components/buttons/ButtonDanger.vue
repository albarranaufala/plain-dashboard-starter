<script setup lang="ts">
import type { ButtonProps } from '@/types'
import { RouterLink } from 'vue-router'
import IconSpinner from '../icons/IconSpinner.vue'

defineProps<ButtonProps>()
</script>

<template>
  <component
    :is="to ? RouterLink : 'button'"
    :to="to"
    class="inline-flex items-center justify-center px-4 py-2 font-medium text-center transition"
    :class="{
      'bg-red-500 text-white hover:bg-red-600': !variant,
      'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white': variant === 'outline'
    }"
  >
    <IconSpinner v-if="loading" class="w-5 h-5 mr-3 animate-spin" />
    <slot />
  </component>
</template>
