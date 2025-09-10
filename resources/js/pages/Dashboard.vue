<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: dashboard().url,
  },
];

// Dummy data untuk cards
const stats = [
  {
    title: 'Users',
    value: '1,245',
    description: 'Total registered users',
  },
  {
    title: 'Revenue',
    value: '$12,340',
    description: 'This month',
  },
  {
    title: 'Orders',
    value: '320',
    description: 'Pending + Completed',
  },
];

// Dummy data untuk table
const recentOrders = [
  { id: 1, customer: 'John Doe', total: '$120.00', status: 'Completed' },
  { id: 2, customer: 'Jane Smith', total: '$89.00', status: 'Pending' },
  { id: 3, customer: 'Michael Lee', total: '$240.00', status: 'Completed' },
  { id: 4, customer: 'Sarah Connor', total: '$300.00', status: 'Cancelled' },
];
</script>

<template>
  <Head title="Dashboard" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
      <!-- Cards -->
      <div class="grid auto-rows-min gap-4 md:grid-cols-3">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border p-4 flex flex-col justify-center items-center text-center"
        >
          <h2 class="text-xl font-bold">{{ stat.value }}</h2>
          <p class="text-gray-600 dark:text-gray-300">{{ stat.title }}</p>
          <small class="text-sm text-gray-400">{{ stat.description }}</small>
        </div>
      </div>

      <!-- Table -->
      <div class="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border p-4">
        <h3 class="text-lg font-semibold mb-4">Recent Orders</h3>
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-gray-300 dark:border-gray-700">
              <th class="p-2">ID</th>
              <th class="p-2">Customer</th>
              <th class="p-2">Total</th>
              <th class="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="order in recentOrders"
              :key="order.id"
              class="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td class="p-2">{{ order.id }}</td>
              <td class="p-2">{{ order.customer }}</td>
              <td class="p-2">{{ order.total }}</td>
              <td class="p-2">
                <span
                  :class="{
                    'text-green-600': order.status === 'Completed',
                    'text-yellow-600': order.status === 'Pending',
                    'text-red-600': order.status === 'Cancelled',
                  }"
                >
                  {{ order.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AppLayout>
</template>
