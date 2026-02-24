<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    public function run()
    {
        $services = [
            [
                'title' => 'Prescription Dispensing',
                'description' => 'Accurate and safe dispensing of all prescription medications.',
            ],
            [
                'title' => 'Over-the-Counter Medications',
                'description' => 'Wide range of non-prescription medicines for common health issues.',
            ],
            [
                'title' => 'Parapharmaceutical Products',
                'description' => 'Health and wellness products like vitamins, supplements, and personal care items.',
            ],
            [
                'title' => 'Stock Availability Alerts',
                'description' => 'Ensuring essential medications are always in stock and avoiding shortages.',
            ],
            [
                'title' => 'Personalized Customer Support',
                'description' => 'Guidance and advice on medication use, dosages, and health questions.',
            ],
            [
                'title' => 'Fast and Secure Payments',
                'description' => 'Multiple payment options for a smooth checkout experience.',
            ],
            [
                'title' => 'Consultation and Advice',
                'description' => 'Pharmacist consultation for health guidance and treatment recommendations.',
            ],
            [
                'title' => 'Order Tracking & History',
                'description' => 'Keep track of past purchases and refill requests.',
            ],
        ];

        DB::table('services')->insert($services);
    }
}