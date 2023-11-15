<script setup lang="ts">
import DashboardContent from '@/components/DashboardContent.vue'
import CardBordered from '@/components/cards/CardBordered.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import InputText from '@/components/form/InputText.vue'
import InputSelect from '@/components/form/InputSelect.vue'
import InputLabel from '@/components/form/InputLabel.vue'
import InputCheck from '@/components/form/InputCheck.vue'
import InputError from '@/components/form/InputError.vue'
import InputRadio from '@/components/form/InputRadio.vue'
</script>

<template>
  <DashboardLayout
    :breadcrumb="[
      {
        name: 'Components'
      },
      {
        name: 'Form',
        path: '/components/form'
      }
    ]"
  >
    <DashboardContent>
      <CardBordered>
        <h1 class="mb-4 text-lg font-semibold">Text Input</h1>
        <div>
          <InputLabel for="input1">This is label</InputLabel>
          <InputText id="input1" placeholder="Input here..." class="w-full mt-2" />
        </div>
        <div class="mt-4">
          <InputLabel for="input2">This is label</InputLabel>
          <InputText
            id="input2"
            value="This is value"
            placeholder="Input here..."
            class="w-full mt-2"
          />
        </div>
        <div class="mt-4">
          <InputLabel for="input3" required>This is label</InputLabel>
          <InputText id="input3" required placeholder="Input here..." class="w-full mt-2" />
        </div>
        <div class="mt-4">
          <InputLabel for="input4">This is label</InputLabel>
          <InputText
            id="input4"
            value="This is value"
            :error="true"
            placeholder="Input here..."
            class="w-full mt-2"
          />
          <InputError error="This is error" />
        </div>
      </CardBordered>
      <CardBordered class="mt-6">
        <h1 class="mb-4 text-lg font-semibold">Select Input</h1>
        <div>
          <InputLabel for="input5">This is label</InputLabel>
          <InputSelect id="input5" placeholder="Input here..." class="w-full mt-2" />
        </div>
        <div class="mt-4">
          <InputLabel for="input6">This is label</InputLabel>
          <InputSelect id="input6" placeholder="Input here..." class="w-full mt-2" />
        </div>
        <div class="mt-4">
          <InputLabel for="input7" required>This is label</InputLabel>
          <InputSelect id="input7" required placeholder="Input here..." class="w-full mt-2" />
        </div>
        <div class="mt-4">
          <InputLabel for="input8">This is label</InputLabel>
          <InputSelect id="input8" :error="true" placeholder="Input here..." class="w-full mt-2" />
          <InputError error="This is error" />
        </div>
      </CardBordered>
      <CardBordered class="mt-6">
        <h1 class="mb-4 text-lg font-semibold">Checks and Radios</h1>
        <div>
          <InputCheck label="This is checkbox" />
        </div>
        <div class="mt-4">
          <InputRadio label="This is radio" />
        </div>
      </CardBordered>
    </DashboardContent>
  </DashboardLayout>
</template>
