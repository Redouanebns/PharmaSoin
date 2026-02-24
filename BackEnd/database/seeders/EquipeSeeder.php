<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EquipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('equipes')->insert([
            [
                'nom' => "Alaoui",
                'prenom' => "Ahmed",
                'role' => "Chief Pharmacist",
                'photo' => "https://randomuser.me/api/portraits/men/32.jpg",
                'description' => "desc",
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nom' => "Ahmadi",
                'prenom' => "Sara",
                'role' => "Pharmacist",
                'photo' => "https://randomuser.me/api/portraits/women/44.jpg",
                'description' => "desc",
                'created_at' => now(),
                'updated_at' => now(),
            ],
                        [
                'nom' => "Nahiri",
                'prenom' => "Youssef",
                'role' => "Pharmacist Assistant",
                'photo' => "https://randomuser.me/api/portraits/men/55.jpg",
                'description' => "desc",
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
