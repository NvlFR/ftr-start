<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
                    class="relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-xl border border-sidebar-border/70 p-4 text-center dark:border-sidebar-border"
                >
                    <h2 class="text-xl font-bold">{{ stat.value }}</h2>
                    <p class="text-gray-600 dark:text-gray-300">{{ stat.title }}</p>
                    <small class="text-sm text-gray-400">{{ stat.description }}</small>
                </div>
            </div>

            <!-- Table -->
            <div>
                <Avatar>
                    <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div class="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 p-4 md:min-h-min dark:border-sidebar-border">
                <h3 class="mb-4 text-lg font-semibold">Recent Orders</h3>
                <table class="w-full border-collapse text-left">
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
                            class="border-b border-gray-200 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
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
