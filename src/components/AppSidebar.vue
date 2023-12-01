<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

interface Menu {
  name: string
  path?: string
  exactActive?: boolean
  children?: Array<Menu>
  expanded?: boolean
}

const menus: Ref<Array<Menu>> = ref([
  {
    name: 'Home',
    path: '/',
    exactActive: true
  },
  {
    name: 'Components',
    children: [
      {
        name: 'Buttons',
        path: '/components/buttons'
      },
      {
        name: 'Charts',
        path: '/components/charts'
      },
      {
        name: 'Dropdown',
        path: '/components/dropdown'
      },
      {
        name: 'Form',
        path: '/components/form'
      },
      {
        name: 'Modal',
        path: '/components/modal'
      },
      {
        name: 'Table',
        path: '/components/table'
      }
    ],
    expanded: false
  },
  {
    name: 'Example Pages',
    children: [
      {
        name: 'Login',
        path: '/login'
      },
      {
        name: 'Register',
        path: '/register'
      }
    ],
    expanded: false
  }
])

const route = useRoute()
menus.value.forEach((menu, i) => {
  if (menu.children) {
    menu.children.forEach((childMenu) => {
      if (childMenu.path === route.path) {
        menus.value[i].expanded = true
      }
    })
  }
})
</script>

<template>
  <aside class="w-[280px] border-r h-screen">
    <div>
      <div class="h-8 w-[160px] bg-gray-500 mx-auto mt-6" />
    </div>
    <nav class="flex flex-col mt-6">
      <template v-for="(menu, index) in menus" :key="index">
        <component
          :is="menu.path ? RouterLink : 'button'"
          :to="menu.path"
          class="flex justify-between px-6 py-4 hover:bg-gray-100"
          v-bind="{
            ...(menu.exactActive && { 'exact-active-class': 'bg-gray-100' }),
            ...(!menu.exactActive && { 'active-class': 'bg-gray-100' })
          }"
          v-on="menu.children ? { click: () => (menu.expanded = !menu.expanded) } : {}"
        >
          <div class="flex">
            <div class="w-6 h-6 mr-3 bg-gray-300" />
            {{ menu.name }}
          </div>
          <span
            v-if="menu.children"
            class="mt-1 text-xs text-gray-500 transition duration-200"
            :class="{ 'rotate-180': menu.expanded }"
            >&#9660;</span
          >
        </component>
        <div class="overflow-y-hidden">
          <Transition name="slide-down">
            <div
              v-if="menu.children?.length && menu.expanded"
              class="flex flex-col mx-6 border-b border-l border-r"
            >
              <RouterLink
                v-for="(childMenu, index2) in menu.children"
                :key="index2"
                :to="childMenu.path || '/'"
                v-bind="{
                  ...(menu.exactActive && { 'exact-active-class': 'bg-gray-100' }),
                  ...(!menu.exactActive && { 'active-class': 'bg-gray-100' })
                }"
                class="px-6 py-4 hover:bg-gray-100"
              >
                {{ childMenu.name }}
              </RouterLink>
            </div>
          </Transition>
        </div>
      </template>
    </nav>
  </aside>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  @apply transition duration-200 ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  @apply -translate-y-full;
}
</style>
