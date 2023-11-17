<script setup lang="ts">
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'
import CardBordered from '@/components/cards/CardBordered.vue'
import InputLabel from '@/components/form/InputLabel.vue'
import InputText from '@/components/form/InputText.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function register() {
  router.push('/')
}
</script>

<template>
  <div class="flex items-center justify-center w-full min-h-screen p-6">
    <CardBordered class="w-full max-w-sm">
      <form @submit.prevent="register">
        <h1 class="text-lg font-semibold">Register</h1>
        <div class="mt-6">
          <InputLabel>Name</InputLabel>
          <InputText required class="w-full mt-2" />
        </div>
        <div class="mt-6">
          <InputLabel>Email</InputLabel>
          <InputText type="email" required class="w-full mt-2" />
        </div>
        <div class="mt-6">
          <InputLabel>Password</InputLabel>
          <InputText type="password" required class="w-full mt-2" />
        </div>
        <div class="mt-6">
          <InputLabel>Password Confirmation</InputLabel>
          <InputText type="password" required class="w-full mt-2" />
        </div>
        <ButtonPrimary type="submit" class="w-full mt-6"> Register </ButtonPrimary>
        <ButtonPrimary to="/login" variant="outline" class="w-full mt-2 text-center">
          Login
        </ButtonPrimary>
      </form>
    </CardBordered>
  </div>
</template>
