<script setup lang="ts">
import type { ButtonProps } from '@/types'
import { RouterLink } from 'vue-router'

defineProps<ButtonProps>()
</script>

<template>
  <component
    :is="to ? RouterLink : 'button'"
    :to="to"
    class="inline-block px-4 py-2 font-medium transition"
    :class="{
      'bg-gray-200 hover:bg-gray-300': !variant,
      'border border-gray-200 hover:bg-gray-200': variant === 'outline'
    }"
  >
    <slot />
  </component>
</template>
