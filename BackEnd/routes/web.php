<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EquipeController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/equipes', [EquipeController::class, 'index']);