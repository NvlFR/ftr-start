<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';

// Breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: dashboard().url },
  { title: 'CRM', href: '/crm' },
];

// Dummy data customer
const customers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+62 812-3456-7890',
    company: 'PT Maju Jaya',
    status: 'Active',
    lastContact: '2025-09-01',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+62 811-2233-4455',
    company: 'CV Sukses Abadi',
    status: 'Prospect',
    lastContact: '2025-09-05',
  },
  {
    id: 3,
    name: 'Michael Lee',
    email: 'michael@example.com',
    phone: '+62 813-5678-9999',
    company: 'IndoTech',
    status: 'Inactive',
    lastContact: '2025-08-28',
  },
  {
    id: 4,
    name: 'Sarah Connor',
    email: 'sarah@example.com',
    phone: '+62 815-3333-6666',
    company: 'Cyberdyne Systems',
    status: 'Active',
    lastContact: '2025-09-07',
  },
];
</script>

<template>
  <Head title="CRM" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="p-6 flex flex-col gap-6">
      <!-- Title -->
      <div>
        <h1 class="text-2xl font-bold">CRM - Customers</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Manage and track your customers & prospects
        </p>
      </div>

      <!-- Customers Table -->
      <div class="rounded-xl border border-sidebar-border/70 dark:border-sidebar-border overflow-hidden">
        <table class="w-full text-left border-collapse">
          <thead class="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th class="p-3">ID</th>
              <th class="p-3">Name</th>
              <th class="p-3">Email</th>
              <th class="p-3">Phone</th>
              <th class="p-3">Company</th>
              <th class="p-3">Status</th>
              <th class="p-3">Last Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="cust in customers"
              :key="cust.id"
              class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td class="p-3 font-medium">{{ cust.id }}</td>
              <td class="p-3">{{ cust.name }}</td>
              <td class="p-3">{{ cust.email }}</td>
              <td class="p-3">{{ cust.phone }}</td>
              <td class="p-3">{{ cust.company }}</td>
              <td class="p-3">
                <span
                  :class="{
                    'text-green-600 font-semibold': cust.status === 'Active',
                    'text-yellow-600 font-semibold': cust.status === 'Prospect',
                    'text-red-600 font-semibold': cust.status === 'Inactive',
                  }"
                >
                  {{ cust.status }}
                </span>
              </td>
              <td class="p-3">{{ cust.lastContact }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AppLayout>
</template>
