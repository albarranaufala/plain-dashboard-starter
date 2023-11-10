import type { RouteLocationRaw } from 'vue-router'

export interface BreadcrumbItem {
  name: string
  route?: RouteLocationRaw
}
