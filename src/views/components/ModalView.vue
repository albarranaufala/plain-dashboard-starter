<script setup lang="ts">
import DashboardContent from '@/components/DashboardContent.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import CardBordered from '@/components/cards/CardBordered.vue'
import ModalWrapper from '@/components/modal/ModalWrapper.vue'
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'
import ButtonSecondary from '@/components/buttons/ButtonSecondary.vue'
</script>

<template>
  <DashboardLayout
    :breadcrumb="[
      {
        name: 'Components'
      },
      {
        name: 'Modal',
        path: '/components/modal'
      }
    ]"
  >
    <DashboardContent>
      <CardBordered>
        <h1 class="mb-4 text-lg font-semibold">Default Modal</h1>

        <ModalWrapper>
          <template #trigger="{ openModal }">
            <ButtonPrimary @click="openModal"> Open Modal </ButtonPrimary>
          </template>

          <template #default="{ closeModal }">
            <p class="font-bold">Modal Header</p>
            <p class="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit ex veniam, error
              earum quod neque vel magnam nam repellendus explicabo officiis nemo animi architecto
              nobis laudantium enim iusto voluptatibus.
            </p>
            <ButtonSecondary class="mt-4" @click="closeModal"> Cancel </ButtonSecondary>
          </template>
        </ModalWrapper>
      </CardBordered>
      <CardBordered class="mt-6">
        <h1 class="mb-4 text-lg font-semibold">Large Modal</h1>

        <ModalWrapper size="large">
          <template #trigger="{ openModal }">
            <ButtonPrimary @click="openModal"> Open Modal </ButtonPrimary>
          </template>

          <template #default="{ closeModal }">
            <p class="font-bold">Modal Header</p>
            <p class="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit ex veniam, error
              earum quod neque vel magnam nam repellendus explicabo officiis nemo animi architecto
              nobis laudantium enim iusto voluptatibus.
            </p>
            <ButtonSecondary class="mt-4" @click="closeModal"> Cancel </ButtonSecondary>
          </template>
        </ModalWrapper>
      </CardBordered>
      <CardBordered class="mt-6">
        <h1 class="mb-4 text-lg font-semibold">Small Modal</h1>

        <ModalWrapper size="small">
          <template #trigger="{ openModal }">
            <ButtonPrimary @click="openModal"> Open Modal </ButtonPrimary>
          </template>

          <template #default="{ closeModal }">
            <p class="font-bold">Modal Header</p>
            <p class="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit ex veniam, error
              earum quod neque vel magnam nam repellendus explicabo officiis nemo animi architecto
              nobis laudantium enim iusto voluptatibus.
            </p>
            <ButtonSecondary class="mt-4" @click="closeModal"> Cancel </ButtonSecondary>
          </template>
        </ModalWrapper>
      </CardBordered>
    </DashboardContent>
  </DashboardLayout>
</template>
