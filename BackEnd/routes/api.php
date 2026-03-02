<?php

<<<<<<< HEAD
use Illuminate\Support\Facades\Route;
=======
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EquipeController;
use App\Http\Controllers\ServiceController;

Route::get('/equipes', [EquipeController::class, 'index']);
Route::get('/services', [ServiceController::class, 'index']);

//
>>>>>>> feature/about
