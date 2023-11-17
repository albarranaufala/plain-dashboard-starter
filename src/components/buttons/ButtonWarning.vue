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
      'bg-yellow-500 text-white hover:bg-yellow-600': !variant,
      'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white':
        variant === 'outline'
    }"
  >
    <slot />
  </component>
</template>
