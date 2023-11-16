<script setup lang="ts">
import { ref, type Ref, nextTick, computed } from 'vue'

const props = defineProps<{
  align?: 'left' | 'right' | 'center'
}>()

const isOpen = ref(false)
const dropdownRef: Ref<HTMLDivElement | null> = ref(null)
const dropdownContentRef: Ref<HTMLDivElement | null> = ref(null)
const dropdownLeft = ref(0)
const dropdownTop = ref(0)
const dropdownWidth = ref(0)
const dropdownContentWidth = ref(0)

async function toggle() {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    dropdownLeft.value = dropdownRef.value?.getBoundingClientRect().left || 0
    dropdownTop.value = dropdownRef.value?.getBoundingClientRect().bottom || 0
    dropdownWidth.value = dropdownRef.value?.getBoundingClientRect().width || 0

    await nextTick()

    dropdownContentWidth.value = dropdownContentRef.value?.getBoundingClientRect().width || 0
  }
}

const translateX = computed(() => {
  if (props.align === 'right') {
    return dropdownWidth.value - dropdownContentWidth.value
  } else if (props.align === 'center') {
    return (dropdownWidth.value - dropdownContentWidth.value) / 2
  }
  return 0
})
</script>

<template>
  <div ref="dropdownRef" class="inline-block">
    <slot name="trigger" :toggle="toggle" />
    <div
      v-if="isOpen"
      ref="dropdownContentRef"
      class="absolute"
      :style="{
        top: dropdownTop + 'px',
        left: dropdownLeft + 'px',
        transform: `translate(${translateX}px, 0)`
      }"
    >
      <slot />
    </div>
  </div>
</template>
