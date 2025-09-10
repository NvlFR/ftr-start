<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: dashboard().url },
  { title: 'Manajemen Produk', href: '/manajemen-produk' },
];

// Dummy data produk
const produkList = [
  {
    id: 1,
    nama: 'Mie Instan',
    kategori: 'Makanan',
    stok: 100,
    harga: 3500,
  },
  {
    id: 2,
    nama: 'Aqua Botol 600ml',
    kategori: 'Minuman',
    stok: 50,
    harga: 5000,
  },
  {
    id: 3,
    nama: 'Snack Ring',
    kategori: 'Cemilan',
    stok: 75,
    harga: 7500,
  },
];

// Format rupiah
function formatCurrency(value: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
}
</script>

<template>
  <Head title="Manajemen Produk" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-6">Manajemen Produk</h1>

      <div class="overflow-x-auto rounded-xl border">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Nama Produk</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Kategori</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Stok</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Harga</th>
              <th class="px-4 py-2 text-center text-sm font-semibold text-gray-600">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 bg-grey-50">
            <tr v-for="produk in produkList" :key="produk.id">
              <td class="px-4 py-3">{{ produk.nama }}</td>
              <td class="px-4 py-3">{{ produk.kategori }}</td>
              <td class="px-4 py-3">{{ produk.stok }}</td>
              <td class="px-4 py-3">{{ formatCurrency(produk.harga) }}</td>
              <td class="px-4 py-3 text-center space-x-2">
                <button class="px-3 py-1 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Edit</button>
                <button class="px-3 py-1 text-sm bg-rose-600 text-white rounded-lg hover:bg-rose-700">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AppLayout>
</template>
