<script setup lang="ts">
import DashboardContent from '@/components/DashboardContent.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import CardBordered from '@/components/cards/CardBordered.vue'
import TableWrapper from '@/components/table/TableWrapper.vue'
import TableHead from '@/components/table/TableHead.vue'
import TableHeadRow from '@/components/table/TableHeadRow.vue'
import TableHeadCol from '@/components/table/TableHeadCol.vue'
import TableBody from '@/components/table/TableBody.vue'
import TableBodyCol from '@/components/table/TableBodyCol.vue'
import TableBodyRow from '@/components/table/TableBodyRow.vue'
</script>

<template>
  <DashboardLayout
    :breadcrumb="[
      {
        name: 'Components'
      },
      {
        name: 'Buttons',
        path: '/components/buttons'
      }
    ]"
  >
    <DashboardContent>
      <CardBordered>
        <h1 class="mb-4 text-lg font-semibold">Default Table</h1>

        <TableWrapper>
          <TableHead>
            <TableHeadRow>
              <TableHeadCol> Col 1 </TableHeadCol>
              <TableHeadCol> Col 2 </TableHeadCol>
              <TableHeadCol> Col 3 </TableHeadCol>
              <TableHeadCol> Col 4 </TableHeadCol>
              <TableHeadCol> Col 5 </TableHeadCol>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableBodyRow>
              <TableBodyCol>Row 1</TableBodyCol>
              <TableBodyCol>Row 1</TableBodyCol>
              <TableBodyCol>Row 1</TableBodyCol>
              <TableBodyCol>Row 1</TableBodyCol>
              <TableBodyCol>Row 1</TableBodyCol>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCol>Row 2</TableBodyCol>
              <TableBodyCol>Row 2</TableBodyCol>
              <TableBodyCol>Row 2</TableBodyCol>
              <TableBodyCol>Row 2</TableBodyCol>
              <TableBodyCol>Row 2</TableBodyCol>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCol>Row 3</TableBodyCol>
              <TableBodyCol>Row 3</TableBodyCol>
              <TableBodyCol>Row 3</TableBodyCol>
              <TableBodyCol>Row 3</TableBodyCol>
              <TableBodyCol>Row 3</TableBodyCol>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCol>Row 4</TableBodyCol>
              <TableBodyCol>Row 4</TableBodyCol>
              <TableBodyCol>Row 4</TableBodyCol>
              <TableBodyCol>Row 4</TableBodyCol>
              <TableBodyCol>Row 4</TableBodyCol>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCol>Row 5</TableBodyCol>
              <TableBodyCol>Row 5</TableBodyCol>
              <TableBodyCol>Row 5</TableBodyCol>
              <TableBodyCol>Row 5</TableBodyCol>
              <TableBodyCol>Row 5</TableBodyCol>
            </TableBodyRow>
          </TableBody>
        </TableWrapper>
      </CardBordered>
    </DashboardContent>
  </DashboardLayout>
</template>
