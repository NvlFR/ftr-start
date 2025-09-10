<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');

})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/transactions', function () {
    return Inertia::render('Transactions');
})->name('transactions');
Route::get('/crm', function () {
    return Inertia::render('Crm');
})->name('crm');
Route::get('/kasir', function () {
    return Inertia::render('Kasir');
})->name('kasir');
Route::get('/manajemen-kolam', function () {
    return Inertia::render('ManajemenKolam');
})->name('manajemen.kolam');
Route::get('/manajemen-produk', function () {
    return Inertia::render('ManajemenProduk');
})->name('manajemen-produk');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
