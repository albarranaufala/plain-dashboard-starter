<script setup lang="ts">
import { ref } from 'vue'
import IconX from '../icons/IconX.vue'

const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}
</script>

<template>
  <slot name="trigger" :openModal="openModal" />
  <Teleport v-if="isOpen" to="body">
    <div class="fixed inset-0 z-40 flex items-center h-screen bg-black/50" @click="closeModal">
      <div class="w-full max-h-screen p-6 overflow-auto">
        <div class="relative max-w-xl p-6 mx-auto bg-white border" @click.stop>
          <button class="absolute top-0 right-0 p-3" @click="closeModal">
            <IconX class="w-6 h-6 text-gray-500" />
          </button>
          <slot :closeModal="closeModal" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
