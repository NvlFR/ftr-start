<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: dashboard().url },
  { title: 'Manajemen Kolam', href: '/manajemen-kolam' },
];

// Dummy data kolam
const kolamList = [
  { id: 1, nama: 'Kolam A', kapasitas: 10, status: 'Tersedia', tarif: 50000 },
  { id: 2, nama: 'Kolam B', kapasitas: 8, status: 'Penuh', tarif: 45000 },
  { id: 3, nama: 'Kolam C', kapasitas: 12, status: 'Maintenance', tarif: 60000 },
];

// Format rupiah
function formatCurrency(value: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
}

// Class status
function statusClass(status: string) {
  if (status === 'Tersedia') return 'text-green-600 font-semibold';
  if (status === 'Penuh') return 'text-red-600 font-semibold';
  return 'text-yellow-600 font-semibold';
}
</script>

<template>
  <Head title="Manajemen Kolam" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="p-6 flex flex-col gap-6">
      <h1 class="text-2xl font-bold">Manajemen Kolam</h1>

      <!-- Card wrapper sama seperti di Kasir.vue -->
      <div
        class="relative overflow-x-auto rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-white dark:bg-gray-900"
      >
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Nama Kolam</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Kapasitas</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Tarif</th>
              <th class="px-4 py-2 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
            <tr
              v-for="kolam in kolamList"
              :key="kolam.id"
              class="hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td class="px-4 py-3">{{ kolam.nama }}</td>
              <td class="px-4 py-3">{{ kolam.kapasitas }} orang</td>
              <td class="px-4 py-3">
                <span :class="statusClass(kolam.status)">{{ kolam.status }}</span>
              </td>
              <td class="px-4 py-3">{{ formatCurrency(kolam.tarif) }}</td>
              <td class="px-4 py-3 text-center space-x-2">
                <button
                  class="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  class="px-3 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AppLayout>
</template>
