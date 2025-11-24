<?php

// use Illuminate\Support\Facades\Route;
// use Inertia\Inertia;
// use Laravel\Fortify\Features;
// use App\Http\Controllers\NewsController;

// Route::middleware(['auth', 'verified'])->group(function () {

//     Route::get('/news/create', [NewsController::class, 'create'])->name('news.create');
//     Route::post('/news', [NewsController::class, 'store'])->name('news.store');
//     Route::get('/news', [NewsController::class, 'index'])->name('news.index');
//     Route::get('/news/{news}', [NewsController::class, 'show'])->name('news.show');
//     Route::get('/news/{news}/edit', [NewsController::class, 'edit'])->name('news.edit');
//     Route::post('/news/{news}', [NewsController::class, 'update'])->name('news.update');
//     Route::delete('/news/{news}', [NewsController::class, 'destroy'])->name('news.destroy');

// });

// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//     ]);
// })->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', [\App\Http\Controllers\DashboardController::class, 'index'])
//         ->name('dashboard');
// });

// Route::get('/cadastro', function () {
//     return Inertia::render('Cadastro');
// });

// Route::get('/ping', function () {
//     return 'pong';
// });


// require __DIR__ . '/settings.php';

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Laravel está vivo!';
});

Route::get('/ping', function () {
    return 'pong';
});
