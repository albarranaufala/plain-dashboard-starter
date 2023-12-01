<script setup lang="ts">
import DashboardContent from '@/components/DashboardContent.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import CardBordered from '@/components/cards/CardBordered.vue'
import VueApexChart from 'vue3-apexcharts'
import { ref } from 'vue'

const chartOptions1 = ref({
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val: number) {
        return '$ ' + val + ' thousands'
      }
    }
  }
})

const series1 = ref([
  {
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  },
  {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  },
  {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }
])

const chartOptions2 = ref({
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
  }
})

const series2 = ref([
  {
    name: 'Desktops',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }
])

const chartOptions3 = ref({
  chart: {
    width: 380,
    type: 'pie'
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
})

const series3 = ref([44, 55, 13, 43, 22])

const chartOptions4 = ref({
  chart: {
    type: 'area',
    height: 350,
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
  }
})

const series4 = ref([
  {
    name: 'Desktops',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }
])
</script>

<template>
  <DashboardLayout
    :breadcrumb="[
      {
        name: 'Components'
      },
      {
        name: 'Charts',
        path: '/components/charts'
      }
    ]"
  >
    <DashboardContent>
      <div class="grid grid-cols-2 gap-6">
        <CardBordered>
          <h1 class="mb-4 text-lg font-semibold">Bar Chart</h1>

          <VueApexChart type="bar" height="350" :options="chartOptions1" :series="series1" />
        </CardBordered>
        <CardBordered>
          <h1 class="mb-4 text-lg font-semibold">Line Chart</h1>

          <VueApexChart type="line" height="350" :options="chartOptions2" :series="series2" />
        </CardBordered>
        <CardBordered>
          <h1 class="mb-4 text-lg font-semibold">Pie Chart</h1>

          <VueApexChart type="pie" height="350" :options="chartOptions3" :series="series3" />
        </CardBordered>
        <CardBordered>
          <h1 class="mb-4 text-lg font-semibold">Area Chart</h1>

          <VueApexChart type="area" height="350" :options="chartOptions4" :series="series4" />
        </CardBordered>
      </div>
    </DashboardContent>
  </DashboardLayout>
</template>
