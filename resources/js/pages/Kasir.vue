<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: dashboard().url },
  { title: 'Kasir', href: '/kasir' },
];

// Dummy produk pemancingan
const products = [
  { id: 1, name: 'Tiket Masuk', price: 20000 },
  { id: 2, name: 'Sewa Alat Pancing', price: 50000 },
  { id: 3, name: 'Umpan Ikan', price: 10000 },
  { id: 4, name: 'Minuman Dingin', price: 15000 },
  { id: 5, name: 'Makanan Ringan', price: 12000 },
];

// Dummy keranjang
const cart = [
  { id: 1, name: 'Tiket Masuk', qty: 2, price: 20000 },
  { id: 3, name: 'Umpan Ikan', qty: 3, price: 10000 },
];

// Hitung total
const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

// Format rupiah
function formatCurrency(value: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
}
</script>

<template>
  <Head title="Kasir" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Daftar Produk -->
      <div class="md:col-span-2">
        <h2 class="text-xl font-bold mb-4">Daftar Produk</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div
            v-for="product in products"
            :key="product.id"
            class="border rounded-xl p-4 flex flex-col items-center justify-center hover:shadow cursor-pointer"
          >
            <p class="font-semibold">{{ product.name }}</p>
            <p class="text-gray-600">{{ formatCurrency(product.price) }}</p>
            <button
              class="mt-2 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Tambah
            </button>
          </div>
        </div>
      </div>

      <!-- Keranjang -->
      <div>
        <h2 class="text-xl font-bold mb-4">Keranjang</h2>
        <div class="border rounded-xl p-4 flex flex-col gap-3">
          <div
            v-for="item in cart"
            :key="item.id"
            class="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p class="font-semibold">{{ item.name }}</p>
              <p class="text-sm text-gray-500">Qty: {{ item.qty }}</p>
            </div>
            <p class="font-semibold">
              {{ formatCurrency(item.qty * item.price) }}
            </p>
          </div>

          <!-- Ringkasan -->
          <div class="mt-4 pt-4 border-t flex justify-between font-bold">
            <span>Total</span>
            <span>{{ formatCurrency(total) }}</span>
          </div>

          <button
            class="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Bayar
          </button>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
