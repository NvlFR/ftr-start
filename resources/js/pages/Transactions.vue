<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: dashboard().url },
  { title: 'Transaksi', href: '/transactions' },
];

// Dummy data transaksi
const transactions = [
  {
    id: 'TRX-001',
    customer: 'John Doe',
    amount: 150000,
    status: 'Completed',
    date: '2025-09-01',
  },
  {
    id: 'TRX-002',
    customer: 'Jane Smith',
    amount: 98000,
    status: 'Pending',
    date: '2025-09-03',
  },
  {
    id: 'TRX-003',
    customer: 'Michael Lee',
    amount: 250000,
    status: 'Cancelled',
    date: '2025-09-05',
  },
  {
    id: 'TRX-004',
    customer: 'Sarah Connor',
    amount: 320000,
    status: 'Completed',
    date: '2025-09-07',
  },
];

// Helper untuk format angka rupiah
function formatCurrency(value: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
}
</script>

<template>
  <Head title="Transaksi" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="p-6 flex flex-col gap-6">
      <!-- Title -->
      <div>
        <h1 class="text-2xl font-bold">Daftar Transaksi</h1>
        <p class="text-gray-600 dark:text-gray-400">Riwayat transaksi terbaru</p>
      </div>

      <!-- Table -->
      <div class="rounded-xl border border-sidebar-border/70 dark:border-sidebar-border overflow-hidden">
        <table class="w-full text-left border-collapse">
          <thead class="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th class="p-3">ID</th>
              <th class="p-3">Customer</th>
              <th class="p-3">Tanggal</th>
              <th class="p-3">Total</th>
              <th class="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="trx in transactions"
              :key="trx.id"
              class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td class="p-3 font-medium">{{ trx.id }}</td>
              <td class="p-3">{{ trx.customer }}</td>
              <td class="p-3">{{ trx.date }}</td>
              <td class="p-3">{{ formatCurrency(trx.amount) }}</td>
              <td class="p-3">
                <span
                  :class="{
                    'text-green-600 font-semibold': trx.status === 'Completed',
                    'text-yellow-600 font-semibold': trx.status === 'Pending',
                    'text-red-600 font-semibold': trx.status === 'Cancelled',
                  }"
                >
                  {{ trx.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AppLayout>
</template>
