<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'

interface Menu {
  name: string
  route?: RouteLocationRaw
  exactActive?: boolean
  children?: Array<Menu>
  expanded?: boolean
}

const menus: Ref<Array<Menu>> = ref([
  {
    name: 'Home',
    route: {
      name: 'home'
    },
    exactActive: true
  },
  {
    name: 'Components',
    route: '/components'
  },
  {
    name: 'Dropdown',
    children: [
      {
        name: 'Item 1',
        route: '/item-1'
      },
      {
        name: 'Item 2',
        route: '/item-2'
      },
      {
        name: 'Item 3',
        route: '/item-3'
      }
    ],
    expanded: false
  },
  {
    name: 'Menu',
    route: '/menu'
  }
])
</script>

<template>
  <aside class="w-[280px] border-r h-screen">
    <div>
      <div class="h-8 w-[160px] bg-gray-500 mx-auto mt-6" />
    </div>
    <nav class="mt-6 flex flex-col">
      <template v-for="(menu, index) in menus" :key="index">
        <component
          :is="menu.route ? RouterLink : 'button'"
          :to="menu.route"
          class="px-6 py-4 flex justify-between hover:bg-gray-100"
          v-bind="{
            ...(menu.exactActive && { 'exact-active-class': 'bg-gray-100' }),
            ...(!menu.exactActive && { 'active-class': 'bg-gray-100' })
          }"
          v-on="menu.children ? { click: () => (menu.expanded = !menu.expanded) } : {}"
        >
          <div class="flex">
            <div class="h-6 w-6 bg-gray-300 mr-3" />
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
              class="mx-6 border-r border-b border-l flex flex-col"
            >
              <RouterLink to="/components" class="px-6 py-4 hover:bg-gray-100"> Item 1 </RouterLink>
              <RouterLink to="/components" class="px-6 py-4 hover:bg-gray-100"> Item 2 </RouterLink>
              <RouterLink to="/components" class="px-6 py-4 hover:bg-gray-100"> Item 3 </RouterLink>
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
