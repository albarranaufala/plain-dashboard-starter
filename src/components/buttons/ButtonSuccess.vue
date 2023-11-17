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
      'bg-green-500 text-white hover:bg-green-600': !variant,
      'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white':
        variant === 'outline'
    }"
  >
    <slot />
  </component>
</template>
